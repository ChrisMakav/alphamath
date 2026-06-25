export function premiumConfirmationEmailHtml({
  name,
  amountLabel,
  dateLabel,
  invoiceNumber,
  dashboardUrl,
}: {
  name: string | null;
  amountLabel: string;
  dateLabel: string;
  invoiceNumber: string | null;
  dashboardUrl: string;
}) {
  const greeting = name ? `Bonjour ${name},` : "Bonjour,";

  return `
  <div style="background:#f4f5f7;padding:32px 16px;font-family:Helvetica,Arial,sans-serif;">
    <div style="max-width:480px;margin:0 auto;background:#ffffff;border-radius:12px;overflow:hidden;border:1px solid #e5e7eb;">
      <div style="background:#0ea656;padding:24px 32px;">
        <span style="color:#ffffff;font-size:18px;font-weight:800;letter-spacing:-0.02em;">AlphaMath</span>
      </div>
      <div style="padding:32px;">
        <h1 style="font-size:20px;font-weight:800;color:#14162a;margin:0 0 16px;">Bienvenue dans AlphaMath Premium 🎉</h1>
        <p style="font-size:14px;color:#4b5066;line-height:1.6;margin:0 0 12px;">${greeting}</p>
        <p style="font-size:14px;color:#4b5066;line-height:1.6;margin:0 0 12px;">
          Merci pour ta souscription à <strong>AlphaMath Premium</strong>. Ton paiement de
          <strong> ${amountLabel}</strong> du ${dateLabel} a bien été enregistré et tu as désormais
          accès à l'ensemble des cours, exercices, niveaux et au tuteur IA.
        </p>
        <p style="font-size:14px;color:#4b5066;line-height:1.6;margin:0 0 24px;">
          Tu trouveras ta facture${invoiceNumber ? ` (n° ${invoiceNumber})` : ""} en pièce jointe de cet email.
        </p>
        <a href="${dashboardUrl}" style="display:inline-block;background:#0ea656;color:#ffffff;text-decoration:none;font-size:14px;font-weight:700;padding:12px 24px;border-radius:8px;">
          Aller au tableau de bord
        </a>
        <p style="font-size:12px;color:#8890b0;line-height:1.6;margin:32px 0 0;">
          Site signé MAKAV Service Digital.
        </p>
      </div>
    </div>
  </div>
  `;
}
