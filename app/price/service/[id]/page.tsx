import { additonData } from "@/components/priceAdditionally/additonallyData";
import ServiceItem from "@/components/services/service-item";
import { notFound } from "next/navigation";

interface Params {
  params: Promise<{
    id: string;
  }>;
}

export default async function ServiceItemPage({ params }: Params) {
  // запрос на сервис по slug
  const { id } = await params;

  const data = additonData.find((item) => item.id === parseInt(id));

  if (!data) {
    notFound();
  }

  return <ServiceItem {...data} />;
}
