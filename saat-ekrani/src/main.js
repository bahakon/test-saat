const userName = prompt("İsminizi girin:");
const greetingEl = document.getElementById("greeting");
const clockEl = document.getElementById("clock");
const footerEl = document.getElementById("footer");

greetingEl.innerHTML = `Merhaba, <strong>${userName}</strong>! Hoş geldin!`;

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
