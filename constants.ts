import { HeroSlide, ServiceItem, WhyChooseItem, TestimonialItem, ProjectItem, ProcessItem } from './types';

// SEO & Content Configuration

export const HERO_SLIDES: HeroSlide[] = [
  {
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2053&auto=format&fit=crop", // Luxury Kitchen Dark
    title: "Precision Factory-Made Interiors in Theni",
    subtitle: "Engineering Perfection Meets Aesthetic Design",
    description: "Experience the durability and finish of factory-manufactured interiors. We bring engineering precision to your home in Theni with customized solutions.",
    cta: "Get Free Consultation"
  },
  {
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop", // Modern Living
    title: "Premium Modular Kitchens in Theni",
    subtitle: "Designed for Functionality, Built to Last",
    description: "Transform your cooking space with our wide range of finishes including Acrylic, Veneer, and Lacquer Glass. 100% Factory-finished quality.",
    cta: "View Designs"
  },
  {
    image: "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?q=80&w=2070&auto=format&fit=crop", // Architectural
    title: "Top Interior Designers in Theni",
    subtitle: "Trusted by Engineers & Homeowners",
    description: "From concept to professional installation. We offer end-to-end interior solutions for residential and commercial spaces with strict timeline adherence.",
    cta: "Schedule Site Visit"
  }
];

export const SERVICES: ServiceItem[] = [
  {
    title: "Modular Kitchen",
    description: "Ergonomic designs featuring Acrylic, Veneer, PRC Laminate, and Lacquer Glass finishes. Engineered for Indian cooking with water-resistant carcasses and soft-close mechanisms.",
    icon: "ChefHat",
    image: "https://images.unsplash.com/photo-1556910103-1c02745a30bf?q=80&w=2070&auto=format&fit=crop"
  },
  {
    title: "Wardrobes",
    description: "Space-saving Sliding and luxurious Walk-in wardrobes. Customized internal layouts with durable factory finishes that resist warping and moisture.",
    icon: "DoorClosed",
    image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=1932&auto=format&fit=crop"
  },
  {
    title: "Storage Cot",
    description: "Heavy-duty hydraulic storage cots designed for comfort and maximum utility. Built with high-grade Ply/MDF and premium hydraulic pumps for easy lifting.",
    icon: "BedDouble",
    image: "https://images.unsplash.com/photo-1505693416388-b0346efee535?q=80&w=2070&auto=format&fit=crop"
  },
  {
    title: "TV Units",
    description: "Contemporary floating and floor-standing TV units that hide wires and enhance your living room aesthetics. Available in stone, laminate, and duco finishes.",
    icon: "Tv",
    image: "https://images.unsplash.com/photo-1595428774223-ef52624120d2?q=80&w=2000&auto=format&fit=crop"
  },
  {
    title: "Pooja Units",
    description: "Traditional yet modern Pooja units designed with serenity and storage in mind. Featuring intricate CNC cuttings and designated spaces for idols.",
    icon: "Sparkles",
    image: "https://images.unsplash.com/photo-1520699049698-acd2fcc51056?q=80&w=2070&auto=format&fit=crop"
  },
  {
    title: "Paneling & Partitions",
    description: "Decorative wall paneling and room partitions to define spaces elegantly without losing light. Uses acoustic materials and laser-cut metal or wood designs.",
    icon: "LayoutDashboard",
    image: "https://images.unsplash.com/photo-1620626012761-d9574ca40dca?q=80&w=2070&auto=format&fit=crop"
  }
];

