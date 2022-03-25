import React,{ useContext } from "react";
import { stateContext } from "./context";


const PageItem = () => {

  const state = useContext(stateContext)
  const {current,toggleTheme,obj} = state


  return (
    <div style={{background:current.background,color:current.textColor}} className="last_item">
      <h3>последний єлемент</h3>
      <button onClick={toggleTheme}>dgdgdgd</button>
      <span>{obj.user.name}</span>
    </div>
  );
};

export default PageItem;
