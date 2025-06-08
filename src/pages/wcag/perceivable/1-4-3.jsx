import React from "react";
import "../../../styles/WcagPage.css";
import imgUp from "../../../assets/images/ThumbsUp.png";
import imgDown from "../../../assets/images/ThumbsDown.png";
import imgGood from "../../../assets/images/KontrastGood.png";
import imgGoodTwo from "../../../assets/images/KontrastGoodTwo.png";
import imgBad from "../../../assets/images/KontrastBad.png";
import imgBadTwo from "../../../assets/images/KontrastBadTwo.png";

const KontrastMinimum = () => (
  <div className="wcag-page">
    <header className="wcag-header">
      <h1>Krav 1.4.3 – Kontrast (minimum)</h1>
      <p className="wcag-level">Nivå: AA</p>
      <p className="wcag-summary">
        Säkerställer att text och bilder med text måste ha ett
        kontrastförhållande på minst 4.5:1, med undantag för stor text,
        obetydlig text eller logotyper.
      </p>
    </header>

    <section className="wcag-examples two-column">
      <div className="example-block approved">
        <img
          src={imgUp}
          alt="Tummen upp, godkänt exempel"
          className="icon-thumb"
        />
        <img
          src={imgGood}
          alt="Bildexempel på en knapp som har godkänd kontrast"
        />
        <img
          src={imgGoodTwo}
          alt="Bildexempel på en knapp som har godkänd kontrast"
        />
      </div>

      <div className="example-block failed">
        <img
          src={imgDown}
          alt="Tumme ner, ej godkänt exempel"
          className="icon-thumb"
        />
        <img
          src={imgBad}
          alt="Bildexempel på en knapp som inte har godkänd kontrast"
        />
        <img
          src={imgBadTwo}
          alt="Bildexempel på en knapp som inte har godkänd kontrast"
        />
      </div>
      <p>
        Kontrasterna här är dubbelkollade med hjälp av ett plugin som heter
        “Stark” i Figma.
      </p>
    </section>

    <section className="wcag-success-criteria">
      <h2>Framgångskriterier</h2>
      <ul>
        <li>
          <strong>Stor text:</strong> Stor text och bilder av stor text får ha
          en kontrast ratio om minst 3:1;
        </li>
        <li>
          <strong>Obetydlig text:</strong> Text eller bild av text som inte
          påverkar användarens förmåga att interagera med eller förstå
          innehållet, behöver inte uppfylla strikta kontrastkrav. Som exempelvis
          en stiliserad text i en bakgrundsbild som bara är där för estetik och
          inte för att förmedla viktig information.
        </li>
        <li>
          <strong>Logotyper:</strong> Text som är en del av en logga eller
          varumärke har inga kontrastkrav.
        </li>
      </ul>
    </section>

    <footer className="wcag-footer">
      <a
        href="https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html"
        target="_blank"
        rel="noreferrer"
      >
        Läs mer hos WCAG
      </a>
    </footer>
  </div>
);

export default KontrastMinimum;
