import { useState } from "react";
import React from "react";
import '../styles/Signup.css';

interface PasswordStrengthIndicatorProps {
  password: string;
}

export const PasswordStrengthIndicator = ({ password }: PasswordStrengthIndicatorProps) => {
  const [length, setLength] = useState(false);
  const [uppercase, setUppercase] = useState(false);
  const [lowercase, setLowercase] = useState(false);
  const [number, setNumber] = useState(false);
  const [special, setSpecial] = useState(false);

  const validatePassword = (value:string) => {
    setLength(value.length >= 8);
    setUppercase(/[A-Z]/.test(value));
    setLowercase(/[a-z]/.test(value));
    setNumber(/\d/.test(value));
    setSpecial(/[!@#$%^&*]/.test(value));
  };

  React.useEffect(() => {
    validatePassword(password);
  }, [password]);

  return <div>
    <div className="password-indicator">
            <ul>
                <li className={!length ? 'valid' : 'hidden'}>Use 8 or more characters</li>
                <li className={!uppercase ? 'valid' : 'hidden'}>One Uppercase character</li>
                <li className={!lowercase ? 'valid' : 'hidden'}>One lowercase character</li>
                <li className={!number ? 'valid' : 'hidden'}>One number</li>
                <li className={!special ? 'valid' : 'hidden'}>One special character</li>
            </ul>
        </div>
  </div>;
};
