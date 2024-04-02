import React from 'react'

function Pagination({setCurrentPage,setItemsPerPage,filteredData,currentPage,itemsPerPage,currentItems}) {
    const lastPage = Math.ceil(filteredData.length / itemsPerPage);

    const nextPage = () => {
        setCurrentPage((prevPage) => Math.min(prevPage + 1, lastPage));
      };
    
      const prevPage = () => {
        setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
      };
    
      const goToPage = (page) => {
        setCurrentPage(page);
      };
      const goToFirstPage = () => {
        setCurrentPage(1);
      };
    
      const goToLastPage = () => {
        setCurrentPage(lastPage);
      };

      const handleChangeItemsPerPage = (e) => {
        setItemsPerPage(parseInt(e.target.value));
        setCurrentPage(1); // Reset to first page when changing items per page
      };
      
  return (
    <div className='pagination-summary'>
    <div>
        <label>Show rows:</label>
        <select value={itemsPerPage} onChange={handleChangeItemsPerPage}>
          <option value={10}>10</option>
          <option value={20}>20</option>
          <option value={50}>50</option>
          <option value={100}>100</option>
        </select>
      </div>
      <div className="summary">
      Showing {currentItems.length} of {filteredData.length} entries
    </div>
    <div className="pagination">
      <button onClick={goToFirstPage} disabled={currentPage === 1}>First</button>
      <button onClick={prevPage} disabled={currentPage === 1}>&laquo; Previous</button>
      {currentPage > 2 && (
        <button onClick={() => goToPage(1)}>1</button>
      )}
      {currentPage > 3 && (
        <span>...</span>
      )}
      {currentPage > 1 && (
        <button onClick={() => goToPage(currentPage - 1)}>{currentPage - 1}</button>
      )}
      <button className="active">{currentPage}</button>
      {currentPage < lastPage && (
        <button onClick={() => goToPage(currentPage + 1)}>{currentPage + 1}</button>
      )}
      {(currentPage < lastPage - 1) && (
        <span>...</span>
      )}
      {currentPage < lastPage && (
        <button onClick={() => goToPage(lastPage)}>{lastPage}</button>
      )}
      <button onClick={nextPage} disabled={currentPage === lastPage}>Next &raquo;</button>
      <button onClick={goToLastPage} disabled={currentPage === lastPage}>Last</button>
    </div>
    
  </div>
  )
}

export default Pagination