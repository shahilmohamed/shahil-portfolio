import { Component } from '@angular/core';
import { ThemeService } from '../services/theme.service';

@Component({
  selector: 'app-theme-toggle',
  imports: [],
  styleUrl: './theme-toggle.css',
  template: `
    <button
      class="theme-toggle"
      (click)="theme.toggleTheme()"
      [attr.aria-label]="theme.isDarkTheme ? 'Switch to light mode' : 'Switch to dark mode'">
      {{ theme.isDarkTheme ? '☀️' : '🌙' }}
    </button>
  `
})
export class ThemeToggle {
  constructor(public theme: ThemeService) {}
}
