import React from "react";

const SoftDrink = React.forwardRef((props, ref) => (
  <section ref={ref} style={{ height: "100vh", padding: "50px" }}>
    <h2>Soft Drink</h2>
  </section>
));

export default SoftDrink;
