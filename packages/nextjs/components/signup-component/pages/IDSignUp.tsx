import React from "react";
import { AddressInput } from "~~/components/scaffold-eth";
import Typography from "~~/components/signup-component/Typography";

interface IDSignUpProps {
  inputValue: string;
  setInputValue: React.Dispatch<React.SetStateAction<string>>;
}

const IDSignUp: React.FC<IDSignUpProps> = ({ inputValue, setInputValue }) => {
  const handleInputChange = (value: string) => {
    setInputValue(value);
    localStorage.setItem("etheriumID", value); // Store input value in localStorage
  };

  return (
    <div className="justify-center flex flex-col h-screen items-center gap-10 lg:w-3/5">
      <Typography variant="title">Input your Ethereum Address</Typography>
      <div className="w-full">
        <Typography variant="label">Ethereum address</Typography>
        <AddressInput
          value={inputValue}
          placeholder="Address Or ENS Name"
          className="w-full rounded-lg"
          onChange={handleInputChange}
        />
      </div>
    </div>
  );
};

export default IDSignUp;