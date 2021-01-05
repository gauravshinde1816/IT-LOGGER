import React, { useState } from "react";
import M from "materialize-css/dist/js/materialize.min.js";
const AddTechModal = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const onSubmit = () => {
    if (firstName === "" || lastName === "") {
      M.toast({
        html: "Plesae enter the techs and message",
      });
    } else {
      console.log(firstName, lastName);
      setFirstName("");
      setLastName("");
    }
  };
  return (
    <div id="add-tech-modal" className="modal">
      <div className="modal-content">
        <div className="row">
          <h4 className="center">Add New Techie</h4>
          <br />
          <div className="input-field">
            <input
              type="text"
              name="firstName"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
            <label htmlFor="lastName" className="active">
              First Name
            </label>
          </div>
        </div>

        <div className="row">
          <div className="input-field">
            <input
              type="text"
              name="lastName"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
            <label htmlFor="lastName" className="active">
              last Name
            </label>
          </div>
        </div>
      </div>

      <div className="modal-footer">
        <a
          href="#!"
          className="waves-effect waves-light btn-large  modal-close"
          onClick={onSubmit}
        >
          Enter
        </a>
      </div>
    </div>
  );
};

export default AddTechModal;
