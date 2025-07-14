'use client'

import Link from 'next/link';
import { Facebook, Instagram, Twitter, Youtube, Linkedin } from 'lucide-react';

const socialLinks = [
  { href: '#', icon: <Facebook className="h-6 w-6" />, label: 'Facebook' },
  { href: '#', icon: <Instagram className="h-6 w-6" />, label: 'Instagram' },
  { href: '#', icon: <Twitter className="h-6 w-6" />, label: 'Twitter' },
  { href: '#', icon: <Youtube className="h-6 w-6" />, label: 'YouTube' },
  { href: '#', icon: <Linkedin className="h-6 w-6" />, label: 'LinkedIn' },
];

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground py-6">
      <div className="container mx-auto px-4 flex flex-col-reverse sm:flex-row justify-between items-center gap-4">
        <p className="text-sm">&copy; 2025 CreditRise. All rights reserved.</p>
        <div className="flex items-center gap-4">
          {socialLinks.map((social) => (
             <Link key={social.label} href={social.href} passHref>
              <span className="sr-only">{social.label}</span>
              <div className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                {social.icon}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
