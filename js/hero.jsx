const { Button, ProgressBar, Nav } = window.PissCancerOffDesignSystem_99f843;
function Photo({label, src, style}){
  const [ok,setOk]=React.useState(true);
  if(src && ok) return <img src={src} alt={label} onError={()=>setOk(false)} style={{display:'block',width:'100%',objectFit:'cover',borderRadius:6,...style}} />;
  return <div style={{background:'#0F1D4A',color:'rgba(255,255,255,.55)',display:'flex',alignItems:'center',justifyContent:'center',font:'400 14px/1.4 var(--font-body)',textAlign:'center',padding:16,borderRadius:6,...style}}>{label}</div>; }
function Hero({mobile, raised, goal, onDonate}){
  return <section id="top" style={{background:'var(--pco-navy-deep)',color:'#fff'}}>
    <Nav mobile={mobile} onDark logo="assets/logo/horizontal-light.svg" links={[{label:'The cause',href:'#cause'},{label:'The run',href:'#run'},{label:'Updates',href:'#updates'}]} donateHref="#donate" />
    <div style={{maxWidth:1100,margin:'0 auto',padding:mobile?'24px 16px 40px':'56px 32px 64px',display:'grid',gridTemplateColumns:mobile?'1fr':'1.1fr 1fr',gap:mobile?24:48,alignItems:'center'}}>
      <Photo src="assets/photos/hero.jpg" label="Real photo: Blake mid-run, yellow shirt, flag" style={{aspectRatio:mobile?'4/3':'4/5',order:mobile?0:1}} />
      <div>
        <h1 style={{color:'#fff',fontSize:mobile?40:64,lineHeight:1.05,fontWeight:700}}>I'm running 100 miles to piss cancer off.</h1>
        <p style={{fontSize:mobile?17:18,lineHeight:1.55,color:'rgba(255,255,255,.85)',marginTop:16,maxWidth:'60ch'}}>January 15, 2027, in Wilmington, NC. Every dollar of this campaign goes to bladder cancer research, disabled veterans, or simply helping support my Uncle Dave.</p>
        <ProgressBar raised={raised} goal={goal} onDark style={{marginTop:28}} />
        <div id="donate" style={{display:'flex',flexDirection:mobile?'column':'row',gap:12,marginTop:24}}>
          <Button variant="donate" fullWidth={mobile} onClick={()=>onDonate('card')}>Donate - tax-deductible recipt</Button>
          <Button variant="onDark" fullWidth={mobile} onClick={()=>onDonate('venmo')}>Venmo - quick and easy</Button>
        </div>
      </div>
    </div>
  </section>;
}
Object.assign(window,{Hero,Photo});
