const apiKey = "AIzaSyC_jB_NKgXevVu3u6AUcyvtNorqYW7skrk"; // Replace with your Google Books API key

function searchBooks(query) {
    const apiUrl = `https://www.googleapis.com/books/v1/volumes?q=${encodeURIComponent(query)}&key=${apiKey}`;
    fetch(apiUrl)
        .then(response => response.json())
        .then(data => displayResults(data.items))
        .catch(() => alert("An error occurred while fetching book data."));
}

function displayResults(books) {
    const resultsContainer = document.getElementById('results');
    resultsContainer.innerHTML = ''; // Clear previous results
    if (!books || books.length === 0) {
        resultsContainer.innerHTML = '<p>No books found.</p>';
        return;
    }
    books.forEach(book => {
        const volumeInfo = book.volumeInfo;
        const coverImage = volumeInfo.imageLinks
            ? volumeInfo.imageLinks.thumbnail
            : "https://via.placeholder.com/128x193?text=No+Cover";

        // Dynamically generate a Wikipedia search link
        const wikipediaSearchLink = `https://en.wikipedia.org/wiki/Special:Search?search=${encodeURIComponent(
    volumeInfo.title
  )}`;

  const bookHTML = `
    <div class="book">
        <img src="${coverImage}" alt="${volumeInfo.title}">
        <h3>${volumeInfo.title}</h3>
        <p>Author: ${volumeInfo.authors ? volumeInfo.authors.join(", ") : "Unknown"}</p>
        <p>Published: ${volumeInfo.publishedDate || "Unknown"}</p>
        <a href="${wikipediaSearchLink}" target="_blank" style="text-decoration:none;">
            <button style="background-color:#007bff;color:white;padding:8px 12px;border:none;border-radius:5px;margin-top:10px;cursor:pointer;">
                Search on Wikipedia
            </button>
        </a>
    </div>
  `;
  resultsContainer.innerHTML += bookHTML;
  });
}

document.getElementById('searchButton').addEventListener('click', () => {
    const query = document.getElementById('searchInput').value.trim();
    if (query) {
        searchBooks(query);
    } else {
        alert("Please enter a search term.");
    }
});

document.getElementById('searchInput').addEventListener('keypress', event => {
    if (event.key === 'Enter') {
        document.getElementById('searchButton').click();
    }
});
