import React, { useEffect } from "react";

const H5PContent = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://buildwisecom.h5p.com/js/h5p-resizer.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div>
      <iframe
        src="videos/deviations_distribution_model.h5p"
        aria-label="Deviations Distribution Model"
        width="1088"
        height="637"
        frameborder="0"
        allowfullscreen="allowfullscreen"
        allow="autoplay *; geolocation *; microphone *; camera *; midi *; encrypted-media *"
      ></iframe>
    </div>
  );
};

export default H5PContent;
