import { useState } from "react";
import ComponentStyles from "./MoreOnHover.module.css";

function MoreOnHover({ usual_jsx, jsx_on_hover }) {
  const [showOnHoverData, setShowOnHoverData] = useState(false);

  const on_hover_elements = showOnHoverData ? (
    <div className={ComponentStyles.JsxOnHover}>
      <h3>{usual_jsx}</h3>
      {jsx_on_hover}
    </div>
  ) : undefined;

  return (
    <>
      <div
        className={ComponentStyles.RegularJSX}
        onMouseEnter={() => setShowOnHoverData(true)}
        onMouseLeave={() => setShowOnHoverData(false)}
      >
        {usual_jsx}
        {on_hover_elements}
      </div>
    </>
  );
}

export default MoreOnHover;
