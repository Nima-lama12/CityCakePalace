const cardcontainer = document.getElementById("drinks-card");
let carddata = [
  { "pics": "images/espresso.jpg", "drinks": "Espresso single/Doppio", "price": "Rs.120/150" },
  { "pics": "images/americano.jpg", "drinks": "Americano single/Double", "price": "Rs.120/150" },
  { "pics": "images/latte.jpg", "drinks": "Latte/flavoured", "price": "Rs.150/180" },
  { "pics": "images/cappuccino.jpg", "drinks": "Cappuccino", "price": "Rs.150" },
  { "pics": "images/macchiato.jpg", "drinks": "Macchiato", "price": "Rs.150" },
  { "pics": "images/cafe-mocha.jpg", "drinks": "Cafe Mocha", "price": "Rs.170" },
  { "pics": "images/affogato.jpg", "drinks": "Affogato", "price": "Rs.150" },
  { "pics": "images/spanish-latte.jpg", "drinks": "Spanish Latte Hot/Cold", "price": "Rs.200" },
  { "pics": "images/iced-latte.jpg", "drinks": "Iced Latte", "price": "Rs.180" },
  { "pics": "images/iced-americano.jpg", "drinks": "Iced Americano", "price": "Rs.180" },
  { "pics": "images/iced-mocha.jpg", "drinks": "Iced Mocha", "price": "Rs.200" },
  { "pics": "images/vanilla-iced-latte.jpg", "drinks": "Vanilla Iced Latte", "price": "Rs.200" },
  { "pics": "images/frappe.jpg", "drinks": "Frappe", "price": "Rs.250" },
  { "pics": "images/banana-lassi.jpg", "drinks": "Banana Lassi", "price": "Rs.170" },
  { "pics": "images/sweet-lassi.jpg", "drinks": "Sweet Lassi", "price": "Rs.150" },
  { "pics": "images/hot-chocolate.jpg", "drinks": "Hot Chocolate", "price": "Rs.200" },
  { "pics": "images/vanilla-milkshake.jpg", "drinks": "Vanilla Milkshake", "price": "Rs.150" },
  { "pics": "images/strawberry-milkshake.jpg", "drinks": "Strawberry Milkshake", "price": "Rs.150" },
  { "pics": "images/smoothie.jpg", "drinks": "Smoothie (vanilla/strawberry)", "price": "Rs.200" },
  { "pics": "images/blended-lemonade.jpg", "drinks": "Blended Lemonade", "price": "Rs.200" },
  { "pics": "images/peace-iced-tea.jpg", "drinks": "Peace Iced Tea", "price": "Rs.150" },
  { "pics": "images/strawberry-iced-tea.jpg", "drinks": "Strawberry Iced Tea", "price": "Rs.200" },
  { "pics": "images/traditional-milk-tea.jpg", "drinks": "Traditional Milk Tea", "price": "Rs.50" },
  { "pics": "images/black-tea.jpg", "drinks": "Black Tea", "price": "Rs.30" },
  { "pics": "images/coconut-milk-tea.jpg", "drinks": "Coconut Milk Tea", "price": "Rs.40" },
  { "pics": "images/lemon-tea.jpg", "drinks": "Lemon Tea", "price": "Rs.40" },
  { "pics": "images/green-tea.jpg", "drinks": "Green Tea", "price": "Rs.50" },
  { "pics": "images/hot-lemon-honey.jpg", "drinks": "Hot Lemon with Honey", "price": "Rs.120" },
  { "pics": "images/hot-lemon-salt.jpg", "drinks": "Hot Lemon with Salt", "price": "Rs.100" },
  { "pics": "images/hot-lemon-ginger.jpg", "drinks": "Hot Lemon with Ginger", "price": "Rs.120" }
];

const mappedcard = carddata.map((card) => {
    cardcontainer.innerHTML += `
    <div class="bg-white rounded-lg shadow-lg p-6 transition duration-300 ease-in-out 
               hover:scale-105">
                    <img src="${card.pics}" alt="Chocolate Cake" class="w-full h-48 object-cover rounded-t-lg">
                    <h3 class="text-2xl font-bold mt-4">${card.drinks}</h3>
                    <p class="text-gray-600 mt-2">${card.price}</p>
                </div>`
});
