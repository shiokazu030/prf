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

  return (
    <section className="rounded-lg border border-[#f5cfdf] bg-white p-4 shadow-soft sm:p-5">
      <div className="mb-5">
        <p className="text-xs font-black uppercase tracking-[0.12em] text-[#e85f94]">STEP 2</p>
        <h2 className="mt-1 text-xl font-black text-[#4b3342]">プロフィールを入力</h2>
        <p className="mt-1 text-sm leading-6 text-[#7a6170]">
          空欄でもOKです。入力すると右側のプロフィール帳にすぐ反映されます。
        </p>
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
