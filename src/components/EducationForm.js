import React from 'react';

function EducationForm() {
  return (
    <form id="education-history">
      <label htmlFor="school-name">School: </label>
      <input type="text" id="school-name" name="school-name"></input>
      <label htmlFor="school-degree">Area of Study: </label>
      <input type="text" id="school-degree" name="school-degree"></input>
      <label htmlFor="school-start">Start Date: </label>
      <input type="date" id="school-start" name="school-start"></input>
      <label htmlFor="school-finish">End Date: </label>
      <input type="date" id="school-finish" name="school-finish"></input>
    </form>
  );
}

export default EducationForm;
