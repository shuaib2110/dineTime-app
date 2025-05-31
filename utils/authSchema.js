import * as Yup from "yup";
const validationSchema = Yup.object().shape({
<<<<<<< HEAD
  email: Yup.string()
    .required("Email is required")
    .email("Invalid email format"),

  password: Yup.string()
    .required("Password is required")
    .min(6, "Password must be at least 6 characters long"),
});

export default validationSchema;
=======
    email: Yup.string().required("Email is required").email("Invalid email address"),
    password: Yup.string().required("password is required").min(6, "Password must be at least 6 characters"),
});

export default validationSchema;
>>>>>>> 9074a00d6abca68eaa3b5abee23472a5a9551d73
