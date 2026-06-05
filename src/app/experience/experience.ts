import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

interface ExperienceItem {
  id: number;
  role: string;
  company: string;
  location: string;
  period: string;
  achievements: string[];
  isCurrent: boolean;
}

@Component({
  selector: 'app-experience',
  imports: [CommonModule],
  templateUrl: './experience.html',
  styleUrl: './experience.css',
})
export class Experience {
  experiences: ExperienceItem[] = [
    {
      id: 1,
      role: 'Software Developer',
      company: 'TYASuite Software Solutions Pvt. Ltd.',
      location: 'Bangalore',
      period: 'March 2025 – Present',
      isCurrent: true,
      achievements: [
        'Developed and maintained full-stack web applications using Java, Spring Boot, Angular, and MySQL.',
        'Built RESTful APIs and integrated frontend components with backend services.',
        'Automated password expiry management by developing a Cron Job-based email notification system that proactively sends password reset emails to users, improving security compliance and reducing support requests.',
        'Implemented JWT-based authentication and role-based access control for application security.',
        'Designed and optimized MySQL database structures and queries.'
      ]
    },
    {
      id: 2,
      role: 'DevOps Intern',
      company: 'Finzly India Pvt. Ltd.',
      location: 'Chennai',
      period: 'July 2022 – October 2022',
      isCurrent: false,
      achievements: [
        'Assisted in setting up CI/CD pipelines using Jenkins and AWS CodePipeline.',
        'Deployed and monitored applications on AWS EC2 and managed storage via S3.',
        'Containerized microservices using Docker for consistent dev/prod environments.',
        'Configured IAM roles and policies to manage access control on AWS.',
        'Monitored system performance and logs using CloudWatch dashboards.'
      ]
    }
  ];

}
