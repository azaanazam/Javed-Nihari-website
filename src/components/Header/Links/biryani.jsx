import React from "react";

const Biryani = React.forwardRef((props, ref) => (
  <section ref={ref} style={{ height: "100vh", padding: "50px" }}>
    <h2>Biryani / Pulao</h2>
  </section>
));

export default Biryani;
