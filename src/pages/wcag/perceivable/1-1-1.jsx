import React from "react";
import "../../../styles/WcagPage.css";
import imgUp from "../../../assets/images/ThumbsUp.png";
import imgDown from "../../../assets/images/ThumbsDown.png";
import imgGood from "../../../assets/images/IckeTextbaseratInnehallGodkand.png";
import imgGoodTwo from "../../../assets/images/TextbaseratInnehallGodkandTwo.png";
import imgGoodThree from "../../../assets/images/TextbaseratInnehallGodkandThree.png";
import imgGoodFour from "../../../assets/images/TextbaseratInnehallGodkandFour.png";
import imgBad from "../../../assets/images/IckeTextbaseratInnehallBad.png";
import imgBadTwo from "../../../assets/images/TextbaseratInnehallBadTwo.png";
import imgBadThree from "../../../assets/images/TextbaseratInnehallBadThree.png";
import imgDiagram from "../../../assets/images/IckeTextbaseratInnehallDiagram.svg";

const IckeTextbaseratInnehall = () => (
  <div className="wcag-page">
    <header className="wcag-header">
      <h1>Krav 1.1.1 - Icke textbaserat innehåll</h1>
      <p className="wcag-level">Nivå: A</p>
      <p className="wcag-summary">
        Allt innehåll som inte är text, som presenteras för användaren, har ett
        textalternativ med samma syfte, utom i vissa angivna situationer.
      </p>
    </header>

    <section className="wcag-description">
      <div className="text-image-row">
        <div className="description-text">
          <p>
            Allt visuellt innehåll bör kompletteras med textalternativ som
            förmedlar samma syfte eller information som det visuella elementet.
            Det betyder att bilder behöver en ALT-text eller Image alt tags som
            beskriver bildens syfte och funktion. Detta gäller även diagram,
            grafer och andra viktiga visuella element.
          </p>
          <p>
            Mestro Portals cirkeldiagram är exempelvis en bild utan vidare
            förklaring på vad den bilden föreställer i koden. För att detta
            kriterium ska vara godkänt så behöver man komplettera bilden med en
            ALT-text som exempelvis lyder “Bild på ett cirkeldiagram som mäter
            upp 24% värme och 76% el”
          </p>
        </div>
        <div className="description-image">
          <img
            src={imgDiagram}
            alt="Bildexempel på ett cirkeldiagram som visas som bild i portalen utan en ALT-text"
          />
        </div>
      </div>
    </section>

    <section className="wcag-examples two-column">
      <h2>Ikoner och knappar behöver vara tydliga</h2>
      <p>
        Andra viktiga visuella element som bör vara tydliga är ikoner och
        knappar. Ikonen ska inte enbart förlita sig på sin visuella
        representation. Exempelvis om en ikon används för navigation så behöver
        den ha en text som förklarar dess funktion. Texten kan antingen vara
        synlig bredvid ikonen eller gömd i en ALT-text, men den ska oavsett
        kunna läsas upp av en skärmläsare. Bäst praxis är att kombinera synlig
        text med ikon tillsammans med en ALT-text.
      </p>
      <div className="example-block approved">
        <img
          src={imgUp}
          alt="Tummen upp, godkänt exempel"
          className="icon-thumb"
        />
        <h3>Exempel på tydliga visuella element</h3>
        <img
          src={imgGood}
          alt="Bildexempel på ett cirkeldiagram som visas som bild i portalen utan en ALT-text"
        />

        <img
          src={imgGoodTwo}
          alt="Bild på ikoner som är godkända tillsammans med ALT text"
        />
        <p>alt=”inställningar”</p>
        <img
          src={imgGoodThree}
          alt="Bild på ikoner som är godkända tillsammans med ALT text"
        />
        <img
          src={imgGoodFour}
          alt="Bildexempel på meny som är godkänd tillsammans med ALT text"
        />
        <p>Knappar med ALT-text + synlig text blir väldigt tydligt</p>
      </div>

      <div className="example-block failed">
        <img
          src={imgDown}
          alt="Tummen ner, ej godkänt exempel"
          className="icon-thumb"
        />
        <h3>Exempel på otydliga visuella element</h3>
        <img
          src={imgBad}
          alt="Bild på ikoner som inte är godkända utan ALT text"
        />
        <p>Ikoner utan varken synlig text eller alt-text</p>
        <img
          src={imgBadTwo}
          alt="Bild på ikoner som inte är godkända utan ALT text"
        />
        <img
          src={imgBadThree}
          alt="Bildexempel på meny som inte är godkänd utan ALT text"
        />
        <p>Knapparna kan ej nås med skärmläsare utan ALT-text</p>
      </div>
    </section>

    <section className="wcag-success-criteria">
      <h2>Framgångskriterier</h2>
      <ul>
        <li>
          <strong>Controls input:</strong> Om användaren kan interagera med
          innehållet så behöver elementet ha ett namn som beskriver syftet,
          detta refererar till kriteriet 4.1.2, och innebär att om ex. en submit
          knapp är i form av en bild så behövs en alt-text för att förklara
          syftet.
        </li>
        <li>
          <strong>Tidsbaserad media:</strong> Om innehållet inte är textbaserat
          så måste det finnas textalternativ som åtminstone identifierar vad
          innehållet är. Detta refereras till kriteriet 1.2.
        </li>
        <li>
          <strong>Test:</strong> Om innehållet är ett icke-textbaserat test (ex.
          en interaktiv uppgift) och skulle bli meningslöst om det omvandlades
          till text, så ska det åtminstone ha en beskrivning av vad testet går
          ut på.
        </li>
        <li>
          <strong>Sensorisk:</strong> Om innehållet primärt är skapat för en
          särskild sensorisk upplevelse (ex. ljudkonst, visuella animationer)
          ska det åtminstone finnas en textbeskrivning som identifierar vad det
          är.
        </li>
        <li>
          <strong>CAPTCHA:</strong> Om en webbplats använder CAPTCHA (för att
          skilja mellan människor och botar) måste det finnas en beskrivning av
          dess syfte samt alternativa sätt att lösa det.
        </li>
        <li>
          <strong>Dekoration och osynligt innehåll:</strong> Om något
          icke-textbaserat enbart är till för dekoration, formattering eller är
          osynligt för användaren på ett sätt som gör att det kan ignoreras av
          skärmläsare så behöver de heller inte följa kravet.
        </li>
      </ul>
    </section>

    <footer className="wcag-footer">
      <a
        href="https://www.w3.org/WAI/WCAG22/Understanding/non-text-content.html"
        target="_blank"
        rel="noreferrer"
      >
        Läs mer hos WCAG
      </a>
    </footer>
  </div>
);

export default IckeTextbaseratInnehall;
