"use client";

import { forwardRef } from "react";
import type { ProfileData } from "@/data/formFields";
import type { ProfileTemplate } from "@/data/templates";

const blank = "＿＿＿＿＿＿＿＿";

function valueOrBlank(value?: string) {
  return value?.trim() ? value : blank;
}

function LineField({
  label,
  value,
  className = ""
}: {
  label: string;
  value?: string;
  className?: string;
}) {
  const hasValue = Boolean(value?.trim());

  return (
    <div className={`min-h-[98px] rounded-[22px] border-[3px] border-[#f4b8cf] bg-white/[0.82] px-6 py-4 ${className}`}>
      <div className="mb-2 flex items-center gap-2 text-[24px] font-black text-[#e85f94]">
        <span className="text-[20px]">♡</span>
        {label}
      </div>
      <div className={`preview-safe-text border-b-[4px] border-dotted border-[#f0a9c5] pb-1 text-[34px] font-black leading-tight text-[#56384a] ${hasValue ? "" : "text-[#caa7b8]"}`}>
        {valueOrBlank(value)}
      </div>
    </div>
  );
}

function NoteBox({
  label,
  value,
  className = ""
}: {
  label: string;
  value?: string;
  className?: string;
}) {
  const hasValue = Boolean(value?.trim());

  return (
    <div className={`rounded-[24px] border-[3px] border-[#f4b8cf] bg-white/[0.86] px-6 py-5 ${className}`}>
      <div className="mb-3 inline-flex rounded-full bg-[#ffe3ed] px-5 py-2 text-[24px] font-black text-[#d94d86]">
        {label}
      </div>
      <div
        className={`preview-safe-text min-h-[116px] whitespace-pre-wrap rounded-[18px] bg-[linear-gradient(#fff_0,#fff_42px,#ffe1ec_43px)] px-4 py-3 text-[30px] font-bold leading-[43px] text-[#56384a] ${hasValue ? "" : "text-[#caa7b8]"}`}
      >
        {valueOrBlank(value)}
      </div>
    </div>
  );
}

function Decoration() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="absolute left-[44px] top-[40px] text-[54px] font-black text-[#ff9fbe]">♡</div>
      <div className="absolute right-[70px] top-[54px] text-[46px] font-black text-[#ffc3d7]">✦</div>
      <div className="absolute left-[72px] bottom-[56px] text-[42px] font-black text-[#ffc3d7]">✧</div>
      <div className="absolute right-[58px] bottom-[48px] text-[50px] font-black text-[#ff9fbe]">♡</div>
      <div className="absolute left-[180px] top-[84px] rounded-full bg-[#fff1f6] px-8 py-2 text-[28px] font-black text-[#e85f94] shadow-sm">
        ୨୧
      </div>
      <div className="absolute inset-x-[84px] top-[148px] border-t-[5px] border-dotted border-[#ffc5d8]" />
      <div className="absolute inset-x-[84px] bottom-[132px] border-t-[5px] border-dotted border-[#ffc5d8]" />
      {Array.from({ length: 26 }).map((_, index) => (
        <span
          key={index}
          className="absolute rounded-full bg-[#ffc5d8] opacity-[0.65]"
          style={{
            left: `${7 + ((index * 19) % 86)}%`,
            top: `${10 + ((index * 31) % 78)}%`,
            width: `${8 + (index % 3) * 4}px`,
            height: `${8 + (index % 3) * 4}px`
          }}
        />
      ))}
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
  const isRoyalCute = template.id === "royal-cute";
  const accent = isRoyalCute ? "#e85f94" : template.accentStyle;
  const background = isRoyalCute
    ? "linear-gradient(135deg, #fff8fb 0%, #ffe4ef 52%, #ffffff 100%)"
    : template.backgroundStyle;

  return (
    <div
      ref={ref}
      className="relative h-[1200px] w-[1200px] overflow-hidden p-[58px]"
      style={{
        background,
        color: template.textColor
      }}
    >
      <Decoration />

      <div className="relative h-full rounded-[54px] border-[8px] border-[#ffc1d7] bg-white/[0.82] p-[22px] shadow-[0_28px_70px_rgba(180,80,120,0.18)]">
        <div className="h-full rounded-[40px] border-[4px] border-dashed border-[#f7a9c8] bg-[#fffafd] px-[42px] py-[36px]">
          <header className="mb-7 text-center">
            <div className="mx-auto mb-3 flex w-fit items-center gap-4 rounded-full bg-[#ffe3ed] px-9 py-3 text-[25px] font-black text-[#d94d86]">
              <span>✦</span>
              Profile Book
              <span>✦</span>
            </div>
            <h1 className="text-[58px] font-black leading-none tracking-normal text-[#4b3342]">
              推しプロフィール帳
            </h1>
          </header>

          <section className="grid grid-cols-2 gap-5">
            <LineField label="名前" value={profile.name} />
            <LineField label="推し" value={profile.oshiMember} />
          </section>

          <section className="mt-5 grid grid-cols-3 gap-5">
            <LineField label="誕生日" value={profile.birthday} />
            <LineField label="血液型" value={profile.bloodType} />
            <LineField label="住み" value={profile.location} />
          </section>

          <section className="mt-5 grid grid-cols-2 gap-5">
            <LineField label="X ID" value={profile.xId} />
            <LineField label="同担" value={profile.sameFan} />
          </section>

          <section className="mt-5 grid grid-cols-2 gap-5">
            <LineField label="好きな曲" value={profile.favoriteSong} />
            <LineField label="推し始めた時期" value={profile.startedAt} />
          </section>

          <section className="mt-5">
            <NoteBox label="参戦予定" value={profile.nextPlans} />
          </section>

          <section className="mt-5 grid grid-cols-2 gap-5">
            <NoteBox label="推しへの想い" value={profile.messageToOshi} />
            <NoteBox label="ひとこと" value={profile.freeMessage} />
          </section>

          <footer className="mt-5 flex items-center justify-between text-[22px] font-black text-[#d982a5]">
            <span>♡ 仲良くしてください ♡</span>
            <span style={{ color: accent }}>created by 推しプロフメーカー</span>
          </footer>
        </div>
      </div>
    </div>
  );
});
