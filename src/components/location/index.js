import React from "react";

const Location = () => {
    return (
        <div className="location_wrapper">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3032.5253964195563!2d-74.4390895247776!3d40.52998014874004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c3c791b8e82c81%3A0xb2662e39639980ea!2s28%20Redbud%20Rd%2C%20Piscataway%2C%20NJ%2008854!5e0!3m2!1sen!2sus!4v1690990898562!5m2!1sen!2sus" 
            width="100%" 
            height="500px" 
            title = "gglmaps"
            allowfullscreen="" 
            loading="lazy" 
            referrerpolicy="no-referrer-when-downgrade"
            ></iframe>

            <div className="location_tag">
                <div>
                    Location
                </div>
            </div>
        </div>
    )
}

export default Location;