const fs = require('node:fs');
const path = require('node:path');
const sass = require('sass');
const srcDir = './dist/';
const svelteDir = './../pure-ui/theme-chalk';

// 获取 src 文件夹中所有的 SCSS 文件路径
const scssFiles = fs.readdirSync('./src').filter(fileName => path.extname(fileName) === '.scss');
if (!fs.existsSync('./dist')) {
    fs.mkdirSync('./dist');
}
// 循环遍历编译所有的 SCSS 文件
scssFiles.forEach(fileName => {
    const scssFile = fs.readFileSync(`./src/${fileName}`, 'utf8');
    const compiledCSS = sass.compile(`./src/${fileName}`);
    fs.writeFileSync(`./dist/${path.basename(fileName, '.scss')}.css`, compiledCSS.css);
});




// 递归获取svelte文件路径
const getSvelteFiles = (dir) => {
    const dirents = fs.readdirSync(dir, { withFileTypes: true });
    let svelteFiles = [];
    for (const dirent of dirents) {
        const res = path.resolve(dir, dirent.name);
        if (dirent.isDirectory()) {
            svelteFiles = [...svelteFiles, ...getSvelteFiles(res)];
        } else if (res.endsWith('.css')) {
            svelteFiles.push(res);
        }
    }
    return svelteFiles;
};
const svelteFiles = getSvelteFiles(srcDir);
// 创建css目录
if (!fs.existsSync(svelteDir)) {
    fs.mkdirSync(svelteDir);
}
// 复制css文件到css目录
for (const file of svelteFiles) {
    const dest = path.join(svelteDir, path.basename(file));
    fs.copyFileSync(file, dest);
}