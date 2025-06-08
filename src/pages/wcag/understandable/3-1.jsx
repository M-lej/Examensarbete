import React from "react";

const Lasbarhet = () => {
  return (
    <div className="wcag-page">
      <h1>3.1 Läsbar</h1>
      <p>
        Texten ska vara läsbar vilket innebär att terminologi ska förtydligas
        och förklaras där behov finns så att det är lätt att förstå, oavsett om
        det är en expert eller ny person inom området. Texten ska vara anpassad
        så att den som har svårt för ord och fraser även kan ta del av
        innehållet, det är även av vikt att hålla ett enkelt och tillgängligt
        språk för att användaren inte ska känna sig korkad. Använder man sig
        dessutom av verktyg som zoomar in texten kraftigt så är det extra
        viktigt att ha en tydlig text så att den fortfarande är läsbar. I snitt
        så läser man inte mer än tre rader text - så se till att texten är
        innehållsrik med nödvändig information och är just läsbar. Undvik även
        att skriva ut förkortningar utan en förklaring till vad det innebär. Om
        förkortningar används för första gången så skriv ut alla ord och
        förklara förkortningens innebörd. Exempelvis “World Wide Web (WWW)”.
      </p>

      <p>
        Om ett ord kan uttalas fel av en skärmläsare så är det viktigt att ordet
        sägs i sitt sammanhang så man förstår vad det är för ord som menas. Det
        är viktigt att lyssna igenom webbsidan med exempelvis en skärmläsare så
        att man förstår att det man hör är sammanhängande och tydligt. Ibland
        kan uttalet bli bättre eller sämre beroende på vilken röst man har på
        skärmläsaren. Det kan även vara svårt att läsa upp vissa ord och
        siffror. Det går dock att lösa med att gå in i koden och skriva hur det
        specifika ordet ska läsas upp men det är på detaljnivå.{" "}
      </p>
    </div>
  );
};

export default Lasbarhet;
