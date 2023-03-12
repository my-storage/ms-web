import { Show } from 'solid-js';
import { ParentComponent, JSX } from 'solid-js';

import { HiOutlineX } from 'solid-icons/hi';

type InputProps = JSX.IntrinsicElements['input'] & {
  label?: string;
  leftElement?: JSX.Element;
  rightElement?: JSX.Element;
  isCleanable?: boolean;
};

// TODO Adicionar validação para também somente aparecer botão de clean quando ouver valor no input

export const Input: ParentComponent<InputProps> = (props) => {
  return (
    <div class="flex flex-col w-full max-w-lg">
      <Show when={!!props.label}>
        <label for={props.id} class="font-semibold text-sm text-slate-900">
          {props.label}
        </label>
      </Show>
      <div class="w-full h-11 border-violet-300 border flex px-2 rounded-lg">
        <Show when={!!props.leftElement}>
          <div class="flex h-full items-center justify-center w-12">{props.leftElement}</div>
        </Show>
        <input {...props} class="w-full h-full outline-none text-sm" />
        <Show when={props.isCleanable}>
          <button class="flex h-full items-center justify-center w-12">
            <HiOutlineX size={28} color="#c4b5fd" />
          </button>
        </Show>
        <Show when={!!props.rightElement}>
          <div class="flex h-full items-center justify-center w-12">{props.rightElement}</div>
        </Show>
      </div>
    </div>
  );
};
