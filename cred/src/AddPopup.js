// AddPopup.js
import React from 'react';

function AddPopup({ show, onClose }) {
    if (!show) {
        return null;
    }

    return (
        <div className="popup">
            <div className="popup-inner">
                <h3>Add new items</h3>
                <form>
                    <div>
                        <label for="field1">Field 1:</label>
                        <input type="text" id="field1" name="field1"/>
                    </div>
                    <div>
                        <label for="field2">Field 2:</label>
                        <input type="text" id="field2" name="field2"/>
                    </div>
                    <div>
                        <label for="field3">Field 3:</label>
                        <input type="text" id="field3" name="field3"/>
                    </div>
                    <div>
                        <button type="button" onClick={onClose}>Cancel</button>
                        <button type="submit">Save</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default AddPopup;
