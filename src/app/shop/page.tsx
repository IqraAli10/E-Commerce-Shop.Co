
import ProductSections from "@/components/ProductSections";
import { GET } from "@/app/api/products/route";

export default async function ProductPage() {
  const NextResponse = await GET();
  const products = await NextResponse.json();

  return <ProductSections products={products} />;
}
