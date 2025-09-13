# Knip GitHub Actions Bug

This repository showcases a bug with GitHub Actions.

Steps to reproduce:

```sh
git clone git@github.com:Zamiell/knip-bug.git
cd knip-bug
npm ci
npx knip
```

You will get the following false positive:

```txt
Unlisted binaries (1)
ci  .github/workflows/setup/action.yml
```
