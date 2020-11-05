import React, { useState, useContext } from "react";
import { useDrop } from "react-dnd";
// import { ItemTypes } from './ItemTypes';
import { Box } from "../container/box/box";
import update from "immutability-helper";
import TShirtLogoTextContext from "../../../context/TShirtLogoTextContext";
export const ItemTypes = {
  BOX: "box",
};

const styles = {
  width: "80%",
  height: 400,
  display: "block",
  margin: "auto",
  position: "relative",
};
export const Container = ({ hideSourceOnDrag }) => {
  const [boxes, setBoxes] = useContext(TShirtLogoTextContext);
  const [, drop] = useDrop({
    accept: ItemTypes.BOX,
    // droping text 
    drop(item, monitor) {
      const delta = monitor.getDifferenceFromInitialOffset();
      const left = Math.round(item.left + delta.x);
      const top = Math.round(item.top + delta.y);
      moveBox(item.id, left, top);
      return undefined;
    },
  });
  // moving text
  const moveBox = (id, left, top) => {
    setBoxes(
      update(boxes, {
        [id]: {
          $merge: { left, top },
        },
      })
    );
  };
  return (
    <div ref={drop} style={styles}>
      {Object.keys(boxes).map((key) => {
        const { left, top, title } = boxes[key];
        return (
          <>
            {boxes.b.title && (
              <div>
                <Box
                  style={{
                    backgroundColor: "transparent !important",
                    border: " 0px !important",
                  }}
                  key={key}
                  id={key}
                  left={left}
                  top={top}
                  hideSourceOnDrag={hideSourceOnDrag}
                >
                  {title}
                </Box>
              </div>
            )}
          </>
        );
      })}
    </div>
  );
};
