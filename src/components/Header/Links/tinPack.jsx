import React from "react";

const TinPack = React.forwardRef((props, ref) => (
  <section ref={ref} style={{ height: "100vh", padding: "50px" }}>
    <h2>Tin Pack</h2>
  </section>
));

export default TinPack;
