import { Spinner } from '@components/Spinner';
import { ParentComponent, JSX, Show } from 'solid-js';

type ButtonProps = JSX.IntrinsicElements['button'] & {
  variant?: string;
  loading?: boolean;
};

export const Button: ParentComponent<ButtonProps> = (props) => {
  return (
    <div class="flex flex-col w-full max-w-lg">
      <button
        {...props}
        class="border rounded-sm bg-blue-500 h-11 text-white text-sm font-semibold transition-colors flex items-center justify-center"
      >
        <Show when={!props.loading} fallback={<Spinner />}>
          {props.children}
        </Show>
      </button>
    </div>
  );
};
