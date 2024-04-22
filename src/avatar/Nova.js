import React from "react";
import PropTypes from "prop-types";

import "../styles/avatar.css";

const nova = ({ page }) => {
  const avatarClass = `avatar ${page}`;
  const spanClass = `shadow-overlay-${page}`;

  return (
    <>
      <span className={spanClass}></span>
    
    </>
  );
};

nova.propTypes = {
  page: PropTypes.string.isRequired,
};

export default nova;