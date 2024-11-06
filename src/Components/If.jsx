import React from "react";

export const Else = ({ children }) => children;

export const If = ({ children, condition }) => {
  const childrenArray = React.Children.toArray(children);

  const ifChildren = childrenArray.filter((child) => child.type !== Else);
  const elseChild = childrenArray.find((child) => child.type === Else);

  if (condition) {
    return ifChildren;
  } else if (elseChild) {
    return elseChild.props.children;
  } else {
    return null;
  }
};
