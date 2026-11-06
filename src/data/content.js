const ext = (label) => ({ label, ext: true })

export const nav = [
  {
    label: 'Products',
    items: [
      { label: 'All products' },
      { label: '5G Connectivity', links: [{ label: 'RC500' }, { label: 'RC500-T' }, { label: 'RedCap Modems' }, { label: 'Gateways' }] },
      { label: 'Cellular Voice', links: [{ label: 'TK920' }, { label: 'TK920+' }, { label: 'TK100' }, { label: 'VH300' }, { label: 'RCVx3' }, { label: 'POTS Gateways' }] },
      { label: 'Public Safety', links: [{ label: 'ECB1 Emergency Call Box' }, { label: 'Blue-Light Retrofit Kit' }] },
      { label: 'Antennas', links: [{ label: '5G Antennas' }, { label: 'Wi-Fi Antennas' }, { label: 'GNSS Antennas' }] },
      { label: 'Power & Outdoor', links: [{ label: 'Solar Systems' }, { label: 'Battery Systems' }, { label: 'UPS' }, { label: 'Outdoor Enclosures' }] },
      { label: 'Software', links: [{ label: 'About PhoneMDM' }, ext('PhoneMDM Login')] },
      { label: 'Custom products' },
    ],
  },
  {
    label: 'Solutions',
    items: ['Public Safety', 'Education', 'Transportation', 'Smart Cities', 'Utilities', 'Enterprise'].map((label) => ({
      label,
      links: [{ label: `${label} overview` }, { label: 'Recommended products' }, { label: 'Case studies' }],
    })),
  },
  {
    label: 'Services',
    items: [{ label: 'Managed Connectivity' }, { label: 'UCaaS' }, { label: 'PhoneMDM' }, { label: 'Installation & Support' }],
  },
  {
    label: 'OEM / ODM',
    items: [{ label: 'Custom Hardware Design' }, { label: 'Manufacturing' }, { label: 'Private Label' }],
  },
  {
    label: 'Resources',
    items: [{ label: 'Datasheets' }, { label: 'Case Studies' }, { label: 'Certifications' }, { label: 'Technical Support' }],
  },
  {
    label: 'Company',
    items: [{ label: 'About' }, { label: 'Partners' }, { label: 'Contact' }, { label: 'Request a Quote' }],
  },
]

// Order matters: it is the bento-grid order (big card, two on the right, three along the bottom).
// Images are 16:9 renders (optimised copies live in /public/img); the cards are ~16:9 too, so they fill edge to edge.
export const categories = [
  { name: '5G Connectivity', text: 'Routers & gateways', desc: 'Dual-WAN failover, Wi-Fi 6 and remote management for vehicles, remote sites and fixed deployments.', img: '/img/routers.jpg' },
  { name: 'Cellular Voice', text: 'Phones & POTS gateways', desc: 'Cellular desk phones and POTS gateways that replace traditional phone cabling.', img: '/img/deskphone.jpg' },
  { name: 'Antennas', text: '5G, Wi-Fi, GNSS', desc: '5G, Wi-Fi and GNSS antennas that improve wireless performance in the field.', img: '/img/antenna.jpg' },
  { name: 'Public Safety', text: 'Call boxes & retrofit kits', desc: 'Emergency call boxes and blue-light retrofit kits for public-safety deployments.', img: '/img/emergency-box.jpg' },
  { name: 'Power & Outdoor', text: 'Solar, UPS, enclosures', desc: 'Solar and battery systems, UPS and outdoor enclosures for weather-ready deployments.', img: '/img/solar.jpg' },
  { name: 'Software', text: 'PhoneMDM', desc: 'PhoneMDM brings device configuration, monitoring, analytics and alerts into one cloud dashboard.', img: '/img/phonemdm.jpg' },
]

export const stack = [
  { tag: 'Hardware', title: 'Built for the field', text: '5G routers, cellular phones, antennas and public-safety devices designed around real deployments.', link: 'Explore hardware' },
  { tag: 'Software', title: 'PhoneMDM', text: 'Configure, monitor and update every deployed device from one cloud platform.', link: 'Explore PhoneMDM' },
  { tag: 'Integration', title: 'Complete systems', text: 'Hardware, connectivity and management delivered as one working deployment.', link: 'See solutions' },
]

