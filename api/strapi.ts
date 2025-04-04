import { StrapiType } from "@/interfaces/strapiData";
import ky from "ky";

export const strapiApi = ky.create({
  prefixUrl: process.env.NEXT_PUBLIC_STRAPI_API,
});

export const fetchRooms = async <T>(
  endpoint: string,
  populate: string
): Promise<StrapiType<T[]>> => {
  return strapiApi
    .get(`api/${endpoint}`, {
      searchParams: {
        populate: populate || "",
      },
    })
    .json();
};
export const fetchRoomById = async <T>(
  endpoint: string,
  documentId: string,
  populate: string
): Promise<StrapiType<T>> => {
  return strapiApi
    .get(`api/${endpoint}`, {
      searchParams: {
        "filters[documentId][$eq]": documentId,
        populate: populate || "",
      },
    })
    .json();
};
