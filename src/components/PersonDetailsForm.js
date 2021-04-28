import React from 'react';

function PersonDetailsForm(props) {
  if (props.editable) {
    return (
      <form
        className="personal-details"
        onChange={(e) => props.handleChange(e)}
      >
        <label htmlFor="profile-name">Name:</label>
        <input
          type="text"
          id="profile-name"
          name="profileName"
          value={props.name}
        ></input>
        <label htmlFor="profile-email">Email:</label>
        <input
          type="email"
          id="profile-email"
          name="profileEmail"
          value={props.email}
        ></input>
        <label htmlFor="profile-phone">Phone:</label>
        <input
          type="tel"
          id="profile-phone"
          name="profilePhone"
          value={props.phone}
        ></input>
      </form>
    );
  }

  return (
    <div className="personal-details">
      <label htmlFor="profile-name">Name:</label>
      <p id="profile-name" name="profile-name">
        {props.name}
      </p>
      <label htmlFor="profile-email">Email:</label>
      <p id="profile-email" name="profile-email">
        {props.email}
      </p>
      <label htmlFor="profile-phone">Phone:</label>
      <p id="profile-phone" name="profile-phone">
        {props.phone}
      </p>
    </div>
  );
}

export default PersonDetailsForm;
