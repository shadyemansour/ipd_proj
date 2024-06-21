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
        src="https://buildwise.h5p.com/content/1292304416590648867/embed"
        aria-label="BSESC Case Study"
        width="1088"
        height="637"
        frameborder="0"
        allowfullscreen="allowfullscreen"
        allow="autoplay *; geolocation *; microphone *; camera *; midi *; encrypted-media *"
      ></iframe>
      <script
        src="https://buildwise.h5p.com/js/h5p-resizer.js"
        charset="UTF-8"
      ></script>
    </div>
  );
};

export default H5PContent;
