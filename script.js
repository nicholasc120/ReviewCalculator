const reviewData = [];

function addRow() {
    const stars = document.getElementById('stars').value;
    const reviews = document.getElementById('reviews').value;

    if (stars === "" || reviews === "") {
        alert("Please enter both stars and reviews.");
        return;
    }

    reviewData.push({
        stars: parseFloat(stars),
        reviews: parseFloat(reviews)
    });

    renderTable();

    document.getElementById('stars').value = '';
    document.getElementById('reviews').value = '';
}

function renderTable() {
    const reviewList = document.getElementById('reviewList');

    reviewList.innerHTML = '';

    reviewData.forEach(item => {
        const newRow = document.createElement('tr');

        const starsCell = document.createElement('td');
        const reviewsCell = document.createElement('td');

        starsCell.textContent = `${item.stars.toFixed(2)}`;
        reviewsCell.textContent = `${item.reviews}`;

        newRow.appendChild(starsCell);
        newRow.appendChild(reviewsCell);

        reviewList.appendChild(newRow);
    });
}

function calculate() {
    const outputDiv = document.getElementById('output');

    outputDiv.innerHTML = '';

    if (reviewData.length === 0) {
        outputDiv.textContent = 'No data available.';
        return;
    }

    reviewData.forEach((item) => {
        const percentageOfGoodReviews = (item.stars / 5) * item.reviews;
        const percentChance = (percentageOfGoodReviews + 1) / (item.reviews + 2)

        const lineText = `Your chance of having a good time with the ${item.stars} ⭐ item with ${item.reviews} reviews is ${percentChance.toFixed(2)}%\n`;
        const lineSpan = document.createElement('span');

        lineSpan.textContent = lineText;
        outputDiv.appendChild(lineSpan);
    });
}
