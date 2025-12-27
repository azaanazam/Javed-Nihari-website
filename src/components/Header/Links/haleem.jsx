import React from "react";

const Haleem = React.forwardRef((props, ref) => (
  <section ref={ref} style={{ height: "100vh", padding: "50px" }}>
    <h2>Haleem</h2>
  </section>
));

export default Haleem;
