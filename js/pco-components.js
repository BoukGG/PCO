/* @ds-bundle: {"format":4,"namespace":"PissCancerOffDesignSystem_99f843","components":[{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"BigNumber","sourcePath":"components/core/BigNumber.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Footer","sourcePath":"components/core/Footer.jsx"},{"name":"Input","sourcePath":"components/core/Input.jsx"},{"name":"Nav","sourcePath":"components/core/Nav.jsx"},{"name":"ProgressBar","sourcePath":"components/core/ProgressBar.jsx"},{"name":"UpdateItem","sourcePath":"components/core/UpdateItem.jsx"}],"sourceHashes":{"components/core/Badge.jsx":"a716c22b1d5f","components/core/BigNumber.jsx":"c411c095e280","components/core/Button.jsx":"d1c84cdfc686","components/core/Footer.jsx":"c26fc992ad05","components/core/Input.jsx":"ac5bbe2d3b81","components/core/Nav.jsx":"50f2373a5ecf","components/core/ProgressBar.jsx":"af76f448b97f","components/core/UpdateItem.jsx":"2049a3263848","ui_kits/website/Hero.jsx":"8de46dc38d80","ui_kits/website/Sections.jsx":"cc338846e56b"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.PissCancerOffDesignSystem_99f843 = window.PissCancerOffDesignSystem_99f843 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Badge.jsx
try { (() => {
function Badge({
  children,
  tone = 'purple',
  style
}) {
  const t = {
    purple: {
      bg: 'var(--pco-purple)',
      fg: '#fff'
    },
    navy: {
      bg: 'var(--pco-navy)',
      fg: '#fff'
    },
    neutral: {
      bg: 'var(--pco-paper-2)',
      fg: 'var(--pco-ink)'
    }
  }[tone];
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-block',
      padding: '4px 10px',
      borderRadius: 'var(--radius)',
      background: t.bg,
      color: t.fg,
      fontFamily: 'var(--font-body)',
      fontWeight: 500,
      fontSize: 14,
      lineHeight: 1.3,
      ...style
    }
  }, children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/BigNumber.jsx
try { (() => {
function BigNumber({
  value,
  caption,
  source,
  size = 'lg',
  color = 'navy',
  style
}) {
  const c = {
    navy: 'var(--pco-navy)',
    ink: 'var(--pco-ink)',
    white: 'var(--pco-paper)',
    marigold: 'var(--pco-marigold)'
  }[color];
  const fs = size === 'lg' ? 96 : size === 'md' ? 56 : 36;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-body)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: fs,
      lineHeight: 1,
      color: c,
      letterSpacing: 0
    }
  }, value), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      lineHeight: 1.45,
      color: color === 'white' || color === 'marigold' ? 'rgba(255,255,255,.75)' : 'var(--color-text-muted)',
      marginTop: 8
    }
  }, caption, source ? ' · ' + source : ''));
}
Object.assign(__ds_scope, { BigNumber });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/BigNumber.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Button({
  variant = 'donate',
  size = 'md',
  href,
  disabled,
  fullWidth,
  children,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const v = {
    donate: {
      bg: 'var(--btn-donate-bg)',
      hover: 'var(--btn-donate-hover)',
      fg: 'var(--btn-donate-text)',
      border: 'transparent'
    },
    secondary: {
      bg: 'var(--btn-secondary-bg)',
      hover: 'var(--btn-secondary-hover)',
      fg: 'var(--btn-secondary-text)',
      border: 'transparent'
    },
    outline: {
      bg: 'transparent',
      hover: 'var(--pco-paper-2)',
      fg: 'var(--pco-navy)',
      border: 'var(--pco-navy)'
    },
    ghost: {
      bg: 'transparent',
      hover: 'var(--pco-paper-2)',
      fg: 'var(--pco-navy)',
      border: 'transparent'
    },
    onDark: {
      bg: 'var(--pco-paper)',
      hover: 'var(--pco-paper-2)',
      fg: 'var(--pco-navy)',
      border: 'transparent'
    }
  }[variant];
  const h = size === 'sm' ? 40 : size === 'lg' ? 56 : 48;
  const s = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    height: h,
    padding: '0 ' + (size === 'sm' ? 16 : 24) + 'px',
    borderRadius: 'var(--radius)',
    fontFamily: 'var(--font-body)',
    fontWeight: 600,
    fontSize: size === 'sm' ? 15 : 17,
    lineHeight: 1,
    letterSpacing: 0,
    color: v.fg,
    background: hover && !disabled ? v.hover : v.bg,
    border: '1.5px solid ' + v.border,
    cursor: disabled ? 'not-allowed' : 'pointer',
    opacity: disabled ? 0.5 : 1,
    textDecoration: 'none',
    transition: 'background var(--dur) var(--ease)',
    width: fullWidth ? '100%' : undefined,
    boxSizing: 'border-box',
    whiteSpace: 'nowrap',
    ...style
  };
  const props = {
    style: s,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    ...rest
  };
  return href && !disabled ? /*#__PURE__*/React.createElement("a", _extends({
    href: href
  }, props), children) : /*#__PURE__*/React.createElement("button", _extends({
    disabled: disabled
  }, props), children);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Footer.jsx
