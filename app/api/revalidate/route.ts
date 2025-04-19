import { NextRequest, NextResponse } from 'next/server';
import { revalidatePath } from 'next/cache';

// manually refresh http://myroute/api/revalidate?token=your-secret-token-here

export async function GET(request: NextRequest) {
  const token = request.nextUrl.searchParams.get('token');

  if (token !== process.env.NEXT_PRIVATE_REVALIDATE_SECRET_TOKEN) {
    return NextResponse.json(
      { message: 'Invalid token' },
      { status: 401 }
    );
  }

  try {
    // Revalidate the home page
    revalidatePath('/');
    
    return NextResponse.json(
      { revalidated: true, now: Date.now() },
      { status: 200 }
    );
  } catch (err) {
    return NextResponse.json(
      { message: 'Error revalidating' },
      { status: 500 }
    );
  }
}