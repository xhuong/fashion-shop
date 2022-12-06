import { useEffect, useState } from "react";

export const useCountDown = ({ seconds, onEndCountDown }) => {
  const [countDownTimer, setCountDownTimer] = useState(seconds);

  useEffect(() => {
    const timer = setInterval(() => {
      setCountDownTimer(countDownTimer - 1);
    }, 1000);

    if (countDownTimer < 0) {
      clearInterval(timer);
      onEndCountDown();
    }

    return () => {
      return clearInterval(timer);
    };
  }, [countDownTimer]);

  return countDownTimer;
};
