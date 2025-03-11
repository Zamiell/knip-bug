# knip-bug

This repository showcases a bug with Knip and Bun.

Steps to reproduce:

```sh
git clone git@github.com:Zamiell/knip-bug.git
cd knip-bug
bun install
bunx knip
```

It will have the following output:

```txt
Unused files (1)
scripts/lint.ts
```

However, this is a bug, because the "package.json" file is as follows:

```json
{
  "name": "knip-bug",
  "scripts": {
    "lint": "bun run ./scripts/lint.ts"
  },
  "type": "commonjs",
  "dependencies": {
    "knip": "^5.45.0"
  }
}
```
