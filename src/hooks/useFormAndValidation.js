import { useState, useCallback } from 'react';

export function useFormAndValidation() {
  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});
  const [isValid, setIsValid] = useState(true);

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const handleChange = (e) => {
    const { name, value } = e.target;
    const newErrors = { ...errors };
    let isValidField = true;

    if (name === 'email' && !emailRegex.test(value)) {
      newErrors[name] = 'Некорректный адрес электронной почты';
      isValidField = false;
    } else {
      newErrors[name] = e.target.validationMessage;
      isValidField = e.target.validity.valid;
    }

    setErrors(newErrors);

    setIsValid(newErrors.email === '' && newErrors.password === '' && isValidField);
    setValues({ ...values, [name]: value });
  };

  const resetForm = useCallback((newValues = {}, newErrors = {}, newIsValid = false) => {
    setValues(newValues);
    setErrors(newErrors);
    setIsValid(newIsValid);
  }, [setValues, setErrors, setIsValid]);

  return { values, handleChange, errors, isValid, resetForm, setValues, setIsValid };
}
