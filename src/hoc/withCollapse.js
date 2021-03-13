import React from "react";

const withCollapse = WrapComponent => {
  return () => <WrapComponent data="string" />;
};

export default withCollapse;
