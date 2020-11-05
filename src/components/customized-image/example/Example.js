import React, { useState, useCallback } from "react";
import { Container } from "../container/Container";
export const Example = () => {
  const [hideSourceOnDrag, setHideSourceOnDrag] = useState(true);
  const toggle = useCallback(() => setHideSourceOnDrag(!hideSourceOnDrag), [
    hideSourceOnDrag,
  ]);
  return (
    <div>
      
      <Container hideSourceOnDrag={hideSourceOnDrag} />
    </div>
  );
};
