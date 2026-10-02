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
// Phone menu: a three-line button at the top right of the hero that opens a full-screen navy menu.
const MENU_LINKS=[{label:'The overview',href:'#overview'},{label:'The why',href:'#why'},{label:'Ways to give',href:'#give'},{label:'My training stats',href:'#stats'},{label:'Follow along',href:'#stats'}];
const iconBtn={position:'absolute',top:10,right:6,width:44,height:44,display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center',gap:6,background:'transparent',border:0,padding:0,cursor:'pointer',zIndex:3};
const bar3={display:'block',width:26,height:3,borderRadius:2,background:'#fff',boxShadow:'0 1px 2px rgba(0,0,0,.35)'};
function MobileMenu(){
  const [open,setOpen]=React.useState(false);
  React.useEffect(()=>{ if(!open) return;
    const prev=document.body.style.overflow; document.body.style.overflow='hidden';
    const onKey=e=>{ if(e.key==='Escape') setOpen(false); }; window.addEventListener('keydown',onKey);
    return ()=>{ document.body.style.overflow=prev; window.removeEventListener('keydown',onKey); }; },[open]);
  return <>
    <button type="button" aria-label="Open menu" aria-expanded={open} aria-controls="site-menu" onClick={()=>setOpen(true)} style={iconBtn}>
      <span style={bar3}/><span style={bar3}/><span style={bar3}/>
    </button>
    {/* Portalled to <body>: the hero photo box is its own stacking context, which would otherwise keep the menu under the sticky bar. */}
    {open && ReactDOM.createPortal(<div id="site-menu" role="dialog" aria-modal="true" aria-label="Menu" style={{position:'fixed',inset:0,zIndex:60,background:'var(--pco-navy-deep)',color:'#fff',display:'flex',flexDirection:'column'}}>
      <div style={{position:'relative',height:NAV_H_MOBILE,display:'flex',alignItems:'center',padding:'0 16px'}}>
        <a href="#top" onClick={()=>setOpen(false)} style={{display:'flex'}}><img src="assets/logo/horizontal-dark.svg" alt="Piss Cancer Off" style={{height:28,display:'block'}}/></a>
        <button type="button" aria-label="Close menu" onClick={()=>setOpen(false)} autoFocus style={iconBtn}>
          <span style={{...bar3,position:'absolute',transform:'rotate(45deg)'}}/><span style={{...bar3,position:'absolute',transform:'rotate(-45deg)'}}/>
        </button>
      </div>
      <nav aria-label="Sections" style={{display:'flex',flexDirection:'column',padding:'24px 16px'}}>
        {MENU_LINKS.map(l=><a key={l.href} href={l.href} onClick={()=>setOpen(false)} style={{fontFamily:'var(--font-display)',fontWeight:700,fontSize:34,lineHeight:1.15,color:'#fff',textDecoration:'none',padding:'16px 0',borderBottom:'1px solid rgba(255,255,255,.14)'}}>{l.label}</a>)}
      </nav>
    </div>, document.body)}
  </>;
}
const STICKY_BAR_H=73; // mobile "Ways to give" bar in sections.jsx: 12px padding + 48px button + 12px padding + 1px border
const NAV_H_MOBILE=64;
function Hero({mobile, raised, goal, givingUrl, onDonate}){
  const nav=<Nav mobile={mobile} onDark logo="assets/logo/horizontal-light.svg" links={[{label:'The overview',href:'#overview'},{label:'The why',href:'#why'},{label:'Ways to give',href:'#give'},{label:'Training stats',href:'#stats'}]} donateHref={mobile?null:'#give'} style={{background:'transparent',position:'relative',zIndex:2}} />;
  const headline=<h1 style={{color:'#fff',fontSize:mobile?'clamp(32px, 9.2vw, 40px)':'clamp(40px, 6.2vw, 64px)',lineHeight:1.05,fontWeight:700,textShadow}}>I'm running 100 miles to piss cancer off.</h1>;
  const bar=<ProgressBar raised={raised} goal={goal} label="raised/pledged" onDark style={{marginTop:mobile?20:28,textShadow}} />;
  if(mobile) return <section id="top" style={{background:'var(--pco-navy-deep)',color:'#fff'}}>
    {/* The photo fills the first screen above the sticky "Ways to give" bar and runs up behind the transparent nav,
        fading into navy at the very top. Browsers without svh ignore the height and fall back to minHeight. */}
    <div style={{position:'relative',isolation:'isolate',width:'100%',minHeight:480+NAV_H_MOBILE,height:'calc(100svh - '+STICKY_BAR_H+'px)',display:'flex',flexDirection:'column',justifyContent:'space-between'}}>
      <HeroPhoto position="50% 50%" scrim={'linear-gradient(to bottom, rgba('+NAVY+',1) 0px, rgba('+NAVY+',.6) 48px, rgba('+NAVY+',0) 170px, rgba('+NAVY+',0) 40%, rgba('+NAVY+',.55) 65%, rgba('+NAVY+',.94) 100%)'} />
      {nav}
      <MobileMenu />
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
