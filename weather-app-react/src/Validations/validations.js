import * as yup from "yup";

// things that we declare under schema must be same as initialValues keys.
let schema = yup.object().shape({
  firstName: yup.string().required(),
});

export default schema;
