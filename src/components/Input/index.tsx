import { ParentComponent, JSX } from 'solid-js';

type InputProps = JSX.IntrinsicElements['input'] & {
  label?: string;
};

export const Input: ParentComponent<InputProps> = (props) => {
  return (
    <div class="flex flex-col w-full max-w-lg">
      <label for={props.id} class="font-semibold text-sm text-slate-900">
        {props.label}
      </label>
      <input {...props} class="w-full h-8 border-violet-300 border outline-none px-2 text-sm" />
    </div>
  );
};
