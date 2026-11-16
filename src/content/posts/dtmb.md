---
title: "手搓中心频率474Mhz五单元八木天线"
published: 2026-11-15
updated: 2026-11-16
draft: false
description: ""
image: "/dtmb/dtmb_r.jpg"
tags: ["手搓","无线电","DTMB"]
category: "无线电"
comment: true
---

> 实录：
> 
> <img src="/dtmb/test.jpg" width="75%" alt="固定在三脚架的八木天线" />
> **应该水平放置,这里没固定好自己转成垂直了** 
> <br />
> <video src="/dtmb/dtmb.mp4" width="640" height="360" controls></video> 
> **接收到4个频道:CCTV-9,11,17 CGTN** 
> <br />


## 用料

*   **横梁**：一根**笛子**
*   **振子**：2 米网线截取下表长度，**除有源振子用的2芯剥皮2cm铜线拧成麻花,其他都是8芯两段剥皮2cm铜线拧成麻花**以增加线径和带宽,你能拧上或者焊上剥多长皮都行）
*   **馈线**：0.7 米的网线(我这里用的蓝线和蓝白线)两条线两端剥开皮3~4cm
*   **连接**：网线馈线蓝线接电视dtmb接口中间的小圆孔(两个半圆)，可拿牙签把铜线顶住

## 尺寸与间距数据(从左向右，即从后向前)

所有长度均为**绞合拧成麻花后**修剪的最终尺寸，误差控制在 ±3mm 以内。

| 说明 | 切割长度 | 间距 (中心点距离) | 备注 |
| :--- | :--- | :--- | :--- |
| **反射器** | 31.3 cm | 0 cm | 最长的一根，放在最后面 |
| **有源振子** | 单个 14.85 cm | 距反射器 12.6 cm | 两根共 29.7cm，**中间必须留 1cm 缝隙**用于接线 |
| **引向器 1** | 28.8 cm | 距有源振子 4.7 cm | 最靠近接线处的引向器 |
| **引向器 2** | 28.5 cm | 距引向器 1 为 11.4 cm | 依次变短 |
| **引向器 3** | 28.1 cm | 距引向器 2 为 13.6 cm | 最前面的一根，指向目标 |

## 演示图

