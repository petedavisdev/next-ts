type InputNumberProps = {
  id: string;
  label: string;
  required: boolean;
  pattern?: string;
  minLength?: number;
  maxLength?: number;
};

export function InputNumber(props: InputNumberProps) {
  return (
    <section>
      <label htmlFor={props.id}>{props.label}</label>

      <input
        type="text"
        id={props.id}
        name={props.id}
        required={props.required}
        pattern={props.pattern}
        minLength={props.minLength}
        inputMode="numeric"
        placeholder=" "
      />
    </section>
  );
}
