import { Field } from "react-final-form";

type Size = "small" | "large";

type Option = {
  value: string;
  label: string;
};

type Props = {
  id: string;
  size?: Size;
  inputName?: string;
  inputType?: "text" | "number" | "select";
  inputPlaceholder?: string;
  selectValues?: Option[];
  minValue?: number;
  initialValue?: string;
  validate?: (value: string) => string;
};

const inputSize: { [key in Size]: string } = {
  small: "sm:w-[140px] w-[240px]",
  large: "sm:w-[300px] w-[504px]",
};

const FormInput = ({
  size = "large",
  inputName,
  id,
  inputType = "text",
  inputPlaceholder,
  selectValues,
  minValue,
  initialValue,
  validate,
}: Props) => {
  if (inputType === "select") {
    return (
      <label htmlFor={id}>
        <h2>{inputName}</h2>
        <Field
          id={id}
          name={id}
          component="select"
          className={inputSize[size]}
          initialValue={initialValue}
        >
          {selectValues?.map((option) => (
            <option value={option.value} key={option.value}>
              {option.label}
            </option>
          ))}
        </Field>
      </label>
    );
  }

  return (
    <label htmlFor={id}>
      <Field name={id} validate={validate}>
        {({ input, meta }) => (
          <div className="flex flex-col">
            <div className="flex justify-between">
              <h2>{inputName}</h2>
            </div>
            <div className="relative">
              <input
                {...input}
                type={inputType}
                min={minValue}
                className={`${inputSize[size]}`}
                placeholder={inputPlaceholder}
                onChange={(e) => {
                  input.onChange(e);
                }}
              />
              {meta.error && meta.touched && typeof meta.error === "string" && (
                <span className="absolute right-3 top-[33px] -translate-y-1/2 transform text-sm text-red">
                  {meta.error}
                </span>
              )}
            </div>
          </div>
        )}
      </Field>
    </label>
  );
};

export default FormInput;
