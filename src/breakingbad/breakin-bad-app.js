const fetchOuote = async() => {
    const res = await fetch('https://api.breakingbadquotes.xyz/v1/quotes');
    //const res = await fetch('https://rickandmortyapi.com/api/character');
    const data = await res.json();

    console.log(data[0]);
    return data[0];
}

/**
 * 
 * @param {HTMLDivElement} element 
 */
export const BreakingbadApp = async(element) => {

    document.querySelector('#app-title').innerHTML = 'Breakingbad App';
    element.innerHTML = 'Loading...';

    //const quote = await fetchOuote();
    //element.innerHTML = 'Tenemos data';
    const quoteLabel = document.createElement('blockquote');
    const authoLabel = document.createElement('h3');
    const nextQuoteButton = document.createElement('button');
    nextQuoteButton.innerText = 'Next Quote';

    const renderQuote = (data) => {
        quoteLabel.innerHTML = data.quote;
        authoLabel.innerHTML = data.author;
        element.replaceChildren(quoteLabel, authoLabel, nextQuoteButton);
    }

    //Funcion de nextquote
    nextQuoteButton.addEventListener('click', async() => {
        element.innerHTML = 'Loading...';
        const quote = await fetchOuote();
        renderQuote(quote);
    })


    fetchOuote()
        .then(renderQuote);
}