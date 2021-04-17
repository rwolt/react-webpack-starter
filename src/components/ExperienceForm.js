import React from 'react';

function ExperienceForm() {
  return (
    <form id="career-history">
      <label htmlFor="company-name">Company: </label>
      <input type="text" id="company-name" name="company-name"></input>
      <label htmlFor="company-position">Position: </label>
      <input type="text" id="company-position" name="company-position"></input>
      <label htmlFor="company-tasks">Description of Tasks: </label>
      <input type="text" id="company-tasks" name="company-tasks"></input>
      <label htmlFor="company-start">Start Date: </label>
      <input type="date" id="company-start" name="company-start"></input>
      <label htmlFor="company-finish">End Date: </label>
      <input type="date" id="company-end" name="company-end"></input>
    </form>
  );
}

export default ExperienceForm;
