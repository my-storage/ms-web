import { Component } from 'solid-js';
import { A } from 'solid-start';

import { Input } from '@modules/Auth/components/Input';
import { Button } from '@modules/Auth/components/Button';

export const SignUp: Component = () => {
  return (
    <>
      <div class="flex flex-col justify-start items-start mb-8 w-full">
        <img src="logo+name.svg" class="w-36" />
        <h1 class="text-xl mt-4">
          Cria sua conta e tenha <br />
          acesso ao seu <strong>storage pessoal</strong>
        </h1>
      </div>

      <Input label="Nome completo" name="name" />
      <div class="mt-5" />
      <Input label="Email" name="email" />
      <div class="mt-5" />
      <Input label="Senha" name="password" type="password" />
      <div class="mt-10" />
      <Button>Entrar</Button>

      <div class="flex justify-between w-full mt-4">
        <A href="/login" class="text-blue-500 font-medium text-xs">
          Já possui uma conta?
        </A>
        <A href="/password-recovery" class="text-blue-500 font-medium text-xs">
          Esqueceu sua senha?
        </A>
      </div>
    </>
  );
};
