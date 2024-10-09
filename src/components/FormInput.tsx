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
};

const inputSize: { [key in Size]: string } = {
  small: "w-[240px]",
  large: "md:w-[250px] w-[504px]",
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
      <Field name={id}>
        {({ input }) => (
          <div>
            <div className="flex justify-between">
              <h2>{inputName}</h2>
            </div>
            <input
              {...input}
              type={inputType}
              min={minValue}
              className={`${inputSize[size]} `}
              placeholder={inputPlaceholder}
              onChange={(e) => {
                input.onChange(e); //final-form's onChange
              }}
            />
          </div>
        )}
      </Field>
    </label>
  );
};

export default FormInput;
