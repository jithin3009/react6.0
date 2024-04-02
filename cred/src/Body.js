// Body.js
import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import './App.css';
import Details from './Details';
import Pagination from './Pagination';
function Body() {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [selectedRow, setSelectedRow] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  useEffect(() => {
    fetch('https://gtswg.api.io-market.net/get_error_translation')
      .then((response) => response.json())
      .then((json) => {
        setData(json.data);
        setFilteredData(json.data);
      });
  }, []);

  useEffect(() => {
    const filtered = data.filter((item) =>
      (item.error_source.label && item.error_source.label.toLowerCase().includes(searchQuery.trim().toLowerCase())) ||
      (item.system_name.label && item.system_name.label.toLowerCase().includes(searchQuery.trim().toLowerCase())) ||
      (item.service_details.label && item.service_details.label.toLowerCase().includes(searchQuery.trim().toLowerCase())) ||
      (item.en && item.en.toLowerCase().includes(searchQuery.trim().toLowerCase())) ||
      (item.de && item.de.toLowerCase().includes(searchQuery.trim().toLowerCase())) ||
      (item.error_code !== undefined && String(item.error_code).toLowerCase().includes(searchQuery.trim().toLowerCase()))

    );
    setFilteredData(filtered);
  }, [searchQuery, data]);

  const handleRowClick = (row) => {
    setSelectedRow(row);
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
    setCurrentPage(1);
  };

  const handleClose = () => {
    setSelectedRow(null);
  };


  const currentItems = filteredData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const [sidebarVisible, setSidebarVisible] = useState(false);
  const toggleSidebar = () => {
    setSidebarVisible(!sidebarVisible);
  };



  return (

    <div>

      <nav className='navbar' style={{ zIndex: 100 }}>
        <button onClick={toggleSidebar}>Toggle</button>
        <div className="search-field">
          <input className="search-btn" type="text" value={searchQuery}
            onChange={handleSearchChange}
            placeholder="Search" />
          <i className="fa fa-search"></i>
        </div>
      </nav>

      <div className={`sidebar ${sidebarVisible ? '' : 'visible'}`}>
        
      </div>

      <div className="main-content" style={{ marginLeft: sidebarVisible ? '0' : '260px' }}>

      <table className='main-table'>
            <thead>
              <tr>
                <th>English</th>
                <th>Gwe</th>
                <th>Error Code </th>
                <th>Error Source</th>
                <th>Service Details</th>
                <th>System Name</th>

              </tr>
            </thead>
            <tbody>
              {currentItems.map((row) => (
                <tr key={row.error_code} onClick={() => handleRowClick(row)}>
                  <td>{row.en}</td>
                  <td>{row.de}</td>
                  <td>{row.error_code}</td>
                  <td>{row.error_source.label}</td>
                  <td>{row.service_details.label}</td>
                  <td>{row.system_name.label}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <Pagination setCurrentPage={setCurrentPage}
          filteredData={filteredData}
          itemsPerPage={itemsPerPage}
          currentItems={currentItems}
          currentPage={currentPage}
          setItemsPerPage={setItemsPerPage}
        />
        <div className="details">
          <Details selectedRow={selectedRow}
            data={data} setData={setData}
            setSelectedRow={setSelectedRow}
            handleClose={handleClose} />
        </div>
        {/* <div>

          <table className='main-table'>
            <thead>
              <tr>
                <th>English</th>
                <th>Gwe</th>
                <th>Error Code </th>
                <th>Error Source</th>
                <th>Service Details</th>
                <th>System Name</th>

              </tr>
            </thead>
            <tbody>
              {currentItems.map((row) => (
                <tr key={row.error_code} onClick={() => handleRowClick(row)}>
                  <td>{row.en}</td>
                  <td>{row.de}</td>
                  <td>{row.error_code}</td>
                  <td>{row.error_source.label}</td>
                  <td>{row.service_details.label}</td>
                  <td>{row.system_name.label}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <Pagination setCurrentPage={setCurrentPage}
          filteredData={filteredData}
          itemsPerPage={itemsPerPage}
          currentItems={currentItems}
          currentPage={currentPage}
          setItemsPerPage={setItemsPerPage}
        />

        <div className="details">
          <Details selectedRow={selectedRow}
            data={data} setData={setData}
            setSelectedRow={setSelectedRow}
            handleClose={handleClose} />
        </div> */}

      </div>
    </div>
  );
}

export default Body;
