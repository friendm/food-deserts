import React from "react";
import cx from "classnames";

function Choice({
                    id, content, selected, onClick, selectionMade,
                    numSelected, maxSelections
                }) {
    function handleClick() {
        onClick(id);
    }

    return (
        <div onClick={handleClick} className={
            cx("choice", {selected, "not-selected": !selected && selectionMade && numSelected === maxSelections})
        }>{content}</div>
    );
}

export default Choice;
