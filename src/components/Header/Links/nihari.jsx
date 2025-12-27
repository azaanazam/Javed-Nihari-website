import React from "react";

const Nihari = React.forwardRef((props, ref) => {
  return (
    <section ref={ref} style={{ height: "100vh", padding: "50px" }}>
      <h2>Nihari</h2>
    </section>
  );
});

export default Nihari;
