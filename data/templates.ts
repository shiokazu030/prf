export type TemplateCategory = "song" | "member";

export type Decoration = "heart" | "star" | "ribbon" | "lace" | "dot" | "drop" | "sparkle" | "flower" | "moon";

export type ProfileTemplate = {
  id: string;
  category: TemplateCategory;
  title: string;
  description: string;
  palette: string[];
  decorations: Decoration[];
  mood: string;
  backgroundStyle: string;
  frameStyle: string;
  accentStyle: string;
  textColor: string;
};

export const templateCategories: Record<TemplateCategory, { title: string; description: string }> = {
  song: {
    title: "楽曲イメージ",
    description: "曲名や公式要素を使わず、世界観だけを抽象化したテンプレ"
  },
  member: {
    title: "メンバーカラー",
    description: "推し色を主役に、色ごとの装飾まで変えたテンプレ"
  }
};

export const templates: ProfileTemplate[] = [
  {
    id: "royal-cute",
    category: "song",
    title: "王道かわいい",
    description: "ピンク、白、ハート、レースでふんわり可愛い王道感。",
    palette: ["#fff8fb", "#ff8fba", "#ffffff", "#ffd7e6"],
    decorations: ["heart", "lace", "ribbon", "dot"],
    mood: "ふんわり",
    backgroundStyle: "linear-gradient(135deg, #fff8fb 0%, #ffe1ec 48%, #ffffff 100%)",
    frameStyle: "#ff9fc5",
    accentStyle: "#e85f94",
    textColor: "#5a3346"
  },
  {
    id: "sweet-romance",
    category: "song",
    title: "とくべチュ、してイメージ",
    description: "真っ赤なフリルと白ハートで、特別感たっぷりの甘いテンプレ。",
    palette: ["#fff7fa", "#e60033", "#ffe2ea", "#ffffff"],
    decorations: ["heart", "ribbon", "lace", "sparkle"],
    mood: "特別な赤",
    backgroundStyle: "linear-gradient(135deg, #fff8fb 0%, #ffe0e8 42%, #fffefe 64%, #ffd3df 100%)",
    frameStyle: "#e60033",
    accentStyle: "#d6002f",
    textColor: "#4f2030"
  },
  {
    id: "dark-addiction",
    category: "song",
    title: "劇薬中毒イメージ",
    description: "淡い水色にワインレッドのリボンを効かせた、甘さと強さのあるテンプレ。",
    palette: ["#eef8ff", "#8c1434", "#d8edf8", "#2b1c2a"],
    decorations: ["ribbon", "lace", "sparkle", "star"],
    mood: "甘くて危うい",
    backgroundStyle: "linear-gradient(135deg, #f6fbff 0%, #d8edf8 44%, #fff1f7 72%, #f8fbff 100%)",
    frameStyle: "#8c1434",
    accentStyle: "#a5163d",
    textColor: "#392533"
  },
  {
    id: "sparkle-idol",
    category: "song",
    title: "きらきらアイドル",
    description: "パステル、星、ラメ風。ステージライトみたいな高揚感。",
    palette: ["#f8fbff", "#98d9ff", "#ffe58f", "#ffb3e5"],
    decorations: ["star", "sparkle", "dot"],
    mood: "ステージ",
    backgroundStyle: "linear-gradient(135deg, #f7fcff 0%, #dff3ff 42%, #fff4c8 100%)",
    frameStyle: "#77bff2",
    accentStyle: "#f0b429",
    textColor: "#33425f"
  },
  {
    id: "pale-fragile",
    category: "song",
    title: "儚い淡色",
    description: "くすみカラーと透明感で、静かに余韻が残る雰囲気。",
    palette: ["#f7f3f2", "#c9d7d2", "#ded4e8", "#ffffff"],
    decorations: ["drop", "sparkle", "flower"],
    mood: "透明感",
    backgroundStyle: "linear-gradient(135deg, #f7f3f2 0%, #dfeae7 48%, #eee5f5 100%)",
    frameStyle: "#b8c9c4",
    accentStyle: "#8f86ab",
    textColor: "#4a4b57"
  },
  {
    id: "happy-pop",
    category: "song",
    title: "元気ポップ",
    description: "明るい色と丸い図形で、弾むような元気さ。",
    palette: ["#fff7d6", "#ff8a4c", "#55c7a6", "#69a7ff"],
    decorations: ["star", "dot", "heart"],
    mood: "はじける",
    backgroundStyle: "linear-gradient(135deg, #fff7d6 0%, #ffe0a1 45%, #d8f7ee 100%)",
    frameStyle: "#ff8a4c",
    accentStyle: "#1aa984",
    textColor: "#4b3b2f"
  },
  {
    id: "member-pink",
    category: "member",
    title: "ピンク",
    description: "ラブリーで王道かわいい、ハート多めの推し色テンプレ。",
    palette: ["#fff4fa", "#ff77ad", "#ffd3e5", "#ffffff"],
    decorations: ["heart", "lace", "ribbon"],
    mood: "ラブリー",
    backgroundStyle: "linear-gradient(135deg, #fff4fa 0%, #ffd3e5 55%, #ffffff 100%)",
    frameStyle: "#ff77ad",
    accentStyle: "#e94f8e",
    textColor: "#5b2940"
  },
  {
    id: "member-sky",
    category: "member",
    title: "水色",
    description: "透明感、雫、きらめき。軽やかで涼しい推し色テンプレ。",
    palette: ["#f0fbff", "#78d8ff", "#d7f4ff", "#ffffff"],
    decorations: ["drop", "sparkle", "star"],
    mood: "透明感",
    backgroundStyle: "linear-gradient(135deg, #f0fbff 0%, #d7f4ff 54%, #ffffff 100%)",
    frameStyle: "#78d8ff",
    accentStyle: "#2a9fd6",
    textColor: "#29475c"
  },
  {
    id: "member-orange",
    category: "member",
    title: "オレンジ",
    description: "元気でポップ。丸いアクセントが弾む推し色テンプレ。",
    palette: ["#fff6e8", "#ff994d", "#ffd28f", "#fffefe"],
    decorations: ["dot", "star", "heart"],
    mood: "元気",
    backgroundStyle: "linear-gradient(135deg, #fff6e8 0%, #ffd28f 58%, #fffefe 100%)",
    frameStyle: "#ff994d",
    accentStyle: "#e66b16",
    textColor: "#533723"
  },
  {
    id: "member-green",
    category: "member",
    title: "緑",
    description: "爽やかでナチュラル。小花と余白でやさしい推し色テンプレ。",
    palette: ["#f3fff7", "#64c98a", "#d7f1df", "#ffffff"],
    decorations: ["flower", "sparkle", "dot"],
    mood: "ナチュラル",
    backgroundStyle: "linear-gradient(135deg, #f3fff7 0%, #d7f1df 55%, #ffffff 100%)",
    frameStyle: "#64c98a",
    accentStyle: "#2c8e52",
    textColor: "#2d4d37"
  },
  {
    id: "member-blue",
    category: "member",
    title: "青",
    description: "クールで夜空っぽい、星が映える推し色テンプレ。",
    palette: ["#edf5ff", "#3274d9", "#bcd7ff", "#ffffff"],
    decorations: ["moon", "star", "sparkle"],
    mood: "クール",
    backgroundStyle: "linear-gradient(135deg, #edf5ff 0%, #bcd7ff 48%, #ffffff 100%)",
    frameStyle: "#3274d9",
    accentStyle: "#174f9f",
    textColor: "#213a63"
  },
  {
    id: "member-yellow",
    category: "member",
    title: "黄色",
    description: "明るくハッピー。日差しみたいなきらめきテンプレ。",
    palette: ["#fffbea", "#ffd84f", "#fff1a8", "#ffffff"],
    decorations: ["star", "sparkle", "dot"],
    mood: "ハッピー",
    backgroundStyle: "linear-gradient(135deg, #fffbea 0%, #fff1a8 50%, #ffffff 100%)",
    frameStyle: "#ffd84f",
    accentStyle: "#d89b00",
    textColor: "#4d4020"
  },
  {
    id: "member-red",
    category: "member",
    title: "赤",
    description: "情熱と王道感。強めのアクセントでも読みやすいテンプレ。",
    palette: ["#fff4f2", "#f05252", "#ffd0ca", "#ffffff"],
    decorations: ["heart", "ribbon", "star"],
    mood: "情熱",
    backgroundStyle: "linear-gradient(135deg, #fff4f2 0%, #ffd0ca 50%, #ffffff 100%)",
    frameStyle: "#f05252",
    accentStyle: "#c81e1e",
    textColor: "#5f2525"
  },
  {
    id: "member-white",
    category: "member",
    title: "白",
    description: "清楚でシンプル。淡い影とレースで上品に見せるテンプレ。",
    palette: ["#ffffff", "#e8edf2", "#f8f9fb", "#b9c4cf"],
    decorations: ["lace", "sparkle", "flower"],
    mood: "清楚",
    backgroundStyle: "linear-gradient(135deg, #ffffff 0%, #f4f7fa 55%, #edf1f5 100%)",
    frameStyle: "#b9c4cf",
    accentStyle: "#7a8794",
    textColor: "#3f4852"
  },
  {
    id: "member-lavender",
    category: "member",
    title: "薄紫",
    description: "上品で夢かわ。月と星でふわっと甘い推し色テンプレ。",
    palette: ["#fbf7ff", "#c7a5ff", "#eadfff", "#ffffff"],
    decorations: ["moon", "star", "ribbon"],
    mood: "夢かわ",
    backgroundStyle: "linear-gradient(135deg, #fbf7ff 0%, #eadfff 56%, #ffffff 100%)",
    frameStyle: "#c7a5ff",
    accentStyle: "#8762cc",
    textColor: "#4b3c62"
  },
  {
    id: "member-purple",
    category: "member",
    title: "紫",
    description: "大人っぽく上品。夜のステージ感ときらめきを入れた推し色テンプレ。",
    palette: ["#fbf7ff", "#8b5cf6", "#ded1ff", "#ffffff"],
    decorations: ["star", "sparkle", "moon"],
    mood: "上品",
    backgroundStyle: "linear-gradient(135deg, #fbf7ff 0%, #ded1ff 54%, #ffffff 100%)",
    frameStyle: "#a78bfa",
    accentStyle: "#7c3aed",
    textColor: "#44315f"
  }
];

export const getTemplateById = (id: string | null | undefined) =>
  templates.find((template) => template.id === id) ?? templates[0];
