"use client";

import { forwardRef } from "react";
import type { ProfileData } from "@/data/formFields";
import type { ProfileTemplate } from "@/data/templates";

const blank = "＿＿＿＿＿＿";

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

type PreviewColors = {
  accent: string;
  frame: string;
  line: string;
  lineSoft: string;
  pale: string;
  text: string;
};

function LineField({
  label,
  value,
  className = "",
  colors
}: {
  label: string;
  value?: string;
  className?: string;
  colors: PreviewColors;
}) {
  const hasValue = Boolean(value?.trim());

  return (
    <div
      className={`flex h-full min-h-[82px] flex-col rounded-[20px] border-[3px] bg-white/[0.82] px-5 py-3 ${className}`}
      style={{ borderColor: colors.frame }}
    >
      <div className="mb-1 flex items-center gap-2 text-[20px] font-black" style={{ color: colors.accent }}>
        <span className="text-[17px]">♡</span>
        {label}
      </div>
      <div
        className={`preview-safe-text mt-auto overflow-hidden border-b-[4px] border-dotted pb-1 font-black leading-tight ${hasValue ? "" : "opacity-55"}`}
        style={{
          borderColor: colors.line,
          color: colors.text,
          display: "-webkit-box",
          fontSize: singleLineFontSize(value),
          overflowWrap: "normal",
          wordBreak: "keep-all",
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
  lines = 3,
  colors
}: {
  label: string;
  value?: string;
  className?: string;
  lines?: number;
  colors: PreviewColors;
}) {
  const hasValue = Boolean(value?.trim());
  const lineHeight = 26;

  return (
    <div
      className={`flex h-full flex-col rounded-[20px] border-[3px] bg-white/[0.86] px-5 py-2.5 ${className}`}
      style={{ borderColor: colors.frame }}
    >
      <div
        className="mb-1.5 inline-flex w-fit rounded-full px-4 py-1.5 text-[19px] font-black"
        style={{ backgroundColor: colors.pale, color: colors.accent }}
      >
        {label}
      </div>
      <div
        className={`preview-safe-text flex-1 overflow-hidden whitespace-pre-wrap rounded-[15px] bg-white px-4 py-1.5 font-bold ${hasValue ? "" : "opacity-55"}`}
        style={{
          boxShadow: `inset 0 -3px 0 ${colors.lineSoft}`,
          color: colors.text,
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

function PhotoBox({ image, imageY, colors }: { image?: string; imageY?: string; colors: PreviewColors }) {
  return (
    <div className="flex h-full flex-col rounded-[24px] border-[3px] bg-white/[0.88] p-4" style={{ borderColor: colors.frame }}>
      <div
        className="mb-3 inline-flex w-fit rounded-full px-4 py-1.5 text-[19px] font-black"
        style={{ backgroundColor: colors.pale, color: colors.accent }}
      >
        プロフ画像
      </div>
      <div
        className="relative flex-1 overflow-hidden rounded-[22px] border-[4px] border-dotted"
        style={{ borderColor: colors.line, backgroundColor: colors.pale }}
      >
        {image ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={image}
            alt="プロフィール画像"
            className="absolute inset-0 h-full w-full object-cover"
            crossOrigin="anonymous"
            decoding="sync"
            loading="eager"
            style={{ objectPosition: `center ${imageY || "50"}%` }}
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center text-[72px] font-black" style={{ color: colors.line }}>
            ♡
          </div>
        )}
      </div>
    </div>
  );
}

function Decoration({ colors, templateId }: { colors: PreviewColors; templateId: string }) {
  const isDarkAddiction = templateId === "dark-addiction";
  const isSweetRomance = templateId === "sweet-romance";
  const isLoveSong = templateId === "happy-pop";

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {isLoveSong ? (
        <>
          <div
            className="absolute inset-[52px] rounded-[36px] opacity-45"
            style={{
              backgroundImage:
                "repeating-linear-gradient(90deg, transparent 0 74px, rgba(89,102,70,0.42) 74px 82px, transparent 82px 142px), repeating-linear-gradient(0deg, transparent 0 60px, rgba(178,58,46,0.32) 60px 66px, transparent 66px 118px)"
            }}
          />
          <div className="absolute left-[150px] top-[78px] h-[94px] w-[132px] rotate-[-12deg] rounded-[70%_70%_40%_40%] bg-[#d8b37a] opacity-85" />
          <div className="absolute right-[150px] top-[78px] h-[94px] w-[132px] rotate-[12deg] rounded-[70%_70%_40%_40%] bg-[#d8b37a] opacity-85" />
          <div className="absolute left-[192px] top-[112px] h-[48px] w-[70px] rotate-[-12deg] rounded-[70%_70%_40%_40%] bg-[#fff8ef] opacity-85" />
          <div className="absolute right-[192px] top-[112px] h-[48px] w-[70px] rotate-[12deg] rounded-[70%_70%_40%_40%] bg-[#fff8ef] opacity-85" />
          <div className="absolute left-[308px] top-[96px] text-[58px] font-black opacity-80" style={{ color: colors.accent }}>♪</div>
          <div className="absolute right-[308px] bottom-[84px] text-[64px] font-black opacity-80" style={{ color: colors.accent }}>♬</div>
        </>
      ) : null}
      <div className="absolute left-[44px] top-[40px] text-[54px] font-black" style={{ color: colors.line }}>♡</div>
      <div className="absolute right-[70px] top-[54px] text-[46px] font-black" style={{ color: colors.line }}>✦</div>
      <div className="absolute left-[72px] bottom-[56px] text-[42px] font-black" style={{ color: colors.line }}>✧</div>
      <div className="absolute right-[58px] bottom-[48px] text-[50px] font-black" style={{ color: colors.line }}>♡</div>
      {isSweetRomance ? (
        <>
          <div className="absolute right-[122px] top-[90px] text-[104px] font-black opacity-85" style={{ color: colors.accent }}>♡</div>
          <div className="absolute left-[138px] bottom-[86px] text-[82px] font-black opacity-80" style={{ color: colors.accent }}>♡</div>
          <div className="absolute left-[210px] top-[86px] rounded-full px-8 py-2 text-[27px] font-black shadow-sm" style={{ backgroundColor: "#ffffff", color: colors.accent }}>
            frill heart
          </div>
          {Array.from({ length: 18 }).map((_, index) => (
            <span
              key={`frill-${index}`}
              className="absolute h-[28px] w-[28px] rounded-full opacity-75"
              style={{
                backgroundColor: index % 2 === 0 ? colors.accent : colors.pale,
                left: `${8 + index * 5}%`,
                top: index % 2 === 0 ? 62 : 74
              }}
            />
          ))}
        </>
      ) : null}
      {isDarkAddiction ? (
        <>
          <div className="absolute left-[118px] top-[82px] h-[680px] w-[20px] rounded-full opacity-80" style={{ backgroundColor: colors.accent }} />
          <div className="absolute right-[118px] top-[82px] h-[680px] w-[20px] rounded-full opacity-80" style={{ backgroundColor: colors.accent }} />
          {Array.from({ length: 10 }).map((_, index) => (
            <span
              key={`lace-left-${index}`}
              className="absolute h-[4px] w-[132px] origin-left rounded-full opacity-75"
              style={{
                backgroundColor: colors.accent,
                left: 128,
                top: 126 + index * 58,
                transform: `rotate(${index % 2 === 0 ? 16 : -16}deg)`
              }}
            />
          ))}
          {Array.from({ length: 10 }).map((_, index) => (
            <span
              key={`lace-right-${index}`}
              className="absolute h-[4px] w-[132px] origin-right rounded-full opacity-75"
              style={{
                backgroundColor: colors.accent,
                right: 128,
                top: 126 + index * 58,
                transform: `rotate(${index % 2 === 0 ? -16 : 16}deg)`
              }}
            />
          ))}
        </>
      ) : null}
      <div className="absolute inset-x-[84px] top-[148px] border-t-[5px] border-dotted" style={{ borderColor: colors.line }} />
      <div className="absolute inset-x-[84px] bottom-[132px] border-t-[5px] border-dotted" style={{ borderColor: colors.line }} />
      {Array.from({ length: 22 }).map((_, index) => (
        <span
          key={index}
          className="absolute rounded-full opacity-[0.55]"
          style={{
            backgroundColor: colors.line,
            left: `${8 + ((index * 19) % 84)}%`,
            top: `${11 + ((index * 31) % 76)}%`,
            width: `${7 + (index % 3) * 3}px`,
            height: `${7 + (index % 3) * 3}px`
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
  const isDarkAddiction = template.id === "dark-addiction";
  const isSweetRomance = template.id === "sweet-romance";
  const isLoveSong = template.id === "happy-pop";
  const colors: PreviewColors = {
    accent: isRoyalCute ? "#e85f94" : template.accentStyle,
    frame: isRoyalCute ? "#f4b8cf" : template.frameStyle,
    line: isRoyalCute
      ? "#f0a9c5"
      : isDarkAddiction
        ? "#a5163d"
        : isSweetRomance
          ? "#e60033"
          : isLoveSong
            ? "#596646"
            : template.palette[1],
    lineSoft: isRoyalCute
      ? "rgba(240,169,197,0.32)"
      : isDarkAddiction
        ? "rgba(165,22,61,0.22)"
        : isSweetRomance
          ? "rgba(230,0,51,0.18)"
          : isLoveSong
            ? "rgba(178,58,46,0.18)"
          : `${template.palette[1]}55`,
    pale: isRoyalCute ? "#ffe3ed" : template.palette[2],
    text: isRoyalCute ? "#56384a" : template.textColor
  };
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
      <Decoration colors={colors} templateId={template.id} />

      <div className="relative h-full rounded-[46px] border-[8px] bg-white/[0.82] p-[18px] shadow-[0_28px_70px_rgba(180,80,120,0.18)]" style={{ borderColor: colors.line }}>
        <div
          className="flex h-full flex-col rounded-[34px] border-[4px] border-dashed px-[34px] pb-[24px] pt-[18px]"
          style={{
            borderColor: colors.frame,
            backgroundColor: isDarkAddiction
              ? "rgba(247, 252, 255, 0.88)"
              : isSweetRomance
                ? "rgba(255, 250, 252, 0.9)"
                : isLoveSong
                  ? "rgba(255, 250, 243, 0.9)"
                  : "#fffafd"
          }}
        >
          <header className="mb-3 shrink-0 text-center">
            <div className="mx-auto mb-2 flex w-fit items-center gap-3 rounded-full px-7 py-2 text-[20px] font-black" style={{ backgroundColor: colors.pale, color: colors.accent }}>
              <span>✦</span>
              {isRoyalCute ? "Profile Book" : template.title}
              <span>✦</span>
            </div>
            <h1 className="text-[40px] font-black leading-none tracking-normal" style={{ color: colors.text }}>
              イコラブプロフィール帳
            </h1>
          </header>

          <div className="grid min-h-0 flex-1 grid-cols-[0.58fr_1fr_1.05fr] gap-4 overflow-hidden">
            <div className="grid min-h-0 grid-rows-[1.4fr_0.55fr_0.55fr] gap-3.5">
              <PhotoBox image={profile.profileImage} imageY={profile.profileImageY} colors={colors} />
              <LineField label="名前" value={profile.name} colors={colors} />
              <LineField label="推し" value={profile.oshiMember} colors={colors} />
            </div>

            <div className="grid min-h-0 grid-rows-4 gap-3.5">
              <section className="grid min-h-0 grid-cols-2 gap-4">
                <LineField label="X ID" value={profile.xId} colors={colors} />
                <LineField label="好きなペア" value={profile.favoritePair} colors={colors} />
              </section>

              <section className="grid min-h-0 grid-cols-3 gap-4">
                <LineField label="誕生日" value={profile.birthday} colors={colors} />
                <LineField label="血液型" value={profile.bloodType} colors={colors} />
                <LineField label="住み" value={profile.location} colors={colors} />
              </section>

              <section className="grid min-h-0 grid-cols-2 gap-4">
                <LineField label="好きな曲" value={profile.favoriteSong} colors={colors} />
                <LineField label="推し始めた時期" value={profile.startedAt} colors={colors} />
              </section>

              <section className="grid min-h-0 grid-cols-2 gap-4">
                <LineField label="参戦予定" value={profile.nextPlans} colors={colors} />
                <LineField label="好きな衣装" value={profile.favoriteCostume} colors={colors} />
              </section>
            </div>

            <div className="grid min-h-0 grid-rows-[0.9fr_1.25fr_0.9fr] gap-3.5">
              <NoteBox label="イコラブで好きなところ" value={profile.ikolovePoint} lines={2} colors={colors} />
              <NoteBox label="推しへの想い" value={profile.messageToOshi} lines={3} colors={colors} />
              <NoteBox label="ひとこと" value={profile.freeMessage} lines={2} colors={colors} />
            </div>
          </div>

          <footer className="mt-auto flex shrink-0 items-center justify-between pt-2 text-[17px] font-black" style={{ color: colors.accent }}>
            <span>♡ 仲良くしてください ♡</span>
            <span>created by イコラブプロフメーカー</span>
          </footer>
        </div>
      </div>
    </div>
  );
});
