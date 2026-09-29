"use client";

import { ArrowUpRight, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

const links = [["Services", "#services"], ["About", "#about"], ["Projects", "#projects"], ["Process", "#process"], ["Contact", "#contact"]];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const updateScroll = () => setScrolled(window.scrollY > 12);
    updateScroll();
    window.addEventListener("scroll", updateScroll, { passive: true });
    return () => window.removeEventListener("scroll", updateScroll);
  }, []);

  useEffect(() => {
    if (!menuOpen) return;
    const closeOnEscape = (event: KeyboardEvent) => { if (event.key === "Escape") setMenuOpen(false); };
    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);
  return (
    <header className={`site-header${scrolled ? " is-scrolled" : ""}`}>
      <div className="nav-inner">
        <a className="brand" href="#home" aria-label="NXT LABS home" onClick={closeMenu}><span className="brand-mark" aria-hidden="true"><i /><i /><i /></span><span className="brand-name">NXT<span>LABS</span></span></a>
        <nav className="desktop-nav" aria-label="Main navigation"><a href="#home">Home</a>{links.map(([label, href]) => <a href={href} key={href}>{label}</a>)}<a className="nav-cta" href="#contact">Let&apos;s build <ArrowUpRight aria-hidden="true" /></a></nav>
        <button className="mobile-menu-button" type="button" aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"} aria-expanded={menuOpen} aria-controls="mobile-navigation" onClick={() => setMenuOpen((open) => !open)}>{menuOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}</button>
      </div>
      {menuOpen && <nav className="mobile-nav" id="mobile-navigation" aria-label="Mobile navigation"><a href="#home" onClick={closeMenu}>Home</a>{links.map(([label, href]) => <a href={href} key={href} onClick={closeMenu}>{label}</a>)}<a href="#contact" onClick={closeMenu}>Let&apos;s build <ArrowUpRight aria-hidden="true" /></a></nav>}
    </header>
  );
}