import React from 'react';

function PersonDetailsForm() {
  return (
    <form id="personal-details">
      <label htmlFor="profile-picture">Upload Profile Picture:</label>
      <input type="file" id="profile-picture" name="profile-picture"></input>
      <label htmlFor="profile-name">Name:</label>
      <input type="text" id="profile-name" name="profile-name"></input>
      <label htmlFor="profile-email">Email:</label>
      <input type="email" id="profile-email" name="profile-email"></input>
      <label htmlFor="profile-phone">Phone:</label>
      <input type="tel" id="profile-phone" name="profile-phone"></input>
    </form>
  );
}

export default PersonDetailsForm;
