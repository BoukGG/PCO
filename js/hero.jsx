const { Button, ProgressBar, Nav } = window.PissCancerOffDesignSystem_99f843;
function Photo({label, src, fit='cover', style, ...rest}){
  const [ok,setOk]=React.useState(true);
  if(src && ok) return <img src={src} alt={label} onError={()=>setOk(false)} {...rest} style={{display:'block',width:'100%',objectFit:fit,borderRadius:6,...style}} />;
  return <div aria-label={label} style={{background:'#0F1D4A',borderRadius:6,...style}} />; }
const NAVY='20,38,95'; // --pco-navy-deep, used for the scrim over the hero photo
const fill={position:'absolute',top:0,right:0,bottom:0,left:0};
const textShadow='0 1px 3px rgba(0,0,0,.45)';
// The hero photo plus a navy gradient ("scrim") that keeps white text readable over it. Both layers fill their parent,
// which must be position:relative. Contrast floor: the ProgressBar's small labels need at least ~.9 navy behind them.
function HeroPhoto({position, scrim}){
  return <>
    <Photo src="assets/photos/hero.jpg" label="Blake in the yellow Piss Cancer Off shirt beside a wooden troll sculpture" fetchpriority="high" decoding="async" style={{...fill,height:'100%',objectPosition:position,borderRadius:0,zIndex:0}} />
    <div aria-hidden="true" style={{...fill,zIndex:1,pointerEvents:'none',background:scrim}} />
  </>;
}
const STICKY_BAR_H=73; // mobile "Ways to give" bar in sections.jsx: 12px padding + 48px button + 12px padding + 1px border
const NAV_H_MOBILE=64;
function Hero({mobile, raised, goal, givingUrl, onDonate}){
  const nav=<Nav mobile={mobile} onDark logo="assets/logo/horizontal-light.svg" links={[{label:'The overview',href:'#overview'},{label:'The why',href:'#why'},{label:'Ways to give',href:'#give'},{label:'Training stats',href:'#stats'}]} donateHref={mobile?null:'#give'} style={mobile?undefined:{background:'transparent',position:'relative',zIndex:2}} />;
  const headline=<h1 style={{color:'#fff',fontSize:mobile?'clamp(32px, 9.2vw, 40px)':'clamp(40px, 6.2vw, 64px)',lineHeight:1.05,fontWeight:700,textShadow}}>I'm running 100 miles to piss cancer off.</h1>;
  const bar=<ProgressBar raised={raised} goal={goal} label="raised/pledged" onDark style={{marginTop:mobile?20:28,textShadow}} />;
  if(mobile) return <section id="top" style={{background:'var(--pco-navy-deep)',color:'#fff'}}>
    {nav}
    {/* Fills the first screen between the nav and the sticky "Ways to give" bar. Browsers without svh ignore the height and fall back to minHeight. */}
    <div style={{position:'relative',isolation:'isolate',width:'100%',minHeight:480,height:'calc(100svh - '+(NAV_H_MOBILE+STICKY_BAR_H)+'px)',display:'flex',flexDirection:'column',justifyContent:'flex-end'}}>
      <HeroPhoto position="50% 50%" scrim={'linear-gradient(to bottom, rgba('+NAVY+',0) 40%, rgba('+NAVY+',.55) 65%, rgba('+NAVY+',.94) 100%)'} />
      <div style={{position:'relative',zIndex:2,padding:'0 16px 20px'}}>{headline}{bar}</div>
    </div>
  </section>;
  return <section id="top" style={{position:'relative',isolation:'isolate',background:'var(--pco-navy-deep)',color:'#fff',minHeight:'clamp(600px, 88vh, 900px)',display:'flex',flexDirection:'column'}}>
    <HeroPhoto position="50% 40%" scrim={'linear-gradient(to bottom, rgba('+NAVY+',.82) 0px, rgba('+NAVY+',.15) 160px, rgba('+NAVY+',.15) 50%, rgba('+NAVY+',.92) 100%)'} />
    {nav}
    <div style={{position:'relative',zIndex:2,flex:1,display:'flex',alignItems:'flex-end',width:'100%',maxWidth:1100,margin:'0 auto',padding:'24px 32px 56px',boxSizing:'border-box'}}>
      {/* Copy stays in the left ~60% so the shirt on the right of the photo is never covered, even on tablets. */}
      <div style={{maxWidth:'min(600px, 60%)'}}>
        {headline}
        {bar}
        <div id="donate" style={{display:'flex',flexWrap:'wrap',gap:12,marginTop:24}}>
          <Button variant="donate" href={givingUrl} target="_blank" rel="noopener">Donate (tax-deductible)</Button>
          <Button variant="onDark" onClick={()=>onDonate('venmo')}>Venmo (quick and easy)</Button>
          <Button variant="onDark" onClick={()=>onDonate('pledge')}>Join the pledge</Button>
        </div>
      </div>
    </div>
  </section>;
}
Object.assign(window,{Hero,Photo});
