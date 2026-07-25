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

/*
 * PULSANTE SEGRETO ATTIVATO DAL LOGO
 */

/*
 * PULSANTE SEGRETO ATTIVATO DAL LOGO
 */

const secretSection =
  document.getElementById("secretSection");

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
     * Forza il browser ad aggiornare la pagina
     * dopo la comparsa del pulsante.
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
 * CONVERTITORE PROVVISORIO DELLA DATA EGNORIANA
 */

const convertEgnoraDate =
  document.getElementById("convertEgnoraDate");

const birthDay =
  document.getElementById("birthDay");

const birthMonth =
  document.getElementById("birthMonth");

const birthYear =
  document.getElementById("birthYear");

const egnoraResult =
  document.getElementById("egnoraResult");

const egnoraDateText =
  document.getElementById("egnoraDateText");


if (
  convertEgnoraDate &&
  birthDay &&
  birthMonth &&
  birthYear &&
  egnoraResult &&
  egnoraDateText
) {
  convertEgnoraDate.addEventListener("click", () => {
    const day = Number(birthDay.value);
    const month = Number(birthMonth.value);
    const year = Number(birthYear.value);

    if (!day || !month || !year) {
      alert("Inserisci giorno, mese e anno.");
      return;
    }

    if (
      day < 1 ||
      day > 31 ||
      month < 1 ||
      month > 12 ||
      year < 1900 ||
      year > 2100
    ) {
      alert("Inserisci una data valida.");
      return;
    }

    /*
     * Conversione provvisoria.
     *
     * Un anno egnoriano possiede:
     * 15 mesi × 30 giorni = 450 giorni.
     *
     * Per realizzare la conversione reale bisogna stabilire:
     *
     * 1. quale data terrestre corrisponde al giorno 1,
     *    mese 1, anno 1 di Egnora;
     *
     * 2. quanto dura esattamente un giorno egnoriano
     *    rispetto a un giorno terrestre;
     *
     * 3. i nomi dei 15 mesi e dei 9 giorni
     *    della settimana.
     */

    const provisionalDay =
      ((day - 1) % 30) + 1;

    const provisionalMonth =
      ((month - 1) % 15) + 1;

    const provisionalYear =
      year + 742;

    egnoraDateText.textContent =
      `${provisionalDay}° giorno del ` +
      `${provisionalMonth}° mese, ` +
      `anno ${provisionalYear} di Egnora`;

    egnoraResult.hidden = false;
  });
}
});