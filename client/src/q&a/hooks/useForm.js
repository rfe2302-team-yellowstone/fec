import { useState } from 'react';

const useForm = (callback, validator, defaultErrors = {}) => {
  const [values, setValues] = useState({});
  const [errors, setErrors] = useState(defaultErrors);

  const handleChange = e => {
    e.persist();

    let name = event.target.name;
    let value = event.target.value;

    validator(e, name, value);

    setValues({
      ...values,
      [name]: value
    })
  }
  const handleSubmit = e => {
    e.preventDefault();

    if (Object.keys(errors).length === 0 && Object.keys(values).length !== 0) {
      callback();
    } else {
      // console.log('validation failure');
    }
  }

  return { values, errors, setErrors, handleChange, handleSubmit };
}

export default useForm;