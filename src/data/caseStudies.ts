import fintechUpiImage from "@/assets/fintech-upi.jpg";
import ecommerceMarketplaceImage from "@/assets/ecommerce-marketplace.jpg";
import healthcareTelemedicineImage from "@/assets/healthcare-telemedicine.jpg";
import logisticsOptimizationImage from "@/assets/logistics-optimization.jpg";

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
    id: "fintech-upi-system",
    title: "Fintech Client – UPI Auto Debit System",
    description: "Built a comprehensive UPI auto debit system for a leading fintech startup, enabling seamless recurring payments and subscription management.",
    overview: "Our client, a rapidly growing fintech startup, needed a robust UPI auto debit system to handle recurring payments for their subscription-based services. The system required high reliability, security, and scalability to support millions of transactions.",
    challenges: [
      "High transaction volume handling (10K+ TPM)",
      "Complex UPI mandate management across multiple banks",
      "Real-time payment status tracking and notifications",
      "Regulatory compliance with RBI guidelines",
      "Seamless integration with existing payment infrastructure"
    ],
    approach: [
      "Implemented microservices architecture for scalability",
      "Built robust API layer with comprehensive error handling",
      "Designed efficient database schema for transaction management",
      "Created real-time notification system using WebSockets",
      "Implemented comprehensive logging and monitoring"
    ],
    results: [
      "99.9% uptime achieved within first 6 months",
      "Reduced payment processing time by 40%",
      "Handled 500K+ successful mandates",
      "Zero critical security incidents",
      "Enabled client to scale from 10K to 1M+ users"
    ],
    techStack: ["Node.js", "PostgreSQL", "Redis", "Docker", "AWS", "TypeScript", "Express.js"],
    category: "Fintech",
    client: "Series A Fintech Startup",
    image: fintechUpiImage,
    imageAlt: "Digital banking and UPI payment system interface"
  },
  {
    id: "ecommerce-platform",
    title: "E-commerce Platform – Multi-vendor Marketplace",
    description: "Developed a scalable multi-vendor e-commerce platform with advanced inventory management and real-time analytics dashboard.",
    overview: "Built a comprehensive e-commerce marketplace from the ground up for a client looking to compete with established players. The platform needed to support multiple vendors, complex inventory management, and provide detailed analytics.",
    challenges: [
      "Complex multi-vendor architecture and onboarding",
      "Real-time inventory synchronization across vendors",
      "Advanced search and filtering capabilities",
      "Payment gateway integration for multiple vendors",
      "Comprehensive admin dashboard with analytics"
    ],
    approach: [
      "Implemented clean architecture with domain-driven design",
      "Built scalable search engine using Elasticsearch",
      "Created automated vendor onboarding workflow",
      "Designed real-time analytics dashboard",
      "Implemented automated testing and CI/CD pipeline"
    ],
    results: [
      "Onboarded 200+ vendors in first 3 months",
      "Achieved 2M+ monthly active users",
      "Processed $5M+ in transactions",
      "98% customer satisfaction rate",
      "Reduced operational costs by 35%"
    ],
    techStack: ["React", "Node.js", "MongoDB", "Elasticsearch", "Stripe", "AWS", "Docker"],
    category: "E-commerce",
    client: "B2B Marketplace Startup",
    image: ecommerceMarketplaceImage,
    imageAlt: "Modern e-commerce marketplace with shopping interface"
  },
  {
    id: "healthcare-platform",
    title: "Healthcare Platform – Telemedicine Solution",
    description: "Created a HIPAA-compliant telemedicine platform enabling secure video consultations and patient data management for healthcare providers.",
    overview: "Developed a comprehensive telemedicine platform for a healthcare startup, enabling doctors to conduct virtual consultations while maintaining strict HIPAA compliance and patient data security.",
    challenges: [
      "HIPAA compliance and patient data security",
      "High-quality video calling with low latency",
      "Integration with existing healthcare systems",
      "Electronic prescription management",
      "Real-time appointment scheduling and management"
    ],
    approach: [
      "Implemented end-to-end encryption for all communications",
      "Built custom video calling solution with WebRTC",
      "Created secure API integrations with EHR systems",
      "Designed intuitive user interface for both doctors and patients",
      "Implemented role-based access control system"
    ],
    results: [
      "100% HIPAA compliance achieved",
      "Served 10K+ patients in first year",
      "Reduced patient wait times by 60%",
      "99.5% video call success rate",
      "Helped client secure Series A funding"
    ],
    techStack: ["React", "Node.js", "WebRTC", "PostgreSQL", "AWS", "Docker", "Redis"],
    category: "Healthcare",
    client: "Healthcare Tech Startup",
    image: healthcareTelemedicineImage,
    imageAlt: "Doctor using telemedicine technology for patient consultation"
  },
  {
    id: "logistics-optimization",
    title: "Logistics – Route Optimization System",
    description: "Built an AI-powered logistics platform that optimizes delivery routes in real-time, reducing operational costs and improving delivery times.",
    overview: "Developed an intelligent logistics management system for a delivery company, incorporating machine learning algorithms to optimize routes, predict delivery times, and manage fleet resources efficiently.",
    challenges: [
      "Real-time route optimization for 1000+ vehicles",
      "Dynamic delivery time prediction",
      "Integration with GPS tracking systems",
      "Handling traffic and weather data",
      "Scalable architecture for rapid business growth"
    ],
    approach: [
      "Implemented machine learning algorithms for route optimization",
      "Built real-time tracking system with GPS integration",
      "Created predictive analytics for delivery time estimation",
      "Designed scalable microservices architecture",
      "Integrated third-party APIs for traffic and weather data"
    ],
    results: [
      "30% reduction in fuel costs",
      "25% improvement in delivery times",
      "Managed 50K+ deliveries per day",
      "95% on-time delivery rate achieved",
      "ROI of 300% within first year"
    ],
    techStack: ["Python", "Node.js", "MongoDB", "Redis", "TensorFlow", "AWS", "Docker"],
    category: "Logistics",
    client: "Last-mile Delivery Company",
    image: logisticsOptimizationImage,
    imageAlt: "Logistics and delivery trucks for route optimization"
  }
];
