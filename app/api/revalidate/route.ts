import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  const secret = req.headers.get('sanity-secret');
  if (secret !== process.env.SANITY_SECRET) {
    return NextResponse.json({ message: 'Invalid secret' }, { status: 401 });
  }

  try {
    // Revalidate your pages here
    await fetch(
      `https://${process.env.VERCEL_URL}/api/revalidate?path=/`
    );
    return NextResponse.json({ revalidated: true }, { status: 200 });
  } catch (err) {
    return NextResponse.json({ message: 'Revalidation failed' }, { status: 500 });
  }
}
