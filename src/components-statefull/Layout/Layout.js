import React from "react";

// Higher Order Components
import Aux from "../../higher-order-components/Aux";

const Layout = (props) => {
  return (
    <Aux>
      <div>Toolbar, SideDrawer, Backdrop</div>
      <main>{props.children}</main>
    </Aux>
  );
};

export default Layout;
