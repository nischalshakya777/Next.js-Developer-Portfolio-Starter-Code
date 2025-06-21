import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Nischal’s Awesome Site</title>
        <meta name="description" content="Welcome to Nischal’s personal website built with Next.js and deployed on Netlify!" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className={styles.center}>
          <h1 className={inter.className}>🚀 Welcome</h1>
          <p className={inter.className}>
            This is my personalized Next.js website deployed on Netlify!
          </p>

          <Image
            className={styles.logo}
            src="/next.svg"
            alt="Next.js Logo"
            width={180}
            height={37}
            priority
          />
        </div>

        <div className={styles.grid}>
          <a
            href="https://nextjs.org/docs"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              Next.js Docs <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              Learn more about building apps with Next.js.
            </p>
          </a>

          <a
            href="https://netlify.com"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              Netlify <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              The platform I used to deploy this site. Super easy!
            </p>
          </a>

          <a
            href="https://github.com"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              My GitHub <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              Check out my other projects and code.
            </p>
          </a>

          <a
            href="mailto:your-email@example.com"
            className={styles.card}
          >
            <h2 className={inter.className}>
              Contact Me <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              Get in touch with me for collaborations or questions!
            </p>
          </a>
        </div>
      </main>
    </>
  )
}
