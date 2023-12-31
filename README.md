# Troubleshooting:  NodeRequest type for the request. 
The request type has deviated.  Code that expects headers to have .get() on it is breaking.
This code is using `remix-i18next` which parses the header to figure out the locale. This repo uses a fork for a PR https://github.com/sergiodxa/remix-i18next/pull/155 because Vite does not like how the main line package is assembled for ESM.



# remix-template-vite

⚠️ Remix support for Vite is unstable and not recommended for production.

📖 See the [Remix Vite docs][remix-vite-docs] for details on supported features.

## Setup

```shellscript
npx create-remix@nightly --template pcattori/remix-template-vite
```

## Minimal server

Spin up a minimal Vite dev server:

```shellscript
npm run dev
```

Or build your app for production and run it:

```shellscript
npm run build
npm run start
```

## Extensible server

Remix exposes APIs for integrating Vite with a custom server:

```ts
import {
  unstable_createViteServer,
  unstable_loadViteServerBuild,
} from "@remix-run/dev";
```

In this template, we'll use Express but remember that these APIs can be used with _any_ Node-compatible server setup that supports standard middleware.

---

Spin up the Express server as a dev server:

```shellscript
npm run dev:express
```

Or build your app for production and run it:

```shellscript
npm run build
npm run start:express
```

[remix-vite-docs]: https://remix.run/docs/en/dev/future/vite
[extensible-server-pr]: https://github.com/remix-run/remix/pull/7682
