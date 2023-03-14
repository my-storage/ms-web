/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { ParentComponent } from 'solid-js';
import { Portal } from 'solid-js/web';

export const MainLayout: ParentComponent = (props) => {
  return (
    <>
      <section class="h-full w-full flex flex-1 items-center justify-center">
        <main class="h-full w-full px-4 max-w-sm sm:max-w-md">{props.children}</main>
      </section>
      <Portal mount={document.getElementById('portal')!}>
        <div
          class="flex items-center justify-around fixed bottom-0 w-full h-16 border bg-white"
          style={{ 'box-shadow': '0px -2px 5px 0px rgb(0 0 0 / 0.05)' }}
        >
          <button>1</button>
          <button>2</button>
          <button>3</button>
        </div>
      </Portal>
    </>
  );
};
