import { ParentComponent } from 'solid-js';

export const MainLayout: ParentComponent = (props) => {
  return (
    <section class="h-full w-full flex flex-1 items-center justify-center">
      <main class="h-full w-full px-4 max-w-sm sm:max-w-md">{props.children}</main>
    </section>
  );
};
