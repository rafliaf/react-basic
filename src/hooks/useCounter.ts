import { useState } from "react";

// membuaat hook
export const useCounter = () => {
  const [count, setCount] = useState(0);

  const handleDecrement = () => {
    alert("decrement");
    setCount(count - 1);
  };

  const handleIncrement = () => {
    alert("increment");
    setCount(count + 1);
  };

  const handleResetCount = () => {
    alert("Reset Count");
    setCount(0);
  };

  return {
    count,
    handleDecrement,
    handleIncrement,
    handleResetCount,
  };
};
