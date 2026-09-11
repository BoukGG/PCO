const { Button, BigNumber, Footer, Input } = window.PissCancerOffDesignSystem_99f843;
const wrap = m => ({maxWidth:720,margin:'0 auto',padding:m?'40px 16px':'64px 32px'});
const H2 = ({m,children}) => <h2 style={{fontSize:m?28:36,lineHeight:1.15,fontWeight:600,marginBottom:20}}>{children}</h2>;
const P = ({children}) => <p style={{fontSize:18,lineHeight:1.55,maxWidth:'65ch',marginBottom:16}}>{children}</p>;
function Cause({mobile}){ return <section id="overview" style={wrap(mobile)}>
  <H2 m={mobile}>The overview</H2>
  <P>Bladder cancer is the sixth most common cancer in the US yet also one of the least funded. My Uncle Dave is fighting it right now, spending 5 days a week in Radiation and Chemotherapy.</P>
  <P>I'm not suffering like my Uncle Dave is. In fact, around the same time as his diagnosis I was fortunate enough to be making a decision to run the Southern Tour Ultra, a 100-mile ultramarathon in Wilmington, NC.</P>
  <P>At first I felt guilty that I got to make a decision to run 100 miles while my uncle prayed for his life, but I quickly realized that guilt alone wouldn't help anything. With thousands of miles to run in preparation for my upcoming ultra, I thought, "What better opportunity than to be a moving billboard for what's important to me?".</P>
  <P>I start my ultramarathon at 12pm on January 15th, 2027, and am hoping to finish within 24 hours. Until then I'm training six days a week. <strong>If you see me running around in that ugly yellow shirt, that was on purpose. Please say hi.</strong></P>
</section>; }
const H3 = ({m,id,divider,children}) => <h3 id={id} style={{fontSize:m?22:26,lineHeight:1.2,fontWeight:600,marginBottom:14,...(divider?{marginTop:36,paddingTop:28,borderTop:'1px solid var(--color-border)'}:{marginTop:8})}}>{children}</h3>;
function Give({mobile, onDonate}){ return <section id="give" style={wrap(mobile)}>
  <H2 m={mobile}>Ways to give</H2>
  <H3 m={mobile} id="pledge">The pledge</H3>
  <P>Pledge an amount per mile. Whether that's a dime or a dollar, anything helps me push to the finish. You only pay for the miles I actually finish inside my 24-hour goal. Cover all 100 and a $1 pledge turns into $100. I'll follow up with everyone who pledged once the ultramarathon is done, and you can decide whether you'd like your money to go to bladder cancer research or disabled veterans.</P>
  <Button variant="donate" fullWidth={mobile} onClick={()=>onDonate('pledge')}>Join the pledge</Button>
  <H3 m={mobile} id="charity" divider>Donate through [charity]</H3>
  <P>Tax-deductible donations go through [charity], a registered 501(c)(3).</P>
  <Button variant="donate" fullWidth={mobile} onClick={()=>onDonate('card')}>Donate (tax-deductible)</Button>
  <H3 m={mobile} id="venmo" divider>Quick and easy (Venmo)</H3>
  {/* paragraph coming */}
  <Button variant="secondary" fullWidth={mobile} onClick={()=>onDonate('venmo')}>Venmo @BlakeAnderson3</Button>
</section>; }
function Countdown({mobile, target}){
  const t=new Date(target).getTime();
  const [now,setNow]=React.useState(()=>Date.now());
  React.useEffect(()=>{ const id=setInterval(()=>setNow(Date.now()),1000); return ()=>clearInterval(id); },[]);
  const left=Math.max(0,t-now); const s=Math.floor(left/1000);
  const parts=[[Math.floor(s/86400),'days'],[Math.floor(s/3600)%24,'hours'],[Math.floor(s/60)%60,'minutes'],[s%60,'seconds']];
  const pad=n=>String(n).padStart(2,'0');
  return <div style={{marginTop:36,padding:mobile?'20px 16px':'24px 28px',background:'var(--pco-navy-deep)',borderRadius:6,color:'#fff'}}>
    <div style={{fontSize:14,lineHeight:1.4,color:'rgba(255,255,255,.75)',marginBottom:12}}>{left>0?'Countdown to the 100 miler on January 15th':'The run has started. Follow along on Strava.'}</div>
    <div style={{display:'grid',gridTemplateColumns:'repeat(4,1fr)',gap:mobile?8:16}}>
      {parts.map(([v,l])=><div key={l}><div style={{fontFamily:'var(--font-display)',fontWeight:700,fontSize:mobile?36:56,lineHeight:1,color:'#fff'}}>{l==='days'?v:pad(v)}</div><div style={{fontSize:13,color:'rgba(255,255,255,.75)',marginTop:6}}>{v===1?l.slice(0,-1):l}</div></div>)}
    </div>
  </div>;
}
function Stats({mobile, stats, raceStart, strava, instagram}){
  const items=[['miles',stats.miles,'miles run'],['steps',stats.steps,'steps taken'],['hours',stats.hours,'hours on my feet'],['runs',stats.runs,'training runs']];
  const follow=[strava&&['Strava',strava],instagram&&['Instagram',instagram]].filter(Boolean);
  return <section id="stats" style={{background:'var(--pco-paper-2)'}}><div style={wrap(mobile)}>
  <H2 m={mobile}>Training stats</H2>
  <P>Logged since January 1st, 2026.</P>
  <div style={{display:'grid',gridTemplateColumns:mobile?'1fr 1fr':'repeat(4,1fr)',gap:mobile?'28px 16px':'36px 24px',marginTop:28,alignItems:'end'}}>
    {items.map(([k,v,cap])=><BigNumber key={k} size={mobile?'sm':'md'} color={k==='miles'?'navy':'ink'} value={v} caption={cap} />)}
  </div>
  {follow.length>0 && <p style={{marginTop:36,fontSize:18,lineHeight:1.55}}>Follow along — training updates live on {follow.map(([l,h],i)=><React.Fragment key={l}>{i>0?' and ':''}<a href={h} target="_blank" rel="noopener" style={{color:'var(--pco-navy)',fontWeight:600}}>{l}</a></React.Fragment>)}.</p>}
  {raceStart && <Countdown mobile={mobile} target={raceStart} />}
</div></section>; }
function Why({mobile, onDonate}){ return <section id="why" style={{background:'var(--pco-paper-2)'}}><div style={wrap(mobile)}>
  <H2 m={mobile}>The why</H2>
  <P>My Uncle Dave is one of the greatest men I know. He's the guy who shows up constantly for his family, for his friends, and anyone who needs a hand. Spending the last 40 years with the United States Coast Guard, there's one word to describe him, and that's selfless.</P>
  <P>Right now he's in the fight of his life against bladder cancer, spending five days a week commuting multiple hours to radiation and chemotherapy. I had the privilege to stand by his side during his first treatment, and what I saw was a man who faces a grueling challenge daily, yet with nothing but a smile on his face.</P>
  <P>It pisses me off that I can't do anything about his suffering. I can't take any treatments for my Uncle Dave. That's why I'm focusing on what I can do for him, which is putting in miles as a mobile billboard — raising money and increasing awareness to make sure people fighting battles they never signed up for get some backup. Every mile up until, and including the 100 I'll run on January 15th, is with my Uncle Dave in mind.</P>
  <div style={{marginTop:28}}><Photo src="assets/photos/mom-and-dave.jpeg" label="Real photo: my beautiful mom and my Uncle Dave" style={{aspectRatio:'4/5',maxWidth:mobile?'100%':440}} />
  <p style={{fontSize:14,lineHeight:1.5,color:'var(--color-text-muted)',marginTop:8}}>My beautiful mom and my Uncle Dave at his first chemotherapy treatment this past August.</p></div>
  <div style={{display:'flex',flexDirection:mobile?'column':'row',flexWrap:'wrap',gap:12,marginTop:28}}>
    <Button variant="donate" fullWidth={mobile} onClick={()=>onDonate('card')}>Donate for Uncle Dave</Button>
    <Button variant="secondary" fullWidth={mobile} onClick={()=>onDonate('venmo')}>Venmo for Uncle Dave</Button>
    <Button variant="outline" fullWidth={mobile} onClick={()=>onDonate('pledge')}>Join the pledge</Button>
  </div>
</div></section>; }
const VENMO_USER='BlakeAnderson3';
const VENMO_NOTE="Please specify where you'd like your money to go - bladder cancer research, disabled veterans, or helping support my Uncle Dave and his family.";
function openVenmo(amt){
  const q='txn=pay&amount='+(amt||'0')+'&note='+encodeURIComponent(VENMO_NOTE);
  const web='https://venmo.com/'+VENMO_USER+'?'+q;
  if(!/iPhone|iPad|iPod|Android/i.test(navigator.userAgent)){ window.open(web,'_blank','noopener'); return; }
  // venmo.com's redirect into the app re-encodes spaces as "+", which the app shows literally; the app's own scheme decodes %20 correctly.
  const fallback=setTimeout(()=>{ if(!document.hidden) window.location.href=web; },1500);
  window.addEventListener('pagehide',()=>clearTimeout(fallback),{once:true});
  window.location.href='venmo://paycharge?'+q+'&recipients='+VENMO_USER;
}
function DonateModal({mode, mobile, onClose}){
  const presets = mode==='venmo' ? ['5','10','25','100'] : ['25','50','100','250'];
  const [sel,setSel]=React.useState(mode==='venmo' ? '25' : '50'); const [custom,setCustom]=React.useState(''); const [done,setDone]=React.useState(false); const [err,setErr]=React.useState('');
  const amt = sel==='other' ? custom : sel;
  const impact = mode==='venmo' ? {'5':"Gas money for that commute to therapy.",'10':"Gas money for that commute to therapy.",'25':"Uncle Dave doesn't need to worry about dinner tonight.",'100':"Uncle Dave doesn't have to worry about lawncare this week."}[amt] : null;
  return <div onClick={onClose} style={{position:'fixed',inset:0,background:'rgba(17,24,39,.55)',display:'flex',alignItems:'center',justifyContent:'center',padding:16,zIndex:50}}>
    <div onClick={e=>e.stopPropagation()} style={{background:'#fff',borderRadius:6,padding:32,width:'100%',maxWidth:440,maxHeight:'100%',overflowY:'auto',boxShadow:'0 2px 6px rgba(0,0,0,.08)'}}>
      <div style={{display:'flex',justifyContent:'space-between',alignItems:'baseline'}}><h3 style={{fontSize:24,fontWeight:600}}>{mode==='venmo'?'Venmo':'Donate — tax-deductible'}</h3><button onClick={onClose} aria-label="Close" style={{border:0,background:'none',font:'400 24px/1 var(--font-body)',color:'var(--pco-navy)',cursor:'pointer'}}>×</button></div>
      {done ? <p style={{marginTop:16,fontSize:18,lineHeight:1.55}}>Thank you. That's ${amt} toward the goal. I'll carry it for 100 miles.</p> : <>
        <p style={{marginTop:8,fontSize:16,lineHeight:1.55,color:'var(--color-text-muted)'}}>{mode==='venmo'?'Send to @BlakeAnderson3. Please specify where you want your money to go - bladder cancer research, disabled veterans, or supporting my Uncle Dave and his family. I will follow up with where the money went.':'Processed by [charity], a registered 501(c)(3). You get a receipt by email.'}</p>
        <div style={{display:'grid',gridTemplateColumns:mobile?'repeat(3,1fr)':'repeat(5,1fr)',gap:8,marginTop:20}}>{[...presets,'other'].map(v=><Button key={v} size="sm" variant={sel===v?'secondary':'outline'} onClick={()=>{setSel(v);setErr('');}} style={{minWidth:0,paddingLeft:0,paddingRight:0,fontFamily:'var(--font-display)',fontSize:20}}>{v==='other'?'Other':'$'+v}</Button>)}</div>
        {sel==='other' && <Input label="Your amount" prefix="$" inputMode="numeric" value={custom} onChange={e=>{setCustom(e.target.value.replace(/[^0-9]/g,''));setErr('');}} style={{marginTop:16}} />}
        {impact && <p style={{marginTop:14,fontSize:16,lineHeight:1.5,fontWeight:600,color:'var(--pco-navy)'}}>{impact}</p>}
        {err && <p style={{marginTop:12,fontSize:14,lineHeight:1.5,color:'#B42318'}}>{err}</p>}
        <Button variant="donate" fullWidth style={{marginTop:20}} onClick={()=>{ if(!(parseInt(amt,10)>0)) return setErr('Please enter an amount.'); if(mode==='venmo') openVenmo(amt); setDone(true); }}>{mode==='venmo'?'Open Venmo':'Give $'+(amt||'0')}</Button>
      </>}
    </div>
  </div>;
}
const PLEDGE_PRESETS=[['0.10','10¢'],['0.25','25¢'],['1','$1'],['2','$2'],['5','$5'],['other','Other']];
const money = n => n>0&&n<1 ? Math.round(n*100)+'¢' : '$'+n.toLocaleString('en-US',{minimumFractionDigits:0,maximumFractionDigits:2});
function pledgeConfig(){
  const p=(window.PCO_DATA||{}).pledge||{}; const e=p.entries||{}; const isEntry=v=>/^entry\.\d+$/.test(v||'');
  return { ok: !!p.formId && !/[\[\]]/.test(p.formId) && isEntry(e.name) && isEntry(e.email) && isEntry(e.amount), formId:p.formId, entries:e, phoneEnabled:isEntry(e.phone), amountChoices:Array.isArray(p.amountChoices)?p.amountChoices:[] };
}
function submitPledge({name,email,phone,amount}){
  const c=pledgeConfig(); if(!c.ok) return Promise.reject(new Error('pledge form not configured'));
  // Add ?pledgedebug=1 to the site URL to submit into a visible tab and see Google's actual response page.
  const debug=/pledgedebug/.test(location.search+location.hash);
  const fields={[c.entries.name]:name,[c.entries.email]:email,fvv:'1',pageHistory:'0',fbzx:'-'+Math.floor(Math.random()*1e18)};
  if(c.phoneEnabled&&phone) fields[c.entries.phone]=phone;
  // Multiple-choice questions only accept an option's exact text; anything else has to go through the "Other" option.
  const amt='$'+Number(amount).toFixed(2);
  if(c.amountChoices.length && !c.amountChoices.includes(amt)){ fields[c.entries.amount]='__other_option__'; fields[c.entries.amount+'.other_option_response']=amt; }
  else fields[c.entries.amount]=amt;
  return new Promise(resolve=>{
    const target=debug?'_blank':'pco-pledge-sink-'+Date.now();
    // A real form submission is exactly what Google's own page sends; the response lands in a hidden frame (cross-origin, so it can't be read).
    const form=document.createElement('form'); form.method='POST'; form.action='https://docs.google.com/forms/d/e/'+c.formId+'/formResponse'; form.target=target; form.acceptCharset='UTF-8'; form.style.display='none';
    Object.entries(fields).forEach(([k,v])=>{ const i=document.createElement('input'); i.type='hidden'; i.name=k; i.value=v; form.appendChild(i); });
    let frame=null, finished=false;
    const done=()=>{ if(finished) return; finished=true; form.remove(); if(frame) setTimeout(()=>frame.remove(),1500); resolve(); };
    if(!debug){ frame=document.createElement('iframe'); frame.name=target; frame.style.display='none'; document.body.appendChild(frame); }
    document.body.appendChild(form); form.submit();
    // Listen only after submit: the frame's initial about:blank load fires synchronously on insertion and must not count.
    if(frame) frame.addEventListener('load',done);
    setTimeout(done, debug?0:4000);
  });
}
function PledgeModal({mobile, onClose}){
  const cfg=pledgeConfig(); const contact=(window.PCO_DATA||{}).email||'';
  const [amt,setAmt]=React.useState('1'); const [custom,setCustom]=React.useState(''); const [name,setName]=React.useState(''); const [email,setEmail]=React.useState(''); const [phone,setPhone]=React.useState('');
  const [status,setStatus]=React.useState('idle'); const [err,setErr]=React.useState('');
  const perMile=amt==='other' ? parseFloat(custom) : parseFloat(amt); const shown=perMile>0?perMile:0; const total=money(shown*100);
  const submit=async()=>{
    if(status==='sending') return; setErr('');
    if(!(perMile>0)) return setErr('Please enter an amount per mile.');
    if(!name.trim()) return setErr('Please add your name so I know who to thank.');
    if(!email.trim() && !(cfg.phoneEnabled && phone.trim())) return setErr(cfg.phoneEnabled ? 'Please add an email or phone number so I can follow up after the run.' : 'Please add your email so I can follow up after the run.');
    if(email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) return setErr("That email doesn't look right.");
    if(!cfg.ok) return setErr("The pledge form isn't connected yet — email "+contact+" and I'll add you by hand.");
    setStatus('sending');
    try{ await submitPledge({name:name.trim(),email:email.trim(),phone:phone.trim(),amount:perMile.toFixed(2)}); setStatus('done'); }
    catch(e){ setStatus('idle'); setErr("Something went wrong — email "+contact+" and I'll add you by hand."); }
  };
  const muted={marginTop:8,fontSize:16,lineHeight:1.55,color:'var(--color-text-muted)'};
  return <div onClick={onClose} style={{position:'fixed',inset:0,background:'rgba(17,24,39,.55)',display:'flex',alignItems:'center',justifyContent:'center',padding:16,zIndex:50}}>
    <div onClick={e=>e.stopPropagation()} style={{background:'#fff',borderRadius:6,padding:32,width:'100%',maxWidth:440,maxHeight:'100%',overflowY:'auto',boxShadow:'0 2px 6px rgba(0,0,0,.08)'}}>
      <div style={{display:'flex',justifyContent:'space-between',alignItems:'baseline'}}><h3 style={{fontSize:24,fontWeight:600}}>Join the pledge</h3><button onClick={onClose} aria-label="Close" style={{border:0,background:'none',font:'400 24px/1 var(--font-body)',color:'var(--pco-navy)',cursor:'pointer'}}>×</button></div>
      {status==='done' ? <p style={{marginTop:16,fontSize:18,lineHeight:1.55}}>You're in. {money(shown)} per mile — up to {total} if I finish all 100. I'll follow up after January 15. Thank you.</p> : <>
        <p style={muted}>Pick an amount per mile I finish inside my 24-hour goal. You only pay for the miles I actually run.</p>
        <div style={{display:'grid',gridTemplateColumns:mobile?'repeat(3,1fr)':'repeat(6,1fr)',gap:8,marginTop:20}}>{PLEDGE_PRESETS.map(([v,l])=><Button key={v} size="sm" variant={amt===v?'secondary':'outline'} onClick={()=>setAmt(v)} style={{minWidth:0,paddingLeft:0,paddingRight:0,fontFamily:'var(--font-display)',fontSize:20}}>{l}</Button>)}</div>
        {amt==='other' && <Input label="Your amount per mile" prefix="$" inputMode="decimal" value={custom} onChange={e=>setCustom(e.target.value.replace(/[^0-9.]/g,'').replace(/(\..*)\./g,'$1'))} style={{marginTop:12}} />}
        <p style={{...muted,marginTop:12}}>If I finish all 100 miles, that's <strong style={{color:'var(--pco-navy)'}}>{total}</strong>.</p>
        <Input label="Name" value={name} onChange={e=>setName(e.target.value)} style={{marginTop:16}} />
        <Input label="Email" type="email" value={email} onChange={e=>setEmail(e.target.value)} style={{marginTop:12}} />
        {cfg.phoneEnabled && <Input label="Phone" type="tel" value={phone} onChange={e=>setPhone(e.target.value)} style={{marginTop:12}} />}
        {err && <p style={{marginTop:12,fontSize:14,lineHeight:1.5,color:'#B42318'}}>{err}</p>}
        <Button variant="donate" fullWidth style={{marginTop:20}} onClick={submit}>{status==='sending'?'Sending…':'Join the pledge'}</Button>
      </>}
    </div>
  </div>;
}
function StickyDonate({onDonate}){ return <div style={{position:'fixed',left:0,right:0,bottom:0,background:'#fff',borderTop:'1px solid var(--color-border)',padding:12,display:'flex',gap:8,zIndex:10}}><Button variant="donate" fullWidth onClick={()=>onDonate('card')}>Donate</Button><Button variant="secondary" fullWidth onClick={()=>onDonate('venmo')}>Venmo</Button><Button variant="outline" fullWidth onClick={()=>onDonate('pledge')}>Pledge</Button></div>; }
Object.assign(window,{Cause,Give,Stats,Why,DonateModal,PledgeModal,StickyDonate});
