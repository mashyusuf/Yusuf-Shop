import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';
import Header from '@/components/header/Header';
import Footer from '@/components/Footer/Footer';
import Layout from '@/components/Layout';
import { Toaster } from 'react-hot-toast';

const geistSans = localFont({
    src: './fonts/GeistVF.woff',
    variable: '--font-geist-sans',
    weight: '100 900',
});
const geistMono = localFont({
    src: './fonts/GeistMonoVF.woff',
    variable: '--font-geist-mono',
    weight: '100 900',
});

export const metadata: Metadata = {
    title: 'Yusuf Shop-Buy Your Dream',
    description: 'What You Need Just Tell Me!',
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body
                className={`${geistSans.variable} ${geistMono.variable} antialiased`}
            >
                <Layout>
                    <Header />
                    {children}
                    <Footer />
                    <Toaster position='bottom-right' toastOptions={{
                        duration:3000,
                        style:{background: "#000000" ,color:"#ffffff"}
                    }} />
                </Layout>
            </body>
        </html>
    );
}
