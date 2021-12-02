import React from'react';

const ReadOnlyRow = ({ detail, handleAddClick, handleDeleteClick }) => {
    return(
        <tr>
            <td>{detail.name}</td>
            <td>{detail.date}</td>
            <td>
                <button type="button" onClick={(event) => handleAddClick(event, detail)}>
                    Add
                </button>
                <button type="button" onClick={() => handleDeleteClick(detail.id)}>
                    Delete
                </button>
            </td>
        </tr>
    )
}

export default ReadOnlyRow;