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
    route: '/products',
    items: [
      { label: 'All products', to: '/products' },
      { label: '5G Connectivity', links: [{ label: 'RC500', to: '/products#rc500' }, { label: 'RC500-T', to: '/products#rc500-t' }, { label: 'RedCap Modems', to: '/products#5g-connectivity' }, { label: 'Gateways', to: '/products#5g-connectivity' }] },
      { label: 'Cellular Voice', links: [{ label: 'TK920', to: '/products#desk-phones' }, { label: 'TK920+', to: '/products#desk-phones' }, { label: 'TK100', to: '/products#desk-phones' }, { label: 'VH300', to: '/products#desk-phones' }, { label: 'RCVx3', to: '/products#rcvx3' }, { label: 'POTS Gateways', to: '/products#rcvx3' }] },
      { label: 'Public Safety', links: [{ label: 'ECB1 Emergency Call Box', to: '/products#ecb1' }, { label: 'Blue-Light Retrofit Kit', to: '/products#blue-light-retrofit' }] },
      { label: 'Antennas', links: [{ label: '5G Antennas', to: '/products#qc-antennas' }, { label: 'Wi-Fi Antennas', to: '/products#sector-wifi-antenna' }, { label: 'GNSS Antennas', to: '/products#qc-antennas' }] },
      { label: 'Power & Outdoor', links: [{ label: 'Solar Systems', to: '/products#solar-terminal' }, { label: 'Battery Systems', to: '/products#solar-terminal' }, { label: 'UPS', to: '/products#bt11' }, { label: 'Outdoor Enclosures', to: '/products#rc500-outdoor' }] },
      { label: 'Software', links: [{ label: 'About PhoneMDM', to: '/products#phonemdm' }, ext('PhoneMDM Login')] },
      { label: 'Custom products', to: '/products#custom' },
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
    items: [{ label: 'Managed Connectivity' }, { label: 'UCaaS' }, { label: 'PhoneMDM', to: '/products#phonemdm' }, { label: 'Remote Device Management' }, { label: 'SLA-Based Support' }],
  },
  {
    label: 'About Us',
    section: 'why',
    items: [
      { label: 'About' }, { label: 'Partners' }, { label: 'OEM / ODM' }, { label: 'Contact' },
      { label: 'Datasheets' }, { label: 'Case Studies' }, { label: 'Certifications' }, { label: 'Technical Support' },
    ],
  },
]

// Order matters: it is the bento-grid order (big card, two on the right, three along the bottom).
// Images are 16:9 renders (optimised copies live in /public/img); the cards are ~16:9 too, so they fill edge to edge.
// Product tiles, in grid order (3 x 2). Swap `img` for your own product photos any time.
export const categories = [
  { name: '5G Routers & Modems', text: 'Primary, backup, and vehicle connectivity', img: '/img/routers.jpg', to: '/products#5g-connectivity' },
  { name: 'Cellular Desk Phones', text: 'Business calling for desks and mobile teams', img: '/img/deskphone.jpg', to: '/products#desk-phones' },
  { name: 'POTS Replacement', text: 'Connect existing analog phone lines', img: '/img/deskphone.jpg', to: '/products#rcvx3' },
  { name: 'Emergency Phones & Call Boxes', text: 'Communications for campuses and public spaces', img: '/img/emergency-box.jpg', to: '/products#public-safety' },
  { name: 'Solar & Backup Power', text: 'Power for remote and outdoor equipment', img: '/img/solar.jpg', to: '/products#power-outdoor' },
  { name: 'Antennas & Accessories', text: 'Complete your installation with the right kit', img: '/img/antenna.jpg', to: '/products#antennas' },
]

