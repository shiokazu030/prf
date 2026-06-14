export type Member = {
  id: string;
  name: string;
  groupName: string;
  colorName: string;
  colorHex: string;
  templateId: string;
};

export const members: Member[] = [
  { id: "hana", name: "花宮 はな", groupName: "Sample Stars", colorName: "ピンク", colorHex: "#ff77ad", templateId: "member-pink" },
  { id: "sora", name: "青空 そら", groupName: "Sample Stars", colorName: "水色", colorHex: "#78d8ff", templateId: "member-sky" },
  { id: "akari", name: "陽向 あかり", groupName: "Sample Stars", colorName: "オレンジ", colorHex: "#ff994d", templateId: "member-orange" },
  { id: "midori", name: "森野 みどり", groupName: "Sample Stars", colorName: "緑", colorHex: "#64c98a", templateId: "member-green" },
  { id: "rei", name: "星野 れい", groupName: "Sample Stars", colorName: "青", colorHex: "#3274d9", templateId: "member-blue" },
  { id: "yuzu", name: "日向 ゆず", groupName: "Sample Stars", colorName: "黄色", colorHex: "#ffd84f", templateId: "member-yellow" },
  { id: "rinka", name: "紅月 りんか", groupName: "Sample Stars", colorName: "赤", colorHex: "#f05252", templateId: "member-red" },
  { id: "shiro", name: "白瀬 しろ", groupName: "Sample Stars", colorName: "白", colorHex: "#e8edf2", templateId: "member-white" },
  { id: "sumire", name: "月乃 すみれ", groupName: "Sample Stars", colorName: "薄紫", colorHex: "#c7a5ff", templateId: "member-lavender" },
  { id: "miyabi", name: "紫乃 みやび", groupName: "Sample Stars", colorName: "紫", colorHex: "#8b5cf6", templateId: "member-purple" }
];
