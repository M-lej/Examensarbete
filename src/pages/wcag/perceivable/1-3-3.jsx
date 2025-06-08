import React from "react";
import "../../../styles/WcagPage.css";
import imgUp from "../../../assets/images/ThumbsUp.png";
import imgDown from "../../../assets/images/ThumbsDown.png";
import imgGood from "../../../assets/images/SensoriskaKanneteckenGood.png";
import imgBad from "../../../assets/images/SensoriskaKanneteckenBad.png";
import imgBadTwo from "../../../assets/images/SensoriskaKanneteckenBadTwo.png";

const SensoriskaKannetecken = () => (
  <div className="wcag-page">
    <header className="wcag-header">
      <h1>Riktlinje 1.3.3 - Sensoriska Kännetecken</h1>
      <p className="wcag-level">Nivå: A</p>
      <p className="wcag-summary">
        Instruktioner för att förstå och använda innehållet ska inte enbart
        baseras på sensoriska egenskaper som form, storlek eller visuell
        placering, utan också finnas tillgängliga i textform.
      </p>
    </header>

    <section className="wcag-description">
      <p>
        Syftet med detta WCAG-krav är att se till att alla användare kan ta del
        av instruktioner för att använda innehåll på webben genom att undvika
        att ge instruktioner som enbart baseras på visuella egenskaper- så även
        de som inte kan uppfatta form, storlek, position eller riktning visuellt
        kan ta del av innehållet. Detta är särskilt viktigt för personer med
        synnedsättning eller blindhet, eftersom de annars riskerar att missa
        avgörande information.
      </p>
      <p>
        Ibland hänvisar innehåll instruktioner till visuella kännetecken som
        "den runda knappen" eller "knappen till höger", men den typ av
        beskrivningar kan vara otillgängliga för användare som använder
        skärmläsare eller annan hjälpmedelsteknik. Därför kräver detta kriterium
        att instruktioner som bygger på form eller placering också förtydligas
        på andra sätt. Samtidigt är det viktigt att förstå att visuella eller
        rumsliga ledtrådar kan vara till stor hjälp för vissa användare,
        särskilt de med kognitiva utmaningar. Den typen av ledtrådar är inte
        förbjudna - de får gärna användas – men de behöver kompletteras med
        andra typer av information som inte enbart förlitar sig på utseende
        eller placering. Det finns också språk där uttryck som "ovan" eller
        "nedan" är tydligt kopplade till innehållets läsordning. I sådana fall
        är det tillåtet att använda den typ av uttryck, så länge det är klart
        vad de syftar på i sammanhanget. Exempelvis “se exempel nedan”.
      </p>
    </section>

    <section className="wcag-examples two-column">
      <div className="example-block approved">
        <img
          src={imgUp}
          alt="Tummen upp, godkänt exempel"
          className="icon-thumb"
        />
        <h3>Följande exempel är från WCAGs hemsida:</h3>
        <p>
          “An online multi-page survey. An online multi-page survey uses a link
          implemented as a green arrow icon placed in the lower right hand
          corner of the content to move from one survey page to the next. The
          arrow is clearly labeled with "Next" and the instructions state, "To
          move to the next section of the survey, select the green arrow icon
          labeled 'Next' in the lower right corner below the last survey
          question." The instruction uses positioning and color to help identify
          the icon; the instruction does not rely on these sensory
          characteristics since it also refers to the label, so it passes this
          criterion.”
        </p>
        <img
          src={imgGood}
          alt="Godkänt exempel på Sensoriska Kännetecken men en tillbaka och nästa knapp som även har pilar"
        />
      </div>

      <div className="example-block failed">
        <img
          src={imgDown}
          alt="Tummen ner, ej godkänt exempel"
          className="icon-thumb"
        />
        <h3>Följande exempel är från WCAGs hemsida:</h3>
        <p>
          “Instructions for interpreting a schedule of competitive events
          references colored icons in different shapes to indicate the venue for
          each event. A table presents a list of times across the top row and a
          list of events in the first vertical column and instructions are
          provided under the table: "Events marked with a blue diamond are
          played on field A and events marked with a green circle are played on
          field B." The instructions rely on color and shape only and result in
          a failure of this criterion.”
        </p>
        <img
          src={imgBad}
          alt="Ej godkänt exempel på Sensoriska kännetecken där symbol och färg enbart förmdelar budskap"
        />

        <h3>Exempel från Mestros Portal:</h3>
        <p>
          Här litar man helt på att användaren ska förstå att pilarna betyder
          "nästa"
        </p>
        <img
          src={imgBadTwo}
          alt="Ej godkänt exempel på Sensoriska kännetecken där man enbart förlitar sig på visuella pilar som nästa knapp"
        />
      </div>
    </section>

    <section className="wcag-success-criteria">
      <h2>Framgångskriterier</h2>
      <ul>
        <li>
          Instruktioner som tillhandahålls för att förstå och använda innehåll
          förlitar sig inte enbart på sensoriska egenskaper hos komponenter
          såsom form, färg, storlek, visuell plats, orientering eller ljud.
        </li>
      </ul>
    </section>

    <footer className="wcag-footer">
      <a
        href="https://www.w3.org/WAI/WCAG21/Understanding/sensory-characteristics.html"
        target="_blank"
        rel="noreferrer"
      >
        Läs mer hos WCAG
      </a>
    </footer>
  </div>
);

export default SensoriskaKannetecken;
