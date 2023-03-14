import { For, createSignal } from 'solid-js';
import { HiOutlineMenu } from 'solid-icons/hi';

import { Input } from '@components/Input';
import { Avatar } from '@components/Avatar';
import { FileCard } from '@modules/Dashboard/components/FileCard';

enum Tabs {
  FILES = 'files',
  FOLDERS = 'folders',
}

export interface File {
  name: string;
  mime: string;
  author: string;
  createdAt: Date;
  updatedAt?: Date;
}

const files: File[] = [
  {
    name: 'Documento PDF.pdf',
    mime: 'pdf',
    author: 'Dhaniel',
    createdAt: new Date(),
  },
  {
    name: 'Imagem de carro.png',
    mime: 'png',
    author: 'Felipe',
    createdAt: new Date('2023-01-01'),
    updatedAt: new Date(),
  },
];

export function Dashboard() {
  const [currentTab, setCurrentTab] = createSignal<Tabs>(Tabs.FILES);

  return (
    <section>
      <header class=" px-4 pt-3">
        <Input
          type="text"
          name="search"
          isCleanable={true}
          leftElement={<HiOutlineMenu size={22} />}
          rightElement={<Avatar userName="D" />}
        />

        <ul class="flex border-b border-gray-100">
          <li class="flex-1">
            <button class="relative block p-4 w-full" onClick={() => setCurrentTab(Tabs.FILES)}>
              <span
                class="absolute inset-x-0 -bottom-px h-px w-full"
                classList={{
                  'bg-help-purple ': currentTab() === Tabs.FILES,
                }}
              />

              <div class="flex items-center justify-center gap-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5 flex-shrink-0 text-gray-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
                  />
                </svg>

                <span class="text-sm font-medium text-gray-900"> Settings </span>
              </div>
            </button>
          </li>

          <li class="flex-1">
            <button class="relative block p-4 w-full" onClick={() => setCurrentTab(Tabs.FOLDERS)}>
              <span
                class="absolute inset-x-0 -bottom-px h-px w-full"
                classList={{
                  'bg-help-purple ': currentTab() === Tabs.FOLDERS,
                }}
              />

              <div class="flex items-center justify-center gap-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5 flex-shrink-0 text-gray-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
                  />
                </svg>

                <span class="text-sm font-medium text-gray-900"> Settings </span>
              </div>
            </button>
          </li>
        </ul>
      </header>
      <main class="px-4 py-3">
        <For each={files} fallback={<div>Loading...</div>}>
          {(file) => (
            <>
              <FileCard file={file} />
              <div class="mb-3" />
            </>
          )}
        </For>
      </main>
    </section>
  );
}
