$(document).ready(function () {
    // Book data for recommendations
    const categoryBooks = {
    textbooks: [
    "📘 Algebra Made Easy",
    "📘 Introduction to Physics",
    "📘 Chemistry: The Basics",
    "📘 Understanding Biology",
    "📘 Advanced Mathematics",
    "📘 Modern Economics",
    "📘 Introduction to Statistics",
    "📘 Engineering Basics",
    "📘 Calculus Essentials",
    "📘 Fundamentals of Computer Science"
    ],
    science: [
    "🔬 The Wonders of Science",
    "🔭 Discovering the Universe",
    "📘 Physics for Beginners",
    "🧪 Chemistry Essentials",
    "🌌 Exploring Astronomy",
    "🧬 The DNA Revolution",
    "🧫 Microbiology: A Beginner's Guide",
    "🧪 The Periodic Table Explained",
    "🌋 Earthquakes and Volcanoes",
    "🪐 The Solar System: A Journey Through Space"
    ],
    history: [
    "📚 The History of the World",
    "🏛 Ancient Civilizations",
    "🎓 The Story of the Renaissance",
    "🏰 Medieval Times",
    "📖 Understanding World Wars",
    "🏺 Archaeology: The Past Revealed",
    "📜 The American Revolution",
    "📖 The Silk Road: A Journey Through History",
    "📖 The French Revolution Explained",
    "🌍 A Brief History of Mankind"
    ],
    biography: [
    "🖋 The Life of Marie Curie",
    "🖋 Steve Jobs: A Biography",
    "🖋 Mandela: Long Walk to Freedom",
    "🖋 Becoming by Michelle Obama",
    "🖋 Einstein: His Life and Universe",
    "🖋 Frida Kahlo: A Life of Passion",
    "🖋 The Diary of Anne Frank",
    "🖋 The Wright Brothers: A Biography",
    "🖋 Alexander Hamilton: A Biography",
    "🖋 Churchill: Walking with Destiny"
    ],
    adventure: [
    "🌍 Into the Wild",
    "⛰ Climbing Mount Everest",
    "🛶 Adventures in the Amazon",
    "🌊 Sailing the Seven Seas",
    "✈️ Around the World in 80 Days",
    "🗺 The Lost City of Z",
    "🦓 Safari: Adventures in Africa",
    "⛺️ Surviving the Great Outdoors",
    "🚣 The River of Doubt",
    "🚵 Trails of the Appalachian Mountains"
    ],
    fantasy: [
    "✨ The Hobbit",
    "✨ Harry Potter and the Sorcerer's Stone",
    "✨ The Chronicles of Narnia",
    "✨ A Song of Ice and Fire",
    "✨ The Name of the Wind",
    "✨ Percy Jackson and the Olympians",
    "✨ Mistborn: The Final Empire",
    "✨ Eragon: The Inheritance Cycle",
    "✨ The Way of Kings",
    "✨ Wheel of Time: The Eye of the World"
    ]
    };
    
    
    // Add click functionality to category cards
    $(".category-card").on("click", function () {
    const category = $(this).data("category");
    const books = categoryBooks[category] || [];
    const recommendations = books.map(
      (book) => `<div class="book-card"><p>${book}</p></div>`
    ).join("");
    $("#recommendation-results").html(recommendations);
    });
    });
    