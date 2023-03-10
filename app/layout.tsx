import HeaderComponent from '@/components/header/HeaderComponent'
import '@/styles/modules/global.scss'


function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
      <html lang="en">
        {/*
          <head /> will contain the components returned by the nearest parent
          head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
        */}
        <head />
        
        <body>
          <HeaderComponent />
          {children}
        </body>
      </html>
  )
}


export default RootLayout