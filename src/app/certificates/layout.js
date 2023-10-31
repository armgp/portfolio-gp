import '../globals.css'
import { Kanit } from 'next/font/google'

const ps2p = Kanit({
  subsets: ['latin'],
  weight: ['100', '200', '300','400', '500', '600', '700', '800', '900'],
})

export const metadata = {
  title: 'G.P - Certificates',
  description: 'Abhiram Certificates',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
