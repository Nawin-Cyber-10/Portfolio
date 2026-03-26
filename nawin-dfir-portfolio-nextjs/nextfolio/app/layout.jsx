import './globals.css'

export const metadata = {
  title: 'Nawin Prasath K — DFIR Analyst',
  description: 'Cyber Forensics & DFIR Analyst at the National Investigation Agency. Specializing in digital forensics, incident response, SOC operations, and CTF.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
