"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactSplit from '@/components/sections/contact/ContactSplit';
import FeatureCardOne from '@/components/sections/feature/FeatureCardOne';
import FooterMedia from '@/components/sections/footer/FooterMedia';
import HeroBillboard from '@/components/sections/hero/HeroBillboard';
import MediaAbout from '@/components/sections/about/MediaAbout';
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import TestimonialCardFifteen from '@/components/sections/testimonial/TestimonialCardFifteen';

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="elastic-effect"
        defaultTextAnimation="background-highlight"
        borderRadius="rounded"
        contentWidth="compact"
        sizing="largeSmallSizeLargeTitles"
        background="fluid"
        cardStyle="glass-elevated"
        primaryButtonStyle="radial-glow"
        secondaryButtonStyle="layered"
        headingFontWeight="normal"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarStyleApple
      navItems={[
        {
          name: "Home",
          id: "home",
        },
        {
          name: "About",
          id: "about",
        },
        {
          name: "Services",
          id: "services",
        },
        {
          name: "Testimonials",
          id: "testimonials",
        },
        {
          name: "Contact",
          id: "contact",
        },
      ]}
      brandName="Flourish & Fix Maintenance"
    />
  </div>

  <div id="home" data-section="home">
      <HeroBillboard
      background={{
        variant: "plain",
      }}
      title="Reliable Maintenance. Quality You Can Trust."
      description="From quick repairs to detailed finishes, we deliver fast, professional service that keeps your home and business running smoothly."
      buttons={[
        {
          text: "Get a Free Quote",
          href: "#contact",
        },
        {
          text: "Our Services",
          href: "#services",
        },
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/construction-tools-textured-grunge-paper-consisting-pipe-wrench-screwdriver-metal-hammer-free-copy-space-top_211682-105.jpg"
      videoSrc="http://img.b2bpic.net/free-photo/portrait-happy-auto-repairman-looking-camera-while-his-customers-are-standing-background_637285-7790.jpg"
      mediaAnimation="opacity"
      imageAlt="Maintenance workers fixing home"
      videoAriaLabel="Hero video showing workers performing maintenance"
    />
  </div>

  <div id="about" data-section="about">
      <MediaAbout
      useInvertedBackground={false}
      title="Built on Quality. Driven by Trust."
      description="At Flourish and Fix Maintenance, we take pride in delivering fast, reliable, and high-quality workmanship. Whether it’s a small repair or a detailed project like tiling, we approach every job with precision and care.\n\nOur goal is simple: To leave every space better than we found it.\n\nWhy Choose Flourish & Fix:\n✅ Fast & Reliable Service\n✅ Attention to Detail\n✅ Consistent 5-Star Satisfaction\n✅ Professional & Friendly Team\n✅ Quality Work That Lasts"
      tag="About Us"
      tagAnimation="opacity"
      buttonAnimation="opacity"
      imageSrc="http://img.b2bpic.net/free-photo/medium-shot-people-working-together_23-2150290087.jpg"
      imageAlt="Professional maintenance team discussing a project"
    />
  </div>

  <div id="services" data-section="services">
      <FeatureCardOne
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="four-items-2x2-equal-grid"
      useInvertedBackground={false}
      features={[
        {
          title: "Tiling",
          description: "Expert tiling with clean finishes and long-lasting quality.",
          imageSrc: "http://img.b2bpic.net/free-photo/view-tiling-floor-concept_23-2149344007.jpg",
          imageAlt: "Worker installing tiles with precision",
        },
        {
          title: "General Maintenance",
          description: "Repairs, installations, and upkeep for homes and businesses.",
          imageSrc: "http://img.b2bpic.net/free-photo/woman-fixing-plug_53876-20682.jpg",
          imageAlt: "Maintenance worker performing general repairs",
        },
        {
          title: "Plumbing Fixes",
          description: "Quick and efficient solutions for leaks, fittings, and more.",
          imageSrc: "http://img.b2bpic.net/free-photo/modern-man-spending-time-kitchen_23-2149075011.jpg",
          imageAlt: "Plumber fixing a pipe under a sink",
        },
        {
          title: "Property Repairs",
          description: "From small fixes to larger improvements — we handle it all.",
          imageSrc: "http://img.b2bpic.net/free-photo/full-shot-roofers-working-with-helmets_23-2149343708.jpg",
          imageAlt: "Worker repairing a facade of a building",
        },
      ]}
      title="Our Services"
      description="We offer a comprehensive range of professional maintenance solutions to help your space flourish."
      tagAnimation="opacity"
      buttonAnimation="opacity"
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardFifteen
      useInvertedBackground={false}
      testimonial="“Fast, reliable and professional service. Highly recommended! We truly appreciate your support and are always ready to help again.”"
      rating={5}
      author="Satisfied Client"
      avatars={[
        {
          src: "http://img.b2bpic.net/free-photo/close-up-confident-businessman-white-shirt-looking-left-smiling-satisfied-standing_1258-26772.jpg",
          alt: "Sarah Johnson",
        },
        {
          src: "http://img.b2bpic.net/free-photo/portrait-young-man-with-dark-curly-hair_176532-8137.jpg",
          alt: "Michael Chen",
        },
        {
          src: "http://img.b2bpic.net/free-photo/young-dark-haired-woman-clenches-teeth-joy-dressed-denim-shirt-white-top-having-good-mood-face-expression-feelings-emotions_176420-10518.jpg",
          alt: "Emily Rodriguez",
        },
        {
          src: "http://img.b2bpic.net/free-photo/portrait-man-black-suit_23-2148401442.jpg",
          alt: "David Kim",
        },
        {
          src: "http://img.b2bpic.net/free-photo/startup-project-manager-developing-budget-growth-solutions-while-brainstorming-promoting-strategy-financial-department-team-leader-researching-marketing-ideas-while-analyzing-company-expenses-report_482257-40321.jpg",
          alt: "Jessica Lee",
        },
      ]}
      ratingAnimation="blur-reveal"
      avatarsAnimation="blur-reveal"
      tag="What Our Clients Say"
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactSplit
      useInvertedBackground={false}
      background={{
        variant: "plain",
      }}
      tag="Get in Touch"
      title="Need something fixed? Let’s get it done."
      description="We respond quickly and deliver results you can trust. Limited availability – book your service now. For quick queries or to book via WhatsApp, contact us directly at +27 (0)xx xxx xxxx."
      imageSrc="http://img.b2bpic.net/free-photo/man-having-videocall-work_23-2148940774.jpg"
      imageAlt="Maintenance workers discussing plans on a tablet"
      mediaAnimation="slide-up"
      mediaPosition="right"
      inputPlaceholder="Enter your email for a quick quote"
      buttonText="Request a Quote"
      termsText="By requesting a quote, you're confirming that you agree with our Terms and Conditions."
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterMedia
      imageSrc="http://img.b2bpic.net/free-vector/technological-background-with-links-circuits_1035-4299.jpg"
      imageAlt="Modern building exterior at sunset"
      columns={[
        {
          title: "Company",
          items: [
            {
              label: "About Us",
              href: "#about",
            },
            {
              label: "Services",
              href: "#services",
            },
            {
              label: "Testimonials",
              href: "#testimonials",
            },
          ],
        },
        {
          title: "Support",
          items: [
            {
              label: "Contact Us",
              href: "#contact",
            },
            {
              label: "FAQ",
              href: "#",
            },
            {
              label: "Privacy Policy",
              href: "#",
            },
          ],
        },
        {
          title: "Connect",
          items: [
            {
              label: "WhatsApp",
              href: "https://wa.me/yournumber",
            },
            {
              label: "Facebook",
              href: "https://facebook.com",
            },
            {
              label: "Instagram",
              href: "https://instagram.com",
            },
          ],
        },
      ]}
      logoText="Flourish & Fix Maintenance"
      copyrightText="© 2024 Flourish & Fix Maintenance. All rights reserved."
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
