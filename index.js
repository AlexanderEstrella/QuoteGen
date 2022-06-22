const quotes = [
  {
    quote:
      "The thing about smart people is that they seem like crazy people to dumb people.",
    author: "Stephen Hawking",
  },
  {
    quote: "Have no fear of perfection. You'll never reach it.",
    author: "Salvador Dali",
  },
  {
    quote:
      "Hard work and education will take you farther than any government program can ever promise.",
    author: "Mia Love",
  },
  {
    quote:
      "Life has a much bigger plan for you. Happiness is part of that plan. Health is part of that plan. Stability is part of that plan. Constant struggle is not.",
    author: "Kris Carr",
  },
  {
    quote:
      "Just believe in yourself. Even if you don't, pretend that you do and, at some point, you will.",
    author: "Venus Williams",
  },
  {
    quote:
      "The first step is clearly defining what it is you're after, because without knowing that, you'll never get it.",
    author: "Halle Berry",
  },
  {
    quote: "You can't do it unless you can imagine it.",
    author: "George Lucas",
  },
  {
    quote:
      "Rarely are opportunities presented to you in a perfect way. In a nice little box with a yellow bow on top. 'Here, open it, it's perfect. You'll love it.' Opportunities -- the good ones -- are messy, confusing and hard to recognize. They're risky. They challenge you.",
    author: "Susan Wojcicki",
  },
  {
    quote:
      "Let me tell you the secret that has led me to my goal. My strength lies solely in my tenacity.",
    author: "Louis Pasteur",
  },
  {
    quote: "Everyone has a plan 'till they get punched in the mouth.",
    author: "Mike Tyson",
  },
  {
    quote:
      "Darkness cannot drive out darkness; only light can do that. Hate cannot drive out hate; only love can do that.",
    author: "Martin Luther King, Jr.",
  },
  {
    quote:
      "Work hard and believe in yourself even when nobody else believes in you.",
    author: "Richard Sherman",
  },
  {
    quote: "What happens next is up to you.",
    author: "Chris Sacca",
  },
  { 
    quote: "winners are not afraid of losing. But losers are. Failure is part of the process of success. People who avoid failure also avoid success.",
    author: "Robert T. Kiyosaki",
  },
];
function gen() {
  let arrayIndex = Math.floor(Math.random() * 13) + 1;
  document.getElementById("quotes").innerText = quotes[arrayIndex].quote;
  document.getElementById("author").innerText = quotes[arrayIndex].author;
}

document.querySelector("button").addEventListener("click", gen);

