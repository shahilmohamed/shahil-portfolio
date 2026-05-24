import { Routes } from '@angular/router';
import { Me } from './me/me';
import { Projects } from './projects/projects';
import { Skills } from './skills/skills';
import { Contact } from './contact/contact';
import { Experience } from './experience/experience';
import { Certifications } from './certifications/certifications';
import { Footer } from './footer/footer';
import { Navbar } from './navbar/navbar';
import { ScrollToTop } from './scroll-to-top/scroll-to-top';
import { ThemeToggle } from './theme-toggle/theme-toggle';

export const routes: Routes = [
    {
        path: '',
        component: Me
    },
    {
        path: 'skills',
        component: Skills
    },
    {
        path: 'projects',
        component: Projects
    },
    {
        path: 'experience',
        component: Experience
    },
    {
        path: 'contact',
        component: Contact
    },
    {
        path: 'certifications',
        component: Certifications
    },
    {
        path: 'footer',
        component: Footer
    },
    {
        path: 'navbar',
        component: Navbar
    },
    {
        path: 'scroll-to-top',
        component: ScrollToTop
    },
    {
        path: 'theme-toggle',
        component: ThemeToggle
    }
];
