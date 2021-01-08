import React, { useRef } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { searchLogs } from "../../actions/logActions";
const SideNavBar = ({ searchLogs }) => {
  const text = useRef("");
  const onChange = (e) => {
    searchLogs(text.current.value);
  };
  return (
    <div>
      <nav style={{ marginBottom: "20px", backgroundColor: "blue" }}>
        <div className="nav-wrapper">
          <form>
            <div className="input-field">
              <input
                id="search"
                type="search"
                placeholder="search Logs ...."
                onChange={onChange}
                ref={text}
              />
              <label className="label-icon" htmlFor="search">
                <i className="material-icons">search</i>
              </label>
              <i className="material-icons">close</i>
            </div>
          </form>
        </div>
      </nav>
    </div>
  );
};

SideNavBar.propsTypes = {
  searchLogs: PropTypes.func.isRequired,
};

export default connect(null, { searchLogs })(SideNavBar);
