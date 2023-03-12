import { mergeProps, ParentComponent } from 'solid-js';

interface SpinnerProps {
  size?: 'small' | 'medium' | 'large';
  color?: string;
}

export const Spinner: ParentComponent<SpinnerProps> = (_props) => {
  const props = mergeProps({ size: 'small', color: 'white' }, _props);

  return (
    <div class="flex items-center justify-center">
      <div
        class="
        inline-block
        rounded-full
        border-transparent
        animate-spin
      "
        classList={{
          'w-6': props.size === 'small',
          'h-6': props.size === 'small',
          'w-12': props.size === 'medium',
          'h-12': props.size === 'medium',
          'w-18': props.size === 'large',
          'h-18': props.size === 'large',
        }}
        style={{
          'border-width': '3px',
          'animation-duration': '750ms',
          'border-top-color': props.color,
          'border-left-color': props.color,
          'border-bottom-color': props.color,
        }}
      />
    </div>
  );
};
