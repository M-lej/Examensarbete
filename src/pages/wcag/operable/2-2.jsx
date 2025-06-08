import React from "react";

const TillrackligtMedTid = () => {
  return (
    <div className="wcag-page">
      <h1>2.2 Tillräckligt med tid</h1>
      <p>
        Det är viktigt att användare ges tillräckligt med tid för att utföra
        uppgifter, exempelvis när man köper biljetter till en konsert eller när
        man fyller i ett formulär. För personer med funktionsnedsättningar kan
        det krävas mer tid att slutföra sådana uppgifter. Detta kan bero på att
        det tar längre tid att läsa eller navigera på sidan, använda hjälpmedel,
        eller fysiskt att utföra interaktionerna. Till exempel kan personer med
        nedsatt syn behöva mer tid för att lokalisera relevant information,
        eller så använder de sig av tekniska hjälpmedel som skärmläsare, vilket
        i sin tur förlänger processen.
      </p>
      <p>
        Ett bra tillgängligt system bör erbjuda alternativ som låter användaren
        begära mer tid vid behov, exempelvis vid formulär med tidsbegränsningar.
        Detta säkerställer att alla användare, oavsett förmåga, kan slutföra
        sina uppgifter utan att känna sig stressade eller utestängda.
      </p>
      <p>
        Förutom tidsbegränsningar är det också viktigt att hantera rörligt
        innehåll på ett användarvänligt sätt. Automatiskt startande rörlig
        information som varar längre än fem sekunder, eller som visas samtidigt
        som annat innehåll, bör kunna pausas, stoppas eller stängas av av
        användaren om det inte är avgörande för innehållets budskap. Exempelvis
        bör slideshows, karuseller eller nyhetsflöden inkludera tydliga
        kontroller för att hantera rörelse eller uppdateringar.
      </p>
      <p>
        När det gäller mediaspelare är det viktigt att ge användaren tillgång
        till effektiva verktyg för att styra uppspelning, så att de kan pausa,
        spola tillbaka eller justera innehållet utan att vara begränsade av
        strikta tidsramar. Detta skapar en mer inkluderande digital miljö där
        användare har friheten att interagera med innehållet i sin egen takt.
      </p>
    </div>
  );
};

export default TillrackligtMedTid;
