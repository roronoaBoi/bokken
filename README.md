<p align="center">
<img src="roBin/image.png" height="400" width="1000">
</p>

# Ro's Sparring Grounds
This is Ro's holding repository for various scripts and examples for training.

## Git Workflows
```mermaid
flowchart LR
A(Branch created:
'git branch #name#)-->
B(Make changes to
branch)-->
C(Add files to commit:
'git add .')-- Once all
files added -->
D(Stage push:
'git commit -m 'msg'';)-->
E(Push staged to branch:
'git push origin #branch_name#');
```

## Lint code!
This repository utilizes ESList. To install the necessary dependencies, run the following command in the root where the repo was cloned:
```bash
npm i
```

Once installed, use `npx` to run the linter:
```bash
npx eslint
```

Ensure code is linted before submitting a PR!
