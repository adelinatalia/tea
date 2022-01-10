let top7teas = [
    {
        "id": 1,
        "title": "Matcha",
        "details": "burn belly fat, immunity booster, detoxifier",
        "img": "images/gallery/1-berry-leafs.jpg"
    },
    {
        "id": 2,
        "title": "Peppermint",
        "details": "remedy for bloating, nausea, PMS, bad breath"
    },
    {
        "id": 3,
        "title": "Chamomile",
        "details": "beneficial for sleep, anxiety, headache, bloating"
    },
    {
        "id": 4,
        "title": "Ginger",
        "details": "reduce bloating, cold, upset stomach, sore throat"
    },
    {
        "id": 5,
        "title": "Hibiscus",
        "details": "best for high blood pressure, respiratory diseases"
    },
    {
        "id": 6,
        "title": "Oolong",
        "details": "promotes weight loss and booster metabolism"
    },
    {
        "id": 7,
        "title": "White",
        "details": "beneficial for stress, weight loss, detoxification"
    }
];

window.onload = displayCards(top7teas);

function displayCards(arr) {
    let cardsContainer = document.getElementById("cards-container");
    let content = "";
    for (let el in arr) {
        content += arr[el];
        let card = `
        <div class="card card-${arr[el].id}">
            <h3>${arr[el].title}</h3>
            <p>${arr[el].details}</p>
        </div>
        `
        cardsContainer.innerHTML += card;
    }
    return cardsContainer;
};
