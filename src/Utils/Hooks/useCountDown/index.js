import { useEffect, useState } from "react";

export const useCountDown = ({ seconds, onEndCountDown }) => {
  const [countDown, setCountDown] = useState(seconds);

  useEffect(() => {
    const timer = setInterval(() => {
      setCountDown(countDown - 1);
    }, 1000);

    if (countDown < 0) {
      clearInterval(timer);
      onEndCountDown();
    }

    return () => {
      return clearInterval(timer);
    };
  }, [countDown]);

  return countDown;
};
