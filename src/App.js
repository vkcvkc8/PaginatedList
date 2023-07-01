import React, { useState } from 'react';
import './style.css';

export default function App() {
  const itemsPerPage = 5; // Number of items to display per page
  const totalItems = 20; // Total number of items in the list

  const [currentPage, setCurrentPage] = useState(1);

  // Calculate the start and end indices of the current page
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  // Generate the list of items for the current page
  const items = Array.from(
    { length: totalItems },
    (_, index) => `Item ${index + 1}`
  );
  const currentItems = items.slice(startIndex, endIndex);

  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const goToPage = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div>
      <h1>Paginated List</h1>
      <ul>
        {currentItems.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <div className="pagination">
        <button
          disabled={currentPage === 1}
          onClick={() => goToPage(currentPage - 1)}
        >
          Previous
        </button>
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index + 1}
            onClick={() => goToPage(index + 1)}
            className={currentPage === index + 1 ? 'active' : ''}
          >
            {index + 1}
          </button>
        ))}
        <button
          disabled={currentPage === totalPages}
          onClick={() => goToPage(currentPage + 1)}
        >
          Next
        </button>
      </div>
    </div>
  );
}
