// Edit these numbers and updates; nothing else needs to change.
window.PCO_DATA = {
  raised: 0,
  goal: 10000,
  // Training stats section. Plain strings, formatted however you want them shown.
  stats: {
    miles: "[1,160]",
    steps: "3,096,936",
    hours: "[201]",
    runs: "[178]",
    calories: "[191,100]"
  },
  charityLine: "Tax-deductible donations are processed by [charity], a registered 501(c)(3), EIN [EIN].",
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
