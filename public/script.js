const petsContainer = document.getElementById('pets');

// Fetch and display all pets from the server
fetch('/api/v1/pets')
    .then(response => response.json())
    .then(pets => {
        petsContainer.innerHTML = '<h2>All Pets</h2>';
        pets.forEach(pet => {
            const petElement = document.createElement('div');
            petElement.innerHTML = `
                <h3>${pet.name}</h3>
                <p>Owner: ${pet.owner}</p>
                <p>Species: ${pet.breed}</p>
            `;
            petsContainer.appendChild(petElement);
        });
    })
    .catch(error => {
        console.error('Error fetching pets:', error);
    });
