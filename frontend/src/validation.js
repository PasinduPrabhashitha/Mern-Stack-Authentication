import Joi from "joi";

const userRegisterValidation = (name, email, password) => {
  const schema = Joi.object({
    name: Joi.string().min(6).required(),
    email: Joi.string()
      .required()
      .email({ minDomainSegments: 2, tlds: { allow: ["com", "net"] } }),
    password: Joi.string().min(6).required(),
  });

  return schema.validate({ name, email, password });
};

const userLoginValidation = (email, password) => {
  const schema = Joi.object({
    email: Joi.string()
      .required()
      .email({ minDomainSegments: 2, tlds: { allow: ["com", "net"] } }),
    password: Joi.string().min(6).required(),
  });

  return schema.validate({ email, password });
};

export { userRegisterValidation, userLoginValidation };
