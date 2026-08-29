import { useContactForm } from "../../hooks/useContactForm";
import styles from "./ContactForm.module.css";

export function ContactForm() {
  const { data, errors, status, serverError, updateField, submit } = useContactForm();

  return (
    <form className={styles.form} onSubmit={submit} noValidate>
      <div className={styles.field}>
        <label htmlFor="name" className="mono">
          お名前
        </label>
        <input
          id="name"
          type="text"
          autoComplete="name"
          value={data.name}
          onChange={(e) => updateField("name", e.target.value)}
          aria-invalid={Boolean(errors.name)}
          aria-describedby={errors.name ? "name-error" : undefined}
        />
        {errors.name && (
          <p id="name-error" className={styles.error}>
            {errors.name}
          </p>
        )}
      </div>

      <div className={styles.field}>
        <label htmlFor="email" className="mono">
          メールアドレス
        </label>
        <input
          id="email"
          type="email"
          autoComplete="email"
          value={data.email}
          onChange={(e) => updateField("email", e.target.value)}
          aria-invalid={Boolean(errors.email)}
          aria-describedby={errors.email ? "email-error" : undefined}
        />
        {errors.email && (
          <p id="email-error" className={styles.error}>
            {errors.email}
          </p>
        )}
      </div>

      <div className={styles.field}>
        <label htmlFor="subject" className="mono">
          件名
        </label>
        <input
          id="subject"
          type="text"
          value={data.subject}
          onChange={(e) => updateField("subject", e.target.value)}
          aria-invalid={Boolean(errors.subject)}
          aria-describedby={errors.subject ? "subject-error" : undefined}
        />
        {errors.subject && (
          <p id="subject-error" className={styles.error}>
            {errors.subject}
          </p>
        )}
      </div>

      <div className={styles.field}>
        <label htmlFor="message" className="mono">
          メッセージ
        </label>
        <textarea
          id="message"
          rows={6}
          value={data.message}
          onChange={(e) => updateField("message", e.target.value)}
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? "message-error" : undefined}
        />
        {errors.message && (
          <p id="message-error" className={styles.error}>
            {errors.message}
          </p>
        )}
      </div>

      <button type="submit" className="btn btn-primary" disabled={status === "submitting"}>
        {status === "submitting" ? "送信中…" : "送信する"}
      </button>

      {status === "success" && (
        <p className={styles.success} role="status">
          送信しました。ご連絡ありがとうございます。
        </p>
      )}
      {status === "error" && (
        <p className={styles.error} role="alert">
          {serverError}
        </p>
      )}
    </form>
  );
}
