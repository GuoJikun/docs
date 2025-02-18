# Watermark 水印组件

一个使用 vue3 开发水印组件

## 安装

```bash
npm i @jkun/watermark-vue
```

## 使用

```js
import watermark from "@jkun/watermark-vue";
import { createApp } from "vue";
createApp().use(watermark);
```

> 如果引入是 umd 模块则无需手动引入 css（@jkun/watermark-vue/dist/watermark.umd.js）

<!-- Auto Generated Below -->

## 基础用法

只添加 content 即可使用水印组件

<ClientOnly>
<watermark-vue content="测试水印" style="height: 400px;overflow-y: auto" :font="{fontSize: 12}">
    <p>混沌未分天地乱，茫茫渺渺无人见。自从盘古破鸿蒙，开辟从兹清浊辨。</p>
    <p>覆载群生仰至仁，发明万物皆成善。欲知造化会元功，须看西游释厄传。</P>
    <p>盖闻天地之数，有十二万九千六百岁为一元。将一元分为十二会，乃子、丑、寅、卯、辰、巳、午、未、申、酉、戌、亥之十二支也。每会该一万八百岁。且就一日而论：子时得阳气，而丑则鸡鸣；寅不通光，而卯则日出；辰时食后，而巳则挨排；日午天中，而未则西蹉；申时晡而日落酉，戌黄昏而人定亥。譬于大数，若到戌会之终，则天地昏缯而万物否矣。</P>
    <p>再去五千四百岁，交亥会之初，则当黑暗，而两间人物俱无矣，故曰混沌。又五千四百岁，亥会将终，贞下起元，近子之会，而复逐渐开明。邵康节曰：“冬至子之半，天心无改移。一阳初动处，万物未生时。”到此天始有根。</P>
    <p>再五千四百岁，正当子会，轻清上腾，有日有月有星有辰。日月星辰，谓之四象。故曰天开于子。又经五千四百岁，子会将终，近丑之会，而逐渐坚实。《易》曰：“大哉乾元！至哉坤元！万物资生，乃顺承天。”至此，地始凝结。</P>
    <p>再五千四百岁，正当丑会，重浊下凝，有水有火有山有石有土。水火山石土，谓之五形。故曰地辟于丑。又经五千四百岁，丑会终而寅会之初，发生万物。历曰：“天气下降，地气上升；天地交合，群物皆生。”至此，天清地爽，阴阳交合。</p>
</watermark-vue>
</ClientOnly>

```vue
<watermark-vue
    content="测试水印"
    style="height: 400px"
    :font="{ fontSize: 12 }"></watermark-vue>
```

## 设置字体样式

通过修改`font`属性去更改字体相关的配置

<ClientOnly>
<watermark-vue content="测试水印" style="min-height: 400px;overflow-y: auto" :font="{fontSize: 16,color: 'rgba(100,108,255,0.4)',fontStyle: 'italic'}">
    <p>混沌未分天地乱，茫茫渺渺无人见。自从盘古破鸿蒙，开辟从兹清浊辨。</p>
    <p>覆载群生仰至仁，发明万物皆成善。欲知造化会元功，须看西游释厄传。</P>
    <p>盖闻天地之数，有十二万九千六百岁为一元。将一元分为十二会，乃子、丑、寅、卯、辰、巳、午、未、申、酉、戌、亥之十二支也。每会该一万八百岁。且就一日而论：子时得阳气，而丑则鸡鸣；寅不通光，而卯则日出；辰时食后，而巳则挨排；日午天中，而未则西蹉；申时晡而日落酉，戌黄昏而人定亥。譬于大数，若到戌会之终，则天地昏缯而万物否矣。</P>
    <p>再去五千四百岁，交亥会之初，则当黑暗，而两间人物俱无矣，故曰混沌。又五千四百岁，亥会将终，贞下起元，近子之会，而复逐渐开明。邵康节曰：“冬至子之半，天心无改移。一阳初动处，万物未生时。”到此天始有根。</P>
    <p>再五千四百岁，正当子会，轻清上腾，有日有月有星有辰。日月星辰，谓之四象。故曰天开于子。又经五千四百岁，子会将终，近丑之会，而逐渐坚实。《易》曰：“大哉乾元！至哉坤元！万物资生，乃顺承天。”至此，地始凝结。</P>
    <p>再五千四百岁，正当丑会，重浊下凝，有水有火有山有石有土。水火山石土，谓之五形。故曰地辟于丑。又经五千四百岁，丑会终而寅会之初，发生万物。历曰：“天气下降，地气上升；天地交合，群物皆生。”至此，天清地爽，阴阳交合。</p>
