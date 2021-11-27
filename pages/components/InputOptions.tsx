type InputOptionsProps = {
  id: string;
  label: string;
  required: boolean;
  options: [
    {
      value: string;
      label?: string;
    }
  ];
};

export function InputOptions(props: InputOptionsProps) {
  return (
    <section>
      <label htmlFor={props.id}>{props.label}</label>

      <div>
        {props.options.map((option) => (
          <span key={props.id + option.value}>
            <input
              type="radio"
              id={props.id + option.value}
              name={props.id}
              value={option.value}
              required={props.required}
            />

            <label htmlFor={props.id + option.value}>
              {option.label || option.value}
            </label>
          </span>
        ))}
      </div>
    </section>
  );
}
