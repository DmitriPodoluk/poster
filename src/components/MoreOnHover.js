import { useState } from "react";
import ComponentStyles from "./MoreOnHover.module.css";

function MoreOnHover({ usual_jsx, jsx_on_hover }) {
  const [showOnHoverData, setShowOnHoverData] = useState(false);

  const MouseOverStart = () => {
    setShowOnHoverData(true);
  };

  return (
    <>
      <div className={ComponentStyles.RegularJSX} onMouseEnter={MouseOverStart}>
        {usual_jsx}
        <div className={ComponentStyles.JsxOnHover}>{jsx_on_hover}</div>
      </div>
    </>
  );
}

export default MoreOnHover;
