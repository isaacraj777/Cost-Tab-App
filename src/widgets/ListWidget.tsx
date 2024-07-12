import { DetailsList, IColumn,DetailsListLayoutMode,SelectionMode } from '@fluentui/react';

const teamMembers = [
  { name: "Alice Smith", actualCost: "$1250", budget: "$1500", consumption: "83.33%" },
  { name: "Bob Johnson", actualCost: "$1650", budget: "$1700", consumption: "97.06%" },
  { name: "Charlie Brown", actualCost: "$1100", budget: "$1200", consumption: "91.67%" },
  { name: "Diana Prince", actualCost: "$1450", budget: "$1400", consumption: "103.57%" },
  { name: "Ethan Hunt", actualCost: "$1550", budget: "$1600", consumption: "96.88%" },
  { name: "Fiona Apple", actualCost: "$1300", budget: "$1250", consumption: "104.00%" },
  { name: "George Michael", actualCost: "$1400", budget: "$1350", consumption: "103.70%" },
  { name: "Hannah Montana", actualCost: "$1200", budget: "$1300", consumption: "92.31%" },
  { name: "Ivan Drago", actualCost: "$1700", budget: "$1650", consumption: "103.03%" },
  { name: "Jenny Craig", actualCost: "$1150", budget: "$1100", consumption: "104.55%" }
];



const columns: IColumn[] = [
  { key: 'column1', name: 'User', fieldName: 'name', minWidth: 100, maxWidth: 200, isResizable: true },
  { key: 'column2', name: 'Actual cost (USD)', fieldName: 'actualCost', minWidth: 100, maxWidth: 200, isResizable: true },
  { key: 'column3', name: 'Budget (USD)', fieldName: 'budget', minWidth: 100, maxWidth: 200, isResizable: true },
  { key: 'column4', name: '% Consumption', fieldName: 'consumption', minWidth: 100, maxWidth: 200, isResizable: true },
];

const services = [
  { service: "AWS Cloud Services", description: "Cloud computing resources and storage via AWS", cost: "$150/month" },
  { service: "Microsoft Azure Services", description: "Cloud computing resources and storage via Microsoft Azure", cost: "$140/month" },
  { service: "Google Cloud Services", description: "Cloud computing resources and storage via Google Cloud", cost: "$130/month" },
  { service: "Data Storage Solutions", description: "Secure and scalable data storage solutions", cost: "$50/TB/month" },
  { service: "High-Performance Computing", description: "Access to high-performance computing clusters", cost: "$200/hour" },
  { service: "Network Security", description: "Network security and monitoring services", cost: "$100/month" },
  { service: "Database Management", description: "Database setup, management, and optimization", cost: "$250/month" },
  { service: "IT Support Services", description: "Technical support and troubleshooting", cost: "$75/hour" },
  { service: "Software Development", description: "Custom software development services", cost: "$100/hour" },
  { service: "Bioinformatics Analysis", description: "Bioinformatics data analysis and consulting", cost: "$300/project" },
  { service: "Virtual Server Hosting", description: "Hosting virtual servers for various applications", cost: "$120/month" },
  { service: "Data Backup and Recovery", description: "Regular data backup and disaster recovery services", cost: "$60/month" },
  { service: "Collaborative Tools", description: "Tools for team collaboration and project management", cost: "$30/user/month" },
  { service: "VPN Services", description: "Virtual Private Network (VPN) access", cost: "$20/user/month" },
  { service: "Cybersecurity Training", description: "Training programs on cybersecurity best practices", cost: "$500/session" },
  { service: "IT Consulting", description: "Expert IT consulting services", cost: "$150/hour" },
  { service: "Website Hosting", description: "Hosting and maintenance of websites", cost: "$80/month" },
  { service: "Email Hosting", description: "Secure and reliable email hosting services", cost: "$10/user/month" },
  { service: "Application Hosting", description: "Hosting and maintenance of applications", cost: "$100/month" },
  { service: "Data Analytics Services", description: "Data analysis and reporting services", cost: "$250/project" },
  { service: "Mobile App Development", description: "Development of mobile applications", cost: "$150/hour" },
  { service: "Machine Learning Services", description: "Machine learning model development and deployment", cost: "$400/project" },
  { service: "Genomics Data Processing", description: "Processing and analysis of genomics data", cost: "$500/project" },
  { service: "Cloud Migration Services", description: "Assistance with migrating to cloud infrastructure", cost: "$1000/project" },
];
const serviceColumns: IColumn[] = [
    { key: 'column1', name: 'Service', fieldName: 'service', minWidth: 100, maxWidth: 200, isResizable: true },
    { key: 'column2', name: 'Description', fieldName: 'description', minWidth: 100, maxWidth: 300, isResizable: true },
    { key: 'column3', name: 'Cost', fieldName: 'cost', minWidth: 100, maxWidth: 200, isResizable: true },
  ];

const ListWidget = () => (
  <DetailsList
    items={services}
    columns={serviceColumns}
    setKey="set"
    layoutMode={DetailsListLayoutMode.fixedColumns}
    selectionMode={SelectionMode.none}
  />
);

export default ListWidget