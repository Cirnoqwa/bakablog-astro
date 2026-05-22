---
title: "Graph"
published: 2026-05-22
updated: 2026-05-22
draft: false
description: ""
image: ""
tags: []
category: ""
// 1. 引入我们写好的那个通用星图组件
import Graph from '../components/Graph.astro';

import GraphData from '../data/Graph/links.json';
--

<!DOCTYPE html>
<html lang="zh-CN">
<head>
  <meta charset="UTF-8" />
  <title>我的星图</title>
  <style>body { margin: 0; background: #111; }</style>
</head>
<body>

  <!-- 3. 把数据作为参数喂给组件 -->
  <Graph data={GraphData} />

</body>
</html>