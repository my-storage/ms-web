import { For } from 'solid-js';

import { HiOutlineSearch, HiOutlineBell, HiSolidDocumentDuplicate } from 'solid-icons/hi';
import { BiRegularImages } from 'solid-icons/bi';
import { BiSolidVideos } from 'solid-icons/bi';
import { FaSolidChartPie } from 'solid-icons/fa';

import { FileCard } from '@modules/Dashboard/components/FileCard';

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
  return (
    <>
      <Header />
      <FiletypeMenu />

      <main class="spy-3">
        <For each={files} fallback={<div>Loading...</div>}>
          {(file) => (
            <>
              <FileCard file={file} />
              <div class="mb-3" />
            </>
          )}
        </For>
      </main>
    </>
  );
}

function FiletypeMenu() {
  return (
    <div class="my-4 grid grid-cols-2 grid-rows-2 gap-4">
      <button class="flex items-center p-4 shadow-sm border rounded-md">
        <div class="bg-indigo-100 p-2 rounded-full mr-2">
          <HiSolidDocumentDuplicate color="#4f46e5" />
        </div>
        <div class="flex flex-col items-start">
          <div class="text-slate-400 text-xs font-bold leading-none">890MB</div>
          <div class="text-stone-900 text-sm font-bold leading-none">Documentos</div>
        </div>
      </button>
      <button class="flex items-center p-4 shadow-sm border rounded-md">
        <div class="bg-rose-100 p-2 rounded-full mr-2">
          <BiRegularImages color="#be123c" />
        </div>
        <div class="flex flex-col items-start">
          <div class="text-slate-400 text-xs font-bold leading-none">2.9GB</div>
          <div class="text-stone-900 text-sm font-bold leading-none">Imagens</div>
        </div>
      </button>
      <button class="flex items-center p-4 shadow-sm border rounded-md">
        <div class="bg-orange-100 p-2 rounded-full mr-2">
          <BiSolidVideos color="#c2410c" />
        </div>
        <div class="flex flex-col items-start">
          <div class="text-slate-400 text-xs font-bold leading-none">1.3GB</div>
          <div class="text-stone-900 text-sm font-bold leading-none">Vídeos</div>
        </div>
      </button>
      <button class="flex items-center p-4 shadow-sm border rounded-md">
        <div class="bg-slate-100 p-2 rounded-full mr-2">
          <FaSolidChartPie color="#334155" />
        </div>
        <div class="flex flex-col items-start">
          <div class="text-slate-400 text-xs font-bold leading-none">798MB</div>
          <div class="text-stone-900 text-sm font-bold leading-none">Outros</div>
        </div>
      </button>
    </div>
  );
}

function Header() {
  return (
    <header class="pt-3">
      <main class="flex items-center justify-between">
        <div>
          <span class="text-help-gray text-xs">Bom dia,</span>
          <br />
          <strong class="text-stone-900 text-lg">Dhaniel</strong>
        </div>
        <div>
          <button type="button" class="border rounded-full p-2">
            <HiOutlineSearch size={20} />
          </button>
          <button type="button" class="border rounded-full p-2 ml-2">
            <HiOutlineBell size={20} />
          </button>
        </div>
      </main>

      <div class="bg-slate-200 flex items-center justify-center mt-4 w-full h-14 p-[6px] rounded-full">
        <button
          type="button"
          class="w-full h-full rounded-full text-sm shadow-sm"
          classList={{
            'bg-white': true,
            'font-bold': true,
            'shadow-sm': true,
            'text-stone-400': false,
          }}
        >
          Meus Arquivos
        </button>
        <button
          type="button"
          class="w-full h-full rounded-full text-sm"
          classList={{
            'bg-white': false,
            'font-bold': false,
            'shadow-sm': false,
            'text-stone-400': true,
          }}
        >
          Compartilhados
        </button>
      </div>
    </header>
  );
}
