import React from "react";

const SideNavBar = () => {
  return (
    <div>
      <nav style={{ marginBottom: "20px", backgroundColor: "blue" }}>
        <div className="nav-wrapper">
          <form>
            <div className="input-field">
              <input id="search" type="search" />
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

export default SideNavBar;
