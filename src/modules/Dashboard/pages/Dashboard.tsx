import { For, Match, Switch } from 'solid-js';

import {
  HiOutlineSearch,
  HiOutlineBell,
  HiSolidDocumentDuplicate,
  HiOutlineChevronRight,
  HiOutlineViewGrid,
} from 'solid-icons/hi';
import { BiRegularImages } from 'solid-icons/bi';
import { BiSolidVideos } from 'solid-icons/bi';
import { FaSolidChartPie } from 'solid-icons/fa';
import { AiOutlineUnorderedList } from 'solid-icons/ai';
import { FaSolidFolder } from 'solid-icons/fa';

import { Spinner } from '@components/Spinner';

export interface Item {
  name: string;
  mime?: string;
  createdAt: Date;
  updatedAt?: Date;
}

const files: Item[] = [
  {
    name: 'O Show de Truman.mkv',
    mime: 'mkv',
    createdAt: new Date(),
  },
  {
    name: 'legendas',
    createdAt: new Date('2023-01-01'),
    updatedAt: new Date(),
  },
  {
    name: 'Entrevista com o vampiro.mp4',
    mime: 'mp4',
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    name: 'Um Dia de Fúria.avi',
    mime: 'avi',
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    name: 'Advogado do Diabo.mp4',
    mime: 'mp4',
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    name: 'Advogado do Diabo.mp4',
    mime: 'mp4',
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    name: 'Advogado do Diabo.mp4',
    mime: 'mp4',
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    name: 'Advogado do Diabo.mp4',
    mime: 'mp4',
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    name: 'Advogado do Diabo.mp4',
    mime: 'mp4',
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    name: 'Advogado do Diabo.mp4',
    mime: 'mp4',
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    name: 'Advogado do Diabo.mp4',
    mime: 'mp4',
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    name: 'Advogado do Diabo.mp4',
    mime: 'mp4',
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    name: 'Advogado do Diabo.mp4',
    mime: 'mp4',
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    name: 'Advogado do Diabo.mp4',
    mime: 'mp4',
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    name: 'Advogado do Diabo.mp4',
    mime: 'mp4',
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    name: 'Advogado do Diabo.mp4',
    mime: 'mp4',
    createdAt: new Date(),
    updatedAt: new Date(),
  },
];

export function Dashboard() {
  return (
    <>
      <Header />
      <FiletypeMenu />

      <main class="spy-3">
        <FileList />
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

function FileList() {
  return (
    <main class="flex flex-col justify-center w-full h-full">
      <header class="flex items-center justify-center mb-2">
        <ul class="flex items-center justify-center">
          <li class="text-xs text-slate-400 mr-2">Meus Arquivos</li>
          <HiOutlineChevronRight size={14} />
          <li class="text-xs text-slate-400 mx-1">Files</li>
          <HiOutlineChevronRight size={14} />
          <li class="text-xs text-slate-400 ml-1">Anos 90</li>
        </ul>
        <button
          type="button"
          class="border rounded-md w-8 h-8 flex items-center justify-center ml-auto"
        >
          <AiOutlineUnorderedList color="#4f46e5" />
        </button>
        <button
          type="button"
          class="border rounded-md w-8 h-8 flex items-center justify-center ml-2"
        >
          <HiOutlineViewGrid color="#4f46e5" />
        </button>
      </header>
      <For
        each={files}
        fallback={
          <div class="flex items-center justify-center mt-8">
            <Spinner color="#4f46e5" size="medium" />
          </div>
        }
      >
        {(file) => (
          <button
            type="button"
            class="p-2 mt-1 flex items-center justify-start rounded-md transition-colors focus:bg-slate-100"
          >
            <div class="mr-2">
              <Switch>
                <Match when={file.mime}>
                  <BiSolidVideos color="#474140" />
                </Match>
                <Match when={!file.mime}>
                  <FaSolidFolder color="#474140" />
                </Match>
              </Switch>
            </div>
            <span
              class="text-md text-slate-500 font-medium mr-auto"
              classList={{ 'text-slate-800': !file.mime }}
            >
              {file.name}
            </span>
            <HiOutlineChevronRight size={14} />
          </button>
        )}
      </For>
    </main>
  );
}