export const industries = [
  {
    key: 'Public Safety',
    icon: 'M12 3l7 3v5c0 5-3 8-7 10-4-2-7-5-7-10V6l7-3zM9 12l2 2 4-4',
    tone: '#dcebff,#f3f8ff',
    headline: 'Keep emergency communications connected when they matter most.',
    points: ['Vehicle routers with automatic failover', 'Emergency call boxes and blue-light retrofit', 'Central visibility for command centers'],
    products: ['RC500', 'ECB1', 'PhoneMDM'],
  },
  {
    key: 'Transportation',
    icon: 'M3 6h11v10H3zM14 9h4l3 3v4h-7zM7 19a1.6 1.6 0 100-.01M17 19a1.6 1.6 0 100-.01',
    tone: '#d6f3ee,#f2fbf9',
    headline: 'Reliable cellular connectivity for fleets and mobile operations.',
    points: ['Built-in GPS and fleet telemetry', 'Passenger and crew Wi-Fi', 'Vehicle harness and power kits'],
    products: ['RC500-T', 'GNSS Antennas', 'Vehicle Kit'],
  },
  {
    key: 'Education',
    icon: 'M2 9l10-5 10 5-10 5-10-5zM6 11.5V16c0 1.5 3 3 6 3s6-1.5 6-3v-4.5M22 9v6',
    tone: '#e4e8ff,#f5f6ff',
    headline: 'Campus connectivity and public Wi-Fi without trenching new cable.',
    points: ['Managed outdoor Wi-Fi', 'Cellular voice for legacy phone lines', 'Fast deployment across sites'],
    products: ['RC500', 'Wi-Fi Antennas', 'TK920'],
  },
  {
    key: 'Smart Cities',
    icon: 'M3 21V9l6-3v15M9 21V4l8 3v14M17 21v-9l4 2v7M3 21h18M12 9h2M12 13h2M12 17h2',
    tone: '#d9f0fb,#f2fafe',
    headline: 'Connect parks, streets and public spaces from virtually anywhere.',
    points: ['Cameras, sensors and public Wi-Fi', 'Solar and battery power options', 'Fleet-wide remote management'],
    products: ['RC500', 'Solar Systems', 'PhoneMDM'],
  },
  {
    key: 'Utilities',
    icon: 'M13 2L4 14h7l-1 8 9-12h-7l1-8z',
    tone: '#e1ecff,#f4f8ff',
    headline: 'Bring connectivity where traditional infrastructure is not practical.',
    points: ['Remote and off-grid sites', 'Outdoor enclosures and UPS', 'Industrial IoT connectivity'],
    products: ['RC500', 'Outdoor Enclosure', 'Backup UPS'],
  },
  {
    key: 'Enterprise',
    icon: 'M3 8h18v12H3zM8 8V5h8v3M3 13h18M11 13v2h2v-2',
    tone: '#dfeaf6,#f4f7fb',
    headline: 'Business connectivity and device management at scale.',
    points: ['Dual-WAN failover for every office', 'POTS replacement and UCaaS', 'Zero-touch provisioning'],
    products: ['RC500', 'TK920', 'PhoneMDM'],
  },
]

export const stats = [
  { value: '5G', label: 'NSA & SA ready' },
  { value: 'Dual-WAN', label: 'Automatic failover' },
  { value: '1', label: 'Platform for every device' },
  { value: '24/7', label: 'Remote monitoring' },
]

export const segments = ['Government', 'Public Safety', 'Education', 'Transportation', 'Enterprise', 'Industrial']

export const capabilities = [
  { title: 'Design', text: 'Hardware designed around real deployment requirements.' },
  { title: 'Manufacturing', text: 'Integrated product development and manufacturing.' },
  { title: 'Connectivity', text: '5G, LTE, Wi-Fi, GPS and wireless technologies.' },
  { title: 'Software', text: 'Remote management, monitoring and analytics.' },
  { title: 'Integration', text: 'Hardware, connectivity and software working together.' },
]

export const footer = [
  { title: 'Products', links: ['5G Routers', 'Cellular Voice', 'Public Safety', 'Antennas', 'Power & Solar', 'PhoneMDM'] },
  { title: 'Solutions', links: ['Public Safety', 'Education', 'Transportation', 'Smart Cities', 'Utilities', 'Enterprise'] },
  { title: 'Services', links: ['Managed Connectivity', 'UCaaS', 'PhoneMDM', 'Installation & Support'] },
  { title: 'Resources', links: ['Datasheets', 'Case Studies', 'Certifications', 'Technical Support'] },
  { title: 'Company', links: ['About', 'Partners', 'OEM / ODM', 'Contact'] },
]
