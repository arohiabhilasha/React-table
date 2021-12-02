import React from "react";

const EditAddComponent = ({detail,handleAddClick,handleDeleteClick,
    handleAddChanges}) => {
    return (
        <div className="edit-add-component">
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
            <tr>
                <td>
                    <input type="text"
                    required="required"
                    placeholder="Enter a name..."
                    name="name"
                    onChange={handleAddChanges}></input>
                </td>
                <td>
                    <input type="text"
                        required="required"
                        placeholder="Enter when submitted"
                        date="date"
                        onChange={handleAddChanges}>
                    </input>
                </td>
                <td>
                    <button type="submit">Add</button>
                </td>
            </tr>
        </div>
        
    )
}

export default EditAddComponent;