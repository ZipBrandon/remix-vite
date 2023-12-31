import { cssBundleHref } from "@remix-run/css-bundle";
import type { LinksFunction, LoaderFunctionArgs } from "@remix-run/node";
import { useChangeLanguage } from "remix-i18next";
import { useTranslation } from "react-i18next";
import i18next from "~/i18next.server";

import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration, useLoaderData,
} from "@remix-run/react";
import { json } from '@remix-run/node';

export const links: LinksFunction = () => [
  ...(cssBundleHref ? [{ rel: "stylesheet", href: cssBundleHref }] : []),
];
export async function loader({ request }: LoaderFunctionArgs) {
  let locale = await i18next.getLocale(request);
  // const locales = 'poop'
  return json({ locale });
}
export default function App() {
    // Get the locale from the loader
  // let { locale } = useLoaderData<typeof loader>();
  //
  // let { i18n } = useTranslation();
  //
  // // This hook will change the i18n instance language to the current locale
  // // detected by the loader, this way, when we do something to change the
  // // language, this locale will change and i18next will load the correct
  // // translation files
  // useChangeLanguage(locale);

  return (
   // <html lang={locale} dir={i18n.dir()}>
   <html>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <Outlet />
        <ScrollRestoration />
        <LiveReload />
        <Scripts />
      </body>
    </html>
  );
}
