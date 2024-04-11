# farm-plugin-remove-console

![NPM Version](https://img.shields.io/npm/v/farm-plugin-remove-console)
![GitHub Actions Workflow Status](https://img.shields.io/github/actions/workflow/status/jstors/farm-plugin-remove-console/build.yaml)


Remove all console.log in the production environment .


## Usage 

```shell
pnpm install -D farm-plugin-remove-console
```

```ts

export default defineConfig({
  plugins: [
    [
      'farm-plugin-remove-console',
      {
        // plugin options
        // include: ["./src/**/*"],
      },
    ],
  ],
});

```



## feature options
- [x] include
- [x] exclude
- [ ] customRegex
