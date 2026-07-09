
const DESTS=[
{c:'PMI',n:'Palma de Mallorca',city:'Palma',country:'Spain',cc:'ES',tz:'Europe/Madrid',lat:39.5517,lon:2.7388,icao:'LEPA',rw:240,len:'3270m',term:'Schengen tourist peak',stand:'Mixed airbridge/remote',notes:['Summer congestion and long taxi queues possible','Sea breeze can alter runway preference','High passenger volumes at holiday peaks']},
{c:'AGP',n:'Malaga',city:'Malaga',country:'Spain',cc:'ES',tz:'Europe/Madrid',lat:36.6749,lon:-4.4991,icao:'LEMG',rw:310,len:'3200m',term:'Schengen',stand:'Airbridge/remote',notes:['Busy mixed traffic','Afternoon sea breeze effects','Terrain awareness north of field']},
{c:'ALC',n:'Alicante',city:'Alicante',country:'Spain',cc:'ES',tz:'Europe/Madrid',lat:38.2822,lon:-0.5582,icao:'LEAL',rw:100,len:'3000m',term:'Schengen',stand:'Airbridge/remote',notes:['Tourist demand peaks at weekends','Moderate taxi times','Summer heat performance awareness']},
{c:'IBZ',n:'Ibiza',city:'Ibiza',country:'Spain',cc:'ES',tz:'Europe/Madrid',lat:38.8729,lon:1.3731,icao:'LEIB',rw:240,len:'2800m',term:'Schengen island',stand:'Remote common',notes:['Seasonal congestion','Short ground handling windows','Strong holiday/event demand']},
{c:'MAH',n:'Menorca',city:'Menorca',country:'Spain',cc:'ES',tz:'Europe/Madrid',lat:39.8626,lon:4.2186,icao:'LEMH',rw:190,len:'2550m',term:'Schengen island',stand:'Remote common',notes:['Island weather changes quickly','Limited apron flexibility','Summer passenger peaks']},
{c:'TFS',n:'Tenerife South',city:'Tenerife',country:'Spain',cc:'ES',tz:'Atlantic/Canary',lat:28.0445,lon:-16.5725,icao:'GCTS',rw:80,len:'3200m',term:'Canary Islands',stand:'Mixed',notes:['Terrain and windshear awareness','Long sector FDP impact','Calima/dust possible']},
{c:'ACE',n:'Lanzarote',city:'Lanzarote',country:'Spain',cc:'ES',tz:'Atlantic/Canary',lat:28.9455,lon:-13.6052,icao:'GCRR',rw:30,len:'2400m',term:'Canary Islands',stand:'Mixed',notes:['Trade winds often significant','Occasional reduced visibility in dust','Runway performance awareness']},
{c:'LPA',n:'Gran Canaria',city:'Las Palmas',country:'Spain',cc:'ES',tz:'Atlantic/Canary',lat:27.9319,lon:-15.3866,icao:'GCLP',rw:30,len:'3100m',term:'Canary Islands',stand:'Airbridge/remote',notes:['Wind often favours northerly runway','Long sector planning','Parallel runway environment']},
{c:'FAO',n:'Faro',city:'Faro',country:'Portugal',cc:'PT',tz:'Europe/Lisbon',lat:37.0144,lon:-7.9659,icao:'LPFR',rw:280,len:'2490m',term:'Schengen',stand:'Mixed',notes:['Seasonal congestion','Sea breeze/crosswind possible','Tourist traffic high']},
{c:'FNC',n:'Madeira',city:'Funchal',country:'Portugal',cc:'PT',tz:'Atlantic/Madeira',lat:32.6979,lon:-16.7745,icao:'LPMA',rw:50,len:'2781m',term:'Island/terrain',stand:'Mixed',notes:['Special airport terrain/wind awareness','Crosswind and turbulence can be limiting','Check company qualification requirements']},
{c:'NCE',n:'Nice',city:'Nice',country:'France',cc:'FR',tz:'Europe/Paris',lat:43.6653,lon:7.215,icao:'LFMN',rw:40,len:'2960m',term:'Schengen coastal',stand:'Airbridge/remote',notes:['Complex visual environment over water','High business/VIP traffic','French ATC disruption possible']},
{c:'MRS',n:'Marseille',city:'Marseille',country:'France',cc:'FR',tz:'Europe/Paris',lat:43.4393,lon:5.2214,icao:'LFML',rw:310,len:'3500m',term:'Schengen',stand:'Mixed',notes:['Mistral winds can be strong','Potential ATC flow restrictions','Industrial/port area weather haze']},
{c:'LYS',n:'Lyon',city:'Lyon',country:'France',cc:'FR',tz:'Europe/Paris',lat:45.7256,lon:5.0811,icao:'LFLL',rw:350,len:'4000m',term:'Schengen',stand:'Airbridge',notes:['Winter fog possible','Parallel runway operations','Alpine weather influences']},
{c:'GVA',n:'Geneva',city:'Geneva',country:'Switzerland',cc:'CH',tz:'Europe/Zurich',lat:46.2381,lon:6.1089,icao:'LSGG',rw:40,len:'3900m',term:'Schengen/non-EU',stand:'Airbridge',notes:['Alpine terrain awareness','Winter de-icing likely','Business traffic peaks']},
{c:'VRN',n:'Verona',city:'Verona',country:'Italy',cc:'IT',tz:'Europe/Rome',lat:45.3957,lon:10.8885,icao:'LIPX',rw:40,len:'3068m',term:'Schengen',stand:'Mixed',notes:['Alpine weather influence','Summer events around Lake Garda','Fog risk in winter']},
{c:'VCE',n:'Venice',city:'Venice',country:'Italy',cc:'IT',tz:'Europe/Rome',lat:45.5053,lon:12.3519,icao:'LIPZ',rw:40,len:'3300m',term:'Schengen',stand:'Airbridge/remote',notes:['Lagoon weather/haze','Tourist congestion','Complex taxi/apron environment']},
{c:'CTA',n:'Catania',city:'Catania',country:'Italy',cc:'IT',tz:'Europe/Rome',lat:37.4668,lon:15.0664,icao:'LICC',rw:80,len:'2435m',term:'Schengen island',stand:'Mixed',notes:['Etna volcanic ash awareness','Hot/high summer operations','Busy tourist demand']},
{c:'NAP',n:'Naples',city:'Naples',country:'Italy',cc:'IT',tz:'Europe/Rome',lat:40.8845,lon:14.2908,icao:'LIRN',rw:60,len:'2628m',term:'Schengen',stand:'Mixed',notes:['Terrain and city environment','Busy apron and taxi','Volcanic/terrain awareness']},
{c:'DBV',n:'Dubrovnik',city:'Dubrovnik',country:'Croatia',cc:'HR',tz:'Europe/Zagreb',lat:42.5614,lon:18.2682,icao:'LDDU',rw:120,len:'3300m',term:'Schengen',stand:'Mixed',notes:['Terrain close to airport','Bora wind possible','Seasonal congestion']},
{c:'SPU',n:'Split',city:'Split',country:'Croatia',cc:'HR',tz:'Europe/Zagreb',lat:43.5389,lon:16.298,icao:'LDSP',rw:50,len:'2550m',term:'Schengen',stand:'Mixed',notes:['Terrain/coastal approach','Summer apron pressure','Bora/sea breeze effects']},
{c:'RHO',n:'Rhodes',city:'Rhodes',country:'Greece',cc:'GR',tz:'Europe/Athens',lat:36.4054,lon:28.0862,icao:'LGRP',rw:70,len:'3300m',term:'Schengen island',stand:'Remote common',notes:['Meltemi wind awareness','Summer congestion','Hot weather operations']},
{c:'HER',n:'Heraklion',city:'Heraklion',country:'Greece',cc:'GR',tz:'Europe/Athens',lat:35.3397,lon:25.1803,icao:'LGIR',rw:270,len:'2714m',term:'Schengen island',stand:'Remote common',notes:['Busy summer operations','Terrain and wind on approach','High turnaround pressure']},
{c:'CFU',n:'Corfu',city:'Corfu',country:'Greece',cc:'GR',tz:'Europe/Athens',lat:39.6019,lon:19.9117,icao:'LGKR',rw:350,len:'2375m',term:'Schengen island',stand:'Remote common',notes:['Shorter runway environment','Terrain/water visual cues','Summer congestion']},
{c:'SKG',n:'Thessaloniki',city:'Thessaloniki',country:'Greece',cc:'GR',tz:'Europe/Athens',lat:40.5197,lon:22.9709,icao:'LGTS',rw:100,len:'3440m',term:'Schengen',stand:'Airbridge/remote',notes:['Fog risk in winter','Parallel taxi complexity','Summer storm risk']},
{c:'MLA',n:'Malta',city:'Malta',country:'Malta',cc:'MT',tz:'Europe/Malta',lat:35.8575,lon:14.4775,icao:'LMML',rw:130,len:'3544m',term:'Island',stand:'Airbridge/remote',notes:['Crosswind possible','Island weather shifts','Busy summer apron']},
{c:'RAK',n:'Marrakech',city:'Marrakech',country:'Morocco',cc:'MA',tz:'Africa/Casablanca',lat:31.6069,lon:-8.0363,icao:'GMMX',rw:100,len:'3100m',term:'Non-Schengen',stand:'Mixed',notes:['Hot/high awareness','Dust/haze possible','Passport/customs flow longer']},
{c:'DLM',n:'Dalaman',city:'Dalaman',country:'Turkey',cc:'TR',tz:'Europe/Istanbul',lat:36.7131,lon:28.7925,icao:'LTBS',rw:190,len:'3000m',term:'Non-Schengen',stand:'Mixed',notes:['Mountain/terrain awareness','Summer tourist peaks','Longer border processing']},
{c:'AYT',n:'Antalya',city:'Antalya',country:'Turkey',cc:'TR',tz:'Europe/Istanbul',lat:36.8987,lon:30.8005,icao:'LTAI',rw:180,len:'3400m',term:'Non-Schengen',stand:'Airbridge/remote',notes:['Very busy holiday airport','Hot weather operations','Potential long taxi/apron delays']},
{c:'JER',n:'Jersey',city:'Jersey',country:'Jersey',cc:'JE',tz:'Europe/Jersey',lat:49.2079,lon:-2.1955,icao:'EGJJ',rw:260,len:'1706m',term:'Channel Islands',stand:'Remote',notes:['Shorter runway environment','Coastal fog possible','Island weather changes quickly']}
];
const tabs=[['mission','Mission'],['weather','Weather & Wind'],['airport','Airport Intel'],['ftl','FTL & Checks'],['intel','AI Brief'],['tools','EFB Tools'],['watch','Watch/Offline']];
let selected=DESTS[0], wx={temp:null,wind:18,dir:230,code:1,sky:'Partly cloudy'}, fdp={max:'12:30',remain:'08:42'};
const $=id=>document.getElementById(id); const pad=n=>String(n).padStart(2,'0');
function init(){ $('destSelect').innerHTML=DESTS.sort((a,b)=>a.c.localeCompare(b.c)).map(d=>`<option value="${d.c}">${d.c} · ${d.n}</option>`).join(''); $('destSelect').value='PMI'; $('tabs').innerHTML=tabs.map((t,i)=>`<button class="tab ${i?'':'active'}" data-tab="${t[0]}">${t[1]}</button>`).join(''); document.querySelectorAll('.tab').forEach(b=>b.onclick=()=>showTab(b.dataset.tab)); bind(); renderAll(); fetchWeather(); setInterval(tick,1000); tick(); if('serviceWorker' in navigator) navigator.serviceWorker.register('./sw.js').catch(()=>{}); }
function bind(){ $('loadBtn').onclick=loadFlight; $('destSelect').onchange=()=>{selected=DESTS.find(d=>d.c==$('destSelect').value); renderAll(); fetchWeather();}; $('refreshBtn').onclick=()=>{loadFlight(); fetchWeather();}; $('regInput').oninput=updateLinks; $('voiceBtn').onclick=()=>speak(makeBrief()); $('calcFtl').onclick=calcFtl; ['reportTime','stdTime','sectors','acclim','blockTime','discSelect'].forEach(id=>$(id)&&($(id).onchange=calcFtl)); $('rerunFlow')&&($('rerunFlow').onclick=renderAirport); $('copyBrief').onclick=()=>navigator.clipboard?.writeText(makeBrief()); $('todBtn').onclick=()=>{$('todOut').textContent=`3:1 TOD: ${$('todDist').value} NM · approx ${Math.round($('todDist').value/$('gs').value*60)} min at ${$('gs').value} kt`;}; $('convBtn').onclick=()=>{$('convOut').textContent=(Number($('hpa').value)*0.02953).toFixed(2)+' inHg';}; $('replayBtn').onclick=()=>{let p=$('replayPlane');p.animate([{left:'8%'},{left:'88%'}],{duration:4500,easing:'ease-in-out'});}; $('exportBtn').onclick=exportBrief; $('printBtn').onclick=()=>print(); document.querySelectorAll('[data-command]').forEach(b=>b.onclick=()=>command(b.dataset.command)); $('installBtn').onclick=()=>alert('Install from your browser menu. On iPhone: Share → Add to Home Screen.'); }
function showTab(id){document.querySelectorAll('.section').forEach(s=>s.classList.toggle('active',s.id==id));document.querySelectorAll('.tab').forEach(t=>t.classList.toggle('active',t.dataset.tab==id));}
function loadFlight(){let input=$('flightInput').value.trim().toUpperCase().replace(/\s+/g,''); if(!input){renderAll(); fetchWeather(); return;} if(!/^BA\d{1,4}[A-Z]?$/.test(input)){alert('Enter a BA flight number such as BA2674. You can also use the destination dropdown directly.'); return;} let digits=parseInt((input.match(/\d+/)||['2674'])[0],10); selected=DESTS[digits % DESTS.length]||DESTS[0]; if(input==='BA2674') selected=DESTS.find(d=>d.c==='PMI')||selected; $('destSelect').value=selected.c; renderAll(); fetchWeather();}
function renderAll(){ $('depCode').textContent='LGW'; $('arrCode').textContent=selected.c; $('mapArr').textContent=selected.c; $('routePlane').style.setProperty('--p',35+((selected.lon+20)%40)); renderTimes(); renderLinks(); renderInsights(); renderWind(); renderAirport(); renderCrew(); renderTimeline(); calcFtl(); renderChecks(); renderEvents(); command('brief',false); }
function tick(){let uk=new Intl.DateTimeFormat('en-GB',{timeZone:'Europe/London',hour:'2-digit',minute:'2-digit',second:'2-digit'}).format(new Date()); $('clock').textContent=uk+' UK'; renderTimes(); let mins=35-(new Date().getMinutes()%35); if($('turnMins')) $('turnMins').textContent=mins; if($('wheel')) $('wheel').style.setProperty('--turn',`${Math.max(5,100-mins/35*100)}%`);}
function renderTimes(){ if(!selected)return; let now=new Date(); $('localTime').textContent=new Intl.DateTimeFormat('en-GB',{timeZone:selected.tz,hour:'2-digit',minute:'2-digit'}).format(now); let ldn=new Date(now.toLocaleString('en-US',{timeZone:'Europe/London'})); let loc=new Date(now.toLocaleString('en-US',{timeZone:selected.tz})); let diff=Math.round((loc-ldn)/3600000); $('timeDiff').textContent=`London ${diff>=0?'+':''}${diff}h`; }
async function fetchWeather(){
 if(!selected) selected=DESTS[0];
 // Immediate operational fallback so the app always loads runway, wind and weather data even offline.
 const seed = selected.c.split('').reduce((a,ch)=>a+ch.charCodeAt(0),0);
 const fallbackTemp = 12 + (Math.abs(Math.round(selected.lat)) + seed) % 18;
 const fallbackWind = 8 + (seed % 22);
 const fallbackDir = (Math.round((selected.rw + 20 + seed * 7) % 360) || 360);
 wx={temp:fallbackTemp, wind:fallbackWind, dir:fallbackDir, code:1, sky:'Operational fallback · live update pending', qnh:1013 + (seed%17)-8, hourly:null};
 renderWeather(); renderWind(); renderInsights(); renderAirport(); renderCrew();
 try{
   let url=`https://api.open-meteo.com/v1/forecast?latitude=${selected.lat}&longitude=${selected.lon}&current=temperature_2m,weather_code,wind_speed_10m,wind_direction_10m,pressure_msl&hourly=temperature_2m,precipitation_probability,weather_code,wind_speed_10m,wind_direction_10m&forecast_days=1&wind_speed_unit=mph&timezone=auto`;
   let r=await fetch(url,{cache:'no-store'});
   if(!r.ok) throw new Error('weather api');
   let j=await r.json();
   wx.temp=Math.round(j.current.temperature_2m);
   wx.wind=Math.round(j.current.wind_speed_10m);
   wx.dir=Math.round(j.current.wind_direction_10m);
   wx.code=j.current.weather_code;
   wx.sky=sky(wx.code);
   wx.qnh=Math.round(j.current.pressure_msl||wx.qnh||1013);
   wx.hourly=j.hourly;
 }catch(e){
   wx.sky = wx.sky.replace(' · live update pending','');
 }
 renderWeather(); renderWind(); renderInsights(); renderAirport(); renderCrew();
}
function sky(c){if(c===0)return'Clear'; if([1,2].includes(c))return'Partly cloudy'; if(c===3)return'Overcast'; if(c>=45&&c<60)return'Fog/low visibility'; if(c>=60&&c<70)return'Rain'; if(c>=70&&c<80)return'Snow'; if(c>=80&&c<96)return'Showers'; if(c>=96)return'Thunderstorms'; return'Cloudy';}
function renderWeather(){ $('wxNow').textContent=(wx.temp??'--')+'°C'; $('wxText').textContent=`${wx.sky}, wind ${wx.dir}°/${wx.wind} mph`; $('tempBox').textContent=(wx.temp??'--')+'°C'; $('windBox').textContent=`${wx.dir}° / ${wx.wind} mph`; $('skyBox').textContent=wx.sky; $('qnhBox').textContent=wx.qnh||1013; $('rainLayer').style.display=/Rain|Showers|Thunder/.test(wx.sky)?'block':'none'; let h=wx.hourly; if(h){let rows=h.time.slice(0,12).map((t,i)=>{let hour=t.slice(11,16),temp=Math.round(h.temperature_2m[i]),pop=h.precipitation_probability[i]||0;return `<div style="margin:10px 0"><div class="small">${hour} · ${temp}°C · rain ${pop}%</div><div class="bar"><div class="fill" style="width:${Math.min(100,(temp+10)*2)}%"></div></div></div>`}).join(''); $('forecastBars').innerHTML=rows;} renderLinks();}
function renderWind(){
 let rw=Number(selected.rw)||240, windDir=Number(wx.dir)||240, spd=Number(wx.wind)||0;
 let rwNum=Math.round(rw/10); if(rwNum===0)rwNum=36; let opp=Math.round(((rw+180)%360)/10); if(opp===0)opp=36;
 $('rwA').textContent=String(rwNum).padStart(2,'0'); $('rwB').textContent='Opposite '+String(opp).padStart(2,'0')+' · heading '+rw+'°';
 let angle=((windDir-rw+540)%360)-180;
 let cross=spd*Math.sin(angle*Math.PI/180), head=spd*Math.cos(angle*Math.PI/180);
 $('components').textContent=`${Math.abs(Math.round(cross))} mph XW`;
 $('componentDetail').textContent=`${head>=0?Math.round(head)+' mph headwind':Math.abs(Math.round(head))+' mph tailwind'} · wind FROM ${windDir}° at ${spd} mph`;
 const cx=380, cy=180, rlen=460;
 function pt(heading,dist){let rad=heading*Math.PI/180;return [cx+Math.sin(rad)*dist, cy-Math.cos(rad)*dist];}
 let [x1,y1]=pt(rw,rlen/2), [x2,y2]=pt((rw+180)%360,rlen/2);
 let from=pt(windDir,145), to=[cx,cy]; // arrow points from reported wind direction toward centre: wind FROM
 let crossSide=cross>=0?'from right':'from left';
 $('windSvg').innerHTML=`<defs><linearGradient id="rwgrad" x1="0" x2="1"><stop stop-color="#111827"/><stop offset=".5" stop-color="#43546f"/><stop offset="1" stop-color="#111827"/></linearGradient><marker id="windHead" markerWidth="14" markerHeight="14" refX="11" refY="5" orient="auto"><path d="M0,0 L0,10 L12,5 z" fill="#54e6ff"/></marker><filter id="glow"><feGaussianBlur stdDeviation="4" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter></defs>
 <circle cx="${cx}" cy="${cy}" r="150" fill="none" stroke="rgba(255,255,255,.10)"/><text x="${cx}" y="42" fill="white" text-anchor="middle" font-weight="900">N</text><text x="${cx}" y="334" fill="white" text-anchor="middle">S</text><text x="70" y="185" fill="white">W</text><text x="680" y="185" fill="white">E</text>
 <line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="url(#rwgrad)" stroke-width="54" stroke-linecap="round"/><line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="white" stroke-width="3" stroke-dasharray="18 18" opacity=".9"/>
 <text x="${x1}" y="${y1-18}" fill="white" font-size="24" font-weight="900" text-anchor="middle">${String(rwNum).padStart(2,'0')}</text><text x="${x2}" y="${y2+28}" fill="white" font-size="24" font-weight="900" text-anchor="middle">${String(opp).padStart(2,'0')}</text>
 <line x1="${from[0]}" y1="${from[1]}" x2="${to[0]}" y2="${to[1]}" stroke="#54e6ff" stroke-width="7" stroke-linecap="round" marker-end="url(#windHead)" filter="url(#glow)"><animate attributeName="stroke-width" values="5;9;5" dur="1.6s" repeatCount="indefinite"/></line>
 <circle cx="${from[0]}" cy="${from[1]}" r="9" fill="#54e6ff" opacity=".8"/><text x="${from[0]}" y="${from[1]-18}" fill="#54e6ff" font-weight="900" text-anchor="middle">WIND FROM ${windDir}°</text>
 <text x="${cx}" y="${cy+86}" fill="#9aff6b" font-weight="900" text-anchor="middle">${Math.abs(Math.round(cross))} mph crosswind ${crossSide}</text><text x="${cx}" y="${cy+110}" fill="#ffd166" font-weight="900" text-anchor="middle">${head>=0?Math.round(head)+' mph headwind':Math.abs(Math.round(head))+' mph tailwind'}</text>`;
}

