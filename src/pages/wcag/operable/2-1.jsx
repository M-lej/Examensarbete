import React from "react";

const TillgangligtViaTangentbord = () => {
  return (
    <div className="wcag-page">
      <h1>2.1 Tillgängligt via tangentbord</h1>
      <p>
        Vissa enheter har inte ett inbyggt tangentbord, exempelvis handdatorer
        eller mobiltelefoner - men om dessa enheter har möjlighet till att surfa
        på webben så kommer de dock ha något sätt att generera text eller
        tangenttryckningar på. Denna riktlinje använder ett
        tangentbordsgränssnitt för att bekräfta att webbinnehåll bör styras med
        tangentbordstryckningar. All funktionalitet som finns på sidan ska kunna
        gå att användas med enbart tangentbordet.
      </p>
      <p>
        Om all funktionalitet på en webbplats kan nås och styras via
        tangentbordet, så blir den även tillgänglig för användare som använder
        sig av olika inmatningsmetoder. Detta inkluderar taligenkänning som kan
        generera tangentbordsinmatning, mus, tangentbord på skärmen och en mängd
        hjälpmedel som skapar simulerade tangenttryckningar.
        Tangentbordsstyrning är unik i sin flexibilitet och universella
        tillämpning vilket gör den särskilt viktig för personer med
        funktionsnedsättningar, så länge den inte är beroende av exakt timing
        för enskilda tryckningar.
      </p>
      <p>
        Även enheter utan inbyggt tangentbord, som handdatorer eller
        mobiltelefoner, har vanligtvis sätt att skapa tangenttryckningar eller
        textinmatning, vilket gör detta tillvägagångssätt relevant för alla
        plattformar. Denna riktlinje säkerställer att webbinnehåll är
        navigerbara och styrbart med tangentbordsinmatning, vilket innebär att
        alla funktioner på sidan ska kunna användas utan mus eller andra
        pekbaserade metoder. Att designa för tangentbordsåtkomst gör inte bara
        webben mer inkluderande utan skapar också en robustare
        användarupplevelse för alla.
      </p>
    </div>
  );
};

export default TillgangligtViaTangentbord;
