import React from "react";
import "../../../styles/WcagPage.css";
import imgUp from "../../../assets/images/ThumbsUp.png";
import imgDown from "../../../assets/images/ThumbsDown.png";
import imgGood from "../../../assets/images/SynligtfokusGood.png";
import imgGoodTwo from "../../../assets/images/SynligtfokusGoodTwo.png";
import imgBad from "../../../assets/images/SynligtfokusBad.png";
import imgBadTwo from "../../../assets/images/SynligtfokusBadTwo.png";

const SynligtFokus = () => (
  <div className="wcag-page">
    <header className="wcag-header">
      <h1>Riktlinje 2.4.7 - Synligt fokus</h1>
      <p className="wcag-level">Nivå: AA</p>
      <p className="wcag-summary">
        Säkerställ att tangentbordets fokus är synligt och tydligt.
      </p>
    </header>

    <section className="wcag-description">
      <p>
        Synligt fokus handlar om att användare alltid ska kunna se var på sidan
        fokus ligger när de navigerar med tangentbordet. Fokus är den punkt på
        skärmen där en användare vid tillfället kan interagera, till exempel med
        en länk, knapp eller formulärfält. När någon navigerar med tangentbord,
        genom att exempelvis trycka på Tab, måste det tydligt synas vilket
        element som är aktivt och har fokus.
      </p>
      <p>
        För personer som inte använder mus så är en tydlig visuell
        fokusindikator avgörande för att kunna förstå var de är och vad som
        kommer att hända när de trycker på en tangent. Det kan till exempel vara
        en ram/border, skuggning, färgändring eller annan visuell markering som
        visar vilket element som är markerat. Om fokusindikatorn tas bort eller
        är så svag att den knappt syns, blir det svårt eller omöjligt för många
        användare att använda webbplatsen effektivt och tillgängligt.
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
          När man hovrar över knapparna i menyn så blir de blåa och markerade-
          på samma sätt behöver de bli det när man navigerar sig med Tab.
        </p>
        <img src={imgGood} alt="Bildexempel på tydlig fokusmarkering" />

        <p>
          Det är på få ställen som portalen har ett synligt fokus på de objekt
          man markerar på. Menyn är ett sånt ställe som faktiskt fungerar!
        </p>
        <p>Alternativt kan man lägga en border runt elementen också.</p>
        <img
          src={imgGoodTwo}
          alt="Bildexempel på tydlig fokusmarkering och exempel på border runt element"
        />
      </div>

      <div className="example-block failed">
        <img
          src={imgDown}
          alt="Tumme ner, ej godkänt exempel"
          className="icon-thumb"
        />
        <p>
          Fokus saknas i stora delar av portalen när tangentbord används. Man
          varken ser eller förstår vart det är man markerar och hamnar.
        </p>
        <img src={imgBad} alt="Bildexempel på meny som saknar fokus" />

        <p>
          Stjärnan behöver fokuseras och synas rent visuell. Den behöver
          markeras med hjälp av en border.{" "}
        </p>
        <img
          src={imgBadTwo}
          alt="Bildexempel på en stjärna som behöver fokus"
        />
      </div>
    </section>

    <section className="wcag-success-criteria">
      <h2>Framgångskriterier</h2>
      <ul>
        <li>
          Alla användargränssnitt som går att använda med tangentbord måste ha
          ett läge där det är synligt var tangentbordsfokuset är.
        </li>
      </ul>
    </section>

    <footer className="wcag-footer">
      <a
        href="https://www.w3.org/WAI/WCAG21/Understanding/focus-visible.html"
        target="_blank"
        rel="noreferrer"
      >
        Läs mer hos WCAG
      </a>
    </footer>
  </div>
);

export default SynligtFokus;
