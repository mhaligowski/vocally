import React, { useEffect, useState } from "react";

type GeneratorComponentProps = {
  generator: AsyncGenerator<any, any, any>;
  children: any;
};

const GeneratorComponent = (props: GeneratorComponentProps) => {
  const [flag, setFlag] = useState(false);
  const [currentValue, setCurrentValue] = useState();

  useEffect(() => {
    let mounted = true;
    props.generator.next().then((result) => {
      if (result.done || !mounted) return;

      setCurrentValue(result.value);
      setFlag(!flag);
    });

    return () => {
      mounted = false;
    };
  }, [flag]);

  return props.children(currentValue);
};

export { GeneratorComponent };
