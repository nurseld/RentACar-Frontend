import React from "react";
import NoFound from "../../assets/all-images/404.png";

const NotFound = () => {
  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "60vh" }}>
      <img src={NoFound} alt="404" style={{ /* İstediğiniz ekstra stillemeleri ekleyebilirsiniz */ }} />
    </div>
  );
};

export default NotFound;
