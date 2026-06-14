import Link from "next/link";
import { ArrowRight, ImageDown, Palette, Sparkles } from "lucide-react";
import { templates } from "@/data/templates";
import { TemplateMiniPreview } from "@/components/TemplateMiniPreview";

export default function Home() {
  const samples = ["royal-cute", "sparkle-idol", "member-sky"].map(
    (id) => templates.find((template) => template.id === id) ?? templates[0]
  );

  return (
    <main className="min-h-screen">
      <section className="mx-auto flex w-full max-w-6xl flex-col px-4 pb-8 pt-8 sm:pt-12">
        <div className="grid items-center gap-7 lg:grid-cols-[1fr_0.92fr]">
          <div>
            <p className="inline-flex items-center gap-2 rounded-full bg-white/[0.82] px-3 py-2 text-sm font-bold text-[#d85f91] shadow-sm">
              <Sparkles size={16} />
              推し活プロフィール帳メーカー
            </p>
            <h1 className="mt-4 text-4xl font-black leading-tight tracking-normal text-[#3f3342] sm:text-5xl">
              推しプロフメーカー
            </h1>
            <p className="mt-4 max-w-xl text-base leading-8 text-[#665866]">
              楽曲の雰囲気やメンバーカラーで作れる、Twitter / X 投稿向けのプロフィール帳メーカーです。
              テンプレを選んで入力するだけで、1200×1200pxのPNG画像を保存できます。
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/create?template=royal-cute"
                className="inline-flex min-h-[52px] items-center justify-center gap-2 rounded-lg bg-[#3f3342] px-6 py-4 text-base font-black text-white shadow-soft transition hover:brightness-110"
              >
                作ってみる
                <ArrowRight size={20} />
              </Link>
              <a
                href="#categories"
                className="inline-flex min-h-[52px] items-center justify-center gap-2 rounded-lg border-2 border-[#e8cfdf] bg-white/[0.82] px-6 py-4 text-base font-black text-[#3f3342] shadow-sm transition hover:bg-white"
              >
                テンプレを見る
              </a>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-3">
            {samples.map((template, index) => (
              <div key={template.id} className={index === 1 ? "translate-y-6" : ""}>
                <TemplateMiniPreview template={template} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="categories" className="mx-auto w-full max-w-6xl px-4 py-6">
        <div className="grid gap-4 md:grid-cols-2">
          <Link
            href="/create?category=song"
            className="rounded-lg border border-white/80 bg-white/[0.86] p-5 shadow-soft transition hover:-translate-y-0.5 hover:bg-white"
          >
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-[#ffe0ec] text-[#d85f91]">
              <Sparkles size={24} />
            </div>
            <h2 className="text-xl font-black text-[#3f3342]">楽曲イメージ</h2>
            <p className="mt-2 text-sm leading-7 text-[#665866]">
              王道かわいい、甘め恋愛、ダーク中毒など、曲の世界観を抽象化したテンプレから選べます。
            </p>
          </Link>
          <Link
            href="/create?category=member"
            className="rounded-lg border border-white/80 bg-white/[0.86] p-5 shadow-soft transition hover:-translate-y-0.5 hover:bg-white"
          >
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-[#dff3ff] text-[#2a9fd6]">
              <Palette size={24} />
            </div>
            <h2 className="text-xl font-black text-[#3f3342]">メンバーカラー</h2>
            <p className="mt-2 text-sm leading-7 text-[#665866]">
              ピンク、水色、オレンジ、緑、青、黄色、赤、白、薄紫。色ごとに装飾も変わります。
            </p>
          </Link>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-4 py-8">
        <div className="mb-4 flex items-center gap-2">
          <ImageDown className="text-[#d85f91]" size={22} />
          <h2 className="text-xl font-black text-[#3f3342]">サンプル</h2>
        </div>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
          {samples.map((template) => (
            <div key={`sample-${template.id}`} className="rounded-lg bg-white/[0.76] p-2 shadow-soft">
              <TemplateMiniPreview template={template} />
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
