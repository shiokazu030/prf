"use client";

import { Download } from "lucide-react";

export function SaveImageButton({
  onSave,
  saving
}: {
  onSave: () => void;
  saving: boolean;
}) {
  return (
    <button
      type="button"
      onClick={onSave}
      disabled={saving}
      className="flex min-h-[52px] w-full items-center justify-center gap-2 rounded-lg bg-[#4b3342] px-4 py-3 text-base font-black text-white shadow-soft transition hover:brightness-110 disabled:cursor-wait disabled:opacity-[0.65]"
    >
      <Download size={20} />
      {saving ? "保存中..." : "画像を保存"}
    </button>
  );
}
