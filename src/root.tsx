// @refresh reload
import {
  Html,
  Head,
  Body,
  Meta,
  Link,
  Routes,
  FileRoutes,
  Scripts,
  ErrorBoundary,
} from 'solid-start';
import { Suspense } from 'solid-js';

import '@shared/styles/Global.css';

export default function Root() {
  return (
    <Html lang="en">
      <Head>
        <Meta charset="utf-8" />
        <Meta name="viewport" content="width=device-width, initial-scale=1" />
        <Link rel="icon" type="image/x-icon" href="/logo.svg" />
        <Link rel="stylesheet" href="/fonts/fonts.css" />
      </Head>
      <Body>
        <ErrorBoundary>
          <Suspense>
            <Routes>
              <FileRoutes />
            </Routes>
          </Suspense>
        </ErrorBoundary>
        <Scripts />
        <div id="portal" />
      </Body>
    </Html>
  );
}
