import { isPlatformBrowser } from '@angular/common';
import { inject, Injectable, PLATFORM_ID } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private readonly platformId = inject(PLATFORM_ID);

  isDarkTheme = true;

  constructor() {
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }

    const saved = localStorage.getItem('theme');
    this.isDarkTheme = saved ? saved === 'dark' : true;
    this.applyTheme();
  }

  toggleTheme(): void {
    this.isDarkTheme = !this.isDarkTheme;

    if (!isPlatformBrowser(this.platformId)) {
      return;
    }

    this.applyTheme();
    localStorage.setItem('theme', this.isDarkTheme ? 'dark' : 'light');
  }

  private applyTheme(): void {
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }

    const body = document.body;
    if (this.isDarkTheme) {
      body.classList.add('dark-theme');
      body.classList.remove('light-theme');
    } else {
      body.classList.add('light-theme');
      body.classList.remove('dark-theme');
    }
  }
}