// Products page: category order drives the page's section order and the filter tabs.
// `img` and `headline` feed the auto-playing category carousel at the top of the page.
export const productCategories = [
  { slug: '5g-connectivity', label: '5G Connectivity', img: '/img/routers.jpg', headline: 'Business-grade 5G, anywhere you operate.', blurb: 'Enterprise-grade 5G routers, terminals and outdoor solutions built for fixed, mobile and vehicle deployments.' },
  { slug: 'cellular-voice', label: 'Cellular Voice', img: '/img/deskphone.jpg', headline: 'Dial tone without the copper.', blurb: 'Cellular desk phones and POTS replacement that keep dial tone alive without copper or an on-prem PBX.' },
  { slug: 'public-safety', label: 'Public Safety', img: '/img/emergency-box.jpg', headline: 'Connected when every second counts.', blurb: 'Emergency call boxes, blue-light retrofits and first-response connectivity engineered for the moments that matter most.' },
  { slug: 'antennas', label: 'Antennas & Accessories', img: '/img/antenna.jpg', headline: 'The right signal for every site and vehicle.', blurb: '5G, WiFi and GNSS antennas engineered for vehicles, towers and fixed sites in every mounting style.' },
  { slug: 'power-outdoor', label: 'Power & Outdoor', img: '/img/solar.jpg', headline: 'Power and connectivity, off the grid.', blurb: "Solar, battery and outdoor hardware that keeps connectivity running where grid power and wiring aren't an option." },
  { slug: 'software', label: 'Software', img: '/img/managed-services.jpg', headline: 'Every device, one dashboard.', blurb: 'Cloud device management for every router, phone and sensor you deploy in the field.' },
]

