import React, { useEffect, useState } from "react";

type GeneratorComponentProps = {
  generator: AsyncGenerator<any, any, any>;
  children: any;
};

const GeneratorComponent = (props: GeneratorComponentProps) => {
  const [flag, setFlag] = useState(false);
  const [currentValue, setCurrentValue] = useState();

  useEffect(() => {
    props.generator.next().then((result) => {
      if (result.done) return;

      setCurrentValue(result.value);
      setFlag(!flag);
    });
  }, [flag]);

  return props.children(currentValue);
};

export { GeneratorComponent };
