// Prima funzione asincrona che si risolve dopo 2 secondi
function funzione1() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve("Risultato della funzione 1");
      }, 2000); // Risoluzione dopo 2 secondi
    });
  }
  
  // Seconda funzione asincrona che si risolve dopo 4 secondi
  function funzione2() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve("Risultato della funzione 2");
      }, 4000); // Risoluzione dopo 4 secondi
    });
  }
  
  // Terza funzione asincrona che chiama funzione1 e funzione2 in serie
  async function eseguiFunzioniInSerie() {
    console.log("Inizio esecuzione delle funzioni...");
    
    // Utilizza await per attendere che le due promesse vengano risolte in serie
    const risultato1 = await funzione1();
    console.log(risultato1);
  
    const risultato2 = await funzione2();
    console.log(risultato2);
  
    console.log("Entrambe le funzioni sono state risolte.");
  }
  
  // Chiamata alla funzione che esegue le due funzioni in serie
  eseguiFunzioniInSerie();
  