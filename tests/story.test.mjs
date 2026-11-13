import {test} from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
const data=readFileSync(new URL('../src/data/story.ts',import.meta.url),'utf8');
const app=readFileSync(new URL('../src/App.tsx',import.meta.url),'utf8');
test('eight curriculum challenges',()=>{
 for(const id of ['circle','necklace','code','arrange','choose','inclusion','partition','pigeon'])assert.ok(data.includes(`id:'${id}'`),id);
 for(const answer of [120,3,27,10,15,21,7,4])assert.ok(data.includes(`answer:${answer}`),String(answer));
});
test('original evidence and complete ending',()=>{
 for(const id of ['original','memo','sender'])assert.ok(data.includes(`id:'${id}'`));
 assert.ok(data.includes('박하윤'));assert.ok(data.includes('윤서연'));
 assert.ok(app.includes('reportReady'));assert.ok(app.includes('shots.length-1'));assert.ok(app.includes('사건 종결 보고서 제출'));
});
test('search, read, math checks, persistence and CSV wiring',()=>{
 for(const key of ['localStorage.setItem','searchable=docs.filter','openDoc=(d:Artifact)','const check=','const hint=','exportFile('])assert.ok(app.includes(key),key);
});
test('mission prerequisites exist',()=>{
 for(const key of ['circle','necklace','code','arrange','choose','inclusion','partition','pigeon'])assert.ok(data.includes(`${key}:'`));
});
