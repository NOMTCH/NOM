 "use client";

import type { PressEvent } from "@react-aria/interactions";

import { Button, Link } from "@heroui/react";
import { Icon } from "@iconify/react";

import { DATA } from "@/data";
import { TechScroll } from "@/components/home/tech-scroll";
import { SpaceBackground } from "@/components/backgrounds/space-background";
import { GradientText } from "@/components/textAnimations/gradient-text";

export const HeroSection = ({
  showBackground = true,
  name: _name = DATA.home.hero.name,
  title: _title = DATA.home.hero.title,
  subtitle: _subtitle = DATA.home.hero.subtitle,
}: {
  showBackground?: boolean;
  name?: string;
  title?: string;
  subtitle?: string;
}) => {
  const scrollToWork = (_e: PressEvent) => {
    const workSection = document.getElementById("work-section");

    if (workSection) {
      workSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="min-h-[calc(100vh-64px)] flex flex-col items-center justify-between relative overflow-hidden bg-background/70 dark:bg-background/40 backdrop-blur-sm py-8 md:py-0">
      {showBackground && <SpaceBackground />}

      <div className="container mx-auto px-4 sm:px-6 z-10 flex-1 flex items-center w-full">
        <div className="text-center max-w-4xl mx-auto w-full px-2">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 leading-tight px-2">
            <GradientText
              neon
              className="block"
              text="Designing Visual Identities & Modern Web Experiences"
            />
          </h1>

          <p className="text-foreground-600 text-base sm:text-lg md:text-xl mb-6 md:mb-8 leading-relaxed px-2">
            Graphic Designer, Logo Designer, and Front-End Developer focused on creating clean,
            impactful digital products.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-stretch sm:items-center px-2">
            <Link
              download
              aria-label="Download Offer in PDF format"
              className="w-full sm:w-auto"
              href="/Penawaran WEB 2026.pdf"
            >
              <div className="w-full">
                <Button
                  fullWidth
                  aria-label="Download Offer"
                  className="w-full transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,240,255,0.5)]"
                  color="primary"
                  endContent={<Icon icon="lucide:download" />}
                  size="lg"
                  variant="shadow"
                >
                  Download Offer
                </Button>
              </div>
            </Link>
            <div className="w-full sm:w-auto">
              <Button
                fullWidth
                aria-label="View Work"
                className="w-full transition-all duration-300 hover:border-[#00F0FF] hover:text-[#00F0FF] hover:shadow-[0_0_20px_rgba(0,240,255,0.3)]"
                color="primary"
                endContent={<Icon icon="lucide:arrow-down" />}
                size="lg"
                variant="bordered"
                onPress={scrollToWork}
              >
                View Work
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Tech Stack Scrolling Section */}
      <div className="w-full z-10 pb-4 md:pb-8 mt-auto">
        <TechScroll />
      </div>
    </section>
  );
};

