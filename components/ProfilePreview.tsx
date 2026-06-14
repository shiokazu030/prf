"use client";

import { forwardRef } from "react";
import type { ProfileData } from "@/data/formFields";
import type { ProfileTemplate } from "@/data/templates";

const blank = "＿＿＿＿＿＿＿＿";

function valueOrBlank(value?: string) {
  return value?.trim() ? value : blank;
}

function singleLineFontSize(value?: string) {
  const length = value?.trim().length ?? 0;
  if (length > 22) return 23;
  if (length > 14) return 26;
  return 30;
}

function noteFontSize(value?: string) {
  const length = value?.trim().length ?? 0;
  if (length > 80) return 20;
  if (length > 45) return 22;
  return 24;
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
    <div className={`flex h-full min-h-[82px] flex-col rounded-[20px] border-[3px] border-[#f4b8cf] bg-white/[0.82] px-5 py-3 ${className}`}>
      <div className="mb-1 flex items-center gap-2 text-[20px] font-black text-[#e85f94]">
        <span className="text-[17px]">♡</span>
        {label}
      </div>
      <div
        className={`preview-safe-text mt-auto overflow-hidden border-b-[4px] border-dotted border-[#f0a9c5] pb-1 font-black leading-tight text-[#56384a] ${hasValue ? "" : "text-[#caa7b8]"}`}
        style={{
          display: "-webkit-box",
          fontSize: singleLineFontSize(value),
          WebkitBoxOrient: "vertical",
          WebkitLineClamp: 2
        }}
      >
        {valueOrBlank(value)}
      </div>
    </div>
  );
}

function NoteBox({
  label,
  value,
  className = "",
  lines = 3
}: {
  label: string;
  value?: string;
  className?: string;
  lines?: number;
}) {
  const hasValue = Boolean(value?.trim());
  const lineHeight = 26;

  return (
    <div className={`flex h-full flex-col rounded-[20px] border-[3px] border-[#f4b8cf] bg-white/[0.86] px-5 py-2.5 ${className}`}>
      <div className="mb-1.5 inline-flex w-fit rounded-full bg-[#ffe3ed] px-4 py-1.5 text-[19px] font-black text-[#d94d86]">
        {label}
      </div>
      <div
        className={`preview-safe-text flex-1 overflow-hidden whitespace-pre-wrap rounded-[15px] bg-white px-4 py-1.5 font-bold text-[#56384a] shadow-[inset_0_-3px_0_rgba(240,169,197,0.32)] ${hasValue ? "" : "text-[#caa7b8]"}`}
        style={{
          display: "-webkit-box",
          fontSize: noteFontSize(value),
          lineHeight: `${lineHeight}px`,
          WebkitBoxOrient: "vertical",
          WebkitLineClamp: lines
        }}
      >
        {valueOrBlank(value)}
      </div>
    </div>
  );
}

function PhotoBox({ image }: { image?: string }) {
  return (
    <div className="flex h-full flex-col rounded-[24px] border-[3px] border-[#f4b8cf] bg-white/[0.88] p-4">
      <div className="mb-3 inline-flex w-fit rounded-full bg-[#ffe3ed] px-4 py-1.5 text-[19px] font-black text-[#d94d86]">
        プロフ画像
      </div>
      <div
        className="relative flex-1 overflow-hidden rounded-[22px] border-[4px] border-dotted border-[#f0a9c5] bg-[#fff1f6]"
        style={
          image
            ? {
                backgroundImage: `url("${image}")`,
                backgroundPosition: "center",
                backgroundSize: "cover"
              }
            : undefined
        }
      >
        {image ? (
          <span className="sr-only">プロフィール画像</span>
        ) : (
          <div className="flex h-full w-full items-center justify-center text-[72px] font-black text-[#f0a9c5]">
            ♡
          </div>
        )}
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
      className="relative h-[900px] w-[1600px] overflow-hidden p-[34px]"
      style={{
        background,
        color: template.textColor
      }}
    >
      <Decoration />

      <div className="relative h-full rounded-[46px] border-[8px] border-[#ffc1d7] bg-white/[0.82] p-[18px] shadow-[0_28px_70px_rgba(180,80,120,0.18)]">
        <div className="flex h-full flex-col rounded-[34px] border-[4px] border-dashed border-[#f7a9c8] bg-[#fffafd] px-[34px] pb-[24px] pt-[18px]">
          <header className="mb-3 shrink-0 text-center">
            <div className="mx-auto mb-2 flex w-fit items-center gap-3 rounded-full bg-[#ffe3ed] px-7 py-2 text-[20px] font-black text-[#d94d86]">
              <span>✦</span>
              Profile Book
              <span>✦</span>
            </div>
            <h1 className="text-[40px] font-black leading-none tracking-normal text-[#4b3342]">
              推しプロフィール帳
            </h1>
          </header>

          <div className="grid min-h-0 flex-1 grid-cols-[0.58fr_1fr_1.05fr] gap-4 overflow-hidden">
            <div className="grid min-h-0 grid-rows-[1.4fr_0.55fr_0.55fr] gap-3.5">
              <PhotoBox image={profile.profileImage} />
              <LineField label="名前" value={profile.name} />
              <LineField label="推し" value={profile.oshiMember} />
            </div>

            <div className="grid min-h-0 grid-rows-4 gap-3.5">
              <section className="grid min-h-0 grid-cols-2 gap-4">
                <LineField label="X ID" value={profile.xId} />
                <LineField label="好きなペア" value={profile.favoritePair} />
              </section>

              <section className="grid min-h-0 grid-cols-3 gap-4">
                <LineField label="誕生日" value={profile.birthday} />
                <LineField label="血液型" value={profile.bloodType} />
                <LineField label="住み" value={profile.location} />
              </section>

              <section className="grid min-h-0 grid-cols-2 gap-4">
                <LineField label="好きな曲" value={profile.favoriteSong} />
                <LineField label="推し始めた時期" value={profile.startedAt} />
              </section>

              <section className="grid min-h-0 grid-cols-2 gap-4">
                <LineField label="参戦予定" value={profile.nextPlans} />
                <LineField label="好きな衣装" value={profile.favoriteCostume} />
              </section>
            </div>

            <div className="grid min-h-0 grid-rows-[0.9fr_1.25fr_0.9fr] gap-3.5">
              <NoteBox label="イコラブで好きなところ" value={profile.ikolovePoint} lines={2} />
              <NoteBox label="推しへの想い" value={profile.messageToOshi} lines={3} />
              <NoteBox label="ひとこと" value={profile.freeMessage} lines={2} />
            </div>
          </div>

          <footer className="mt-auto flex shrink-0 items-center justify-between pt-2 text-[17px] font-black text-[#d982a5]">
            <span>♡ 仲良くしてください ♡</span>
            <span style={{ color: accent }}>created by 推しプロフメーカー</span>
          </footer>
        </div>
      </div>
    </div>
  );
});
