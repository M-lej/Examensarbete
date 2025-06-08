import React from "react";

const Kompatibel = () => {
  return (
    <div className="wcag-page">
      <h1>4.1 Robust</h1>
      <p>
        Robust handlar om att innehållet ska kunna tolkas tillförlitligt samt
        följa standarder vid utveckling av teknik. Tjänsten eller produkten
        måste vara kompatibel med olika hjälpmedel och enheter. En viktig del av
        tillgängligheten är att skapa robusta lösningar; vilket innebär att
        koden ska vara korrekt och tydlig. Här spelar begreppen "namn, roll och
        värde" en avgörande roll och handlar om att göra interaktiva delar som
        knappar och formulär enkla att förstå och använda för dem som använder
        hjälpmedel. Namnet beskriver exempelvis vad en knapp gör. Rollen
        definierar vad elementet är, exempelvis att det är en knapp och inte
        bara en text. Värdet anger elementets status, exempelvis om en checkbox
        är markerad. Detta är särskilt viktigt för användare som förlitar sig på
        hjälpmedel som skärmläsare, eftersom tydligt definierade element gör det
        enklare för dem att navigera och förstå webbplatsen. Man kan säga att
        det är som att ha allting sorterat och att var sak har sin plats - har
        dom det så blir det enklare att hitta och använda alla saker effektivt.
      </p>
      <p>
        Ytterligare en aspekt att ta hänsyn till är statusmeddelanden. Dessa
        meddelanden, som exempelvis bekräftelser på att ett meddelande skickats
        eller information om att ett fel har uppstått, måste nå fram till
        användaren och helst läsas upp automatiskt för dem som använder
        skärmläsare. Detta säkerställer att användaren inte går miste om viktig
        information eller behöver leta efter meddelandet manuellt. Exempelvis så
        bör en skärmläsare läsa upp “Meddelande skickat” så att användaren får
        det bekräftat. Om ett sådant meddelande inte läses upp så saknar
        användaren en indikation på att uppgiften den försökt fullfölja faktiskt
        har slutförts. Användaren bör även få information om saker som behövs
        rättas till för att kunna gå vidare. Exempelvis om man glömt fylla i ett
        obligatoriskt fält i ett formulär och därför inte kan ta sig vidare.{" "}
      </p>
      <p>
        För att säkerställa att en webbplats är tillgänglig och kan tolkas på
        ett tillförlitligt sätt av olika hjälpmedel och tekniska lösningar finns
        det flera aspekter att ta hänsyn till. För att säkerställa att en
        webbplats uppfyller tillgänglighetskraven är det viktigt att använda
        både automatiska och manuella tester. Verktyg som NVDA, en gratis
        skärmläsare för Windows, och VoiceOver, en inbyggd skärmläsare för iOS,
        är användbara vid testning. Dessutom kan W3C Markup Validation Service
        användas för att analysera om webbplatsens kod följer de fastställda
        standarderna. Att manuellt testa i olika webbläsare, på olika enheter
        och med olika operativsystem är också avgörande för att säkerställa att
        webbplatsen fungerar som den ska i olika miljöer.
      </p>
      <p>
        Genom att följa WCAG:s riktlinjer och arbeta med robust kod kan
        utvecklare skapa webbplatser som är tillgängliga och användarvänliga för
        alla. Tydlig struktur och genomtänkt design gör det inte bara enklare
        för hjälpmedel att tolka informationen, utan också för alla användare
        att interagera med webbplatsen på ett smidigt och effektivt sätt.
      </p>
    </div>
  );
};

export default Kompatibel;
