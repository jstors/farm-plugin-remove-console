# farm-plugin-remove-console

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
