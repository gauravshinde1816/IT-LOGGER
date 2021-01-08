import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { deleteLogs, setCurrent } from "../../actions/logActions";
import M from "materialize-css/dist/js/materialize.min.js";
import Moment from "react-moment";
const LogItems = ({ log, deleteLogs, setCurrent }) => {
  const onDelete = () => {
    deleteLogs(log.id);
    M.toast({
      html: `Logs ${log.id} deleted`,
    });
  };
  return (
    <div>
      <li className="collection-item">
        <a
          href="#edit-log-modal"
          className={`modal-trigger ${
            log.attention ? "red-text" : "blue-text"
          }`}
          onClick={() => setCurrent(log)}
        >
          {log.message}
        </a>
        <br />
        <span className="grey-text">
          <span className="black-text">ID #{log.id}</span> Last updated by{" "}
          <span className="black-text">{log.tech}</span> on{" "}
          <Moment format="MMMM Do YYYY, h:mm:ss a">{log.date}</Moment>
        </span>
        <a href="#!" className="secondary-content" onClick={onDelete}>
          <i className="material-icons grey-text">delete</i>
        </a>
      </li>
    </div>
  );
};

LogItems.propTypes = {
  log: PropTypes.object.isRequired,
  deleteLogs: PropTypes.func.isRequired,
  setCurrent: PropTypes.func.isRequired,
};

export default connect(null, { deleteLogs, setCurrent })(LogItems);
