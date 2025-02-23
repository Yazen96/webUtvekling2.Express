
document.addEventListener('DOMContentLoaded', () => {
    if (document.getElementById("books")) displayServices();
});

async function displayServices() {
    try {
     const response = await fetch('https://webutvekling2.azurewebsites.net/bocker');

        if (!response.ok) {
            console.log('Failed to fetch data');
            return;
        }

        const books = await response.json();
        console.log(books);

        const booksContainer = document.getElementById("books");
        if (!booksContainer) {
            console.error("books container not found.");
            return;
        }

        booksContainer.innerHTML = "";

        books.forEach(book => {
            booksContainer.innerHTML += `
                <div class="col-md-4 mb-4">
                    <div class="card">
                        <div class="card-body">
                            <h5 class="card-title">${book.titel}</h5>
                            <p class="card-text">Price: ${book.pris}</p>
                            <button class="btn btn-primary" onclick="addToCart('${book.titel}')">Add to Cart</button>
                        </div>
                    </div>
                </div>
            `;
        });
    } catch (error) {
        console.log(error);
    }
}

function addToCart(bookTitle) {
    console.log(`Adding ${bookTitle} to cart`);
}