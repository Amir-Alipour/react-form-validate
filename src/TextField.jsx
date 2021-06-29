import { ErrorMessage, useField } from "formik";

export const TextField = ({ label, ...props }) => {
    const [field, meta] = useField(props);
    return (
        <div className="mb-3">
            <label className="mb-2" htmlFor={field.name}>
                {label}
            </label>
            <input
                id={field.name}
                className={`form-control shadow-none ${
                    meta.touched && meta.error && "is-invalid"
                }`}
                {...field}
                {...props}
                autoComplete="off"
            />
            <ErrorMessage name={field.name} component="div" className="error" />
        </div>
    );
};
