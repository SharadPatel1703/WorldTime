import './globals.css';

export const metadata = {
    title: 'World Time App',
    description: 'Check the current time anywhere in the world',
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
        <body>{children}</body>
        </html>
    );
}