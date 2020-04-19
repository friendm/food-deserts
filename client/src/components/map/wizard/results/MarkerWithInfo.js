import React, {useState} from "react";
import {InfoWindow, Marker} from "react-google-maps";

function MarkerWithInfo({content, position, icon}) {
    const [open, setOpen] = useState(false);

    function onToggleOpen() {
        setOpen(!open);
    }

    if (!position) {
        position = {lat: 33.421128, lng: -84.566427};
    }

    if (!icon) {
        icon = "http://maps.google.com/mapfiles/ms/icons/red-dot.png";
    }

    return (
        <Marker position={position}
                onClick={onToggleOpen}
                options={{
                    icon
                }}
        >
            {open && <InfoWindow onCloseClick={onToggleOpen}>
                <div>
                    {content}
                </div>
            </InfoWindow>}
        </Marker>
    );
}

export default MarkerWithInfo;
