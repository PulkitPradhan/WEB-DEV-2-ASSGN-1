// 1. Select the form and the container
const form = document.querySelector('form'); 
const eventCards = document.getElementById('alleventscontainer');

// 2. Add the submit listener
form.addEventListener('submit', (e) => {
    e.preventDefault(); // Stop the page from reloading

    // 3. Get the values from the HTML inputs by their ID
    let title = document.getElementById('eventTitle').value;
    let date = document.getElementById('eventDate').value;
    let cat = document.getElementById('eventCatagory').value;
    let desc = document.getElementById('eventDescription').value;

    // 4. Create the new card div
    const card = document.createElement('div');
    
    // Add some basic style so you can see the card clearly
    card.style.backgroundColor = "white";
    card.style.padding = "15px";
    card.style.borderRadius = "8px";
    card.style.boxShadow = "0 2px 5px rgba(0,0,0,0.1)";

    // 5. Fill the card HTML (Note: I changed .dlt to .close-btn to match your CSS)
    card.innerHTML = `
        <h3>${title}</h3>
        <p>📆 ${date}</p>
        <p><strong>Category:</strong> ${cat}</p>
        <p>${desc}</p>
        <div class="close-btn">x</div>
    `;

    // 6. Add the card to the container
    eventCards.appendChild(card);

    // 7. Make the delete button work
    const dlt = card.querySelector('.close-btn');
    dlt.addEventListener('click', () => {
        card.remove();
    });
    
    // Optional: Clear the form inputs after adding
    form.reset();
});