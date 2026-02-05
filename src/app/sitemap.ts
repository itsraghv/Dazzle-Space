import { MetadataRoute } from "next";
import { getBlogData } from "@/lib/basehub";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const { posts } = await getBlogData();

  const blogPosts = posts.map((post) => ({
    url: `https://dayconn.com/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [
    {
      url: "https://dayconn.com",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: "https://dayconn.com/pricing",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://dayconn.com/changelog",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.5,
    },
    {
      url: "https://dayconn.com/blog",
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.9,
    },
    ...blogPosts,
  ];
}
