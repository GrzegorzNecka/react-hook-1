import React from "react";

const withCollapse = WrapComponent => {
  return props => <WrapComponent {...props} isCollapsed={true} />;
};

export default withCollapse;
