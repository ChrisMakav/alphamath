import type Stripe from "stripe";
import { resend, EMAIL_FROM } from "../resend";
import { premiumConfirmationEmailHtml } from "./premium-confirmation";

export async function sendPremiumConfirmationEmail({
  to,
  name,
  invoice,
  siteUrl,
}: {
  to: string;
  name: string | null;
  invoice: Stripe.Invoice;
  siteUrl: string;
}) {
  const amountLabel = `${(invoice.amount_paid / 100).toFixed(2).replace(".", ",")}€`;
  const dateLabel = new Date(invoice.created * 1000).toLocaleDateString("fr-FR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const attachments: { filename: string; content: Buffer }[] = [];
  if (invoice.invoice_pdf) {
    const pdfResponse = await fetch(invoice.invoice_pdf);
    if (pdfResponse.ok) {
      const pdfBuffer = Buffer.from(await pdfResponse.arrayBuffer());
      attachments.push({
        filename: `facture-alphamath-${invoice.number ?? invoice.id}.pdf`,
        content: pdfBuffer,
      });
    }
  }

  const { error } = await resend.emails.send({
    from: EMAIL_FROM,
    to,
    subject: "Bienvenue dans AlphaMath Premium 🎉",
    html: premiumConfirmationEmailHtml({
      name,
      amountLabel,
      dateLabel,
      invoiceNumber: invoice.number ?? null,
      dashboardUrl: `${siteUrl}/dashboard`,
    }),
    attachments,
  });

  if (error) throw new Error(error.message);
}
