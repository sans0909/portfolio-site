import { useState, type FormEvent } from "react";
import type { ContactFormData, ContactFormErrors, SubmitStatus } from "../types/contact";
import { sendContactEmail } from "../services/emailService";

const initialData: ContactFormData = { name: "", email: "", subject: "", message: "" };

function validate(data: ContactFormData): ContactFormErrors {
  const errors: ContactFormErrors = {};

  if (!data.name.trim()) errors.name = "お名前を入力してください";

  if (!data.email.trim()) {
    errors.email = "メールアドレスを入力してください";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    errors.email = "メールアドレスの形式が正しくありません";
  }

  if (!data.subject.trim()) errors.subject = "件名を入力してください";

  if (!data.message.trim()) {
    errors.message = "メッセージを入力してください";
  } else if (data.message.trim().length < 10) {
    errors.message = "メッセージは10文字以上で入力してください";
  }

  return errors;
}

export function useContactForm() {
  const [data, setData] = useState<ContactFormData>(initialData);
  const [errors, setErrors] = useState<ContactFormErrors>({});
  const [status, setStatus] = useState<SubmitStatus>("idle");
  const [serverError, setServerError] = useState<string | null>(null);

  function updateField<K extends keyof ContactFormData>(field: K, value: ContactFormData[K]) {
    setData((prev) => ({ ...prev, [field]: value }));
    setErrors((prev) => ({ ...prev, [field]: undefined }));
    // Editing again means the previous result no longer applies.
    if (status === "success" || status === "error") setStatus("idle");
  }

  async function submit(event: FormEvent) {
    event.preventDefault();
    const validationErrors = validate(data);
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length > 0) return;

    setStatus("submitting");
    setServerError(null);
    try {
      await sendContactEmail(data);
      setStatus("success");
      setData(initialData);
    } catch (err) {
      setStatus("error");
      // Config errors (e.g. missing env vars) are for developers; visitors get a plain message.
      setServerError(
        import.meta.env.DEV && err instanceof Error
          ? err.message
          : "送信に失敗しました。時間をおいて、もう一度お試しください。"
      );
    }
  }

  return { data, errors, status, serverError, updateField, submit };
}
