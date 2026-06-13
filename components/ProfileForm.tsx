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
    <section className="rounded-lg border border-white/80 bg-white/[0.88] p-4 shadow-soft backdrop-blur">
      <div className="mb-4">
        <p className="text-sm font-bold text-[#d85f91]">Profile</p>
        <h2 className="mt-1 text-xl font-black text-[#3f3342]">プロフィール入力</h2>
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        {formFields.map((field) => (
          <label
            key={field.key}
            className={field.type === "textarea" ? "block md:col-span-2" : "block"}
          >
            <span className="mb-1.5 block text-sm font-bold text-[#514554]">{field.label}</span>
            {field.type === "textarea" ? (
              <textarea
                value={profile[field.key] ?? ""}
                onChange={(event) => updateField(field, event.target.value)}
                placeholder={field.placeholder}
                rows={field.key === "messageToOshi" ? 4 : 3}
                className="min-h-28 w-full rounded-lg border border-[#eadde8] bg-white px-3 py-3 text-base outline-none transition placeholder:text-[#b9aab7] focus:border-[#e46a9d] focus:ring-4 focus:ring-[#ffd7e7]"
              />
            ) : field.type === "select" ? (
              <select
                value={profile[field.key] ?? ""}
                onChange={(event) => updateField(field, event.target.value)}
                className="min-h-12 w-full rounded-lg border border-[#eadde8] bg-white px-3 text-base outline-none transition focus:border-[#e46a9d] focus:ring-4 focus:ring-[#ffd7e7]"
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
                className="min-h-12 w-full rounded-lg border border-[#eadde8] bg-white px-3 text-base outline-none transition placeholder:text-[#b9aab7] focus:border-[#e46a9d] focus:ring-4 focus:ring-[#ffd7e7]"
              />
            )}
          </label>
        ))}
      </div>
    </section>
  );
}
