"use client";

import { ArrowUpRight, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";

type Project = { id: string; name: string; type: string; category: "Websites" | "Web Apps" | "Software"; description: string; technology: string; detail: string };
const projects: Project[] = [
  { id: "01", name: "Northline Studio", type: "Business website", category: "Websites", description: "A considered digital home for a design-led independent studio.", technology: "Next.js · Tailwind CSS", detail: "An editorial-style studio website concept with a responsive portfolio, clear service pages, and a streamlined inquiry flow." },
  { id: "02", name: "Fieldnotes Market", type: "E-commerce concept", category: "Websites", description: "A clear, modern storefront concept for thoughtfully made goods.", technology: "React · CSS · Node.js", detail: "A sample retail experience exploring product discovery, clear product details, and a mobile-first shopping journey." },
  { id: "03", name: "Signal Workspace", type: "Web application", category: "Web Apps", description: "A focused project overview for teams balancing multiple priorities.", technology: "React · TypeScript · SQL", detail: "A dashboard concept with an overview, project status views, and a task workflow for a small team." },
  { id: "04", name: "Clearview Console", type: "Business dashboard", category: "Software", description: "A data-rich interface that keeps key operational signals in view.", technology: "Next.js · Charts · SQL", detail: "An admin console concept built around readable metrics, organized filters, and adaptable data tables." },
  { id: "05", name: "Kinfolk Health", type: "Landing page", category: "Websites", description: "A warm first impression for a neighborhood wellness practice.", technology: "HTML5 · CSS3 · JavaScript", detail: "A one-page service introduction concept with accessible content, location details, and a clear appointment inquiry path." },
  { id: "06", name: "Relay Operations", type: "Custom software", category: "Software", description: "A workflow tool concept for bringing recurring tasks together.", technology: "React · Node.js · SQL", detail: "A custom internal tool concept for organizing recurring work, reducing duplicate steps, and surfacing important hand-offs." },
];
const filters = ["All", "Websites", "Web Apps", "Software"] as const;
type Filter = (typeof filters)[number];

function Preview({ tone }: { tone: string }) {
  return <div className="project-preview" data-tone={Number(tone)} aria-hidden="true"><span className="project-demo-badge">Demo concept</span><div className="preview-browser"><div className="preview-browser-bar"><i /><i /><i /></div><div className="preview-site"><div className="preview-lines"><i /><i /><i /><i /></div><div className="preview-graphic" /></div></div></div>;
}

export default function Projects() {
  const [filter, setFilter] = useState<Filter>("All");
  const [activeProject, setActiveProject] = useState<Project | null>(null);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const visibleProjects = filter === "All" ? projects : projects.filter((project) => project.category === filter);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (activeProject && !dialog.open) dialog.showModal();
    if (!activeProject && dialog.open) dialog.close();
  }, [activeProject]);

  return <>
    <div className="project-toolbar"><div className="project-filters" role="group" aria-label="Filter demo concepts">{filters.map((item) => <button className="project-filter" type="button" key={item} aria-pressed={filter === item} onClick={() => setFilter(item)}>{item}</button>)}</div><p className="project-demo-note">Concept work / not client projects</p></div>
    <div className="project-grid" aria-live="polite">{visibleProjects.map((project) => <article className="project-card" key={project.id}><Preview tone={project.id} /><div className="project-info"><span className="project-type">{project.type}</span><h3>{project.name}</h3><p>{project.description}</p><div className="project-meta"><span>{project.technology}</span><button type="button" onClick={() => setActiveProject(project)} aria-label={`View ${project.name} demo concept`}>View project <ArrowUpRight aria-hidden="true" /></button></div></div></article>)}</div>
    <dialog className="project-dialog" ref={dialogRef} onClose={() => setActiveProject(null)} onClick={(event) => { if (event.target === dialogRef.current) dialogRef.current?.close(); }}>
      {activeProject && <div className="dialog-inner"><div className="dialog-topline"><span>Concept / {activeProject.id}</span><button className="dialog-close" type="button" aria-label="Close project details" onClick={() => dialogRef.current?.close()}><X aria-hidden="true" /></button></div><span className="dialog-demo-label">Demo concept · Not a client project</span><h2>{activeProject.name}</h2><p>{activeProject.detail}</p><div className="dialog-details"><div><span>Project type</span><strong>{activeProject.type}</strong></div><div><span>Example technology</span><strong>{activeProject.technology}</strong></div></div><a className="button button-bright" href="#contact" onClick={() => dialogRef.current?.close()}>Discuss a similar idea <ArrowUpRight aria-hidden="true" /></a></div>}
    </dialog>
  </>;
}