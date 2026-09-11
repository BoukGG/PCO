// Edit these numbers and updates; nothing else needs to change.
window.PCO_DATA = {
  raised: 50,
  goal: 10000,
  // Race start as one fixed instant (UTC), so every visitor counts down to the same moment: Jan 15, 2027, 12:00 PM Eastern (EST = UTC-5).
  raceStart: "2027-01-15T17:00:00Z",
  // Training stats section. Plain strings, formatted however you want them shown.
  stats: {
    miles: "1,185",
    steps: "3,153,544",
    hours: "205.3",
    runs: "182"
  },
  charity: { name: "UNC Health Foundation", fund: "Matthew I. Milowsky, MD Fund for Genitourinary Oncology" },
  givingUrl: "", // paste the UNC giving link here when it's live; the Give button switches on automatically
  givingNote: "My giving link should be live by September 25th.",
  // "Notify me when the giving link is live" form (shown in the tax-deductible modal while givingUrl is empty). Same Google Form setup as the pledge.
  notify: {
    formId: "1FAIpQLSdkyM8LnlPtzxxU2DsKK8jvJUt06palrY2EPc1MdGkU9J6pSw",
    entries: { name: "entry.15103998", email: "entry.1680144250", phone: "entry.955689074" }
  },
  charityLine: "Tax-deductible donations are processed by the UNC Health Foundation, a registered 501(c)(3), and support the Matthew I. Milowsky, MD Fund for Genitourinary Oncology.",
  venmo: "@BlakeAnderson3",
  email: "blake@pisscanceroff.org",
  strava: "https://strava.app.link/BPIZvVURg6b",
  instagram: "", // paste your Instagram profile URL here to show the link
  // "Join the pledge" form. Submissions post straight into this Google Form; see README "Pledge form".
  pledge: {
    formId: "1FAIpQLSePvWWVD1dCnO41kU8g0cbID_n8WryPD-DOIDoMq1W3Zax0oQ",
    entries: {
      name: "entry.15103998",
      email: "entry.1680144250",
      phone: "entry.335432418",
      amount: "entry.955689074"
    },
    // The pledge question is multiple choice: these must match its options exactly. Anything else is sent via the form's "Other" option.
    amountChoices: ["$0.10", "$0.25", "$0.50", "$1.00", "$2.00"]
  }
};
