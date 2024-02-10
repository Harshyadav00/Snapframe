import React, { useEffect, useState } from "react";

const Loader = (getAllPosts) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          getAllPosts();
        }
      },
      { threshold: 0.5 }
    );

    observer.observe(document.querySelector("#loader"));

    return () => {};
  }, []);

  return (
    <div id="loader" style={{ height: "100px", width: "100%" }}>
      {loading ? <p>Loading...</p> : null}
    </div>
  );
};

export default Loader;
