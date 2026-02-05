import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { TrustedBy } from "@/components/TrustedBy";
import { FeatureRow } from "@/components/FeatureRow";
import { FeatureGrid } from "@/components/FeatureGrid";
import { HowItWorks } from "@/components/HowItWorks";
import { Testimonials } from "@/components/Testimonials";
import { FAQ } from "@/components/FAQ";
import { CTA } from "@/components/CTA";
import { Footer } from "@/components/Footer";
import { getLandingPageData } from "@/lib/basehub";

export default async function Home() {
  const data = await getLandingPageData();

  return (
    <main className="min-h-screen bg-black text-white">
      <Navbar />
      <Hero
        title={data.hero.title}
        description={data.hero.description}
        ctaPrimary={data.hero.ctaPrimary}
        ctaSecondary={data.hero.ctaSecondary}
      />
      <TrustedBy />

      {data.features.map((feature, idx) => (
        <FeatureRow
          key={idx}
          title={feature.title}
          description={feature.description}
          ctaText={feature.cta}
          reverse={feature.reverse}
        />
      ))}

      <FeatureGrid
        title={data.featureGrid.title}
        description={data.featureGrid.description}
        items={data.featureGrid.items}
      />

      <HowItWorks
        title={data.howItWorks.title}
        subtitle={data.howItWorks.subtitle}
        steps={data.howItWorks.steps}
      />

      <Testimonials
        title={data.testimonials.title}
        description={data.testimonials.description}
        items={data.testimonials.items}
      />

      <FAQ
        title={data.faq.title}
        items={data.faq.items}
      />

      <CTA
        title={data.cta.title}
        description={data.cta.description}
        ctaPrimary={data.cta.ctaPrimary}
        ctaSecondary={data.cta.ctaSecondary}
      />

      <Footer />
    </main>
  );
}
