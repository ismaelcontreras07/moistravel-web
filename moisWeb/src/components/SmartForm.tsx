"use client";

import * as React from "react";
import "./smart-form.css";

/* ========= Types ========= */
type FieldType = "text" | "email" | "number" | "date" | "textarea" | "select";

export type SmartField = {
  id: string;
  name?: string;                 // por defecto = id
  label?: string;
  type: FieldType;
  placeholder?: string;
  required?: boolean;
  min?: number;
  max?: number;
  step?: number;
  pattern?: string;              // RegExp en string (para atributo pattern)
  options?: { label: string; value: string }[]; // para select
  rows?: number;                 // textarea
  // Mostrar placeholder "dd/mm/aaaa" y activar nativo al focus
  showDatePlaceholder?: boolean;
  // Valor inicial
  defaultValue?: string | number;
  // Validación custom por campo (retorna string con error o undefined)
  validate?: (value: string) => string | undefined;
};

export type SmartFormProps = {
  title?: string;
  description?: React.ReactNode;
  fields: SmartField[];
  submitLabel?: string;
  onSubmit?: (values: Record<string, string>) => void | Promise<void>;
  onChange?: (values: Record<string, string>) => void;
  onError?: (errors: Record<string, string>) => void;
  // Validación global (ej. departure >= arrival). Devuelve mapa de errores.
  onValidate?: (values: Record<string, string>) => Record<string, string> | void;
  className?: string;
};

/* ========= Component ========= */
export default function SmartForm({
  title,
  description,
  fields,
  submitLabel = "Submit",
  onSubmit,
  onChange,
  onError,
  onValidate,
  className = "",
}: SmartFormProps) {
  // estado de valores
  const [values, setValues] = React.useState<Record<string, string>>(() => {
    const initial: Record<string, string> = {};
    for (const f of fields) initial[f.id] = f.defaultValue?.toString() ?? "";
    return initial;
  });

  // estado de errores
  const [errors, setErrors] = React.useState<Record<string, string>>({});

  // para el truco de fecha con placeholder
  const [dateTypes, setDateTypes] = React.useState<Record<string, "text" | "date">>(() => {
    const init: Record<string, "text" | "date"> = {};
    for (const f of fields) {
      if (f.type === "date" && f.showDatePlaceholder) init[f.id] = "text";
    }
    return init;
  });

  function setFieldValue(id: string, v: string) {
    setValues(prev => {
      const next = { ...prev, [id]: v };
      onChange?.(next);
      return next;
    });
  }

  function runNativeRules(f: SmartField, v: string): string | undefined {
    if (f.required && !v.trim()) return "Este campo es obligatorio.";
    if (f.type === "email" && v) {
      // validación email muy simple
      const ok = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
      if (!ok) return "Correo inválido.";
    }
    if (f.pattern && v) {
      const re = new RegExp(f.pattern);
      if (!re.test(v)) return "Formato inválido.";
    }
    if (f.type === "number" && v) {
      const n = Number(v);
      if (!Number.isFinite(n)) return "Debe ser numérico.";
      if (f.min !== undefined && n < f.min) return `Mínimo ${f.min}.`;
      if (f.max !== undefined && n > f.max) return `Máximo ${f.max}.`;
    }
    return undefined;
    }

  function validateAll(curValues = values): Record<string, string> {
    const out: Record<string, string> = {};
    for (const f of fields) {
      const v = curValues[f.id] ?? "";
      const nativeErr = runNativeRules(f, v);
      const customErr = f.validate?.(v);
      const err = customErr ?? nativeErr;
      if (err) out[f.id] = err;
    }
    const globalErrs = onValidate?.(curValues);
    if (globalErrs) {
      for (const k of Object.keys(globalErrs)) out[k] = globalErrs[k];
    }
    return out;
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const newErrors = validateAll();
    setErrors(newErrors);
    if (Object.keys(newErrors).length > 0) {
      onError?.(newErrors);
      return;
    }
    await onSubmit?.(values);
  }

  return (
    <form className={`sf ${className}`} onSubmit={handleSubmit} noValidate>
      {title && <h2 className="sf__title">{title}</h2>}
      {description && <div className="sf__desc">{description}</div>}

      {/* Campos */}
      {fields.map((f) => {
        const name = f.name ?? f.id;
        const value = values[f.id] ?? "";
        const err = errors[f.id];
        const isDateText = f.type === "date" && f.showDatePlaceholder && dateTypes[f.id] === "text";
        const typeAttr = f.type === "date" ? (isDateText ? "text" : "date") : f.type;

        const commonProps = {
          id: f.id,
          name,
          required: f.required,
          placeholder: f.placeholder,
          "aria-invalid": !!err,
          "aria-describedby": err ? `${f.id}-error` : undefined,
          className: `sf__input ${f.type === "textarea" ? "sf__textarea" : ""} ${isDateText ? "sf__input--date" : ""} ${err ? "sf__input--error" : ""}`,
          value,
          onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
            setFieldValue(f.id, e.target.value),
          onBlur: (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
            const newErrors = validateAll();
            setErrors(newErrors);
          },
        };

        return (
          <div key={f.id} className="sf__group">
            {f.label && <label htmlFor={f.id} className="sf__label">{f.label}</label>}

            {f.type === "select" ? (
              <select {...(commonProps as any)}>
                <option value="" hidden>{f.placeholder ?? "Select an option"}</option>
                {f.options?.map(op => (
                  <option key={op.value} value={op.value}>{op.label}</option>
                ))}
              </select>
            ) : f.type === "textarea" ? (
              <textarea
                {...(commonProps as any)}
                rows={f.rows ?? 4}
              />
            ) : (
              <input
                {...(commonProps as any)}
                type={typeAttr}
                min={f.min}
                max={f.max}
                step={f.step}
                pattern={f.pattern}
                onFocus={(e) => {
                  if (f.type === "date" && f.showDatePlaceholder) {
                    setDateTypes(prev => ({ ...prev, [f.id]: "date" }));
                  }
                }}
                onBlur={(e) => {
                  commonProps.onBlur?.(e); // ✅ ahora sí acepta un arg
                  if (f.type === "date" && f.showDatePlaceholder && !e.currentTarget.value) {
                    setDateTypes(prev => ({ ...prev, [f.id]: "text" }));
                  }
                }}
              />
            )}

            {err && <div id={`${f.id}-error`} className="sf__error">{err}</div>}
          </div>
        );
      })}

      <button type="submit" className="sf__btn">{submitLabel}</button>
    </form>
  );
}
