---
title: Guides 高玩操作
published: 2026-05-20
description: "How to use this blog style and more."
image: "/images/cover.jpeg"
tags: ["Guides"]
category: Guides
draft: false
---
<mark style="background-color:#FFB6C1;padding:4px 10px;border-radius:6px 6px 6px 6px;color:white;font-weight:bold;">一、一键引用该博客的站娘</mark>

---

>你可以在你的博客页脚/头部配置文件中添加此代码
```javascript
<link rel="stylesheet" href="https://bakablog.pages.dev/live2d_dist/waifu.css" />
<script src="https://bakablog.pages.dev/live2d_dist/autoload.js"></script>
```

>在Astro的/src/components/Footer.Astro中
```html
---

import { profileConfig } from "../config";
import { url } from "../utils/url-utils";

const currentYear = new Date().getFullYear();
---

<!--<div class="border-t border-[var(&#45;&#45;primary)] mx-16 border-dashed py-8 max-w-[var(&#45;&#45;page-width)] flex flex-col items-center justify-center px-6">-->
<div class="transition border-t border-black/10 dark:border-white/15 my-10 border-dashed mx-32"></div>
<!--<div class="transition bg-[oklch(92%_0.01_var(&#45;&#45;hue))] dark:bg-black rounded-2xl py-8 mt-4 mb-8 flex flex-col items-center justify-center px-6">-->
<div class="transition border-dashed border-[oklch(85%_0.01_var(--hue))] dark:border-white/15 rounded-2xl mb-12 flex flex-col items-center justify-center px-6">
    <div class="transition text-50 text-sm text-center">
        &copy; <span id="copyright-year">{currentYear}</span> {profileConfig.name}. All Rights Reserved. /
        <a class="transition link text-[var(--primary)] font-medium" target="_blank" href={url('rss.xml')}>RSS</a> /
        <a class="transition link text-[var(--primary)] font-medium" target="_blank" href={url('sitemap-index.xml')}>Sitemap</a><br>
        Powered by
        <a class="transition link text-[var(--primary)] font-medium" target="_blank" href="https://astro.build">Astro</a> &
        <a class="transition link text-[var(--primary)] font-medium" target="_blank" href="https://github.com/saicaca/fuwari">Fuwari</a>
    </div>
    //根据情况选择
   <link rel="stylesheet" href="/live2d_dist/waifu.css" />
   <script is:inline src="/live2d_dist/autoload.js"></script>
</div>
```
*我也不是这方面的高玩,可能有些错误,欢迎指正*

---

<mark style="background-color:#FFB6C1;padding:4px 10px;border-radius:6px 6px 6px 6px;color:white;font-weight:bold;">二、此博客的Style样式</mark><br>

---

<mark style="background-color:#39C5BB;padding:2px 6px;border-radius:4px 4px 4px 4px;color:white;font-weight:bold;">1.Miku色按钮样式</mark><br>
**模板 1：大按钮**
```html
<mark style="background-color:#39C5BB;padding:4px 10px;border-radius:6px 6px 6px 6px;color:white;font-weight:bold;"><a href="这里换成网址" style="color: white; text-decoration: none; font-weight: bold;">大按钮名</a></mark>
```
>如:<br>
><mark style="background-color:#39C5BB;padding:4px 10px;border-radius:6px 6px 6px 6px;color:white;font-weight:bold;"><a href="这里换成网址" style="color: white; text-decoration: none; font-weight: bold;">大按钮名</a></mark>

**模板 2：小按钮**
```html
<mark style="background-color:#39C5BB;padding:2px 6px;border-radius:4px 4px 4px 4px;color:white;font-weight:bold;"><a href="这里换成网址" style="color: white; text-decoration: none; font-weight: bold;">小按钮名</a></mark>
```
>如:<br>
><mark style="background-color:#39C5BB;padding:2px 6px;border-radius:4px 4px 4px 4px;color:white;font-weight:bold;"><a href="这里换成网址" style="color: white; text-decoration: none; font-weight: bold;">小按钮名</a></mark>

---

<mark style="background-color:#39C5BB;padding:2px 6px;border-radius:4px 0 0 4px;color:white;font-weight:bold;">2.Miku色链接样式</mark><mark style="background-color:#FFB6C1;padding:2px 6px;border-radius:0 4px 4px 0;color:white;font-size:0.9em;font-weight:bold;">我是链接内容示例</mark><br>
**模板 1：行内小标签（适合放在段落文字中间、末尾）**
这个格式的圆角较小（4px），适合作为文字里的小标注、小按钮，比如“资料来源”或“点击访问”。

