import React from "react";

const Forutsagbar = () => {
  return (
    <div className="wcag-page">
      <h1>3.2 Förutsägbar</h1>
      <p>
        "Förutsägbar" fokuserar på att skapa gränssnitt som är konsekventa och
        förutsägbara för att underlätta användarupplevelsen. Navigationsmenyer
        och andra återkommande element bör alltid finnas på samma plats under
        hela användarresan, vilket gör det enklare för användaren att orientera
        sig och navigera på webbplatsen. För personer med diagnoser som ADHD
        eller autism kan det vara särskilt viktigt att inget oväntat inträffar
        då oväntade händelser kan skapa obehag. Exempelvis kan det vara störande
        om ett nytt fönster öppnas utan förvarning.
      </p>

      <p>
        Ikoner och andra visuella element som gränssnitt och layouts ska
        användas på ett konsekvent sätt, där varje ikon representerar samma
        funktion eller budskap genomgående. Detta skapar en tydlighet som
        hjälper användaren att förstå och förutse gränssnittets beteende. Ett
        konsekvent och förutsägbart gränssnitt bidrar inte bara till en bättre
        användarupplevelse för alla, utan är också avgörande för att möta
        behoven hos personer med kognitiva utmaningar.
      </p>
    </div>
  );
};

export default Forutsagbar;
