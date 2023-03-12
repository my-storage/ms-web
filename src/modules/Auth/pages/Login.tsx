import { Component } from 'solid-js';
import { A } from 'solid-start';

import { Input } from '@modules/Auth/components/Input';
import { Button } from '@modules/Auth/components/Button';
import { CheckBox } from '@modules/Auth/components/CheckBox';

export const Login: Component = () => {
  return (
    <>
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
        <A href="/password-recovery" class="text-blue-500 font-medium text-xs">
          Esqueceu sua senha?
        </A>
        <A href="/sign-up" class="text-blue-500 font-medium text-xs">
          Criar uma conta
        </A>
      </div>
    </>
  );
};
