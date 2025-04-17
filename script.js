document.addEventListener('DOMContentLoaded', () => {
    fetch('data.json')
      .then(response => response.json())
      .then(data => {
        const container = document.getElementById('summary-list');
  
        // Create HTML for each item
        data.forEach(item => {
          const card = document.createElement('div');
          card.classList.add('summary-item');
  
          card.innerHTML = `
          <div class="left">
            <img src="${item.icon}" alt="${item.category} icon">
            <strong>${item.category}</strong> 
          </div>
          <div class="score">${item.score}/100</div>
          `;
  
          container.appendChild(card);
        });
      })
      .catch(error => console.error('Error loading the JSON data:', error));
  });
  