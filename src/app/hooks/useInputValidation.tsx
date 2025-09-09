import { useState } from "react";

// Define the return type of the hook
type UseInputValidationResult = {
  value: string;
  error: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  setValue: (val: string) => void;
};

// Custom hook for input validation
export default function useInputValidation(): UseInputValidationResult {
  const [value, setValue] = useState("");
  const [error, setError] = useState("");

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    if (/[^a-zA-Z0-9\s]/.test(val)) {
      setError("Special characters are not allowed.");
    } else {
      setError("");
      setValue(val);
    }
  };

  return { value, error, onChange, setValue };
}

