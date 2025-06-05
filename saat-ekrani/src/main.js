import './style.css';

const userName = prompt("İsminizi girin:");

document.querySelector('#app').innerHTML = `
  <div class="container">
    <div class="greeting">Merhaba, <strong>${userName}</strong>! Hoş geldin!</div>
    <div class="clock" id="clock"></div>
    <div class="footer" id="footer"></div>
  </div>
`;

const clockEl = document.getElementById("clock");
const footerEl = document.getElementById("footer");

function updateClock() {
  const now = new Date();
  const time = now.toLocaleTimeString('tr-TR');
  const weekday = now.toLocaleDateString('tr-TR', { weekday: 'long' });
  const date = now.toLocaleDateString('tr-TR');

  clockEl.innerHTML = `${time} ${weekday}`;
  footerEl.innerHTML = `${date} tarihinde KODLUYORUZ Frontend Web Development Patikası'nın Javascript bölümü 1. ödevindesiniz.`;
}

setInterval(updateClock, 1000);
updateClock();

