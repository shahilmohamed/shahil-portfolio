import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Project } from '../model/Project';

@Component({
  selector: 'app-projects',
  imports: [CommonModule],
  templateUrl: './projects.html',
  styleUrl: './projects.css',
})
export class Projects {
  projects: Project[] = [
    {
      title: 'Hospital Management System',
      desc: 'Developed using Java Spring Boot and Angular to manage patient records, appointments, and prescriptions with JWT security.',
      repo: 'https://github.com/shahilmohamed/hospital_ui.git',
      demo: 'https://shahil-hospital-management.netlify.app/dashboard'
    },
    {
      title: 'Shopping Inventory Management System',
      desc: 'A full-stack application built with Angular, Spring Boot, and MySQL to track product stock and purchase history.',
      repo: 'https://github.com/shahilmohamed/shoppingMerchant.git',
      demo: ''
    },
    {
      title: 'Portfolio Website',
      desc: 'A responsive portfolio website built with Angular and Bootstrap to showcase skills, projects, and contact info.',
      repo: 'https://github.com/shahilmohamed/portfolio.git',
      demo: ''
    }
  ];

}
