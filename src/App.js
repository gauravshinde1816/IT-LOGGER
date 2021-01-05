import { React, useEffect } from "react";
import "./App.css";
import SideNavBar from "./components/layout/SideNavBar";
import "materialize-css/dist/css/materialize.min.css";
import M from "materialize-css/dist/js/materialize.js";
import AddBtn from "./components/layout/AddBtn";
import Logs from "./components/logs/Logs";
import AddLogsModal from "./components/logs/AddLogsModal";
import EditLogsModal from "./components/logs/EditLogsModal";
import AddTechModal from "./components/techs/AddTechModal";
import TechList from "./components/techs/TechList";
import { Provider } from "react-redux";
import store from "./Store";
const App = () => {
  useEffect(() => {
    M.AutoInit();
  }, []);
  return (
    <Provider store={store}>
      <div className="App">
        <SideNavBar />

        <div className="container">
          <AddBtn />
          <TechList />
          <Logs />
          <AddLogsModal />
          <EditLogsModal />
          <AddTechModal />
        </div>
      </div>
    </Provider>
  );
};

export default App;
