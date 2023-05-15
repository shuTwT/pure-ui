const fs = require('node:fs');
const path = require('node:path');
const srcDir = './';
const svelteDir = './../pure-ui/svelte';
// 递归获取svelte文件路径
const getSvelteFiles = (dir) => {
    const dirents = fs.readdirSync(dir, { withFileTypes: true });
    let svelteFiles = [];
    for (const dirent of dirents) {
        const res = path.resolve(dir, dirent.name);
        if (dirent.isDirectory()) {
            svelteFiles = [...svelteFiles, ...getSvelteFiles(res)];
        } else if (res.endsWith('.svelte')) {
            svelteFiles.push(res);
        }
    }
    return svelteFiles;
};
const svelteFiles = getSvelteFiles(srcDir);
// 创建svelte目录
if (!fs.existsSync(svelteDir)) {
    fs.mkdirSync(svelteDir);
}
// 复制svelte文件到svelte目录
for (const file of svelteFiles) {
    const dest = path.join(svelteDir, path.basename(file));
    fs.copyFileSync(file, dest);
}