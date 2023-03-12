import { Component, Match, Switch } from 'solid-js';
import { BsFiletypePdf, BsFiletypePng } from 'solid-icons/bs';
import { HiOutlineDotsVertical } from 'solid-icons/hi';

import { File } from '@modules/Dashboard/pages/Dashboard';

interface FileCardProps {
  file: File;
}

export const FileCard: Component<FileCardProps> = (props) => {
  return (
    <div class="border h-60 flex flex-col">
      <header class="flex items-center justify-between">
        <div>
          <Switch>
            <Match when={props.file.mime === 'pdf'}>
              <BsFiletypePdf />
            </Match>
            <Match when={props.file.mime === 'png'}>
              <BsFiletypePng />
            </Match>
          </Switch>
        </div>
        <span class="text-sm text-slate-900">{props.file.name}</span>

        <HiOutlineDotsVertical />
      </header>

      <main>{/*  */}</main>

      <footer>{/*  */}</footer>
    </div>
  );
};
