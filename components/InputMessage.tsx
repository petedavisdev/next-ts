type InputMessageProps = {
  id: string;
  children: JSX.Element | string;
  required: boolean;
  rows?: number;
  minLength?: number;
  maxLength?: number;
};

export function InputMessage(props: InputMessageProps) {
  return (
    <section>
      <label htmlFor={props.id}>{props.children}</label>

      <textarea
        name={props.id}
        id={props.id}
        required={props.required}
        rows={props.rows}
        minLength={props.minLength}
        maxLength={props.maxLength}
        placeholder=" "
      ></textarea>
    </section>
  );
}
