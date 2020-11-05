import React from "react";
import { useDrag } from "react-dnd";

export const ItemTypes = {
  BOX: "box",
};
const style = {
  position: "absolute",
  padding: "1.5rem 1rem",
  cursor: "move",
};
export const Box = ({ id, left, top, hideSourceOnDrag, children }) => {
  const [{ isDragging }, drag] = useDrag({
    item: { id, left, top, type: ItemTypes.BOX },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });
  if (isDragging && hideSourceOnDrag) {
    return <div ref={drag} />;
  }
  return (
    <div ref={drag} style={{ ...style, left, top }}>
      {children}
    </div>
  );
};
