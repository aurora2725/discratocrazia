document.addEventListener("DOMContentLoaded", () => {
  const logoButton = document.getElementById("logoButton");
  const secretButton = document.getElementById("secretButton");
  const accordionButtons = document.querySelectorAll(".accordion-button");

  // Gestione apertura/chiusura degli accordion
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
  if (logoButton && secretButton) {
    logoButton.addEventListener("click", () => {
      alert(
        "Hai bypassato il protocollo di sorveglianza " +
        "della Discratocrazia.\n\n" +
        "L'archivio clandestino è stato declassificato " +
        "per questa sessione."
      );

      secretButton.classList.add("visible");
      secretButton.setAttribute("aria-hidden", "false");
      void secretButton.offsetHeight;

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
   * CONVERTITORE DEFINITIVO DEL MESE EGNORIANO
   */
  const convertEgnoraDate = document.getElementById("convertEgnoraDate");
  const birthDay = document.getElementById("birthDay");
  const birthMonth = document.getElementById("birthMonth");
  const egnoraResult = document.getElementById("egnoraResult");
  const egnoraDateText = document.getElementById("egnoraDateText");

  // Descrizioni dei 15 mesi egnoriani
  const descrizioniMesiEgnora = {
    1: "Mese 1: Il Risveglio dell'Ombra — Rappresenta gli albori del pensiero egnoriano e la prima scintilla della coscienza.",
    2: "Mese 2: La Crepa della Memoria — Il periodo in cui le vecchie certezze terrestri iniziano a sgretolarsi.",
    3: "Mese 3: Il Silenzio Primordiale — Dedicato alla meditazione profonda e all'ascolto dell'invisibile.",
    4: "Mese 4: La Trascrizione — La fase in cui i primi codici della Discratocrazia vennero messi per iscritto.",
    5: "Mese 5: Il Velo Svelato — Il momento della percezione delle verità nascoste oltre la superficie.",
    6: "Mese 6: L'Equilibrio Distorto — Rappresenta la dualità tra l'ordine imposto e il caos naturale.",
    7: "Mese 7: La Custodia dell'Eternità — Il tempo dedicato alla conservazione dei segreti dimenticati.",
    8: "Mese 8: Il Punto di Svolta — Simboleggia il passaggio definitivo dalla vecchia alla nuova era.",
    9: "Mese 9: La Riflessione del Telar — Il mese in cui la trama dell'universo si fa più fitta e leggibile.",
    10: "Mese 10: La Purificazione dei Codici — Fase di rimozione di ogni interferenza terrestre dal pensiero.",
    11: "Mese 11: Il Sospetto Incombente — L'inizio della vigilanza attiva e della sorveglianza eterea.",
    12: "Mese 12: L'Archivio Clandestino — Mese in cui la conoscenza protetta viene resa accessibile ai soli eletti.",
    13: "Mese 13: Il Convergere degli Eventi — I destini individuali si allineano alla grande struttura di Egnora.",
    14: "Mese 14: La Penombra Finale — L'attesa composta prima della grande rivelazione ciclica.",
    15: "Mese 15: Il Compimento — La chiusura del ciclo egnoriano e la preparazione al nuovo inizio."
  };

  const giorniCumulatiMesi = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334];
  const giorniNeiMesi = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

  if (convertEgnoraDate) {
    convertEgnoraDate.addEventListener("click", () => {
      const day = Number(birthDay ? birthDay.value : 0);
      const month = Number(birthMonth ? birthMonth.value : 0);

      if (!day || !month) {
        alert("Inserisci sia il giorno che il mese di nascita.");
        return;
      }

      if (month < 1 || month > 12) {
        alert("Inserisci un mese valido (da 1 a 12).");
        return;
      }

      const maxGiorni = giorniNeiMesi[month - 1];
      if (day < 1 || day > maxGiorni) {
        alert(`Inserisci un giorno valido per il mese selezionato (max ${maxGiorni}).`);
        return;
      }

      // Calcolo giorni trascorsi dall'inizio dell'anno (n)
      const n = giorniCumulatiMesi[month - 1] + day;

      // Calcolo mese egnoriano (da 1 a 15, arrotondato per eccesso)
      const meseEgnoriano = Math.ceil((n * 15) / 365);
      const descrizione = descrizioniMesiEgnora[meseEgnoriano];

      if (egnoraDateText) {
        egnoraDateText.innerHTML = `
          <strong>Appartieni al ${meseEgnoriano}° Mese Egnoriano!</strong><br><br>
          <em>${descrizione}</em>
        `;
      }

      if (egnoraResult) {
        egnoraResult.hidden = false;
        egnoraResult.removeAttribute("hidden");
      }
    });
  }
});