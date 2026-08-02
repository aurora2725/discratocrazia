document.addEventListener("DOMContentLoaded", () => {
  const logoButton = document.getElementById("logoButton");
  const secretButton = document.getElementById("secretButton");
  const accordionButtons = document.querySelectorAll(".accordion-button");

  accordionButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const panelId = button.getAttribute("aria-controls");
      const panel = document.getElementById(panelId);

      if (!panel) {
        console.error("Pannello non trovato:", panelId);
        return;
      }

      const isOpen = button.getAttribute("aria-expanded") === "true";

      button.setAttribute("aria-expanded", String(!isOpen));
      panel.hidden = isOpen;
    });
  });

  /*
   * PULSANTE SEGRETO ATTIVATO DAL LOGO
   */

  const secretSection = document.getElementById("secretSection");

  if (logoButton && secretButton) {
    logoButton.addEventListener("click", () => {
      /*
       * Mostra subito il messaggio.
       */
      alert(
        "Hai bypassato il protocollo di sorveglianza " +
        "della Discratocrazia.\n\n" +
        "L'archivio clandestino è stato declassificato " +
        "per questa sessione."
      );

      /*
       * Fa comparire definitivamente il pulsante 5.
       */
      secretButton.classList.add("visible");
      secretButton.setAttribute("aria-hidden", "false");

      /*
       * Forza il browser ad aggiornare la pagina.
       */
      void secretButton.offsetHeight;

      /*
       * Porta la pagina esattamente al pulsante 5.
       */
      setTimeout(() => {
        const position =
          secretButton.getBoundingClientRect().top +
          window.scrollY -
          30;

        window.scrollTo({
          top: position,
          behavior: "smooth"
        });
      }, 50);
    });
  }

  /*
   * CONVERTITORE DEL MESE EGNORIANO
   */

  const convertEgnoraDate = document.getElementById("convertEgnoraDate");
  const birthDay = document.getElementById("birthDay");
  const birthMonth = document.getElementById("birthMonth");
  const egnoraResult = document.getElementById("egnoraResult");
  const egnoraDateText = document.getElementById("egnoraDateText");

  const descrizioniMesiEgnora = {
    1: "Mese 1:  Il tuo mese di nascita è gelkan. Mese riconosciuto per la celebrazione dei dieci dei. Il tuo segno egnoriano è: gekkan. Esso indica che sei determinato e impulsivo",
    2: "Mese 2:  Il tuo mese di nascita è skorum. Mese riconosciuto per la notte dell’amore, giorno di procreazione. Il tuo segno egnoriano è: merlis. Esso indica che sei uno stratega e calcolatore",
    3: "Mese 3: Il tuo mese di nascita è tharnis. Mese riconosciuto per il giorno del disprezzo dei corpi. Il tuo segno egnoriano è: rendial. Esso indica che sei fedele ma rigido negli atteggiamenti.",
    4: "Mese 4:  Il tuo mese di nascita è farks. Mese riconosciuto per il massacro sacro denominato anche la rinascita del sangue. Il tuo mese egnoriano è: tylmar. Esso indica che sei ambizioso e manipolare quando qualcuno o qualcosa cerca di ostacolarti. ",
    5: "Mese 5:  Il tuo mese di nascita è thyrmald. Mese riconosciuto per il digiuno degli schiavi. Il tuo segno egnoriano è: varsel. Esso indica che sei curioso ma le tue emozioni sono instabili.",
    6: "Mese 6:  Il tuo mese di nascita è ulvak. Mese riconosciuto per la glorificazione del lavoro forzato. Il tuo segno egnoriano è: jorth. Esso indica che sei paziente e riservato.",
    7: "Mese 7:  Il tuo mese di nascita è velgarid. Mese riconosciuto per la caduta dell'uguaglianza e la celebrazione della distruzione della parità. Il tuo segno egnoriano è: kerneth. Esso indica che sei intrepido e coraggioso di fronte alle difficoltà. ",
    8: "Mese 8:  Il tuo mese di nascita è zarneth. Mese riconosciuto per la selezione naturale, mese con giochi letali dei clan da parte dei giovani. Il tuo segno egnoriano è: galmar. Esso indica che sei saggio ma freddo.",
    9: "Mese 9:  Il tuo mese di nascita è zundrak. Mese riconosciuto per le prove del fuoco e del dolore. Il tuo segno egnoriano è: fenril. Esso indica che sei emotivo e passionale.",
    10: "Mese 10:  Il tuo mese di nascita è surnak. Mese riconosciuto per la commemorazione dei popoli distrutti. Il tuo segno egnoriano è: draxis. Esso indica che sei intellettuale e cinico.",
    11: "Mese 11:  Il tuo mese di nascita è droven. Mese riconosciuto per l'ascesa dei predestinati o comunemente chiamato l'inizio dell'educazione. Il tuo segno egnoriano è: zereth. Esso indica che sei determinato ma testardo.",
    12: "Mese 12:  Il tuo mese di nascita è rauth. Mese riconosciuto per la notte dei lamenti dove schiavi vengono giustiziati e dati come pasto agli altri. Il tuo segno egnoriano è: calvorn. Esso indica che sei leale ma spesso vendicativo.",
    13: "Mese 13:  Il tuo mese di nascita è ekrovos. Mese riconosciuto per le sfide continue da parte dei clan per l'acquisizione del prestigio. Il tuo segno egnoriano è: orvalis. Esso indica che sei un mediatore e molto e volentieri diplomatico.",
    14: "Mese 14: Il tuo mese di nascita è thormel. Mese riconosciuto per l'invocazione dei morti dove loro giudicheranno il creato attuale. Il tuo segno egnoriano è: eldrin. Esso indica che sei ambiguo e quasi sempre imprevedibile.",
    15: "Mese 15:  Il tuo mese di nascita è xurnak. Mese riconosciuto per la nascita dell'odio puro, dei fondamenti e pensieri incentrati sull'odio. Il tuo segno egnoriano è:  nyrael. Esso indica che sei misterioso e un portatore di cambiamento."
  };

  const giorniCumulatiMesi = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334];
  const giorniNeiMesi = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

  if (
    convertEgnoraDate &&
    birthDay &&
    birthMonth &&
    egnoraResult &&
    egnoraDateText
  ) {
    convertEgnoraDate.addEventListener("click", () => {
      const day = Number(birthDay.value);
      const month = Number(birthMonth.value);

      if (!day || !month) {
        alert("Inserisci giorno e mese.");
        return;
      }

      if (
        day < 1 ||
        day > 31 ||
        month < 1 ||
        month > 12
      ) {
        alert("Inserisci una data valida.");
        return;
      }

      const maxGiorni = giorniNeiMesi[month - 1];
      if (day > maxGiorni) {
        alert(`Giorno non valido per questo mese (max ${maxGiorni}).`);
        return;
      }

      const n = giorniCumulatiMesi[month - 1] + day;
      const meseEgnoriano = Math.ceil((n * 15) / 365);
      const descrizione = descrizioniMesiEgnora[meseEgnoriano];

      egnoraDateText.innerHTML = `
        <strong>Appartieni al ${meseEgnoriano}° Mese Egnoriano!</strong><br><br>
        <em>${descrizione}</em>
      `;

      egnoraResult.hidden = false;
    });
  }
});