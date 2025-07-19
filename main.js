import './style.css';

document.querySelector('#app').innerHTML = `
  <h1 style="color:lime">Olá, Gabriel 👊</h1>
  <p>Marque seu treino e alimentação de hoje.</p>
  <button onclick="alert('Treino marcado!')">✔ Treino</button>
  <button onclick="alert('Refeição marcada!')">🍽 Alimentação</button>
`;
