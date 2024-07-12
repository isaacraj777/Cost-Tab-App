import React from 'react';
import { DetailsList, IColumn, DetailsListLayoutMode, SelectionMode ,IDetailsListStyles } from '@fluentui/react';
import '../styles/CostWidgetCit.css';

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
const pis = [
  { name: "Dr. Alice Johnson", department: "Bioinformatics", service: "AWS Cloud Services", cost: "$150/month" },
  { name: "Dr. Bob Smith", department: "Genomics", service: "Genomics Data Processing", cost: "$500/project" },
  { name: "Dr. Carol White", department: "IT Infrastructure", service: "High-Performance Computing", cost: "$600/month" },
  { name: "Dr. David Brown", department: "Data Science", service: "Data Analytics Services", cost: "$250/project" },
  { name: "Dr. Eva Green", department: "Clinical Research", service: "IT Support Services", cost: "$225/month" },
  { name: "Dr. Frank Blue", department: "Oncology", service: "Bioinformatics Analysis", cost: "$300/project" },
  { name: "Dr. Grace Black", department: "Neuroscience", service: "Microsoft Azure Services", cost: "$140/month" },
  { name: "Dr. Henry Adams", department: "Computational Biology", service: "Data Storage Solutions", cost: "$100/month" },
  { name: "Dr. Irene Baker", department: "Virology", service: "Network Security", cost: "$100/month" },
  { name: "Dr. Jack Carter", department: "Immunology", service: "Database Management", cost: "$250/month" },
];



const piColumns: IColumn[] = [
  { key: 'column1', name: 'PI Name', fieldName: 'name', minWidth: 100, maxWidth: 200, isResizable: true },
  { key: 'column2', name: 'Department', fieldName: 'department', minWidth: 100, maxWidth: 200, isResizable: true },
  { key: 'column3', name: 'Service', fieldName: 'service', minWidth: 100, maxWidth: 200, isResizable: true },
  { key: 'column4', name: 'Cost', fieldName: 'cost', minWidth: 100, maxWidth: 200, isResizable: true },
];
const detailsListStyles: Partial<IDetailsListStyles> = {
  root: {
    '.ms-DetailsRow-cell': {
      fontSize: '16px', // Increase the font size
    },
    '.ms-DetailsHeader-cellName': {
      fontSize: '18px', // Increase the font size for header
    },
  },
};


const CostWidgetCit = () => (
  <div className="costWidgetContainer">
 
    <div className="costWidgetSection">
    <h2>Principal Investigators Cost Break Down</h2>
    <DetailsList
            styles={detailsListStyles}

        items={pis}
        columns={piColumns}
        setKey="set"
        layoutMode={DetailsListLayoutMode.fixedColumns}
        selectionMode={SelectionMode.none}
      />
    </div>
  </div>
);

export default CostWidgetCit;
