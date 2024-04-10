# farm-plugin-remove-console

Remove all console.log in the production environment .

## feature options
- [x] include
- [x] exclude
- [ ] customRegex

## 
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
