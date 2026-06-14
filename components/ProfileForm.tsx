"use client";

import type { FormField, ProfileData } from "@/data/formFields";
import { formFields } from "@/data/formFields";

export function ProfileForm({
  profile,
  onChange
}: {
  profile: ProfileData;
  onChange: (nextProfile: ProfileData) => void;
}) {
  const updateField = (field: FormField, value: string) => {
    onChange({ ...profile, [field.key]: value });
  };

  const updateImage = async (file: File | undefined) => {
    if (!file) return;
    const objectUrl = URL.createObjectURL(file);
    const image = new Image();
    image.src = objectUrl;
    await image.decode();

    const maxSize = 1000;
    const scale = Math.min(maxSize / image.naturalWidth, maxSize / image.naturalHeight, 1);
    const width = Math.max(1, Math.round(image.naturalWidth * scale));
    const height = Math.max(1, Math.round(image.naturalHeight * scale));
    const canvas = document.createElement("canvas");
    canvas.width = width;
    canvas.height = height;
    const context = canvas.getContext("2d");
    if (!context) {
      URL.revokeObjectURL(objectUrl);
      return;
    }
    context.drawImage(image, 0, 0, width, height);
    const dataUrl = canvas.toDataURL("image/jpeg", 0.92);
    URL.revokeObjectURL(objectUrl);
    onChange({ ...profile, profileImage: dataUrl });
  };

  return (
    <section className="rounded-lg border border-[#f5cfdf] bg-white p-4 shadow-soft sm:p-5">
      <div className="mb-5">
        <p className="text-xs font-black uppercase tracking-[0.12em] text-[#e85f94]">STEP 2</p>
        <h2 className="mt-1 text-xl font-black text-[#4b3342]">プロフィールを入力</h2>
        <p className="mt-1 text-sm leading-6 text-[#7a6170]">
          空欄でもOKです。入力すると右側のプロフィール帳にすぐ反映されます。
        </p>
      </div>

      <div className="mb-4 rounded-lg border border-[#efcfdd] bg-[#fffafb] p-3">
        <span className="mb-2 block text-sm font-bold text-[#5d4654]">プロフィール画像</span>
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
          <div className="flex h-24 w-24 items-center justify-center overflow-hidden rounded-lg border-2 border-dashed border-[#f0a9c5] bg-white text-xs font-bold text-[#d982a5]">
            {profile.profileImage ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img src={profile.profileImage} alt="" className="h-full w-full object-cover" />
            ) : (
              "画像"
            )}
          </div>
          <div className="flex-1">
            <input
              type="file"
              accept="image/*"
              onChange={(event) => updateImage(event.target.files?.[0])}
              className="block w-full text-sm text-[#5d4654] file:mr-3 file:rounded-md file:border-0 file:bg-[#e85f94] file:px-4 file:py-2 file:text-sm file:font-bold file:text-white"
            />
            <button
              type="button"
              onClick={() => onChange({ ...profile, profileImage: "" })}
              className="mt-2 text-xs font-bold text-[#d982a5]"
            >
              画像を外す
            </button>
          </div>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {formFields.map((field) => (
          <label key={field.key} className={field.type === "textarea" ? "block md:col-span-2" : "block"}>
            <span className="mb-1.5 block text-sm font-bold text-[#5d4654]">{field.label}</span>
            {field.type === "textarea" ? (
              <textarea
                value={profile[field.key] ?? ""}
                onChange={(event) => updateField(field, event.target.value)}
                placeholder={field.placeholder}
                rows={field.key === "messageToOshi" ? 4 : 3}
                className="min-h-28 w-full rounded-lg border border-[#efcfdd] bg-[#fffafb] px-3 py-3 text-base text-[#4b3342] outline-none transition placeholder:text-[#b99bab] focus:border-[#e85f94] focus:bg-white focus:ring-4 focus:ring-[#ffdbe8]"
              />
            ) : field.type === "select" ? (
              <select
                value={profile[field.key] ?? ""}
                onChange={(event) => updateField(field, event.target.value)}
                className="min-h-12 w-full rounded-lg border border-[#efcfdd] bg-[#fffafb] px-3 text-base text-[#4b3342] outline-none transition focus:border-[#e85f94] focus:bg-white focus:ring-4 focus:ring-[#ffdbe8]"
              >
                <option value="">{field.placeholder}</option>
                {field.options?.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            ) : (
              <input
                value={profile[field.key] ?? ""}
                onChange={(event) => updateField(field, event.target.value)}
                placeholder={field.placeholder}
                className="min-h-12 w-full rounded-lg border border-[#efcfdd] bg-[#fffafb] px-3 text-base text-[#4b3342] outline-none transition placeholder:text-[#b99bab] focus:border-[#e85f94] focus:bg-white focus:ring-4 focus:ring-[#ffdbe8]"
              />
            )}
          </label>
        ))}
      </div>
    </section>
  );
}
