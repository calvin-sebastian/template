import React, { useCallback, useEffect, useState } from "react";

export default function PageTemplate() {
  //
  //  ------------------------------  Variables  -----------------------------  //

  const [state, setState] = useState();

  //  ------------------------------  Functions  -----------------------------  //

  async function template(newState) {
    setState(newState);
  }

  const template2 = useCallback(
    (newState) => {
      setState(newState);
    },
    [state, setState]
  );

  //  ------------------------------  UseEffects  ----------------------------  //

  useEffect(() => {
    if (state) console.log(state);
  }, [state]);

  //  ---------------------------------  JSX  --------------------------------  //

  return <div></div>;
}
