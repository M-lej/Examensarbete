import React from "react";
import "../../../styles/WcagPage.css";
import imgUp from "../../../assets/images/ThumbsUp.png";
import imgDown from "../../../assets/images/ThumbsDown.png";
import imgGood from "../../../assets/images/FokusordningGood.png";
import imgBad from "../../../assets/images/FokusordningBad.png";

const Fokusordning = () => (
  <div className="wcag-page">
    <header className="wcag-header">
      <h1>Riktlinje 2.4.3 - Fokusordning </h1>
      <p className="wcag-level">Nivå: A</p>
      <p className="wcag-summary">
        Skapa en logisk ordning för navigering mellan interaktiva element.
      </p>
    </header>

    <section className="wcag-description">
      <p>
        Fokusordning säkerställer att användare som navigerar med tangentbordet
        möter innehållet i en logisk och meningsfull ordning. Tanken är att
        personer som inte använder mus ska kunna förstå och använda webbsidan
        utan att bli förvirrade av att fokuset hoppar runt på ett oförutsägbart
        sätt. Elementen ska helt enkelt få fokus i en ordning som stämmer
        överens med innehållets logik och struktur precis som en person som ser
        sidan skulle läsa eller förstå den. I en teknisk mening styrs
        tabbordningen ofta av HTML-strukturen det vill säga i vilken ordning
        elementen ligger i koden. Med hjälp av attribut som tabindex eller
        JavaScript kan man förändra denna ordning, men det är viktigt att inte
        skapa ett rörigt eller ologiskt flöde för användaren.
      </p>
      <p>
        Det är även viktigt att tänka på att olika användare har olika
        upplevelser. En skärmläsaranvändare uppfattar ordningen enligt den
        programmerade läsordningen, medan en seende person som navigerar med
        tangentbord följer den visuella presentationen. Om dessa två inte
        stämmer överens kan det bli förvirrande. Därför bör utvecklare sträva
        efter att göra fokusflödet begripligt och konsekvent för alla typer av
        användare.
      </p>

      <p>
        Riktlinjen gäller bara i situationer där navigationsordningen påverkar
        förståelse eller användbarhet, och om det finns flera möjliga ordningar
        som fungerar bra så räcker det att sidan följer en av dem. Riktlinjen
        förtydligar även att vissa typer av tangentbordsnavigering, som att
        använda piltangenter för att röra sig i en trädkontroll (till exempel en
        meny med undermenyer), inte räknas som den sekventiella tabb-navigering
        som kriteriet handlar om. I ett sånt scenario följer navigeringen en
        egen logik där användaren kan öppna och stänga delar av innehållet med
        höger- och vänsterpilar och förflytta sig upp och ner mellan val, vilket
        är en förväntad och godtagbar navigationsmetod. Riktlinjen gäller
        istället tabb-navigering där fokus flyttas mellan element i en ordning
        som ska bevara innehållets mening och funktion.
      </p>
    </section>

    <section className="wcag-examples two-column-operable">
      <div className="example-block approved">
        <img
          src={imgUp}
          alt="Tumme upp, godkänt exempel"
          className="icon-thumb"
        />
        <p>
          Här visas ett exempel på en tydlig och logisk ordning på hur en
          Tabbning kan tänkas se ut för de som använder sig utav tangentbordet
          för navigering av webbplats. #1 visar att man startar med synligt
          fokus på “sök” som sen letar sig ner i ordningen ända fram till #10
          som är “verktyg”.
        </p>
        <img
          src={imgGood}
          alt="Bildexempel på hur en godkänd fokusordning ser ut"
        />
      </div>

      <div className="example-block failed">
        <img
          src={imgDown}
          alt="Tumme ner, ej godkänt exempel"
          className="icon-thumb"
        />
        <p>
          Här visas istället ett exempel på en otydlig och ologisk fokusordning.
          Den som tabbar sig igenom sidan skulle inte få en strukturerat och
          logisk ordning av innehållet. Exemplet visar att man börjar på #1
          “sök” som sen hoppar till #2 “översikt” och sedan vidare till #3 “BRF
          Trångsund”.
        </p>
        <img
          src={imgBad}
          alt="Bildexempel på när fokusordning inte är godkänt"
        />
      </div>
    </section>

    <section className="wcag-success-criteria">
      <h2>Framgångskriterier</h2>
      <ul>
        <li>
          Om en webbsida går att använda genom att man navigerar steg för steg,
          och ordningen man rör sig i påverkar hur man förstår innehållet eller
          hur man kan använda sidan, då måste den ordningen vara logisk.
        </li>
      </ul>
    </section>

    <footer className="wcag-footer">
      <a
        href="https://www.w3.org/WAI/WCAG21/Understanding/focus-order.html"
        target="_blank"
        rel="noreferrer"
      >
        Läs mer hos WCAG
      </a>
    </footer>
  </div>
);

export default Fokusordning;
