"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import { toPng } from "html-to-image";
import { ArrowLeft } from "lucide-react";
import { ActionButtons } from "@/components/ActionButtons";
import { ProfileForm } from "@/components/ProfileForm";
import { ProfilePreview } from "@/components/ProfilePreview";
import { TemplateSelector } from "@/components/TemplateSelector";
import { defaultProfileData, type ProfileData } from "@/data/formFields";
import { getTemplateById, templates, type TemplateCategory } from "@/data/templates";
import { createPostText } from "@/lib/postText";

const STORAGE_KEY = "oshi-profile-maker:v1";

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
  const [previewFrameWidth, setPreviewFrameWidth] = useState(360);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const templateId = params.get("template");
    const category = params.get("category");
    const resetTemplate = params.get("resetTemplate") === "1";
    const storedRaw = window.localStorage.getItem(STORAGE_KEY);

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

    if (templateId && templates.some((template) => template.id === templateId)) {
      setSelectedTemplateId(templateId);
    }
    if (category === "song" || category === "member") {
      setActiveCategory(category);
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
        pixelRatio: 1,
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

  if (!selectedTemplateId) {
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

  return (
    <main className="min-h-screen px-4 py-5">
      <div className="mx-auto mb-4 flex max-w-7xl items-center justify-between gap-3">
        <Link href="/" className="inline-flex items-center gap-2 text-sm font-bold text-[#6c536b]">
          <ArrowLeft size={18} />
          トップへ
        </Link>
        <button
          type="button"
          onClick={() => setSelectedTemplateId(null)}
          className="rounded-lg bg-white/[0.82] px-3 py-2 text-sm font-bold text-[#3f3342] shadow-sm"
        >
          テンプレ変更
        </button>
      </div>

      <div className="mx-auto grid max-w-7xl gap-5 lg:grid-cols-[minmax(0,0.92fr)_minmax(390px,0.72fr)] lg:items-start">
        <div className="space-y-5 lg:order-2 lg:sticky lg:top-5">
          <section className="rounded-lg border border-white/80 bg-white/[0.88] p-4 shadow-soft backdrop-blur">
            <div className="mb-3">
              <p className="text-sm font-bold text-[#d85f91]">Preview</p>
              <h1 className="mt-1 text-xl font-black text-[#3f3342]">{selectedTemplate.title}</h1>
              <p className="mt-1 text-sm leading-relaxed text-[#665866]">{selectedTemplate.description}</p>
            </div>
            <div
              ref={previewFrameRef}
              className="relative mx-auto aspect-square w-full max-w-[560px] overflow-hidden rounded-lg border border-white bg-white shadow-sm"
            >
              <div
                className="absolute left-0 top-0 origin-top-left"
                style={{ width: 1200, height: 1200, transform: `scale(${previewScale})` }}
              >
                <ProfilePreview ref={previewRef} template={selectedTemplate} profile={profile} />
              </div>
            </div>
          </section>
          <ActionButtons onSave={savePng} onCopy={copyPostText} saving={saving} copied={copied} />
        </div>

        <div className="lg:order-1">
          <ProfileForm profile={profile} onChange={setProfile} />
        </div>
      </div>
    </main>
  );
}
