const cardcontainer = document.getElementById("cake-card");
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
    },
    {
        pics: "images/cake7.jpg",
        cake: "CPP-184",
        price: "Rs.1800"
    },
    {
        pics: "images/cake8.jpg",
        cake: "CPP-184",
        price: "Rs.1800"
    },
    {
        pics: "images/cake9.jpg",
        cake: "CPP-184",
        price: "Rs.1800"
    },
    {
        pics: "images/cake10.jpg",
        cake: "CPP-184",
        price: "Rs.1800"
    },
    {
        pics: "images/cake11.jpg",
        cake: "CPP-184",
        price: "Rs.1800"
    },
    {
        pics: "images/cake12.jpg",
        cake: "CPP-184",
        price: "Rs.1800"
    },
    {
        pics: "images/cake13.jpg",
        cake: "CPP-184",
        price: "Rs.1800"
    },
    {
        pics: "images/cake14.jpg",
        cake: "CPP-184",
        price: "Rs.1800"
    },
    {
        pics: "images/cake15.jpg",
        cake: "CPP-184",
        price: "Rs.1800"
    },
    {
        pics: "images/cake16.jpg",
        cake: "CPP-184",
        price: "Rs.1800"
    },
    {
        pics: "images/cake17.jpg",
        cake: "CPP-184",
        price: "Rs.1800"
    },
    {
        pics: "images/cake18.jpg",
        cake: "CPP-184",
        price: "Rs.1800"
    },
    {
        pics: "images/cake19.jpg",
        cake: "CPP-184",
        price: "Rs.1800"
    },
    {
        pics: "images/cake20.jpg",
        cake: "CPP-184",
        price: "Rs.1800"
    },
    {
        pics: "images/cake21.jpg",
        cake: "CPP-184",
        price: "Rs.1800"
    },
    {
        pics: "images/cake22.jpg",
        cake: "CPP-184",
        price: "Rs.1800"
    },
    {
        pics: "images/cake23.jpg",
        cake: "CPP-184",
        price: "Rs.1800"
    },
    {
        pics: "images/cake24.jpg",
        cake: "CPP-184",
        price: "Rs.1800"
    },
    {
        pics: "images/cake25.jpg",
        cake: "CPP-184",
        price: "Rs.1800"
    },
    {
        pics: "images/cake26.jpg",
        cake: "CPP-184",
        price: "Rs.1800"
    },
    {
        pics: "images/cake27.jpg",
        cake: "CPP-184",
        price: "Rs.1800"
    },
    {
        pics: "images/cake28.jpg",
        cake: "CPP-184",
        price: "Rs.1800"
    },
    {
        pics: "images/cake29.jpg",
        cake: "CPP-184",
        price: "Rs.1800"
    },
    {
        pics: "images/cake30.jpg",
        cake: "CPP-184",
        price: "Rs.1800"
    },
    {
        pics: "images/cake31.jpg",
        cake: "CPP-184",
        price: "Rs.1800"
    },
    {
        pics: "images/cake32.jpg",
        cake: "CPP-184",
        price: "Rs.1800"
    },
    {
        pics: "images/cake33.jpg",
        cake: "CPP-184",
        price: "Rs.1800"
    },
    {
        pics: "images/cake34.jpg",
        cake: "CPP-184",
        price: "Rs.1800"
    },
    {
        pics: "images/cake35.jpg",
        cake: "CPP-184",
        price: "Rs.1800"
    },
    {
        pics: "images/cake36.jpg",
        cake: "CPP-184",
        price: "Rs.1800"
    },
    {
        pics: "images/cake37.jpg",
        cake: "CPP-184",
        price: "Rs.1800"
    },
    {
        pics: "images/cake38.jpg",
        cake: "CPP-184",
        price: "Rs.1800"
    },
    {
        pics: "images/cake39.jpg",
        cake: "CPP-184",
        price: "Rs.1800"
    },
    {
        pics: "images/cake40.jpg",
        cake: "CPP-184",
        price: "Rs.1800"
    },
    {
        pics: "images/cake41.jpg",
        cake: "CPP-184",
        price: "Rs.1800"
    },
    {
        pics: "images/cake42.jpg",
        cake: "CPP-184",
        price: "Rs.1800"
    },
    {
        pics: "images/cake43.jpg",
        cake: "CPP-184",
        price: "Rs.1800"
    },
    {
        pics: "images/cake44.jpg",
        cake: "CPP-184",
        price: "Rs.1800"
    },
    {
        pics: "images/cake45.jpg",
        cake: "CPP-184",
        price: "Rs.1800"
    },
    {
        pics: "images/cake46.jpg",
        cake: "CPP-184",
        price: "Rs.1800"
    },
    {
        pics: "images/cake47.jpg",
        cake: "CPP-184",
        price: "Rs.1800"
    },
    {
        pics: "images/cake48.jpg",
        cake: "CPP-184",
        price: "Rs.1800"
    },
    {
        pics: "images/cake49.jpg",
        cake: "CPP-184",
        price: "Rs.1800"
    },
    {
        pics: "images/cake50.jpg",
        cake: "CPP-184",
        price: "Rs.1800"
    },
    {
        pics: "images/cake51.jpg",
        cake: "CPP-184",
        price: "Rs.1800"
    },
    {
        pics: "images/cake52.jpg",
        cake: "CPP-184",
        price: "Rs.1800"
    },
    {
        pics: "images/cake53.jpg",
        cake: "CPP-184",
        price: "Rs.1800"
    },
    {
        pics: "images/cake54.jpg",
        cake: "CPP-184",
        price: "Rs.1800"
    },
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

