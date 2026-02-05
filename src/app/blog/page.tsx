import { getBlogData } from "@/lib/basehub";
import { BlogIndexClient } from "./BlogIndexClient";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export const metadata = {
  title: "Blog - Dayconn",
  description: "Productivity tips, company news, and guides for mastering your schedule.",
};

export default async function BlogPage() {
  const { posts, categories } = await getBlogData();

  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-32 pb-20">
        <BlogIndexClient initialPosts={posts} categories={categories} />
      </div>
      <Footer />
    </main>
  );
}
