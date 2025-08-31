import akamaiImg from "@/assets/akamai-logo-og-default.avif";
import jpmorganImg from "@/assets/jpmorgan-img.png";
import razorpayImg from "@/assets/razorpayimg.jpeg";
import sliceImg from "@/assets/sliceimg.webp";

export interface CaseStudy {
  id: string;
  title: string;
  description: string;
  overview: string;
  challenges: string[];
  approach: string[];
  results: string[];
  techStack: string[];
  category: string;
  client: string;
  image: string;
  imageAlt: string;
}

export const caseStudies: CaseStudy[] = [
  {
    id: "akamai",
    title: "Akamai – Global CDN Infrastructure Platform",
    description: "Enterprise-scale CDN infrastructure modernization with advanced distributed systems and real-time threat detection capabilities.",
    overview: "Akamai's existing infrastructure was struggling under exponential traffic growth, requiring a complete architectural overhaul of their CDN platform while maintaining zero downtime across 300,000+ global servers. Our team architected next-generation edge computing solutions with advanced caching algorithms and automated security systems.",
    challenges: [
      "Managing traffic spikes across 300,000+ servers globally",
      "Real-time threat detection and mitigation at scale",
      "Low-latency content delivery optimization",
      "Edge computing platform development",
      "Multi-protocol load balancing and failover systems"
    ],
    approach: [
      "Implemented distributed edge computing architecture",
      "Built AI-powered DDoS protection systems",
      "Optimized caching algorithms for better performance",
      "Created real-time analytics and monitoring dashboards",
      "Developed automated scaling and load distribution"
    ],
    results: [
      "50% reduction in content delivery latency",
      "99.99% uptime across all edge locations",
      "Blocked 100+ billion attacks per day",
      "Handled 15% of global web traffic",
      "Improved customer satisfaction by 35%"
    ],
    techStack: ["C++", "Linux", "Python", "Go", "Redis", "Elasticsearch", "Docker", "Kubernetes"],
    category: "Infrastructure",
    client: "Akamai Technologies",
    image: akamaiImg,
    imageAlt: "Akamai global CDN network infrastructure"
  },
  {
    id: "slice",
    title: "Slice – Quick Credit & Lending Platform",
    description: "Advanced fintech platform for instant credit disbursement and intelligent loan management solutions.",
    overview: "Slice required a robust fintech infrastructure capable of processing thousands of credit applications with real-time risk assessment while maintaining regulatory compliance and seamless banking integrations.",
    challenges: [
      "Real-time credit scoring and risk assessment at scale",
      "Automated loan underwriting and approval workflows",
      "Multi-bank integration and compliance management", 
      "Instant credit disbursement with minimal latency",
      "Advanced fraud detection and default prediction"
    ],
    approach: [
      "Built microservices-based lending architecture",
      "Implemented machine learning risk assessment models",
      "Created automated underwriting and approval pipeline",
      "Developed real-time credit monitoring dashboard",
      "Optimized banking API integrations for instant disbursement"
    ],
    results: [
      "Process 50K+ credit applications monthly",
      "90% faster loan approval times achieved",
      "99.5% platform uptime maintained",
      "60% reduction in default rates",
      "Scaled to serve customers across 25+ cities"
    ],
    techStack: ["Node.js", "Python", "AWS", "Redis", "PostgreSQL", "Docker", "Kubernetes", "ML"],
    category: "Fintech",
    client: "Slice",
    image: sliceImg,
    imageAlt: "Slice fintech credit and lending platform interface"
  },
  {
    id: "razorpay",
    title: "Razorpay – Payment Gateway & Financial Services",
    description: "Fault-tolerant payment infrastructure with advanced fraud detection and horizontally scalable transaction processing systems.",
    overview: "Razorpay faced critical scalability bottlenecks in their payment processing system, requiring a complete rewrite to handle exponential transaction growth while meeting strict PCI compliance and regulatory requirements. Our fintech specialists architected an event-driven, horizontally scalable platform with advanced fraud detection algorithms.",
    challenges: [
      "Processing 100M+ transactions per month",
      "Multi-bank payment gateway integration",
      "PCI DSS compliance and security standards",
      "Real-time fraud detection and prevention",
      "Building comprehensive financial dashboard"
    ],
    approach: [
      "Implemented fault-tolerant payment processing system",
      "Built machine learning-based fraud detection",
      "Created unified API for multiple payment methods",
      "Designed real-time transaction monitoring",
      "Developed comprehensive merchant dashboard"
    ],
    results: [
      "99.99% payment success rate achieved",
      "Processing $50B+ annually in transactions",
      "Reduced payment failures by 60%",
      "Zero security breaches or compliance issues",
      "Enabled 8M+ businesses to accept payments"
    ],
    techStack: ["Java", "Spring Boot", "MySQL", "Redis", "Apache Kafka", "AWS", "Docker", "React"],
    category: "Fintech",
    client: "Razorpay",
    image: razorpayImg,
    imageAlt: "Razorpay payment gateway and financial services platform"
  },
  {
    id: "jpmorgan",
    title: "JPMorgan – Enterprise Banking Solutions",
    description: "Cloud-native trading infrastructure with microservices architecture, real-time risk management, and sub-millisecond processing capabilities.",
    overview: "JPMorgan's legacy trading systems were becoming obsolete, requiring modernization to cloud-native architecture while ensuring real-time processing capabilities for high-frequency trading and regulatory compliance. Our financial technology experts designed containerized microservices with advanced risk management and automated compliance systems.",
    challenges: [
      "Modernizing legacy trading systems",
      "Real-time risk management and compliance",
      "High-frequency trading infrastructure",
      "Regulatory reporting automation",
      "Enterprise-grade security and data protection"
    ],
    approach: [
      "Built cloud-native microservices architecture",
      "Implemented real-time risk calculation engines",
      "Created automated compliance reporting systems",
      "Developed high-performance trading algorithms",
      "Integrated advanced security and audit trails"
    ],
    results: [
      "99.99% system availability for trading platforms",
      "50% reduction in trade settlement time",
      "Automated 90% of regulatory reporting",
      "Processed $6 trillion in daily transactions",
      "Achieved zero critical security incidents"
    ],
    techStack: ["Java", "Spring", "Oracle DB", "Apache Kafka", "Kubernetes", "OpenShift", "React", "TypeScript"],
    category: "Financial Services",
    client: "JPMorgan Chase",
    image: jpmorganImg,
    imageAlt: "JPMorgan enterprise banking and trading systems"
  }
];
