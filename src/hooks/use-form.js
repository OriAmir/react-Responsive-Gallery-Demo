import React, { useState } from 'react';

const useForm = (initialValues = {}, callback) => {
  const [inputs, setInputs] = useState(initialValues);
  const handleSubmit = (event) => {
    if (event) event.preventDefault();
    callback(inputs);
  };
  const handleInputChange = (event) => {
    event.persist();
    setInputs(curInputs => ({ ...curInputs, [event.target.name]: event.target.value }));
  };
  return {
    handleSubmit,
    handleInputChange,
    inputs
  };
};
export default useForm;
