import React from 'react';
import cx from "classnames";

function Choice({id, content, selected, onClick, selectionMade}) {
    function handleClick() {
        onClick(id);
    }

    return (
        <div onClick={handleClick} className={
            cx("choice", {selected, "not-selected": !selected && selectionMade})
        }>{content}</div>
    );
}

export default Choice;
