import React from "react";
import PropTypes from "prop-types";
import Moment from "react-moment";
const LogItems = ({ log }) => {
  return (
    <div>
      <li className="collection-item">
        <a
          href="#edit-log-modal"
          className={`modal-trigger ${
            log.attention ? "red-text" : "blue-text"
          }`}
        >
          {log.message}
        </a>
        <br />
        <span className="grey-text">
          <span className="black-text">ID #{log.id}</span> Last updated by{" "}
          <span className="black-text">{log.tech}</span> on{" "}
          <Moment format="MMMM Do YYYY, h:mm:ss a">{log.date}</Moment>
        </span>
        <a href="#!" className="secondary-content">
          <i className="material-icons grey-text">delete</i>
        </a>
      </li>
    </div>
  );
};

LogItems.propTypes = {
  log: PropTypes.object.isRequired,
};

export default LogItems;
