import { Component } from 'solid-js';
import { A } from 'solid-start';

import { Input } from '@modules/Auth/components/Input';
import { Button } from '@modules/Auth/components/Button';

export const PasswordRecover: Component = () => {
  return (
    <section class="h-full w-full flex flex-1 items-center justify-center">
      <main class="h-full flex flex-1 items-center justify-center flex-col p-6 max-w-sm sm:max-w-md">
        <div class="flex flex-col justify-start items-start mb-8 w-full">
          <img src="logo+name.svg" class="w-36" />
          <h1 class="text-xl mt-4">Recuperação de conta</h1>
        </div>

        <span class="text-sm">
          Enviaremos um link por e-email com mais instruções para você redefinir sua senha
        </span>

        <div class="mt-5" />
        <Input label="Email" name="email" />
        <div class="mt-10" />
        <Button>Recuperar</Button>

        <div class="flex justify-between w-full mt-4">
          <A href="/login" class="text-blue-500 font-medium text-xs">
            Já possui uma conta?
          </A>
          <A href="/sign-up" class="text-blue-500 font-medium text-xs">
            Criar uma conta
          </A>
        </div>
      </main>
    </section>
  );
};
