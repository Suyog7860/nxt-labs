"use client";

import dynamic from "next/dynamic";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { useEffect, useState } from "react";

const SceneCanvas = dynamic(() => import("@/components/SceneCanvas"), { ssr: false, loading: () => null });

export default function HeroExperience() {
  const [sceneEnabled, setSceneEnabled] = useState(false);
  const [mobile, setMobile] = useState(false);

  useEffect(() => {
    const mobileQuery = window.matchMedia("(max-width: 700px)");
    const updateMobile = () => setMobile(mobileQuery.matches);
    updateMobile();
    mobileQuery.addEventListener("change", updateMobile);
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return () => mobileQuery.removeEventListener("change", updateMobile);

    const probe = document.createElement("canvas");
    const supportsWebGL = Boolean(probe.getContext("webgl2") || probe.getContext("webgl") || probe.getContext("experimental-webgl"));
    if (!supportsWebGL) return () => mobileQuery.removeEventListener("change", updateMobile);
    const scene = document.querySelector(".hero-scene");
    if (!scene) return () => mobileQuery.removeEventListener("change", updateMobile);

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) { setSceneEnabled(true); observer.disconnect(); }
    }, { rootMargin: "160px" });
    observer.observe(scene);
    return () => { mobileQuery.removeEventListener("change", updateMobile); observer.disconnect(); };
  }, []);

  return (
    <section className="hero-section" id="home" aria-labelledby="hero-title">
      <div className="hero-shell">
        <div className="hero-copy">
          <p className="hero-kicker"><i /> NXT LABS DIGITAL SERVICES</p>
          <h1 className="hero-title" id="hero-title"><span>BUILD.</span><span>INNOVATE.</span><span>GROW.</span></h1>
          <p className="hero-subtitle">Turning ideas into digital solutions.</p>
          <p className="hero-description">We build modern websites, web applications, and custom software solutions that help businesses create a stronger digital presence and grow.</p>
          <div className="hero-actions"><a className="button button-bright" href="#contact">Start your project <ArrowUpRight aria-hidden="true" /></a><a className="button button-ghost" href="#services">View our services</a></div>
          <div className="hero-tags" aria-label="Our focus"><span>Web development</span><span>Web applications</span><span>Software solutions</span></div>
        </div>
        <div className="hero-scene" aria-hidden="true">
          <div className="scene-fallback"><div className="fallback-ring" /><div className="fallback-ring fallback-ring-two" /><div className="fallback-diamond"><span>N</span></div><i className="fallback-node fallback-node-one" /><i className="fallback-node fallback-node-two" /><i className="fallback-node fallback-node-three" /></div>
          {sceneEnabled && <SceneCanvas mobile={mobile} />}
          <div className="hero-scene-caption"><span>Digital / in motion</span><span>Build / 001</span></div>
        </div>
      </div>
      <a className="hero-scroll" href="#services"><ArrowDown aria-hidden="true" /> Scroll to explore</a>
    </section>
  );
}