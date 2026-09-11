const { Button, ProgressBar, Nav } = window.PissCancerOffDesignSystem_99f843;
function Photo({label, src, style}){
  const [ok,setOk]=React.useState(true);
  if(src && ok) return <img src={src} alt={label} onError={()=>setOk(false)} style={{display:'block',width:'100%',objectFit:'cover',borderRadius:6,...style}} />;
  return <div aria-label={label} style={{background:'#0F1D4A',borderRadius:6,...style}} />; }
function Hero({mobile, raised, goal, onDonate}){
  return <section id="top" style={{background:'var(--pco-navy-deep)',color:'#fff'}}>
    <Nav mobile={mobile} onDark logo="assets/logo/horizontal-light.svg" links={[{label:'The overview',href:'#overview'},{label:'The why',href:'#why'},{label:'Ways to give',href:'#give'},{label:'Training stats',href:'#stats'}]} donateHref="#give" />
    <div style={{maxWidth:1100,margin:'0 auto',padding:mobile?'24px 16px 40px':'56px 32px 64px',display:'grid',gridTemplateColumns:mobile?'1fr':'1.1fr 1fr',gap:mobile?24:48,alignItems:'center'}}>
      <Photo src="assets/photos/hero.jpg" label="Real photo: Blake mid-run, yellow shirt, flag" style={{aspectRatio:mobile?'4/3':'4/5',order:mobile?0:1}} />
      <div>
        <h1 style={{color:'#fff',fontSize:mobile?40:64,lineHeight:1.05,fontWeight:700}}>I'm running 100 miles to piss cancer off.</h1>
        <ProgressBar raised={raised} goal={goal} label="raised/pledged" onDark style={{marginTop:28}} />
        {!mobile && <div id="donate" style={{display:'flex',flexWrap:'wrap',gap:12,marginTop:24}}>
          <Button variant="donate" onClick={()=>onDonate('card')}>Donate (tax-deductible)</Button>
          <Button variant="onDark" onClick={()=>onDonate('venmo')}>Venmo (quick and easy)</Button>
          <Button variant="onDark" onClick={()=>onDonate('pledge')}>Join the pledge</Button>
        </div>}
      </div>
    </div>
  </section>;
}
Object.assign(window,{Hero,Photo});
