import { isPlatformBrowser } from '@angular/common';
import { Component, HostListener, inject, OnInit, PLATFORM_ID } from '@angular/core';

@Component({
  selector: 'app-scroll-to-top',
  imports: [],
  styleUrl: './scroll-to-top.css',
  template: `
    <button
      class="scroll-to-top"
      [class.visible]="isVisible"
      (click)="scrollToTop()"
      aria-label="Scroll to top">
      <span>↑</span>
    </button>
  `
})
export class ScrollToTop {
  private readonly platformId = inject(PLATFORM_ID);

  isVisible = false;

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.checkVisibility();
    }
  }

  @HostListener('window:scroll')
  onScroll(): void {
    this.checkVisibility();
  }

  private checkVisibility(): void {
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }

    this.isVisible = window.pageYOffset > 300;
  }

  scrollToTop(): void {
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }

    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

}
