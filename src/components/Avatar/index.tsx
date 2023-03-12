import { ParentComponent } from 'solid-js';

interface AvatarProps {
  userName: string;
}

export const Avatar: ParentComponent<AvatarProps> = (props) => {
  return (
    <div class="w-8 h-8 rounded-full text-white text-msm font-semibold bg-orange-600 flex items-center justify-center">
      {props.userName[0]}
    </div>
  );
};
