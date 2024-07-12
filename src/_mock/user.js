import { sample } from 'lodash';
import { faker } from '@faker-js/faker';

// ----------------------------------------------------------------------

export const users = [
  { id: 1, name: "AWS Cloud Services", description: "Cloud computing resources and storage via AWS", cost: "$150/month", avatarUrl: `/assets/images/avatars/aws_logo.png` },
  { id: 2, name: "Microsoft Azure Services", description: "Cloud computing resources and storage via Microsoft Azure", cost: "$140/month", avatarUrl: `/assets/images/avatars/azure_logo.png` },
  { id: 3, name: "Google Cloud Services", description: "Cloud computing resources and storage via Google Cloud", cost: "$130/month", avatarUrl: `/assets/images/avatars/gcp_icon.png` },
  { id: 4, name: "Data Storage Solutions", description: "Secure and scalable data storage solutions", cost: "$50/TB/month" },
  { id: 5, name: "High-Performance Computing", description: "Access to high-performance computing clusters", cost: "$200/hour" },
  { id: 6, name: "Network Security", description: "Network security and monitoring services", cost: "$100/month", avatarUrl: `/assets/images/avatars/network-security.png` },
  { id: 7, name: "Database Management", description: "Database setup, management, and optimization", cost: "$250/month" },
  { id: 8, name: "IT Support Services", description: "Technical support and troubleshooting", cost: "$75/hour" },
  { id: 9, name: "Software Development", description: "Custom software development services", cost: "$100/hour" },
  { id: 10, name: "Bioinformatics Analysis", description: "Bioinformatics data analysis and consulting", cost: "$300/project", avatarUrl: `/assets/images/avatars/bi_logo.png` },
  { id: 11, name: "Virtual Server Hosting", description: "Hosting virtual servers for various applications", cost: "$120/month" },
  { id: 12, name: "Data Backup and Recovery", description: "Regular data backup and disaster recovery services", cost: "$60/month" },
  { id: 13, name: "Collaborative Tools", description: "Tools for team collaboration and project management", cost: "$30/user/month" },
  { id: 14, name: "VPN Services", description: "Virtual Private Network (VPN) access", cost: "$20/user/month", avatarUrl: `/assets/images/avatars/vpn_logo.png` },
  { id: 15, name: "Cybersecurity Training", description: "Training programs on cybersecurity best practices", cost: "$500/session", avatarUrl: `/assets/images/avatars/cybersecurity.png` },
  { id: 16, name: "IT Consulting", description: "Expert IT consulting services", cost: "$150/hour" },
  { id: 17, name: "Website Hosting", description: "Hosting and maintenance of websites", cost: "$80/month" },
  { id: 18, name: "Email Hosting", description: "Secure and reliable email hosting services", cost: "$10/user/month" },
  { id: 19, name: "Application Hosting", description: "Hosting and maintenance of applications", cost: "$100/month" },
  { id: 20, name: "Data Analytics Services", description: "Data analysis and reporting services", cost: "$250/project" },
  { id: 21, name: "Mobile App Development", description: "Development of mobile applications", cost: "$150/hour" },
  { id: 22, name: "Machine Learning Services", description: "Machine learning model development and deployment", cost: "$400/project", avatarUrl: `/assets/images/avatars/ml_logo.png` },
  { id: 23, name: "Genomics Data Processing", description: "Processing and analysis of genomics data", cost: "$500/project" },
  { id: 24, name: "Cloud Migration Services", description: "Assistance with migrating to cloud infrastructure", cost: "$1000/project", avatarUrl: `/assets/images/avatars/cloud_mig_logo.png` },
];
