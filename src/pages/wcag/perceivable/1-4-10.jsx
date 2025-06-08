import React from "react";
import "../../../styles/WcagPage.css";
import imgUp from "../../../assets/images/ThumbsUp.png";
import imgDown from "../../../assets/images/ThumbsDown.png";
import imgGood from "../../../assets/images/ResponsivDesignGood.png";
import imgBad from "../../../assets/images/ResponsivDesignBad.png";
import imgBadOne from "../../../assets/images/ResponsivDesignBadOne.png";
import imgBadTwo from "../../../assets/images/ResponsivDesignBadTwo.png";
import imgBadThree from "../../../assets/images/ResponsivDesignBadThree.png";

const ResponsivDesign = () => (
  <div className="wcag-page">
    <header className="wcag-header">
      <h1>Krav 1.4.10 - Responsiv Design </h1>
      <p className="wcag-level">Nivå: A</p>
      <p className="wcag-summary">
        Innehåll ska kunna visas utan att information eller funktionalitet går
        förlorad och utan att kräva rullning i två dimensioner, vilket
        underlättar läsning och navigering på olika skärmar.
      </p>
    </header>

    <section className="wcag-description">
      <p>
        Syftet med riktlinje 1.4.10 är att säkerställa att innehållet på en
        webbplats är läsbart och användbart även vid hög inzoomning, till
        exempel för personer med nedsatt syn som förstorar innehållet upp till
        400 %. Detta innebär att innehållet ska kunna anpassa sig till mindre
        skärmar eller smalare visningsytor utan att användaren behöver scrolla
        både horisontellt och vertikalt för att ta del av det så att innehållet
        är fortsatt logiskt, begripligt och tillgängligt.
      </p>

      <p>
        För att uppfylla kriteriet behöver utvecklare se till att layouten är
        responsiv och att text och gränssnittskomponenter inte klipps av,
        överlappar varandra eller kräver tvådimensionell scrollning, särskilt
        vid förstoring upp till 400 % (vilket motsvarar att innehållet visas i
        en viewport på 320 CSS-pixlar i bredd, typiskt för mobilskärmar). Det är
        också viktigt att texten inte tvingar användaren att scrolla i sidled
        för att läsa en mening, vilket annars kan skapa onödig belastning och
        förvirring. Det finns dock vissa undantag där tvådimensionell scrollning
        är tillåten, till exempel för komplexa element som diagram, kartor,
        tabeller eller kodblock, där en enkel omflödeslösning inte är praktiskt
        möjlig utan att förstöra innehållets struktur.
      </p>

      <p>
        För att uppfylla riktlinjen bör utvecklare använda flexibla
        CSS-layouter, procentbaserade mått, media queries och undvika fasta
        breddmått som förhindrar att innehållet anpassar sig.
        Användargränssnittet ska fungera oavsett om det visas på en stor skärm,
        en mobil eller förstoras kraftigt.
      </p>
    </section>

    <section className="wcag-examples two-column">
      <div className="example-block approved">
        <img
          src={imgUp}
          alt="Tummen upp, godkänt exempel"
          className="icon-thumb"
        />
        <img
          src={imgGood}
          alt="Bildexempel på Mestros layout som mobilanpassad där alla element är överskådliga"
        />
        <p>Vyn ovanför är av en bredd om 320 CSS pixlar.</p>
      </div>

      <div className="example-block failed">
        <img
          src={imgDown}
          alt="Tummen ner, ej godkänt exempel"
          className="icon-thumb"
        />
        <img
          src={imgBad}
          alt="Bild på Mestros nuvarande layout på en bredd om 320 pixlar där delar av innehåll helt försvinner"
        />
      </div>
    </section>

    <section className="wcag-examples">
      <div className="example-block failed">
        <img src={imgBadOne} alt="Bild på Mestros portal" />
        <p>
          I denna vy kan man scrolla vertikalt och horisontellt men vänstra
          menyn är alltid på samma plats; vilket gör att det är ansträngande att
          se helheten av innehållet.
        </p>

        <img src={imgBadTwo} alt="Bild på Mestros portal där man fastnat" />
        <p>
          När man stänger ner menyn kan man inte scrolla överhuvudtaget, man
          sitter fast i denna vy.
        </p>

        <img
          src={imgBadThree}
          alt="Bild på Mestros portal där man zoomats in på menyn och inte kommer någonstans"
        />
        <p>
          När man har menyn uppe i 400% så sitter man helt fast här, man kan
          inte klicka sig vidare överhuvudtaget.
        </p>
      </div>
    </section>

    <section className="wcag-success-criteria">
      <h2>Framgångskriterier</h2>
      <p>
        Innehåll ska presenteras utan förlust av information eller
        funktionalitet, och utan att behöva rulla i två dimensioner för:
      </p>
      <ul>
        <li>
          Vertikalt scrollande innehåll med en bredd motsvarande 320 CSS-pixlar;
        </li>
        <li>
          Horisontellt scrollande innehåll på en höjd motsvarande 256
          CCS-pixlar.
        </li>
      </ul>
    </section>

    <footer className="wcag-footer">
      <a
        href="https://www.w3.org/WAI/WCAG21/Understanding/reflow.html"
        target="_blank"
        rel="noreferrer"
      >
        Läs mer hos WCAG
      </a>
    </footer>
  </div>
);

export default ResponsivDesign;
