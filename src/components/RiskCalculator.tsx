import { useState } from "react";
export default function RiskCalculator() {
  const [balance, setBalance] = useState<string>("");
  const [riskPercent, setRiskPercent] = useState<string>("");
  const [riskAmount, setRiskAmount] = useState<number | null>(null);
  const calculateRisk = () => {
    const risk = (parseFloat(balance) * parseFloat(riskPercent)) / 100;
    setRiskAmount(parseFloat(risk.toFixed(2)));
  };
  return (
    <div className="p-4">
      {" "}
      <h2 className="text-xl font-semibold mb-4">Forex Risk Calculator</h2>{" "}
      <label className="block mb-2">Account Balance ($):</label>{" "}
      <input
        type="number"
        className="w-full p-2 border rounded"
        value={balance}
        onChange={(e) => setBalance(e.target.value)}
      />{" "}
      <label className="block mt-4 mb-2">Risk Percentage (%):</label>{" "}
      <input
        type="number"
        className="w-full p-2 border rounded"
        value={riskPercent}
        onChange={(e) => setRiskPercent(e.target.value)}
      />{" "}
      <button
        onClick={calculateRisk}
        className="bg-green-500 text-white p-2 rounded mt-4 w-full"
      >
        {" "}
        Calculate Risk{" "}
      </button>{" "}
      {riskAmount !== null && (
        <p className="mt-4 text-green-600">
          {" "}
          You are risking: <strong>${riskAmount}</strong>{" "}
        </p>
      )}{" "}
    </div>
  );
}
