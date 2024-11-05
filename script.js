// Array de URLs de memes
const memes = [
  'https://bestlifeonline.com/wp-content/uploads/sites/3/2018/06/cat-meme-78.jpg?resize=260',
  'https://cdn.enthralling.eu/wp-content/uploads/2017/10/random-memes-3.jpg',
  'https://i.kym-cdn.com/photos/images/original/002/590/364/6de.png',
  'https://www.socialpilot.co/wp-content/uploads/2023/02/when-every-friend.webp'
];

// Función que elige un meme aleatorio
function showRandomMeme() {
  const memeImage = document.getElementById('meme');
  const randomIndex = Math.floor(Math.random() * memes.length);
  memeImage.src = memes[randomIndex];
}

// Llamar a la función para cargar un meme aleatorio al cargar la página
window.onload = showRandomMeme;
