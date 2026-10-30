
/* ===== Gallery runtime: this exact function is exported inside every embed code ===== */
function DriveFolio(root,c){
if(!root)return;
var d=document;
if(!d.getElementById('dfg-css')){var st=d.createElement('style');st.id='dfg-css';st.textContent=[
'.dfg{position:relative;width:100%;max-width:100%;min-width:0;overflow-x:clip;background:var(--bg);font-family:system-ui,-apple-system,"Segoe UI",Roboto,sans-serif;line-height:1.4}',
'.dfg *{box-sizing:border-box}',
'.dfg button{touch-action:manipulation;-webkit-tap-highlight-color:transparent;font:inherit}',
'.dfg-btn:active{transform:scale(.92)}',
'@media(max-width:520px){.dfg-btn{width:36px;height:36px;margin-top:-18px}.dfg-btn svg{width:18px;height:18px}.dfg-prev{left:8px}.dfg-next{right:8px}.dfg-cap{font-size:13px;padding:20px 10px 8px}.dfg-th{gap:6px;padding-top:10px}}',
'.dfg img{display:block;width:100%;height:100%;max-width:100%;object-fit:cover;margin:0;padding:0;border:0;background:rgba(127,127,127,.12);-webkit-user-drag:none;user-select:none}',
'.dfg-it{position:relative;overflow:hidden;border-radius:var(--r);cursor:zoom-in;margin:0}',
'.dfg-nolb .dfg-it{cursor:default}',
'.dfg-it img{transition:transform .6s cubic-bezier(.2,.7,.2,1)}',
'.dfg-hover .dfg-it:hover img{transform:scale(1.07)}',
'.dfg-cap{position:absolute;left:0;right:0;bottom:0;padding:24px 12px 10px;color:#fff;font-size:14px;font-weight:500;background:linear-gradient(transparent,rgba(0,0,0,.7));pointer-events:none;z-index:2}',
'.dfg-grid{display:grid;grid-template-columns:repeat(var(--c),minmax(0,1fr));gap:var(--g)}',
'.dfg-grid .dfg-it{aspect-ratio:var(--ar)}',
'.dfg-masonry{column-count:var(--c);column-gap:var(--g)}',
'.dfg-masonry .dfg-it{break-inside:avoid;-webkit-column-break-inside:avoid;margin-bottom:var(--g)}',
'.dfg-masonry img{height:auto;min-height:60px}',
'.dfg-car{position:relative;overflow:hidden}',
'.dfg-track{display:flex;gap:var(--g);transition:transform .45s cubic-bezier(.22,.8,.25,1);touch-action:pan-y;will-change:transform}',
'.dfg-track .dfg-it{flex:0 0 calc((100% - var(--g) * (var(--c) - 1)) / var(--c));aspect-ratio:var(--ar)}',
'.dfg-swbox{position:relative}',
'.dfg-swipe{display:flex;gap:var(--g);overflow-x:auto;scroll-snap-type:x mandatory;scroll-behavior:smooth;-webkit-overflow-scrolling:touch;scrollbar-width:none;padding:6px 2px 16px}',
'.dfg-swipe::-webkit-scrollbar{display:none}',
'.dfg-swipe .dfg-it{flex:0 0 var(--sw);scroll-snap-align:start;aspect-ratio:var(--ar);box-shadow:0 8px 22px rgba(0,0,0,.16)}',
'.dfg-show{position:relative;aspect-ratio:var(--ar);overflow:hidden;border-radius:var(--r);touch-action:pan-y;background:#111}',
'.dfg-show .dfg-it{position:absolute;top:0;left:0;width:100%;height:100%;opacity:0;transition:opacity .7s ease;border-radius:0}',
'.dfg-show .dfg-it.on{opacity:1;z-index:1}',
'.dfg-kb .dfg-it img{transform:scale(1.02);transition:transform calc(var(--iv) + 2s) linear}',
'.dfg-kb .dfg-it:not(.on) img{transition:transform 0s linear 1.2s}',
'.dfg-kb .dfg-it.on.k0 img{transform:scale(1.2) translate(2%,1.5%)}',
'.dfg-kb .dfg-it.on.k1 img{transform:scale(1.2) translate(-2%,-1.5%)}',
'.dfg-kb .dfg-it.on.k2 img{transform:scale(1.2) translate(-2%,1.5%)}',
'.dfg-kb .dfg-it.on.k3 img{transform:scale(1.2) translate(2%,-1.5%)}',
'.dfg-btn{position:absolute;top:50%;z-index:3;width:42px;height:42px;margin:-21px 0 0;padding:0;border:0;border-radius:50%;background:rgba(255,255,255,.9);color:#111;display:flex;align-items:center;justify-content:center;cursor:pointer;box-shadow:0 3px 12px rgba(0,0,0,.25);transition:transform .2s,background .2s;line-height:1;min-width:0;min-height:0}',
'.dfg-btn:hover{background:#fff;transform:scale(1.08)}',
'.dfg-btn svg{width:20px;height:20px;display:block}',
'.dfg-prev{left:12px}.dfg-next{right:12px}',
'.dfg-dots{display:flex;justify-content:center;flex-wrap:wrap;gap:7px;margin-top:14px}',
'.dfg-dot{width:8px;height:8px;min-width:0;min-height:0;border-radius:99px;border:0;padding:0;margin:0;background:rgba(127,127,127,.4);cursor:pointer;transition:all .3s}',
'.dfg-dot.on{width:24px;background:var(--ac)}',
'.dfg-show .dfg-dots{position:absolute;left:0;right:0;bottom:14px;z-index:3;margin:0}',
'.dfg-show .dfg-dot{background:rgba(255,255,255,.55)}.dfg-show .dfg-dot.on{background:#fff}',
'.dfg-lb{position:fixed;top:0;left:0;right:0;bottom:0;z-index:2147483000;background:rgba(8,8,12,.94);display:flex;align-items:center;justify-content:center;opacity:0;transition:opacity .2s;touch-action:none;overscroll-behavior:contain}',
'.dfg-lb.on{opacity:1}',
'.dfg-lb img{max-width:94vw;max-height:84vh;max-height:84dvh;width:auto;height:auto;object-fit:contain;border-radius:6px;box-shadow:0 20px 60px rgba(0,0,0,.5);user-select:none}',
'.dfg-lb .dfg-btn{position:fixed}',
'.dfg-lb .dfg-x{top:18px;right:18px;margin:0}',
'.dfg-lbcap{position:fixed;left:0;right:0;bottom:18px;text-align:center;color:#e5e7eb;font:14px system-ui,sans-serif;padding:0 60px}',
'.dfg-credit{text-align:right;font-size:11px;margin-top:8px;opacity:.55}',
'.dfg-credit a{color:inherit;text-decoration:none}',
'.dfg-msg{padding:30px;text-align:center;color:#888;font-size:14px}',
'.dfg-view{animation:dfgIn .28s ease both}',
'@keyframes dfgIn{from{opacity:0;transform:translateY(8px)}to{opacity:1;transform:none}}',
'.dfg-ag{display:grid;grid-template-columns:repeat(var(--acn),minmax(0,1fr));gap:calc(var(--g) + 10px) var(--g)}',
'.dfg-al{position:relative;display:block;width:100%;padding:12px 12px 0 0;margin:0;border:0;background:none;text-align:left;cursor:pointer;color:inherit;font:inherit;min-width:0}',
'.dfg-alimg{position:relative;aspect-ratio:var(--aar);border-radius:var(--r);overflow:hidden;background:rgba(127,127,127,.18);box-shadow:0 2px 6px rgba(0,0,0,.12),6px -6px 0 -1px rgba(127,127,127,.32),12px -12px 0 -2px rgba(127,127,127,.18);transition:transform .25s ease,box-shadow .25s ease}',
'.dfg-al:hover .dfg-alimg{transform:translateY(-3px);box-shadow:0 10px 22px rgba(0,0,0,.18),6px -6px 0 -1px rgba(127,127,127,.32),12px -12px 0 -2px rgba(127,127,127,.18)}',
'.dfg-al:active .dfg-alimg{transform:scale(.98)}',
'.dfg-alimg img{transition:transform .6s cubic-bezier(.2,.7,.2,1)}',
'.dfg-al:hover .dfg-alimg img{transform:scale(1.06)}',
'.dfg-alcap{padding:10px 2px 2px;min-width:0}',
'.dfg-ov .dfg-alcap{position:absolute;left:0;right:12px;bottom:0;padding:42px 14px 12px;color:#fff;background:linear-gradient(transparent,rgba(0,0,0,.78));border-radius:0 0 var(--r) var(--r);pointer-events:none}',
'.dfg-alt{font-weight:700;font-size:16px;line-height:1.25;overflow-wrap:anywhere}',
'.dfg-als{font-size:12.5px;opacity:.78;margin-top:3px}',
'.dfg-tag{position:absolute;top:8px;right:8px;z-index:2;font-size:11.5px;font-weight:700;color:#fff;background:rgba(0,0,0,.55);padding:4px 8px;border-radius:99px;-webkit-backdrop-filter:blur(4px);backdrop-filter:blur(4px)}',
'.dfg-list{grid-template-columns:minmax(0,1fr)!important;gap:8px}',
'.dfg-list .dfg-al{display:flex;align-items:center;gap:12px;padding:12px 14px;border:1px solid rgba(127,127,127,.28);border-radius:var(--r);transition:background .2s,border-color .2s}',
'.dfg-list .dfg-al:hover{background:rgba(127,127,127,.08);border-color:var(--ac)}',
'.dfg-list .dfg-alcap{flex:1;padding:0}',
'.dfg-list .dfg-chev{opacity:.5;flex:none;width:18px;height:18px}',
'.dfg-hd{display:flex;align-items:center;flex-wrap:wrap;gap:6px 10px;margin:0 0 14px}',
'.dfg-back{display:inline-flex;align-items:center;gap:4px;border:0;border-radius:99px;padding:8px 14px 8px 10px;background:rgba(127,127,127,.15);color:inherit;cursor:pointer;font-weight:600;font-size:14px;line-height:1;min-height:0;min-width:0}',
'.dfg-back:hover{background:rgba(127,127,127,.25)}',
'.dfg-back svg{width:16px;height:16px}',
'.dfg-cr{font-size:13px;opacity:.75;min-width:0;overflow-wrap:anywhere}',
'.dfg-cr button{border:0;background:none;padding:0;margin:0;color:inherit;cursor:pointer;text-decoration:underline;font:inherit;min-height:0;min-width:0}',
'.dfg-ht{width:100%;font-size:21px;font-weight:800;line-height:1.2;margin:4px 0 0;overflow-wrap:anywhere}',
'.dfg-hs{width:100%;font-size:13px;opacity:.7;margin-top:-2px}',
'.dfg-sec{font-weight:700;font-size:15px;margin:22px 0 12px}',
'@media(max-width:520px){.dfg-alt{font-size:14.5px}.dfg-ht{font-size:18px}.dfg-ov .dfg-alcap{padding:34px 10px 9px}}',
'.dfg-th{position:relative;display:flex;gap:8px;overflow-x:auto;overflow-y:hidden;padding:12px 2px 6px;scroll-behavior:smooth;-webkit-overflow-scrolling:touch;scrollbar-width:none;-ms-overflow-style:none;cursor:grab}',
'.dfg-th::-webkit-scrollbar{display:none}',
'.dfg-th.fade{-webkit-mask-image:linear-gradient(90deg,transparent 0,#000 28px,#000 calc(100% - 28px),transparent 100%);mask-image:linear-gradient(90deg,transparent 0,#000 28px,#000 calc(100% - 28px),transparent 100%)}',
'.dfg-th.drag{cursor:grabbing;scroll-behavior:auto}',
'.dfg-th.drag .dfg-tb{pointer-events:none}',
'html.dfg-frame,html.dfg-frame body{margin:0;scrollbar-width:none;-ms-overflow-style:none}',
'html.dfg-frame::-webkit-scrollbar,html.dfg-frame body::-webkit-scrollbar{display:none}',
'.dfg-tb{position:relative;flex:0 0 auto;width:clamp(58px,13vw,92px);aspect-ratio:10/7;border-radius:min(var(--r),10px);overflow:hidden;cursor:pointer;opacity:.55;border:0;padding:0;margin:0;background:rgba(127,127,127,.15);box-shadow:inset 0 0 0 2px transparent;transition:opacity .2s,transform .2s;min-width:0;min-height:0}',
'.dfg-tb:hover{opacity:.9;transform:translateY(-2px)}',
'.dfg-tb.on{opacity:1}',
'.dfg-tb.on:after{content:"";position:absolute;inset:0;border-radius:inherit;box-shadow:inset 0 0 0 3px var(--ac)}',
'.dfg .dfg-tb img{width:100%;height:100%;object-fit:cover;border-radius:0}',
'.dfg-more{font-size:13px;font-weight:600;opacity:.7;margin:16px 2px 0}',
'.dfg-story{container-type:inline-size}',
'.dfg-story .dfg-it:after{content:"";position:absolute;inset:0;z-index:1;pointer-events:none;background:linear-gradient(180deg,rgba(0,0,0,.28),rgba(0,0,0,0) 30%,rgba(0,0,0,0) 55%,rgba(0,0,0,.45))}',
'.dfg-story .dfg-it.big:after{background:radial-gradient(ellipse at center,rgba(0,0,0,.42),rgba(0,0,0,.12) 70%)}',
'.dfg-st{position:absolute;z-index:2;pointer-events:none;color:#fff;max-width:min(78%,680px);text-shadow:0 2px 20px rgba(0,0,0,.55),0 1px 3px rgba(0,0,0,.45);--tx:0px;--ty:22px}',
'.dfg-st>*{opacity:0;transform:translate(var(--tx),var(--ty));transition:opacity .9s ease .35s,transform 1.1s cubic-bezier(.2,.7,.2,1) .35s}',
'.dfg-st>.dfg-sh{transition-delay:.5s}',
'.dfg-it.on .dfg-st>*{opacity:1;transform:none}',
'.dfg-sh{font-weight:800;font-size:clamp(17px,4cqw,42px);line-height:1.08;letter-spacing:-.01em;overflow-wrap:anywhere}',
'.dfg-sh:after{content:"";display:block;width:clamp(28px,4cqw,48px);height:3px;border-radius:2px;background:var(--ac);margin-top:clamp(6px,1cqw,12px)}',
'.dfg-sk{font-size:clamp(9px,1.25cqw,13px);font-weight:700;letter-spacing:.2em;text-transform:uppercase;opacity:.92;margin-bottom:clamp(3px,.6cqw,8px)}',
'.dfg-st.big .dfg-sh{font-size:clamp(22px,6cqw,66px)}',
'.dfg-ts-elegant .dfg-sh{font-family:Georgia,"Times New Roman",serif;font-style:italic;font-weight:500;letter-spacing:0}',
'.dfg-ts-caps .dfg-sh{text-transform:uppercase;letter-spacing:.14em;font-weight:700;font-size:clamp(14px,3cqw,30px)}',
'.dfg-ts-caps .dfg-st.big .dfg-sh{font-size:clamp(18px,4.6cqw,48px)}',
'.dfg-st.p-c{left:50%;top:50%;transform:translate(-50%,-50%);text-align:center;--ty:0px}',
'.dfg-st.p-c>*{transform:scale(.92)}',
'.dfg-st.p-c .dfg-sh:after,.dfg-st.p-b .dfg-sh:after,.dfg-st.p-t .dfg-sh:after{margin-left:auto;margin-right:auto}',
'.dfg-st.p-bl{left:6%;bottom:11%}',
'.dfg-st.p-br{right:6%;bottom:11%;text-align:right;--tx:0px}',
'.dfg-st.p-tl{left:6%;top:9%;--ty:-22px}',
'.dfg-st.p-tr{right:6%;top:9%;text-align:right;--ty:-22px}',
'.dfg-st.p-b{left:50%;bottom:11%;transform:translateX(-50%);text-align:center}',
'.dfg-st.p-t{left:50%;top:9%;transform:translateX(-50%);text-align:center;--ty:-22px}',
'.dfg-st.p-l{left:max(64px,7%);top:50%;transform:translateY(-50%);--tx:-30px;--ty:0px}',
'.dfg-st.p-r{right:max(64px,7%);top:50%;transform:translateY(-50%);text-align:right;--tx:30px;--ty:0px}',
'.dfg-st.p-br .dfg-sh:after,.dfg-st.p-tr .dfg-sh:after,.dfg-st.p-r .dfg-sh:after{margin-left:auto}',
'.dfg-st.p-br,.dfg-st.p-tr{--tx:30px;--ty:0px}',
'@media(max-width:520px){.dfg-st{max-width:84%}.dfg-st.p-l{left:52px}.dfg-st.p-r{right:52px}.dfg-st.p-l,.dfg-st.p-r{max-width:calc(100% - 104px)}}',
'.dfg-pgw{position:relative}',
'.dfg-pbar{display:flex;align-items:center;justify-content:center;gap:12px;margin-top:10px}',
'.dfg-pbar .dfg-nb{padding:7px 12px;min-height:34px}',
'.dfg-pl{font-size:13px;font-weight:600;opacity:.75;min-width:84px;text-align:center}',
'.dfg-hero .dfg-st.p-bl{left:max(72px,6%);bottom:16%}',
'@media(max-width:520px){.dfg-hero .dfg-btn{display:none}.dfg-hero .dfg-st.p-bl{left:16px;bottom:18%}}',
'.dfg-mcols{display:flex;gap:var(--g);align-items:flex-start}',
'.dfg-mcol{flex:1 1 0;min-width:0;display:flex;flex-direction:column;gap:var(--g)}',
'.dfg-hero{margin-bottom:calc(var(--g) + 8px)}',
'.dfg-hero .dfg-it{cursor:pointer}',
'.dfg-hero .dfg-sh:after{display:none}',
'.dfg-hgo{display:inline-block;margin-top:clamp(6px,1.2cqw,12px);padding:7px 14px;border-radius:99px;background:var(--ac);color:#fff;font-size:13px;font-weight:700;letter-spacing:0;text-transform:none;font-style:normal;font-family:system-ui,sans-serif;text-shadow:none;box-shadow:0 4px 14px rgba(0,0,0,.25)}',
'.dfg-nav{display:flex;align-items:center;gap:8px;margin-top:12px}',
'.dfg-view:not(.dfg-fit) .dfg-nav{position:sticky;bottom:8px;z-index:5;padding:8px;margin-top:16px;border-radius:16px;background:rgba(255,255,255,.93);-webkit-backdrop-filter:blur(8px);backdrop-filter:blur(8px);box-shadow:0 6px 20px rgba(0,0,0,.14);color:#111}',
'.dfg-nm{display:flex;gap:6px;justify-content:center;flex:1 1 auto;min-width:0}',
'.dfg-nb{display:inline-flex;align-items:center;gap:6px;min-width:0;border:0;border-radius:99px;padding:9px 14px;background:rgba(127,127,127,.16);color:inherit;cursor:pointer;font-weight:600;font-size:13.5px;line-height:1.1;min-height:40px;transition:background .2s,transform .15s}',
'.dfg-nb:hover{background:rgba(127,127,127,.28)}',
'.dfg-nb:active{transform:scale(.96)}',
'.dfg-nb:disabled{opacity:.35;cursor:default;transform:none}',
'.dfg-nb svg{width:16px;height:16px;flex:none}',
'.dfg-nb span{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;min-width:0}',
'.dfg-np,.dfg-nn{flex:0 1 auto;max-width:34%}',
'.dfg-nh{background:var(--ac);color:#fff}.dfg-nh:hover{background:var(--ac);filter:brightness(1.08)}',
'@media(max-width:520px){.dfg-nb{padding:9px 11px;font-size:13px}.dfg-np span,.dfg-nn span{display:none}}',
'.dfg-fit .dfg-hd{margin:0 0 10px;gap:2px 10px}',
'.dfg-fit .dfg-cr{width:100%;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}',
'.dfg-fit .dfg-ht{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;font-size:19px;margin:0}',
'.dfg-fit .dfg-alt{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}',
'.dfg-alh .dfg-alimg{aspect-ratio:auto;height:var(--alh)}',
'.dfg-pz{position:absolute;top:10px;right:10px;z-index:4;width:34px;height:34px;min-width:0;min-height:0;padding:0;margin:0;border:0;border-radius:50%;background:rgba(0,0,0,.45);color:#fff;display:flex;align-items:center;justify-content:center;cursor:pointer;opacity:.75;transition:opacity .2s}',
'.dfg-pz:hover,.dfg-pz:focus-visible{opacity:1}',
'.dfg-pz svg{width:15px;height:15px}',
'.dfg-st.p-tr,.dfg-st.p-t{top:max(9%,54px)}',
'.dfg-dot{position:relative}.dfg-dot:before{content:"";position:absolute;left:-8px;right:-8px;top:-8px;bottom:-8px}',
'.dfg-it:focus-visible,.dfg-al:focus-visible,.dfg-nb:focus-visible,.dfg-btn:focus-visible,.dfg-dot:focus-visible,.dfg-pz:focus-visible,.dfg-tb:focus-visible,.dfg-back:focus-visible,.dfg-cr button:focus-visible{outline:3px solid var(--ac);outline-offset:2px}',
'.dfg-show .dfg-it:focus-visible{outline-offset:-4px}',
'@media (prefers-reduced-motion: reduce){.dfg-kb .dfg-it img,.dfg-kb .dfg-it.on img,.dfg-hover .dfg-it:hover img,.dfg-al:hover .dfg-alimg img{transform:none!important;transition:none!important}.dfg-show .dfg-it,.dfg-st>*,.dfg-track,.dfg-view,.dfg-alimg,.dfg-lb{transition:none!important;animation:none!important}.dfg-st>*{opacity:1;transform:none}}',
'.dfg-swipe{position:relative}'
].join('');d.head.appendChild(st);}
if(root.__dfgStop)root.__dfgStop();
var L=c.layout||'grid',nav=c.nav!==false,imgs=[],meta=[],timers=[],ro=null,onR=null,rz=null;
var IL='M15 18l-6-6 6-6',IR='M9 18l6-6-6-6',IX='M18 6L6 18M6 6l12 12';
root.__dfgStop=function(){for(var t=0;t<timers.length;t++)clearInterval(timers[t]);timers=[];if(ro)ro.disconnect();if(rz)window.removeEventListener('resize',rz);};
function el(t,k,h){var e=d.createElement(t);if(k)e.className=k;if(h!=null)e['inner'+'HTML']=h;return e;}
function ic(p){return '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="'+p+'"/><\/svg>';}
function nb(k,p,lab){var b=el('button','dfg-btn '+k,ic(p));b.type='button';b.setAttribute('aria-label',lab);return b;}
function drv(id,w){return 'https://lh3.googleusercontent.com/d/'+id+'=w'+w;}
function perC(){return parseInt(S.getPropertyValue('--c'),10)||1;}
function ncmp(a,b){return String(a.n||a.t||'').localeCompare(String(b.n||b.t||''),undefined,{numeric:true,sensitivity:'base'});}
function srt(a){a=a.slice();var s=c.sort||'none';
 if(s==='name')a.sort(ncmp);else if(s==='namez')a.sort(function(x,y){return ncmp(y,x);});
 else if(s==='new')a.sort(function(x,y){return ((y.d||0)-(x.d||0))||ncmp(y,x);});
 else if(s==='old')a.sort(function(x,y){return ((x.d||0)-(y.d||0))||ncmp(x,y);});
  return a;}
function prep(a){a=srt(a);return c.max>0?a.slice(0,c.max):a;}
function rng(a,b){var r=[];for(var q=a;q<b;q++)r.push(q);return r;}
function tsrc(im){if(im.i)return drv(im.i,320);return /googleusercontent\.com/.test(im.s)?im.s.replace(/=w\d+$/,'=w320'):im.s;}
function strip(ids,host,click){var w=el('div','dfg-th'),bs=[];
 ids.forEach(function(ix){var im=imgs[ix],b=el('button','dfg-tb'),g=d.createElement('img');b.type='button';b.setAttribute('aria-label','Photo '+(ix+1));
  g.loading='lazy';g.referrerPolicy='no-referrer';g.alt='';g.draggable=false;
  g.addEventListener('error',function(){if(im.i&&!g.__f){g.__f=1;g.src='https://drive.google.com/thumbnail?id='+im.i+'&sz=w320';}});
  g.src=tsrc(im);b.appendChild(g);b.onclick=function(e){e.stopPropagation();click(ix);};w.appendChild(b);bs.push(b);});
 host.appendChild(w);
 var dx0=null,sl0=0,mv=false;
 w.addEventListener('pointerdown',function(e){if(e.pointerType!=='mouse')return;dx0=e.clientX;sl0=w.scrollLeft;mv=false;});
 w.addEventListener('pointermove',function(e){if(dx0===null)return;var dd=e.clientX-dx0;if(Math.abs(dd)>5){mv=true;w.className='dfg-th drag'+(w.scrollWidth>w.clientWidth+2?' fade':'');}if(mv)w.scrollLeft=sl0-dd;});
 var up=function(){if(dx0===null)return;dx0=null;setTimeout(function(){w.className='dfg-th'+(w.scrollWidth>w.clientWidth+2?' fade':'');},0);};
 w.addEventListener('pointerup',up);w.addEventListener('pointerleave',up);
 setTimeout(function(){if(w.scrollWidth>w.clientWidth+2)w.className='dfg-th fade';},80);
 return {mark:function(ix){var k=ids.indexOf(ix);for(var j=0;j<bs.length;j++)bs[j].className='dfg-tb'+(j===k?' on':'');if(w.className.indexOf('fade')<0&&w.scrollWidth>w.clientWidth+2)w.className+=' fade';var b=bs[k];if(b&&w.scrollWidth>w.clientWidth)w.scrollTo({left:b.offsetLeft-(w.clientWidth-b.clientWidth)/2,behavior:'smooth'});}};}
var inFrame=false;try{inFrame=window.self!==window.top;}catch(e){inFrame=true;}
function beacon(o){if(c.stats===false||c.__pv)return;try{o.src='embed';o.gid=(root.id||'').slice(0,40);o.ctx=(function(){try{return{tz:Intl.DateTimeFormat().resolvedOptions().timeZone,lang:navigator.language,sw:screen.width,tp:navigator.maxTouchPoints||0}}catch(e){return null}})();o.v=c.v||1;o.layout=c.layout;o.mode=c.albums?(c.amode||'cards'):'flat';
 var ao=location.ancestorOrigins,hst=ao&&ao.length?ao[ao.length-1]:(inFrame?(d.referrer||location.href):location.href);o.host=String(hst).slice(0,200);
 var s=JSON.stringify(o),u='https://qbubwemdvwflxvxwesrl.supabase.co/functions/v1/df-api/track';if(navigator.sendBeacon)navigator.sendBeacon(u,s);else fetch(u,{method:'POST',body:s,keepalive:true});}catch(e){}}
function creditEl(){var w=el('div','dfg-credit'),a=d.createElement('a');a.href='https://drivefolio.dijaedadula.com/?utm_source=embed&utm_medium=credit&utm_campaign=drivefolio&ref='+encodeURIComponent(root.id||'');a.target='_blank';a.rel='noopener';a.textContent='Made with DriveFolio';a.addEventListener('click',function(){beacon({kind:'credit'});});w.appendChild(a);return w;}
var ierr=0;function imgFail(){if(!ierr++)setTimeout(function(){beacon({kind:'err',n:ierr,detail:'images failed to load: '+ierr});},6000);}
if(inFrame)d.documentElement.className+=(d.documentElement.className.indexOf('dfg-frame')<0?' dfg-frame':'');
var fitEls=[],FIT=c.fit!==false;
function availH(){if(c.fitH)return c.fitH;var hh=window.innerHeight||700;if(inFrame){var t=root.getBoundingClientRect().top+(window.pageYOffset||0);hh-=Math.max(0,t);}return Math.max(220,hh-2);}
function fitFrame(){if(!FIT||!fitEls.length)return;var q;
 for(q=0;q<fitEls.length;q++){fitEls[q].style.height='';fitEls[q].style.aspectRatio='';}
 var over=root.getBoundingClientRect().height-availH();
 if(over>0){var hh=fitEls[0].getBoundingClientRect().height-over;if(hh<90)hh=90;for(q=0;q<fitEls.length;q++){fitEls[q].style.height=hh+'px';fitEls[q].style.aspectRatio='auto';}}}
var S=root.style;
S.setProperty('--g',(c.gap||0)+'px');S.setProperty('--r',(c.radius||0)+'px');S.setProperty('--bg',c.bg||'transparent');
S.setProperty('--ar',c.ratio||'4/3');S.setProperty('--ac',c.accent||'#5b5bf7');S.setProperty('--iv',(c.interval||4)+'s');
root.className='dfg'+(c.lightbox===false?' dfg-nolb':'');
function cols(){var w=root.clientWidth||900,n=Math.max(1,c.cols||3);
 if(L==='carousel'||L==='swipe'){if(w<560)n=1;else if(w<900)n=Math.min(n,2);}
 else if(w<480)n=Math.min(n,2);else if(w<820)n=Math.min(n,3);
 S.setProperty('--c',n);S.setProperty('--sw',(100/(n+0.3)).toFixed(2)+'%');}
function want(){var w=root.clientWidth||900,n=(L==='slideshow'||L==='kenburns'||L==='story')?1:perC(),px=w/n*(window.devicePixelRatio||1);return Math.max(400,Math.min(1600,Math.ceil(px/200)*200));}
function sized(im){var W=want();if(im.i)return drv(im.i,W);if(/googleusercontent\.com/.test(im.s))return im.s.replace(/=w\d+$/,'=w'+W);return im.s;}
var SL=function(){return L==='slideshow'||L==='kenburns'||L==='story';};
var RM=!!(window.matchMedia&&window.matchMedia('(prefers-reduced-motion: reduce)').matches);
function ldi(it){var g=it&&it.querySelector('img');if(g&&!g.getAttribute('src')&&g.__src)g.src=g.__src;}
function item(im,i){var a=el('div','dfg-it'),g=d.createElement('img');
 g.alt=im.t||('Image '+(i+1));g.loading=i<(L==='slideshow'||L==='kenburns'||L==='story'?3:8)?'eager':'lazy';g.decoding='async';g.referrerPolicy='no-referrer';g.draggable=false;
 g.addEventListener('error',function(){if(im.i&&!g.__f){g.__f=1;g.src='https://drive.google.com/thumbnail?id='+im.i+'&sz=w1600';}else if(!g.__x){g.__x=1;g.setAttribute('data-dfg-err','1');imgFail();}});
 if(SL()&&i>1)g.__src=sized(im);else g.src=sized(im);a.appendChild(g);
 if(c.captions&&im.t){var cp=el('div','dfg-cap');cp.textContent=im.t;a.appendChild(cp);}
 if(c.lightbox!==false){a.addEventListener('click',function(){if(!root.__drag)lb(i);});
  a.tabIndex=SL()?-1:0;a.setAttribute('role','button');a.setAttribute('aria-label','Open photo '+(i+1)+(im.t?': '+im.t:''));
  a.addEventListener('keydown',function(e){if(e.key==='Enter'||e.key===' '){e.preventDefault();lb(i);}});}
 return a;}
function dots(n,host,go){var w=el('div','dfg-dots');for(var k=0;k<n;k++){(function(k){var b=el('button','dfg-dot');b.type='button';b.setAttribute('aria-label','Go to slide '+(k+1));b.onclick=function(e){e.stopPropagation();go(k);};w.appendChild(b);})(k);}host.appendChild(w);return w;}
function mark(w,k){if(!w)return;for(var j=0;j<w.children.length;j++)w.children[j].className='dfg-dot'+(j===k?' on':'');}
function drag(t,fn){var x0=null;
 t.addEventListener('pointerdown',function(e){if(e.target.closest&&e.target.closest('.dfg-btn,.dfg-dot,.dfg-nb,.dfg-pz'))return;x0=e.clientX;root.__drag=false;});
 t.addEventListener('pointermove',function(e){if(x0!==null&&Math.abs(e.clientX-x0)>8)root.__drag=true;});
 t.addEventListener('pointerup',function(e){if(x0===null)return;var dx=e.clientX-x0;x0=null;if(Math.abs(dx)>40)fn(dx<0?1:-1);setTimeout(function(){root.__drag=false;},30);});
 t.addEventListener('pointercancel',function(){x0=null;root.__drag=false;});}
function paged(box,total,plan,draw){var p=0,st=[0],bar=el('div','dfg-pbar'),lab=el('span','dfg-pl');
 var mk=function(k,pth,t){var b=el('button','dfg-nb '+k,ic(pth));b.type='button';b.setAttribute('aria-label',t);return b;};
 var pb=mk('dfg-pp',IL,'Previous page'),pn=mk('dfg-pn',IR,'Next page');bar.appendChild(pb);bar.appendChild(lab);bar.appendChild(pn);
 box.parentNode.insertBefore(bar,box.nextSibling);
 function go(k){var n=st.length;p=((k%n)+n)%n;draw(st[p],p+1<n?st[p+1]:total);bar.style.display=n>1?'':'none';lab.textContent='Page '+(p+1)+' of '+n;}
 pb.onclick=function(e){e.stopPropagation();go(p-1);};pn.onclick=function(e){e.stopPropagation();go(p+1);};
 drag(box,function(s){if(st.length>1)go(p+s);});
 return {re:function(){var cur=st[p]||0;bar.style.display='';st=plan();if(!st.length)st=[0];var np=0;for(var q=0;q<st.length;q++)if(st[q]<=cur)np=q;go(np);},go:go};}
function pauser(host,s){var b=el('button','dfg-pz');b.type='button';
 var set=function(){b['inner'+'HTML']=ic(s.off?'M8 5v14l11-7z':'M8 5v14M16 5v14');b.setAttribute('aria-label',s.off?'Play slideshow':'Pause slideshow');b.setAttribute('aria-pressed',s.off?'true':'false');};
 set();b.onclick=function(e){e.stopPropagation();s.off=!s.off;set();};host.appendChild(b);
 host.addEventListener('mouseenter',function(){s.hov=true;});host.addEventListener('mouseleave',function(){s.hov=false;});
 host.addEventListener('focusin',function(e){if(e.target!==b)s.foc=true;});host.addEventListener('focusout',function(){s.foc=false;});
 return function(){return !s.off&&!s.hov&&!s.foc&&!d.hidden&&!d.querySelector('.dfg-lb');};}
function auto(fn,host){if(c.autoplay===false)return;var go=pauser(host,{off:RM});
 timers.push(setInterval(function(){if(go())fn();},Math.max(1500,(c.interval||4)*1000)));}
function lb(i){var o=el('div','dfg-lb'),im=d.createElement('img'),cap=el('div','dfg-lbcap'),x=nb('dfg-x',IX,'Close photo viewer'),n=imgs.length,ov=d.body.style.overflow,swp=false,x0=null,back=d.activeElement;
 o.setAttribute('role','dialog');o.setAttribute('aria-modal','true');o.setAttribute('aria-label','Photo viewer');cap.setAttribute('aria-live','polite');
 im.referrerPolicy='no-referrer';im.alt='';im.addEventListener('error',function(){var m=im.__m;if(m&&m.i&&!im.__t){im.__t=1;im.src='https://drive.google.com/thumbnail?id='+m.i+'&sz=w2000';}});o.appendChild(im);o.appendChild(cap);o.appendChild(x);
 var set=function(k){i=((k%n)+n)%n;var m=imgs[i];im.__m=m;im.__t=0;var LW=Math.min(2400,Math.ceil(Math.max(innerWidth,innerHeight)*(window.devicePixelRatio||1)/200)*200);im.src=m.i?drv(m.i,LW):(m.f||m.s);im.alt=m.t||('Photo '+(i+1));cap.textContent=(c.captions&&m.t?m.t+'   \u00b7   ':'')+(i+1)+' / '+n;};
 if(n>1){var p=nb('dfg-prev',IL,'Previous photo'),q=nb('dfg-next',IR,'Next photo');p.onclick=function(e){e.stopPropagation();set(i-1);};q.onclick=function(e){e.stopPropagation();set(i+1);};o.appendChild(p);o.appendChild(q);}
 var kd=function(e){if(e.key==='Escape')close();else if(e.key==='ArrowLeft')set(i-1);else if(e.key==='ArrowRight')set(i+1);
  else if(e.key==='Tab'){var f=[].slice.call(o.querySelectorAll('button'));if(!f.length)return;var a=f.indexOf(d.activeElement);e.preventDefault();f[(a+(e.shiftKey?-1:1)+f.length)%f.length].focus();}};
 var close=function(){o.className='dfg-lb';d.removeEventListener('keydown',kd);d.body.style.overflow=ov;setTimeout(function(){o.remove();},260);try{if(back&&back.focus)back.focus();}catch(e){}};
 x.onclick=function(e){e.stopPropagation();close();};
 o.onclick=function(e){if(swp){swp=false;return;}if(e.target===o)close();};
 o.addEventListener('pointerdown',function(e){x0=e.clientX;});
 o.addEventListener('pointerup',function(e){if(x0===null)return;var dx=e.clientX-x0;x0=null;if(Math.abs(dx)>50&&n>1){swp=true;set(i+(dx<0?1:-1));}});
 set(i);d.body.style.overflow='hidden';d.body.appendChild(o);d.addEventListener('keydown',kd);setTimeout(function(){try{x.focus({preventScroll:true});}catch(e){x.focus();}},30);
 requestAnimationFrame(function(){requestAnimationFrame(function(){o.className='dfg-lb on';});});}
function build(){root['inner'+'HTML']='';
 if(!imgs.length){root.appendChild(el('div','dfg-msg','No images to show.'));return;}
 if(c.hover!==false&&(L==='grid'||L==='masonry'||L==='carousel'||L==='swipe'))root.className+=' dfg-hover';
 cols();
 if((L==='grid'||L==='masonry')&&FIT){
  var lim=(c.limit>0&&c.limit<imgs.length)?c.limit:imgs.length,bx=el('div','dfg-pgw'),gw=el('div',L==='grid'?'dfg-grid':'dfg-mcols'),ar0=String(c.ratio||'4/3').split('/'),aw=+ar0[0]||4,ah=+ar0[1]||3,forced=0,G=c.gap||0,pg=null;
  bx.appendChild(gw);root.appendChild(bx);
  if(lim<imgs.length){var mo0=el('div','dfg-more');mo0.textContent='More photos ('+(imgs.length-lim)+')';root.appendChild(mo0);strip(rng(lim,imgs.length),root,function(ix){lb(ix);});}
  var room=function(){return availH()-(root.getBoundingClientRect().height-bx.getBoundingClientRect().height);};
  var gcw=function(n){var W=gw.clientWidth||root.clientWidth||900;return (W-G*(n-1))/n;};
  var gfill=function(){var n=perC(),ch=gw.children,cnt=ch.length,r=cnt%n;gw.style.gridTemplateColumns='';
   for(var q=0;q<cnt;q++){ch[q].style.gridColumn='';if(!forced)ch[q].style.aspectRatio='';}
   if(c.fill===false||!r||n<2)return;gw.style.gridTemplateColumns='repeat('+(n*r)+',minmax(0,1fr))';
   for(q=0;q<cnt;q++){var last=q>=cnt-r;ch[q].style.gridColumn='span '+(last?n:r);if(last&&!forced)ch[q].style.aspectRatio=String(aw*n/(ah*r));}};
  var plan,draw;
  if(L==='grid'){
   plan=function(){var n=perC(),rh=gcw(n)*ah/aw,av=room(),r1=Math.max(1,Math.floor((av+G)/(rh+G))),rows=r1;forced=0;
    if(Math.ceil(lim/n)>r1||rh>av){var r2=r1+1,h1=(av-G*(r1-1))/r1,h2=(av-G*(r2-1))/r2;if(h2>=70&&Math.abs(Math.log(h2/rh))<Math.abs(Math.log(h1/rh))){rows=r2;forced=h2;}else forced=h1;forced=Math.max(60,Math.floor(forced)-1);}
    var per=rows*n,a=[];for(var s=0;s<lim;s+=per)a.push(s);return a;};
   draw=function(s,e){gw['inner'+'HTML']='';for(var i=s;i<e;i++){var it=item(imgs[i],i);if(forced){it.style.aspectRatio='auto';it.style.height=forced+'px';}gw.appendChild(it);}gfill();};
  }else{
   plan=function(){var n=perC(),cw=gcw(n),av=room(),a=[],i=0,k;
    while(i<lim){a.push(i);var hs=[],pl=0;for(k=0;k<n;k++)hs.push(0);
     while(i<lim){var hh=cw*(imgs[i].ar||0.75),m=0;for(k=1;k<n;k++)if(hs[k]<hs[m])m=k;var nh=hs[m]+(hs[m]?G:0)+hh;if(nh>av&&pl)break;hs[m]=Math.min(nh,av);pl++;i++;}}
    return a;};
   draw=function(s,e){gw['inner'+'HTML']='';var n=perC(),cw=gcw(n),av=room(),cs=[],hs=[],k;
    for(k=0;k<n;k++){var cl=el('div','dfg-mcol');gw.appendChild(cl);cs.push(cl);hs.push(0);}
    for(var i=s;i<e;i++){var im=imgs[i],hh=cw*(im.ar||0.75),m=0;for(k=1;k<n;k++)if(hs[k]<hs[m])m=k;var it=item(im,i),gp=hs[m]?G:0;if(hs[m]+gp+hh>av)hh=Math.max(60,av-hs[m]-gp);it.style.height=hh+'px';hs[m]+=gp+hh;cs[m].appendChild(it);
     (function(im,g){g.addEventListener('load',function(){if(!g.naturalWidth)return;var r=g.naturalHeight/g.naturalWidth;if(!im.ar||Math.abs(im.ar-r)>0.02){im.ar=r;clearTimeout(root.__mt);root.__mt=setTimeout(function(){if(pg)pg.re();},150);}});})(im,it.querySelector('img'));}};
  }
  pg=paged(bx,lim,plan,draw);onR=function(){pg.re();};
 }else if(L==='grid'||L==='masonry'){
  var lim=(c.limit>0&&c.limit<imgs.length)?c.limit:imgs.length,w=el('div','dfg-'+L);for(var i=0;i<lim;i++)w.appendChild(item(imgs[i],i));root.appendChild(w);
  if(L==='grid'){var fill=function(){var n=perC(),ch=w.children,cnt=ch.length,r=cnt%n,ar=String(c.ratio||'4/3').split('/'),aw=+ar[0]||4,ah=+ar[1]||3;
    w.style.gridTemplateColumns='';for(var q=0;q<cnt;q++){ch[q].style.gridColumn='';ch[q].style.aspectRatio='';}
    if(c.fill===false||!r||n<2)return;w.style.gridTemplateColumns='repeat('+(n*r)+',minmax(0,1fr))';
    for(q=0;q<cnt;q++){var last=q>=cnt-r;ch[q].style.gridColumn='span '+(last?n:r);if(last)ch[q].style.aspectRatio=String(aw*n/(ah*r));}};fill();onR=fill;}
  if(lim<imgs.length){var mo=el('div','dfg-more');mo.textContent='More photos ('+(imgs.length-lim)+')';root.appendChild(mo);strip(rng(lim,imgs.length),root,function(ix){lb(ix);});}
 }else if(L==='carousel'){
  var vp=el('div','dfg-car'),tr=el('div','dfg-track'),dh=el('div'),idx=0,dw=null,th=null,tb=c.thumbs&&imgs.length>1;
  for(var i2=0;i2<imgs.length;i2++)tr.appendChild(item(imgs[i2],i2));
  vp.appendChild(tr);root.appendChild(vp);root.appendChild(dh);
  var per=function(){return parseInt(S.getPropertyValue('--c'),10)||1;};
  var mx=function(){return Math.max(0,imgs.length-per());};
  var go=function(k){var m=mx();idx=k>m?0:(k<0?m:k);var f=tr.firstChild,fw=f?f.getBoundingClientRect().width:0;tr.style.transform='translateX(-'+(idx*(fw+(c.gap||0)))+'px)';mark(dw,idx);if(th)th.mark(idx);};
  var mkd=function(){dh['inner'+'HTML']='';dw=(nav&&!tb&&mx()>0&&mx()<30)?dots(mx()+1,dh,go):null;};
  if(nav&&imgs.length>1){var cp=nb('dfg-prev',IL,'Previous'),cn=nb('dfg-next',IR,'Next');cp.onclick=function(){go(idx-1);};cn.onclick=function(){go(idx+1);};vp.appendChild(cp);vp.appendChild(cn);}
  drag(vp,function(s){go(idx+s);});
  if(tb)th=strip(rng(0,imgs.length),root,function(ix){go(Math.min(ix,mx()));});
  fitEls=[].slice.call(tr.children);
  mkd();go(0);
  onR=function(){var m=mx();if(!dw||dw.children.length!==m+1)mkd();go(Math.min(idx,m));};
  auto(function(){go(idx+1);},vp);
 }else if(L==='swipe'){
  var bx=el('div','dfg-swbox'),sc=el('div','dfg-swipe');
  for(var i3=0;i3<imgs.length;i3++)sc.appendChild(item(imgs[i3],i3));
  bx.appendChild(sc);root.appendChild(bx);
  if(nav&&imgs.length>1){var sp=nb('dfg-prev',IL,'Previous'),sn=nb('dfg-next',IR,'Next');
   sp.onclick=function(){sc.scrollBy({left:-sc.clientWidth*0.8,behavior:'smooth'});};
   sn.onclick=function(){sc.scrollBy({left:sc.clientWidth*0.8,behavior:'smooth'});};
   bx.appendChild(sp);bx.appendChild(sn);}
  fitEls=[].slice.call(sc.children);
  if(c.thumbs&&imgs.length>1){var sth=strip(rng(0,imgs.length),root,function(ix){var it=sc.children[ix];if(it)sc.scrollTo({left:it.offsetLeft-2,behavior:'smooth'});}),stt;
   sc.addEventListener('scroll',function(){clearTimeout(stt);stt=setTimeout(function(){var best=0,bd=1e9;for(var q=0;q<sc.children.length;q++){var dd=Math.abs(sc.children[q].offsetLeft-2-sc.scrollLeft);if(dd<bd){bd=dd;best=q;}}sth.mark(best);},80);});
   sth.mark(0);}
 }else{
  var sh=el('div','dfg-show'+(L==='kenburns'||(L==='story'&&c.kb!==false)?' dfg-kb':'')+(L==='story'?' dfg-story dfg-ts-'+(c.tstyle||'modern'):'')),cur=0,dw2=null,its=[],th2=null;
  for(var i4=0;i4<imgs.length;i4++){var it=item(imgs[i4],i4);it.className+=' k'+(i4%4);if(L==='story'&&meta[i4]&&meta[i4].t){it.appendChild(ttl(meta[i4]));if(meta[i4].big)it.className+=' big';}its.push(it);sh.appendChild(it);}
  root.appendChild(sh);
  var near=function(){var len=its.length;[cur,cur+1,cur+2,cur-1].forEach(function(j){ldi(its[((j%len)+len)%len]);});};
  var show=function(k){var len=its.length;k=((k%len)+len)%len;its[cur].className=its[cur].className.replace(' on','');if(c.lightbox!==false)its[cur].tabIndex=-1;cur=k;its[cur].className+=' on';if(c.lightbox!==false)its[cur].tabIndex=0;near();mark(dw2,cur);if(th2)th2.mark(cur);};
  near();if(c.lightbox!==false&&its[0])its[0].tabIndex=0;
  if(nav&&imgs.length>1){var hp=nb('dfg-prev',IL,'Previous'),hn=nb('dfg-next',IR,'Next');hp.onclick=function(){show(cur-1);};hn.onclick=function(){show(cur+1);};sh.appendChild(hp);sh.appendChild(hn);if(imgs.length<=20&&!c.thumbs)dw2=dots(imgs.length,sh,show);}
  if(c.thumbs&&imgs.length>1)th2=strip(rng(0,imgs.length),root,function(ix){show(ix);});
  drag(sh,function(s){show(cur+s);});
  fitEls=[sh];
  setTimeout(function(){if(its[cur].className.indexOf(' on')<0)its[cur].className+=' on';mark(dw2,cur);if(th2)th2.mark(cur);},60);
  if(imgs.length>1)auto(function(){show(cur+1);},sh);
 }
 if(c.credit)root.appendChild(creditEl());
 var lw0=-1,lh0=-1,rf=function(){var w=root.clientWidth,hv=availH();if(w===lw0&&Math.abs(hv-lh0)<2)return;lw0=w;lh0=hv;cols();if(onR)onR();fitFrame();};
 if(FIT&&(L==='grid'||L==='masonry'))rf();
 setTimeout(fitFrame,50);setTimeout(fitFrame,600);
 if(window.ResizeObserver){ro=new ResizeObserver(rf);ro.observe(root);}
 if(FIT||!window.ResizeObserver){rz=rf;window.addEventListener('resize',rz);}
}
function getJ(u){var tries=0;
 function one(){var ctl=window.AbortController?new AbortController():null,tm=ctl?setTimeout(function(){ctl.abort();},20000):0;
  return fetch(u,ctl?{signal:ctl.signal}:{}).then(function(r){clearTimeout(tm);return r.text().then(function(t){var j=null;try{j=JSON.parse(t);}catch(x){}
   if(j&&j.error)throw new Error(j.error);
   if(!r.ok||!j){var er=new Error('The photo service is busy. Please refresh in a minute.');er.retry=r.status>=500;throw er;}return j;});},
  function(e){clearTimeout(tm);var er=new Error(e&&e.name==='AbortError'?'The photo service took too long. Please refresh the page.':'Could not reach the photo service. Check your connection.');er.retry=true;throw er;});}
 return one().catch(function(e){if(e.retry&&tries++<1)return new Promise(function(res){setTimeout(res,1500);}).then(one);throw e;});}
function list(f){var q=f.url?'url='+encodeURIComponent(f.url):'id='+encodeURIComponent(f.id)+'&order='+(f.order||'name');return getJ('https://qbubwemdvwflxvxwesrl.supabase.co/functions/v1/drive-folder?'+q).then(function(j){return (j.files||[]).map(function(x){return x.u?{s:x.u+'=w1200',f:x.u+'=w2400',t:'',n:x.name,d:x.m||0}:{i:x.id,s:drv(x.id,1200),f:drv(x.id,2400),t:x.name.replace(/\.[^.]+$/,''),n:x.name,d:x.m||0};});});}
function norm(im){if(im.i&&!im.s){im.s=drv(im.i,1200);im.f=drv(im.i,2400);}return im;}
function toNode(x){return {n:x.name||'',f:(x.files||[]).map(function(fm){return {i:fm.id,t:fm.name.replace(/\.[^.]+$/,''),n:fm.name,d:fm.m||0};}),ch:(x.children||[]).map(toNode)};}
 function clean(s){if(c.clean===false)return s;var o=String(s).replace(/^[\s<>\[\]\(\){}«»#*_~.\-]+/,'').replace(/^\d{1,2}(?:[.\-_]\d{1,2})*(?:\s*[.):\]_\-\u2013\u2014]\s*|\s+)/,'').replace(/[\s<>\[\]\(\){}«»#*_~\-]+$/,'').replace(/\s*\/\s*/g,' / ').trim();return o||s;}
 function newest(n){var m=0;n.f.forEach(function(x){if(x.d>m)m=x.d;});n.ch.forEach(function(k){var v=newest(k);if(v>m)m=v;});return m;}
 function kids(n){var a=n.ch.slice(),s=c.asort||'name';
  if(s==='namez')a.reverse();else if(s==='new')a.sort(function(x,y){return newest(y)-newest(x);});else if(s==='old')a.sort(function(x,y){return newest(x)-newest(y);});
  return a;}
function ttl(m){var w=el('div','dfg-st p-'+m.p+(m.big?' big':''));
 if(m.k&&c.kicker!==false){var kk=el('div','dfg-sk');kk.textContent=m.k;w.appendChild(kk);}
 var hh=el('div','dfg-sh');hh.textContent=m.t;w.appendChild(hh);return w;}
function story(tree){var out=[],r0=clean(tree.n||'');
 (function walk(n,path){var fs=srt(n.f.map(norm));if(c.pper>0)fs=fs.slice(0,c.pper);
  var t=path.length?path[path.length-1]:r0,k=path.length>1?path[path.length-2]:'';
  fs.forEach(function(im){out.push({im:im,t:t,k:k});});
  kids(n).forEach(function(ch){walk(ch,path.concat([clean(ch.n)]));});})(tree,[]);
 var sh=!!c.shuffle;
 if(sh){for(var q=out.length-1;q>0;q--){var r=Math.floor(Math.random()*(q+1)),tm=out[q];out[q]=out[r];out[r]=tm;}}
 if(c.max>0)out=out.slice(0,c.max);
 var pos=c.tpos||'mix',P=['bl','br','tl','tr','b','l','r','t'],lp='';if(sh)P.push('c');
 out.forEach(function(o,i){var first=!i||out[i-1].t!==o.t;o.big=first&&!sh;
  if(pos!=='mix')o.p=pos;else if(o.big)o.p='c';else{var p;do{p=P[Math.floor(Math.random()*P.length)];}while(p===lp&&P.length>1);o.p=p;}lp=o.p;});
 meta=out;imgs=out.map(function(o){return o.im;});L='story';build();}
function albums(tree){
 var sub=null,aro=null,htm=null,pgA=null,cur=tree,lw=0,lh=0,rzt=null,vseq=0;
 function tot(n){var t=n.f.length;for(var q=0;q<n.ch.length;q++)t+=tot(n.ch[q]);return t;}
 function cov(n){if(n.f.length)return n.f[0];for(var q=0;q<n.ch.length;q++){var x=cov(n.ch[q]);if(x)return x;}return null;}
 function acols(){var w=root.clientWidth||900,n=Math.max(1,c.acols||3);if(w<480)n=Math.min(n,2);else if(w<820)n=Math.min(n,3);S.setProperty('--acn',n);return n;}
 function cw(){var W=(root.clientWidth||900)/acols()*(window.devicePixelRatio||1);return Math.max(400,Math.min(1200,Math.ceil(W/200)*200));}
 S.setProperty('--aar',c.aratio||'4/3');
 (function link(n){n.ch.forEach(function(k){k.__p=n;link(k);});})(tree);
 var ALL=[];(function dfs(n){kids(n).forEach(function(k){ALL.push(k);dfs(k);});})(tree);
 function step(node,dir){var base=node.__loose?node.__p:node,j=ALL.indexOf(base);if(j<0)j=dir>0?-1:ALL.length;
  for(;;){j+=dir;if(j<0||j>=ALL.length)return null;if(ALL[j].f.length&&ALL[j]!==node)return ALL[j];}}
 function crumbs(node){var a=[],n=node.__p;while(n&&n!==tree){a.unshift(n);n=n.__p;}return a;}
 var CH='<svg class="dfg-chev" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="'+IR+'"/><\/svg>';
 function card(ch){var st=c.astyle||'overlay',b=el('button','dfg-al');b.type='button';
  var nm=clean(ch.n),T=tot(ch),lab=(ch.ch.length?ch.ch.length+' albums · ':'')+T+' photo'+(T===1?'':'s');
  b.setAttribute('aria-label',nm+' — '+lab);
  if(st!=='list'){var box=el('div','dfg-alimg'),cv=cov(ch);
   if(cv){var g=d.createElement('img');g.alt='';g.loading='lazy';g.decoding='async';g.referrerPolicy='no-referrer';g.draggable=false;
    g.addEventListener('error',function(){if(cv.i&&!g.__f){g.__f=1;g.src='https://drive.google.com/thumbnail?id='+cv.i+'&sz=w800';}});
    g.src=cv.i?drv(cv.i,cw()):cv.s;box.appendChild(g);}
   if(c.acount!==false&&st==='cover'){var tg=el('div','dfg-tag');tg.textContent=T;box.appendChild(tg);}
   b.appendChild(box);}
  if(st!=='cover'){var cap=el('div','dfg-alcap');
   if(c.alabels!==false){var t=el('div','dfg-alt');t.textContent=nm;cap.appendChild(t);}
   if(c.acount!==false){var s2=el('div','dfg-als');s2.textContent=lab;cap.appendChild(s2);}
   if(cap.firstChild)b.appendChild(cap);}
  if(st==='list')b.insertAdjacentHTML('beforeend',CH);
  b.onclick=function(){if(root.__drag)return;view(ch,true);};
  return b;}
 function bt(k,il,txt,ir,lab,fn){var b=el('button','dfg-nb '+k);b.type='button';b.setAttribute('aria-label',lab);
  if(il)b.insertAdjacentHTML('beforeend',ic(il));var sp=el('span');sp.textContent=txt;b.appendChild(sp);if(ir)b.insertAdjacentHTML('beforeend',ic(ir));
  if(fn)b.onclick=function(e){e.stopPropagation();fn();};else b.disabled=true;return b;}
 function navBar(node){var bar=el('div','dfg-nav'),pv=step(node,-1),nx=step(node,1),up=node.__p,mid=el('div','dfg-nm');
  bar.appendChild(bt('dfg-np',IL,pv?clean(pv.n):'Previous','','Previous album'+(pv?': '+clean(pv.n):''),pv?function(){view(pv,true);}:null));
  if(up&&up!==tree)mid.appendChild(bt('dfg-nu','M18 15l-6-6-6 6','Up','','Up to '+clean(up.n),function(){view(up,true);}));
  mid.appendChild(bt('dfg-nh','M3 11l9-8 9 8M5 10v10h5v-6h4v6h5V10','All albums','','All albums',function(){view(tree,true);}));
  bar.appendChild(mid);
  bar.appendChild(bt('dfg-nn','',nx?clean(nx.n):'Next',IR,'Next album'+(nx?': '+clean(nx.n):''),nx?function(){view(nx,true);}:null));
  return bar;}
 function heroEl(list){var hr=el('div','dfg-show dfg-kb dfg-story dfg-hero'),its=[],ci=0,dw=null,W=Math.min(2000,Math.ceil((root.clientWidth||900)*(window.devicePixelRatio||1)/200)*200);
  list.forEach(function(nd,i){var cv=cov(nd);if(!cv)return;var s=el('div','dfg-it k'+(i%4)),g=d.createElement('img');g.alt=clean(nd.n);g.referrerPolicy='no-referrer';g.decoding='async';g.loading=i<2?'eager':'lazy';g.draggable=false;
   g.addEventListener('error',function(){if(cv.i&&!g.__f){g.__f=1;g.src='https://drive.google.com/thumbnail?id='+cv.i+'&sz=w1600';}});
   var u0=cv.i?drv(cv.i,W):cv.s;if(i>1)g.__src=u0;else g.src=u0;s.appendChild(g);
   s.tabIndex=i===0?0:-1;s.setAttribute('role','button');s.setAttribute('aria-label','View album: '+clean(nd.n));
   s.addEventListener('keydown',function(e){if(e.key==='Enter'||e.key===' '){e.preventDefault();view(nd,true);}});
   var t=el('div','dfg-st p-bl'),T=tot(nd);
   if(c.acount!==false){var kk=el('div','dfg-sk');kk.textContent=(nd.ch.length?nd.ch.length+' albums · ':'')+T+' photos';t.appendChild(kk);}
   var hh=el('div','dfg-sh');hh.textContent=clean(nd.n);t.appendChild(hh);
   var go=el('div','dfg-hgo');go.textContent='View album →';t.appendChild(go);
   s.appendChild(t);s.onclick=function(){if(!root.__drag)view(nd,true);};hr.appendChild(s);its.push(s);});
  if(its.length<2)return null;
  var show=function(k){var n=its.length;k=((k%n)+n)%n;its[ci].className=its[ci].className.replace(' on','');its[ci].tabIndex=-1;ci=k;its[ci].className+=' on';its[ci].tabIndex=0;[ci+1,ci-1].forEach(function(j){ldi(its[((j%n)+n)%n]);});mark(dw,ci);};
  ldi(its[its.length-1]);
  var hp=nb('dfg-prev',IL,'Previous'),hn=nb('dfg-next',IR,'Next');hp.onclick=function(e){e.stopPropagation();show(ci-1);};hn.onclick=function(e){e.stopPropagation();show(ci+1);};hr.appendChild(hp);hr.appendChild(hn);
  if(its.length<=12)dw=dots(its.length,hr,function(k){show(k);});
  drag(hr,function(s){show(ci+s);});
  setTimeout(function(){if(its[ci].className.indexOf(' on')<0)its[ci].className+=' on';mark(dw,ci);},60);
  if(c.autoplay!==false){var hgo=pauser(hr,{off:RM});
   htm=setInterval(function(){if(hgo())show(ci+1);},Math.max(2500,(c.interval||4)*1000+1000));}
  return hr;}
 function used(){return root.getBoundingClientRect().height;}
 function view(node,navd){
  if(sub&&sub.__dfgStop)sub.__dfgStop();sub=null;if(htm){clearInterval(htm);htm=null;}pgA=null;cur=node;var vt=++vseq;
  root['inner'+'HTML']='';var wrap=el('div','dfg-view'+(FIT?' dfg-fit':''));root.appendChild(wrap);
  var atRoot=node===tree,ks=kids(node),bar=atRoot?null:navBar(node),hero=null,cr0=crumbs(node);
  if(!atRoot){var hd=el('div','dfg-hd');
   if(!FIT){var bk=el('button','dfg-back',ic(IL)+'Back');bk.type='button';bk.onclick=function(){view(node.__p||tree,true);};hd.appendChild(bk);}
   var cr=el('div','dfg-cr'),hb=el('button');hb.type='button';hb.textContent='All albums';hb.onclick=function(){view(tree,true);};cr.appendChild(hb);
   cr0.forEach(function(sn){cr.appendChild(d.createTextNode(' › '));var bb=el('button');bb.type='button';bb.textContent=clean(sn.n);bb.onclick=function(){view(sn,true);};cr.appendChild(bb);});
   hd.appendChild(cr);
   var ht=el('div','dfg-ht');ht.textContent=clean(node.n);hd.appendChild(ht);
   if(c.acount!==false){var hs=el('div','dfg-hs'),T2=tot(node);hs.textContent=(node.ch.length?node.ch.length+' albums · ':'')+T2+' photo'+(T2===1?'':'s');hd.appendChild(hs);}
   wrap.appendChild(hd);}
  if(atRoot&&c.ahero!==false&&ks.length>1){hero=heroEl(ks);if(hero){if(!FIT)hero.style.aspectRatio=(root.clientWidth||900)<560?'4/3':'21/9';wrap.appendChild(hero);}}
  var list=ks.slice();if(FIT&&ks.length&&node.f.length)list.push({n:'More photos',f:node.f,ch:[],__p:node,__loose:true});
  var body=el('div','dfg-abody');wrap.appendChild(body);
  var cls='dfg-ag'+((c.astyle||'overlay')==='list'?' dfg-list':'')+((c.astyle||'overlay')==='overlay'?' dfg-ov':'');
  var credit=function(){if(c.credit)wrap.appendChild(creditEl());};
  var gal=function(host,files,fh){sub=el('div');host.appendChild(sub);var cc={};for(var k in c)cc[k]=c[k];cc.albums=false;cc.tree=null;cc.folder=null;cc.credit=false;cc.__sub=1;cc.images=files;if(fh)cc.fitH=fh;DriveFolio(sub,cc);};
  if(list.length&&FIT){
   var gr=el('div',cls),bx=el('div','dfg-pgw');bx.appendChild(gr);body.appendChild(bx);if(bar)wrap.appendChild(bar);credit();
   var G=c.gap||0;
   var planA=function(){wrap.className=wrap.className.replace(' dfg-alh','');
    if(hero){hero.style.display='';var hw=root.clientWidth||900,hh=Math.min(hw/(hw<560?1.45:2.3),availH()*0.5);hero.style.aspectRatio='auto';hero.style.height=Math.round(hh)+'px';}
    var n=acols();gr['inner'+'HTML']='';gr.appendChild(card(list[0]));var chH=gr.firstChild.getBoundingClientRect().height,rg=G+10;
    var av=availH()-(used()-bx.getBoundingClientRect().height);
    if(hero&&av<chH*0.6){hero.style.display='none';av=availH()-(used()-bx.getBoundingClientRect().height);}
    var r1=Math.max(1,Math.floor((av+rg)/(chH+rg))),rows=r1,im0=gr.firstChild.querySelector('.dfg-alimg');
    if(im0&&(Math.ceil(list.length/n)>r1||chH>av)){var ih=im0.getBoundingClientRect().height,capH=chH-ih,r2=r1+1,h1=(av-rg*(r1-1))/r1-capH,h2=(av-rg*(r2-1))/r2-capH,nh;
     if(h2>=60&&Math.abs(Math.log(h2/ih))<Math.abs(Math.log(Math.max(1,h1)/ih))){rows=r2;nh=h2;}else nh=h1;
     wrap.style.setProperty('--alh',Math.max(50,Math.floor(nh)-1)+'px');wrap.className+=' dfg-alh';}
    var per=rows*n,a=[];for(var s=0;s<list.length;s+=per)a.push(s);return a;};
   var drawA=function(s,e){gr['inner'+'HTML']='';for(var i=s;i<e;i++)gr.appendChild(card(list[i]));};
   pgA=paged(bx,list.length,planA,drawA);pgA.re();
  }else if(list.length){
   var gr2=el('div',cls);acols();list.forEach(function(k){gr2.appendChild(card(k));});body.appendChild(gr2);
   if(node.f.length){var sc=el('div','dfg-sec');sc.textContent='Photos';body.appendChild(sc);gal(body,node.f,0);}
   if(bar)wrap.appendChild(bar);credit();
  }else if(node.f.length){
   if(FIT){var ph=el('div');body.appendChild(ph);if(bar)wrap.appendChild(bar);credit();var fh=Math.max(100,availH()-used());body.removeChild(ph);gal(body,node.f,fh);
    var fix=function(){if(vt!==vseq||!sub||sub.parentNode!==body)return;var ov=used()-availH();if(ov>1&&fh>100){fh=Math.max(100,fh-ov-1);if(sub.__dfgStop)sub.__dfgStop();body.removeChild(sub);gal(body,node.f,fh);}};setTimeout(fix,120);setTimeout(fix,700);}
   else{gal(body,node.f,0);if(bar)wrap.appendChild(bar);credit();}
  }
  lw=root.clientWidth;lh=availH();
  if(navd){var rt=root.getBoundingClientRect().top;if(rt<0||rt>innerHeight*0.6)root.scrollIntoView({behavior:'smooth',block:'start'});}
 }
 function onSize(){var w=root.clientWidth,hv=availH();if(Math.abs(w-lw)<2&&Math.abs(hv-lh)<2)return;var big=Math.abs(w-lw)>40||Math.abs(hv-lh)>40;lw=w;lh=hv;
  if(pgA){acols();pgA.re();}else if(FIT&&big){clearTimeout(rzt);rzt=setTimeout(function(){view(cur,false);},200);}else acols();}
 var prevStop=root.__dfgStop;root.__dfgStop=function(){if(prevStop)prevStop();if(sub&&sub.__dfgStop)sub.__dfgStop();if(aro)aro.disconnect();if(htm)clearInterval(htm);window.removeEventListener('resize',onSize);};
 if(window.ResizeObserver){aro=new ResizeObserver(onSize);aro.observe(root);}
 window.addEventListener('resize',onSize);
 if(!tree.ch.length&&tree.f.length){var cc0={};for(var k0 in c)cc0[k0]=c[k0];cc0.albums=false;cc0.tree=null;cc0.folder=null;cc0.__sub=1;cc0.images=tree.f;DriveFolio(root,cc0);return;}
 view(tree,false);
}
if(!c.__sub&&!root.__dfgSeen){root.__dfgSeen=1;beacon({kind:'view',n:(c.images||[]).length||undefined});}
if(c.albums&&c.tree){if(c.amode==='story')story(c.tree);else albums(c.tree);return;}
if(c.albums&&c.folder&&c.folder.id){root['inner'+'HTML']='';root.appendChild(el('div','dfg-msg',c.amode==='story'?'Loading slideshow...':'Loading albums...'));
 getJ('https://qbubwemdvwflxvxwesrl.supabase.co/functions/v1/drive-folder?albums=1&id='+encodeURIComponent(c.folder.id)).then(function(j){var tn=toNode(j.tree);if(c.amode==='story')story(tn);else albums(tn);},function(e){throw e;}).catch(function(e){root['inner'+'HTML']='';var m=el('div','dfg-msg');m.textContent='Could not load albums: '+e.message;root.appendChild(m);beacon({kind:'err',detail:'albums: '+e.message});});
 return;}
if(c.folder&&(c.folder.id||c.folder.url)){root['inner'+'HTML']='';root.appendChild(el('div','dfg-msg','Loading gallery...'));
 list(c.folder).then(function(a){imgs=prep(a);build();},function(e){root['inner'+'HTML']='';var m=el('div','dfg-msg');m.textContent='Could not load images: '+e.message;root.appendChild(m);beacon({kind:'err',detail:'images: '+e.message});});}
else{imgs=prep((c.images||[]).map(norm));build();}
}

/* ===== Generator app ===== */
(function(){
var $=function(i){return document.getElementById(i);};
var RELAY='https://qbubwemdvwflxvxwesrl.supabase.co/functions/v1/drive-folder';
var st={images:[],layout:'grid',folder:null,live:false,demo:false};
function drv(id,w){return 'https://lh3.googleusercontent.com/d/'+id+'=w'+w;}
function esc(s){return String(s).replace(/[&<>"]/g,function(m){return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[m];});}
function short(u){return u.length>60?u.slice(0,57)+'...':u;}
var TAPI='https://qbubwemdvwflxvxwesrl.supabase.co/functions/v1/df-api';
var VID=(function(){try{var k='df_vid',v=localStorage.getItem(k);if(!v||!/^[a-z0-9]{12,24}$/.test(v)){v='';var r=new Uint8Array(16);crypto.getRandomValues(r);for(var i=0;i<16;i++)v+='abcdefghijkmnpqrstuvwxyz23456789'[r[i]%32];localStorage.setItem(k,v);}return v;}catch(e){return null;}})();
function track(o){try{o.src='tool';if(VID)o.vid=VID;o.ctx=(function(){try{return{tz:Intl.DateTimeFormat().resolvedOptions().timeZone,lang:navigator.language,sw:screen.width,tp:navigator.maxTouchPoints||0}}catch(e){return null}})();var s=JSON.stringify(o);if(navigator.sendBeacon)navigator.sendBeacon(TAPI+'/track',s);else fetch(TAPI+'/track',{method:'POST',body:s,keepalive:true});}catch(e){}}
function say(m,t){var s=$('status');s.className='status '+(t||'');s['inner'+'HTML']=m;}
function toast(m){var t=$('toast');t.textContent=m;t.className='toast on';clearTimeout(t._h);t._h=setTimeout(function(){t.className='toast';},2200);}

var LAYS=[
['grid','Grid','<svg viewBox="0 0 60 38"><g fill="currentColor"><rect x="4" y="3" width="16" height="15" rx="2"/><rect x="22" y="3" width="16" height="15" rx="2"/><rect x="40" y="3" width="16" height="15" rx="2"/><rect x="4" y="20" width="16" height="15" rx="2"/><rect x="22" y="20" width="16" height="15" rx="2"/><rect x="40" y="20" width="16" height="15" rx="2"/></g></svg>','1/1'],
['masonry','Masonry tiles','<svg viewBox="0 0 60 38"><g fill="currentColor"><rect x="4" y="3" width="16" height="20" rx="2"/><rect x="4" y="25" width="16" height="10" rx="2"/><rect x="22" y="3" width="16" height="12" rx="2"/><rect x="22" y="17" width="16" height="18" rx="2"/><rect x="40" y="3" width="16" height="16" rx="2"/><rect x="40" y="21" width="16" height="14" rx="2"/></g></svg>',null],
['carousel','Carousel','<svg viewBox="0 0 60 38"><g fill="currentColor"><rect x="8" y="5" width="14" height="22" rx="2"/><rect x="23" y="5" width="14" height="22" rx="2"/><rect x="38" y="5" width="14" height="22" rx="2"/><circle cx="25" cy="33" r="1.6"/><circle cx="30" cy="33" r="1.6"/><circle cx="35" cy="33" r="1.6"/></g><path d="M5 13l-3 3 3 3M55 13l3 3-3 3" stroke="currentColor" stroke-width="1.6" fill="none"/></svg>','4/3'],
['swipe','Swipe cards','<svg viewBox="0 0 60 38"><g fill="currentColor"><rect x="2" y="7" width="10" height="24" rx="2" opacity=".45"/><rect x="15" y="3" width="30" height="32" rx="3"/><rect x="48" y="7" width="10" height="24" rx="2" opacity=".45"/></g></svg>','3/4'],
['slideshow','Slideshow','<svg viewBox="0 0 60 38"><g fill="currentColor"><rect x="5" y="3" width="50" height="28" rx="3"/><circle cx="26" cy="35" r="1.6"/><circle cx="30" cy="35" r="1.6"/><circle cx="34" cy="35" r="1.6"/></g></svg>','16/9'],
['kenburns','Ken Burns','<svg viewBox="0 0 60 38"><g fill="currentColor"><rect x="5" y="3" width="50" height="32" rx="3" opacity=".35"/><rect x="14" y="9" width="32" height="20" rx="2"/></g><path d="M48 6l5-1-1 5M12 32l-5 1 1-5" stroke="currentColor" stroke-width="1.6" fill="none"/></svg>','16/9']
];
var lw=$('layouts');
LAYS.forEach(function(l){var b=document.createElement('button');b.type='button';b.setAttribute('data-l',l[0]);b.className='lay'+(l[0]===st.layout?' on':'');b['inner'+'HTML']=l[2]+l[1];b.onclick=function(){st.layout=l[0];[].forEach.call(lw.children,function(x){x.className='lay';});b.className='lay on';if(l[3])$('ratio').value=l[3];render();};lw.appendChild(b);});

function isStory(){return !!(st.tree&&$('albums').checked&&$('amode').value==='story');}
function vis(){var sto=isStory(),L=sto?'slideshow':st.layout;[].forEach.call(document.querySelectorAll('[data-for]'),function(e){e.classList.toggle('hide',e.getAttribute('data-for').split(' ').indexOf(L)<0);});
 $('layouts').classList.toggle('hide',sto);$('layouts').classList.toggle('albmode',!!(st.tree&&$('albums').checked));$('storyOpts').classList.toggle('hide',!sto);$('cardOpts').classList.toggle('hide',sto);}

function parse(text){var out=[],errs=[],fol=[],alb=[];
 text.split(/\r?\n/).forEach(function(line){line=line.trim();if(!line)return;
  var parts=line.split('|'),u=parts[0].trim(),cap=parts.slice(1).join('|').trim(),m,id=null;
  if(/^https:\/\/(photos\.app\.goo\.gl|goo\.gl\/photos|photos\.google\.com\/(u\/\d+\/)?(share|album))/.test(u)){alb.push(u.split('#')[0]);return;}
  if(/\/folders\//.test(u)){var fm=u.match(/folders\/([\w-]{10,})/);if(fm){fol.push(fm[1]);return;}}
  if(/(drive|docs|drive\.usercontent)\.google\.com/.test(u)){m=u.match(/\/d\/([\w-]{15,})/)||u.match(/[?&]id=([\w-]{15,})/);if(m)id=m[1];}
  else if((m=u.match(/googleusercontent\.com\/d\/([\w-]{15,})/)))id=m[1];
  if(id){out.push({i:id,s:drv(id,1200),f:drv(id,2400),t:cap});return;}
  if(/googleusercontent\.com/.test(u)){var b=u.replace(/=[\w-]*$/,'');out.push({s:b+'=w1200',f:b+'=w2400',t:cap});return;}
  if(/^https?:\/\//i.test(u)){out.push({s:u,f:u,t:cap});return;}
  errs.push('Not a link: '+short(u));});
 return {out:out,errs:errs,fol:fol,alb:alb};}

function folderId(v){v=(v||'').trim();var m=v.match(/folders\/([\w-]{10,})/)||v.match(/[?&]id=([\w-]{10,})/);if(m)return m[1];return /^[\w-]{10,}$/.test(v)?v:null;}

async function getJ(u,ms){var ctl=new AbortController(),tm=setTimeout(function(){ctl.abort();},ms||45000),r,t;
 try{r=await fetch(u,{signal:ctl.signal});t=await r.text();}catch(e){throw new Error(e.name==='AbortError'?'Google took too long to answer. Please try again in a minute.':'Could not reach the DriveFolio service. Check your connection and try again.');}finally{clearTimeout(tm);}
 var j=null;try{j=JSON.parse(t);}catch(e){}
 if(j&&j.error)throw new Error(j.error);
 if(!r.ok||!j)throw new Error('The DriveFolio service had a problem (error '+r.status+'). Please try again in a minute.');return j;}
function prune(n){n.ch=n.ch.map(prune).filter(function(k){return k.f.length||k.ch.length;});return n;}
async function listAlbum(u){var j=await getJ(RELAY+'?url='+encodeURIComponent(u));
 return (j.files||[]).map(function(f){return {s:f.u+'=w1200',f:f.u+'=w2400',t:'',n:f.name,d:f.m||0};});}
function tnode(x){return {n:x.name||'',f:(x.files||[]).map(function(fm){return {i:fm.id,t:fm.name.replace(/\.[^.]+$/,''),n:fm.name,d:fm.m||0};}),ch:(x.children||[]).map(tnode)};}
function flat(n){var a=n.f.slice();n.ch.forEach(function(k){a=a.concat(flat(k));});return a;}
function full(im){return {i:im.i,s:drv(im.i,1200),f:drv(im.i,2400),t:im.t,n:im.n,d:im.d};}
async function listTree(id){var j=await getJ(RELAY+'?albums=1&id='+encodeURIComponent(id));return prune(tnode(j.tree));}
async function listFolder(id){var j=await getJ(RELAY+'?id='+encodeURIComponent(id)+'&order=name');
 return (j.files||[]).map(function(f){return {i:f.id,s:drv(f.id,1200),f:drv(f.id,2400),t:f.name.replace(/\.[^.]+$/,''),n:f.name,d:f.m||0};});}

function tncmp(a,b){return String(a.n||a.t||'').localeCompare(String(b.n||b.t||''),undefined,{numeric:true,sensitivity:'base'});}
function tprep(a,c){a=a.slice();var s=c.sort;
 if(s==='name')a.sort(tncmp);else if(s==='namez')a.sort(function(x,y){return tncmp(y,x);});
 else if(s==='new')a.sort(function(x,y){return ((y.d||0)-(x.d||0))||tncmp(y,x);});
 else if(s==='old')a.sort(function(x,y){return ((x.d||0)-(y.d||0))||tncmp(x,y);});
 return c.max>0?a.slice(0,c.max):a;}
function cfg(){return {stats:$('stats').checked,layout:st.layout,cols:+$('cols').value,gap:+$('gap').value,radius:+$('radius').value,ratio:$('ratio').value,interval:+$('interval').value,accent:$('accent').value,bg:$('transparent').checked?'transparent':$('bg').value,autoplay:$('autoplay').checked,nav:$('nav').checked,captions:$('captions').checked,lightbox:$('lightbox').checked,hover:$('hover').checked,credit:$('credit').checked,thumbs:$('thumbs').checked,limit:+$('limit').value,max:+$('max').value,sort:$('sort').value,fill:$('fill').checked,albums:!!(st.tree&&$('albums').checked),astyle:$('astyle').value,acols:+$('acols').value,aratio:$('aratio').value,clean:$('clean').checked,acount:$('acount').checked,alabels:$('alabels').checked,asort:$('asort').value,amode:$('amode').value,tpos:$('tpos').value,tstyle:$('tstyle').value,pper:+$('pper').value,shuffle:$('shuffle').checked,kicker:$('kicker').checked,kb:$('kb').checked,fit:$('fit').checked,ahero:$('ahero').checked};}

function compact(n){return {n:n.n,f:n.f.map(function(x){var o={i:x.i,t:x.t};if(x.d)o.d=x.d;return o;}),ch:n.ch.map(compact)};}
function albCount(n){var k=n.ch.length;n.ch.forEach(function(x){k+=albCount(x);});return k;}
function albUI(){$('albBox').classList.toggle('hide',!st.tree);}
function gen(){var c=cfg(),UID='dfg-'+Math.random().toString(36).slice(2,8)+Date.now().toString(36).slice(-4);c.v=2;
 if(c.albums){if(st.live&&st.folder&&st.folder.id){c.folder={id:st.folder.id,albums:true};}else{c.tree=compact(st.tree);}
  var js=JSON.stringify(c).replace(/</g,'\\u003c');
  return '<div id="'+UID+'"></div>\n<scr'+'ipt>\n('+DriveFolio.toString()+')(document.getElementById("'+UID+'"),'+js+');\n<\/scr'+'ipt>';}
 if(st.live&&st.folder)c.folder=st.folder.url?{url:st.folder.url}:{id:st.folder.id,order:'name'};else{c.images=tprep(st.images,c);c.sort='none';c.max=0;}
 var json=JSON.stringify(c).replace(/</g,'\\u003c');
 return '<div id="'+UID+'"></div>\n<scr'+'ipt>\n('+DriveFolio.toString()+')(document.getElementById("'+UID+'"),'+json+');\n<\/scr'+'ipt>';}

var tmr,et;
function render(){clearTimeout(tmr);tmr=setTimeout(doRender,30);}
function doRender(){vis();var pv=$('pv');
 if(!st.images.length){if(pv.__dfgStop)pv.__dfgStop();pv.className='';pv['inner'+'HTML']='<div class="empty">Paste some links or click <b>Try demo images</b> to see your gallery here.</div>';$('code').value='';return;}
 var c=cfg();c.__pv=1;if(c.fit)c.fitH=+$('pvh').value;if(c.albums)c.tree=st.tree;else c.images=st.images;DriveFolio(pv,c);$('code').value=gen();
 clearTimeout(et);et=setTimeout(function(){var n=pv.querySelectorAll('[data-dfg-err]').length;var w=$('imgWarn');if(w)w.remove();if(n){var s=document.createElement('div');s.id='imgWarn';s.className='warn';s['inner'+'HTML']='<b>'+n+'</b> image'+(n>1?'s':'')+' could not load. Check each file is shared as <b>Anyone with the link</b>.';$('status').appendChild(s);}},4000);}

$('loadLinks').onclick=async function(){var btn=this,r=parse($('links').value);
 if(!r.out.length&&!r.errs.length&&!r.fol.length&&!r.alb.length){say('Paste at least one image, folder or Google Photos link first.','err');return;}
 var imgs=r.out.slice(),trees=[];
 if(r.fol.length||r.alb.length){
  {btn.disabled=true;btn.textContent='Reading links...';
   for(var ai=0;ai<r.alb.length;ai++){try{imgs=imgs.concat(await listAlbum(r.alb[ai]));}catch(e){r.errs.push('Google Photos: '+e.message);}}
   for(var fi=0;fi<r.fol.length;fi++){try{var tr=await listTree(r.fol[fi]);trees.push(tr);var a=flat(tr).map(full);if(!a.length)r.errs.push('No images found in folder '+r.fol[fi]+' (is it shared as "Anyone with the link"?)');imgs=imgs.concat(a);}catch(e){r.errs.push('Folder '+r.fol[fi]+': '+e.message);}}
   btn.disabled=false;btn.textContent='Build gallery';}
 }
 st.tree=(r.fol.length===1&&!r.alb.length&&!r.out.length&&trees&&trees[0]&&trees[0].ch.length)?trees[0]:null;albUI();
 if(imgs.length){st.images=imgs;st.demo=false;if(r.fol.length+r.alb.length===1&&!r.out.length){st.folder=r.fol.length?{id:r.fol[0]}:{url:r.alb[0]};st.live=$('live').checked;}else{st.folder=null;st.live=false;}}
 else{st.images=[];st.tree=null;st.folder=null;st.live=false;st.demo=false;albUI();}
 var m=imgs.length?'<b>'+imgs.length+'</b> image'+(imgs.length>1?'s':'')+' added'+(st.tree?' in <b>'+st.tree.ch.length+'</b> albums'+(albCount(st.tree)>st.tree.ch.length?' (+'+(albCount(st.tree)-st.tree.ch.length)+' sub-albums)':'')+'. Album view is on - choose album cards or a story slideshow under "Choose a layout".':'.'):'';
 if(r.errs.length)m+=(m?'<br>':'')+'<span class="skip">Skipped '+r.errs.length+':</span><br>'+r.errs.map(esc).join('<br>');
 say(m,imgs.length?'ok':'err');render();
 if(imgs.length)track({kind:'build',n:imgs.length,mode:st.tree?'albums':'flat',detail:'folders:'+r.fol.length+' photos:'+r.alb.length+' links:'+r.out.length+' skipped:'+r.errs.length});
 else track({kind:'build_err',detail:(r.errs[0]||'no images').slice(0,280)});};

var DEMO=[1015,1016,1018,1019,1036,1039,1043,1044,1050,1057];
function loadDemo(){st.images=DEMO.map(function(n,i){var p=i%3===1,w=p?800:1200,h=p?1100:800;return {s:'https://picsum.photos/id/'+n+'/'+w+'/'+h,f:'https://picsum.photos/id/'+n+'/'+(w*2)+'/'+(h*2),t:'Demo photo '+(i+1)};});
 st.demo=true;st.live=false;st.folder=null;st.tree=null;albUI();say('Showing demo images. Paste your own links above to replace them.');render();}
$('demo').onclick=loadDemo;

$('live').onchange=function(){$('liveWarn').classList.toggle('hide',!this.checked);if(st.folder){st.live=this.checked;render();}};


[].forEach.call($('dev').children,function(b){b.onclick=function(){[].forEach.call($('dev').children,function(x){x.className='';});b.className='on';$('frame').style.maxWidth=b.getAttribute('data-w');};});

['cols','gap','radius','interval','limit','max','acols','pper'].forEach(function(k){$(k).addEventListener('input',function(){$(k+'V').textContent=(k==='limit'||k==='max'||k==='pper')&&this.value==='0'?'All':this.value+(k==='interval'?'s':'');render();});});
['ratio','accent','bg','autoplay','nav','captions','lightbox','hover','credit','thumbs','sort','fill','albums','astyle','aratio','clean','acount','alabels','asort','tpos','tstyle','shuffle','kicker','kb','fit','ahero','pvh','stats'].forEach(function(k){$(k).addEventListener('input',render);$(k).addEventListener('change',render);});
$('amode').addEventListener('change',function(){if(this.value==='story'&&$('ratio').value==='4/3')$('ratio').value='16/9';render();});
$('transparent').addEventListener('change',function(){$('bg').disabled=this.checked;render();});

function codeInfo(t){var m=t.match(/id="(dfg-[^"]+)"/),c=cfg();return {gid:m?m[1]:'',layout:c.albums&&c.amode==='story'?'story':c.layout,mode:c.albums?c.amode:'flat',n:st.images.length,detail:(st.live?'live':'static')+(st.demo?' demo':'')};}
$('copy').onclick=function(){var t=$('code').value;if(!t){toast('Add some images first');return;}var ci=codeInfo(t);ci.kind='copy';track(ci);
 var done=function(){toast(st.demo?'Copied - these are demo images, add your own!':'Embed code copied!');};
 if(navigator.clipboard&&navigator.clipboard.writeText){navigator.clipboard.writeText(t).then(done,function(){$('code').select();document['exec'+'Command']('copy');done();});}
 else{$('code').select();document['exec'+'Command']('copy');done();}};

$('dl').onclick=function(){var t=$('code').value;if(!t){toast('Add some images first');return;}var ci=codeInfo(t);ci.kind='dl';track(ci);
 var html='<!DOCTYPE html>\n<html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Photo Gallery<\/title><\/head>\n<body style="margin:0;padding:16px">\n'+t+'\n<\/body><\/html>';
 var a=document.createElement('a');a.href=URL.createObjectURL(new Blob([html],{type:'text/html'}));a.download='gallery.html';document.body.appendChild(a);a.click();setTimeout(function(){URL.revokeObjectURL(a.href);a.remove();},500);};

$('mPrev').onclick=function(){$('pPrev').scrollIntoView({behavior:'smooth',block:'start'});};
$('mCopy').onclick=function(){$('copy').click();}; $('code').addEventListener('copy',function(){var t=$('code').value;if(!t)return;var ci=codeInfo(t);ci.kind='copy';ci.detail=(ci.detail||'')+' manual';track(ci);});
function snapshot(){var ctl={};[].forEach.call(document.querySelectorAll('.p-lay input,.p-lay select,.p-sty input,.p-sty select,#pvh'),function(e){if(e.id)ctl[e.id]=e.type==='checkbox'?e.checked:e.value;});
 return {links:$('links').value.slice(0,20000),live:$('live').checked,layout:st.layout,ctl:ctl};}
st.save=null;
$('sBtn').onclick=async function(){var em=$('sEmail').value.trim(),ss=$('sStatus');
 if(!$('links').value.trim()||st.demo){ss.className='status err';ss.textContent='Build your own gallery first, then save it.';return;}
 if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(em)){ss.className='status err';ss.textContent='Please enter a valid email address.';$('sEmail').focus();return;}
 var b=this;b.disabled=true;b.textContent='Saving...';
 try{var body={email:em,consent:$('sConsent').checked,cfg:snapshot()};if(st.save){body.id=st.save.id;body.t=st.save.t;}
  var r=await fetch(TAPI+'/save',{method:'POST',body:JSON.stringify(body)}),j=await r.json().catch(function(){return {};});
  if(!r.ok||!j.id)throw new Error(j.error||'Could not save. Please try again.');
  st.save={id:j.id,t:j.t};var link=location.origin+location.pathname+'?g='+j.id+'&t='+j.t;
  try{history.replaceState(null,'',location.pathname+'?g='+j.id+'&t='+j.t);}catch(e){}
  ss.className='status ok';ss['inner'+'HTML']=(j.updated?'Saved your changes.':'Saved.')+' Bookmark this private link to edit the gallery later (anyone with it can edit):<div class="elink"><input type="text" readonly id="eLink" aria-label="Edit link"><button class="btn bg" type="button" id="eCopy">Copy link</button></div>';
  $('eLink').value=link;$('eCopy').onclick=function(){var t=$('eLink');t.select();if(navigator.clipboard)navigator.clipboard.writeText(t.value);else document['exec'+'Command']('copy');toast('Edit link copied');};
 }catch(e){ss.className='status err';ss.textContent=e.message;}
 b.disabled=false;b.textContent=st.save?'Save changes':'Save & get edit link';};
async function restore(){var q=new URLSearchParams(location.search),g=q.get('g'),t=q.get('t');if(!g||!t)return false;
 say('Loading your saved gallery...');
 try{var r=await fetch(TAPI+'/load?id='+encodeURIComponent(g)+'&t='+encodeURIComponent(t)),j=await r.json();if(!r.ok||!j.cfg)throw new Error(j.error||'Could not load this gallery.');
  var s=j.cfg;st.save={id:g,t:t};$('sEmail').value=j.email||'';$('sBtn').textContent='Save changes';
  $('links').value=s.links||'';$('live').checked=!!s.live;$('liveWarn').classList.toggle('hide',!s.live);
  if(s.layout){st.layout=s.layout;[].forEach.call(lw.children,function(x){var on=x.getAttribute('data-l')===s.layout;x.className='lay'+(on?' on':'');x.setAttribute('aria-pressed',on?'true':'false');});}
  var ctl=s.ctl||{};Object.keys(ctl).forEach(function(k){var e=$(k);if(!e)return;if(e.type==='checkbox')e.checked=!!ctl[k];else e.value=ctl[k];var v=$(k+'V');if(v)v.textContent=(k==='limit'||k==='max'||k==='pper')&&String(ctl[k])==='0'?'All':ctl[k]+(k==='interval'?'s':'');});
  $('bg').disabled=$('transparent').checked;
  await $('loadLinks').onclick.call($('loadLinks'));return true;
 }catch(e){say(esc(e.message),'err');return false;}}
// accessibility: tie labels to controls, name the switches, mark pressed buttons
[].forEach.call(document.querySelectorAll('label.l'),function(l,i){var ctl=l.parentNode.querySelector('input,select');if(ctl){if(!ctl.id)ctl.id='ctl'+i;l.htmlFor=ctl.id;}});
[].forEach.call(document.querySelectorAll('.tg'),function(r){var inp=r.querySelector('.sw input');if(!inp||inp.getAttribute('aria-label'))return;var b=r.querySelector('b'),tx=b?b.textContent:(r.firstChild&&r.firstChild.nodeType===3?r.firstChild.textContent:r.textContent);inp.setAttribute('aria-label',tx.trim().slice(0,90));});
$('links').setAttribute('aria-label','Image, folder or Google Photos links, one per line');
[].forEach.call(lw.children,function(x){x.setAttribute('aria-pressed',x.className.indexOf(' on')>0?'true':'false');x.addEventListener('click',function(){[].forEach.call(lw.children,function(y){y.setAttribute('aria-pressed',y===x?'true':'false');});});});
[].forEach.call($('dev').children,function(x){x.setAttribute('aria-pressed',x.className==='on'?'true':'false');x.addEventListener('click',function(){[].forEach.call($('dev').children,function(y){y.setAttribute('aria-pressed',y===x?'true':'false');});});});
vis();track({kind:'open',detail:(document.referrer?'ref:'+document.referrer.slice(0,120):'direct')+(location.search.indexOf('utm_source=embed')>=0?' via-credit':'')});
restore().then(function(ok){if(!ok)loadDemo();});
})();
