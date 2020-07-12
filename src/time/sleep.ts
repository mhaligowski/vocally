const sleep = async (ms: number) => {
  return new Promise((resolve, _) => {
    setTimeout(resolve, ms);
  });
};

export { sleep };
