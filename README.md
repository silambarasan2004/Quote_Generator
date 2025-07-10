# Quote_Generator
## Date: 10/7/2025
## Objective:
To create a simple quote generator using HTML, CSS, and JavaScript that displays a new random motivational quote each time a button is clicked — similar to daily quote sections on blogs or productivity apps.

## Tasks:

#### 1. Create the HTML Structure:
Add a heading like ```<h1>InspireMe</h1>```

Use a ```<div> or <p>``` to display the quote text.

Use another ```<p> or <span>``` to display the author’s name.

Add a button labeled “Get Quote”.

#### 2. Style the Layout Using CSS:
Center everything on the page using flexbox.

Style the quote box with padding, background color, and rounded borders.

Use a clean font (like Roboto or Open Sans).

Add hover effects for the button.

#### 3. Add JavaScript Functionality:
Store an array of quotes (objects with text and author).

On button click, generate a random index using Math.random().

Display the selected quote and author in the HTML.

Ensure each click updates the quote dynamically using innerText.

#### 4. Enhancements:
Animate the quote change using fade effects.

Add a “Tweet this” button with a share link.
## HTML Code:
```
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>InspireMe - Quote Generator</title>
  <link rel="stylesheet" href="style.css" />
  <link href="https://fonts.googleapis.com/css2?family=Roboto&display=swap" rel="stylesheet">
</head>
<body>
    <div class="container">
        <h1>InspireMe</h1>
        <div class="quote-box">
            <p id="quote">Click "Get Quote" to get inspired!</p>
            <p id="author">—</p>
        </div>
        <button id="new-quote">🎯 Get Quote</button>
    </div>
    <script src="script.js"></script>
</body>
</html>
```
## CSS Code:
```
body{
    margin: 0;
    font-family: 'Times New Roman', Times, serif;
    background-color: azure;
    align-items: center;
    display: flex;
    justify-content: center;
    height: 100vh;
}
.container{
    border-radius: 8px;
    border: 1px solid black;
    text-align: center;
    padding: 40px 35px;
    max-width: 400px;
    width: 90%;
    background-color: #ffffff;
}
h1{
    margin-bottom: 20px;
    color: #333;
}
.quote-box{
    margin-bottom: 20px;
    transition:opacity 0.4s ease;
}
#quote{
    font-size: 1.5rem;
    color: #967373;
    margin: 10px 0;
}
#author{
    font-style: italic;
    color: #603232;
}
button{
    padding: 10px 20px;
    font-size: 1rem;
    border: none;
    border-radius: 8px;
    background-color: #007BFF;
    color: white;
    cursor: pointer;
    transition: background 0.3s ease;
}
button:hover{
    background-color: #0056b3;
}
```
## Javascript Code:
```

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
```
## Output:
<img width="1911" height="964" alt="Screenshot 2025-07-10 202036" src="https://github.com/user-attachments/assets/5dad20fb-7a14-4363-85f8-9aaa298cd32f" />

## Result:
A simple quote generator using HTML, CSS, and JavaScript that displays a new random motivational quote each time a button is clicked — similar to daily quote sections on blogs or productivity apps is created successfully.
