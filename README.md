<div align="center">
  <a href="https://github.com/jellekuipers/kolm-start">
    <img src="public/favicon.svg" alt="Logo" width="80" height="80">
  </a>

  <h3 align="center">kolm start</h3>

  <p align="center">
    A very minimal TanStack Start starter with tRPC, Drizzle ORM, better-auth and TailwindCSS
    <br />
    <a href="https://kolm-start.vercel.app">View Demo</a>
    ·
    <a href="https://github.com/jellekuipers/kolm-start/issues/new?labels=bug">Report Bug</a>
    ·
    <a href="https://github.com/jellekuipers/kolm-start/issues/new?labels=feature-request">Request Feature</a>
  </p>
</div>

## About The Project

A very minimal `@tanstack/react-start` starter with `tRPC`, `drizzle-orm`, `better-auth` and `tailwindcss`, based on the examples from the official docs.

Find the tRPC integration example [here](https://github.com/trpc/trpc/tree/next/examples/tanstack-start) and the TanStack Start examples [here](https://github.com/TanStack/router/tree/main/examples/react).

Please be aware that `@tanstack/react-start` is still in beta, so things might be subject to change.

Check out <a href="https://github.com/jellekuipers/kolm-start-admin">kolm-start-admin</a>, for a `@tanstack/react-start` + `better-auth` admin starter, with `drizzle-orm`, `tRPC`, `@radix-ui/themes`.

## Getting Started

### Prerequisites

```sh
npm install npm@latest -g
```

### Installation

1. Clone the repo, or use the template
   ```sh
   git clone https://github.com/jellekuipers/kolm-start.git
   ```
2. Change git remote url to avoid accidental pushes to base project
   ```sh
   git remote set-url origin github_username/repo_name
   git remote -v # confirm the changes
   ```
3. Install NPM packages
   ```sh
   npm install
   ```
4. Connect to your database in your `.env` and set base URL for `better-auth`
   ```sh
   DATABASE_URL=
   BETTER_AUTH_URL=
   ```
5. Initialize database

   ```sh
   npm run db:push
   ```

6. Start the dev server
   ```sh
   npm run dev
   ```

## Roadmap

- [ ] Typesafe environment variables

See the [open issues](https://github.com/jellekuipers/kolm-start/issues) for a full list of proposed features (and known issues).

## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/amazing-feature`)
3. Commit your Changes (`git commit -m 'Add some amazing-feature'`)
4. Push to the Branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## Acknowledgments

- [TanStack Start](https://tanstack.com/start/latest)
- [dotnize - tanstarter](https://github.com/dotnize/tanstarter)
- [tRPC](https://trpc.io/docs)
- [Drizzle ORM](https://orm.drizzle.team/)
- [better-auth](https://www.better-auth.com/)
- [TailwindCSS](https://tailwindcss.com/docs/v4-beta)
- [create-t3-app](https://github.com/t3-oss/create-t3-app)
- [Best-README-Template](https://github.com/othneildrew/Best-README-Template)
