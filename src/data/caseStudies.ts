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
    description: "Built high-performance content delivery and security solutions for one of the world's largest CDN providers.",
    overview: "Akamai Technologies needed to enhance their global CDN infrastructure to handle exponential traffic growth and emerging security threats. We developed scalable solutions that improved performance while maintaining enterprise-grade security standards.",
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
    title: "Slice – Streaming Infrastructure Platform",
    description: "Scalable video streaming and content delivery platform for high-quality media distribution.",
    overview: "Slice required a robust streaming infrastructure capable of delivering high-quality video content to millions of users simultaneously while maintaining optimal performance across different devices and network conditions.",
    challenges: [
      "Real-time video encoding and transcoding at scale",
      "Adaptive bitrate streaming for various devices",
      "Global content distribution optimization",
      "Live streaming with minimal latency",
      "Analytics and viewer engagement tracking"
    ],
    approach: [
      "Built microservices-based streaming architecture",
      "Implemented adaptive bitrate streaming protocols",
      "Created distributed video processing pipeline",
      "Developed real-time analytics dashboard",
      "Optimized CDN integration for global reach"
    ],
    results: [
      "Support for 10M+ concurrent viewers",
      "40% reduction in buffering incidents",
      "99.5% streaming uptime achieved",
      "50% improvement in video start times",
      "Scaled to serve content in 50+ countries"
    ],
    techStack: ["Node.js", "FFmpeg", "AWS", "Redis", "PostgreSQL", "Docker", "Kubernetes", "HLS"],
    category: "Media Technology",
    client: "Slice",
    image: sliceImg,
    imageAlt: "Video streaming technology platform interface"
  },
  {
    id: "razorpay",
    title: "Razorpay – Payment Gateway & Financial Services",
    description: "Developed secure payment processing and financial management tools for India's leading fintech unicorn.",
    overview: "Razorpay needed to scale their payment infrastructure to handle millions of transactions daily while ensuring PCI compliance and building advanced financial products for businesses of all sizes.",
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
    description: "Created robust financial systems and trading platforms for one of the world's largest investment banks.",
    overview: "JPMorgan Chase needed to modernize their legacy trading systems and build new digital banking solutions to stay competitive in the rapidly evolving financial services landscape.",
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
