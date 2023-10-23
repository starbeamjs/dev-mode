# dev-mode

[![standard-readme compliant](https://img.shields.io/badge/standard--readme-OK-green.svg?style=flat-square)](https://github.com/RichardLitt/standard-readme)

## <center>⚠️🚧⚠️ Under Construction ⚠️🚧⚠️</center>

**This package is currently in a very early stage of development. It is currently being developed for the `starbeam-dev` family of repositories and should probably not be used (yet) outside of that context.**

---

A development dependency that provides scripts that you can run during during development.

It currently contains a single script:

- `dev-tests`: Runs `vitest` from the `tests` directory relative to the current git root.

## Table of Contents

- [Install](#install)
- [Assumptions](#assumptions)
- [Usage](#usage)
- [API](#api)
- [Maintainers](#maintainers)
- [Contributing](#contributing)
- [License](#license)

## Install

```
$ pnpm i -D dev-mode
```

## Assumptions

At the moment, the `dev-mode` script is extremely opinionated and makes the following assumptions:

- Tests are in the `tests` directory relative to the current git root
- Your project uses vitest. The `vitest` dependency is either in a `package.json` directly inside of `tests` or in the repo root.
- Typechecking is done using `vitest typecheck`.

## Usage

Add the following to your `package.json`:

```json
{
  "scripts": {
    "test:specs": "dev-tests"
  }
}
```

If you also want to use `dev-mode` to typecheck your project, add the following to your `package.json`:

```json
{
  "scripts": {
    "test:specs": "dev-tests",
    "test:types": "dev-tests typecheck"
  }
}
```

## API

## Maintainers

[The Starbeam team](https://github.com/starbeamjs/.github/blob/main/TEAM.md).

## Contributing

See [the contributing file](CONTRIBUTING.md)!

PRs accepted.

Small note: If editing the README, please conform to the [standard-readme](https://github.com/RichardLitt/standard-readme) specification.

## License

MIT © 2023 Yehuda Katz
