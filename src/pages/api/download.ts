import type { APIRoute } from 'astro';
import fs from 'node:fs';
import path from 'node:path';

export const GET: APIRoute = async ({ url }) => {


  const filepath = url.searchParams.get('path');
  
  if (!filepath) {
    return new Response('Missing path parameter', { status: 400 });
  }
  
  const __dirname = new URL('.', import.meta.url).pathname;
  const projectRoot = path.resolve(__dirname, '../../..');
  const downloadsDir = path.join(projectRoot, 'public', 'downloads');
  const fullPath = path.resolve(downloadsDir, filepath);

  console.log('[HACKER Download API Debug😱😱😱😂😂😂]', {
    __dirname,
    projectRoot,
    downloadsDir,
    filepath,
    fullPath,
    fileExists: fs.existsSync(fullPath),
  });

 
  if (!fullPath.startsWith(downloadsDir)) {
    return new Response('Access denied', { status: 403 });
  }

  if (!fs.existsSync(fullPath)) {
    return new Response('File not found', { status: 404 });
  }
  
  const stat = fs.statSync(fullPath);
  if (!stat.isFile()) {
    return new Response('Not a file', { status: 400 });
  }

  const fileBuffer = fs.readFileSync(fullPath);
  const filename = path.basename(fullPath);
  
  return new Response(fileBuffer, {
    headers: {
      'Content-Type': 'application/octet-stream',
      'Content-Disposition': `attachment; filename*=UTF-8''${encodeURIComponent(filename)}`,
      'Content-Length': stat.size.toString(),
    },
  });
};
