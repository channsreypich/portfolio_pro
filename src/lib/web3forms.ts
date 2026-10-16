import { PERSONAL_INFO } from "@/data/portfolioData";

export interface ContactSubmissionPayload {
  name: string;
  email: string;
  subject?: string;
  message: string;
}

export interface SubmissionResult {
  success: boolean;
  deliveredVia: "web3forms" | "smtp" | "mailto";
  message: string;
  mailtoUrl?: string;
}

/**
 * Submits contact form via Web3Forms directly to Chhun Chansreypich's Gmail (chhunchansreypich645@gmail.com).
 * Recommended by Web3Forms for client-side execution to bypass server IP rate limits.
 */
export async function submitContactForm(
  payload: ContactSubmissionPayload
): Promise<SubmissionResult> {
  const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY;

  // 1. If Web3Forms access key is available, submit directly from the client browser
  if (
    accessKey &&
    accessKey !== "YOUR_WEB3FORMS_ACCESS_KEY_HERE" &&
    accessKey.trim().length > 0
  ) {
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: accessKey.trim(),
          name: payload.name.trim(),
          email: payload.email.trim(),
          subject: `[Portfolio Inquiry] ${payload.subject?.trim() || "Message from " + payload.name.trim()}`,
          message: payload.message.trim(),
          from_name: `${payload.name.trim()} (Developer Portfolio)`,
          botcheck: false,
        }),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        return {
          success: true,
          deliveredVia: "web3forms",
          message: `Your message was delivered directly to ${PERSONAL_INFO.email} via Web3Forms!`,
        };
      } else {
        console.warn("Web3Forms submission failed:", data);
      }
    } catch (err) {
      console.error("Web3Forms network error:", err);
    }
  }

  // 2. Fallback to /api/contact in case SMTP (GMAIL_APP_PASSWORD) is configured on the server
  try {
    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    if (res.ok) {
      const data = await res.json();
      if (data.deliveredVia === "gmail_smtp") {
        return {
          success: true,
          deliveredVia: "smtp",
          message: `Your message was delivered directly to ${PERSONAL_INFO.email}!`,
        };
      }
    }
  } catch (err) {
    console.error("Fallback /api/contact error:", err);
  }

  // 3. Fallback: formatted mailto URL addressed to chhunchansreypich645@gmail.com
  const mailtoSubject = encodeURIComponent(
    `[Portfolio] ${payload.subject || "Contact from " + payload.name}`
  );
  const mailtoBody = encodeURIComponent(
    `Name: ${payload.name}\nEmail: ${payload.email}\n\nMessage:\n${payload.message}`
  );
  const mailtoUrl = `mailto:${PERSONAL_INFO.email}?subject=${mailtoSubject}&body=${mailtoBody}`;

  return {
    success: true,
    deliveredVia: "mailto",
    message: `Your message is ready to send to ${PERSONAL_INFO.email}.`,
    mailtoUrl,
  };
}
