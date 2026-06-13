import type { ProfileData } from "@/data/formFields";

export function createPostText(profile: ProfileData) {
  const oshi = profile.oshiMember?.trim() || "推し";
  const group = profile.groupName?.trim();
  const fanTagBase = group || oshi;

  return [
    "プロフィール帳作ってみました！",
    `推しは${oshi}です♡`,
    "よかったら仲良くしてください！",
    "#推し活プロフィール帳",
    `#${fanTagBase.replace(/\s+/g, "")}ファンと繋がりたい`
  ].join("\n");
}
