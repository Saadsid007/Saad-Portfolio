import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "http://localhost:3000";
  return [
    { url: `${base}/`, lastModified: new Date() },
    { url: `${base}/projects`, lastModified: new Date() },
    { url: `${base}/skills`, lastModified: new Date() },
    { url: `${base}/education`, lastModified: new Date() },
    { url: `${base}/contact`, lastModified: new Date() }
  ];
}
