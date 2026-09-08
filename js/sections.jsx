const { Button, BigNumber, Footer, Input } = window.PissCancerOffDesignSystem_99f843;
const wrap = m => ({maxWidth:720,margin:'0 auto',padding:m?'40px 16px':'64px 32px'});
const H2 = ({m,children}) => <h2 style={{fontSize:m?28:36,lineHeight:1.15,fontWeight:600,marginBottom:20}}>{children}</h2>;
const P = ({children}) => <p style={{fontSize:18,lineHeight:1.55,maxWidth:'65ch',marginBottom:16}}>{children}</p>;
function Cause({mobile}){ return <section id="overview" style={wrap(mobile)}>
  <H2 m={mobile}>The overview</H2>
  <P>Bladder cancer is the sixth most common cancer in the US and one of the least funded. My Uncle Dave is fighting it right now, spending 5 days a week in Radiation and Chemotherapy.</P>
  <P>Every dollar I raise during this campaign goes to bladder cancer research, disabled veterans, or directly to helping support my Uncle Dave and his family.</P>
  <P>Tax-deductible donations go through [charity], a registered 501(c)(3). Or Venmo me and I'll follow up with where your money went. Either way, giving what you can means the world.</P>
</section>; }
function Run({mobile, steps, onPledge}){ return <section id="run" style={wrap(mobile)}>
  <H2 m={mobile}>The run</H2>
  <P>The Southern Tour Ultra is 100 miles on a loop course in Wilmington, NC. I start at 12pm on January 15, 2027.</P>
  <P>I would be lying if I said I wasn't a bit afraid. I've never run more than 40.</P>
  <P>So until then I'm training six days a week. With thousands of miles to run in preparation, why not be a moving billboard for what's important to me? If you see me running around in that ugly yellow shirt, that's on purpose. Please say hi.</P>
  <h3 id="pledge" style={{fontSize:mobile?22:26,lineHeight:1.2,fontWeight:600,marginTop:36,paddingTop:28,borderTop:'1px solid var(--color-border)',marginBottom:14}}>The pledge</h3>
  <P>Pledge an amount per mile, whether that's a dime, a dollar, or anything that works. You only pay for the miles I actually finish inside my 24-hour goal. Cover all 100 and a $1 pledge turns into $100 for a real cause. People counting on every single mile is exactly the pressure I need to get out the door on the days I'd rather not train. I'll follow up with everyone who pledged once the ultramarathon is done.</P>
  <Button variant="donate" fullWidth={mobile} onClick={onPledge}>Join the pledge</Button>
  <div style={{display:'grid',gridTemplateColumns:mobile?'1fr 1fr':'repeat(3,auto)',gap:mobile?24:48,marginTop:32,alignItems:'end'}}>
    <BigNumber size={mobile?'md':'lg'} value="100" caption="miles on Jan 15, 2027" />
    <BigNumber size={mobile?'md':'lg'} color="ink" value={steps} caption="steps since January 1st"  />
  </div>
  <div style={{marginTop:28}}><Photo src="assets/photos/shirt.jpg" label="Real photo: the shirt and the flag" style={{aspectRatio:'16/9'}} /></div>
</section>; }
function Why({mobile}){ return <section id="why" style={{background:'var(--pco-paper-2)'}}><div style={wrap(mobile)}>
  <H2 m={mobile}>The why</H2>
  <P>My Uncle Dave is one of the greatest men I know. He's the guy who shows up constantly for his family, for his friends, and anyone who needs a hand. Spending the last 40 years with the United States Coast Guard, there's one word to describe him, and that's selfless.</P>
  <P>Right now he's in the fight of his life against bladder cancer, spending five days a week commuting multiple hours to radiation and chemotherapy. I had the privilege to stand by his side during his first treatment, and what I saw was a man who faces a grueling challenge daily, yet with nothing but a smile on his face.</P>
  <P>It pisses me off that I can't do anything about his suffering. I can't take any treatments for my Uncle Dave. That's why I'm focusing on what I can do for him, which is putting in miles as a mobile billboard — raising money and increasing awareness to make sure people fighting battles they never signed up for get some backup. Every mile up until, and including the 100 I'll run on January 15th, is with my Uncle Dave in mind.</P>
  <div style={{marginTop:28}}><Photo src="assets/photos/mom-and-dave.jpeg" label="Real photo: my beautiful mom and my Uncle Dave" style={{aspectRatio:'4/5',maxWidth:mobile?'100%':440}} />
  <p style={{fontSize:14,lineHeight:1.5,color:'var(--color-text-muted)',marginTop:8}}>My beautiful mom and my Uncle Dave at his first chemotherapy treatment this past August.</p></div>
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
function DonateModal({mode, onClose}){
  const presets = mode==='venmo' ? ['5','10','25','100'] : ['25','50','100','250'];
  const [amt,setAmt]=React.useState(mode==='venmo' ? '25' : '50'); const [done,setDone]=React.useState(false);
  return <div onClick={onClose} style={{position:'fixed',inset:0,background:'rgba(17,24,39,.55)',display:'flex',alignItems:'center',justifyContent:'center',padding:16,zIndex:50}}>
    <div onClick={e=>e.stopPropagation()} style={{background:'#fff',borderRadius:6,padding:32,width:'100%',maxWidth:440,boxShadow:'0 2px 6px rgba(0,0,0,.08)'}}>
      <div style={{display:'flex',justifyContent:'space-between',alignItems:'baseline'}}><h3 style={{fontSize:24,fontWeight:600}}>{mode==='venmo'?'Venmo':'Donate — tax-deductible'}</h3><button onClick={onClose} aria-label="Close" style={{border:0,background:'none',font:'400 24px/1 var(--font-body)',color:'var(--pco-navy)',cursor:'pointer'}}>×</button></div>
      {done ? <p style={{marginTop:16,fontSize:18,lineHeight:1.55}}>Thank you. That's ${amt} toward the goal. I'll carry it for 100 miles.</p> : <>
        <p style={{marginTop:8,fontSize:16,lineHeight:1.55,color:'var(--color-text-muted)'}}>{mode==='venmo'?'Send to @BlakeAnderson3. Please specify where you want your money to go - bladder cancer research, disabled veterans, or supporting my Uncle Dave and his family. I will follow up with where the money went.':'Processed by [charity], a registered 501(c)(3). You get a receipt by email.'}</p>
        <div style={{display:'flex',gap:8,marginTop:20}}>{presets.map(v=><Button key={v} size="sm" variant={amt===v?'secondary':'outline'} onClick={()=>setAmt(v)} style={{flex:1,fontFamily:'var(--font-display)',fontSize:20}}>${v}</Button>)}</div>
        <Input label="Or a custom amount" prefix="$" value={amt} onChange={e=>setAmt(e.target.value.replace(/[^0-9]/g,''))} style={{marginTop:16}} />
        <Button variant="donate" fullWidth style={{marginTop:20}} onClick={()=>{ if(mode==='venmo') openVenmo(amt); setDone(true); }}>{mode==='venmo'?'Open Venmo':'Give $'+(amt||'0')}</Button>
      </>}
    </div>
  </div>;
}
const PLEDGE_PRESETS=[['0.10','10¢'],['0.25','25¢'],['1','$1'],['2','$2'],['5','$5']];
const money = n => n<1 ? Math.round(n*100)+'¢' : '$'+n.toLocaleString('en-US',{minimumFractionDigits:0,maximumFractionDigits:2});
function pledgeConfig(){
  const p=(window.PCO_DATA||{}).pledge||{}; const e=p.entries||{}; const isEntry=v=>/^entry\.\d+$/.test(v||'');
  return { ok: !!p.formId && !/[\[\]]/.test(p.formId) && isEntry(e.name) && isEntry(e.email) && isEntry(e.amount), formId:p.formId, entries:e, phoneEnabled:isEntry(e.phone) };
}
async function submitPledge({name,email,phone,amount}){
  const c=pledgeConfig(); if(!c.ok) throw new Error('pledge form not configured');
  const body=new URLSearchParams(); body.set(c.entries.name,name); body.set(c.entries.email,email); if(c.phoneEnabled&&phone) body.set(c.entries.phone,phone); body.set(c.entries.amount,amount);
  // Google Forms accepts cross-origin posts but never sends CORS headers, so the response is opaque; a completed request counts as success.
  await fetch('https://docs.google.com/forms/d/e/'+c.formId+'/formResponse',{method:'POST',mode:'no-cors',body});
}
function PledgeModal({onClose}){
  const cfg=pledgeConfig(); const contact=(window.PCO_DATA||{}).email||'';
  const [amt,setAmt]=React.useState('1'); const [name,setName]=React.useState(''); const [email,setEmail]=React.useState(''); const [phone,setPhone]=React.useState('');
  const [status,setStatus]=React.useState('idle'); const [err,setErr]=React.useState('');
  const perMile=parseFloat(amt); const total=money(perMile*100);
  const submit=async()=>{
    if(status==='sending') return; setErr('');
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
      {status==='done' ? <p style={{marginTop:16,fontSize:18,lineHeight:1.55}}>You're in. {money(perMile)} per mile — up to {total} if I finish all 100. I'll follow up after January 15. Thank you.</p> : <>
        <p style={muted}>Pick an amount per mile I finish inside my 24-hour goal. You only pay for the miles I actually run.</p>
        <div style={{display:'grid',gridTemplateColumns:'repeat(5,1fr)',gap:8,marginTop:20}}>{PLEDGE_PRESETS.map(([v,l])=><Button key={v} size="sm" variant={amt===v?'secondary':'outline'} onClick={()=>setAmt(v)} style={{minWidth:0,paddingLeft:0,paddingRight:0,fontFamily:'var(--font-display)',fontSize:20}}>{l}</Button>)}</div>
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
function StickyDonate({onDonate}){ return <div style={{position:'fixed',left:0,right:0,bottom:0,background:'#fff',borderTop:'1px solid var(--color-border)',padding:12,display:'flex',gap:8,zIndex:10}}><Button variant="donate" fullWidth onClick={()=>onDonate('card')}>Donate</Button><Button variant="secondary" fullWidth onClick={()=>onDonate('venmo')}>Venmo</Button></div>; }
Object.assign(window,{Cause,Run,Why,DonateModal,PledgeModal,StickyDonate});
