import React, { useState, Fragment } from "react";
import data from "./data.json";
import {nanoid} from 'nanoid';
import ReadOnlyRow from "./components/readOnlyRow";
import EditAddComponent from "./components/editAddComponent";


const App = () => {

  const [details, setDetails] = useState(data);
  const [formData, setAddFormData] = useState({
    name: "",
    date: ""
  })

  // const [editFormData, setEditFormData] = useState({
  //   name: "",
  //   date: "",
  // });

  const [addStudentId, setAddStudentId] = useState(null);

  const handleAddChanges = (event) => {
    event.preventDefault();
    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;
    const newFormData = {...formData};
    newFormData[fieldName] = fieldValue;

    setAddFormData(newFormData);
  };

  const handleAddSubmit = (event) => {
    event.preventDefault();

    const newStudent = {
      id: nanoid(),
      name: formData.name,
      date: formData.date
    };

    const newStudents = [...details, newStudent];
    setDetails(newStudents);
  };


  const handleAddClick = (event, detail) => {
    event.preventDefault();
    setAddStudentId(detail.id);

    const formValues = {
      name: detail.name,
      date: detail.date
    };

    setAddFormData(formValues);
  };

  const handleDeleteClick = (studentId) => {
    const newStudents = [...details];

    const index = details.findIndex((detail) => detail.id === studentId);

    newStudents.splice(index, 1);

    setDetails(newStudents);
  };
 

  return (
    <div className = "app-container">
      <form onSubmit={handleAddSubmit}> 
        <table>
          <thead>
            <tr>
              <th>name</th>
              <th>When submitted</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {details.map((detail) => (
              <Fragment>
                {addStudentId === detail.id ?  <EditAddComponent formData={formData} handleAddChanges={handleAddChanges} detail={detail} handleDeleteClick={handleDeleteClick} handleAddClick={handleAddClick}/> : <ReadOnlyRow detail={detail} handleAddClick={handleAddClick} handleDeleteClick={handleDeleteClick}/>}
              </Fragment>
            ))} 
          </tbody>
        </table>
      </form>
    </div>
  )
}

export default App