import React from "react";

const Urskiljbar = () => {
  return (
    <div className="wcag-page">
      <h1>1.4 Urskiljbar</h1>
      <p>
        För att göra webbinnehåll mer tillgängligt genom visuell presentation är
        det viktigt att tänka på hur innehållet presenteras, särskilt för
        användare med ögonsjukdomar som färgblindhet. Detta innebär att
        information inte bara får förmedlas genom färg, utan att texten ska vara
        läsbar, innehållet begripligt och visuellt urskiljbart för alla.
      </p>

      <ul>
        Riktlinjerna för detta inkluderar:
        <li>
          <strong>Kontrast: </strong>Det ska finnas tillräcklig kontrast mellan
          text och bakgrund för att säkerställa att texten alltid är läsbar, med
          minst nivå AA som standard.
        </li>
        <li>
          <strong>Färganvändning: </strong>Färg bör aldrig vara det enda sättet
          att förmedla information. Till exempel i en graf bör färger
          kompletteras med mönster eller etiketter.
        </li>
        <li>
          <strong>Textstorlek: </strong>Text ska kunna förstoras upp till 200 %
          utan att förlora funktionalitet eller bli svårläst.
        </li>
        <li>
          <strong>Webbplatser: </strong>Använd CSS för att kontrollera text- och
          bakgrundsfärger samt säkerställa hög kontrast. Undvik att använda färg
          som ensam indikation, och implementera responsiv design för att
          tillåta textjusteringar.
        </li>
        <li>
          <strong>Mobilappar: </strong>Implementera dynamisk textförstoring och
          högkontrastlägen. Testa appen med olika färginställningar och
          skärmläsarverktyg.
        </li>
        <li>
          <strong>Dokument: </strong>Använd formateringsverktyg för att
          säkerställa hög kontrast och läsbarhet. Undvik att inkludera text i
          bilder.
        </li>
      </ul>
    </div>
  );
};

export default Urskiljbar;
