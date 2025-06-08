import React from "react";

const AnfallOchFysiskaReaktioner = () => {
  return (
    <div className="wcag-page">
      <h1>2.3 Anfall och fysiska reaktioner </h1>
      <p>
        Blinkande och blixtrande innehåll kan vara farligt för vissa användare,
        särskilt de med ljuskänslig epilepsi då det kan trigga anfall. Snabba
        rörelser, hög kontrast, blinkande ljus och intensiva animeringar bör
        undvikas för att inte utsätta användare för risker. Om sådant innehåll
        ändå används bör det finnas tydliga varningar innan det visas, samt
        möjligheter för användaren att stänga av dessa effekter omedelbart.
      </p>
      <ul>
        Produkter och tjänster bör utformas för att minimera riskerna för
        ljuskänsliga personer genom att följa riktlinjer för säkra bild- och
        ljusnivåer. Detta inkluderar att undvika:
        <li>
          <strong>Snabba bildsekvenser: </strong>Som exempelvis i videos, spel
          och animationer med intensiva visuella effekter eller snabba
          bildväxlingar.
        </li>
        <li>
          <strong>Blinkande ljus </strong>eller ljuseffekter med hög frekvens.
        </li>
        <li>
          <strong>Kontrasterande mönster: </strong>Exempelvis hög kontrast
          mönster som randigt eller rutigt som också kan trigga anfall.
        </li>
      </ul>
    </div>
  );
};

export default AnfallOchFysiskaReaktioner;
