import { fetchRoomById } from "@/api/strapi";

interface Params {
  params: Promise<{
    id: string;
    type: string;
  }>;
}

export default async function CatalogItemPage({ params }: Params) {
  const { id, type } = await params;
  const data = await fetchRoomById(type, id, "image");
  console.log(data);

  return <div>CatalogItemPage</div>;
}
