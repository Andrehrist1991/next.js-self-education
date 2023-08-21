/* Components */
import { Providers } from '@/lib/providers'
import { Navbar } from '../Components/Navbar/Navbar'

/* Instruments */
import styles from '@/styles/layout.module.scss'
import '@/styles/globals.scss'

export default function RootLayout(props: React.PropsWithChildren) {
  return (
    <Providers>
      <html lang="en">
        <body>
          <header className={styles.header}>
            <div className={styles.container}>
              <Navbar />
            </div>
          </header>
          <main className={styles.main}>
            {props.children}
          </main>
        </body>
      </html>
    </Providers>
  )
}
