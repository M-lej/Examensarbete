import React from "react";
import "../../../styles/WcagPage.css";
import imgUp from "../../../assets/images/ThumbsUp.png";
import imgCaptions from "../../../assets/images/undertexter.svg";
import imgGood from "../../../assets/images/undertexterGodkand.svg";

const Undertexter = () => (
  <div className="wcag-page">
    <header className="wcag-header">
      <h1>Riktlinje 1.2.2 - Undertexter (förinspelat)</h1>
      <p className="wcag-level">Nivå: A</p>
      <p className="wcag-summary">
        Syftar till att göra förinspelat ljudinnehåll i videor tillgängliga för
        döva eller hörselskadade användare genom att erbjuda undertexter. Detta
        är avgörande för att säkerställa att alla får lika tillgång till
        multimedia.
      </p>
    </header>

    <section className="wcag-description">
      <p>
        Förinspelad synkroniserad media, som exempelvis videor med ljud, ska
        göras tillgängligt för personer som är döva, har nedsatt hörsel eller av
        någon anledning inte kan lyssna med ljud just i stunden. Detta görs
        genom att tillhandahålla undertexter som återger det som sägs i ljudet.
        Det är viktigt att undertexterna är korrekta och tydligt återger all
        meningsfull ljudinformation. Om videon innehåller exempelvis musik,
        ljudeffekter eller viktiga pauser, bör dessa också beskrivas i texten. I
        vissa fall, som när videon inte tillför någon ny information utöver det
        som redan finns i text på sidan, är undertexter inte nödvändiga.
        Undertexter krävs inte om videon inte innehåller något ljud, eller om
        videon är ett alternativ till innehåll som redan finns fullt ut i
        textform på samma sida.
      </p>
      <ul>
        Detta ska inkluderas i undertexterna:
        <li>Vad som sägs (dialoger)</li>
        <li>Vem som talar (om det inte tydligt framgår visuellt)</li>
        <li>
          Viktiga ljudeffekter och ljud, exempelvis "[dörren stängs]", "[publik
          applåderar]"
        </li>
        <li>
          Musik som har betydelse för innehållet, exempelvis "[lugnt pianospel]"
        </li>
      </ul>
    </section>

    <section className="wcag-examples two-column">
      <div className="example-block approved">
        <img
          src={imgUp}
          alt="Tummen upp, godkänt exempel"
          className="icon-thumb"
        />
        <h2>Om man använder externa videoplattformar (t.ex. YouTube):</h2>
        <img
          src={imgGood}
          alt="Stillbild på en video från Mestros kunskapsbank"
        />
        <ul>
          <li>Skapa undertexter direkt i plattformens gränssnitt</li>
          <li>Kontrollera att undertexterna är aktiverade som standard</li>
          <li>
            Förlita dig inte på automatiskt genererade undertexter – de bör
            granskas
          </li>
        </ul>
      </div>

      <div className="example-block failed">
        <img
          src={imgUp}
          alt="Tummen upp, godkänt exempel"
          className="icon-thumb"
        />
        <h2>Om man hanterar video på webbplatsen själv:</h2>
        <p>
          Använd HTML5-elementet <code>&lt;video&gt;</code> tillsammans med{" "}
          <code>&lt;track&gt;</code> för att lägga till undertexter.
        </p>
        <img src={imgCaptions} alt="Kodexempel på undertexter i HTML-video" />
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
        href="https://www.w3.org/WAI/WCAG21/Understanding/captions-prerecorded.html"
        target="_blank"
        rel="noreferrer"
      >
        Läs mer hos WCAG
      </a>
    </footer>
  </div>
);

export default Undertexter;
