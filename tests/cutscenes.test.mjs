import test from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync,existsSync} from 'node:fs';
const root=new URL('../',import.meta.url);
const app=readFileSync(new URL('src/App.tsx',root),'utf8');
const scene=readFileSync(new URL('src/data/cutscenes.ts',root),'utf8');
test('cutscene flow supports next, previous and deferred missions',()=>{
 for(const token of ['cutsceneNext','cutscenePrevious','pendingDiscovery','deferredMission','closeDoc','finishCutscene']) assert.ok(app.includes(token),token);
});
test('intro, discoveries, math explanations and conclusive ending have dialogue',()=>{
 for(const token of ['prologue:Shot[]','discoveries:Record','lessons:Record','ending:Shot[]','박하윤','윤서연']) assert.ok(scene.includes(token),token);
});
test('scene background images are bundled',()=>{
 for(let i=0;i<13;i++)assert.ok(existsSync(new URL(`public/cutscenes/scene-${String(i).padStart(2,'0')}.jpg`,root)));
});
