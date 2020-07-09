import React from "react";
import { useEffect } from "react";
import { useState } from "react";

type GeneratorComponentProps = {
  generator: AsyncGenerator<any, any, any>;
};

const GeneratorComponent = (props: GeneratorComponentProps) => {
  const [currentValue, setCurrentValue] = useState();

  useEffect(() => {
    props.generator.next().then((result) => {
      !result.done ? setCurrentValue(result.value) : {};
    });
  }, [currentValue]);

  return <h1>{currentValue}</h1>;
};

export { GeneratorComponent };
