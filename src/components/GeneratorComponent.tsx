import { useEffect, useState } from 'react';

type GeneratorComponentProps<T> = {
  generator: AsyncGenerator<T | undefined, any, any>;
  children: any;
  onTick?: (t: T | undefined) => void;
};

function GeneratorComponent<T>(props: GeneratorComponentProps<T>) {
  const [flag, setFlag] = useState(false);
  const [currentValue, setCurrentValue] = useState<T | undefined>();

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

  useEffect(() => {
    if (props.onTick && currentValue) {
      props.onTick(currentValue);
    }
  }, [currentValue]);

  if (typeof props.children === 'function') {
    return props.children(currentValue);
  }
  return props.children;
}

export { GeneratorComponent };
