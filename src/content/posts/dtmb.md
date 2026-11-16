---
title: "手搓中心频率474Mhz五单元八木天线"
published: 2026-11-15
updated: 2026-11-15
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
> ** 应水平放置,这里没固定好跑了 ** 
> <br />
> <video src="/dtmb/dtmb.mp4" width="640" height="360" controls></video> 
> ** 接收到4个频道:CCTV-9,11,17 CGTN **
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
| **引向器 3** | 28.1 cm | 距引向器 2 为 13.6 cm | 最前面的一根，指向信号塔 |

## 演示图

<svg width="100%" height="auto" viewBox="0 0 1100 600" xmlns="http://www.w3.org/2000/svg" style="background-color: #ffffff; border: 1px solid #ddd; border-radius: 10px; box-shadow: 0 4px 12px rgba(0,0,0,0.1);">
    <defs>
        <style>
            .text-label { fill: #333333; font-size: 14px; font-weight: bold; text-anchor: middle; font-family: sans-serif; }
            .text-dim { fill: #666666; font-size: 12px; text-anchor: middle; font-family: sans-serif; }
            .element-line { stroke: #333333; stroke-width: 6; stroke-linecap: round; }
            .boom { fill: #c49a6c; rx: 5; }
            .wire { stroke: #cc0000; stroke-width: 2; fill: none; }
            .wire-core { stroke: #008000; stroke-width: 2; fill: none; }
            .dim-line { stroke: #999999; stroke-width: 1; stroke-dasharray: 4,4; }
            .gap { stroke: #e6b800; stroke-width: 2; stroke-dasharray: 5,5; }
        </style>
    </defs>

    <!-- 木棍 -->
    <rect class="boom" x="80" y="280" width="900" height="40"></rect>
    <text x="70" y="305" class="text-label" text-anchor="end" fill="#8b5a2b">木棍(笛子)</text>

    <!-- 各单元振子 -->
    
    <!-- 反射器 -->
    <line class="element-line" x1="150" y1="120" x2="150" y2="480"></line>
    <text x="150" y="110" class="text-label">反射器 (Reflector)</text>
    <text x="150" y="500" class="text-dim" fill="#c29b00">切割长度: 313.1 mm</text>

    <!-- 有源振子 -->
    <!-- 左臂 -->
    <line class="element-line" x1="330" y1="150" x2="330" y2="270"></line>
    <!-- 右臂 -->
    <line class="element-line" x1="330" y1="330" x2="330" y2="450"></line>
    <!-- 馈电点空隙 -->
    <line class="gap" x1="330" y1="270" x2="330" y2="330"></line>
    
    <text x="330" y="140" class="text-label" fill="#008000">有源振子 (Driven Element)</text>
    <text x="330" y="470" class="text-dim" fill="#008000">上下各切 148.6 mm (总计 297.2 mm)</text>
    <text x="360" y="305" class="text-dim" fill="#c29b00" text-anchor="start">← 中间须留1cm左右空隙</text>

    <!-- 引向器 1 (Director 1) -->
    <line class="element-line" x1="550" y1="140" x2="550" y2="460"></line>
    <text x="550" y="130" class="text-label">引向器 1</text>
    <text x="550" y="480" class="text-dim" fill="#c29b00">切割长度: 287.8 mm</text>

    <!-- 引向器 2 (Director 2) -->
    <line class="element-line" x1="700" y1="145" x2="700" y2="455"></line>
    <text x="700" y="135" class="text-label">引向器 2</text>
    <text x="700" y="475" class="text-dim" fill="#c29b00">切割长度: 284.6 mm</text>

    <!-- 引向器 3 (Director 3) -->
    <line class="element-line" x1="850" y1="150" x2="850" y2="450"></line>
    <text x="850" y="140" class="text-label">引向器 3</text>
    <text x="850" y="470" class="text-dim" fill="#c29b00">切割长度: 281.5 mm</text>


    <!-- 接线 -->
    
    <!-- 同轴电缆内芯/网线蓝芯 (绿色线) -->
    <path class="wire-core" d="M 330 270 L 280 270 L 280 540 L 200 540"></path>
    <text x="190" y="545" class="text-dim" text-anchor="end" fill="#008000">同轴线内芯 → 接上半臂</text>

    <!-- 同轴电缆屏蔽层/网线白芯 (红色线) -->
    <path class="wire" d="M 330 330 L 380 330 L 380 570 L 200 570"></path>
    <text x="190" y="575" class="text-dim" text-anchor="end" fill="#cc0000">同轴线屏蔽网 → 接下半臂</text>


    <!-- 间距 -->
    
    <!-- 反射器 -> 有源振子 -->
    <line class="dim-line" x1="150" y1="520" x2="330" y2="520"></line>
    <text x="240" y="515" class="text-dim">间距 126.5 mm</text>

    <!-- 有源振子 -> 引向器1 -->
    <line class="dim-line" x1="330" y1="520" x2="550" y2="520"></line>
    <text x="440" y="515" class="text-dim">间距 47.4 mm</text>

    <!-- 引向器1 -> 引向器2 -->
    <line class="dim-line" x1="550" y1="520" x2="700" y2="520"></line>
    <text x="625" y="515" class="text-dim">间距 113.9 mm</text>

    <!-- 引向器2 -> 引向器3 -->
    <line class="dim-line" x1="700" y1="520" x2="850" y2="520"></line>
    <text x="775" y="515" class="text-dim">间距 136.0 mm</text>

    <!-- 箭头指示方向 -->
    <path d="M 920 305 L 980 305 L 970 295 M 980 305 L 970 315" stroke="#333333" stroke-width="2" fill="none"></path>
    <text x="990" y="310" class="text-label" fill="#333333" text-anchor="start">指向电视塔</text>
</svg>

## 接线说明

用电视同轴电缆(或者网线中的一对双绞线)连接中间的**有源振子**：
*   **内芯（我用的蓝线）**：接左边那根 14.85cm 的振子。
*   **屏蔽网（我用的蓝白线）**：接右边那根 14.85cm 的振子。
*   **注意**：两根有源振子之间、内芯与屏蔽网之间，**不能有任何短路**，否则等着收棍木信号吧 :spoiler[接什么你倒是说呀]

---

>补充:因为我用的是网线中的一对双绞线,效果肯定不如正常馈线的,并且虽然右边的振子我用蓝白线接了但是我并没有接地,所以信号大衰,因此只搜到4个台
