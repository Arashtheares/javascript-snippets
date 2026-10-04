const quotes = [
    "Small steps can lead to big changes.",
    "Progress begins when you decide to try.",
    "Make time for what makes you feel alive.",
    "Every mistake is a chance to learn.",
    "You do not need to be perfect to begin.",
    "A little kindness can change someone's day.",
    "Stay curious and keep asking questions.",
    "Rest is part of the journey.",
    "Focus on what you can do today.",
    "Your next chapter is still unwritten."
  ];

  const usedIndexes = new Set();
  const quoteElement = document.getElementById("quote");

  function generateQuote() {

    if (usedIndexes.size >= quotes.length) {
        usedIndexes.clear();
    }
    while (true){
        const randomIdx = Math.floor(Math.random() * quotes.length);

        if (usedIndexes.has(randomIdx)) continue;

        const quote = quotes[randomIdx];
        quoteElement.innerHTML = quote;
        usedIndexes.add(randomIdx);
        break

    }
  

  }