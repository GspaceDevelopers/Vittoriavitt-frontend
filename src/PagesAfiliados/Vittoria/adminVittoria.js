import React from "react";
import Iframe from "react-iframe";

const AdminVittoria = () => {
    return (
        <div style={{ width: '100%', height: "100vh" }}>
            <Iframe
                src="https://vittoriafitstore.netlify.app/adminlogin"
                width="100%"
                height="100%"
                style="border:0;"
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
            ></Iframe>
        </div>
    )
}
export default AdminVittoria;