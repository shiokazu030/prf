import { Sparkles } from "lucide-react";
import type { ProfileTemplate } from "@/data/templates";

export function TemplateMiniPreview({ template }: { template: ProfileTemplate }) {
  return (
    <div
      className="relative aspect-square overflow-hidden rounded-lg border-2 p-3 shadow-sm"
      style={{
        background: template.backgroundStyle,
        borderColor: template.frameStyle,
        color: template.textColor
      }}
    >
      <div className="absolute left-2 top-2 text-lg opacity-70">{template.decorations.includes("heart") ? "♡" : "✦"}</div>
      <div className="absolute right-3 top-4 text-xl opacity-70">{template.decorations.includes("moon") ? "☾" : "✧"}</div>
      <div className="absolute bottom-3 left-3 h-7 w-7 rounded-full opacity-70" style={{ backgroundColor: template.palette[1] }} />
      <div className="absolute bottom-5 right-4 h-4 w-12 rounded-full opacity-60" style={{ backgroundColor: template.palette[2] }} />
      <div className="relative flex h-full flex-col rounded-md bg-white/[0.68] p-2 backdrop-blur-sm">
        <div className="mb-2 flex items-center gap-1 text-[10px] font-bold">
          <Sparkles size={12} />
          {template.title}
        </div>
        <div className="space-y-1">
          <div className="h-2 rounded-full bg-current opacity-[0.55]" />
          <div className="h-2 w-4/5 rounded-full bg-current opacity-[0.35]" />
          <div className="h-2 w-2/3 rounded-full bg-current opacity-25" />
        </div>
        <div className="mt-auto grid grid-cols-2 gap-1">
          <span className="h-5 rounded bg-white/60" />
          <span className="h-5 rounded bg-white/60" />
        </div>
      </div>
    </div>
  );
}
