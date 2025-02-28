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

async function fetchData() {
  const url = 'https://jsonplaceholder.typicode.com/posts'; // API di esempio
  const data = {
    title: 'foo',
    body: 'bar',
    userId: 1
  };

  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });

    if (!response.ok) {
      throw new Error(`Errore HTTP! Stato: ${response.status}`);
    }

    const result = await response.json();
    console.log('Risposta API:', result);
  } catch (error) {
    console.error('Errore nella richiesta:', error);
  }
}

fetchData();


// Chiamata alla funzione che esegue le due funzioni in serie
eseguiFunzioniInSerie();
