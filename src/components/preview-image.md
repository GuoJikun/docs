# fox-preview-image 图片预览

## 安装

```bash
npm i fox-preview-image #vue2.x 请使用 @1.x 版本
```

## 使用

```js
// main.js
import { createApp } from "vue";
import App from "./App.vue";

import foxPreviewImage from "fox-preview-image"; // 引入
import "fox-preview-image/lib/style.css";

const app = createApp(App);
// ...

app.use(foxPreviewImage); // 注册组件
```

```html
// App.vue
<script setup>
    import { ref } from "vue";
    const visible = ref(false);
    const visible = ref("");
</script>
<template>
    <for-preview-image v-model="visible" :src="src"></for-preview-image>
</template>
```

## Attrs

| 属性                | 说明                                     | 参数类型               | 默认值                                                          |
| ------------------- | ---------------------------------------- | ---------------------- | --------------------------------------------------------------- |
| src                 | 预览图片的地址                           | `string/Array<string>` |
| model-value/v-model | 是否显示预览窗口                         | `boolean`              | false                                                           |
| initial-index       | 默认显示图片的下标(有多张图片时可以设置) | `number`               | 0                                                               |
| z-index             | 预览窗口的层级                           | `number`               | 9000                                                            |
| show-toolbar        | 是否显示底部 toolbar                     | `boolean`              | `true`                                                          |
| enable-teleport     | 启用 teleport 功能                       | `boolean`              | `false`                                                         |
| append-to           | 控制弹窗的插入位置                       | `HtmlElement/string`   | -                                                               |
| layout              | 工具栏的布局                             | `string`               | `zoomOut,zoomIn,scale,position,rotateLeft,rotateRight,download` |

## 示例

### 单张图片

当图片只有一张时，不显示左右切换按钮

<ivy-button type="primary" @click="showModuleA">
点击查看预览界面-没有切换按钮
</ivy-button>
<ClientOnly>
<fox-preview-image v-model="moduleA.visible" :src="moduleA.src"></fox-preview-image>
</ClientOnly>

:::details 点击查看示例代码

```vue
<template>
    <ivy-button type="primary" @click="showModuleA"
        >点击查看预览界面</ivy-button
    >
    <fox-preview-image v-model="moduleA.visible" :src="moduleA.src" />
</template>
<script setup>
import { reactive } from "vue";
import imgA from "/images/preview-image-1.jpg";

const moduleA = reactive({
    visible: false,
    src: [imgA],
});

const showModuleA = () => {
    moduleA.visible = true;
};
</script>
```

:::

### 多张图片

通过 `initial-index` 属性设置默认显示第二张图片

<ivy-button type="primary" @click="showModuleB">点击查看预览界面</ivy-button>
<ClientOnly>
<fox-preview-image v-model="moduleB.visible" :src="moduleB.src" :initial-index="1"></fox-preview-image>
</ClientOnly>

:::details 点击查看示例代码

```vue
<template>
    <ivy-button type="primary" @click="showModuleB"
        >点击查看预览界面</ivy-button
    >
    <fox-preview-image
        v-model="moduleB.visible"
        :src="moduleB.src"
        :initial-index="1" />
</template>
<script setup>
import { reactive } from "vue";
import imgA from "/images/preview-image-1.jpg";
import imgB from "/images/preview-image-2.png";
import imgC from "/images/preview-image-3.png";

const moduleB = reactive({
    visible: false,
    src: [imgA],
});

const showModuleB = () => {
    moduleC.visible = true;
};
</script>
```

:::

### 自定义底部工具栏

通过 `layout` 属性设置底部要显示的工具和顺序

<ivy-button type="primary" @click="showModuleC">点击查看预览界面</ivy-button>
<ClientOnly>
<fox-preview-image v-model="moduleC.visible" :src="moduleC.src" layout="zoomIn, zoomOut, position, scale"></fox-preview-image>
</ClientOnly>

:::details 点击查看示例代码

```vue
<template>
    <ivy-button type="primary" @click="showModuleC"
        >点击查看预览界面</ivy-button
    >
    <fox-preview-image
        v-model="moduleC.visible"
        :src="moduleC.src"
        layout="zoomIn, zoomOut, position, scale" />
</template>
<script setup>
import { reactive } from "vue";
import imgA from "/images/preview-image-1.jpg";

const moduleC = reactive({
    visible: false,
    src: [imgA],
});

const showModuleC = () => {
    moduleC.visible = true;
};
</script>
```

:::

## 和 elementPlus 公用 ZIndex

> `element-plus` 导出了 `useZIndex` hook

```vue
<script setup>
import { ref } from "vue";
import { useZIndex } from "element";
const { nextZIndex } = useZIndex();

const zIndex = ref(nextZIndex());
const openFoxPreviewImage = () => {
    // ...
    zIndex.value = nextZIndex();
};
</>
<template>
    <fox-preview-image :z-index="zIndex"></fox-preview-image>
</template>
```

<script setup>
import { reactive } from 'vue'
import imgA from '/images/preview-image-1.jpg'
import imgB from '/images/preview-image-2.png'
import imgC from '/images/preview-image-3.png'
import foxPreviewImage from 'fox-preview-image/lib/preview-image.mjs'
import "fox-preview-image/lib/style.css";

const moduleA = reactive({
    visible: false,
    src: [imgA]
})

const moduleB = reactive({
    visible: false,
    src: [imgA, imgB, imgC]
})

const moduleC = reactive({
    visible: false,
    src: [imgA]
})

const showModuleA = () => {
    moduleA.visible = true
}

const showModuleB = () => {
    moduleB.visible = true
}

const showModuleC = () => {
    moduleC.visible = true
}
</script>
