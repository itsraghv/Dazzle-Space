import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Section } from "@/components/Section";
import { Button } from "@/components/ui/Button";
import { Check } from "lucide-react";
import { getLandingPageData } from "@/lib/basehub";

export default async function Pricing() {
  const data = await getLandingPageData();
  const { title, description, plans } = data.pricing;

  return (
    <main className="min-h-screen bg-black text-white">
      <Navbar />
      <Section className="pt-48">
        <div className="text-center mb-20">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">{title}</h1>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            {description}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`p-10 rounded-3xl border ${
                plan.popular ? "border-brand-primary bg-white/5" : "border-white/10 bg-surface"
              } flex flex-col`}
            >
              {plan.popular && (
                <span className="bg-brand-primary text-black text-xs font-bold px-3 py-1 rounded-full w-fit mb-4">
                  MOST POPULAR
                </span>
              )}
              <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
              <div className="flex items-baseline gap-1 mb-4">
                <span className="text-4xl font-bold">{plan.price}</span>
                <span className="text-white/40">/month</span>
              </div>
              <p className="text-white/60 text-sm mb-8">{plan.description}</p>

              <ul className="space-y-4 mb-10 flex-1">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-center gap-3 text-sm">
                    <Check className="w-4 h-4 text-brand-secondary" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>

              <Button variant={plan.popular ? "secondary" : "outline"} className="w-full">
                Get started
              </Button>
            </div>
          ))}
        </div>
      </Section>
      <Footer />
    </main>
  );
}
