import { isPlatformBrowser } from '@angular/common';
import { AfterViewInit, Component, inject, PLATFORM_ID, signal } from '@angular/core';
import { Certifications } from './certifications/certifications';
import { Contact } from './contact/contact';
import { Experience } from './experience/experience';
import { Footer } from './footer/footer';
import { Me } from './me/me';
import { Navbar } from './navbar/navbar';
import { Projects } from './projects/projects';
import { ScrollToTop } from './scroll-to-top/scroll-to-top';
import { Skills } from './skills/skills';
import { ThemeToggle } from './theme-toggle/theme-toggle';

@Component({
  selector: 'app-root',
  imports: [
    Navbar,
    Me,
    Skills,
    Certifications,
    Projects,
    Experience,
    Contact,
    Footer,
    ThemeToggle,
    ScrollToTop,
  ],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App implements AfterViewInit {
  private readonly platformId = inject(PLATFORM_ID);

  protected readonly title = signal('portfolio-my');

  ngAfterViewInit(): void {
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('appear');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -100px 0px' });

    document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));
  }
}
