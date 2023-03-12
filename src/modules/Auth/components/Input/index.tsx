import { ParentComponent, JSX } from 'solid-js';

type InputProps = JSX.IntrinsicElements['input'] & {
  label?: string;
};

export const Input: ParentComponent<InputProps> = (props) => {
  return (
    <div class="flex flex-col w-full max-w-lg">
      <label for={props.id} class="font-semibold text-xs text-slate-900">
        {props.label}
      </label>
      <input
        {...props}
        class="w-full h-11 border-blue-100 focus:border-blue-400 border-b outline-none text-sm transition-colors"
      />
    </div>
  );
};
