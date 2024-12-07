import { MetadataRoute } from "next";

import customFetchInstance from "@/services/customFetch";

const getMovieIds = async () => {
  const data = await customFetchInstance.fetch<number[]>("/movie/TotalMovieId");
  return data;
};

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const url = "https://www.cinetalk.site";
  const ids = await getMovieIds();
  const sitemap = ids.map((id) => ({
    url: `${url}/detail/${id}`,
    lastModified: new Date(),
  }));

  return [{ url, lastModified: new Date() }, ...sitemap];
}
