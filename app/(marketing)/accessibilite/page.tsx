import React from "react";
import { LegalLayout, LegalSection, LegalNote } from "../../components/ui/LegalLayout";

export default function AccessibilitePage() {
  return (
    <LegalLayout title="Déclaration d'accessibilité" updatedAt="25 juin 2026">
      <LegalNote>
        Cette déclaration a été établie par auto-évaluation interne. Aucun audit RGAA externe n&apos;a
        encore été réalisé à ce jour ; elle sera mise à jour dès qu&apos;un audit formel sera conduit.
      </LegalNote>

      <LegalSection title="Engagement d'AlphaMath">
        <p>
          AlphaMath s&apos;engage à rendre sa plateforme accessible conformément à l&apos;article 47 de
          la loi n° 2005-102 du 11 février 2005 et au Référentiel Général d&apos;Amélioration de
          l&apos;Accessibilité (RGAA), dans le but de permettre à toutes et tous, y compris aux
          personnes en situation de handicap, d&apos;accéder aux contenus pédagogiques de la
          Plateforme.
        </p>
      </LegalSection>

      <LegalSection title="État de conformité">
        <p>
          AlphaMath est <strong className="text-[var(--am-text)]">partiellement conforme</strong> au
          RGAA, sur la base d&apos;une auto-évaluation interne, en l&apos;absence d&apos;audit externe
          réalisé à ce jour.
        </p>
      </LegalSection>

      <LegalSection title="Résultats des tests">
        <p>
          Aucun audit RGAA formel (échantillon de pages testées selon les 106 critères du référentiel)
          n&apos;a encore été mené. Cette section sera complétée et un taux de conformité sera publié
          dès qu&apos;un audit aura été réalisé.
        </p>
      </LegalSection>

      <LegalSection title="Contenus non accessibles connus">
        <p>Sur la base de notre auto-évaluation, les points de vigilance suivants ont été identifiés :</p>
        <ul className="list-disc pl-5 flex flex-col gap-1.5">
          <li>certaines formules mathématiques rendues via KaTeX peuvent être imparfaitement restituées par les lecteurs d&apos;écran ;</li>
          <li>certains graphiques et schémas de cours ne disposent pas encore systématiquement d&apos;une alternative textuelle complète ;</li>
          <li>les contrastes de couleurs du thème sombre n&apos;ont pas encore fait l&apos;objet d&apos;une vérification exhaustive selon les critères RGAA ;</li>
          <li>la navigation complète au clavier de certains composants interactifs (tableaux de bord, formulaires dynamiques) n&apos;a pas encore été validée de manière exhaustive.</li>
        </ul>
      </LegalSection>

      <LegalSection title="Établissement de cette déclaration">
        <p>Cette déclaration a été établie le 25 juin 2026.</p>
      </LegalSection>

      <LegalSection title="Amélioration et contact">
        <p>
          Si vous n&apos;arrivez pas à accéder à un contenu ou à un service de la Plateforme, vous
          pouvez nous contacter pour être orienté vers une alternative accessible ou obtenir le
          contenu sous une autre forme, via notre{" "}
          <a href="/contact" className="text-[var(--am-green)] hover:underline">formulaire de contact</a>.
        </p>
      </LegalSection>

      <LegalSection title="Voies de recours">
        <p>
          Si vous constatez un défaut d&apos;accessibilité vous empêchant d&apos;accéder à un contenu
          ou à une fonctionnalité de la Plateforme et que vous nous en faites part, et que vous
          n&apos;obtenez pas de réponse satisfaisante de notre part, vous êtes en droit de faire
          parvenir vos doléances ou une demande de saisine au Défenseur des droits :
        </p>
        <ul className="list-disc pl-5 flex flex-col gap-1.5">
          <li>par <a href="https://formulaire.defenseurdesdroits.fr/" className="text-[var(--am-green)] hover:underline">formulaire en ligne</a> ;</li>
          <li>par téléphone : 09 69 39 00 00 (numéro non surtaxé) ;</li>
          <li>
            par courrier postal, en écrivant à : Défenseur des droits — Libre réponse 71120 — 75342
            Paris CEDEX 07.
          </li>
        </ul>
      </LegalSection>
    </LegalLayout>
  );
}
