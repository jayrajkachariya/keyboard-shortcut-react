export const validate = (value, message) => {
  if (!value) {
    throw new Error(message);
  }
};

export const validateType = (value, name, type) => {
  validate(
    typeof value === type,
    `The ${name} must be a ${type}; given ${typeof value}`
  );
};