<svg width="100%" viewBox="0 0 1100 600" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <style>
      .fg{fill:var(--text-primary,#333)}
      .fg-dim{fill:var(--text-secondary,#666)}
      .line{stroke:var(--border-color,#999)}
      .element{stroke:var(--text-primary,#333);stroke-width:6;stroke-linecap:round}
      .boom{fill:var(--card-bg,#c49a6c)}
      .wire-core{stroke:var(--primary,#008000);stroke-width:2;fill:none}
      .wire{stroke:var(--primary,#cc0000);stroke-width:2;fill:none}
      .gap{stroke:var(--primary,#e6b800);stroke-width:2;stroke-dasharray:5,5}
      .bg{fill:var(--page-bg,#fff)}
      .dark .fg{fill:var(--text-primary,#e4e4e7)}
      .dark .fg-dim{fill:var(--text-secondary,#a1a1aa)}
      .dark .line{stroke:var(--border-color,#52525b)}
      .dark .element{stroke:var(--text-primary,#e4e4e7)}
      .dark .boom{fill:var(--card-bg,#3f3f46)}
      .dark .wire-core{stroke:var(--primary,#4ade80)}
      .dark .wire{stroke:var(--primary,#f87171)}
      .dark .gap{stroke:var(--primary,#fbbf24)}
      .dark .bg{fill:var(--page-bg,#18181b)}
    </style>
  </defs>
  <rect class="bg" width="1100" height="600" rx="10"/>
  <rect class="boom" x="80" y="280" width="900" height="40" rx="5"/>
  <text x="70" y="305" class="fg" text-anchor="end" font-size="14" font-weight="bold" font-family="sans-serif">笛子</text>
  <line class="element" x1="150" y1="120" x2="150" y2="480"/>
  <text x="150" y="110" class="fg" text-anchor="middle" font-size="14" font-weight="bold" font-family="sans-serif">反射器</text>
  <text x="150" y="500" class="fg-dim" text-anchor="middle" font-size="12" font-family="sans-serif">切割长度: 313.0 mm</text>
  <line class="element" x1="330" y1="150" x2="330" y2="270"/>
  <line class="element" x1="330" y1="330" x2="330" y2="450"/>
  <line class="gap" x1="330" y1="270" x2="330" y2="330"/>
  <text x="330" y="140" class="fg" text-anchor="middle" font-size="14" font-weight="bold" font-family="sans-serif">有源振子 (Driven Element)</text>
  <text x="330" y="470" class="fg-dim" text-anchor="middle" font-size="12" font-family="sans-serif">上下各切 148.5 mm (总计 297.0 mm)</text>
  <text x="360" y="305" class="fg-dim" text-anchor="start" font-size="12" font-family="sans-serif">← 中间须留 1cm 左右空隙</text>
  <line class="element" x1="550" y1="140" x2="550" y2="460"/>
  <text x="550" y="130" class="fg" text-anchor="middle" font-size="14" font-weight="bold" font-family="sans-serif">引向器 1</text>
  <text x="550" y="480" class="fg-dim" text-anchor="middle" font-size="12" font-family="sans-serif">切割长度: 288.0 mm</text>
  <line class="element" x1="700" y1="145" x2="700" y2="455"/>
  <text x="700" y="135" class="fg" text-anchor="middle" font-size="14" font-weight="bold" font-family="sans-serif">引向器 2</text>
  <text x="700" y="475" class="fg-dim" text-anchor="middle" font-size="12" font-family="sans-serif">切割长度: 285.0 mm</text>
  <line class="element" x1="850" y1="150" x2="850" y2="450"/>
  <text x="850" y="140" class="fg" text-anchor="middle" font-size="14" font-weight="bold" font-family="sans-serif">引向器 3</text>
  <text x="850" y="470" class="fg-dim" text-anchor="middle" font-size="12" font-family="sans-serif">切割长度: 281.0 mm</text>
  <path class="wire-core" d="M330 270L280 270L280 540L200 540"/>
  <text x="190" y="545" class="fg-dim" text-anchor="end" font-size="12" font-family="sans-serif">同轴线内芯 → 接上半臂</text>
  <path class="wire" d="M330 330L380 330L380 570L200 570"/>
  <text x="190" y="575" class="fg-dim" text-anchor="end" font-size="12" font-family="sans-serif">同轴线屏蔽网 → 接下半臂</text>
  <line class="line" x1="150" y1="520" x2="330" y2="520" stroke-dasharray="4,4"/>
  <text x="240" y="515" class="fg-dim" text-anchor="middle" font-size="12" font-family="sans-serif">间距 126.0 mm</text>
  <line class="line" x1="330" y1="520" x2="550" y2="520" stroke-dasharray="4,4"/>
  <text x="440" y="515" class="fg-dim" text-anchor="middle" font-size="12" font-family="sans-serif">间距 47.0 mm</text>
  <line class="line" x1="550" y1="520" x2="700" y2="520" stroke-dasharray="4,4"/>
  <text x="625" y="515" class="fg-dim" text-anchor="middle" font-size="12" font-family="sans-serif">间距 114.0 mm</text>
  <line class="line" x1="700" y1="520" x2="850" y2="520" stroke-dasharray="4,4"/>
  <text x="775" y="515" class="fg-dim" text-anchor="middle" font-size="12" font-family="sans-serif">间距 136.0 mm</text>
  <path d="M920 305L980 305L970 295M980 305L970 315" class="line" stroke-width="2" fill="none"/>
  <text x="990" y="310" class="fg" text-anchor="start" font-size="14" font-weight="bold" font-family="sans-serif">指向目标</text>
</svg>

## 接线说明

用电视同轴电缆(或者网线中的一对双绞线)连接中间的**有源振子**：
*   **内芯（我用的蓝线）**：接左边那根 14.85cm 的振子。
*   **屏蔽网（我用的蓝白线）**：接右边那根 14.85cm 的振子。
*   **注意**：两根有源振子之间、内芯与屏蔽网之间，**不能有任何短路**，否则等着收棍木信号吧 :spoiler[接什么你倒是说呀]

---

>补充:因为我用的是网线中的一对双绞线,效果肯定不如正常馈线的,并且虽然右边的振子我用蓝白线接了但是我并没有接地,所以信号大衰,因此只搜到4个台