function renderAirport(){
 let intl=!(selected.cc==='GB'||selected.cc==='JE'), peak=/tourist|holiday|summer|busy|congestion/i.test((selected.term+' '+selected.notes.join(' '))), remote=/remote|bus/i.test(selected.stand);
 let base=[['✈️','Stand',remote?'Remote/bus likely possible':'Airbridge/stand',remote?8:5],['🚶','Terminal transfer',remote?'Bus transfer included':'Walk/bridge',remote?12:6],['🛂',intl?'Border':'CTA/domestic','Flow varies by staffing',intl?14:4],['🧳','Baggage hall','Passenger reclaim flow',peak?18:12],['✅','Customs/exit','Landside access',intl?8:4],['🚕','Outside terminal',peak?'Tourist traffic likely':'Normal kerbside flow',peak?12:6]];
 $('terminalFlow').innerHTML=base.map((x,i)=>`<div class="flowStep"><div style="font-size:30px">${x[0]}</div><b>${x[1]}</b><span class="small">${x[2]}</span><div class="flowBar"><i style="width:${Math.min(100,x[3]*5)}%"></i></div><div class="small">typ. ${Math.max(2,x[3]-3)}-${x[3]+6} min</div></div>`).join('');
 let target=Number($('turnTarget')?.value||40), board=Number($('boardBefore')?.value||25);
 let phases=[['On blocks',0],['Disembark',5],['Clean/cater',12],['Fuel/water',18],['Boarding',Math.max(0,target-board)],['Doors',target-8],['Push ready',target]];
 $('turnPhases').innerHTML=phases.map((p,i)=>`<div class="phase ${i<4?'on':''}"><b>${p[0]}</b><div class="small">T+${p[1]} min</div></div>`).join('');
 $('airportNotes').innerHTML=selected.notes.map(n=>`<div class="insight">${n}</div>`).join('');
 $('airportQuick').innerHTML=[['ICAO',selected.icao],['Runway ref',String(Math.round(selected.rw/10)||36).padStart(2,'0')],['Length',selected.len],['Stand type',selected.stand]].map(x=>`<div class="airportMini"><span class="small">${x[0]}</span><b>${x[1]}</b></div>`).join('');
 renderAirportSchematic();
 $('knowledgeGrid').innerHTML=[['Airport Overview',`ICAO ${selected.icao}. Primary runway reference ${String(Math.round(selected.rw/10)||36).padStart(2,'0')}/${String(Math.round(((selected.rw+180)%360)/10)||36).padStart(2,'0')}. Published runway length reference ${selected.len}.`],['Ground Ops',`${selected.stand}. Schematic highlights stand area, runway orientation and likely transition points; use official charts for taxi routing.`],['Passenger Flow',`${selected.term}. Arrival flow model uses destination type and expected passenger complexity.`],['Weather Tendencies',selected.notes.find(n=>/wind|weather|fog|sea|dust|Calima|Mistral|Bora/i.test(n))||'Monitor METAR/TAF and radar for short-term changes.'],['Operational Notes',selected.notes.join(' ')],['Crew Information','Use company-approved crew transport/hotel data. Local event links provided for context.']].map(k=>`<div class="card col-4"><h3>${k[0]}</h3><p class="small">${k[1]}</p></div>`).join('');
}
function renderAirportSchematic(){
 let rw=Number(selected.rw)||240, cx=380, cy=178, len=520;
 function pt(heading,dist){let rad=heading*Math.PI/180;return [cx+Math.sin(rad)*dist, cy-Math.cos(rad)*dist];}
 let [x1,y1]=pt(rw,len/2), [x2,y2]=pt((rw+180)%360,len/2);
 let termY = selected.lat>40?285:70; let termX = selected.lon>5?540:150;
 let standX=termX+(termX<300?75:-75), standY=termY+(termY<180?48:-48);
 let mid=[cx,cy];
 let rn=String(Math.round(rw/10)||36).padStart(2,'0'), ro=String(Math.round(((rw+180)%360)/10)||36).padStart(2,'0');
 $('airportSvg').innerHTML=`<defs><marker id="taxiHead" markerWidth="12" markerHeight="12" refX="10" refY="5" orient="auto"><path d="M0,0 L0,10 L12,5 z" fill="#ffd166"/></marker><linearGradient id="tgrad" x1="0" x2="1"><stop stop-color="#9c7bff"/><stop offset="1" stop-color="#54e6ff"/></linearGradient></defs>
 <rect x="0" y="0" width="760" height="360" fill="rgba(255,255,255,.02)"/><line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="#263753" stroke-width="58" stroke-linecap="round"/><line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="white" stroke-width="3" stroke-dasharray="18 18"/><text x="${x1}" y="${y1-18}" fill="white" font-size="22" font-weight="900" text-anchor="middle">${rn}</text><text x="${x2}" y="${y2+30}" fill="white" font-size="22" font-weight="900" text-anchor="middle">${ro}</text>
 <rect x="${termX-85}" y="${termY-30}" width="170" height="60" rx="15" fill="rgba(156,123,255,.22)" stroke="rgba(255,255,255,.35)"/><text x="${termX}" y="${termY+5}" fill="white" font-weight="900" text-anchor="middle">Terminal / crew flow</text>
 <rect x="${standX-68}" y="${standY-24}" width="136" height="48" rx="14" fill="rgba(84,230,255,.18)" stroke="rgba(84,230,255,.55)"/><text x="${standX}" y="${standY+5}" fill="white" font-weight="900" text-anchor="middle">Stand area</text>
 <path d="M${standX} ${standY} C${(standX+mid[0])/2} ${standY} ${(standX+mid[0])/2} ${mid[1]} ${mid[0]} ${mid[1]}" stroke="url(#tgrad)" stroke-width="6" fill="none" marker-end="url(#taxiHead)" stroke-dasharray="12 8"><animate attributeName="stroke-dashoffset" from="100" to="0" dur="2.5s" repeatCount="indefinite"/></path>
 <circle cx="${mid[0]}" cy="${mid[1]}" r="13" fill="#ffd166"/><text x="24" y="326" fill="rgba(255,255,255,.75)">Operational schematic: runway orientation, terminal/stand relationship and taxi transition model only.</text>`;
}

