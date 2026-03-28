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
    title: "Lead Software Engineer",
    tagline: "Optomi",
    features: [
      { name: "", value: "Led the architecture and development of AI-powered enterprise platforms using Python, Node.js, FastAPI, and microservices architecture to support scalable internal tools and client-facing applications." },
      { name: "", value: "Designed and implemented LLM-based automation systems using OpenAI APIs, LangChain, and Hugging Face Transformers to power intelligent workflows and AI-assisted decision systems." },
      { name: "", value: "Built high-performance RESTful and GraphQL APIs to connect AI services, backend platforms, and front-end applications developed with React and TypeScript." },
      { name: "", value: "Developed large-scale data pipelines and ETL workflows using Apache Kafka, Python, and cloud-based processing services to prepare datasets for machine learning models." },
      { name: "", value: "Implemented vector search and semantic retrieval systems using Pinecone / FAISS and embeddings to enable advanced AI-powered knowledge retrieval." },
      { name: "", value: "Managed data infrastructure using PostgreSQL, MongoDB, Redis, and Elasticsearch, ensuring efficient storage and fast query performance." },
      { name: "", value: "Deployed scalable AI services using Docker, Kubernetes, and AWS cloud infrastructure, implementing CI/CD pipelines for reliable automated deployments." },
      { name: "", value: "Collaborated with product managers, designers, and engineering teams to deliver scalable AI platforms, intelligent automation tools, and highperformance backend services." },
    ],
    timeline: "09/2024 - 07/2025",
  },
  {
    title: "Senior Software Engineer",
    tagline: "North Star",
    features: [
      { name: "", value: "Designed and developed AI-driven recruitment and analytics platforms using Python, Node.js, FastAPI, and scalable microservices architectures." },
      { name: "", value: "Built machine learning and NLP pipelines using TensorFlow, PyTorch, Scikit-learn, and Hugging Face for resume parsing, candidate ranking, and automated talent matching." },
      { name: "", value: "Implemented LLM-assisted processing pipelines using LangChain, OpenAI APIs, and vector databases to improve candidate analysis and semantic search capabilities." },
      { name: "", value: "Developed backend APIs and services using REST, GraphQL, and asynchronous processing frameworks to handle high-volume candidate data processing." },
      { name: "", value: "Built scalable data ingestion and transformation pipelines using Apache Kafka, Airflow, and Python for processing structured and unstructured recruitment datasets." },
      { name: "", value: "Integrated external platforms including ATS systems, CRM tools, communication services, and analytics platforms through secure API integrations." },
      { name: "", value: "Managed application data using PostgreSQL, MongoDB, Redis, and Elasticsearch, optimizing database queries and caching strategies for performance." },
      { name: "", value: "Deployed AI services and backend infrastructure using AWS, Docker, Kubernetes, and automated CI/CD pipelines" },
    ],
    timeline: "08/2020 - 03/2024",
  },
  {
    title: "Software Engineer",
    tagline: "Vazkor Technologies",
    features: [
      { name: "", value: "Developed scalable backend systems and APIs using Python, Node.js, Django, Flask, and microservices architecture for enterprise applications and data platforms." },
      { name: "", value: "Built machine learning pipelines and predictive analytics systems using Scikit-learn, TensorFlow, and Python-based data processing frameworks." },
      { name: "", value: "Designed ETL and data engineering workflows using Python, Apache Airflow, and distributed processing systems to collect, transform, and deliver large datasets for analytics and AI models." },
      { name: "", value: "Implemented asynchronous services and message-driven architectures using Apache Kafka and Redis queues for high-throughput data processing." },
      { name: "", value: "Integrated machine learning models and analytics engines into production applications to support intelligent decision-making systems." },
      { name: "", value: "Optimized database performance and data access layers using PostgreSQL, MongoDB, and Redis caching strategies." },
      { name: "", value: "Built and deployed applications using Docker containers, cloud infrastructure, and CI/CD pipelines, ensuring scalable and reliable system performance." },
    ],
    timeline: "04/2015 - 09/2019",
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
