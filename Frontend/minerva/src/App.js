import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import indexData from "./components/TabComponent/IndexData.js";
import VerticalTab from "./components/TabComponent/VerticalTab/VerticalTab";

import Tabs from "./components/TabComponent/Tab";

const App = () => {

    
  return (
        <div className="App">
      <Tabs />
      {/* <VerticalTab data={indexData.jobs} /> */}
    </div>
  );
};

export default App;