try { (() => {
function Footer({
  logo = '../../assets/logo/pisscanceroff-horizontal-dark.svg',
  charityLine = 'Tax-deductible donations are processed by [charity], a registered 501(c)(3), EIN [EIN].',
  venmo = '@[Venmo handle]',
  email = '[contact email]',
  donateHref = '#donate',
  venmoHref = '#venmo',
  compact = false,
  style
}) {
  const muted = {
    fontSize: 14,
    lineHeight: 1.5,
    color: 'rgba(255,255,255,.75)'
  };
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      background: 'var(--pco-navy-deep)',
      color: '#fff',
      padding: compact ? '32px 16px' : '64px 32px',
      fontFamily: 'var(--font-body)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1100,
      margin: '0 auto',
      display: 'grid',
      gridTemplateColumns: compact ? '1fr' : '1fr auto',
      gap: 32,
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("img", {
    src: logo,
    alt: "Piss Cancer Off",
    style: {
      height: 36,
      display: 'block',
      marginBottom: 20
    }
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      ...muted,
      maxWidth: '60ch',
      margin: 0
    }
  }, charityLine), /*#__PURE__*/React.createElement("p", {
    style: {
      ...muted,
      margin: '10px 0 0'
    }
  }, "Venmo ", venmo, " \xB7 ", /*#__PURE__*/React.createElement("a", {
    href: 'mailto:' + email,
    style: {
      color: '#fff'
    }
  }, email)), /*#__PURE__*/React.createElement("p", {
    style: {
      ...muted,
      margin: '10px 0 0'
    }
  }, "Colors from the bladder cancer awareness ribbon.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 12,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Button, {
    variant: "donate",
    href: donateHref
  }, "Donate \u2014 tax-deductible"), /*#__PURE__*/React.createElement(__ds_scope.Button, {
    variant: "onDark",
    href: venmoHref
  }, "Venmo \u2014 no paperwork"))));
}
Object.assign(__ds_scope, { Footer });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Footer.jsx", error: String((e && e.message) || e) }); }

