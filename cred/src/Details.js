import React from 'react'
import { useState } from 'react';
function Details({selectedRow ,data,setData,setSelectedRow,handleClose}) {
    const [editMode, setEditMode] = useState(false);
    const [editedRow, setEditedRow] = useState(null);
  
    const handleEdit = () => {
        setEditMode(true);
        setEditedRow({ ...selectedRow });
      };

    
      const handleSave = () => {
        // Update the selectedRow with editedRow data
        const newData = data.map((row) =>
          row.id === editedRow.id ? editedRow : row
        );
        setData(newData);
        setSelectedRow(editedRow);
        setEditMode(false);
      };
    
      const handleCancel = () => {
        setEditMode(false);
      };

      const handleChange = (e) => {
        const { name, value } = e.target;
        setEditedRow((prevRow) => ({
          ...prevRow,
          [name]: value,
        }));
      };
  return (
    <div className='detail-section'>
         {selectedRow && (
        <div>
          <h2>Details</h2>
        
          {editMode ? (
            <div className='edit-detail'>

              <label>Title: </label>
              <input
                type="text"
                name="title"
                value={editedRow.error_code}
                onChange={handleChange}
                
              />
              <br />
              <label>Body: </label>
              <input
                type="text"
                name="body"
                value={editedRow.body}
                onChange={handleChange}
              />
              <br />
              <button onClick={handleSave}>Save</button>
              <button onClick={handleCancel}>Cancel</button>
            </div>
          ) : (
            <div>
              <p>Title: {selectedRow.error_code}</p>
              <p>Body: {selectedRow.error_code}</p>
              <button onClick={handleEdit}>Edit</button>
              <button onClick={handleClose}>Close</button>            </div>
          )}
        </div>
      )}
    </div>
  )
}

export default Details