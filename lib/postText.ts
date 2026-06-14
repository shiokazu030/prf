import type { ProfileData } from "@/data/formFields";

export function createPostText(profile: ProfileData) {
  const oshi = profile.oshiMember?.trim() || "推し";
  return [
    "イコラブプロフィール帳作ってみました♡",
    `推しは${oshi}です！`,
    "仲良くしてください",
    "",
    "#イコラブプロフメーカー",
    "#イコラブ好きな人と繋がりたい"
  ].join("\n");
}
