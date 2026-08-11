---
title: "关于爱玩电脑的CMD"
published: 2026-05-25
updated: 2026-06-04
description: "「爱玩电脑的CMD」关于12岁精通计算机、我的世界指令对标json以及各类名场面的大赏"
tags: ["乐子"]
image: "/sb/dsb.png"
category: "乐子"
draft: false
---
>🐴的你出院的时候是怎么跟我保证的？
>原因:在2026/6/4日他在群聊中发布了"用VBS入侵学校教室电脑"的消息,然后说"多媒体被入侵了,老师吓哭了",很豪 知道吗<br />
>他的神人VBS代码: <br />
<details> 
<summary>展开以查看乐子VBS代码</summary>

```VBScript
Dim choice
choice = MsgBox("运行此程序可能会导致系统不正常，是否仍要运行？", vbOKCancel + vbQuestion, "Microsoft Windows Defender")

If choice = vbOK Then
    MsgBox "此程序为玩笑程序，图个乐，不会损坏系统。" & vbCrLf & _
           "即将出现大量随机系统风格弹窗，结束后请输入密码 114514 退出。", vbInformation, "玩笑程序说明"

    Set WshShell = CreateObject("WScript.Shell")
    Randomize

    titles = Array( _
        "Microsoft Windows", _
        "Windows 资源管理器", _
        "系统错误", _
        "Windows Defender", _
        "文件访问被拒绝", _
        "磁盘检查", _
        "注册表编辑器" _
    )

    contents = Array( _
        "确实要把此文件放入回收站吗？C:\Windows\System32\config", _
        "无法删除 System32：访问被拒绝。", _
        "文件正在被另一个程序使用。", _
        "找不到 'C:\Windows\System32\drivers\test.sys'。", _
        "您需要管理员权限才能执行此操作。", _
        "此操作无法完成，因为文件已在资源管理器中打开。", _
        "Windows 无法访问指定设备、路径或文件。", _
        "动态链接库 (DLL) 初始化例程失败。", _
        "系统检测到可疑活动，建议立即扫描。", _
        "不是有效的 Win32 应用程序。", _
        "内存不足，请关闭部分程序。", _
        "explorer.exe — 应用程序错误", _
        "0x80070005 拒绝访问。", _
        "磁盘空间不足，请清理系统盘。" _
    )

    styles = Array(0, 16, 32, 48, 64)

    popupCount = 300

    For i = 1 To popupCount
        randomTitle = titles(Int(Rnd * UBound(titles) + 1))
        randomContent = contents(Int(Rnd * UBound(contents) + 1))
        randomStyle = styles(Int(Rnd * UBound(styles) + 1))

        WshShell.Run "mshta vbscript:msgbox(""" & randomContent & """," & randomStyle & ",""" & randomTitle & """)(window.close)", 1, False

        WScript.Sleep 1000
    Next

    correctNum = "114514"
    Do
        userInput = InputBox("弹窗已完成。请输入管理员密码以关闭程序。", "Microsoft Windows Defender", "")

        If userInput = Empty Then
            MsgBox "输入不能为空。", vbExclamation, "Microsoft Windows Defender"
        Else
            If userInput = correctNum Then
                Set shell = CreateObject("WScript.Shell")
                shell.Run "cmd /c taskkill /f /im mshta.exe", 0, True
                MsgBox "密码正确！程序即将退出。", vbInformation, "Microsoft Windows Defender"
                Exit Do
            Else
                MsgBox "密码错误！请重新输入。", vbCritical, "Microsoft Windows Defender"
            End If
        End If
    Loop
    
ElseIf choice = vbCancel Then
End If
```
</details> 

>2026/5/下旬 鉴于近日 爱玩电脑的CMD 戒豪，因此此文章基本作废。
><img src="/sb/nb.jpg" alt="爱玩电脑的CMD牛逼666">

---


>2026/5/15左右 *由于我突然觉得我似乎过于不合适重新修改了该帖子*

---

>**首先本人认为就只是一个有虚荣心的小孩子,没必要跟小孩子太大计较**

><mark style="background-color: white;">「爱玩电脑的CMD」纯嘉豪小学生，他声称自己的一个精通计算机的天才，但实际上是**吹牛逼**呢。并且他还四处惹事，做一些令人反感的事情。（包括但不限于无缘无故神权，装高冷，说自己很有学历，11岁被大学录取等）</mark><mark style="background-color: #39C5BB; padding: 2px 6px; border-radius: 4px 0 0 4px;"><a href="http://cmd.kingpop.top" style="color: white; text-decoration: none; font-weight: bold;target='_blank';">该引用资料来源</a></mark><mark style="background-color: #FFB6C1; padding: 2px 6px; border-radius: 0 4px 4px 0; color: white; font-size: 0.9em;"><a href="http://cmd.kingpop.top" style="color: white; text-decoration: none; font-weight: bold;target='_blank';">cmd.kingpop.top</a></mark>

为什么这么说呢，因为：


```

别人的12岁😢：
各种唐人游戏😒
我的12岁👿：
Python😄
C++😍
我的世界指令(对标json)😡
DJI(大疆)😱
FPV(一种无人机的变种，飞的很快)😇
电脑软件😎
自组电脑🤑
一名合格的电教委员🥰
▪我小学生六年级，马上初一😈▪，比某些大学生都懂[星星眼](嗯,对,应该是的)😤

```

**原图**
<img src="/sb/dsb.png" width="75%" alt="原图">
~~就很
懂吧~~

>**我的世界指令(对标json)😡**
>嘿你们知道吗,有时候憋笑真的很难欸

