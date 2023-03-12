import { createSignal, For } from 'solid-js';
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
      <header class="border border-b-2 border-blue-50 px-4 pt-3">
        <Input
          type="text"
          name="search"
          isCleanable={true}
          leftElement={<HiOutlineMenu size={22} />}
          rightElement={<Avatar userName="D" />}
        />

        <nav class="flex flex-row w-full h-full justify-around mt-3">
          <button
            type="button"
            class=" h-full pb-2 transition-colors text-sm"
            classList={{
              'border-help-purple border-b-2': currentTab() === Tabs.FILES,
            }}
            onClick={() => setCurrentTab(Tabs.FILES)}
          >
            Arquivos
          </button>
          <button
            type="button"
            class="h-full pb-2 transition-colors text-sm"
            classList={{ 'border-help-purple border-b-2': currentTab() === Tabs.FOLDERS }}
            onClick={() => setCurrentTab(Tabs.FOLDERS)}
          >
            Pastas
          </button>
        </nav>
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
