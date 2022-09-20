import { useState, useEffect } from "react";

const useCounter = (increase = true) => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCounter((prevCounter) => increase ? prevCounter + 1 : prevCounter - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [increase]);

  return counter;
};

export default useCounter;