// components/core/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Input({
  label,
  hint,
  prefix,
  type = 'text',
  error,
  style,
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'block',
      fontFamily: 'var(--font-body)',
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      fontWeight: 500,
      fontSize: 15,
      color: 'var(--color-text)',
      marginBottom: 6
    }
  }, label), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      alignItems: 'center',
      height: 48,
      borderRadius: 'var(--radius)',
      border: '1.5px solid ' + (error ? '#B42318' : focus ? 'var(--pco-navy)' : 'var(--color-border)'),
      background: '#fff',
      boxShadow: focus ? '0 0 0 2px #fff, 0 0 0 4px var(--pco-navy)' : 'none',
      boxSizing: 'border-box',
      overflow: 'hidden'
    }
  }, prefix && /*#__PURE__*/React.createElement("span", {
    style: {
      padding: '0 0 0 14px',
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: 20,
      color: 'var(--color-text-muted)'
    }
  }, prefix), /*#__PURE__*/React.createElement("input", _extends({
    type: type,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      flex: 1,
      height: '100%',
      border: 0,
      outline: 0,
      padding: '0 14px',
      fontFamily: prefix ? 'var(--font-display)' : 'var(--font-body)',
      fontWeight: prefix ? 600 : 400,
      fontSize: prefix ? 22 : 17,
      color: 'var(--color-text)',
      background: 'transparent',
      minWidth: 0
    }
  }, rest))), (hint || error) && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      fontSize: 14,
      color: error ? '#B42318' : 'var(--color-text-muted)',
      marginTop: 6
    }
  }, error || hint));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Input.jsx", error: String((e && e.message) || e) }); }

