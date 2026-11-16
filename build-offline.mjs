import fs from 'node:fs';import path from 'node:path';import crypto from 'node:crypto';
const root='dist',all=[];function walk(dir){for(let e of fs.readdirSync(dir,{withFileTypes:true})){let full=path.join(dir,e.name);if(e.isDirectory())walk(full);else if(e.name!=='sw.js'&&!e.name.endsWith('.map'))all.push(full.replaceAll('\\','/').slice(root.length+1))}}walk(root);all.sort();
let hash=crypto.createHash('sha256');for(let f of all)hash.update(f).update(fs.readFileSync(path.join(root,f)));const version=hash.digest('hex').slice(0,16);
const template=fs.readFileSync('sw-template.js','utf8').replace('__VERSION__',version).replace('__ASSETS__',JSON.stringify(all));fs.writeFileSync(path.join(root,'sw.js'),template);console.log(`Offline bundle: ${all.length} assets, version ${version}`);
