import React from "react";

const Anpassningsbart = () => {
  return (
    <div className="wcag-page">
      <h1>1.3 Anpassningspart</h1>
      <p>
        För att skapa tillgängligt innehåll är det viktigt att det kan
        presenteras på olika sätt utan att förlora sin mening. Det handlar inte
        bara om hur saker ser ut, utan också om hur de är strukturerade och
        organiserade. Detta är särskilt viktigt för personer som konsumerar
        innehåll på alternativa sätt, som med väldigt stor inzoomning,
        punktskrift eller skärmläsare. Den här punkten avser att information,
        struktur och relationer i innehållet ska vara tydliga och begripliga,
        oavsett hur det presenteras. Detta innebär bland annat att
        formulärelement ska vara korrekt märkta, rubriker ska användas på rätt
        sätt för att skapa en tydlig hierarki och tabeller ska vara utformade så
        att skärmläsare kan läsa dem korrekt.
      </p>
      <p>
        Föreställ dig en användare som förlitar sig på en skärmläsare. Om en
        webbsida saknar kontext eller är dåligt strukturerad, blir sidan i
        praktiken oanvändbar. På samma sätt kan en sida som inte kan navigeras
        med tangentbordet göra det omöjligt för vissa användare att interagera
        med den.
      </p>
      <ul>
        För att säkerställa att innehållet är tillgängligt krävs bland annat
        följande:
        <li>
          <strong>Strukturerade formulär: </strong>Formulärets etiketter och
          instruktioner ska vara programmerade så de kopplas till sina fält.
          Detta gör det möjligt för en skärmläsare att korrekt beskriva varje
          fält och dess syfte.
        </li>
        <li>
          <strong>Rubriker och etiketter: </strong>Använd rubriker på rätt sätt
          för att strukturera innehållet. Detta hjälper skärmläsare att förstå
          innehållets hierarki och kontext, vilket gör det lättare att navigera
          och ta till sig informationen.
        </li>
      </ul>
      <p>
        Genom att följa dessa principer skapas en användarupplevelse där alla,
        oavsett tekniska eller fysiska förutsättningar, kan få tillgång till och
        navigera genom innehållet på ett begripligt och smidigt sätt.
      </p>
    </div>
  );
};

export default Anpassningsbart;
