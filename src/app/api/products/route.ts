import { client } from "@/sanity/lib/client";
import { Product } from "@/types/Data";
import {  NextResponse } from "next/server";

export async function GET() {
    const data:Product[] = await client.fetch(`
   *[_type=="products"]{
  _id,
  name,
  description,
  price,
  "imageUrl" : image.asset->url,
  category,
  discountPercent,
  "isNew": new,
  colors,
  sizes
}
    `);
    return NextResponse.json(data);
}