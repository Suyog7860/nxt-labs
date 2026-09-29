# NXT LABS Digital Services

## Run locally

Install dependencies and start the Next.js development server:

```sh
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Production build

```sh
npm run lint
npm run build
```

Set `NEXT_PUBLIC_SITE_URL` to the canonical production URL before deployment. The default `https://nxtlabs.example` value is an intentional placeholder and should be replaced.

The contact form validates the inquiry and opens a prefilled message in the visitor's email application. It does not send data to a server; replace the `mailto:` handoff in `src/components/ContactForm.tsx` with an API/email integration when one is configured.

Portfolio entries are explicitly presented as demo concepts, not client work.
