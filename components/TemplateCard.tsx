"use client";

import { WandSparkles } from "lucide-react";
import type { ProfileTemplate } from "@/data/templates";
import { templateCategories } from "@/data/templates";
import { TemplateMiniPreview } from "./TemplateMiniPreview";

export function TemplateCard({ template }: { template: ProfileTemplate }) {
  const startWithTemplate = () => {
    try {
      const raw = window.localStorage.getItem("oshi-profile-maker:v2");
      const stored = raw ? JSON.parse(raw) : {};
      window.localStorage.setItem(
        "oshi-profile-maker:v2",
        JSON.stringify({
          ...stored,
          templateId: template.id
        })
      );
    } catch {
      // Navigation still works if localStorage is unavailable.
    }
    window.location.href = `/create?template=${encodeURIComponent(template.id)}`;
  };

  return (
    <article className="rounded-lg border border-white/80 bg-white/[0.84] p-3 shadow-soft backdrop-blur">
      <TemplateMiniPreview template={template} />
      <div className="mt-3">
        <div className="flex items-center justify-between gap-2">
          <h3 className="text-base font-bold text-[#3f3342]">{template.title}</h3>
          <span className="rounded-full bg-[#f4eef4] px-2 py-1 text-[11px] font-bold text-[#6c536b]">
            {templateCategories[template.category].title}
          </span>
        </div>
        <p className="mt-1 min-h-10 text-sm leading-relaxed text-[#665866]">{template.description}</p>
        <div className="mt-3 flex gap-1.5">
          {template.palette.map((color) => (
            <span
              key={`${template.id}-${color}`}
              className="h-5 w-5 rounded-full border border-black/10"
              style={{ backgroundColor: color }}
              aria-label={color}
            />
          ))}
        </div>
        <button
          type="button"
          onClick={startWithTemplate}
          className="mt-4 flex min-h-12 w-full items-center justify-center gap-2 rounded-lg px-4 py-3 text-sm font-bold text-white shadow-sm transition hover:brightness-105"
          style={{ backgroundColor: template.accentStyle }}
        >
          <WandSparkles size={18} />
          このテンプレで作る
        </button>
      </div>
    </article>
  );
}
