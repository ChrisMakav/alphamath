import React from "react";
import { LegalLayout, LegalSection, LegalNote } from "../../components/ui/LegalLayout";

export default function ConfidentialitePage() {
  return (
    <LegalLayout title="Politique de Confidentialité" updatedAt="25 juin 2026">
      <LegalNote>
        Document fourni à titre indicatif. La raison sociale, l&apos;adresse du siège et, le cas
        échéant, les coordonnées d&apos;un délégué à la protection des données doivent être complétées
        par AlphaMath avant toute mise en production.
      </LegalNote>

      <LegalSection title="1. Préambule">
        <p>
          AlphaMath attache une grande importance à la protection des données personnelles de ses
          utilisateurs. Cette politique explique quelles données sont collectées, pourquoi, avec qui
          elles sont partagées, et quels droits vous pouvez exercer, conformément au Règlement Général
          sur la Protection des Données (RGPD) et à la loi Informatique et Libertés.
        </p>
        <p>Le responsable du traitement des données est AlphaMath (informations légales à compléter).</p>
      </LegalSection>

      <LegalSection title="2. Données collectées">
        <ul className="list-disc pl-5 flex flex-col gap-1.5">
          <li><strong className="text-[var(--am-text)]">À l&apos;inscription</strong> : nom, adresse e-mail, mot de passe (stocké de façon chiffrée/hachée), rôle (élève, parent, enseignant) et niveau scolaire.</li>
          <li><strong className="text-[var(--am-text)]">Utilisation de la Plateforme</strong> : cours suivis, exercices réalisés, scores, points d&apos;expérience, séries de progression quotidienne.</li>
          <li><strong className="text-[var(--am-text)]">Paiement</strong> : les abonnements Premium sont traités par Stripe ; AlphaMath ne reçoit ni ne stocke les numéros de carte bancaire.</li>
          <li><strong className="text-[var(--am-text)]">Tuteur IA</strong> : les messages envoyés à l&apos;assistant pédagogique sont transmis à notre prestataire d&apos;intelligence artificielle pour générer une réponse.</li>
          <li><strong className="text-[var(--am-text)]">Formulaire de contact</strong> : nom, e-mail, téléphone (facultatif), sujet et message transmis à un conseiller.</li>
          <li><strong className="text-[var(--am-text)]">Données techniques</strong> : cookies de session nécessaires à l&apos;authentification.</li>
        </ul>
      </LegalSection>

      <LegalSection title="3. Finalités du traitement">
        <ul className="list-disc pl-5 flex flex-col gap-1.5">
          <li>Fournir l&apos;accès à la Plateforme et son contenu pédagogique ;</li>
          <li>Assurer le suivi de la progression et l&apos;adaptation pédagogique de l&apos;Utilisateur ;</li>
          <li>Gérer la facturation et les abonnements ;</li>
          <li>Répondre aux demandes adressées via le formulaire de contact ;</li>
          <li>Assurer la sécurité de la Plateforme et prévenir la fraude ;</li>
          <li>Améliorer nos services.</li>
        </ul>
      </LegalSection>

      <LegalSection title="4. Base légale">
        <p>
          Les traitements reposent sur l&apos;exécution du contrat (fourniture du service souscrit),
          l&apos;intérêt légitime d&apos;AlphaMath (sécurité, amélioration du service), et le respect
          d&apos;obligations légales (facturation, comptabilité).
        </p>
      </LegalSection>

      <LegalSection title="5. Destinataires et sous-traitants">
        <p>Vos données ne sont jamais vendues à des tiers. Elles peuvent être partagées avec les prestataires suivants, dans la stricte limite nécessaire à la fourniture du service :</p>
        <ul className="list-disc pl-5 flex flex-col gap-1.5">
          <li><strong className="text-[var(--am-text)]">Supabase</strong> — hébergement de la base de données et de l&apos;authentification (hébergement en Union Européenne) ;</li>
          <li><strong className="text-[var(--am-text)]">Stripe</strong> — traitement des paiements et abonnements ;</li>
          <li><strong className="text-[var(--am-text)]">Anthropic</strong> (modèle Claude) — génération des réponses du tuteur IA et des évaluations générées par IA.</li>
        </ul>
      </LegalSection>

      <LegalSection title="6. Transferts hors de l'Union Européenne">
        <p>
          Certains de nos prestataires, notamment notre fournisseur de modèle d&apos;intelligence
          artificielle, peuvent traiter des données en dehors de l&apos;Union Européenne. Dans ce cas,
          ces transferts sont encadrés par des garanties appropriées (clauses contractuelles types de
          la Commission européenne ou mécanisme équivalent).
        </p>
      </LegalSection>

      <LegalSection title="7. Durée de conservation">
        <p>
          Les données de compte sont conservées pendant toute la durée d&apos;utilisation de la
          Plateforme, puis supprimées ou anonymisées dans un délai raisonnable après la suppression du
          compte par l&apos;Utilisateur. Les demandes adressées via le formulaire de contact sont
          conservées le temps nécessaire au traitement de la demande.
        </p>
      </LegalSection>

      <LegalSection title="8. Cookies">
        <p>
          AlphaMath utilise uniquement des cookies strictement nécessaires au fonctionnement du
          service, notamment pour maintenir votre session connectée. À ce jour, la Plateforme
          n&apos;utilise pas de cookies publicitaires ou de traceurs tiers à des fins de mesure
          d&apos;audience.
        </p>
      </LegalSection>

      <LegalSection title="9. Vos droits">
        <p>
          Conformément au RGPD, vous disposez d&apos;un droit d&apos;accès, de rectification,
          d&apos;effacement, de limitation, de portabilité et d&apos;opposition concernant vos données
          personnelles. Vous pouvez exercer ces droits en nous contactant via le formulaire de{" "}
          <a href="/contact" className="text-[var(--am-green)] hover:underline">contact</a>. Vous
          disposez également du droit d&apos;introduire une réclamation auprès de la Commission
          Nationale de l&apos;Informatique et des Libertés (CNIL) — <span className="break-all">www.cnil.fr</span>.
        </p>
      </LegalSection>

      <LegalSection title="10. Sécurité des données">
        <p>
          L&apos;accès aux données est protégé par des règles de sécurité au niveau de la base de
          données (Row Level Security), les communications entre votre navigateur et nos serveurs sont
          chiffrées (HTTPS), et les mots de passe sont stockés sous forme hachée, jamais en clair.
        </p>
      </LegalSection>

      <LegalSection title="11. Utilisateurs mineurs">
        <p>
          AlphaMath s&apos;adresse en partie à des élèves mineurs. Nous recommandons aux parents et
          tuteurs légaux d&apos;accompagner la création de compte de leur enfant et de superviser son
          utilisation de la Plateforme.
        </p>
      </LegalSection>

      <LegalSection title="12. Modification de cette politique">
        <p>
          Cette politique de confidentialité peut être mise à jour pour refléter l&apos;évolution de
          nos pratiques ou de la réglementation. La date de dernière mise à jour figure en haut de
          cette page.
        </p>
      </LegalSection>

      <LegalSection title="13. Contact">
        <p>
          Pour toute question relative à vos données personnelles, contactez-nous via le formulaire de{" "}
          <a href="/contact" className="text-[var(--am-green)] hover:underline">contact</a>.
        </p>
      </LegalSection>
    </LegalLayout>
  );
}
