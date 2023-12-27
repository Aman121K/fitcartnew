import './css/styles.css'

export const metadata = {
  title: 'Fitcart: Trusted Brands, Better Health',
  description: 'Discover top-rated, safe pre-workout &amp; fitness supplements from trusted brands at FitCart. Elevate your fitness journey with our premium products.',
}

export default function RootLayout({ children }) {
  return (
    <>
      <html lang="en">
      <body>{children}</body>
    </html >	
    </>
  )
}
