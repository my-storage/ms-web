import { ParentComponent, JSX } from 'solid-js';

type CheckBoxProps = JSX.IntrinsicElements['input'] & {
  label?: string;
};

export const CheckBox: ParentComponent<CheckBoxProps> = (props) => {
  return (
    <div class="flex w-full max-w-lg">
      <input {...props} type="checkbox" class="mr-1" />
      <label for={props.id} class="font-medium text-xs text-slate-900">
        {props.label}
      </label>
    </div>
  );
};
