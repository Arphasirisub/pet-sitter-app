const validateForm = (formData, setFormErrors, formErrors) => {
  let valid = true;
  const newErrors = { ...formErrors };

  // Validate name
  const nameRegex = /^.{6,20}$/;
  if (!nameRegex.test(formData.name)) {
    newErrors.name = "Name must be 6-20 characters long and not repeated";
    valid = false;
  } else {
    newErrors.name = "";
  }

  // Validate email
  const emailRegex = /^[^\s@]+@[^\s@]+\.[a-zA-Z]{2,}/;
  if (!emailRegex.test(formData.email)) {
    newErrors.email = "Invalid email format";
    valid = false;
  } else {
    newErrors.email = "";
  }

  // Validate phone
  const phoneRegex = /^0[0-9]{9}$/;
  if (!phoneRegex.test(formData.phone)) {
    newErrors.phone = "Invalid phone format";
    valid = false;
  } else {
    newErrors.phone = "";
  }

  // Validate password
  if (
    (formData.password && formData.password.length <= 12) ||
    formData.password.length === 0
  ) {
    newErrors.password = "Password must be more than 12 characters";
    valid = false;
  } else {
    newErrors.password = "";
  }

  setFormErrors(newErrors);
  return valid;
};

export default validateForm;
