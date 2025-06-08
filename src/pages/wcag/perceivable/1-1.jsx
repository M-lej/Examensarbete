import React from "react";

const AlternativTillText = () => {
  return (
    <div className="wcag-page">
      <h1>1.1 Alternativ till text</h1>
      <p>
        Det är viktigt att allt innehåll på en webbplats eller app är
        tillgängligt för alla användare. Detta innefattar att alla
        icke-textbaserade element som bilder, diagram och animationer har ett
        textalternativ. Alla kan inte hantera visuell information på samma sätt,
        vilket gör att sådana element kan bli hinder för personer med nedsatt
        syn eller för de som använder skärmläsare. För att undvika detta bör
        allt visuellt innehåll kompletteras med textalternativ som förmedlar
        samma syfte eller information som det visuella elementet. Exempelvis bör
        en bild på en nyhetsartikel ha en alt-text som beskriver vad bilden
        föreställer, istället för att bara kallas "image" eller "photo". På
        samma sätt bör diagram och grafer, som exempelvis en graf som visar
        klimatförändringsdata, ha en textbeskrivning som sammanfattar viktiga
        trender, information eller nyckeldata; istället för att bara beskrivas
        som en "graf" eller "chart".
      </p>
      <p>
        Även ikoner och knappar bör vara tydliga. Om en ikon används för
        navigation, till exempel en "hem"-knapp, bör den ha en text som
        förklarar dess funktion. Ikonen ska inte bara förlita sig på sin
        visuella representation utan bör kompletteras med en text för att
        säkerställa att alla användare förstår dess syfte. Genom att erbjuda
        textalternativ för visuellt innehåll kan personer som inte ser eller
        uppfattar dessa element ändå ta del av den information som förmedlas.
        Tänk dig till exempel hur svårt det är att förstå en graf om du inte kan
        se den eller att navigera en webbplats om viktig information bara finns
        i bildformat. Med textalternativ blir innehållet tillgängligt för alla,
        oavsett deras förutsättningar.
      </p>
    </div>
  );
};

export default AlternativTillText;
