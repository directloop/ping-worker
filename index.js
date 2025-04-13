import fetch from 'node-fetch';

const url = "https://your-worker.workers.dev"; // ЗАМЕНИ на адрес твоего воркера

setInterval(async () => {
  try {
    const res = await fetch(url);
    const text = await res.text();
    console.log(`[${new Date().toISOString()}] Пинг успешен: ${text}`);
  } catch (err) {
    console.error(`[${new Date().toISOString()}] Ошибка пинга: ${err.message}`);
  }
}, 1000); // Раз в секунду
