// Replace the existing falling fruits function
(function() {
    const fallingFruitsContainer = document.getElementById('fallingFruits');
    
    if (!fallingFruitsContainer) return;
    
    // Use actual product images
    const fruitImages = [
        'images/premium almonds.jpeg',
        'images/organic pumpkin seeds.png',
        'images/premium walnut kernels.png'
    ];
    
    let clickedFruits = [];
    
    // Create falling fruit elements with images
    function createFallingFruit() {
        const fruit = document.createElement('div');
        fruit.className = 'fruit-item-image';
        
        const img = document.createElement('img');
        img.src = fruitImages[Math.floor(Math.random() * fruitImages.length)];
        img.alt = 'Dry Fruit';
        fruit.appendChild(img);
        
        // Random horizontal position
        fruit.style.left = Math.random() * 100 + '%';
        
        // Random animation duration
        const duration = 10 + Math.random() * 10; // 10-20 seconds
        fruit.style.animationDuration = duration + 's';
        
        // Random delay
        fruit.style.animationDelay = Math.random() * 5 + 's';
        
        // Random size variation
        const size = 30 + Math.random() * 30; // 30-60px
        fruit.style.width = size + 'px';
        fruit.style.height = size + 'px';
        
        // Click to make it fall faster
        fruit.addEventListener('click', function() {
            if (!clickedFruits.includes(fruit)) {
                clickedFruits.push(fruit);
                fruit.style.animationDuration = '2s';
                fruit.style.animationTimingFunction = 'ease-in';
                fruit.classList.add('falling-fast');
            }
        });
        
        fallingFruitsContainer.appendChild(fruit);
        
        // Remove element after animation completes
        setTimeout(() => {
            fruit.remove();
            const index = clickedFruits.indexOf(fruit);
            if (index > -1) clickedFruits.splice(index, 1);
        }, (duration + 5) * 1000);
    }
    
    // Create initial fruits
    for (let i = 0; i < 10; i++) {
        setTimeout(() => {
            createFallingFruit();
        }, i * 800);
    }
    
    // Continuously create new fruits
    setInterval(() => {
        createFallingFruit();
    }, 3000);
})();
