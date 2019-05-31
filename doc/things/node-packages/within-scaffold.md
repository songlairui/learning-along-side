# 包机制在工程化中使用场景

## 场景问题

1. 

    node 8.2.1 的 docker 中, 使用最低要求 8.6 的程序, 怎么办?

答: 使用 `yarn add node@8`

使用效果:
```bash
$ ./node_modules/.bin/node -v
v8.15.0
```