*~~Bro 以为自己看了几个fpv视频就当自己是俄乌战场飞手💀
电脑是拿炸弹组的~~*

**<mark>这种公然挑衅、贬低的行为是完全不正确的，你可以承认自己优秀，但是觉对不能借此贬低他人，这样只会让你显得没有实力。</mark>**

---

**接下来,最令人难绷的图片来了(感谢huishi6014提供的图片)**<br>
**他的黑历史,请理性观看**<br>

<details>
   <summary><mark style="background-color: lightpink;">[图片1]点击展开</mark></summary>
        <pre><blockcode>  
           <img src="/sb/sb1.png">
        </blockcode></pre>
</details>
<details>
   <summary><mark style="background-color: lightpink;">[图片2]点击展开</mark></summary>
        <pre><blockcode>  
           <img src="/sb/sb2.png">
        </blockcode></pre>
</details>
<details>
   <summary><mark style="background-color: lightpink;">[图片3]点击展开</mark></summary>
        <pre><blockcode>  
           <img src="/sb/sb3.png">
        </blockcode></pre>
</details>
<details>
   <summary><mark style="background-color: lightpink;">[图片4]点击展开</mark></summary>
        <pre><blockcode>  
           <img src="/sb/sb4.png">
        </blockcode></pre>
</details>
<details>
   <summary><mark style="background-color: lightpink;">[图片5]点击展开</mark></summary>
        <pre><blockcode>  
           <img src="/sb/sb5.png">
        </blockcode></pre>
</details>
<details>
   <summary><mark style="background-color: lightpink;">[图片6]点击展开</mark></summary>
        <pre><blockcode>  
           <img src="/sb/sb6.png">
        </blockcode></pre>
</details>

>这真的太难绷了😂😂😂<br>
>我来整理下他的所在矛盾吧<br>
>1.不知道cout后面的换行结尾为``endl``(第一次接触cpp的人都知道!)<br>
>并且连个python基础题都不会(你问我他写出来了肯定知道python，这是因为他连二叉树都不会)<br>
>2.装β说自己有无人机和FPV(即穿越机)<br>
>我询问fpv是啥样的他说买的化骨龙套机掉江里了找不到购买记录了<br>
>并且之前的群友问他的无人机是什么他说撞鸟了😂😂😂<br>
>很明显他就没有,纯装β<br>
>3.试图举报**huishi6014**发的关于他的豪情视频 来不让他人看见自己的豪情<br>

## 看完不笑的可以确诊为面瘫了 ##

---

>关于装β却并没有做这件事/物 *~~俗称嘉豪~~*

<mark style="background-color: lightblue;"> 对于我的观点来说他只是个小孩子，有点虚荣心挺正常，这个不必过多接触 </mark>
<mark style="background-color: white;"><font style="color:red;">但是你再有虚荣心绝对不可能这么装,豪情到快可以当李白了😂</font></mark>

---

>在2026/5/14 此人发布测试自己是否为小男娘，在此之前发布了***引人不适的***图片及言论
><details>
>   <summary><mark style="background-color: lightpink;">[图片]点击展开</mark></summary>
>       <pre><blockcode>  
>           <img src="/sb/xxy.png" width="25%">
>            <img src="/sb/mg.png" width="25%" alt="原图">
>            <img src="/sb/zl.jpg" width="40%" alt="聊天原图">
>            <div style="display:none;"><details>
>                <summary><mark style="background-color: lightpink;">[图片]点击展开原消息</mark></summary>
>                    <pre><blockcode>  
>                        <img src="/sb/zl.jpg" width="40%" alt="leg">
>                    </blockcode></pre>
>            </div></details>
>  </blockcode></pre>
></details>

**锐评:____普遍寿命对半**

---

<p> 他的Bilibili: <mark style="background-color: #39C5BB; padding: 4px 10px; border-radius: 6px 0 0 6px;"><a href="https://space.bilibili.com/3546632236829522" style="color: white; text-decoration: none; font-weight: bold;">点击访问</a></mark><mark style="background-color: #FFB6C1; padding: 4px 10px; border-radius: 0 6px 6px 0; color: white; font-size: 0.9em;"><a href="https://space.bilibili.com/3546632236829522" style="color: white; text-decoration: none; font-weight: bold;">B站个人主页</a></mark> </p>

他的粉丝群(引用bilibili简介):<br>
`` 我的世界，编程：python，c++ 这个人--没有昵称的fans交流群 1071581361，交流群2 956315000 ``

他的企鹅号(非必要不要乱传打扰人家): :spoiler[3931471142]
<br>

<p>
<mark style="background-color: #39C5BB; padding: 4px 10px; border-radius: 6px 0 0 6px;"><a href="http://cmd.kingpop.top" style="color: white; text-decoration: none; font-weight: bold;">点击访问</a></mark><mark style="background-color: #FFB6C1; padding: 4px 10px; border-radius: 0 6px 6px 0; color: white; font-size: 0.9em;"><a href="http://cmd.kingpop.top" style="color: white; text-decoration: none; font-weight: bold;">段落一所用材料</a></mark>
</p>

<p>
<mark style="background-color: #39C5BB; padding: 4px 10px; border-radius: 6px 0 0 6px;"><a href="http://cmd.kingpop.top" style="color: white; text-decoration: none; font-weight: bold;target='_blank';">友情链接</a></mark><mark style="background-color: #FFB6C1; padding: 4px 10px; border-radius: 0 6px 6px 0; color: white; font-size: 0.9em;"><a href="http://cmd.kingpop.top" style="color: white; text-decoration: none; font-weight: bold;target='_blank';">http://cmd.kingpop.top</a></mark>
</p>
