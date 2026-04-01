import { HomeLayout } from 'fumadocs-ui/layouts/home';
import { baseOptions } from '@/lib/layout.shared';
import { Metadata } from 'next';

export default function Layout({ children }: LayoutProps<'/'>) {
  return <HomeLayout {...baseOptions()}>{children}</HomeLayout>;
}

export const metadata: Metadata = {
  title: 'Direct Taxes',
  description: 'Indirect Taxes vs Direct Taxes',
  openGraph: {
    images: '/og-image.png',  // Now resolves to full URL
  },
  twitter: {
    images: '/twitter-image.png',  // Now resolves to full URL
  },
};