// Products page: one card per product, grouped by `category` (matches productCategories slugs).
export const products = [
  // 5G Connectivity
  {
    id: 'rc500', category: '5g-connectivity', tag: 'Flagship', name: 'RC500', tagline: '5G Router',
    specs: [['5G', 'Network'], ['Dual-SIM', 'Failover'], ['WiFi 6', 'Wireless']],
    img: '/img/routers.jpg',
    text: 'Cost-effective, enterprise-grade performance for fixed and in-vehicle deployments. Unmatched bandwidth, ultra-low latency and seamless failover keep operations connected anywhere.',
    features: ['5G', 'Dual-SIM', 'Dual-WAN Failover', 'WiFi 6', 'GPS', 'MDM-ready'],
    meta: [
      { label: 'Ideal for', value: 'Education, Business, Transportation, Public Safety, Healthcare' },
      { label: 'Pairs with', value: 'Outdoor Antenna, Solar System, Outdoor Enclosure, Backup UPS, Vehicle Kit' },
    ],
  },
  {
    id: 'rc500-outdoor', category: '5g-connectivity', tag: 'Rugged', name: 'RC500 Outdoor Enclosure', tagline: '5G Solution',
    specs: [['IP66', 'Rated'], ['15+ mi', 'Range'], ['2× PoE', 'Ports']],
    img: '/img/solar.jpg',
    text: 'Turns the RC500 or RC500-T into a fully outdoor-capable system with high-gain antennas reaching sites over 15 miles away, dual PoE ports for security cameras, and solar power for off-grid sites.',
    features: ['IP66', 'Dual PoE', '15+ Mile Range', 'WiFi 6', 'Solar-Ready'],
    meta: [
      { label: 'Enclosure options', value: '5G + WiFi + 2×PoE + LAN · 5G Terminal · 5G + WiFi · 5G + PoE' },
      { label: 'Pairs with', value: 'High-Gain WiFi Antenna, Solar System, Backup UPS, PoE Camera' },
    ],
  },
  {
    id: 'rc500-t', category: '5g-connectivity', tag: '5G', name: 'RC500-T', tagline: '5G Data Terminal',
    specs: [['5G', 'Network'], ['2.5GbE', 'Ethernet'], ['USB 3.1', 'Interface']],
    img: '/img/routers.jpg',
    text: 'A compact, high-performance 5G data terminal with 2.5GbE Ethernet and USB 3.1 for fixed, mobile and remote connectivity, without the complexity of a traditional router.',
    features: ['5G', '2.5GbE Port', 'USB 3.1', 'MDM-ready'],
    meta: [
      { label: 'Use cases', value: 'Fixed internet, firewall failover, surveillance camera, 4G-to-5G retrofit, IoT' },
      { label: 'Pairs with', value: 'Outdoor Antenna, Solar System, Outdoor Enclosure, Backup UPS, Vehicle Kit' },
    ],
  },
  // Cellular Voice
  {
    id: 'desk-phones', category: 'cellular-voice', tag: 'Cellular Voice', name: 'Cellular Desk Phones', tagline: 'TK920 · TK920+ · TK100',
    specs: [['6–32', 'SIP accounts'], ['HD', 'Voice'], ['3', 'Models']],
    img: '/img/deskphone.jpg',
    text: 'A family of cellular desk phones that deliver dial tone over the cellular network instead of copper, scaled from single desks to multi-line offices.',
    features: ['6–32 SIP Accounts', 'HD Sound', 'Cordless Option', 'Cellular Dial Tone'],
    meta: [{ label: 'Models', value: 'TK920 (6 SIP accounts), TK920+ (32 SIP accounts, optional LCD expansion), TK100 (cordless)' }],
  },
  {
    id: 'rcvx3', category: 'cellular-voice', tag: 'POTS Replacement', name: 'RCVx3', tagline: 'Cellular ATA Router',
    specs: [['2× FXS', 'RJ11 ports'], ['E911', 'Alerts'], ['2-day', 'Backup']],
    img: '/img/deskphone.jpg',
    text: 'Replaces traditional POTS lines with dependable cellular voice. Two FXS/RJ11 ports, automatic failover and E911 notification keep alarms, elevators, fax lines and phones online.',
    features: ['2× FXS/RJ11 Ports', 'Failover & Fallback', 'E911 Notification', '2-Day Backup Battery'],
    meta: [
      { label: 'Supports', value: 'Alarm, elevator, fax, phone lines' },
      { label: 'Network', value: 'T-Mobile B71 + B41' },
    ],
  },
  // Public Safety
  {
    id: 'ecb1', category: 'public-safety', tag: 'Public Safety', name: 'ECB1', tagline: '5G Emergency Call Box',
    specs: [['5G', 'T-Priority'], ['IP67', 'Rated'], ['AC/Solar/PoE', 'Power']],
    img: '/img/emergency-box.jpg',
    text: 'A durable push-button emergency call box built on the RC500 5G router with T-Priority network access. One push connects to emergency services from schools, parks, highways and transit sites.',
    features: ['5G + T-Priority', 'E911 Alerts', 'IP67', 'Solar / AC / PoE Power'],
    meta: [{ label: 'Ideal for', value: 'Education, Business, Parks, Fire & Police Stations, Healthcare' }],
  },
  {
    id: 'blue-light-retrofit', category: 'public-safety', tag: 'Retrofit', name: 'Blue-Light POTS Retrofit Kit', tagline: 'Emergency Call Box Upgrade',
    specs: [['4G/5G', 'Upgrade'], ['Solar', 'Ready'], ['Keep', 'Your tower']],
    img: '/img/emergency-box.jpg',
    text: 'Upgrades existing blue-light towers and call boxes from POTS to 4G/5G connectivity. Add solar power, backup battery, and camera or sensor integrations without replacing the tower.',
    features: ['Cellular Antenna', 'Cellular ATA Adapter', 'Backup Battery', 'Solar Kit'],
    meta: [{ label: 'Why retrofit', value: 'Eliminates landline costs, email/SMS/voice alerts, remote monitoring' }],
  },
  {
    id: 'drone-first-response', category: 'public-safety', tag: 'New', name: 'Drone First Response', tagline: '5G Connected Drone Dock',
    specs: [['5G', 'T-Priority'], ['Solar', 'Backup'], ['Live', 'Telemetry']],
    icon: 'M12 5v4M12 15v4M5 12h4M15 12h4M8 8L5 5M16 8l3-3M8 16l-3 3M16 16l3 3',
    text: 'A solar-backed, always-connected drone dock for first-response teams. Dedicated 5G keeps takeoff, landing and live telemetry online even if site internet fails.',
    features: ['5G T-Priority', 'Solar Backup Power', 'Real-Time Telemetry', 'No Local WiFi Dependence'],
  },
  // Antennas
  {
    id: 'qc-antennas', category: 'antennas', tag: '5G / GNSS', name: 'External Antennas (QC Series)', tagline: 'Precision antennas for every frequency',
    specs: [['5', 'Models'], ['9-in-1', 'Max elements'], ['WiFi 7', 'Ready']],
    img: '/img/antenna.jpg',
    text: 'High-quality antennas covering Cellular, WiFi, GPS, LoRa, BLE and RFID frequencies, in mounting styles from adhesive glass-mount to magnetic and screw-mount.',
    features: ['5G NR MIMO', 'WiFi 6E / WiFi 7', 'GNSS', 'Custom Design Available'],
    specTable: {
      columns: ['QC-91GW', 'QC-91M', 'QC-51S', 'QC-41S', 'QC-91SWM'],
      rows: [
        { label: 'Technology', values: ['9-in-1 · 4×5G NR + 4×WiFi6E/7 + GNSS', '9-in-1 · 4×5G NR + 4×WiFi6E/7 + GNSS', '5-in-1 · 2×5G NR + 2×WiFi6E/7 + GNSS', '4-in-1 · 4×5G NR MIMO', '9-in-1 · 4×5G NR + 4×WiFi6E/7 + GNSS'] },
        { label: 'Mounting', values: ['Adhesive Glass + Wall', 'Magnetic', 'Screw', 'Screw', 'Screw + Wall'] },
      ],
    },
    meta: [{ label: 'Use cases', value: 'RV, Ambulance, Bus, Car, Truck' }],
  },
  {
    id: 'sector-wifi-antenna', category: 'antennas', tag: 'WiFi 6', name: 'Sector WiFi Antenna', tagline: 'Indoor / Outdoor',
    specs: [['11–14 dB', 'Gain'], ['4×4', 'MIMO'], ['IP65', 'Rated']],
    img: '/img/antenna.jpg',
    text: 'Directional 4x4 MIMO WiFi 6 antenna for focused outdoor coverage across parks, campuses and rural sites.',
    features: ['2.4 / 5.8GHz Dual-Band', '11–14dB Gain', 'Directional', 'IP65'],
  },
  {
    id: 'omni-wifi-antenna', category: 'antennas', tag: 'WiFi 6', name: 'Omni WiFi Antenna', tagline: 'Indoor / Outdoor',
    specs: [['8–12 dB', 'Gain'], ['360°', 'Coverage'], ['IP65', 'Rated']],
    img: '/img/antenna.jpg',
    text: 'Omni-directional 4x4 MIMO WiFi 6 antenna delivering 360° coverage for indoor spaces and rural deployments.',
    features: ['2.4 / 5.8GHz Dual-Band', '8–12dB Gain', '360° Omni-Directional', 'IP65'],
  },
  // Power & Outdoor
  {
    id: 'solar-terminal', category: 'power-outdoor', tag: 'Solar', name: 'Solar Terminal', tagline: 'ST-Series Solar Power System',
    specs: [['20–240Ah', 'Capacity'], ['LiFePO₄', 'Chemistry'], ['12/48V', 'Output']],
    img: '/img/solar.jpg',
    text: 'Plug-and-play solar battery terminals from 20Ah to 240Ah with LiFePO₄ chemistry, real-time battery management, and 12V/48V outputs for any off-grid 5G or IoT deployment.',
    features: ['20–240Ah Options', 'LiFePO₄ Chemistry', '12V / 48V Output', 'Real-Time Monitoring'],
    meta: [{ label: 'Use cases', value: 'Education, Public WiFi, Surveillance, Construction, Business, Agricultural' }],
  },
  {
    id: 'solar-wifi-system', category: 'power-outdoor', tag: 'All-in-One', name: '5G Solar WiFi System', tagline: 'Self-Contained Outdoor WiFi',
    specs: [['Off-grid', 'Power'], ['5G', 'Backhaul'], ['All-in-one', 'Install']],
    img: '/img/solar.jpg',
    text: "A self-contained solar, battery, 5G cellular and WiFi system for public WiFi coverage anywhere grid power and internet aren't available.",
    features: ['Solar + Battery', '5G Cellular Backhaul', 'WiFi Coverage', 'Off-Grid Ready'],
  },
  {
    id: 'public-wifi-system', category: 'power-outdoor', tag: 'WiFi 6', name: '5G Public WiFi System', tagline: 'Powered Public Spaces',
    specs: [['3000', 'Mbps peak'], ['300', 'Users'], ['WiFi 6', '802.11ax']],
    img: '/img/solar.jpg',
    text: 'A mains or solar-powered WiFi 6 access point delivering up to 3000Mbps and supporting 150–300 concurrent users, with splash-page and content filtering built in.',
    features: ['WiFi 6 (802.11ax)', '150–300 Users', 'Splash Page', 'CIPA Content Filtering'],
  },
  {
    id: 'solar-camera-system', category: 'power-outdoor', tag: 'Surveillance', name: '5G Solar Camera System', tagline: 'Remote Video Surveillance',
    specs: [['Solar', 'Powered'], ['5G', 'Uplink'], ['PoE', 'Camera']],
    img: '/img/solar.jpg',
    text: 'An all-in-one outdoor surveillance kit — solar, battery, 5G cellular and PoE — for rapid remote camera deployment with no local power or internet required.',
    features: ['Solar + Battery', '5G Cellular', 'PoE Camera Power', 'Rapid Deployment'],
  },
  {
    id: 'camera-system', category: 'power-outdoor', tag: 'Surveillance', name: '5G Camera System', tagline: 'Rapid Deployment Security',
    specs: [['3', 'Camera types'], ['5G', 'Uplink'], ['PoE/AC', 'Power']],
    img: '/img/emergency-box.jpg',
    text: 'A rugged 5G-connected camera enclosure supporting dome, PTZ and bullet cameras, powered by PoE or AC, for security anywhere.',
    features: ['5G Cellular', 'PoE', 'AC Power', 'Dome / PTZ / Bullet'],
  },
  {
    id: 'bt11', category: 'power-outdoor', tag: 'Accessory', name: 'BT11', tagline: 'Backup Battery',
    specs: [['2-day', 'Runtime'], ['Plug & play', 'Setup'], ['RC500/RCVx3', 'Pairs with']],
    icon: 'M3 7h14v10H3zM17 10h2v4h-2zM6 10h2v4H6zM10 10h2v4h-2z',
    text: 'A two-day backup battery accessory that keeps routers and voice gateways online through short power interruptions.',
    features: ['2-Day Runtime', 'Plug-and-Play', 'Pairs with RC500 / RCVx3'],
  },
  // Software
  {
    id: 'phonemdm', category: 'software', tag: 'Platform', name: 'PhoneMDM', tagline: 'Mobile Device Management Platform',
    specs: [['Zero-touch', 'Provisioning'], ['From $24', 'Per device/yr'], ['30-day', 'Free trial']],
    icon: 'M3 5h18v11H3zM8 20h8M12 16v4',
    text: 'A complete, secure edge-to-cloud device management platform — zero-touch provisioning, fleet analytics, health monitoring and alerts for every connected device you deploy.',
    features: ['Zero-Touch Provisioning', 'Fleet Analytics & Maps', 'Device Health Monitoring', 'Role-Based Users'],
    plans: [
      { name: 'Professional', price: '$24', period: '/device/yr', features: ['Device dashboard & map view', '1GB storage · 6-month history', '30-min status interval', '2 included users'] },
      { name: 'Enterprise', price: '$36', period: '/device/yr', featured: true, features: ['Everything in Professional', '12-month history', '1-min status interval', '4 included users', 'Optional GPS fleet service'] },
    ],
  },
]