// components/core/Nav.jsx
try { (() => {
function Nav({
  links = [],
  donateHref = '#donate',
  donateLabel = 'Donate',
  logo = '../../assets/logo/pisscanceroff-horizontal-light.svg',
  onDark = false,
  mobile = false,
  style
}) {
  return /*#__PURE__*/React.createElement("nav", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 24,
      height: mobile ? 64 : 76,
      padding: mobile ? '0 16px' : '0 32px',
      background: onDark ? 'var(--pco-navy-deep)' : 'var(--pco-paper)',
      borderBottom: onDark ? 'none' : '1px solid var(--color-border)',
      fontFamily: 'var(--font-body)',
      boxSizing: 'border-box',
      ...style
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#top",
    style: {
      display: 'flex',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: onDark ? logo.replace('-light', '-dark') : logo,
    alt: "Piss Cancer Off",
    style: {
      height: mobile ? 28 : 34,
      display: 'block'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 28
    }
  }, !mobile && links.map(l => /*#__PURE__*/React.createElement("a", {
    key: l.href,
    href: l.href,
    style: {
      fontSize: 17,
      fontWeight: 500,
      color: onDark ? '#fff' : 'var(--pco-navy)',
      textDecoration: 'none'
    }
  }, l.label)), /*#__PURE__*/React.createElement(__ds_scope.Button, {
    variant: "donate",
    size: mobile ? 'sm' : 'md',
    href: donateHref
  }, donateLabel)));
}
Object.assign(__ds_scope, { Nav });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Nav.jsx", error: String((e && e.message) || e) }); }

// components/core/ProgressBar.jsx
try { (() => {
const money = n => '$' + Math.round(n).toLocaleString('en-US');
function ProgressBar({
  raised = 0,
  goal = 10000,
  showPercent = false,
  label = 'raised',
  onDark = false,
  style
}) {
  const pct = Math.max(0, Math.min(100, raised / goal * 100));
  const [w, setW] = React.useState(0);
  React.useEffect(() => {
    const t = requestAnimationFrame(() => setW(pct));
    return () => cancelAnimationFrame(t);
  }, [pct]);
  const fg = onDark ? 'var(--pco-paper)' : 'var(--pco-navy)';
  const muted = onDark ? 'rgba(255,255,255,.75)' : 'var(--color-text-muted)';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-body)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'baseline',
      marginBottom: 8
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 36,
      lineHeight: 1,
      color: fg
    }
  }, money(raised), " ", /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontWeight: 400,
      fontSize: 16,
      color: muted
    }
  }, label, showPercent ? ' · ' + Math.round(pct) + '%' : '')), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 16,
      color: muted
    }
  }, "of ", /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: 20,
      color: fg
    }
  }, money(goal)))), /*#__PURE__*/React.createElement("div", {
    role: "progressbar",
    "aria-valuenow": Math.round(raised),
    "aria-valuemin": 0,
    "aria-valuemax": goal,
    style: {
      height: 'var(--progress-height)',
      borderRadius: 'var(--radius-bar)',
      background: onDark ? 'rgba(255,255,255,.18)' : 'var(--color-track)',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      height: '100%',
      width: w + '%',
      background: 'var(--color-accent)',
      borderRadius: 'var(--radius-bar)',
      transition: 'width 700ms var(--ease)'
    }
  })));
}
Object.assign(__ds_scope, { ProgressBar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/ProgressBar.jsx", error: String((e && e.message) || e) }); }

// components/core/UpdateItem.jsx
try { (() => {
function UpdateItem({
  date,
  title,
  distance,
  duration,
  note,
  photo,
  last
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: photo ? '120px 1fr auto' : '1fr auto',
      gap: 20,
      alignItems: 'start',
      padding: '20px 0',
      borderBottom: last ? 'none' : '1px solid var(--color-border)',
      fontFamily: 'var(--font-body)'
    }
  }, photo && /*#__PURE__*/React.createElement("img", {
    src: photo,
    alt: "",
    style: {
      width: 120,
      height: 84,
      objectFit: 'cover',
      borderRadius: 'var(--radius)',
      display: 'block'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      color: 'var(--color-text-muted)',
      lineHeight: 1.45
    }
  }, date), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: 24,
      lineHeight: 1.25,
      color: 'var(--pco-navy)',
      marginTop: 2
    }
  }, title), note && /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '6px 0 0',
      fontSize: 16,
      lineHeight: 1.55,
      color: 'var(--color-text)',
      maxWidth: '60ch'
    }
  }, note)), /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'right',
      whiteSpace: 'nowrap'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 28,
      lineHeight: 1,
      color: 'var(--pco-ink)'
    }
  }, distance), duration && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      color: 'var(--color-text-muted)',
      marginTop: 4
    }
  }, duration)));
}
Object.assign(__ds_scope, { UpdateItem });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/UpdateItem.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Hero.jsx
try { (() => {
const {
  Button,
  ProgressBar,
  Nav
} = window.PissCancerOffDesignSystem_99f843;
function Photo({
  label,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: '#0F1D4A',
      color: 'rgba(255,255,255,.55)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      font: '400 14px/1.4 var(--font-body)',
      textAlign: 'center',
      padding: 16,
      borderRadius: 6,
      ...style
    }
  }, label);
}
function Hero({
  mobile,
  raised,
  goal,
  onDonate
}) {
  return /*#__PURE__*/React.createElement("section", {
    id: "top",
    style: {
      background: 'var(--pco-navy-deep)',
      color: '#fff'
    }
  }, /*#__PURE__*/React.createElement(Nav, {
    mobile: mobile,
    onDark: true,
    logo: "../../assets/logo/pisscanceroff-horizontal-light.svg",
    links: [{
      label: 'The cause',
      href: '#cause'
    }, {
      label: 'The run',
      href: '#run'
    }, {
      label: 'Updates',
      href: '#updates'
    }],
    donateHref: "#donate"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1100,
      margin: '0 auto',
      padding: mobile ? '24px 16px 40px' : '56px 32px 64px',
      display: 'grid',
      gridTemplateColumns: mobile ? '1fr' : '1.1fr 1fr',
      gap: mobile ? 24 : 48,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(Photo, {
    label: "Real photo: Blake mid-run, yellow shirt, flag",
    style: {
      aspectRatio: mobile ? '4/3' : '4/5',
      order: mobile ? 0 : 1
    }
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", {
    style: {
      color: '#fff',
      fontSize: mobile ? 40 : 64,
      lineHeight: 1.05,
      fontWeight: 700
    }
  }, "I'm running 100 miles to piss cancer off."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: mobile ? 17 : 18,
      lineHeight: 1.55,
      color: 'rgba(255,255,255,.85)',
      marginTop: 16,
      maxWidth: '60ch'
    }
  }, "January 15, 2027, Wilmington, NC. Every dollar of this campaign goes to bladder cancer research, disabled veterans, or simply helping support my Uncle Dave."), /*#__PURE__*/React.createElement(ProgressBar, {
    raised: raised,
    goal: goal,
    onDark: true,
    style: {
      marginTop: 28
    }
  }), /*#__PURE__*/React.createElement("div", {
    id: "donate",
    style: {
      display: 'flex',
      flexDirection: mobile ? 'column' : 'row',
      gap: 12,
      marginTop: 24
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "donate",
    fullWidth: mobile,
    onClick: () => onDonate('card')
  }, "Donate \u2014 tax-deductible"), /*#__PURE__*/React.createElement(Button, {
    variant: "onDark",
    fullWidth: mobile,
    onClick: () => onDonate('venmo')
  }, "Venmo \u2014 no paperwork")))));
}
Object.assign(window, {
  Hero,
  Photo
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Hero.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Sections.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  Button,
  BigNumber,
  UpdateItem,
  Badge,
  Footer,
  Input
} = window.PissCancerOffDesignSystem_99f843;
const wrap = m => ({
  maxWidth: 720,
  margin: '0 auto',
  padding: m ? '40px 16px' : '64px 32px'
});
const H2 = ({
  m,
  children
}) => /*#__PURE__*/React.createElement("h2", {
  style: {
    fontSize: m ? 28 : 36,
    lineHeight: 1.15,
    fontWeight: 600,
    marginBottom: 20
  }
}, children);
const P = ({
  children
}) => /*#__PURE__*/React.createElement("p", {
  style: {
    fontSize: 18,
    lineHeight: 1.55,
    maxWidth: '65ch',
    marginBottom: 16
  }
}, children);
function Cause({
  mobile
}) {
  return /*#__PURE__*/React.createElement("section", {
    id: "cause",
    style: wrap(mobile)
  }, /*#__PURE__*/React.createElement(H2, {
    m: mobile
  }, "The cause"), /*#__PURE__*/React.createElement(P, null, "Bladder cancer is the sixth most common cancer in the US and one of the least funded. My Uncle Dave is fighting it right now. I can't do much about that from the road, but I can run, and I can ask."), /*#__PURE__*/React.createElement(P, null, "Every dollar goes to bladder cancer research, disabled veterans, or directly to helping support Dave. Nothing covers my race entry, shoes, or travel. That's on me."), /*#__PURE__*/React.createElement(P, null, "Tax-deductible donations go through [charity], a registered 501(c)(3). Or Venmo me and skip the paperwork. Either way, please give what you can."));
}
function Run({
  mobile,
  steps
}) {
  return /*#__PURE__*/React.createElement("section", {
    id: "run",
    style: {
      background: 'var(--pco-paper-2)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: wrap(mobile)
  }, /*#__PURE__*/React.createElement(H2, {
    m: mobile
  }, "The run"), /*#__PURE__*/React.createElement(P, null, "The Southern Tour Ultra is 100 miles on a loop course in Wilmington, NC. I start at 12pm on January 15, 2027, with a goal to finish in 24 hours. I've never run more than 40."), /*#__PURE__*/React.createElement(P, null, "Until then I'm training six days a week in the yellow shirt, usually with the flag. If you see me running through your tailgate, that's on purpose. Say hi."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: mobile ? '1fr 1fr' : 'repeat(3,auto)',
      gap: mobile ? 24 : 48,
      marginTop: 32,
      alignItems: 'end'
    }
  }, /*#__PURE__*/React.createElement(BigNumber, {
    size: mobile ? 'md' : 'lg',
    value: "100",
    caption: "miles on Jan 15, 2027"
  }), /*#__PURE__*/React.createElement(BigNumber, {
    size: mobile ? 'md' : 'lg',
    color: "ink",
    value: steps,
    caption: "steps since January 1st",
    source: "from COROS watch"
  }), /*#__PURE__*/React.createElement(BigNumber, {
    size: mobile ? 'md' : 'lg',
    color: "ink",
    value: "30",
    caption: "hour cutoff"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 28
    }
  }, /*#__PURE__*/React.createElement(Photo, {
    label: "Real photo: the shirt and the flag",
    style: {
      aspectRatio: '16/9'
    }
  }))));
}
function Updates({
  mobile,
  items
}) {
  return /*#__PURE__*/React.createElement("section", {
    id: "updates",
    style: wrap(mobile)
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(H2, {
    m: mobile
  }, "Training updates"), /*#__PURE__*/React.createElement(Badge, null, "Week 14 of 32")), /*#__PURE__*/React.createElement("div", null, items.map((u, i) => /*#__PURE__*/React.createElement(UpdateItem, _extends({
    key: i
  }, u, {
    last: i === items.length - 1
  })))));
}
function DonateModal({
  mode,
  onClose
}) {
  const [amt, setAmt] = React.useState('50');
  const [done, setDone] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", {
    onClick: onClose,
    style: {
      position: 'fixed',
      inset: 0,
      background: 'rgba(17,24,39,.55)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 16,
      zIndex: 50
    }
  }, /*#__PURE__*/React.createElement("div", {
    onClick: e => e.stopPropagation(),
    style: {
      background: '#fff',
      borderRadius: 6,
      padding: 32,
      width: '100%',
      maxWidth: 440,
      boxShadow: '0 2px 6px rgba(0,0,0,.08)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'baseline'
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: 24,
      fontWeight: 600
    }
  }, mode === 'venmo' ? 'Venmo — no paperwork' : 'Donate — tax-deductible'), /*#__PURE__*/React.createElement("button", {
    onClick: onClose,
    "aria-label": "Close",
    style: {
      border: 0,
      background: 'none',
      font: '400 24px/1 var(--font-body)',
      color: 'var(--pco-navy)',
      cursor: 'pointer'
    }
  }, "\xD7")), done ? /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 16,
      fontSize: 18,
      lineHeight: 1.55
    }
  }, "Thank you. That's $", amt, " toward the goal. I'll carry it for 100 miles.") : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 8,
      fontSize: 16,
      lineHeight: 1.55,
      color: 'var(--color-text-muted)'
    }
  }, mode === 'venmo' ? 'Send to @[Venmo handle]. Put "PCO" in the note.' : 'Processed by [charity], a registered 501(c)(3). You get a receipt by email.'), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8,
      marginTop: 20
    }
  }, ['25', '50', '100', '250'].map(v => /*#__PURE__*/React.createElement(Button, {
    key: v,
    size: "sm",
    variant: amt === v ? 'secondary' : 'outline',
    onClick: () => setAmt(v),
    style: {
      flex: 1,
      fontFamily: 'var(--font-display)',
      fontSize: 20
    }
  }, "$", v))), /*#__PURE__*/React.createElement(Input, {
    label: "Or a custom amount",
    prefix: "$",
    value: amt,
    onChange: e => setAmt(e.target.value.replace(/[^0-9]/g, '')),
    style: {
      marginTop: 16
    }
  }), /*#__PURE__*/React.createElement(Button, {
    variant: "donate",
    fullWidth: true,
    style: {
      marginTop: 20
    },
    onClick: () => setDone(true)
  }, mode === 'venmo' ? 'Open Venmo' : 'Give $' + (amt || '0')))));
}
function StickyDonate({
  onDonate
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'sticky',
      bottom: 0,
      background: '#fff',
      borderTop: '1px solid var(--color-border)',
      padding: 12,
      display: 'flex',
      gap: 8,
      zIndex: 10
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "donate",
    fullWidth: true,
    onClick: () => onDonate('card')
  }, "Donate"), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    fullWidth: true,
    onClick: () => onDonate('venmo')
  }, "Venmo"));
}
Object.assign(window, {
  Cause,
  Run,
  Updates,
  DonateModal,
  StickyDonate
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Sections.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.BigNumber = __ds_scope.BigNumber;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Footer = __ds_scope.Footer;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Nav = __ds_scope.Nav;

__ds_ns.ProgressBar = __ds_scope.ProgressBar;

__ds_ns.UpdateItem = __ds_scope.UpdateItem;

})();
