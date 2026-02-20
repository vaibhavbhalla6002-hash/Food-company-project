async function loadFacts() {
    const container = document.getElementById('facts-container');
    container.innerHTML = '<p>Loading...</p>';
    
    // Fake salad facts array
    const saladFacts = [
        "Caesar salad was invented in Tijuana, Mexico, not Rome!",
        "The word 'salad' comes from the Latin word 'sal' meaning salt.",
        "Lettuce is 95% water, making it one of the most hydrating foods.",
        "The world's largest salad weighed over 20,000 pounds!",
        "Ancient Romans ate mixed greens and dressing at the end of meals to help digestion."
    ];
    
    // Simulate API delay
    setTimeout(() => {
        container.innerHTML = '';
        
        saladFacts.forEach((fact, index) => {
            const factDiv = document.createElement('div');
            factDiv.innerHTML = `
                <h3>Fact ${index + 1}</h3>
                <p>${fact}</p>
            `;
            container.appendChild(factDiv);
        });
    }, 500);
}

window.addEventListener('DOMContentLoaded', loadFacts);
