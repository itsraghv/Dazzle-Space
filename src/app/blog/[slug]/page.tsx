import { getBlogPostBySlug, getBlogData } from "@/lib/basehub";
import { notFound } from "next/navigation";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Section } from "@/components/Section";
import { RichText } from "@/components/RichText";
import { BlogInteractions } from "@/components/BlogInteractions";
import { Calendar, Clock, ArrowLeft, Share2 } from "lucide-react";
import Link from "next/link";
import { Metadata } from "next";

interface PostPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = await getBlogPostBySlug(slug);

  if (!post) return {};

  return {
    title: `${post.title} - Dayconn Blog`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.date,
      authors: [post.author.name],
      images: post.coverImage ? [{ url: post.coverImage }] : [],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      images: post.coverImage ? [post.coverImage] : [],
    }
  };
}

export async function generateStaticParams() {
  const { posts } = await getBlogData();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function BlogPostPage({ params }: PostPageProps) {
  const { slug } = await params;
  const post = await getBlogPostBySlug(slug);

  if (!post) notFound();

  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      <article className="pt-32 pb-20">
        <BlogInteractions postSlug={slug} />
        <Section className="py-0">
          <div className="max-w-4xl mx-auto">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-white/40 hover:text-brand-primary transition-colors mb-12 group font-medium"
            >
              <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
              Back to all posts
            </Link>

            <div className="flex flex-wrap gap-2 mb-8">
              {post.categories.map(cat => (
                <span key={cat.slug} className="px-3 py-1 rounded-full bg-brand-primary/10 text-brand-primary text-xs font-bold uppercase tracking-wider border border-brand-primary/20">
                  {cat.title}
                </span>
              ))}
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-8 tracking-tight leading-[1.1]">
              {post.title}
            </h1>

            <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 pb-12 border-b border-white/5 mb-12">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-white/20 to-transparent border border-white/10" />
                <div>
                  <p className="font-bold text-white text-lg">{post.author.name}</p>
                  <p className="text-white/40 text-sm">{post.author.role}</p>
                </div>
              </div>

              <div className="flex items-center gap-6 text-white/40 text-sm font-medium">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  <span>{new Date(post.date).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  <span>{post.readingTime}</span>
                </div>
                <button className="p-2 rounded-full hover:bg-white/5 transition-colors">
                   <Share2 className="w-4 h-4" />
                </button>
              </div>
            </div>

            <div className="relative aspect-video rounded-[2.5rem] overflow-hidden bg-white/5 mb-16 border border-white/5 shadow-2xl">
               {post.coverImage ? (
                  <img src={post.coverImage} alt={post.title} className="object-cover w-full h-full" />
               ) : (
                  <div className="w-full h-full bg-gradient-to-br from-brand-primary/10 to-brand-secondary/10 flex items-center justify-center">
                    <div className="text-white/10 font-bold text-9xl">Dayconn</div>
                  </div>
               )}
            </div>

            <div className="max-w-3xl mx-auto">
              <RichText content={post.content} />

              <div className="mt-20 pt-12 border-t border-white/5">
                <div className="p-10 rounded-[2.5rem] bg-surface border border-white/5 flex flex-col md:flex-row gap-8 items-start">
                  <div className="w-20 h-20 rounded-full bg-gradient-to-br from-white/20 to-transparent border border-white/10 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">Written by {post.author.name}</h3>
                    <p className="text-white/60 leading-relaxed mb-6">
                      {post.author.bio || `${post.author.name} is a contributor to the Dayconn blog.`}
                    </p>
                    <div className="flex gap-4">
                       <button className="text-sm font-bold text-brand-primary hover:underline transition-all">Follow on Twitter</button>
                       <button className="text-sm font-bold text-brand-primary hover:underline transition-all">View articles</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Section>
      </article>

      <Footer />
    </main>
  );
}
