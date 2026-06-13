"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { TemplateSelector } from "@/components/TemplateSelector";
import type { TemplateCategory } from "@/data/templates";

export default function TemplatesPage() {
  const [activeCategory, setActiveCategory] = useState<TemplateCategory | "all">("all");

  return (
    <main className="min-h-screen">
      <div className="mx-auto max-w-6xl px-4 pt-5">
        <Link href="/" className="inline-flex items-center gap-2 text-sm font-bold text-[#6c536b]">
          <ArrowLeft size={18} />
          トップへ
        </Link>
      </div>
      <TemplateSelector activeCategory={activeCategory} onCategoryChange={setActiveCategory} />
    </main>
  );
}
