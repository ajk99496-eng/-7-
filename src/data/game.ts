export type PersonId='jiwoo'|'dohyun'|'serin'|'teacher';
export type Tab='home'|'community'|'archive'|'chat'|'people'|'evidence'|'report'|'teacher';
export type MissionId='code'|'selection'|'audit'|'final';
export interface Document {id:string;title:string;tag:string;date:string;location:'community'|'archive';minStage:number;search:string[];body:string[];evidenceId?:string;highlight?:string;mission?:MissionId}
export interface Evidence {id:string;title:string;origin:string;detail:string;person?:PersonId}
export interface RecordItem {time:string;mission:string;answer:string;correct:boolean;misconception:string;hintCount:number;attempt:number;seconds:number}
export interface ChatMessage {id:number;who:PersonId|'me'|'system';text:string;time:string}
export interface Save {investigator:string;stage:number;tab:Tab;found:string[];read:string[];messages:ChatMessage[];logs:RecordItem[];started:number;searchFails:number;hints:Record<MissionId,number>;tries:Record<MissionId,number>;sound:boolean;dialogue:string[]}
export const PEOPLE:{id:PersonId;name:string;role:string;description:string;img:string}[]=[
{id:'jiwoo',name:'서지우',role:'조사단장 / 추리 동아리',description:'조용히 관찰하다가 핵심적인 모순을 짚는다. 기록 사이의 틈을 잘 찾아낸다.',img:'./characters/seo-jiwoo.png'},
{id:'dohyun',name:'강도현',role:'자료 분석 / 컴퓨터 동아리',description:'코드와 숫자에 강하다. 결과보다 계산의 전제를 먼저 묻는다.',img:'./characters/kang-dohyun.png'},
{id:'serin',name:'한세린',role:'영상 조사 / 방송부 PD',description:'현장 취재와 오래된 방송 기록 담당. 평범한 장면에서 이상함을 포착한다.',img:'./characters/han-serin.png'},
{id:'teacher',name:'윤서연',role:'수학 교사 / PROJECT ZERO 관련자',description:'2019년 프로젝트에 관해 알고 있지만 모든 질문에 답하지는 않는다.',img:'./characters/yoon-seoyeon.png'}];
export const DOCS:Document[]=[
{id:'post',title:'[보존] 수학 연구반 자료 이전 안내',tag:'교내 커뮤니티 · 보존',date:'2019.11.07',location:'community',minStage:1,search:['project zero','projectzero','프로젝트 제로','수학 연구반','2019','연구 발표','자료 이전'],body:['2019년 연구 발표 종료 후 PROJECT ZERO 자료는 전자 기록함으로 이전되었습니다.','기록함의 테스트 코드는 숫자 1, 2, 3으로 구성된 세 자리 문자열입니다. 같은 숫자를 여러 번 사용해도 됩니다.','테스트 입력 순서는 기록함의 로그와 일치해야 합니다. 예: 112, 121은 서로 다른 접근 기록입니다.','자료 열람 문의: 연구 자료실 / 보안 분석표 A-01'],evidenceId:'post',highlight:'보안 분석표 A-01',mission:'code'},
{id:'photo',title:'2019년 연구 발표 단체 사진 촬영 기록',tag:'방송부 기록 · 이미지 메타데이터',date:'2019.11.05',location:'community',minStage:1,search:['2019','연구 발표','사진','수학 연구반','project zero'],body:['파일명: ZERO_GROUP_20191105.jpg','사진 촬영 대상: 7명 / 공식 발표 참가 명단: 6명','사진 원본은 2026년 현재 복원 대상이며, 7번째 인물의 정보는 누락되어 있습니다.','기록 번호 R07이 사진 파일의 설명란에 남아 있습니다.'],evidenceId:'photo',highlight:'촬영 대상: 7명'},
{id:'code',title:'보안 분석표 A-01 | 접근 코드 생성 규칙',tag:'연구 자료실 · 제한적 공개',date:'2019.11.08',location:'archive',minStage:2,search:['a-01','코드','접근 코드','project zero','보안 분석표'],body:['보안 테스트: 1, 2, 3 중 중복 선택이 가능한 세 자리 코드.','자리마다 3가지 선택지가 존재하며, 입력한 순서가 다르면 다른 코드로 취급한다.','전체 생성 가능한 코드 수를 확정한 뒤 접근 로그 인덱스를 복원할 것.'],evidenceId:'code',mission:'code'},
{id:'request',title:'자료 신청서 B-04 | 묶음 기록 신청',tag:'연구 자료실 · 기록 복원본',date:'2019.11.08',location:'archive',minStage:3,search:['b-04','신청서','자료 선택','a b c','project zero','연구 자료실'],body:['이 기록함은 A, B, C 세 종류의 자료를 취급한다.','신청서 한 장당 정확히 네 개의 자료를 선택할 수 있다. 같은 종류의 자료를 여러 번 신청할 수 있다.','단, 묶음 신청은 전달 순서를 기록하지 않는다. AABC와 ABAC는 동일한 신청으로 간주한다.','전체 가능한 신청 묶음 수를 확인하여 R07 복원 파일의 색인을 해제할 것.'],evidenceId:'request',mission:'selection'},
{id:'audit',title:'계산 검증 기록 | 2019년 감사 메모',tag:'연구 자료실 · 검증 필요',date:'2019.11.09',location:'archive',minStage:4,search:['감사','검증','오류','r07','project zero','계산'],body:['접근 코드와 자료 신청서의 경우의 수를 모두 3³=27로 기재하였음.','접근 코드는 입력 순서에 따라 구분한다. 자료 신청서는 순서와 무관하게 구분한다.','서로 다른 규칙이 같은 방식으로 집계된 이유를 확인해야 한다.','오류를 바로잡으면 숨겨진 로그 R07의 접근 권한이 열릴 수 있다.'],evidenceId:'audit',highlight:'모두 3³=27로 기재',mission:'audit'},
{id:'r07',title:'R07 | 복원된 비공개 기록',tag:'연구 자료실 · 제한 해제',date:'2019.11.09',location:'archive',minStage:5,search:['r07','7번째','일곱 번째 기록','project zero','비공개'],body:['연구원 수: 7명. 공식 발표자 명단: 6명.','기록 R07은 삭제된 것이 아니라 접근 권한이 해제되기 전까지 숨김 처리되어 있었다.','2019년 PROJECT ZERO 최종 기록 작성자: [이름 일부 손상]','변경 이력은 미복원. 다음 조사 대상: 겹쳐진 명단.'],evidenceId:'r07',highlight:'최종 기록 작성자: [이름 일부 손상]'}
];
export const EVIDENCE:Evidence[]=[
{id:'post',title:'자료 이전 안내',origin:'교내 커뮤니티',detail:'1, 2, 3 중 중복을 허용한 세 자리 접근 코드. 순서가 달라지면 다른 기록이다.',person:'dohyun'},
{id:'photo',title:'일곱 명의 단체 사진',origin:'교내 커뮤니티',detail:'사진 메타데이터에는 7명, 공식 명단에는 6명. 기록 번호 R07 발견.',person:'serin'},
{id:'code',title:'접근 코드 분석표 A-01',origin:'연구 자료실',detail:'중복순열 3³=27. 숫자가 같아도 순서가 달라지면 다른 경우이다.',person:'dohyun'},
{id:'request',title:'묶음 신청서 B-04',origin:'연구 자료실',detail:'A, B, C 중 네 개를 중복 선택. 순서는 의미 없으므로 중복조합 C(6,4)=15.',person:'dohyun'},
{id:'audit',title:'2019년 감사 메모',origin:'연구 자료실',detail:'서로 다른 규칙을 같은 공식으로 계산한 오류가 남아 있다.',person:'teacher'},
{id:'r07',title:'비공개 기록 R07',origin:'연구 자료실',detail:'일곱 번째 연구원의 이름은 손상되었으며 변경 이력은 추가 조사 필요.',person:'teacher'},
{id:'result',title:'수학적 오류 검증 결과',origin:'조사단 분석',detail:'접근 코드는 27가지, 자료 신청은 15가지. 기록함 감사 결과는 두 집계를 혼동했다.',person:'jiwoo'}
];
export const EVENT_MSG:Record<number,{who:PersonId;text:string}[]>={
1:[{who:'jiwoo',text:'접속했네? 나 지우야. 너도 그 메시지 받았지?'},{who:'jiwoo',text:'2019년 연구반 사진에 일곱 명이 있는데 명단에는 여섯 명뿐이래. 교내 커뮤니티에서 PROJECT ZERO부터 찾아봐.'}],
2:[{who:'dohyun',text:'A-01을 찾았네. 그 코드는 숫자가 아니라 자리 순서가 관건이야. 자료실에서 분석해 보자.'},{who:'serin',text:'나 방송부 기록에서도 사진 인원이 7명인 걸 확인했어. 이거 단순 오타는 아닐지도.'}],
3:[{who:'dohyun',text:'코드 종류는 27개로 확인! 그런데 B-04는 단순히 자리를 채우는 문제가 아니래.'},{who:'jiwoo',text:'자료 신청서를 열어 봐. AABC랑 ABAC가 같은 신청이라는데, 왜 그럴까?'}],
4:[{who:'serin',text:'신청 묶음은 15가지네. 잠깐, 감사 메모에는 두 결과를 똑같이 계산해 놨어.'},{who:'jiwoo',text:'검증 기록에서 무엇이 잘못됐는지 찾자. 이번엔 숫자보다 규칙을 의심해 봐.'}],
5:[{who:'teacher',text:'R07을 열었군요. 기록의 숫자는 거짓말하지 않아요. 다만 누가, 어떤 규칙으로 셌는지는 확인해야 하죠.'},{who:'jiwoo',text:'R07이 드디어 열렸어! 증거 수첩을 정리해서 사건 보고서를 작성하자.'}],
6:[{who:'serin',text:'잠깐, 연구원 명단의 마지막 이름만 흐릿해. 이 부분은 누가 수정한 거지?'},{who:'jiwoo',text:'첫 번째 조사는 끝이야. 다음 사건은 겹쳐진 명단. R07의 마지막 이름을 계속 추적하자.'}]
};
export const initial=(investigator:string):Save=>({investigator,stage:0,tab:'home',found:[],read:[],messages:[],logs:[],started:Date.now(),searchFails:0,hints:{code:0,selection:0,audit:0,final:0},tries:{code:0,selection:0,audit:0,final:0},sound:false,dialogue:[]});
export const combinations=(n:number,r:number)=>{let total=1;for(let i=1;i<=r;i++)total=total*(n+i-1)/i;return Math.round(total)};
export const normalize=(s:string)=>s.trim().toLowerCase().replace(/\s+/g,'');
export function csvEscape(value:unknown):string {const s=String(value??'');return /[",\n\r]/.test(s)?'"'+s.replaceAll('"','""')+'"':s}
export function serializeCSV(rows:RecordItem[],name:string):string {const header=['익명조사원','시각','문항','응답','정오','오개념','힌트횟수','시도횟수','경과초'];return '\uFEFF'+[header,...rows.map(r=>[name,r.time,r.mission,r.answer,r.correct?'정답':'오답',r.misconception,r.hintCount,r.attempt,r.seconds])].map(r=>r.map(csvEscape).join(',')).join('\r\n')}
