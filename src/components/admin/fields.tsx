// Переиспользуемые поля форм админ-панели.
// Все поля пустые — данные будут приходить из API, когда backend будет готов.

import type { ReactNode } from 'react';

interface FieldProps {
  label: string;
  hint?: string;
}

export function TextField({
  label,
  hint,
  value,
  onChange,
  placeholder = '',
}: FieldProps & {
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
}) {
  return (
    <label className="block">
      <span className="block text-sm font-medium text-gray-300 mb-1.5">{label}</span>
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full bg-gray-900 border border-white/10 rounded-lg px-3 py-2 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-brand-500/50 transition-colors"
      />
      {hint && <span className="block text-xs text-gray-500 mt-1">{hint}</span>}
    </label>
  );
}

export function TextareaField({
  label,
  hint,
  value,
  onChange,
  rows = 4,
  placeholder = '',
}: FieldProps & {
  value: string;
  onChange: (v: string) => void;
  rows?: number;
  placeholder?: string;
}) {
  return (
    <label className="block">
      <span className="block text-sm font-medium text-gray-300 mb-1.5">{label}</span>
      <textarea
        value={value}
        onChange={(e) => onChange(e.target.value)}
        rows={rows}
        placeholder={placeholder}
        className="w-full bg-gray-900 border border-white/10 rounded-lg px-3 py-2 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-brand-500/50 transition-colors resize-y"
      />
      {hint && <span className="block text-xs text-gray-500 mt-1">{hint}</span>}
    </label>
  );
}

export function ImageField({
  label,
  hint,
  value,
  onChange,
}: FieldProps & {
  value: string;
  onChange: (v: string) => void;
}) {
  return (
    <div>
      <span className="block text-sm font-medium text-gray-300 mb-1.5">{label}</span>
      <div className="flex items-center gap-3">
        <div className="w-20 h-14 shrink-0 rounded-lg border border-dashed border-white/20 bg-gray-900 flex items-center justify-center overflow-hidden">
          {value ? (
            <img src={value} alt="" className="w-full h-full object-cover" />
          ) : (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-gray-600">
              <rect x="3" y="3" width="18" height="18" rx="2" />
              <circle cx="8.5" cy="8.5" r="1.5" />
              <path d="M21 15l-5-5L5 21" />
            </svg>
          )}
        </div>
        <div className="flex-1 min-w-0">
          <input
            type="file"
            accept="image/*"
            onChange={(e) => {
              const f = e.target.files?.[0];
              if (f) onChange(URL.createObjectURL(f));
            }}
            className="block w-full text-xs text-gray-400 file:mr-3 file:py-1.5 file:px-3 file:rounded-lg file:border-0 file:text-xs file:font-medium file:bg-white/10 file:text-white hover:file:bg-white/20 file:cursor-pointer cursor-pointer"
          />
          <input
            type="text"
            value={value}
            onChange={(e) => onChange(e.target.value)}
            placeholder="или URL картинки"
            className="mt-2 w-full bg-gray-900 border border-white/10 rounded-lg px-3 py-1.5 text-xs text-white placeholder-gray-600 focus:outline-none focus:border-brand-500/50 transition-colors"
          />
        </div>
      </div>
      {hint && <span className="block text-xs text-gray-500 mt-1">{hint}</span>}
    </div>
  );
}

export function AdminSectionCard({
  title,
  subtitle,
  badge,
  children,
}: {
  title: string;
  subtitle?: string;
  badge?: string;
  children: ReactNode;
}) {
  return (
    <section className="bg-gray-800/60 border border-white/10 rounded-2xl p-5 sm:p-6">
      <div className="mb-5">
        <div className="flex items-center gap-3 flex-wrap">
          <h3 className="text-base sm:text-lg font-bold text-white">{title}</h3>
          {badge && (
            <span className="px-2 py-0.5 bg-brand-500/10 border border-brand-500/20 text-brand-400 text-[11px] font-medium rounded-full">
              {badge}
            </span>
          )}
        </div>
        {subtitle && <p className="text-xs sm:text-sm text-gray-500 mt-1">{subtitle}</p>}
      </div>
      <div className="space-y-4">{children}</div>
    </section>
  );
}

export function RepeatableList({
  title,
  addLabel,
  onAdd,
  children,
}: {
  title?: string;
  addLabel: string;
  onAdd: () => void;
  children?: ReactNode;
}) {
  return (
    <div className="border border-dashed border-white/10 rounded-xl p-4">
      {title && <span className="block text-sm font-medium text-gray-300 mb-3">{title}</span>}
      <div className="space-y-3">{children}</div>
      <button
        type="button"
        onClick={onAdd}
        className="mt-3 inline-flex items-center gap-1.5 text-xs font-medium text-brand-400 hover:text-brand-500 transition-colors"
      >
        <span className="text-base leading-none">+</span> {addLabel}
      </button>
    </div>
  );
}
