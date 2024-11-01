# h5模板，多项目管理模式

**monorepo** 管理项目
**pnpm** 包管理，monorepo必须使用pnpm

### monorepo模式 注意事项
- babel全局生效配置要用 babel.config.json


### 依赖安装
- 安装包到根目录时，记得加上参数 -w，如: pnpm add typescript -wD

### 使用ts
子项目必须显式安装依赖 @vue/cli-plugin-typescript 才可以使用 ts
### 使用tsx
子项目必须显式安装依赖 @vue/cli-plugin-babel，并增加babel.config.js 才能解析tsx
