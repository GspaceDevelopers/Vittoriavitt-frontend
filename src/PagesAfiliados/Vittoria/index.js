import React from "react";
import Iframe from "react-iframe";

const Vitoria = () => {
    return (
        <>
            <Iframe
                src="https://vittoriafitstore.netlify.app/"
                width="100%"
                height="100%"
                style="border:0;"
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
            ></Iframe>
        </>
    );
}
export default Vitoria;