</watermark-vue>
</ClientOnly>

```vue
<watermark-vue
    content="测试水印"
    style="min-height: 400px"
    :font="{
        fontSize: 16,
        color: 'rgba(100,108,255,0.4)',
        fontStyle: 'italic',
    }"
    image="/images/watermark.png"></watermark-vue>
```

## 图片水印

通过修改`image`属性去设置图片水印

<ClientOnly>
<watermark-vue content="测试水印" style="height: 400px;overflow-y: auto" :font="{fontSize: 16,color: 'rgba(100,108,255,0.4)',fontStyle: 'italic'}" :width="38" :height="45" image="/images/watermark.png">
    <p>混沌未分天地乱，茫茫渺渺无人见。自从盘古破鸿蒙，开辟从兹清浊辨。</p>
    <p>覆载群生仰至仁，发明万物皆成善。欲知造化会元功，须看西游释厄传。</P>
    <p>盖闻天地之数，有十二万九千六百岁为一元。将一元分为十二会，乃子、丑、寅、卯、辰、巳、午、未、申、酉、戌、亥之十二支也。每会该一万八百岁。且就一日而论：子时得阳气，而丑则鸡鸣；寅不通光，而卯则日出；辰时食后，而巳则挨排；日午天中，而未则西蹉；申时晡而日落酉，戌黄昏而人定亥。譬于大数，若到戌会之终，则天地昏缯而万物否矣。</P>
    <p>再去五千四百岁，交亥会之初，则当黑暗，而两间人物俱无矣，故曰混沌。又五千四百岁，亥会将终，贞下起元，近子之会，而复逐渐开明。邵康节曰：“冬至子之半，天心无改移。一阳初动处，万物未生时。”到此天始有根。</P>
    <p>再五千四百岁，正当子会，轻清上腾，有日有月有星有辰。日月星辰，谓之四象。故曰天开于子。又经五千四百岁，子会将终，近丑之会，而逐渐坚实。《易》曰：“大哉乾元！至哉坤元！万物资生，乃顺承天。”至此，地始凝结。</P>
    <p>再五千四百岁，正当丑会，重浊下凝，有水有火有山有石有土。水火山石土，谓之五形。故曰地辟于丑。又经五千四百岁，丑会终而寅会之初，发生万物。历曰：“天气下降，地气上升；天地交合，群物皆生。”至此，天清地爽，阴阳交合。</p>
</watermark-vue>
</ClientOnly>

```vue
<watermark-vue
    content="测试水印"
    style="height: 400px"
    :font="{
        fontSize: 16,
        color: 'rgba(100,108,255,0.4)',
        fontStyle: 'italic',
    }"
    image="/images/watermark.png"></watermark-vue>
```

:::warning 提示
为保证图片高清且不被拉伸，请设置 width 和 height, 并上传至少两倍的宽高的 logo 图片地址。
:::

## Api

### Props

| prop    | 描述           | 类型   | 默认值     |
| ------- | -------------- | ------ | ---------- |
| content | 内容           | string | string[]   |
| font    | [font](#font)  | object | 见 font    |
| gap     | 间隔           | array  | [100, 100] |
| width   | 宽度           | string | 100%       |
| height  | 高度           | string | 100%       |
| offset  | 偏移           | array  |            |
| rotate  | 水印的旋转角度 | number | -22        |
| zIndex  | 水印的层级     | number | 9          |
| image   | 图片 url       | string |            |

### font

| key        | 描述                              | 类型   | 默认值                  |
| ---------- | --------------------------------- | ------ | ----------------------- |
| fontFamily | 字体，同 css 中的 font-family     | string | PingFang SC, sans-serif |
| fontSize   | 字体大小                          | number | 14                      |
| fontStyle  | 字体样式，同 css 中的 font-style  | string | normal                  |
| color      | 字体颜色                          | string | normal                  |
| fontWeight | 字体粗细，同 css 中的 font-weight | string | normal                  |
