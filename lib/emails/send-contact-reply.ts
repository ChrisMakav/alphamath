import { resend, EMAIL_FROM } from "../resend";
import { contactReplyEmailHtml } from "./contact-reply";

export async function sendContactReplyEmail({
  to,
  name,
  subjectLabel,
  originalMessage,
  reply,
}: {
  to: string;
  name: string;
  subjectLabel: string;
  originalMessage: string;
  reply: string;
}) {
  const { error } = await resend.emails.send({
    from: EMAIL_FROM,
    to,
    subject: "Réponse à votre demande — AlphaMath",
    html: contactReplyEmailHtml({ name, subjectLabel, originalMessage, reply }),
  });

  if (error) throw new Error(error.message);
}
