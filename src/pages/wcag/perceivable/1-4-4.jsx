import React from "react";
import "../../../styles/WcagPage.css";
import imgDown from "../../../assets/images/ThumbsDown.png";
import imgBadOne from "../../../assets/images/ForandringAvTextBadOne.png";
import imgBadTwo from "../../../assets/images/ForandringAvTextBadTwo.png";
import imgBadThree from "../../../assets/images/ForandringAvTextBadThree.png";

const ForandringAvTextstorlek = () => (
  <div className="wcag-page">
    <header className="wcag-header">
      <h1>Krav 1.4.4 - Förändring av textstorlek </h1>
      <p className="wcag-level">Nivå: AA</p>
      <p className="wcag-summary">
        Text ska kunna förstoras upp till 200 % utan att förlora innehåll eller
        funktionalitet, vilket hjälper användare med nedsatt syn eller
        lässvårigheter.
      </p>
    </header>

    <section className="wcag-description">
      <p>
        Syftet med denna riktlinje är att göra det lättare för personer med
        synnedsättningar att kunna läsa innehållet. När användaren förstorar
        texten med hjälp av inbyggda funktioner i webbläsaren, exempelvis genom
        att zooma eller ändra textstorleken, så ska webbplatsen fungera utan att
        innehållet blir svårnavigerat, överlappar eller försvinner. Detta
        säkerställer att text på en webbplats, inklusive etiketter, knappar och
        andra textbaserade komponenter går att förstora upp till 200 % i
        användarens egna webbläsare.
      </p>

      <p>
        För att uppfylla kriteriet behöver utvecklare se till att deras kod och
        design inte hindrar webbläsarens möjlighet att förstora texten. Om text
        exempelvis förstoras och hamnar utanför ramarna eller blir oläslig på
        grund av att andra element ligger i vägen, bryter det mot riktlinjen.
        Det är också viktigt att text inte bara visas som bilder eftersom bilder
        av text inte förstoras lika bra och därför kan bli suddiga.
      </p>

      <p>
        <strong>OBS,</strong> denna riktlinje berör enbart hur text påverkas av
        kraftig inzoomning och huruvida innehållet försämras eller ej.
        Innehåller en komponent text så är den inkluderad i denna riktlinje. Det
        finns komponenter i Portalen som inte innehåller text men som överlappar
        annat innehåll och gör navigeringen lite svårare och de täcks i 1.4.10
        “responsiv design”.
      </p>
    </section>

    <section className="wcag-examples">
      <div className="example-block failed">
        <img
          src={imgDown}
          alt="Tumme ner, ej godkänt exempel"
          className="icon-thumb"
        />
        <img
          src={imgBadTwo}
          alt="Bild på stapeldiagram vid 100% storlek där mer information syns när man hovrar över en stapel"
        />
        <p>
          Så här ser grafen ut vid normal storlek om 100% när man hovrar över
          staplarna.
        </p>

        <img
          src={imgBadOne}
          alt="Bild på samma stapeldiagram som ovan men inzoomad till 200% där man inte längre kan uppfatta information"
        />
        <p>
          Så här ser samma graf ut i 200% när man hovrar över grafen. Dels så
          ser man inte vilken månad man kommer åt, och dels så är texten helt
          avkapad på ett sätt som gör att man inte uppfattar innehållet längre.
        </p>

        <img
          src={imgBadThree}
          alt="Bild på text som överlappar varandra och gör det svårt att läsa"
        />
        <p>Ett till exempel där text överlappar varandra.</p>
      </div>
    </section>

    <section className="wcag-success-criteria">
      <h2>Framgångskriterier</h2>
      <ul>
        <li>
          Bortsett från undertexter och bilder av text, så kan texten ändra
          storlek utan hjälpmedel upp till 200 procent utan att innehåll och
          funktionalitet förlorar uppfattning.
        </li>
      </ul>
    </section>

    <footer className="wcag-footer">
      <a
        href="https://www.w3.org/WAI/WCAG21/Understanding/resize-text.html"
        target="_blank"
        rel="noreferrer"
      >
        Läs mer hos WCAG
      </a>
    </footer>
  </div>
);

export default ForandringAvTextstorlek;