export const WHY_CHOOSE_US: WhyChooseItem[] = [
  { title: "Factory-Made Precision", description: "Machine-cut accuracy ensures perfect alignment and superior finish compared to manual carpentry." },
  { title: "Engineering Background", description: "Founded by a Mechanical Engineer, ensuring structural integrity in every design." },
  { title: "Premium Materials", description: "We use only high-grade Ply and MDF tailored to Theni's climate conditions." },
  { title: "End-to-End Service", description: "From 3D design to manufacturing and final installation, we handle everything." },
  { title: "Trusted by Professionals", description: "The preferred choice for Engineers, Builders, and discerning Homeowners in Theni." },
  { title: "Showroom + Factory", description: "Visit our showroom to feel the finish and our factory to see the quality in making." },
  { title: "Timely Delivery", description: "Factory processes allow us to commit to and meet strict delivery timelines." },
  { title: "Professional Installation", description: "Trained technicians ensure a mess-free and perfect installation at your site." }
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: 1,
    name: "Rajesh Kumar",
    projectType: "Full Home Interior",
    location: "Theni",
    quote: "The factory finish is visibly superior to the carpentry work I had in my previous home. 3L Interio's engineering approach meant everything fit perfectly. Highly recommended for durability."
  },
  {
    id: 2,
    name: "Priya & Anand",
    projectType: "Modular Kitchen",
    location: "Bodinayakanur",
    quote: "We wanted a modern acrylic kitchen, and 3L Interio delivered exactly that. The precision in the cabinets and the smooth finish is amazing. The team was very professional."
  },
  {
    id: 3,
    name: "Senthil Builders",
    projectType: "Commercial Office",
    location: "Periyakulam",
    quote: "As a builder, I appreciate their adherence to timelines. The factory-made partitions and workstations were installed quickly without the usual mess of onsite carpentry."
  }
];

export const PROJECTS: ProjectItem[] = [
  {
    id: 1,
    title: "Luxury Acrylic Kitchen",
    category: "Kitchen",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop",
    description: "High-gloss acrylic finish in charcoal grey with Blum soft-close fittings."
  },
  {
    id: 2,
    title: "Master Bedroom Wardrobe",
    category: "Wardrobe",
    image: "https://images.unsplash.com/photo-1595515106968-59c467580037?q=80&w=1932&auto=format&fit=crop",
    description: "Floor-to-ceiling sliding wardrobe with lacquered glass and sensor lighting."
  },
  {
    id: 3,
    title: "Corporate Office Theni",
    category: "Commercial",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop",
    description: "Open plan workstations with acoustic partitions and manager cabins."
  },
  {
    id: 4,
    title: "Scandinavian Living Room",
    category: "Living",
    image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=1974&auto=format&fit=crop",
    description: "Minimalist TV unit with hidden storage solutions and decorative paneling."
  },
   {
    id: 5,
    title: "L-Shaped Veneer Kitchen",
    category: "Kitchen",
    image: "https://images.unsplash.com/photo-1556910103-1c02745a30bf?q=80&w=2070&auto=format&fit=crop",
    description: "Premium teak finish veneer combined with white quartz countertop."
  },
  {
    id: 6,
    title: "Walk-in Closet",
    category: "Wardrobe",
    image: "https://images.unsplash.com/photo-1551516594-56cb78394645?q=80&w=2030&auto=format&fit=crop",
    description: "Spacious walk-in closet with custom organizers and island storage."
  }
];

export const PROCESS_STEPS: ProcessItem[] = [
  {
    step: "01",
    title: "Consultation",
    description: "Visit our showroom to discuss your requirements. We analyze your floor plan and understand your lifestyle needs."
  },
  {
    step: "02",
    title: "Design & Visualization",
    description: "Our designers create detailed 3D renders. You get to visualize materials, colors, and layout before we cut a single board."
  },
  {
    step: "03",
    title: "Factory Manufacturing",
    description: "Once approved, designs are sent to our factory. Using German machinery, we cut, edge-band, and finish modules with mm-level precision."
  },
  {
    step: "04",
    title: "Installation",
    description: "Pre-assembled modules are delivered to your site. Our trained technicians install everything quickly with minimal dust and noise."
  }
];

export const CONTACT_INFO = {
  phone: "+91 98765 43210", // Placeholder
  email: "contact@3linterio.com",
  address: "3L Interio, Main Road, Theni, Tamil Nadu 625531",
  mapLink: "https://maps.google.com"
};