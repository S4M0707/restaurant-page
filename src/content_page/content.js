import './content.css';
import FoodImg from './images/food.jpg';
import Pancake from './images/pancake.jpg';

export function createHome() {
    const info = document.createElement('div');
    info.classList.add('info');

    const h1 = document.createElement('h1');
    h1.textContent = 'An experience that goes beyond delicious food';
    info.appendChild(h1);

    const s1 = document.createElement('div');
    const s1h2 = document.createElement('h2');
    s1h2.textContent = 'Relaxed Casual Dining';
    s1.appendChild(s1h2);
    const s1p = document.createElement('p');
    s1p.textContent = 'Enjoy a relatively relaxed vibe with flavourful food from the most talented chefs across the country.';
    s1.appendChild(s1p);
    s1.setAttribute('id', 's1');
    info.appendChild(s1);

    const s2 = document.createElement('div');
    const s2h2 = document.createElement('h2');
    s2h2.textContent = 'Elegant Fine Dining';
    s2.appendChild(s2h2);
    const s2p = document.createElement('p');
    s2p.textContent = 'Indulge in exquisite meals & wines, complemented beautifully by our gorgeous ambience.';
    s2.appendChild(s2p);
    s2.setAttribute('id', 's2');
    info.appendChild(s2);

    const imageContainer = document.createElement('div');
    imageContainer.classList.add('imageContainer');

    const foodImg = new Image();
    foodImg.src = FoodImg;
    foodImg.classList.add('food');
    imageContainer.appendChild(foodImg);

    const pancakeImg = new Image();
    pancakeImg.src = Pancake;
    pancakeImg.classList.add('pancake');
    imageContainer.appendChild(pancakeImg);

    info.appendChild(imageContainer);

    return info;
};

function createCard(name, para) {
    const card = document.createElement('div');
    card.classList.add('card');

    const h3 = document.createElement('h3');
    h3.textContent = name;
    card.appendChild(h3);

    const p = document.createElement('p');
    p.textContent = para;
    card.appendChild(p);

    card.setAttribute('id', name);

    return card;
}

export function createMenu() {
    const container = document.createElement('div');
    container.classList.add('container');

    const h1 = document.createElement('h1');
    h1.textContent = 'Bite a piece of heaven with our thoughtfully crafted menu';

    const p = document.createElement('p');
    p.textContent = 'Multi-cuisine meals, imported wines & sweetmeat — everything is served by our cordial staff.';

    const cardContainer = document.createElement('div');
    cardContainer.classList.add('cardContainer');

    let name = 'food';
    let para = 'Expose your tastebuds to the finest flavours.';
    cardContainer.appendChild(createCard(name, para));

    name = 'dessert';
    para = 'Satisfy your sweet tooth with servings like on other.';
    cardContainer.appendChild(createCard(name, para));

    name = 'bar';
    para = 'Savour our expertly crafted drinks from around the world.';
    cardContainer.appendChild(createCard(name, para));

    const bookTable = document.createElement('button');
    bookTable.classList.add('bookTable');
    bookTable.innerText = 'Book Table';

    container.appendChild(h1);
    container.appendChild(p);
    container.appendChild(cardContainer);
    container.appendChild(bookTable);

    return container;
}

export function createAbout() {
    const section = document.createElement('section');
    section.classList.add('about-section');

    const p1 = document.createElement('p');
    p1.textContent = 'Welcome to Our Restaurant! We are dedicated to serving delicious and authentic cuisine in a warm and inviting atmosphere.';
    section.appendChild(p1);

    const p2 = document.createElement('p');
    p2.textContent = 'Our culinary team is passionate about using fresh, locally-sourced ingredients to create mouthwatering dishes that will tantalize your taste buds.';
    section.appendChild(p2);

    const p3 = document.createElement('p');
    p3.textContent = "Whether you're joining us for a casual meal with friends or a special celebration with loved ones, we strive to provide exceptional service and an unforgettable dining experience.";
    section.appendChild(p3);

    const p4 = document.createElement('p');
    p4.textContent = "Come visit us today and discover why Our Restaurant is the perfect destination for food lovers!";
    section.appendChild(p4);

    return section;
}

/*
<div class="info">
    <h1>An experience that goes beyond delicious food</h1>
    <div id="s1">
        <h2>Relaxed Casual Dining</h2>
        <p>
            Enjoy a relatively relaxed vibe with flavourful food from the most talented chefs across the
            country.
        </p>
    </div>
    <div id="s2">
        <h2>Elegant Fine Dining</h2>
        <p>
            Indulge in exquisite meals & wines, complemented beautifully by our gorgeous ambience.
        </p>
    </div>
    <div class="imageContainer">
        <img src="./food.png" />
    </div>
</div>
<div class="container">
    <h1>Bite a piece of heaven with our thoughtfully crafted menu</h1>
    <h2>Multi-cuisine meals, imported wines & sweetmeat — everything is served by our cordial staff.</h2>
    <div class="cardContainer">
        <div class="card" id="food">
            <h3>Food</h3>
            <p>
                Expose your tastebuds to the finest flavours.
            </p>
        </div>
        <div class="card" id="dessert">
            <h3>Dessert</h3>
            <p>
                Satisfy your sweet tooth with servings like on other.
            </p>
        </div>
        <div class="card" id="bar">
            <h3>Bar</h3>
            <p>
                Savour our expertly crafted drinks from around the world.
            </p>
        </div>
    </div>
</div>
<section class="about-section">
    <h2>About Us</h2>
    <p>Welcome to Our Restaurant! We are dedicated to serving delicious and authentic cuisine in a warm and inviting atmosphere.</p>
    <p>Our culinary team is passionate about using fresh, locally-sourced ingredients to create mouthwatering dishes that will tantalize your taste buds.</p>
    <p>Whether you're joining us for a casual meal with friends or a special celebration with loved ones, we strive to provide exceptional service and an unforgettable dining experience.</p>
    <p>Come visit us today and discover why Our Restaurant is the perfect destination for food lovers!</p>
</section>
*/