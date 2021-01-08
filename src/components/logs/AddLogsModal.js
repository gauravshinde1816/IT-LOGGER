import React, { useState } from "react";
import { connect } from "react-redux";

import { addLogs } from "../../actions/logActions";
import PropTypes from "prop-types";

import M from "materialize-css/dist/js/materialize.min.js";
import TechSelectOptions from "../techs/TechSelectOptions";
const AddLogsModal = ({ addLogs }) => {
  const [message, setMessage] = useState("");
  const [attention, setAttention] = useState(false);
  const [tech, setTechs] = useState("");

  const onSubmit = () => {
    if (message === "" || tech === "" || attention === "") {
      M.toast({
        html: "Plesae enter the techs and message",
      });
    } else {
      // console.log(message, tech, attention);
      const newLog = {
        message,
        attention,
        tech,
        date: new Date(),
      };

      addLogs(newLog);
      M.toast({ html: `Logs added by ${tech}` });

      //clear fields
      setAttention(false);
      setMessage("");
      setTechs("");
    }
  };
  return (
    <div id="add-log-modal" className="modal" style={modelStyle}>
      <div className="modal-content">
        <div className="row">
          <h4 className="center">Enter System Logs</h4>
          <br />
          <div className="input-field">
            <input
              type="text"
              name="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
            <label htmlFor="message" className="active">
              Log message
            </label>
          </div>
        </div>
        <div className="row">
          <div className="input-field">
            <select
              name="tech"
              value={tech}
              className="browser-default"
              onChange={(e) => setTechs(e.target.value)}
            >
              <option value="" disabled>
                Select technician
              </option>
              <TechSelectOptions />
            </select>
          </div>
        </div>
        <div className="row">
          <p>
            <label>
              <input
                type="checkbox"
                checked={attention}
                value={attention}
                className="filled-in"
                onChange={(e) => setAttention(!attention)}
              />
              <span>Needs attention</span>
            </label>
          </p>
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
AddLogsModal.propTypes = {
  addLogs: PropTypes.func.isRequired,
};

const modelStyle = {
  height: "75%",
  width: "75%",
  marginTop: "15px",
};
export default connect(null, { addLogs })(AddLogsModal);
