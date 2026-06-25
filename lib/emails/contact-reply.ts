function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

export function contactReplyEmailHtml({
  name,
  subjectLabel,
  originalMessage,
  reply,
}: {
  name: string;
  subjectLabel: string;
  originalMessage: string;
  reply: string;
}) {
  const safeName = escapeHtml(name);
  const safeOriginalMessage = escapeHtml(originalMessage);
  const safeReply = escapeHtml(reply);

  return `
  <div style="background:#f4f5f7;padding:32px 16px;font-family:Helvetica,Arial,sans-serif;">
    <div style="max-width:480px;margin:0 auto;background:#ffffff;border-radius:12px;overflow:hidden;border:1px solid #e5e7eb;">
      <div style="background:#0ea656;padding:24px 32px;">
        <span style="color:#ffffff;font-size:18px;font-weight:800;letter-spacing:-0.02em;">AlphaMath</span>
      </div>
      <div style="padding:32px;">
        <h1 style="font-size:20px;font-weight:800;color:#14162a;margin:0 0 16px;">Réponse à votre demande</h1>
        <p style="font-size:14px;color:#4b5066;line-height:1.6;margin:0 0 20px;">Bonjour ${safeName},</p>
        <div style="font-size:14px;color:#14162a;line-height:1.6;white-space:pre-wrap;margin:0 0 24px;">${safeReply}</div>
        <div style="border-top:1px solid #e5e7eb;padding-top:16px;margin-top:8px;">
          <p style="font-size:12px;color:#8890b0;margin:0 0 8px;">Votre message initial — ${escapeHtml(subjectLabel)} :</p>
          <p style="font-size:12px;color:#8890b0;line-height:1.6;white-space:pre-wrap;margin:0;font-style:italic;">"${safeOriginalMessage}"</p>
        </div>
        <p style="font-size:12px;color:#8890b0;line-height:1.6;margin:32px 0 0;">
          Site signé MAKAV Service Digital.
        </p>
      </div>
    </div>
  </div>
  `;
}
