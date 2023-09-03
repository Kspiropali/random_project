import React from "react";

const Notification = ({notification, setNotification}) => {
    function hideNotification(e) {
        e.preventDefault();
        setNotification("");
    }

    return (
        <div id="notification_box">
            <div className="alert alert-success">
                <img src={"https://cdn-icons-png.flaticon.com/512/4344/4344882.png"} className="alert-img" alt={"warning image"}/>
                <p>{notification}</p>
                <img src={"https://cdn-icons-png.flaticon.com/512/1828/1828665.png"} className="img-close-btn"
                     onClick={hideNotification} alt={"close notification image"}/>
            </div>
        </div>
    )
};

export default Notification;