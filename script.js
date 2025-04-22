document.addEventListener('DOMContentLoaded', () => {
  const data = [
    {
      category: "Reaction",
      score: 80,
      icon: "./assets/images/icon-reaction.svg"
    },
    {
      category: "Memory",
      score: 92,
      icon: "./assets/images/icon-memory.svg"
    },
    {
      category: "Verbal",
      score: 61,
      icon: "./assets/images/icon-verbal.svg"
    },
    {
      category: "Visual",
      score: 72,
      icon: "./assets/images/icon-visual.svg"
    }
  ];

  const container = document.getElementById('summary-list');

  // Create HTML for each item
  data.forEach(item => {
    const card = document.createElement('div');
    card.classList.add(('summary-item'), item.category.toLowerCase());

    card.innerHTML = `
          <div class="category">
            <img src="${item.icon}" alt="${item.category} icon" />
            <span >${item.category}</span> 
          </div>
          <div>
            <span class="current">${item.score}</span> 
            <span class="total"> / 100</span>
          </div>
          `;

    container.appendChild(card);
  });
})
  .catch(error => console.error('Error loading the JSON data:', error));

