const cardcontainer = document.getElementById("menu-card");
let carddata = [
    {
        pics: "images/cake1.jpg",
        cake: "CPP-179",
        price: "Rs.1250"
    },
    {
        pics: "images/cake2.jpg",
        cake: "CPP-180",
        price: "Rs.1250"
    },
    {
        pics: "images/cake3.jpg",
        cake: "CPP-181",
        price: "Rs.1000"
    },
    {
        pics: "images/cake4.jpg",
        cake: "CPP-182",
        price: "Rs.1250"
    },
    {
        pics: "images/cake5.jpg",
        cake: "CPP-183",
        price: "Rs.1800"
    },
    {
        pics: "images/cake6.jpg",
        cake: "CPP-184",
        price: "Rs.1800"
    }
];
const mappedcard = carddata.map((card) => {
    cardcontainer.innerHTML += `
    <div class="bg-white rounded-lg shadow-lg p-6 transition duration-300 ease-in-out 
               hover:scale-105">
                    <img src="${card.pics}" alt="Chocolate Cake" class="w-full h-48 object-cover rounded-t-lg">
                    <h3 class="text-2xl font-bold mt-4">${card.cake}</h3>
                    <p class="text-gray-600 mt-2">${card.price}</p>
                </div>`
});

const cardcontainer1 = document.getElementById("drinks-card");

let drinks = [
    {
        pics: "images/cappuccino.jpg",
        drinks: "Cappuccino",
        price: "Rs.150"
    },
    {
        pics: "images/Cafemocha.jpg",
        drinks: "Cafe mocha",
        price: "Rs.170"
    },
    {
        pics: "images/iced-latte.jpg",
        drinks: "Iced Latte",
        price: "Rs.180"
    },
    {
        pics: "images/hot-choco.jpg",
        drinks: "Hot Chocolate",
        price: "Rs.200"
    },
    {
        pics: "images/lemon-tea.jpg",
        drinks: "Lemon Tea",
        price: "Rs.40"
    },
    {
        pics: "images/green-tea.webp",
        drinks: "Green Tea",
        price: "Rs.100"
    }
];

const mapped = drinks.map((cd) => {
    cardcontainer1.innerHTML += `
    <div class="bg-white rounded-lg shadow-lg p-6 transition  duration-300 ease-in-out 
               hover:scale-105">
                    <img src="${cd.pics}" alt="Chocolate Cake" class="w-full h-48 object-cover rounded-t-lg">
                    <h3 class="text-2xl font-bold mt-4">${cd.drinks}</h3>
                    <p class="text-gray-600 mt-2">${cd.price}</p>
    </div>`;
});