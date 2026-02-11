
const form = document.querySelector('form'); 
const eventCards = document.getElementById('alleventscontainer');

form.addEventListener('submit', (e) => {
    e.preventDefault(); 

    let title = document.getElementById('eventTitle').value;
    let date = document.getElementById('eventDate').value;
    let cat = document.getElementById('eventCatagory').value;
    let desc = document.getElementById('eventDescription').value;

    const card = document.createElement('div');
    
    card.style.backgroundColor = "white";
    card.style.padding = "15px";
    card.style.borderRadius = "8px";
    card.style.boxShadow = "0 2px 5px rgba(0,0,0,0.1)";

    card.innerHTML = `
        <h3>${title}</h3>
        <p>📆 ${date}</p>
        <p><strong>Category:</strong> ${cat}</p>
        <p>${desc}</p>
        <div class="close-btn">x</div>
    `;

    eventCards.appendChild(card);

    const dlt = card.querySelector('.close-btn');
    dlt.addEventListener('click', () => {
        card.remove();
    });
    
    form.reset();
});