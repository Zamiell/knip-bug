# knip-bug

This repository shows that Knip is bugged with Bun.

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
src/foo.test.ts
```

However, this is a bug, because the "package.json" file is as follows:

```json
{
  "name": "knip-bug",
  "type": "module",
  "scripts": {
    "test": "bun test"
  },
  "dependencies": {
    "@types/bun": "^1.2.10",
    "knip": "5.50.5",
    "typescript": "5.8.3"
  }
}
```

(Running `bun test` automatically uses the "src/foo.test.ts" file. Try it yourself to see.)
