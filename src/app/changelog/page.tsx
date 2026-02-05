import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Section } from "@/components/Section";
import { getLandingPageData } from "@/lib/basehub";

export default async function Changelog() {
  const data = await getLandingPageData();
  const { title, updates } = data.changelog;

  return (
    <main className="min-h-screen bg-black text-white">
      <Navbar />
      <Section className="pt-48">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-5xl font-bold tracking-tight mb-12">{title}</h1>
          <div className="space-y-20">
            {updates.map((update) => (
              <div key={update.version} className="relative pl-12 border-l border-white/10">
                <div className="absolute left-0 top-0 -translate-x-1/2 w-4 h-4 rounded-full bg-brand-primary border-4 border-black" />
                <div className="mb-4">
                  <span className="text-brand-secondary font-mono text-sm">{update.version}</span>
                  <span className="mx-2 text-white/20">•</span>
                  <span className="text-white/40 text-sm">{update.date}</span>
                </div>
                <h2 className="text-3xl font-bold mb-4">{update.title}</h2>
                <p className="text-white/60 text-lg leading-relaxed">
                  {update.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Section>
      <Footer />
    </main>
  );
}
