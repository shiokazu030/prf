"use client";

import { forwardRef } from "react";
import type { ProfileData } from "@/data/formFields";
import type { ProfileTemplate } from "@/data/templates";

const compactFields = [
  ["X ID", "xId"],
  ["誕生日", "birthday"],
  ["血液型", "bloodType"],
  ["住み", "location"],
  ["推し始め", "startedAt"],
  ["ファン歴", "fanHistory"],
  ["初現場", "firstLive"],
  ["同担", "sameFan"],
  ["他推し", "otherFan"],
  ["連番", "pairing"],
  ["現場", "meetAtVenue"],
  ["好きな曲", "favoriteSong"],
  ["好きなMV", "favoriteMv"],
  ["好きな衣装", "favoriteCostume"]
] as const;

function DecorationLayer({ template }: { template: ProfileTemplate }) {
  const marks = [
    { text: template.decorations.includes("heart") ? "♡" : template.decorations.includes("drop") ? "◌" : "✦", className: "left-[6%] top-[7%] text-[54px] rotate-[-12deg]" },
    { text: template.decorations.includes("ribbon") ? "⋈" : template.decorations.includes("moon") ? "☾" : "✧", className: "right-[7%] top-[9%] text-[48px] rotate-[10deg]" },
    { text: template.decorations.includes("lace") ? "⌇⌇⌇" : template.decorations.includes("flower") ? "✿" : "●", className: "left-[8%] bottom-[9%] text-[42px] rotate-[8deg]" },
    { text: template.decorations.includes("star") ? "☆" : "♡", className: "right-[9%] bottom-[10%] text-[50px] rotate-[-8deg]" }
  ];

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="absolute -left-16 top-28 h-48 w-48 rounded-full opacity-[0.24]" style={{ backgroundColor: template.palette[1] }} />
      <div className="absolute -right-20 bottom-28 h-56 w-56 rounded-full opacity-[0.18]" style={{ backgroundColor: template.palette[2] }} />
      {marks.map((mark) => (
        <span
          key={`${template.id}-${mark.className}`}
          className={`absolute font-black leading-none opacity-[0.28] ${mark.className}`}
          style={{ color: template.accentStyle }}
        >
          {mark.text}
        </span>
      ))}
      {Array.from({ length: 18 }).map((_, index) => (
        <span
          key={index}
          className="absolute rounded-full opacity-30"
          style={{
            left: `${8 + ((index * 17) % 82)}%`,
            top: `${9 + ((index * 23) % 78)}%`,
            width: `${6 + (index % 3) * 4}px`,
            height: `${6 + (index % 3) * 4}px`,
            backgroundColor: template.palette[index % template.palette.length]
          }}
        />
      ))}
    </div>
  );
}

function PreviewItem({ label, value, accent }: { label: string; value?: string; accent: string }) {
  const hasValue = Boolean(value?.trim());

  return (
    <div className="min-h-[66px] rounded-[18px] bg-white/[0.76] px-4 py-3 shadow-[0_8px_18px_rgba(80,55,85,0.08)]">
      <div className="mb-1 text-[20px] font-black leading-none" style={{ color: accent }}>
        {label}
      </div>
      <div className={`preview-safe-text whitespace-pre-wrap text-[25px] font-bold leading-tight ${hasValue ? "" : "opacity-[0.35]"}`}>
        {hasValue ? value : "未入力"}
      </div>
    </div>
  );
}

export const ProfilePreview = forwardRef<
  HTMLDivElement,
  {
    template: ProfileTemplate;
    profile: ProfileData;
  }
>(function ProfilePreview({ template, profile }, ref) {
  return (
    <div
      ref={ref}
      className="relative h-[1200px] w-[1200px] overflow-hidden bg-white p-[54px]"
      style={{
        background: template.backgroundStyle,
        color: template.textColor
      }}
    >
      <DecorationLayer template={template} />
      <div
        className="relative flex h-full flex-col rounded-[46px] border-[6px] bg-white/[0.52] p-[34px] shadow-[0_24px_80px_rgba(60,42,70,0.18)] backdrop-blur"
        style={{ borderColor: template.frameStyle }}
      >
        <div
          className="mb-6 rounded-[32px] px-8 py-7 text-center shadow-[0_12px_28px_rgba(80,55,85,0.1)]"
          style={{ backgroundColor: template.palette[0] }}
        >
          <p className="text-[30px] font-black tracking-normal opacity-80">推し活プロフィール帳</p>
          <h1 className="preview-safe-text mt-1 text-[72px] font-black leading-none tracking-normal">
            {profile.name?.trim() || "お名前"}
          </h1>
          <div
            className="mx-auto mt-4 inline-flex max-w-full items-center justify-center rounded-full px-7 py-2 text-[30px] font-black text-white"
            style={{ backgroundColor: template.accentStyle }}
          >
            推し: {profile.oshiMember?.trim() || "推しメン"}
          </div>
        </div>

        <div className="grid flex-1 grid-cols-2 gap-4">
          {compactFields.map(([label, key]) => (
            <PreviewItem key={key} label={label} value={profile[key]} accent={template.accentStyle} />
          ))}
        </div>

        <div className="mt-5 grid grid-cols-2 gap-4">
          <PreviewItem label="参戦予定" value={profile.nextPlans} accent={template.accentStyle} />
          <PreviewItem label="推しへの想い" value={profile.messageToOshi} accent={template.accentStyle} />
        </div>

        <div
          className="preview-safe-text mt-5 min-h-[118px] rounded-[26px] px-6 py-5 text-[30px] font-bold leading-snug text-white shadow-[0_12px_28px_rgba(80,55,85,0.12)]"
          style={{ backgroundColor: template.accentStyle }}
        >
          {profile.freeMessage?.trim() || "ひとことを入力するとここに表示されます。"}
        </div>
      </div>
    </div>
  );
});
