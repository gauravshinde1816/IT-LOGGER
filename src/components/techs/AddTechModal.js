import React, { useState } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import { addTechs } from "../../actions/techActions";
import M from "materialize-css/dist/js/materialize.min.js";
const AddTechModal = ({ addTechs }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const onSubmit = () => {
    if (firstName === "" || lastName === "") {
      M.toast({
        html: "Please enter the techs and message",
      });
    } else {
      addTechs({
        firstName,
        lastName,
      });

      M.toast({
        html: `${firstName} is added to tech-team`,
      });
      //clear fields
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
AddTechModal.propTypes = {
  addTechs: PropTypes.func.isRequired,
};

export default connect(null, { addTechs })(AddTechModal);
