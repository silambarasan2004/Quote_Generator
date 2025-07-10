
const quotes = [
  { text: "Life is like riding a bicycle. To keep your balance, you must keep moving.", author: "Albert Einstein"},
  { text: "It always seems impossible until it's done.", author: "Nelson Mandela"},
  { text: "Your time is limited, so don’t waste it living someone else’s life.", author: "Steve Jobs"},
  { text: "The future depends on what you do today.", author: "Mahatma Gandhi" },
  { text: "Everything you can imagine is real.", author: "Pablo Picasso" },
  { text: "Success is not final, failure is not fatal: It is the courage to continue that counts.", author: "Winston Churchill" },
  { text: "The only thing we have to fear is fear itself.", author: "Franklin D. Roosevelt"},
  { text: "In the middle of difficulty lies opportunity.", author: "Albert Einstein"},
  { text: "Be yourself; everyone else is already taken.", author: "Oscar Wilde"},
  { text: "The only limit to our realization of tomorrow is our doubts of today.",author: "Franklin D. Roosevelt"},
  { text: "The best way to predict the future is to invent it.", author: "Alan Kay"},
  { text: "Do not go where the path may lead, go instead where there is no path and leave a trail.", author: "Ralph Waldo Emerson"},
  { text: "The journey of a thousand miles begins with one step.", author: "Lao Tzu"}
];

const quoteText=document.getElementById("quote");
const quoteAuthor=document.getElementById("author");
const newQuoteBtn = document.getElementById("new-quote");

function getRandomQuote() {
    const randomquote=Math.floor(Math.random() * quotes.length);
    const quote=quotes[randomquote];
    quoteText.style.opacity=0;
    quoteAuthor.style.opacity=0;
    setTimeout(() =>{
        quoteText.innerHTML=quote.text;
        quoteAuthor.innerHTML= `—${quote.author}`;
        quoteText.style.opacity=1;
        quoteAuthor.style.opacity=1;

    },300);

}
newQuoteBtn.addEventListener("click",getRandomQuote);