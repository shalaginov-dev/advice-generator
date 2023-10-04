import './styles/app.scss'
import type {Metadata} from 'next'
import {Manrope} from 'next/font/google'

const inter = Manrope({
    weight: ['400', '700', '800'],
    subsets: ['latin']
})

export const metadata: Metadata = {
    title: 'advice generator',
    description: 'pet application',
    icons: 'icon.png'
}

export default function RootLayout({children,}: { children: React.ReactNode }) {
    return (
        <html lang="en">
        <body className={inter.className}>{children}</body>
        </html>
    )
}
