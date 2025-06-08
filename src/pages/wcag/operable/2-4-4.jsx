import React from "react";
import "../../../styles/WcagPage.css";
import imgUp from "../../../assets/images/ThumbsUp.png";
import imgDown from "../../../assets/images/ThumbsDown.png";
import imgGood from "../../../assets/images/SyftetMedLankGood.png";
import imgGoodTwo from "../../../assets/images/SyftetMedLankGoodTwo.png";
import imgBad from "../../../assets/images/SyftetMedLankBad.png";
import imgBadTwo from "../../../assets/images/SyftetMedLankBadTwo.png";

const SyftetMedLank = () => (
  <div className="wcag-page">
    <header className="wcag-header">
      <h1>Riktlinje 2.4.4 - Syftet med en länk (i sammanhanget)</h1>
      <p className="wcag-level">Nivå: A</p>
      <p className="wcag-summary">
        Syftet med varje länk bör vara tydligt utifrån dess sammanhang.
      </p>
    </header>

    <section className="wcag-description">
      <p>
        "Syftet med en länk", är att säkerställa att användare, oavsett om de
        använder skärmläsare, har nedsatt syn eller kognitiva svårigheter, kan
        förstå vart en länk leder innan de klickar på den. Innebörden av
        riktlinjen är att länkar ska ha ett tydligt, beskrivande innehåll som
        står på egna ben. Det betyder att en länk inte enbart bör bestå av
        generiska texter som "klicka här", "läs mer" eller "mer information",
        eftersom dessa inte förmedlar något om vad användaren kan förvänta sig
        att hitta när länken följs.
      </p>
      <p>
        För personer som använder hjälpmedel som skärmläsare, är det vanligt att
        få länkar upplästa ur sitt sammanhang. Därför måste varje länktext vara
        begriplig även om man inte ser det omgivande innehållet. Om länkar är
        otydliga kan det skapa förvirring och göra det svårt att navigera på en
        webbplats, vilket i sin tur försämrar både tillgängligheten och
        användarupplevelsen. Målet är helt enkelt att ge alla användare
        tillräcklig information om vad som händer när de följer en länk.
      </p>
    </section>

    <section className="wcag-examples two-column-operable">
      <div className="example-block approved">
        <img
          src={imgUp}
          alt="Tummen upp, godkänt exempel"
          className="icon-thumb"
        />
        <p>
          Genom att förklara vad länken innehåller så blir det tydligt för
          användaren vad som ska hända när denne klickar sig vidare.
        </p>
        <img src={imgGood} alt="Exempel på en tydlig länk" />

        <p>
          Här blir det extra tydligt när vi visuellt markerat att det är en länk
          samt förklarat vad som händer när man klickar på länken.
        </p>
        <img
          src={imgGoodTwo}
          alt="Bildexempel på en tydligare godkänd länk med texten 'klicka här om du glömt lösenord'"
        />
      </div>

      <div className="example-block failed">
        <img
          src={imgDown}
          alt="Tumme ner, ej godkänt exempel"
          className="icon-thumb"
        />
        <p>
          Här kan man göra det tydligare om vart man tar vägen innan man klickar
          sig vidare. Oklart vad “uppvärmning - 4623” innebär och vart länken
          tar en.
        </p>
        <img src={imgBad} alt="Bildexempel på otydling länk" />

        <p>Går att göra länken ännu tydligare.</p>
        <img
          src={imgBadTwo}
          alt="Bildexempel på en lite otydlig länk med texten 'glömt lösenord?'"
        />
      </div>
    </section>

    <section className="wcag-success-criteria">
      <h2>Framgångskriterier</h2>
      <ul>
        <li>
          Syftet med varje länk ska kunna förstås antingen utifrån länktexten i
          sig, eller utifrån länktexten tillsammans med det sammanhang som kan
          identifieras med hjälp av kod (programmässigt), förutom i de fall där
          syftet med länken ändå skulle vara otydligt för alla användare.
        </li>
      </ul>
    </section>

    <footer className="wcag-footer">
      <a
        href="https://www.w3.org/WAI/WCAG21/Understanding/link-purpose-in-context.html"
        target="_blank"
        rel="noreferrer"
      >
        Läs mer hos WCAG
      </a>
    </footer>
  </div>
);

export default SyftetMedLank;
