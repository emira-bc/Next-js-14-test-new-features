import StaticProduct from "@/components/staticProduct/Product";
import Reviews from "@/components/reviews/Reviews";
import { fetchProductList } from "@/services/product";


export const revalidate = 50;
export const dynamic = 'force-static';
export const dynamicParams = true;

export async function generateStaticParams() {
  let posts = await fetchProductList();
  return posts.map((post) => ({
    id: post.id,
  }))
}

export default async function ProductStatic({ params: { slug } }) {

  console.log("////////////////////////////////////////Product Page\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\");

  return (
    <>
      <StaticProduct slug={slug} />
      <Reviews />
    </>
  );
}
