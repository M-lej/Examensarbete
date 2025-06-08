import React from "react";
import "../../../styles/WcagPage.css";
import imgUp from "../../../assets/images/ThumbsUp.png";
import imgDown from "../../../assets/images/ThumbsDown.png";
import imgGoodOne from "../../../assets/images/AnvandningAvFargGoodOne.png";
import imgGoodTwo from "../../../assets/images/AnvandningAvFargGoodTwo.png";
import imgBadOne from "../../../assets/images/AnvandningAvFargBadOne.png";
import imgBadTwo from "../../../assets/images/AnvandningAvFargBadTwo.png";
import imgBadThree from "../../../assets/images/AnvandningAvFargBadthree.png";

const AnvandningAvFarg = () => (
  <div className="wcag-page">
    <header className="wcag-header">
      <h1>Krav 1.4.1 - Användning av färg </h1>
      <p className="wcag-level">Nivå: A</p>
      <p className="wcag-summary">
        Information ska inte enbart förmedlas genom färg; den bör även kunna
        urskiljas på andra sätt för att säkerställa tillgänglighet för
        färgblinda användare.
      </p>
    </header>

    <section className="wcag-description">
      <p>
        Information som kommuniceras genom färg måste ha ett extra visuellt
        stöd, så att även de som har problem med att uppfatta färger kan ta del
        av informationen. Om färg används för att indikera exempelvis
        obligatoriska fält, felmeddelanden eller andra viktiga skillnader så bör
        detta kompletteras med andra visuella element såsom ikoner, text eller
        kontrastskillnader i ljusstyrka som räcker till.
      </p>
    </section>

    <section className="wcag-examples">
      <div className="example-block approved">
        <img
          src={imgUp}
          alt="Tummen upp, godkänt exempel"
          className="icon-thumb"
        />
        <img src={imgGoodOne} alt="Svartvit bild på graf med mönster" />
        <p>
          I denna graf har man urskilt så det inte enbart är färg som uppvisar
          information, då den även förmdelar det med mönster.
        </p>

        <img
          src={imgGoodTwo}
          alt="Svartvit bild på ett cirkeldiagram med text"
        />
        <p>
          I detta cirkeldiagram är det enkelt att förstå informationen även utan
          färg tack vare text i direkt anslutning till var grupp.
        </p>
      </div>

      <div className="example-block failed">
        <img
          src={imgDown}
          alt="Tummen ner, ej godkänt exempel"
          className="icon-thumb"
        />
        <img
          src={imgBadTwo}
          alt="Svartvit bild där man ej kan urskilja information"
        />
        <p>
          Här går det ej att urskilja vad för färg punkterna har och vad de ska
          representera.
        </p>

        <img
          src={imgBadOne}
          alt="Svartvit bild där man inte förstår stapeldiagramen"
        />
        <p>
          Om man snabbt vill urskilja staplarnas information likt de som ser
          färg, så blir det plötsligt väldigt mycket svårare för en färgblind
          att urskilja el/värme/kyla.
        </p>

        <img
          src={imgBadThree}
          alt="Svartvit bild där man inte uppfattar information"
        />
        <p>
          En person som inte uppfattar färg måste se till siffrorna för att
          uppfatta informationen och får därför inte samma överblick som en
          person som ser färg på stapeln ovan. Det är väldigt svårt att veta
          vilken färg som är till el/värme/kyla/varmvatten.
        </p>
      </div>

      <p>
        <strong>OBS:</strong> Ni har redan den visuella informationen
        presenterad som siffror/annan data, dvs presenteras i annan form än
        färg, så i teorin så är “tummen ner” inte helt icke godkänt. MEN det är
        saker som kan förbättras om man vill se till en verklig förändring för
        de som faktiskt inte kan uppfatta färg - denna funktion är ju till för
        att ge överblick och göra det enklare att uppfatta, något som den som
        inte uppfattar färg tyvärr inte kan ta del av.
      </p>
    </section>

    <section className="wcag-success-criteria">
      <h2>Framgångskriterier</h2>
      <ul>
        <li>
          Enbart färg ska inte användas som det enda sättet att förmedla
          information, indikera en handling, framkalla en respons eller för att
          urskilja visuella element.
        </li>
      </ul>
    </section>

    <footer className="wcag-footer">
      <a
        href="https://www.w3.org/WAI/WCAG21/Understanding/use-of-color.html"
        target="_blank"
        rel="noreferrer"
      >
        Läs mer hos WCAG
      </a>
    </footer>
  </div>
);

export default AnvandningAvFarg;
