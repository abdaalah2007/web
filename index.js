const sentences = [
    `"You miss 100% of the shots you don't take.--Wayne Gretzky"`,
    `"It's not what happens to you, but how you react to it that matters--Epictetus"`,
    `"Do not take life too seriously. You will not get out alive.--Elbert Hubbard"`,
    `"The best revenge is massive success.--Frank Sinatra"`,
];

let currentIndex = 0;

document.getElementById('changeSentenceButton').addEventListener('click', function() {
    currentIndex = (currentIndex + 1) % sentences.length;
    document.getElementById('sentence').textContent = sentences[currentIndex];
});