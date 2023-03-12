import { ParentComponent } from 'solid-js';

export const AuthLayout: ParentComponent = (props) => {
  return (
    <section class="h-full w-full flex flex-1 items-center justify-center">
      <main class="h-full flex flex-1 items-center justify-center flex-col p-6 max-w-sm sm:max-w-md">
        {props.children}
      </main>
    </section>
  );
};
