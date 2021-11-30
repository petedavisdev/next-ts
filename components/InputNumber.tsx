type InputNumberProps = {
  id: string;
  children: JSX.Element | string;
  required: boolean;
  pattern?: string;
  minLength?: number;
  maxLength?: number;
};

export function InputNumber(props: InputNumberProps) {
  return (
    <section>
      <label htmlFor={props.id}>
        {props.children} {!props.required && <small>(optional)</small>}
      </label>

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
