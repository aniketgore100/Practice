const ext = (label) => ({ label, ext: true })

export const nav = [
  {
    label: 'Solutions',
    section: 'services',
    items: [
      { label: 'Hardware Design & Manufacturing', links: [{ label: 'Custom Hardware Design' }, { label: 'OEM / ODM Manufacturing' }, { label: 'Private Label' }] },
      { label: 'Systems Integration & Solutions', links: [{ label: '5G & IoT' }, { label: 'VoIP & Voice' }, { label: 'Security & Cloud' }] },
      { label: 'Installation & Deployment', links: [{ label: 'Staging & Commissioning' }, { label: 'Field Installation' }, { label: 'Project Coordination' }] },
    ],
  },
  {
    label: 'Products',
    section: 'products',
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
    label: 'Industries',
    section: 'industries',
    items: ['Public Safety', 'Education', 'Transportation', 'Smart Cities', 'Utilities', 'Enterprise'].map((label) => ({
      label,
      links: [{ label: `${label} overview` }, { label: 'Recommended products' }, { label: 'Case studies' }],
    })),
  },
  {
    label: 'Managed Services',
    section: 'services',
    items: [{ label: 'Managed Connectivity' }, { label: 'UCaaS' }, { label: 'PhoneMDM' }, { label: 'Remote Device Management' }, { label: 'SLA-Based Support' }],
  },
  {
    label: 'Company',
    section: 'why',
    items: [{ label: 'About' }, { label: 'Partners' }, { label: 'OEM / ODM' }, { label: 'Contact' }],
  },
  {
    label: 'Resources',
    items: [{ label: 'Datasheets' }, { label: 'Case Studies' }, { label: 'Certifications' }, { label: 'Technical Support' }],
  },
  { label: 'Contact Sales', href: '#quote' },
]

// Order matters: it is the bento-grid order (big card, two on the right, three along the bottom).
// Images are 16:9 renders (optimised copies live in /public/img); the cards are ~16:9 too, so they fill edge to edge.
// Product tiles, in grid order (3 x 2). Swap `img` for your own product photos any time.
export const categories = [
  { name: '5G Routers & Modems', text: 'Primary, backup, and vehicle connectivity', img: '/img/routers.jpg' },
  { name: 'Cellular Desk Phones', text: 'Business calling for desks and mobile teams', img: '/img/deskphone.jpg' },
  { name: 'POTS Replacement', text: 'Connect existing analog phone lines', img: '/img/deskphone.jpg' },
  { name: 'Emergency Phones & Call Boxes', text: 'Communications for campuses and public spaces', img: '/img/emergency-box.jpg' },
  { name: 'Solar & Backup Power', text: 'Power for remote and outdoor equipment', img: '/img/solar.jpg' },
  { name: 'Antennas & Accessories', text: 'Complete your installation with the right kit', img: '/img/antenna.jpg' },
]

// "One Partner. Complete Technology Solutions." strip under the hero (icons are 24x24 stroke paths)
export const steps = [
  { title: 'Design', icon: 'M9 18h6M10 21h4M12 3a6 6 0 00-3.5 10.9c.6.5 1 1.2 1 2.1h5c0-.9.4-1.6 1-2.1A6 6 0 0012 3z' },
  { title: 'Manufacture', icon: 'M7 7h10v10H7zM10 10h4v4h-4zM9 3v4M15 3v4M9 17v4M15 17v4M3 9h4M3 15h4M17 9h4M17 15h4' },
  { title: 'Integrate', icon: 'M12 4a2 2 0 100 .01M5 19a2 2 0 100 .01M19 19a2 2 0 100 .01M12 6v5M12 11l-6 6M12 11l6 6' },
  { title: 'Deploy', icon: 'M14.7 6.3a4 4 0 00-5.4 5.1L3 17.7 6.3 21l6.3-6.3a4 4 0 005.1-5.4l-2.6 2.6-2.4-.6-.6-2.4 2.6-2.6z' },
  { title: 'Monitor', icon: 'M3 5h18v11H3zM8 20h8M12 16v4' },
  { title: 'Support', icon: 'M4 14v-2a8 8 0 0116 0v2M4 14h3v5H5a1 1 0 01-1-1zM20 14h-3v5h2a1 1 0 001-1zM17 19c0 1.5-2 2-5 2' },
]

// Complete Technology Solutions & Services: 2x2 cards. Add `img: '/img/...'` to a card to show a photo instead of the icon.
export const services = [
  { title: 'Hardware Design & Manufacturing', img: '/img/hardware-design.jpg', text: 'Custom engineering, OEM/ODM manufacturing, and product development for advanced cellular and IoT applications.', link: 'Explore Hardware Services', icon: steps[1].icon },
  { title: 'Systems Integration & Solutions', img: '/img/systems-integration.jpg', text: 'Integrated 5G, IoT, VoIP, security, and cloud solutions engineered for reliable operations.', link: 'Explore Solutions', icon: steps[2].icon },
  { title: 'Installation & Deployment', img: '/img/installation-deployment.jpg', text: 'Professional installation, staging, commissioning, and coordinated deployment for projects of any scale.', link: 'Explore Deployment Services', icon: steps[3].icon },
  { title: 'Managed Services & Support', img: '/img/managed-services.jpg', text: 'Centralized monitoring, remote device management, connectivity services, and SLA-based support.', link: 'Explore Managed Services', icon: steps[4].icon },
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

// Featured deployments (subject to customer approval before publishing)
export const projects = [
  { tag: 'Transportation', title: 'Transportation Connectivity', text: '5G vehicle connectivity and fleet communications for paratransit operations.' },
  { tag: 'Public Safety', title: 'Public Safety', text: 'Cellular emergency communications and POTS replacement for critical infrastructure.' },
  { tag: 'Government & Education', title: 'Government & Education', text: 'Reliable cellular communications, classroom voice services, and centralized device management.' },
]

export const capabilities = [
  { title: 'Hardware Engineering', text: 'Hardware designed and manufactured around real deployment requirements.' },
  { title: 'Wireless Connectivity', text: '5G, LTE, Wi-Fi, GPS and wireless technologies.' },
  { title: 'Systems Integration', text: 'Hardware, connectivity, voice and cloud working together as one solution.' },
  { title: 'Installation & Deployment', text: 'Staging, commissioning and coordinated field deployment for projects of any scale.' },
  { title: 'Managed Services', text: 'Centralized monitoring, remote device management and analytics.' },
  { title: 'Support', text: 'SLA-based support from the team that builds and deploys the technology.' },
]

// Direct sales contact details for the footer. Fill these in; empty values are not shown.
export const contact = { email: '', phone: '' }

export const footer = [
  { title: 'Products', links: ['5G Routers', 'Cellular Voice', 'Public Safety', 'Antennas', 'Power & Solar', 'PhoneMDM'] },
  { title: 'Industries', links: ['Public Safety', 'Education', 'Transportation', 'Smart Cities', 'Utilities', 'Enterprise'] },
  { title: 'Services', links: ['Hardware Design & Manufacturing', 'Systems Integration', 'Installation & Deployment', 'Managed Services'] },
  { title: 'Support', links: ['Technical Support', 'Datasheets', 'Certifications', 'PhoneMDM Login'] },
  { title: 'Company', links: ['About', 'Partners', 'OEM / ODM', 'Contact'] },
]
