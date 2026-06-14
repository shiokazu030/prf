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
  { key: "name", label: "名前", type: "text", placeholder: "例：ゆい" },
  { key: "xId", label: "X ID", type: "text", placeholder: "例：@oshi_life" },
  { key: "oshiMember", label: "推しメン", type: "text", placeholder: "例：花宮 はな" },
  { key: "birthday", label: "誕生日", type: "text", placeholder: "例：5月10日" },
  { key: "bloodType", label: "血液型", type: "select", placeholder: "選択してください", options: ["A型", "B型", "O型", "AB型", "秘密"] },
  { key: "location", label: "住んでるところ", type: "text", placeholder: "例：関東" },
  { key: "favoriteSong", label: "好きな曲", type: "text", placeholder: "例：ライブで一番好きな曲" },
  { key: "favoritePair", label: "好きなペア", type: "text", placeholder: "例：好きなコンビやユニット" },
  { key: "favoriteCostume", label: "好きな衣装", type: "text", placeholder: "例：歌番組の衣装、ツアー衣装など" },
  { key: "startedAt", label: "推し始めた時期", type: "text", placeholder: "例：2024年春ごろ" },
  { key: "nextPlans", label: "参戦予定", type: "textarea", placeholder: "例：7/20 東京、8/4 大阪" },
  { key: "ikolovePoint", label: "イコラブで好きなところ", type: "textarea", placeholder: "例：曲、ライブ、関係性、空気感など" },
  { key: "messageToOshi", label: "推しへの想い", type: "textarea", placeholder: "推しの好きなところを自由に" },
  { key: "freeMessage", label: "ひとこと", type: "textarea", placeholder: "仲良くしたい人へのメッセージ" }
];

export const defaultProfileData: ProfileData = {
  name: "",
  xId: "",
  oshiMember: "",
  birthday: "",
  bloodType: "",
  location: "",
  favoriteSong: "",
  favoritePair: "",
  favoriteCostume: "",
  startedAt: "",
  nextPlans: "",
  ikolovePoint: "",
  messageToOshi: "",
  freeMessage: "",
  profileImage: ""
};
