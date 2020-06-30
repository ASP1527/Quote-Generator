var quotes = [
  "Be the change that you wish to see in the world. - Mahatma Gandhi",
  "Do. Or do not. There is no try. - Yoda",
  "I find your lack of faith disturbing. - Darth Vader",
  "I’ve got a bad feeling about this. - Han Solo",
  "It’s a trap! - Admiral Ackbar",
  "Unlimited power! - Emperor Palpatine",
  "That which does not kill us makes us stronger. - Friedrich Nietzsche",
  "Doh! - Homer Simpson",
  "I’d rather let a thousand guilty men go free than chase after them. -Chief Wiggum",
  "Hi, I’m Troy McClure. You might remember me from such films as...” -Troy McClure",
  "Hi diddly ho neighborinos! - Ned Flanders",
  "Okily Dokily! - Ned Flanders",
  "What can I ding-dong-diddily-do for you? - Ned Flanders",
];

function newQuote() {
  var randomNumber = Math.floor(Math.random() * quotes.length);
  document.getElementById("quoteDisplay").innerHTML = quotes[randomNumber];
}
