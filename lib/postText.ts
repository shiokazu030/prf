import type { ProfileData } from "@/data/formFields";

export function createPostText(profile: ProfileData) {
  const oshi = profile.oshiMember?.trim() || "推し";
  return [
    "プロフィール帳作ってみました♡",
    `推しは${oshi}です！`,
    "仲良くしてください🫶",
    "",
    "#推し活プロフィール帳",
    "#アイドルオタクと繋がりたい"
  ].join("\n");
}
