"use client";

import Link from "next/link";
import { Copy, Download, RefreshCcw } from "lucide-react";

export function ActionButtons({
  onSave,
  onCopy,
  saving,
  copied
}: {
  onSave: () => void;
  onCopy: () => void;
  saving: boolean;
  copied: boolean;
}) {
  return (
    <div className="grid gap-3 sm:grid-cols-3">
      <button
        type="button"
        onClick={onSave}
        disabled={saving}
        className="flex min-h-[52px] items-center justify-center gap-2 rounded-lg bg-[#3f3342] px-4 py-3 text-base font-black text-white shadow-soft transition hover:brightness-110 disabled:cursor-wait disabled:opacity-[0.65]"
      >
        <Download size={20} />
        {saving ? "保存中..." : "PNGで保存"}
      </button>
      <button
        type="button"
        onClick={onCopy}
        className="flex min-h-[52px] items-center justify-center gap-2 rounded-lg bg-[#e85f94] px-4 py-3 text-base font-black text-white shadow-soft transition hover:brightness-110"
      >
        <Copy size={20} />
        {copied ? "コピー済み" : "X投稿文をコピー"}
      </button>
      <Link
        href="/create?resetTemplate=1"
        className="flex min-h-[52px] items-center justify-center gap-2 rounded-lg border-2 border-[#3f3342] bg-white px-4 py-3 text-base font-black text-[#3f3342] shadow-soft transition hover:bg-[#fff7fb]"
      >
        <RefreshCcw size={20} />
        別テンプレ
      </Link>
    </div>
  );
}
