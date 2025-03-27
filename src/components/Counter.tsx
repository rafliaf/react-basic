import { useCounter } from "../hooks/useCounter";

const Counter = () => {
  const { count, handleDecrement, handleIncrement, handleResetCount } = useCounter();

  return (
    <div
      style={{
        display: "flex",
        gap: "10px",
      }}
    >
      <button onClick={handleDecrement}>Kurang</button>
      <p style={{ fontSize: "40px" }}>{count}</p>
      <button onClick={handleIncrement}>Tambah</button>
      <button onClick={handleResetCount}>Reset</button>
    </div>
  );
};

export default Counter;
