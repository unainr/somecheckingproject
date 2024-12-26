import { NextResponse } from 'next/server';
import { createClient } from 'next-sanity';

const sanityClient = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
  apiVersion: '2023-01-01', // Replace with your Sanity API version
  useCdn: true, // Set to true for public datasets
});

export async function GET() {
  try {
    const products = await sanityClient.fetch(`*[_type == "product"]`);
    return NextResponse.json(products, { status: 200 });
  } catch (error:any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
