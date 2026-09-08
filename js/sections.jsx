const { Button, BigNumber, Footer, Input } = window.PissCancerOffDesignSystem_99f843;
const wrap = m => ({maxWidth:720,margin:'0 auto',padding:m?'40px 16px':'64px 32px'});
const H2 = ({m,children}) => <h2 style={{fontSize:m?28:36,lineHeight:1.15,fontWeight:600,marginBottom:20}}>{children}</h2>;
const P = ({children}) => <p style={{fontSize:18,lineHeight:1.55,maxWidth:'65ch',marginBottom:16}}>{children}</p>;
function Cause({mobile}){ return <section id="cause" style={wrap(mobile)}>
  <H2 m={mobile}>The cause</H2>
  <P>Bladder cancer is the sixth most common cancer in the US and one of the least funded. My Uncle Dave is fighting it right now, spending 5 days a week in Radiation and Chemotherapy.</P>
  <P>It pisses me off that I can't do much about that. That's why I'm focusing what I can do, I can run, I can raise awareness, and I can ask for support.</P>
  <P>Every dollar I raise during this campaign goes to bladder cancer research, disabled veterans, or directly to helping support my Uncle Dave and his family.</P>
  <P>Tax-deductible donations go through [charity], a registered 501(c)(3). Or Venmo me and I'll follow up with where your money went. Either way, giving what you can means the world.</P>
</section>; }
function Run({mobile, steps}){ return <section id="run" style={{background:'var(--pco-paper-2)'}}><div style={wrap(mobile)}>
  <H2 m={mobile}>The run</H2>
  <P>The Southern Tour Ultra is 100 miles on a loop course in Wilmington, NC. I start at 12pm on January 15, 2027. I've never run more than 40.</P>
  <P>Until then I'm training six days a week. If you see me running around in that ugly yellow shirt, that's on purpose. Say hi.</P>
  <div style={{display:'grid',gridTemplateColumns:mobile?'1fr 1fr':'repeat(3,auto)',gap:mobile?24:48,marginTop:32,alignItems:'end'}}>
    <BigNumber size={mobile?'md':'lg'} value="100" caption="miles on Jan 15, 2027" />
    <BigNumber size={mobile?'md':'lg'} color="ink" value={steps} caption="steps since January 1st"  />
  </div>
  <div style={{marginTop:28}}><Photo src="assets/photos/shirt.jpg" label="Real photo: the shirt and the flag" style={{aspectRatio:'16/9'}} /></div>
</div></section>; }
function Why({mobile}){ return <section id="why" style={wrap(mobile)}>
  <H2 m={mobile}>The why</H2>
  <P>My Uncle Dave is one of the best men I know. He's the guy who shows up — for his family, for his friends, for anyone who needs a hand — and he's spent his whole life doing exactly that without asking for anything back.</P>
  <P>Right now he's in the fight of his life against bladder cancer, spending five days a week in radiation and chemotherapy. He shows up to every session with a smile on his face, and my mom and the rest of the family are right there beside him.</P>
  <P>That's why I'm running. I can't take the treatments for him, but I can put in the miles, raise money, and make sure the people fighting this disease — and the families standing next to them — get some backup. Every mile of this run is for him.</P>
  <div style={{marginTop:28}}><Photo src="assets/photos/mom-and-dave.jpeg" label="Real photo: my beautiful mom and my Uncle Dave" style={{aspectRatio:'4/5',maxWidth:mobile?'100%':440}} />
  <p style={{fontSize:14,lineHeight:1.5,color:'var(--color-text-muted)',marginTop:8}}>My beautiful mom and my Uncle Dave.</p></div>
</section>; }
function DonateModal({mode, onClose}){
  const [amt,setAmt]=React.useState('50'); const [done,setDone]=React.useState(false);
  return <div onClick={onClose} style={{position:'fixed',inset:0,background:'rgba(17,24,39,.55)',display:'flex',alignItems:'center',justifyContent:'center',padding:16,zIndex:50}}>
    <div onClick={e=>e.stopPropagation()} style={{background:'#fff',borderRadius:6,padding:32,width:'100%',maxWidth:440,boxShadow:'0 2px 6px rgba(0,0,0,.08)'}}>
      <div style={{display:'flex',justifyContent:'space-between',alignItems:'baseline'}}><h3 style={{fontSize:24,fontWeight:600}}>{mode==='venmo'?'Venmo':'Donate — tax-deductible'}</h3><button onClick={onClose} aria-label="Close" style={{border:0,background:'none',font:'400 24px/1 var(--font-body)',color:'var(--pco-navy)',cursor:'pointer'}}>×</button></div>
      {done ? <p style={{marginTop:16,fontSize:18,lineHeight:1.55}}>Thank you. That's ${amt} toward the goal. I'll carry it for 100 miles.</p> : <>
        <p style={{marginTop:8,fontSize:16,lineHeight:1.55,color:'var(--color-text-muted)'}}>{mode==='venmo'?'Send to @BlakeAnderson3. Please specify where you want your money to go - bladder cancer research, disabled veterans, or supporting my Uncle Dave and his family. I will follow up with where the money went.':'Processed by [charity], a registered 501(c)(3). You get a receipt by email.'}</p>
        <div style={{display:'flex',gap:8,marginTop:20}}>{['25','50','100','250'].map(v=><Button key={v} size="sm" variant={amt===v?'secondary':'outline'} onClick={()=>setAmt(v)} style={{flex:1,fontFamily:'var(--font-display)',fontSize:20}}>${v}</Button>)}</div>
        <Input label="Or a custom amount" prefix="$" value={amt} onChange={e=>setAmt(e.target.value.replace(/[^0-9]/g,''))} style={{marginTop:16}} />
        <Button variant="donate" fullWidth style={{marginTop:20}} onClick={()=>{ if(mode==='venmo'){ window.open('https://venmo.com/BlakeAnderson3?txn=pay&amount='+(amt||'0')+'&note='+encodeURIComponent("Please specify where you'd like your money to go - bladder cancer research, disabled veterans, or helping support my Uncle Dave and his family."),'_blank','noopener'); } setDone(true); }}>{mode==='venmo'?'Open Venmo':'Give $'+(amt||'0')}</Button>
      </>}
    </div>
  </div>;
}
function StickyDonate({onDonate}){ return <div style={{position:'fixed',left:0,right:0,bottom:0,background:'#fff',borderTop:'1px solid var(--color-border)',padding:12,display:'flex',gap:8,zIndex:10}}><Button variant="donate" fullWidth onClick={()=>onDonate('card')}>Donate</Button><Button variant="secondary" fullWidth onClick={()=>onDonate('venmo')}>Venmo</Button></div>; }
Object.assign(window,{Cause,Run,Why,DonateModal,StickyDonate});
