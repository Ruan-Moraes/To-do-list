function updateTime() {
  const now = new Date();

  const formattedDate = now.toLocaleString('pt-BR', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
  });

  document.querySelector('#date').textContent = formattedDate;
}

setInterval(updateTime, 1000);
