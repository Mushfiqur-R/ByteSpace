import * as React from "react";
import { useId, useState } from "react";

export interface RegisterFormValues {
  fullName: string;
  email: string;
  password: string;
}

export interface RegisterCardProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, "onSubmit"> {
  /** Called with the form values when the form is submitted */
  onSubmit?: (values: RegisterFormValues) => void;
  /** Called when the "Login" button is clicked */
  onLoginClick?: () => void;
}

interface FieldProps {
  label: string;
  type: React.HTMLInputTypeAttribute;
  name: keyof RegisterFormValues;
  value: string;
  placeholder: string;
  autoComplete?: string;
  onChange: (value: string) => void;
}

const Field = ({ label, type, name, value, placeholder, autoComplete, onChange }: FieldProps) => {
  const id = useId();

  return (
    <div className="flex w-full flex-col items-start gap-2">
      <label htmlFor={id} className="text-label-s text-shuttle-gray-950">
        {label}
      </label>
      <input
        id={id}
        name={name}
        type={type}
        value={value}
        placeholder={placeholder}
        autoComplete={autoComplete}
        required
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => onChange(e.target.value)}
        className="h-13 w-full rounded-xl border border-shuttle-gray-100 bg-white px-6 py-3 text-body-l text-shuttle-gray-950 outline-hidden transition-colors placeholder:text-shuttle-gray-400 focus:border-persian-blue-800"
      />
    </div>
  );
};

export const RegisterCard = ({
  onSubmit,
  onLoginClick,
  className = "",
  ...props
}: RegisterCardProps) => {
  const [values, setValues] = useState<RegisterFormValues>({
    fullName: "",
    email: "",
    password: "",
  });

  const setField = (key: keyof RegisterFormValues) => (value: string) =>
    setValues((prev) => ({ ...prev, [key]: value }));

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit?.({ ...values, fullName: values.fullName.trim(), email: values.email.trim() });
  };

  return (
    <div
      className={`flex w-full max-w-xl flex-col items-center gap-30 rounded-3xl bg-white px-16 pb-13 pt-15 ${className}`}
      {...props}
    >
      <form onSubmit={handleSubmit} className="flex w-full flex-col items-start gap-10">
        {/* Heading */}
        <div className="flex w-full flex-col items-start">
          <p className="text-body-l text-persian-blue-800">Create an Account</p>
          <h2 className="font-poppins text-heading-m text-shuttle-gray-950">Welcome to ByteSpace</h2>
        </div>

        {/* Fields + submit */}
        <div className="flex w-full flex-col items-end gap-6">
          <Field
            label="Full Name"
            type="text"
            name="fullName"
            value={values.fullName}
            placeholder="Jamie Davis"
            autoComplete="name"
            onChange={setField("fullName")}
          />
          <Field
            label="Email"
            type="email"
            name="email"
            value={values.email}
            placeholder="designer@example.com"
            autoComplete="email"
            onChange={setField("email")}
          />
          <Field
            label="Password"
            type="password"
            name="password"
            value={values.password}
            placeholder="********"
            autoComplete="new-password"
            onChange={setField("password")}
          />

          <button
            type="submit"
            className="flex h-11.5 cursor-pointer items-center justify-center rounded-3xl bg-electric-lime-400 px-6 py-3 text-label-l text-shuttle-gray-950 transition hover:brightness-95"
          >
            Continue
          </button>
        </div>
      </form>

      {/* Login */}
      <div className="flex items-start gap-1 text-body-m">
        <span className="text-shuttle-gray-700">Already have an account?</span>
        <button
          type="button"
          onClick={onLoginClick}
          className="cursor-pointer text-persian-blue-800 transition-opacity hover:opacity-80"
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default RegisterCard;