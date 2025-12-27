import React from "react";

const Tandoor = React.forwardRef((props, ref) => (
  <section ref={ref} style={{ height: "100vh", padding: "50px" }}>
    <h2>Tandoor</h2>
  </section>
));

export default Tandoor;
