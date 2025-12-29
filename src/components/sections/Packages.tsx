// src/components/sections/Packages.tsx
"use client";

import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin'; // --- Step 1: Import ScrollToPlugin ---
import { ChevronDown, ArrowRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

// --- Step 2: Add the new "Enterprise Architect" custom package to the data array ---
const packagesData = [
  {
    title: "Senior Software Engineer",
    tagline: "Verisk Analytics",
    features: [
      { name: "", value: "Led development of scalable backend services supporting data analytics and business platforms." },
      { name: "", value: "Designed APIs and data pipelines with a focus on performance, security, and reliability." },
      { name: "", value: "Worked with cloud infrastructure and modern CI/CD pipelines in production environments." },
      { name: "", value: "Mentored junior engineers and contributed to architectural decisions and best practices." },
    ],
    timeline: "02/2023 - 10/2025",
  },
  {
    title: "Software Engineer",
    tagline: "IPC Systems, Inc.",
    features: [
      { name: "", value: "Designed and implemented backend components for enterprise communication and trading systems." },
      { name: "", value: "Worked on distributed systems running in Linux environments with high availability requirements." },
      { name: "", value: "Integrated software with internal platforms, databases, and third-party services." },
      { name: "", value: "Participated in code reviews, testing, and production deployments in an agile team." },
    ],
    timeline: "07/2019 - 01/2023",
  },
  {
    title: "Software Developer",
    tagline: "itBit (Paxos Trust Company)",
    features: [
      { name: "", value: "Developed and maintained backend services for user accounts, trading, and transaction workflows." },
      { name: "", value: "Built and supported RESTful APIs for internal tools and external integrations." },
      { name: "", value: "Assisted with database design, data consistency, and basic performance tuning" },
      { name: "", value: "Collaborated with senior engineers to debug production issues and improve system reliability." },
    ],
    timeline: "07/2018 - 06/2019",
  },
];

const Packages = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(1);
  const sectionRef = useRef<HTMLElement>(null);
  const revealRefs = useRef<(HTMLDivElement | null)[]>([]);

  // --- Step 3: Create a GSAP-powered scroll handler ---
  const handleContactScroll = () => {
    gsap.to(window, {
      duration: 1.8,
      scrollTo: { y: '#contact', offsetY: 0 },
      ease: 'power3.inOut'
    });
  };

  // ... (GSAP and Accordion useEffects remain unchanged as they are robust) ...
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(sectionRef.current, { autoAlpha: 0 }, { autoAlpha: 1, duration: 1, ease: 'power3.out', scrollTrigger: { trigger: sectionRef.current, start: 'top 70%', } });
      gsap.fromTo('.stagger-reveal', { y: 50, autoAlpha: 0 }, { y: 0, autoAlpha: 1, stagger: 0.15, duration: 0.8, ease: 'power3.out', scrollTrigger: { trigger: sectionRef.current, start: 'top 60%', } });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  useEffect(() => {
    revealRefs.current.forEach((panel, index) => {
      const content = panel?.querySelector('.package-content');
      const chevron = panel?.querySelector('.chevron-icon');
      if (!content || !chevron) return;
      gsap.to(chevron, { rotate: activeIndex === index ? 180 : 0, duration: 0.5, ease: 'power3.inOut' });
      if (activeIndex === index) {
        gsap.set(content, { height: 'auto' });
        gsap.from(content, { height: 0, duration: 0.6, ease: 'power3.inOut' });
        gsap.fromTo(content.querySelectorAll('.content-stagger'), { autoAlpha: 0, y: 15 }, { autoAlpha: 1, y: 0, stagger: 0.05, duration: 0.5, ease: 'power2.out', delay: 0.2 });
      } else {
        gsap.to(content, { height: 0, duration: 0.6, ease: 'power3.inOut' });
      }
    });
  }, [activeIndex]);

  const handleToggle = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="packages" ref={sectionRef} className="relative py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <h2 className="stagger-reveal text-4xl md:text-5xl font-bold tracking-tighter text-center mb-10" data-cursor-text>
          Experience
        </h2>
        <p className="stagger-reveal text-center text-secondary mb-16 max-w-3xl mx-auto bg-surface/30 backdrop-blur-sm p-4 rounded-lg border border-secondary/10">
          <strong>Experiences : </strong> Collaborated with cross-functional teams to successfully deliver projects from planning to deployment.
        </p>

        <div className="stagger-reveal border-t border-secondary/10">
          {packagesData.map((pkg, index) => (
            <div key={index} ref={el => {revealRefs.current[index] = el}} className="package-item border-b border-secondary/10">
              <button onClick={() => handleToggle(index)} className={`w-full text-left p-6 md:p-8 flex justify-between items-center transition-colors duration-300 ${activeIndex === index ? 'bg-surface/50' : 'hover:bg-surface/30'}`} aria-expanded={activeIndex === index} data-cursor-hover>
                <div className="flex-1">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:gap-4">
                    <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-primary">{pkg.title}</h3>
                  </div>
                  <p className="text-secondary mt-2">{pkg.tagline}</p>
                </div>
                <ChevronDown className={`chevron-icon flex-shrink-0 ml-4 sm:ml-6 text-secondary transition-transform duration-500 ${activeIndex === index ? 'text-accent' : ''}`} size={28} />
              </button>
              <div className="package-content h-0 overflow-hidden bg-surface/30">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 p-6 md:p-8 border-t border-accent/20">
                  <div className="md:col-span-2">
                    <ul className="space-y-4">
                      {pkg.features.map(feature => (
                        <li key={feature.name} className="content-stagger flex flex-col md:flex-row md:items-baseline">
                          <strong className="w-full text-primary/80 font-semibold md:w-40 md:flex-shrink-0">{feature.name}•</strong>
                          <span className="text-secondary md:ml-2">{feature.value}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="flex flex-col items-start md:items-end justify-between mt-6 md:mt-0">
                    <div className="text-left md:text-right w-full">
                      <div className="content-stagger">
                        <p className="text-secondary uppercase tracking-wider text-sm">Development Time</p>
                        <p className="text-primary text-lg md:text-xl font-semibold">{pkg.timeline}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="stagger-reveal mt-16 text-center text-secondary bg-surface/30 backdrop-blur-sm p-6 rounded-lg border border-secondary/10">
          <h4 className="font-bold text-primary text-xl mb-2">API Development & Integration</h4>
          <p>I build fast, secure, and scalable APIs using Node.js or Python, designed to connect your frontend, database, and external services. Whether you need a custom REST API, third-party integration, or a full backend system, I deliver clean architecture and reliable performance.</p>
        </div>
      </div>
    </section>
  );
};

export default Packages;