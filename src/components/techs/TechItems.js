import React from "react";
import PropTypes from "prop-types";

const TechItems = ({ tech }) => {
  return (
    <li className="collection-item">
      <div>
        {tech.firstName} {tech.lastName}
        <div className="secondary-content">
          <i className="material-icons grey-text">delete</i>
        </div>
      </div>
    </li>
  );
};

TechItems.propTypes = {
  tech: PropTypes.object.isRequired,
};

export default TechItems;
