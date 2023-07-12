import React from "react";
import indexData from "../IndexData.js";
import VerticalTab from "../VerticalTab/VerticalTab";

const HomeTab = () => {
  return (
    <div className="Home">
      <VerticalTab data={indexData.pages} />
    </div>
  );
};
export default HomeTab;