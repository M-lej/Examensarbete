import React from "react";

const Navigeringsbar = () => {
  return (
    <div className="wcag-page">
      <h1>2.4 Navigeringsbar</h1>
      <p>
        Att hjälpa användaren att hitta det de behöver och hålla reda på sin
        plats är avgörande för en god användarupplevelse, särskilt för personer
        med funktionsnedsättningar. För dessa användare kan det vara svårare att
        navigera och orientera sig på en webbplats, vilket gör att tydliga och
        effektiva navigationssystem är extra viktiga.
      </p>
      <p>
        För att underlätta navigeringen bör användaren alltid kunna identifiera
        var den befinner sig på sidan. Ett exempel på detta kan vara att
        visuellt markera vilken del av webbplatsen användaren är i, till exempel
        genom att framhäva vilken menysektion eller vilken sida som är aktiv när
        man tabbar sig genom hemsidan. På så sätt får användaren en kontinuerlig
        översikt över sin plats, vilket gör navigeringen mer förutsägbar och
        överskådlig
      </p>
      <p>
        En konsekvent och tydlig design, där användaren hela tiden kan förstå
        sin position, skapar en mer tillgänglig och användarvänlig webbplats.
        Detta är särskilt viktigt för personer med kognitiva eller visuella
        funktionsnedsättningar, som kan ha svårt att orientera sig om inte
        tillräckliga visuella eller textbaserade hjälpmedel finns tillgängliga.
      </p>
    </div>
  );
};

export default Navigeringsbar;
