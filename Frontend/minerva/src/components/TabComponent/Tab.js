import React, { useState } from "react";
import HomeTab from "./AllTabs/Home";
import ContactusTab from "./AllTabs/ContactUs";

const Tabs = () => {
  const [activeTab, setActiveTab] = useState("home");
  const handleTab1 = () => {
    // update the state to tab1
    setActiveTab("home");
  };
  const handleTab2 = () => {
    // update the state to tab2
    setActiveTab("contactus");
  };
  return (
    <div className="Tabs">
      {/* Tab nav */}
      <ul className="nav">
        <li className={activeTab === "home" ? "active" : "" }
        onClick={handleTab1}
        > Home</li>
        <li className={activeTab === "contactus" ? "active" : ""}
        onClick={handleTab2}
        >Contact Us</li>
      </ul>
      <div className="outlet">
      {activeTab === "home" ? <HomeTab /> : <ContactusTab />}
      </div>
    </div>
  );
};

export default Tabs;