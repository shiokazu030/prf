"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import { toPng } from "html-to-image";
import { ArrowLeft, Copy, RefreshCcw } from "lucide-react";
import { ProfileForm } from "@/components/ProfileForm";
import { ProfilePreview } from "@/components/ProfilePreview";
import { SaveImageButton } from "@/components/SaveImageButton";
import { TemplateSelector } from "@/components/TemplateSelector";
import { defaultProfileData, type ProfileData } from "@/data/formFields";
import { getTemplateById, templates, type TemplateCategory } from "@/data/templates";
import { createPostText } from "@/lib/postText";

const STORAGE_KEY = "oshi-profile-maker:v2";

type StoredState = {
  templateId: string;
  profile: ProfileData;
};

export default function CreatePage() {
  const previewRef = useRef<HTMLDivElement>(null);
  const previewFrameRef = useRef<HTMLDivElement>(null);
  const [selectedTemplateId, setSelectedTemplateId] = useState<string | null>(null);
  const [activeCategory, setActiveCategory] = useState<TemplateCategory | "all">("all");
  const [profile, setProfile] = useState<ProfileData>(defaultProfileData);
  const [saving, setSaving] = useState(false);
  const [copied, setCopied] = useState(false);
  const [ready, setReady] = useState(false);
  const [invalidTemplate, setInvalidTemplate] = useState(false);
  const [previewFrameWidth, setPreviewFrameWidth] = useState(360);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const templateId = params.get("template");
    const category = params.get("category");
    const resetTemplate = params.get("resetTemplate") === "1";
    const storedRaw = window.localStorage.getItem(STORAGE_KEY);

    if (category === "song" || category === "member") {
      setActiveCategory(category);
    }

    if (storedRaw) {
      try {
        const stored = JSON.parse(storedRaw) as StoredState;
        setProfile({ ...defaultProfileData, ...stored.profile });
        if (!templateId && !resetTemplate && stored.templateId) {
          setSelectedTemplateId(stored.templateId);
        }
      } catch {
        window.localStorage.removeItem(STORAGE_KEY);
      }
    }

    if (templateId) {
      if (templates.some((template) => template.id === templateId)) {
        setSelectedTemplateId(templateId);
        setInvalidTemplate(false);
      } else {
        setSelectedTemplateId(null);
        setInvalidTemplate(true);
      }
    }

    setReady(true);
  }, []);

  useEffect(() => {
    if (!previewFrameRef.current) return;
    const updateWidth = () => {
      if (previewFrameRef.current) {
        setPreviewFrameWidth(previewFrameRef.current.clientWidth);
      }
    };
    updateWidth();
    const observer = new ResizeObserver(updateWidth);
    observer.observe(previewFrameRef.current);
    return () => observer.disconnect();
  }, [selectedTemplateId]);

  useEffect(() => {
    if (!ready || !selectedTemplateId) return;
    const stored: StoredState = {
      templateId: selectedTemplateId,
      profile
    };
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(stored));
  }, [profile, ready, selectedTemplateId]);

  const selectedTemplate = useMemo(() => getTemplateById(selectedTemplateId), [selectedTemplateId]);
  const previewScale = Math.min(previewFrameWidth / 1200, 1);

  const savePng = async () => {
    if (!previewRef.current) return;

    setSaving(true);
    try {
      const dataUrl = await toPng(previewRef.current, {
        cacheBust: true,
        pixelRatio: 2,
        width: 1200,
        height: 1200,
        style: {
          width: "1200px",
          height: "1200px"
        }
      });
      const link = document.createElement("a");
      link.download = `oshi-profile-${selectedTemplate.id}.png`;
      link.href = dataUrl;
      link.click();
    } finally {
      setSaving(false);
    }
  };

  const copyPostText = async () => {
    await navigator.clipboard.writeText(createPostText(profile));
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1800);
  };

  if (!ready) {
    return (
      <main className="flex min-h-screen items-center justify-center px-4 text-center text-sm font-bold text-[#7a6170]">
        読み込み中...
      </main>
    );
  }

  if (!selectedTemplateId) {
    return (
      <main className="min-h-screen">
        <div className="mx-auto max-w-6xl px-4 pt-5">
          <Link href="/" className="inline-flex items-center gap-2 text-sm font-bold text-[#6c536b]">
            <ArrowLeft size={18} />
            トップへ
          </Link>
          {invalidTemplate ? (
            <div className="mt-4 rounded-lg border border-[#f2b6c9] bg-white px-4 py-3 text-sm font-bold text-[#d94d86]">
              指定されたテンプレートが見つかりません。別のテンプレートを選んでください。
            </div>
          ) : null}
        </div>
        <TemplateSelector activeCategory={activeCategory} onCategoryChange={setActiveCategory} />
      </main>
    );
  }

  return (
    <main className="min-h-screen px-4 py-5">
      <div className="mx-auto mb-4 flex max-w-7xl items-center justify-between gap-3">
        <Link href="/" className="inline-flex items-center gap-2 text-sm font-bold text-[#6c536b]">
          <ArrowLeft size={18} />
          トップへ
        </Link>
        <Link
          href="/create?resetTemplate=1"
          className="inline-flex items-center gap-2 rounded-lg bg-white px-3 py-2 text-sm font-bold text-[#4b3342] shadow-sm"
        >
          <RefreshCcw size={16} />
          テンプレ変更
        </Link>
      </div>

      <div className="mx-auto grid max-w-7xl gap-5 lg:grid-cols-[minmax(0,0.9fr)_minmax(390px,0.8fr)] lg:items-start">
        <div className="lg:order-1">
          <ProfileForm profile={profile} onChange={setProfile} />
        </div>

        <div className="space-y-4 lg:order-2 lg:sticky lg:top-5">
          <section className="rounded-lg border border-[#f5cfdf] bg-white p-4 shadow-soft sm:p-5">
            <div className="mb-4">
              <p className="text-xs font-black uppercase tracking-[0.12em] text-[#e85f94]">STEP 3</p>
              <h1 className="mt-1 text-xl font-black text-[#4b3342]">プレビュー</h1>
              <p className="mt-1 text-sm leading-6 text-[#7a6170]">
                この部分だけがPNG保存されます。Xに投稿しやすい1200×1200pxです。
              </p>
            </div>

            <div
              ref={previewFrameRef}
              className="relative mx-auto aspect-square w-full max-w-[560px] overflow-hidden rounded-lg border border-[#f5cfdf] bg-white shadow-sm"
            >
              <div
                className="absolute left-0 top-0 origin-top-left"
                style={{ width: 1200, height: 1200, transform: `scale(${previewScale})` }}
              >
                <ProfilePreview ref={previewRef} template={selectedTemplate} profile={profile} />
              </div>
            </div>
          </section>

          <div className="grid gap-3 sm:grid-cols-2">
            <SaveImageButton onSave={savePng} saving={saving} />
            <button
              type="button"
              onClick={copyPostText}
              className="flex min-h-[52px] items-center justify-center gap-2 rounded-lg bg-[#e85f94] px-4 py-3 text-base font-black text-white shadow-soft transition hover:brightness-110"
            >
              <Copy size={20} />
              {copied ? "コピー済み" : "投稿文をコピー"}
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
