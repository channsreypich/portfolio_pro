import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const { name, email, subject, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required." },
        { status: 400 }
      );
    }

    const recipientEmail =
      process.env.RECIPIENT_EMAIL || "chhunchansreypich645@gmail.com";
    const gmailUser = process.env.GMAIL_USER || recipientEmail;
    const gmailAppPassword = process.env.GMAIL_APP_PASSWORD;

    // 1. If Gmail App Password is configured, send directly via SMTP
    if (gmailAppPassword) {
      const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: gmailUser,
          pass: gmailAppPassword,
        },
      });

      const formattedSubject = `[Portfolio] ${subject || "New Inquiry"} from ${name}`;

      const mailOptions = {
        from: `"${name}" <${gmailUser}>`,
        replyTo: email,
        to: recipientEmail,
        subject: formattedSubject,
        text: `New Portfolio Contact Submission:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━
From: ${name}
Email: ${email}
Subject: ${subject || "General Inquiry"}
Date: ${new Date().toISOString()}

Message:
${message}
━━━━━━━━━━━━━━━━━━━━━━━━━━━━`,
        html: `
          <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; border: 1px solid #e2e8f0; border-radius: 12px; background-color: #ffffff;">
            <div style="border-bottom: 2px solid #10b981; padding-bottom: 12px; margin-bottom: 20px;">
              <h2 style="color: #0f172a; margin: 0; font-size: 20px;">📬 New Portfolio Contact Message</h2>
              <p style="color: #64748b; margin: 4px 0 0 0; font-size: 13px;">Received from your personal developer portfolio</p>
            </div>
            
            <div style="background-color: #f8fafc; border-radius: 8px; padding: 16px; margin-bottom: 20px;">
              <table style="width: 100%; border-collapse: collapse; font-size: 14px;">
                <tr>
                  <td style="padding: 6px 0; color: #64748b; width: 90px;"><strong>Sender:</strong></td>
                  <td style="padding: 6px 0; color: #0f172a; font-weight: 600;">${name}</td>
                </tr>
                <tr>
                  <td style="padding: 6px 0; color: #64748b;"><strong>Email:</strong></td>
                  <td style="padding: 6px 0;"><a href="mailto:${email}" style="color: #0284c7; text-decoration: none;">${email}</a></td>
                </tr>
                <tr>
                  <td style="padding: 6px 0; color: #64748b;"><strong>Subject:</strong></td>
                  <td style="padding: 6px 0; color: #0f172a;">${subject || "General Inquiry"}</td>
                </tr>
              </table>
            </div>

            <div style="margin-bottom: 24px;">
              <h3 style="color: #0f172a; font-size: 14px; margin-bottom: 8px;">Message:</h3>
              <div style="background-color: #ffffff; border: 1px solid #e2e8f0; border-radius: 8px; padding: 16px; font-size: 14px; line-height: 1.6; color: #334155; white-space: pre-wrap;">${message}</div>
            </div>

            <div style="border-top: 1px solid #e2e8f0; padding-top: 16px; text-align: center;">
              <a href="mailto:${email}?subject=Re: ${encodeURIComponent(subject || 'Portfolio Inquiry')}" style="display: inline-block; background-color: #10b981; color: #ffffff; padding: 10px 24px; border-radius: 9999px; text-decoration: none; font-weight: 600; font-size: 13px;">Reply to ${name}</a>
            </div>
          </div>
        `,
      };

      await transporter.sendMail(mailOptions);

      return NextResponse.json({
        success: true,
        deliveredVia: "gmail_smtp",
        recipient: recipientEmail,
        message: `Message sent directly to ${recipientEmail}`,
      });
    }

    // 2. Fallback mailto URL if GMAIL_APP_PASSWORD is not yet configured in .env.local
    const mailtoSubject = encodeURIComponent(`[Portfolio] ${subject || "Contact from " + name}`);
    const mailtoBody = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
    );
    const mailtoUrl = `mailto:${recipientEmail}?subject=${mailtoSubject}&body=${mailtoBody}`;

    return NextResponse.json({
      success: true,
      deliveredVia: "mailto_fallback",
      recipient: recipientEmail,
      mailtoUrl,
      message: `Directing email to ${recipientEmail}`,
    });
  } catch (error) {
    console.error("Contact API error:", error);
    return NextResponse.json(
      { error: "Internal server error processing contact message." },
      { status: 500 }
    );
  }
}
