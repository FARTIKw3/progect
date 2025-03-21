import { ILivingRoom, StrapiType } from "@/interfaces/strapiData";
import ky from "ky";

export const strapiApi = ky.create({
  prefixUrl: process.env.NEXT_PUBLIC_STRAPI_API,
});
export const fetchLivingRoom = async (
  populate?: string
): Promise<StrapiType<ILivingRoom[]>> => {
  return strapiApi
    .get("api/living-rooms", {
      searchParams: {
        populate: populate ? populate : "",
      },
    })
    .json();
};
export const fetchChildrenRoom = async (
  populate?: string
): Promise<StrapiType<ILivingRoom[]>> => {
  return strapiApi
    .get("api/childrens-rooms", {
      searchParams: {
        populate: populate ? populate : "",
      },
    })
    .json();
};
export const fetchCorridorsRoom = async (
  populate?: string
): Promise<StrapiType<ILivingRoom[]>> => {
  return strapiApi
    .get("api/corridor-rooms", {
      searchParams: {
        populate: populate ? populate : "",
      },
    })
    .json();
};
export const fetchKitchen = async (
  populate?: string
): Promise<StrapiType<ILivingRoom[]>> => {
  return strapiApi
    .get("api/corridor-rooms", {
      searchParams: {
        populate: populate ? populate : "",
      },
    })
    .json();
};

export const fetchBathroom = async (
  populate?: string
): Promise<StrapiType<ILivingRoom[]>> => {
  return strapiApi
    .get("api/sanuzlies", {
      searchParams: {
        populate: populate ? populate : "",
      },
    })
    .json();
};
export const fetchBedroom = async (
  populate?: string
): Promise<StrapiType<ILivingRoom[]>> => {
  return strapiApi
    .get("api/bedrooms", {
      searchParams: {
        populate: populate ? populate : "",
      },
    })
    .json();
};
