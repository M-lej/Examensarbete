import React from "react";
import "../../../styles/WcagPage.css";
import imgUp from "../../../assets/images/ThumbsUp.png";
import imgDown from "../../../assets/images/ThumbsDown.png";
import imgGood from "../../../assets/images/KontrastIInnehallGood.png";
import imgGoodTwo from "../../../assets/images/KontrastIInnehallGoodTwo.png";
import imgGoodThree from "../../../assets/images/KontrastIInnehallGoodThree.png";
import imgGoodFour from "../../../assets/images/KontrastIInnehallGoodFour.png";
import imgGoodFive from "../../../assets/images/KontrastIInnehallGoodFive.png";
import imgBad from "../../../assets/images/KontrastIInnehallBad.png";
import imgBadTwo from "../../../assets/images/KontrastIInnehallBadTwo.png";
import imgBadThree from "../../../assets/images/KontrastIInnehallBadThree.png";
import imgBadFour from "../../../assets/images/KontrastIInnehallBadFour.png";
import imgBadFive from "../../../assets/images/KontrastIInnehallBadFive.png";

const KontrastIInnehall = () => (
  <div className="wcag-page">
    <header className="wcag-header">
      <h1>Riktlinje 1.4.10 - Kontrast i innehåll som inte är text</h1>
      <p className="wcag-level">Nivå: AA</p>
      <p className="wcag-summary">
        Visuella element som användargränssnittskomponenter och grafiska objekt
        ska ha tillräcklig kontrast mot intilliggande färger.
      </p>
    </header>

    <section className="wcag-description">
      <p>
        WCAG 1.4.11 kräver att innehåll som inte är text och är innehåll som
        användaren interagerar med, såsom ikoner, knappar, grafik och diagram,
        har tillräcklig kontrast mot bakgrunden för att vara tydligt och läsbart
        för användare med nedsatt syn. Genom att uppfylla detta säkerställs att
        viktig visuell information är tillgänglig för fler användare.
      </p>
      <p>
        Kontrastförhållandet ska vara minst 3:1 mot intilliggande färger för att
        säkerställa god synlighet. Detta gäller exempelvis knapparnas
        kantlinjer, ikoner som förmedlar information och visuella indikatorer
        som visar status eller interaktion. Dekorativa element eller sådant som
        inte är avgörande för förståelsen omfattas dock inte av kravet.
      </p>
    </section>

    <section className="wcag-examples two-column">
      <div className="example-block approved">
        <img
          src={imgUp}
          alt="Tummen upp, godkänt exempel"
          className="icon-thumb"
        />
        <p>Kontrast testad på vit mot orange</p>
        <img src={imgGood} alt="Godkänd kontrast på 3.68:1" />
        <p>Kontrast testad på vit mot blå</p>
        <img src={imgGoodTwo} alt="Godkänd kontrast på 3.18:1" />
        <p>Kontrast testad på vit mot mörkgrön</p>
        <img src={imgGoodThree} alt="Godkänd kontrast på 9.6:1" />
        <p>Kontrast testad på vit mot lila</p>
        <img src={imgGoodFour} alt="Godkänd kontrast på 3.89:1" />
        <img
          src={imgGoodFive}
          alt="Bild på alternativ på hur man kan ändra cirkeldiagrammet för ett godkänt resultat"
        />
        <p>
          Om man vill behålla alla färger på grafen så är exemplet ovan ett
          godkänt alternativ.
        </p>
      </div>

      <div className="example-block failed">
        <img
          src={imgDown}
          alt="Tummen ner, ej godkänt exempel"
          className="icon-thumb"
        />
        <p>Kontrast testad på vit mot orange med opacitet</p>
        <img src={imgBad} alt="Ej godkänd kontrast på 1.91:1" />
        <p>Kontrast testad på vit mot grön</p>
        <img src={imgBadTwo} alt="Ej godkänd kontrast på 2.27:1" />
        <p>Kontrast testad på vit mot blå</p>
        <img src={imgBadThree} alt="Ej godkänd kontrast på 2.62:1" />
        <p>Kontrast testad på grön mot orange</p>
        <img src={imgBadFour} alt="Ej godkänd kontrast på 1.62:1" />
        <p>Kontrast testad på vit mot gul</p>
        <img src={imgBadFive} alt="Ej godkänd kontrast på 1.85:1" />
      </div>
    </section>

    <section className="wcag-success-criteria">
      <h2>Framgångskriterier</h2>
      <ul>
        <li>
          <strong>Användargränssnittskomponenter: </strong>Visuell information
          som krävs för att identifiera användargränssnittskomponenter och deras
          tillstånd, med undantag för inaktiva komponenter eller när utseendet
          på komponenten bestäms av webbläsaren och inte har ändrats av
          utvecklaren.
        </li>
        <li>
          <strong>Grafiska objekt: </strong>Grafiska delar som är nödvändiga för
          att förstå innehållet, förutom när en specifik grafisk presentation är
          väsentlig för att förmedla informationen. Exempelvis en realistisk
          bild som visar en medicinsk skanning, behöver inte uppfylla
          kontrastkraven.
        </li>
      </ul>
    </section>

    <footer className="wcag-footer">
      <a
        href="https://www.w3.org/WAI/WCAG22/Understanding/non-text-contrast.html"
        target="_blank"
        rel="noreferrer"
      >
        Läs mer hos WCAG
      </a>
    </footer>
  </div>
);

export default KontrastIInnehall;