```html
<mark style="background-color: #39C5BB; padding: 2px 6px; border-radius: 4px 0 0 4px;"><a href="这里换成网址" style="color: white; text-decoration: none; font-weight: bold;">这里换成链接文字</a></mark><mark style="background-color: #FFB6C1; padding: 2px 6px; border-radius: 0 4px 4px 0; color: white; font-size: 0.9em;"><a href="这里换成网址" style="color: white; text-decoration: none; font-weight: bold;">这里换成右侧说明文字</a></mark>
```

>如:<br>
><mark style="background-color: #39C5BB; padding: 2px 6px; border-radius: 4px 0 0 4px;"><a href="这里换成网址" style="color: white; text-decoration: none; font-weight: bold;">这里换成链接文字</a></mark><mark style="background-color: #FFB6C1; padding: 2px 6px; border-radius: 0 4px 4px 0; color: white; font-size: 0.9em;"><a href="这里换成网址" style="color: white; text-decoration: none; font-weight: bold;">这里换成右侧说明文字</a></mark>

**模板 2：独立行大标签（最适合“友情链接”或底部列表）**
这个格式的圆角更大一些（6px），并且自带 <p> 标签包裹，确保每个链接会自动独立成行，不会和前后文死死贴在一起。

```html
<p>
<mark style="background-color: #39C5BB; padding: 4px 10px; border-radius: 6px 0 0 6px;">
    <a href="这里换成网址" style="color: white; text-decoration: none; font-weight: bold;">网站/项目名</a>
</mark><mark style="background-color: #FFB6C1; padding: 4px 10px; border-radius: 0 6px 6px 0; color: white; font-size: 0.9em;">
    作者: XXX / 网址等信息
</mark>
</p>
```

>如:<br>
><p>
><mark style="background-color: #39C5BB; padding: 4px 10px; border-radius: 6px 0 0 6px;">
>    <a href="这里换成网址" style="color: white; text-decoration: none; font-weight: bold;">网站/项目名</a>
></mark><mark style="background-color: #FFB6C1; padding: 4px 10px; border-radius: 0 6px 6px 0; color: white; font-size: 0.9em;">
>    作者: XXX / 网址等信息
></mark>
></p>

---

<mark style="background-color:#39C5BB;padding:2px 6px;border-radius:4px 0 0 4px;color:white;font-weight:bold;">3.Miku色标签样式(不可点击,照葫芦画瓢即可)</mark><mark style="background-color:#FFB6C1;padding:2px 6px;border-radius:0 4px 4px 0;color:white;font-size:0.9em;font-weight:bold;">我是Tag</mark><br>

**模板 1：行内小标签（适合放在段落文字中间、末尾）**
这个格式的圆角较小（4px），适合作为纯文字的分类标注，不可点击。

```html
<mark style="background-color: #39C5BB; padding: 2px 6px; border-radius: 4px 0 0 4px; color: white; font-weight: bold;">左侧文字</mark><mark style="background-color: #FFB6C1; padding: 2px 6px; border-radius: 0 4px 4px 0; color: white; font-size: 0.9em; font-weight: bold;">右侧文字</mark>
```

>如：<br>
><mark style="background-color: #39C5BB; padding: 2px 6px; border-radius: 4px 0 0 4px; color: white; font-weight: bold;">左侧文字</mark><mark style="background-color: #FFB6C1; padding: 2px 6px; border-radius: 0 4px 4px 0; color: white; font-size: 0.9em; font-weight: bold;">右侧文字</mark>

**模板 2：独立行大标签**
这个格式的圆角更大一些（6px），并且自带 <p> 标签包裹，确保每个标签会自动独立成行，适合用在列表、或者突出的分类展示。

```html
<p>
<mark style="background-color: #39C5BB; padding: 4px 10px; border-radius: 6px 0 0 6px; color: white; font-weight: bold;">
    大标签左
</mark><mark style="background-color: #FFB6C1; padding: 4px 10px; border-radius: 0 6px 6px 0; color: white; font-size: 0.9em; font-weight: bold;">
    大标签右
</mark>
</p>
```

>如：<br>
><p>
><mark style="background-color: #39C5BB; padding: 4px 10px; border-radius: 6px 0 0 6px; color: white; font-weight: bold;">
>    大标签左
></mark><mark style="background-color: #FFB6C1; padding: 4px 10px; border-radius: 0 6px 6px 0; color: white; font-size: 0.9em; font-weight: bold;">
>    大标签右
></mark>
></p>

---

<script src="https://giscus.app/client.js"
        data-repo="Cirnoqwa/blogchat"
        data-repo-id="R_kgDOShB_lA"
        data-category="General"
        data-category-id="DIC_kwDOShB_lM4C9Udy"
        data-mapping="pathname"
        data-strict="0"
        data-reactions-enabled="1"
        data-emit-metadata="0"
        data-input-position="top"
        data-theme="preferred_color_scheme"
        data-lang="zh-CN"
        data-loading="lazy"
        crossorigin="anonymous"
        async>
</script>