import { Formik, Form } from "formik";
import { TextField } from "./TextField";
import * as yup from "yup";

export default function SignUp() {
    const validate = yup.object({
        firstname: yup.string().required("Required"),
        lastname: yup.string().required("Required"),
        email: yup
            .string()
            .email("email is invalid")
            .required("Email is Required"),
        password: yup
            .string()
            .min(6, "must be have 6 characters")
            .max(15, "must be have 15 characters or less")
            .required("Password is Required"),
        confrimPassword: yup
            .string()
            .oneOf([yup.ref("password"), null], "password must match")
            .required("confrim password is Required"),
    });

    return (
        <Formik
            initialValues={{
                firstname: "",
                lastname: "",
                email: "",
                password: "",
                confrimPassword: "",
            }}
            validationSchema={validate}
            onSubmit={(values) => console.log(values)}
        >
            {(formik) => (
                <div>
                    <h1 className="my-4 font-weight-bold-display-4">Sign Up</h1>
                    <Form>
                        <TextField
                            label="First Name"
                            name="firstname"
                            type="text"
                        />
                        <TextField
                            label="Last Name"
                            name="lastname"
                            type="text"
                        />
                        <TextField label="Email" name="email" type="email" />
                        <TextField
                            label="Password"
                            name="password"
                            type="password"
                        />
                        <TextField
                            label="Confrim Password"
                            name="confrimPassword"
                            type="password"
                        />

                        <button
                            className="btn btn-primary mt-4 shadow-none"
                            type="submit"
                        >
                            Register
                        </button>
                        <button
                            className="btn btn-outline-danger me-3 mt-4 shadow-none"
                            type="reset"
                        >
                            Cancle
                        </button>
                    </Form>
                </div>
            )}
        </Formik>
    );
}
