import React, { useState, useEffect } from "react";
import TechItems from "./TechItems";

const TechList = () => {
  const [techs, setTechs] = useState([]);

  useEffect(() => {
    getTechs();
  }, []);

  const getTechs = async () => {
    const res = await fetch("/techs");
    const data = await res.json();

    setTechs(data);
    console.log(data);
  };

  return (
    <div id="tech-list-modal" className="modal bottom-sheet">
      <div className="modal-content">
        <ul className="collection with-header">
          <li className="collection-header">
            <h4 className="center">Available technicians</h4>
          </li>

          {techs.length === 0 ? (
            <p className="center"> No Techs Available</p>
          ) : (
            techs.map((tech) => <TechItems tech={tech} key={tech.id} />)
          )}
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

export default TechList;