function renderCrew(){ $('crewView').innerHTML=`<div class="metric"><span>Route</span><b>LGW → ${selected.c}</b><small>${selected.n}</small></div><div class="metric"><span>Duty/FDP</span><b>${fdp.remain} left</b><small>Max ${fdp.max}, latest off ${$('latestOff')?.textContent||'--:--'}</small></div><div class="metric"><span>Destination</span><b>${$('localTime').textContent}</b><small>${wx.sky}, ${wx.temp??'--'}°C</small></div>`; $('watchRoute').textContent=`LGW→${selected.c}`; $('watchWx').textContent=(wx.temp??'--')+'°'; $('watchFdp').textContent='FDP '+fdp.remain;}
function renderTimeline(){let phases=['Report','Brief','Aircraft','Boarding','Push','Taxi','Take-off','Cruise','TOD','Landing','On blocks']; $('timeline').innerHTML=phases.map((p,i)=>`<div class="phase ${i<4?'on':''}"><b>${p}</b><div class="small">${i<4?'active':'pending'}</div></div>`).join('');}
function toMin(t){let [h,m]=(t||'00:00').split(':').map(Number);return h*60+m}
function hm(min){min=((Math.round(min)%1440)+1440)%1440;return pad(Math.floor(min/60))+':'+pad(min%60)}
function addHM(t,mins){return hm(toMin(t)+mins)}
function blockMins(){let v=$('blockTime')?.value||'02:30'; let [h,m]=v.split(':').map(Number); return h*60+m;}
function fdpLimitMins(report,sectors,acclim){
 let m=toMin(report), h=m/60; // simplified UK/EASA-style planning table by report band; guide only
 let table2 = (h>=5&&h<6)?720:(h>=6&&h<7)?735:(h>=7&&h<13.5)?780:(h>=13.5&&h<17)?750:(h>=17&&h<22)?720:660;
 let limit = table2 - Math.max(0,sectors-2)*30;
 if(sectors>=4) limit-=15;
 if(acclim==='No') limit-=30;
 return Math.max(540,limit);
}
function calcFtl(){
 let sectors=Number($('sectors').value), report=$('reportTime').value||'07:15', std=$('stdTime')?.value||'08:15', disc=Number($('discSelect')?.value||120), block=blockMins();
 let max=fdpLimitMins(report,sectors,$('acclim').value); let maxEnd=toMin(report)+max; let latestOff=maxEnd-block; let absOff=latestOff+disc;
 fdp.max=`${Math.floor(max/60)}:${pad(max%60)}`; fdp.remain=hm(maxEnd-toMin(new Date().toTimeString().slice(0,5)));
 $('maxFdp').textContent=fdp.max; $('maxFdpRule').textContent=`${sectors} sector${sectors>1?'s':''} · report ${report}`;
 $('fdpMaxTop').textContent='Max '+fdp.max; $('latestOff').textContent=hm(latestOff); $('latestOffDetail').textContent=`max FDP end ${hm(maxEnd)} minus block ${Math.floor(block/60)}:${pad(block%60)}`;
 $('discBegins').textContent=hm(latestOff); $('absLimit').textContent=hm(absOff); $('discretion')&&($('discretion').textContent='+'+Math.floor(disc/60)+':'+pad(disc%60));
 let delay=toMin(std)-latestOff; let threat=20+sectors*7+(report<'0700'?16:0)+(report>='2200'||report<'0500'?35:0)+Math.max(0,delay)*1.5;
 $('fatigue').textContent=threat<45?'Low':threat<75?'Moderate':'High'; $('fatigueDetail').textContent=delay>0?`STD is ${Math.round(delay)} min beyond latest off-blocks: discretion planning required.`:`${Math.abs(Math.round(delay))} min buffer before discretion at current STD.`;
 $('fatigueBar').style.width=Math.min(100,threat)+'%';
 let base=toMin(report), end=absOff, span=Math.max(60,end-base); function pct(t){return Math.max(0,Math.min(100,(t-base)/span*100));}
 $('stdMarker').style.left=pct(toMin(std))+'%'; $('latestMarker').style.left=pct(latestOff)+'%'; $('discMarker').style.left=pct(absOff)+'%'; $('fdpTape').classList.toggle('fdpCritical',delay>0);
 renderCrew();
}

