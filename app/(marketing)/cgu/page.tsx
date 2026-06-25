import React from "react";
import { LegalLayout, LegalSection, LegalNote } from "../../components/ui/LegalLayout";

export default function CGUPage() {
  return (
    <LegalLayout title="Conditions Générales d'Utilisation" updatedAt="25 juin 2026">
      <LegalNote>
        Document fourni à titre indicatif. Les informations d&apos;identification de l&apos;éditeur
        (raison sociale, forme juridique, adresse du siège, SIRET) doivent être complétées par
        AlphaMath avant toute mise en production.
      </LegalNote>

      <LegalSection title="1. Objet">
        <p>
          AlphaMath (« la Plateforme ») est un service en ligne d&apos;apprentissage des mathématiques
          destiné aux élèves du 6ème à la Licence (L1 à L3), ainsi qu&apos;à leurs parents et aux
          enseignants. La Plateforme propose des cours, des exercices, des annales d&apos;examens
          corrigées, un tuteur conversationnel basé sur l&apos;intelligence artificielle, un générateur
          d&apos;évaluations pour les enseignants, ainsi qu&apos;un suivi de progression.
        </p>
        <p>
          Les présentes Conditions Générales d&apos;Utilisation (« CGU ») régissent l&apos;accès et
          l&apos;utilisation de la Plateforme par tout utilisateur (« l&apos;Utilisateur »).
        </p>
      </LegalSection>

      <LegalSection title="2. Acceptation des CGU">
        <p>
          La création d&apos;un compte ou l&apos;utilisation de la Plateforme implique l&apos;acceptation
          pleine et entière des présentes CGU. Si l&apos;Utilisateur ne les accepte pas, il doit
          s&apos;abstenir d&apos;utiliser la Plateforme.
        </p>
      </LegalSection>

      <LegalSection title="3. Création de compte">
        <ul className="list-disc pl-5 flex flex-col gap-1.5">
          <li>L&apos;inscription nécessite un nom, une adresse e-mail valide et un mot de passe, ou une connexion via Google.</li>
          <li>L&apos;Utilisateur choisit un profil (élève, parent ou enseignant) et, le cas échéant, un niveau scolaire.</li>
          <li>L&apos;Utilisateur s&apos;engage à fournir des informations exactes et à les maintenir à jour.</li>
          <li>L&apos;Utilisateur est responsable de la confidentialité de ses identifiants et de toute activité réalisée depuis son compte.</li>
          <li>
            Pour les élèves mineurs de moins de 15 ans, la création d&apos;un compte doit être effectuée
            avec l&apos;autorisation d&apos;un parent ou tuteur légal, conformément à la réglementation
            applicable au consentement numérique des mineurs.
          </li>
        </ul>
      </LegalSection>

      <LegalSection title="4. Offres, abonnements et facturation">
        <p>
          AlphaMath propose une offre gratuite (essai de 14 jours donnant accès à un cours au choix) et
          une offre Premium payante donnant accès à l&apos;intégralité des cours, exercices, annales et au
          tuteur IA, selon les tarifs affichés sur la page <a href="/pricing" className="text-[var(--am-green)] hover:underline">Tarifs</a>.
        </p>
        <ul className="list-disc pl-5 flex flex-col gap-1.5">
          <li>Les paiements sont traités par notre prestataire Stripe ; AlphaMath ne stocke aucune donnée de carte bancaire.</li>
          <li>L&apos;abonnement Premium se renouvelle automatiquement à la même périodicité, sauf résiliation préalable.</li>
          <li>L&apos;Utilisateur peut résilier son abonnement à tout moment depuis son espace Paramètres ; la résiliation prend effet à la fin de la période en cours déjà payée.</li>
          <li>
            En souscrivant à l&apos;offre Premium, l&apos;Utilisateur demande expressément un accès
            immédiat au contenu numérique et reconnaît renoncer à son droit de rétractation dès le
            début de la fourniture du service, conformément à l&apos;article L221-28 du Code de la
            consommation.
          </li>
        </ul>
      </LegalSection>

      <LegalSection title="5. Tuteur IA (AlphaBot)">
        <p>
          Le tuteur conversationnel repose sur un modèle de langage tiers. Ses réponses sont générées
          automatiquement et peuvent contenir des approximations ou des erreurs. Elles ne remplacent
          pas l&apos;enseignement d&apos;un professeur et doivent être vérifiées par l&apos;Utilisateur,
          notamment avant tout usage dans un cadre évaluatif (devoirs, examens).
        </p>
      </LegalSection>

      <LegalSection title="6. Générateur d'évaluations IA">
        <p>
          Cette fonctionnalité, réservée aux enseignants disposant d&apos;un compte Premium, génère des
          propositions d&apos;évaluations à partir de paramètres choisis par l&apos;enseignant. Le contenu
          généré est une proposition qui doit être relue et validée par l&apos;enseignant avant toute
          diffusion à des élèves.
        </p>
      </LegalSection>

      <LegalSection title="7. Propriété intellectuelle">
        <p>
          L&apos;ensemble des contenus pédagogiques originaux de la Plateforme (cours, exercices,
          fiches de formules, corrections) sont protégés par le droit d&apos;auteur et restent la
          propriété d&apos;AlphaMath ou de ses partenaires. Leur usage est strictement réservé à un
          cadre personnel et pédagogique ; toute reproduction, redistribution ou revente sans
          autorisation est interdite.
        </p>
        <p>
          Les sujets d&apos;examens reproduits dans la rubrique Annales sont des documents officiels
          cités à titre pédagogique, avec mention de leur source. Sauf indication contraire, les
          corrections associées sont des propositions rédigées par AlphaMath et n&apos;ont pas de
          caractère officiel.
        </p>
      </LegalSection>

      <LegalSection title="8. Comportement de l'Utilisateur">
        <p>L&apos;Utilisateur s&apos;engage à :</p>
        <ul className="list-disc pl-5 flex flex-col gap-1.5">
          <li>ne pas usurper l&apos;identité d&apos;un tiers ni partager son compte avec d&apos;autres personnes ;</li>
          <li>ne pas perturber le fonctionnement de la Plateforme (intrusion, surcharge, contournement des protections) ;</li>
          <li>ne pas utiliser la Plateforme à des fins frauduleuses ou contraires à la loi.</li>
        </ul>
      </LegalSection>

      <LegalSection title="9. Disponibilité du service">
        <p>
          AlphaMath met en œuvre des moyens raisonnables pour assurer un accès continu à la Plateforme,
          sans garantir une disponibilité absolue. Des interruptions liées à la maintenance ou à des
          causes extérieures peuvent survenir.
        </p>
      </LegalSection>

      <LegalSection title="10. Responsabilité">
        <p>
          AlphaMath ne pourra être tenu responsable des dommages indirects résultant de
          l&apos;utilisation de la Plateforme, ni des conséquences d&apos;une utilisation des réponses du
          tuteur IA ou des contenus générés sans vérification préalable par l&apos;Utilisateur.
        </p>
      </LegalSection>

      <LegalSection title="11. Résiliation">
        <p>
          L&apos;Utilisateur peut supprimer son compte à tout moment depuis ses Paramètres. AlphaMath se
          réserve le droit de suspendre ou résilier l&apos;accès d&apos;un Utilisateur en cas de
          manquement grave aux présentes CGU.
        </p>
      </LegalSection>

      <LegalSection title="12. Modification des CGU">
        <p>
          AlphaMath peut modifier les présentes CGU à tout moment. Les Utilisateurs seront informés de
          toute modification substantielle. La poursuite de l&apos;utilisation de la Plateforme après
          publication des modifications vaut acceptation des nouvelles CGU.
        </p>
      </LegalSection>

      <LegalSection title="13. Droit applicable et litiges">
        <p>
          Les présentes CGU sont soumises au droit français. En cas de litige, et après tentative de
          résolution amiable, les tribunaux français compétents seront seuls saisis, sauf disposition
          impérative contraire applicable aux consommateurs.
        </p>
      </LegalSection>

      <LegalSection title="14. Contact">
        <p>
          Pour toute question relative aux présentes CGU, l&apos;Utilisateur peut nous écrire via le
          formulaire de <a href="/contact" className="text-[var(--am-green)] hover:underline">contact</a>.
        </p>
      </LegalSection>
    </LegalLayout>
  );
}
