import React from "react";

const TidsbaseradMedia = () => {
  return (
    <div className="wcag-page">
      <h1>1.2 Tidsbaserad Media</h1>
      <p>
        För att säkerställa att alla kan ta del av samma innehåll, oavsett
        funktionsvariationer, krävs alternativ för ljud- och videoinnehåll.
        Denna punkt berör alternativ för ljud- och videoinnehåll så att de som
        varken ser eller hör också kan ta del av den information som finns.
        <p>
          För att göra dessa format tillgängliga finns riktlinjer som kan
          tillämpas i olika situationer. Till exempel bör förinspelade videor,
          som en instruktionsvideo, ha undertexter och en beskrivning av vad som
          händer för att inkludera användare som är döva eller blinda. Vid
          live-evenemang är det viktigt att erbjuda uppdaterade undertexter i
          realtid så att personer med nedsatt hörsel kan följa med. För
          ljudinnehåll, såsom podcasts, är det avgörande att tillhandahålla
          transkriptioner för de som inte kan höra.
        </p>
        <p>
          Olika personer har olika behov. Döva personer som kan läsa kan ta del
          av information via transkriptioner, medan andra kan föredra
          teckenspråk. Personer som har svårt att ta in information i en
          förutbestämd takt kan gynnas av transkriptioner, eftersom de då kan
          konsumera innehållet i sin egen takt. Blinda användare kan använda
          ljudbeskrivningar för att få en uppfattning om visuella detaljer som
          annars bara framgår av videons ursprungliga innehåll.
        </p>
      </p>
      <h2>Exempel</h2>
      <ul>
        Det finns flera metoder för att ge alternativ och göra innehåll
        tillgängligt:
        <li>
          <strong>Undertexter: </strong>Dessa ger tillgång till allt som sägs i
          en video och är särskilt användbara för personer med
          hörselnedsättning. De är synkroniserade med ljudet och kan vanligtvis
          aktiveras eller inaktiveras.
        </li>
        <li>
          <strong>Transkriptioner: </strong>Dessa presenterar all information i
          textform, vilket gör att användaren kan ta till sig innehållet i egen
          takt.
        </li>
        <li>
          <strong>Ljudbeskrivningar: </strong>Dessa lägger till en berättarröst
          som beskriver tysta handlingar och händelser i videon, vilket är
          väldigt viktigt för personer som inte kan se vad som händer för att
          kunna förstå kontexten. Oftast inkluderas dom där den vanliga dialogen
          inte inträffar. Exempelvis: "Pat öppnar en liten låda, tittar på en
          diamantring och börjar gråta."
        </li>
        <li>
          <strong>Teckenspråk: </strong>För personer som föredrar teckenspråk
          kan en liten ruta i videon inkluderas där en person tecknar
          innehållet. Detta är särskilt viktigt för döva användare.
        </li>
      </ul>
      <p>
        Det är avgörande att dessa verktyg används korrekt för att undvika
        missförstånd eller felinformation. Exempelvis kan automatiska
        undertexter vara opålitliga och orsaka allvarliga problem, det är därför
        viktigt att kontrollera och säkerställa att verktygen kan användas
        korrekt. Nedan följer ett exempel från W3C på en automatisk undertext
        som potentiellt hade kunnat orsaka en brand:
      </p>
      <p>
        Spoken audio: “Broil on high for 4 to 5 minutes. You should not preheat
        the oven.” Automatic caption: “Broil on high for 45 minutes. You should
        know to preheat the oven.”
      </p>
    </div>
  );
};

export default TidsbaseradMedia;
