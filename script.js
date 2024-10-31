const glossaryTerms = [];
const glossaryContainer = document.getElementById('glossary-terms');
const adminTermsContainer = document.getElementById('admin-terms');
const termForm = document.getElementById('term-form');
const searchInput = document.getElementById('search');

function displayGlossary(terms) {
    glossaryContainer.innerHTML = '';
    terms.sort().forEach(term => {
        const termElement = document.createElement('div');
        termElement.innerHTML = `<i class="icon fas fa-cut"></i><strong>${term.term}</strong>: ${term.definition}`;
        glossaryContainer.appendChild(termElement);
    });
}

function displayAdminTerms() {
    adminTermsContainer.innerHTML = '';
    glossaryTerms.forEach((term, index) => {
        const termElement = document.createElement('div');
        termElement.innerHTML = `<strong>${term.term}</strong>: ${term.definition} <button onclick="deleteTerm(${index})">Delete</button>`;
        adminTermsContainer.appendChild(termElement);
    });
}

function deleteTerm(index) {
    glossaryTerms.splice(index, 1);
    displayGlossary(glossaryTerms);
    displayAdminTerms();
}

termForm.addEventListener('submit', function(event) {
    event.preventDefault();
    const termInput = document.getElementById('term').value;
    const definitionInput = document.getElementById('definition').value;
    glossaryTerms.push({ term: termInput, definition: definitionInput });
    displayGlossary(glossaryTerms);
    displayAdminTerms();
    termForm.reset();
});

// Search functionality
searchInput.addEventListener('input', function() {
    const searchTerm = searchInput.value.toLowerCase();
    const filteredTerms = glossaryTerms.filter(term => 
        term.term.toLowerCase().includes(searchTerm)
    );
    displayGlossary(filteredTerms);
});

// Initial display
displayGlossary(glossaryTerms);
displayAdminTerms();
