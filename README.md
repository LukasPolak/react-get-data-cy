# react-get-data-cy

![checks-status](https://img.shields.io/github/checks-status/LukasPolak/react-get-data-cy/main?style=flat-square) ![workflow/status](https://img.shields.io/github/workflow/status/lukaspolak/react-get-data-cy/CI?style=flat-square) ![codecov](https://img.shields.io/codecov/c/github/lukaspolak/react-get-data-cy?style=flat-square) ![npm bundle size](https://img.shields.io/bundlephobia/min/@lukaspolak/react-get-data-cy?style=flat-square) ![npm](https://img.shields.io/npm/v/@lukaspolak/react-get-data-cy?style=flat-square)

Helper function provides a `data-cy` testing attribute with a value that can match the text content of the react element.

## Motivation

I wanted to have a dynamic `data-cy` testing attribute that can be based on children passed to react element. This package supports `string`, `JSX.Element` and `ReactNode` as `value` i.e. second argument.

## Getting started

To use this package, you only need to install this dependency, import it and invoke the `getDataCy` function, e.g.:

```tsx
import { getDataCy } from '@lukaspolak/react-getDataCy'

export const FancyComponent: FC = ({ children }) => {
  return <div {...getDataCy('fancy component', children)}>{children}</div>
}
```

### Install

```bash
npm install @lukaspolak/react-get-data-cy
```

or

```bash
yarn add @lukaspolak/react-get-data-cy
```

## Documentation

This package works well with [babel-plugin-react-remove-properties](https://www.npmjs.com/package/babel-plugin-react-remove-properties). To configure it, update `.babelrc` file.

```jsonc
{
  //...
  "env": {
    "production": {
      "plugins": [["react-remove-properties", { "properties": ["data-cy"] }]]
    }
  }
  //...
}
```

## Contributing

Please read the [Contribution guidelines](.github/CONTRIBUTING.md) to start with your awesome contributions!

## Why the library is prefixed with `@lukaspolak/`

There are a lot of similar libraries/packages on [GitHub](https://github.com/features/packages) and [npm](https://www.npmjs.com/), that can do the same. I wanted to enhance my programming skills, and I didn't want to find a unique name for the package.

## INITIALIZATION TODO

- [ ] remove `INITIALIZATION TODO` section
- [ ] replace quoted text in `README.md` file
