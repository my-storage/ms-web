import { Component } from 'solid-js';
import { A } from 'solid-start';

import { Input } from '@modules/Auth/components/Input';
import { Button } from '@modules/Auth/components/Button';
import { CheckBox } from '@modules/Auth/components/CheckBox';

export const Login: Component = () => {
  return (
    <section class="h-full w-full flex flex-1 items-center justify-center">
      <main class="h-full flex flex-1 items-center justify-center flex-col p-6 max-w-sm sm:max-w-md">
        <div class="flex flex-col justify-start items-start mb-8 w-full">
          <img src="logo+name.svg" class="w-36" />
          <h1 class="text-xl mt-4">
            Faça o login acesso <br />
            no seu <strong>storage pessoal</strong>
          </h1>
        </div>

        <Input label="Email" name="email" />
        <div class="mt-5" />
        <Input label="Senha" name="password" type="password" />
        <div class="mt-2" />
        <CheckBox label="Lembre-se de meu email" />
        <div class="mt-10" />
        <Button>Entrar</Button>

        <div class="flex justify-between w-full mt-4">
          <A href="#" class="text-blue-500 font-medium text-xs">
            Esqueceu sua senha?
          </A>
          <A href="#" class="text-blue-500 font-medium text-xs">
            Criar uma conta
          </A>
        </div>
      </main>
    </section>
  );
};
