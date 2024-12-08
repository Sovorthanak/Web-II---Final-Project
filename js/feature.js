$(document).ready(function () {
    let currentPage = 0; // Track current page for API pagination
    const limit = 3; // Number of books to fetch per request
  
    // Function to fetch featured books
    function fetchFeaturedBooks() {
      // Show loading indicator
      $("#load-more").text("Loading...").attr("disabled", true);
  
      // AJAX call to fetch books
      $.ajax({
        url: `https://openlibrary.org/subjects/science.json?limit=${limit}&offset=${currentPage * limit}`,
        method: "GET",
        dataType: "json",
        success: function (response) {
          const books = response.works;
          let htmlContent = "";
  
          // Generate HTML for each book
          books.forEach(book => {
            htmlContent += `
              <div class="col-sm-6 col-md-4">
                <div class="box">
                  <div class="img-box">
                    <img src="https://covers.openlibrary.org/b/id/${book.cover_id}-M.jpg" alt="${book.title}" />
                  </div>
                  <div class="detail-box">
                    <h5>${book.title}</h5>
                    <p>By ${book.authors.map(author => author.name).join(", ")}</p>
                  </div>
                </div>
              </div>
            `;
          });
  
          // Append new content to the #featured-books container
          $("#featured-books").append(htmlContent);
  
          // Update the "Load More" button state
          $("#load-more").text("Load More").attr("disabled", false);
  
          // Increment the page number for the next request
          currentPage++;
        },
        error: function () {
          $("#load-more").text("Load More").attr("disabled", false);
          alert("Failed to load more books. Please try again.");
        }
      });
    }
  
    // Initial fetch on page load
    fetchFeaturedBooks();
  
    // Handle "Load More" button click
    $("#load-more").click(function () {
      fetchFeaturedBooks();
    });
  });