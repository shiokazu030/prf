import type { TemplateCategory } from "./templates";

export type FieldType = "text" | "textarea" | "select";

export type FormField = {
  key: string;
  label: string;
  type: FieldType;
  placeholder: string;
  options?: string[];
  enabledCategories?: TemplateCategory[];
};

export type ProfileData = Record<string, string>;

export const formFields: FormField[] = [
  { key: "name", label: "名前 / 呼び名", type: "text", placeholder: "例：ゆい / ゆいちゃん" },
  { key: "xId", label: "X ID", type: "text", placeholder: "例：@oshi_life" },
  { key: "oshiMember", label: "推しメン", type: "text", placeholder: "例：花宮 はな" },
  { key: "birthday", label: "誕生日", type: "text", placeholder: "例：5月10日" },
  { key: "bloodType", label: "血液型", type: "select", placeholder: "選択してください", options: ["A型", "B型", "O型", "AB型", "秘密"] },
  { key: "location", label: "住んでるところ", type: "text", placeholder: "例：関東" },
  { key: "favoriteSong", label: "好きな曲", type: "text", placeholder: "例：ライブで一番沸く曲" },
  { key: "startedAt", label: "推し始めた時期", type: "text", placeholder: "例：2024年春ごろ" },
  { key: "fanHistory", label: "ファン歴 / 現場歴", type: "text", placeholder: "例：2年 / 月1ペース" },
  { key: "firstLive", label: "初現場", type: "text", placeholder: "例：春ツアー東京公演" },
  { key: "nextPlans", label: "参戦予定", type: "textarea", placeholder: "例：7/20 東京、8/4 大阪" },
  { key: "sameFan", label: "同担", type: "select", placeholder: "選択してください", options: ["歓迎", "慎重", "NG"] },
  { key: "otherFan", label: "他推し", type: "select", placeholder: "選択してください", options: ["歓迎", "慎重", "NG"] },
  { key: "pairing", label: "連番できるか", type: "select", placeholder: "選択してください", options: ["できる", "予定が合えば", "まずはお話から"] },
  { key: "meetAtVenue", label: "現場で会えるか", type: "select", placeholder: "選択してください", options: ["会える", "タイミング次第", "人見知りです"] },
  { key: "favoriteMv", label: "好きなMV", type: "text", placeholder: "例：笑顔がいっぱいのMV" },
  { key: "favoriteCostume", label: "好きな衣装", type: "text", placeholder: "例：白×リボンの衣装" },
  { key: "messageToOshi", label: "推しへの想い", type: "textarea", placeholder: "推しへの好きなところを自由に" },
  { key: "freeMessage", label: "ひとこと", type: "textarea", placeholder: "仲良くしたい人へのメッセージ" }
];

export const defaultProfileData: ProfileData = {
  name: "ゆい",
  xId: "@oshi_profile",
  oshiMember: "花宮 はな",
  birthday: "5月10日",
  bloodType: "A型",
  location: "関東",
  favoriteSong: "ライブで一番きらきらする曲",
  startedAt: "2024年春ごろ",
  fanHistory: "2年 / 現場は月1ペース",
  firstLive: "春ツアー東京公演",
  nextPlans: "7/20 東京\n8/4 大阪",
  sameFan: "歓迎",
  otherFan: "歓迎",
  pairing: "予定が合えば",
  meetAtVenue: "会える",
  favoriteMv: "笑顔がいっぱいのMV",
  favoriteCostume: "白×リボンの衣装",
  messageToOshi: "毎日を明るくしてくれるところが大好きです。",
  freeMessage: "現場で会えたり、普段からお話できるお友だちがほしいです。"
};
