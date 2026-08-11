import fs from 'fs';
import path from 'path';

const title = process.argv[2] || 'untitled';

const now = new Date();
const year = now.getFullYear();
const month = String(now.getMonth() + 1).padStart(2, '0');
const date = String(now.getDate()).padStart(2, '0');
const formatDate = `${year}-${month}-${date}`;

const fileName = `${title.toLowerCase().replace(/\s+/g, '-')}.md`;
const filePath = path.join(process.cwd(), 'src', 'content', 'posts', fileName);

const template = `---
title: "${title}"
published: ${formatDate}
updated: ${formatDate}
draft: false
description: ""
image: ""
tags: []
category: ""
comment: true
---

# ${title}
`;


if (!fs.existsSync(filePath)) {
    fs.writeFileSync(filePath, template, 'utf-8');
    console.log(`🎉 成功！文章已创建在: ${filePath}`);
} else {
    console.warn(`⚠️ 警告: 文件 ${fileName} 已经存在了！`);
}