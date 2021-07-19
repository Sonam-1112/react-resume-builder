import React from "react";
import { useHistory } from "react-router-dom";

function SaveNext({ text, link, func }) {
  const history = useHistory();
  const saveNextFunc = (e) => {
    e.preventDefault();
    history.push(link);
    func();
  };

  return (
    <div className="text-center mt-5">
      <button onClick={(e) => saveNextFunc(e)} className="btn btn-success">
        {text}
      </button>
    </div>
  );
}

export default SaveNext;
