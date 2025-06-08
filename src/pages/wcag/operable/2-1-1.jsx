import React from "react";
import "../../../styles/WcagPage.css";
import "../../../styles/Images.css";
import imgGood from "../../../assets/images/TangentbordGood.png";
import imgBad from "../../../assets/images/TangentbordBad.png";
import imgUp from "../../../assets/images/ThumbsUp.png";
import imgDown from "../../../assets/images/ThumbsDown.png";

const Tangentbord = () => (
  <div className="wcag-page">
    <header className="wcag-header">
      <h1>Riktlinje 2.1.1 - Tangentbord </h1>
      <p className="wcag-level">Nivå: A</p>
      <p className="wcag-summary">
        All funktionalitet i innehållet ska kunna användas via ett
        tangentbordsgränssnitt utan att specifika tidsangivelser krävs för
        enskilda tangenttryckningar.
      </p>
    </header>

    <section className="wcag-description">
      <p>
        Riktlinje 2.1.1 syftar till att säkerställa att allt innehåll och all
        funktionalitet på en webbplats ska kunna användas med tangentbordet,
        utan att man måste använda mus eller pekskärm. Detta innebär att
        användare ska kunna navigera, aktivera knappar, fylla i formulär, öppna
        menyer och utföra andra åtgärder endast med hjälp av tangentbord eller
        tangentbordsliknande hjälpmedel, som till exempel röststyrning och
        skärmtangentbord. Detta är särskilt viktigt för personer med nedsatt
        syn, motoriska svårigheter eller andra funktionsnedsättningar som gör
        det svårt eller omöjligt att använda en mus. Riktlinjen är även viktig
        och användbar för vana användare som navigerar med tangentbordet.
      </p>
      <p>
        För att uppfylla detta krav ska utvecklare undvika att funktioner enbart
        går att nå via musinteraktion, till exempel genom att kräva att en
        användare klickar eller drar med musen. Det räcker inte heller att
        användaren kan använda "MouseKeys" (där man styr musen med
        tangentbordet) eftersom det fortfarande räknas som musinteraktion ur
        teknisk synvinkel. För att möta riktlinjen i praktiken bör utvecklare
        säkerställa att alla interaktiva element går att fokusera och använda
        med tangentbordet, inte kräva snabba upprepade tangentryckningar eller
        att en tangent hålls in länge för att en funktion ska fungera.
        Utvecklare bör även testa webbplatsen genom att navigera endast med
        tangentbordet, och bekräfta att all funktionalitet är åtkomlig och
        fungerar.
      </p>

      <p>
        Det finns ett undantag i riktlinjen som gäller situationer där en
        funktion bygger på rörelsemönster snarare än bara start och slutpunkter,
        exempelvis att rita fritt med en digital penna. En sån funktion är inte
        rimlig att översätta till tangentbordskontroller och omfattas därför
        inte av kravet.
      </p>
    </section>

    <section className="wcag-examples two-column-operable">
      <div className="example-block approved">
        <img
          src={imgUp}
          alt="Tumme upp, godkänt exempel"
          className="icon-thumb"
        />
        <p>
          Det finns inte enbart ett specifikt sätt att skriva koden på som gör
          detta kriteriet godkänt eller ej, utan så länge koden gör så att man
          kan navigera mellan alla interaktiva delar med tangentbordet så är det
          godkänt! Exempelvis som ni har gjort i koden här;
        </p>
        <img
          src={imgGood}
          alt="Godkänt kodexempel på hur man navigerar med tangentbord"
        />
      </div>

      <div className="example-block failed">
        <img
          src={imgDown}
          alt="Tumme ner, ej godkänt exempel"
          className="icon-thumb"
        />
        <h2>Exempel från WCAGs hemsida:</h2>
        <p>
          I detta exempel ska man klicka sig vidare på bilden för att ta sig
          vidare. Eftersom det inte går att klicka sig vidare med tangentbordet
          så är detta exempel inte godkänt.
        </p>
        <img
          src={imgBad}
          alt="Ej godkänt kodexempel på hur man inte tar sig vidare med enbart tangentbord"
        />
      </div>
    </section>

    <section className="wcag-success-criteria">
      <h2>Framgångskriterier</h2>
      <ul>
        <li>
          All funktionalitet av innehållet går praktiskt att genomföra med ett
          tangentbordsgränssnitt, utan att det kräver specifik timing för
          individuella tangenttryckningar; förutom där den underliggande
          funktionen kräver input som beror på användarens rörelsebana och inte
          bara slutpunkterna. Exempelvis genom att rita fritt med mus på en
          digital målarduk.
        </li>
        <li>
          Notera: Detta undantag avser den underliggande funktionen, inte
          inmatningstekniken. Om man till exempel använder handskrift för att
          skriva in text, kräver inmatningstekniken (handskrift) sökvägsberoende
          inmatning men den underliggande funktionen (textinmatning) gör det
          inte.
        </li>
      </ul>
    </section>

    <footer className="wcag-footer">
      <a
        href="https://www.w3.org/WAI/WCAG21/Understanding/keyboard.html"
        target="_blank"
        rel="noreferrer"
      >
        Läs mer hos WCAG
      </a>
    </footer>
  </div>
);

export default Tangentbord;
