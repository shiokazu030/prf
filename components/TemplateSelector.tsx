import type { TemplateCategory } from "@/data/templates";
import { templateCategories, templates } from "@/data/templates";
import { TemplateCard } from "./TemplateCard";

export function TemplateSelector({
  activeCategory,
  onCategoryChange
}: {
  activeCategory: TemplateCategory | "all";
  onCategoryChange: (category: TemplateCategory | "all") => void;
}) {
  const filteredTemplates =
    activeCategory === "all" ? templates : templates.filter((template) => template.category === activeCategory);

  const categories: Array<TemplateCategory | "all"> = ["all", "song", "member"];

  return (
    <section className="mx-auto w-full max-w-6xl px-4 py-8">
      <div className="mb-5">
        <p className="text-sm font-bold text-[#d85f91]">Template</p>
        <h1 className="mt-1 text-2xl font-black text-[#3f3342]">テンプレを選ぶ</h1>
        <p className="mt-2 text-sm leading-relaxed text-[#665866]">
          楽曲の雰囲気またはメンバーカラーから、投稿したくなる1枚を選んでください。
        </p>
      </div>
      <div className="mb-5 grid grid-cols-3 gap-2 rounded-lg bg-white/70 p-1.5 shadow-sm">
        {categories.map((category) => (
          <button
            key={category}
            type="button"
            onClick={() => onCategoryChange(category)}
            className={`min-h-11 rounded-md px-2 text-xs font-bold transition ${
              activeCategory === category ? "bg-[#3f3342] text-white shadow-sm" : "text-[#6b5867]"
            }`}
          >
            {category === "all" ? "すべて" : templateCategories[category].title}
          </button>
        ))}
      </div>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {filteredTemplates.map((template) => (
          <TemplateCard key={template.id} template={template} />
        ))}
      </div>
    </section>
  );
}
