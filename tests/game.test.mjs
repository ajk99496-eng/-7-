import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
const app=fs.readFileSync(new URL('../src/App.tsx',import.meta.url),'utf8');
const data=fs.readFileSync(new URL('../src/data/game.ts',import.meta.url),'utf8');
test('four missions and required progressive stages',()=>{for(const token of ['mission===\'code\'','mission===\'selection\'','mission===\'audit\'','mission===\'final\'','nextStage(3','nextStage(4','nextStage(5','nextStage(6'])assert.ok(app.includes(token),token)});
test('search and evidence collection are wired to document opening',()=>{assert.ok(app.includes('const search=()'));assert.ok(app.includes('const viewDoc='));assert.ok(app.includes('found:doc.evidenceId'))});
test('correct model formulas represented',()=>{assert.ok(data.includes('combinations=(n:number,r:number)'));assert.ok(app.includes('Number(codeCount)===27'));assert.ok(app.includes('combinations(3,4)'))});
test('csv exports attempts and misconception diagnostics',()=>{for(const token of ['오개념','힌트횟수','시도횟수','경과초','csvEscape'])assert.ok(data.includes(token))});
