import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Component, HostListener, inject, OnInit, PLATFORM_ID } from '@angular/core';

@Component({
  selector: 'app-navbar',
  imports: [CommonModule],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar implements OnInit {
  private readonly platformId = inject(PLATFORM_ID);

  isMenuOpen = false;
  isScrolled = false;

  navLinks = [
    { id: 'hero', text: 'About' },
    { id: 'skills', text: 'Skills' },
    { id: 'certifications', text: 'Certifications' },
    { id: 'projects', text: 'Projects' },
    { id: 'experience', text: 'Experience' },
    { id: 'contact', text: 'Contact' }
  ];

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.checkScroll();
    }
  }

  @HostListener('window:scroll')
  onScroll(): void {
    this.checkScroll();
  }

  private checkScroll(): void {
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }

    this.isScrolled = window.scrollY > 50;
  }

  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }

  closeMenu(): void {
    this.isMenuOpen = false;
  }

  navigate(id: string, event: Event): void {
    event.preventDefault();
    this.closeMenu();
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  }

}
