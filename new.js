// new.js
import fs from 'fs';
import path from 'path';

// 1. 获取命令行传进来的文章标题，比如: node new.js "我的新文章"
const title = process.argv[2] || 'untitled';

// 2. 获取当前时间 (格式化为 YYYY-MM-DD)
const now = new Date();
const year = now.getFullYear();
const month = String(now.getMonth() + 1).padStart(2, '0');
const date = String(now.getDate()).padStart(2, '0');
const formatDate = `${year}-${month}-${date}`;

// 3. 拼装你要的文件夹路径（根据你的喜好修改，这里默认放进 posts 集合）
const fileName = `${title.toLowerCase().replace(/\s+/g, '-')}.md`;
const filePath = path.join(process.cwd(), 'src', 'content', 'posts', fileName);

// 4. 定义好你的模板内容（完全契合你之前的 schema）
const template = `---
title: "${title}"
published: ${formatDate}
updated: ${formatDate}
draft: false
description: ""
image: ""
tags: []
category: ""
---

# ${title}
`;

// 5. 写入文件
if (!fs.existsSync(filePath)) {
    fs.writeFileSync(filePath, template, 'utf-8');
    console.log(`🎉 成功！文章已创建在: ${filePath}`);
} else {
    console.warn(`⚠️ 警告: 文件 ${fileName} 已经存在了！`);
}