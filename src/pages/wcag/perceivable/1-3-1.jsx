import React from "react";
import "../../../styles/WcagPage.css";
import imgUp from "../../../assets/images/ThumbsUp.png";
import imgGood from "../../../assets/images/InformationOchRelationer.png";

const InformationOchRelationer = () => (
  <div className="wcag-page">
    <header className="wcag-header">
      <h1>Riktlinje 1.3.1 - Information och relationer</h1>
      <p className="wcag-level">Nivå: AA</p>
      <p className="wcag-summary">
        Säkerställ att information, struktur och relationer som förmedlas genom
        presentation är programmerbart identifierbara, så att de kan återges
        korrekt av hjälpmedelstekniker.
      </p>
    </header>

    <section className="wcag-description">
      <p>
        Huvudsyftet med detta kriterium är att behålla samma information och
        struktur som visuellt finns på webbplatsen när presentationen av
        formatet förändras, exempelvis när en skärmläsare ska uppfatta
        innehållet istället för ögat. Detta innebär bland annat att
        formulärelement ska vara korrekt märkta, rubriker ska användas på rätt
        sätt för att skapa en tydlig hierarki och tabeller ska vara utformade så
        att skärmläsare kan läsa dem korrekt. All viktig information som syns
        eller hörs måste vara begriplig även utan syn eller hörsel!
      </p>
      <p>
        Här är några exempel på hur man kan göra strukturen programmerbart
        tillgänglig:
      </p>
      <ul>
        <li>
          En rubrik syns ofta som större, men den måste även vara kodad som en
          riktig &lt;h1&gt; till &lt;h6&gt;-rubrik i HTML så att skärmläsare kan
          förstå att det är en rubrik. Använd &lt;h1&gt; till &lt;h6&gt; för
          rubriker istället för &lt;span&gt; eller &lt;div&gt;, så att sidans
          hierarki blir tydlig.
        </li>
        <li>Använd &lt;nav&gt; istället för en &lt;div&gt; för navigation.</li>
        <li>
          Formulärfält ska ha rätt kopplingar till etiketter (labels) så att
          användare vet vad de fyller i. Använd &lt;form&gt; istället för
          &lt;div&gt; för formulär då hjälpmedel annars inte förstår att det är
          ett formulär.
        </li>
        <li>
          Listor (&lt;ul&gt;, &lt;ol&gt;) ska vara riktiga listor i koden, inte
          bara text med streck.
        </li>
      </ul>
    </section>

    <section className="wcag-examples">
      <div className="example-block approved">
        <img
          src={imgUp}
          alt="Tummen upp, godkänt exempel"
          className="icon-thumb"
        />
        <img
          src={imgGood}
          alt="Exempel på programmerbart tillgänglig struktur"
        />
        <p>
          {" "}
          &lt;fieldset&gt; Kan användas för att gruppera relaterade
          formulärelement visuellt och semantiskt. Det hjälper även skärmläsare
          att förstå att vissa fält hör ihop, samt förbättrar navigering för
          användare som förlitar sig på tangentbord eller skärmläsare.
        </p>
        <p>
          &lt;legend&gt; Ger en beskrivande rubrik till en &lt;fieldset&gt;,
          samt läser upp sammanhanget för skärmläsaranvändare så de vet vad
          gruppen av fält handlar om. I detta fall förstår användare av
          skärmläsare att man skapar en mätare i kommande fält.
        </p>
      </div>
    </section>

    <section className="wcag-success-criteria">
      <h2>Framgångskriterier</h2>
      <ul>
        <li>
          Information, struktur och relationer som förmedlas genom en visuell
          presentation kan bestämmas programmatiskt (programmatically
          determined) eller är tillgänglig i text.
        </li>
      </ul>
    </section>

    <footer className="wcag-footer">
      <a
        href="https://www.w3.org/WAI/WCAG22/Understanding/info-and-relationships.html"
        target="_blank"
        rel="noreferrer"
      >
        Läs mer hos WCAG
      </a>
    </footer>
  </div>
);

export default InformationOchRelationer;