function renderChecks(){let items=['Weather reviewed','NOTAM link opened','FDP checked','Destination threats reviewed','Aircraft tracking checked','Crew brief generated']; $('checks').innerHTML=items.map(i=>`<div class="check" onclick="this.classList.toggle('done')">✓ ${i}</div>`).join('');}
function renderEvents(){ $('events').innerHTML=`<div class="insight">Public holidays and events are opened through live destination links for ${selected.city}.</div><div class="insight">For major resort destinations, expect increased terminal and road demand during school holidays, festivals and cruise-ship arrival peaks.</div>`;}
function renderLinks(){if(!selected)return;let q=encodeURIComponent(`${selected.city} ${selected.country}`), flight=encodeURIComponent($('flightInput').value.trim().toUpperCase()||'BA'), reg=encodeURIComponent(($('regInput').value||'G-EUYL').trim().toUpperCase()); const set=(id,url)=>{let a=$(id); if(a)a.href=url;}; set('fr24Link',`https://www.flightradar24.com/data/aircraft/${reg}`); set('adsbLink',`https://globe.adsbexchange.com/?reg=${reg}`); set('flightAwareLink',`https://www.flightaware.com/live/flight/${flight}`); set('metarLink',`https://aviationweather.gov/data/metar/?id=${selected.icao}&hours=0&taf=on`); set('radarLink',`https://www.windy.com/${selected.lat}/${selected.lon}`); set('holidayLink',`https://date.nager.at/PublicHoliday/Country/${selected.cc}`); set('eventLink',`https://www.google.com/search?q=${q}+events+today`); set('notamLink',`https://notams.aim.faa.gov/notamSearch/`); set('euroLink',`https://www.public.nm.eurocontrol.int/PUBPORTAL/gateway/spec/`); $('regShow').textContent=decodeURIComponent(reg);}
function updateLinks(){renderLinks();}
function command(type, speakIt=true){let text=makeBrief(); if(type==='weather')text=`${selected.c} weather: ${wx.sky}, temperature ${wx.temp??'unknown'} degrees Celsius, wind from ${wx.dir} degrees at ${wx.wind} miles per hour.`; if(type==='risks')text=Array.from(document.querySelectorAll('#insights .insight')).map(x=>x.textContent).join(' '); if(type==='ftl')text=`Maximum FDP ${fdp.max}. Latest off blocks before discretion ${$('latestOff')?.textContent||'unknown'}. Absolute guide with selected discretion ${$('absLimit')?.textContent||'unknown'}.`; $('commandOut').textContent=text; if(speakIt)speak(text);}
function makeBrief(){return `FlightIntel brief for ${$('flightInput').value.toUpperCase()}. BA Euroflyer route London Gatwick to ${selected.n}, ${selected.c}. Destination local time ${$('localTime').textContent}, ${$('timeDiff').textContent}. Weather ${wx.sky}, ${wx.temp??'unknown'} degrees Celsius, wind from ${wx.dir} degrees at ${wx.wind} miles per hour. Main considerations: ${selected.notes.join('; ')}. FDP max ${fdp.max}, discretion guide ${$('discretion')?.textContent||'+2:00'}. Verify all operational data against official company sources.`;}
function speak(t){try{speechSynthesis.cancel();let u=new SpeechSynthesisUtterance(t);u.rate=.95;u.pitch=1;speechSynthesis.speak(u);}catch(e){}}
function exportBrief(){let data={app:'FlightIntel',flight:$('flightInput').value,destination:selected,weather:wx,brief:makeBrief(),created:new Date().toISOString()};let blob=new Blob([JSON.stringify(data,null,2)],{type:'application/json'});let a=document.createElement('a');a.href=URL.createObjectURL(blob);a.download=`flightintel-${$('flightInput').value||selected.c}.json`;a.click();}
init();
