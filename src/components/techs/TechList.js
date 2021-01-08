import React, { useState, useEffect } from "react";
import TechItems from "./TechItems";
import PreLoader from "../layout/PreLoader";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getTechs } from "../../actions/techActions";
const TechList = ({ getTechs, tech: { techs, loading } }) => {
  useEffect(() => {
    getTechs();

    console.log(techs);
  }, []);

  return (
    <div id="tech-list-modal" className="modal bottom-sheet">
      <div className="modal-content">
        <ul className="collection with-header">
          <li className="collection-header">
            <h4 className="center">Available technicians</h4>
          </li>

          {!loading &&
            techs !== null &&
            techs.map((tech) => <TechItems tech={tech} key={tech.id} />)}
        </ul>
      </div>
      <div className="modal-footer">
        <a href="#!" className="modal-close waves-effect waves-green btn-flat">
          Close
        </a>
      </div>
    </div>
  );
};

TechList.propTypes = {
  getTechs: PropTypes.func.isRequired,
  tech: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  tech: state.tech,
});

export default connect(mapStateToProps, { getTechs })(TechList);