// "Trusted by leading companies" logo strip under the hero
export const customerLogos = [
  { name: 'County of Los Angeles Fire Department', img: '/customer/la-county-fire-department.png' },
  { name: 'Torrance Police Department', img: '/customer/torrance-police.png' },
  { name: 'Los Angeles County Sheriff', img: '/customer/la-county-sheriff.png' },
  { name: 'City of Los Angeles', img: '/customer/city-of-los-angeles.png' },
  { name: 'County Sheriff', img: '/customer/county-sheriff-badge.png' },
  { name: 'Belgrade Police Department', img: '/customer/belgrade-police.png' },
  { name: 'Los Angeles', img: '/customer/los-angeles-seal.png' },
  { name: 'Los Angeles Community College District', img: '/customer/la-community-college-district.png' },
  { name: 'LA Metro', img: '/customer/la-metro.png' },
  { name: 'City of Bakersfield', img: '/customer/bakersfield.png' },
  { name: 'La Puente', img: '/customer/la-puente.png' },
  { name: 'Access', img: '/customer/access.png' },
  { name: 'West Linn-Wilsonville School District', img: '/customer/west-linn-wilsonville-school-district.png' },
  { name: 'City of Lewiston', img: '/customer/city-of-lewiston.png' },
  { name: 'UC Irvine', img: '/customer/uc-irvine.png' },
  { name: 'Edmonds School District', img: '/customer/edmonds-school-district.png' },
  { name: 'Monrovia Unified School District', img: '/customer/monrovia-unified-school-district.png' },
  { name: 'Fountain Valley School District', img: '/customer/fountain-valley-school-district.png' },
  { name: 'Lost Hills Utility District', img: '/customer/lost-hills-utility-district.png' },
  { name: 'Dinuba Unified School District', img: '/customer/dinuba-unified-school-district.png' },
  { name: 'Tustin Unified School District', img: '/customer/tustin-unified-school-district.png' },
  { name: 'City of Lancaster', img: '/customer/city-of-lancaster.png' },
  { name: 'City of Malibu', img: '/customer/city-of-malibu.png' },
  { name: 'City of Calabasas', img: '/customer/city-of-calabasas.png' },
  { name: 'Center Joint Unified School District', img: '/customer/center-joint-unified-school-district.png' },
  { name: 'Five Keys Schools and Programs', img: '/customer/five-keys-schools-and-programs.png' },
  { name: 'Police Department', img: '/customer/police-department-badge.png' },
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

// `to`: a route (optionally with #anchor), or a bare '#id' for a section present on every page. No `to` = no page yet.
export const footer = [
  {
    title: 'Products',
    links: [
      { label: '5G Routers', to: '/products#5g-connectivity' },
      { label: 'Cellular Voice', to: '/products#cellular-voice' },
      { label: 'Public Safety', to: '/products#public-safety' },
      { label: 'Antennas', to: '/products#antennas' },
      { label: 'Power & Solar', to: '/products#power-outdoor' },
      { label: 'PhoneMDM', to: '/products#phonemdm' },
    ],
  },
  {
    title: 'Industries',
    links: ['Public Safety', 'Education', 'Transportation', 'Smart Cities', 'Utilities', 'Enterprise'].map((label) => ({ label, to: '/#industries' })),
  },
  {
    title: 'Services',
    links: ['Hardware Design & Manufacturing', 'Systems Integration', 'Installation & Deployment', 'Managed Services'].map((label) => ({ label, to: '/#services' })),
  },
  {
    title: 'Support',
    links: [
      { label: 'Technical Support', to: '#quote' },
      { label: 'Datasheets', to: '/products' },
      { label: 'Certifications' },
      { label: 'PhoneMDM Login' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'About', to: '/#why' },
      { label: 'Partners' },
      { label: 'OEM / ODM', to: '/#services' },
      { label: 'Contact', to: '#quote' },
    ],
  },
]
