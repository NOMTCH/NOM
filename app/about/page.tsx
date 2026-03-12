import { Skills } from "@/components/about/skills";
import { SectionHeader } from "@/components/about/section-header";
import { PageHeader } from "@/components/page-header";
import { DATA } from "@/data";

export default function AboutPage() {
  const { experience, profile } = DATA.about;
  const tech = DATA.about.technologies;

  return (
    <section className="py-20 bg-background/80 dark:bg-background/40 backdrop-blur-sm relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#C400FF]/5 via-transparent to-[#00F0FF]/5 pointer-events-none" />
      <div className="px-6 md:px-12 max-w-5xl mx-auto relative z-10">
        <PageHeader texts={DATA.morphingTexts.about} />

        <div className="mt-10 mb-16">
          <SectionHeader icon="lucide:user-pen" title="About Me" />
          <div className="space-y-4 text-foreground-600 text-base md:text-lg leading-relaxed">
            <p>
              I’m NOM, a professional freelance graphic designer, logo designer, and front-end
              developer based in Cianjur, West Java. I help brands and businesses translate their
              ideas into clear visual identities and modern, responsive websites.
            </p>
            <p>
              Over the years I’ve worked with clients from different industries – from local shops to
              growing companies – delivering brand identities, marketing materials, and web
              experiences that feel consistent and professional across every touchpoint.
            </p>
            <p>
              As a freelancer, I value good communication, clear timelines, and results that actually
              support your business goals – not just beautiful visuals. If you need a reliable
              creative partner to handle both design and front-end implementation, I’m here to help.
            </p>
          </div>
        </div>

        <Skills tech={tech} />
      </div>
    </section>
  );
}
