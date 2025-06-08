import React from "react";
import "../../../styles/WcagPage.css";
import imgUp from "../../../assets/images/ThumbsUp.png";
import imgDown from "../../../assets/images/ThumbsDown.png";
import imgGood from "../../../assets/images/MalstorlekGood.png";
import imgGoodTwo from "../../../assets/images/MalstorlekGoodTwo.png";
import imgGoodThree from "../../../assets/images/MalstorlekGoodThree.png";
import imgBad from "../../../assets/images/MalstorlekBad.png";
import imgBadTwo from "../../../assets/images/MalstorlekBadTwo.png";
import imgBadThree from "../../../assets/images/MalstorlekBadThree.png";

const Malstorlek = () => (
  <div className="wcag-page">
    <header className="wcag-header">
      <h1>Riktlinje 2.5.8 - Målstorlek</h1>
      <p className="wcag-level">Nivå: AA</p>
      <p className="wcag-summary">
        Säkerställer att interaktiva element på digitala plattformar har en
        minsta storlek, vilket förbättrar tillgängligheten för användare,
        särskilt de med motoriska funktionsnedsättningar eller begränsad
        precision.
      </p>
    </header>

    <section className="wcag-description">
      <p>
        För att göra interaktiva element som knappar och länkar lättare att
        använda, särskilt för personer med motoriska svårigheter eller för de
        som använder pekskärmar, så ska målytan vara minst 24×24 pixlar eller ha
        tillräckligt med utrymme runt sig så den totala klickytan blir minst
        24x24 pixlar. Detta minskar risken för feltryck och förbättrar
        användarupplevelsen.
      </p>
      <p>
        Det finns undantag, till exempel för textlänkar i löpande text eller om
        elementet kan förstoras via webbläsaren. Till skillnad från WCAG 2.5.5
        (AAA), som kräver 44×44 px, är detta en mer realistisk nivå att uppnå.
        Dock är en bra praxis att sträva efter 44x44 px på viktiga element. För
        att uppfylla kravet kan man använda padding i CSS för att skapa
        klickbara områden utan att påverka designen.
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
          Målstorleken blir godkänd om man antingen gör klickytan större eller
          själva knappen och/eller ikonen större.
        </p>
        <img src={imgGood} alt="Bildexempel på godkänd målstorlek" />
        <img src={imgGoodTwo} alt="Bildexempel på godkänd målstorlek" />
        <img src={imgGoodThree} alt="Bildexempel på godkänd målstorlek" />
      </div>

      <div className="example-block failed">
        <img
          src={imgDown}
          alt="Tumme ner, ej godkänt exempel"
          className="icon-thumb"
        />
        <p>
          De inringade siffrorna står för hur stor det markerade innehållet är i
          pixlar. Dessa är inte godkända då klickytan för knappen är mindre än
          24px på höjden främst. Bilden i mitten är “hem”knappen som är för
          liten till både höjd och längd.
        </p>
        <img src={imgBad} alt="Bildexempel på målstorlek som inte är godkänt" />
        <img
          src={imgBadTwo}
          alt="Bildexempel på målstorlek som inte är godkänt"
        />
        <img
          src={imgBadThree}
          alt="Bildexempel på målstorlek som inte är godkänt"
        />
      </div>
      <p>
        Tillägg: Glöm ej att även se över målstorlek på ställen man ska hovra
        över för att få mer information, som exempelvis över vissa punkter i
        graferna. Överväg också gärna om hovring är en bra lösning för de
        användare som har svårt för precision på mus och tangentbord.
      </p>
    </section>

    <section className="wcag-success-criteria">
      <h2>Framgångskriterier</h2>
      <ul>
        <li>
          <strong>Avstånd: </strong>När ett mål är mindre än 24x24 CSS-pixlar,
          så måste det ha tillräckligt med utrymme runt sig så att en 24-pixel
          cirkel kan placeras över det utan att överlappa andra mål.
        </li>
        <li>
          <strong>Likvärdigt: </strong>Om det finns ett annat, större
          interaktivt mål på samma sida som utför samma funktion, kan det mindre
          målet få vara kvar. Exempelvis en liten ikon som länkar till en sida,
          men samma länk finns även i huvudmenyn.
        </li>
        <li>
          <strong>Inline: </strong>Är målet en del av en mening eller löpande
          text, så omfattas det inte av kravet. Exempelvis så behöver inte en
          hyperlänk i en text vara 24x24px stor likt en knapp då det istället
          förstör läsbarheten.
        </li>
        <li>
          <strong>Användaragentskontroll: </strong>Om storleken på målet bestäms
          av webbläsaren eller operativsystemet och inte ändrats av utvecklaren,
          gäller inte kravet. Exempelvis inmatningsfält som har en förinställd
          storlek från operativsystemet.
        </li>
        <li>
          <strong>Väsentligt: </strong>Om målstorleken är kritisk för att förstå
          informationen eller lagstadgad, får den vara mindre än 24x24 pixlar.
          Exempelvis en exakt interaktiv punkt på en karta där målet behöver
          vara litet för att visa specifik platsdata.
        </li>
      </ul>
    </section>

    <footer className="wcag-footer">
      <a
        href="https://www.w3.org/WAI/WCAG22/Understanding/target-size-minimum.html"
        target="_blank"
        rel="noreferrer"
      >
        Läs mer hos WCAG
      </a>
    </footer>
  </div>
);

export default Malstorlek;
