import Head from 'next/head';
import Image from 'next/image';
import styles from './layout.module.css';
import utilStyles from '../styles/utils.module.css';
import Link from 'next/link';
import { motion, whileHover, drag, whileTap } from "framer-motion"


const name = 'Lucas Lunzmann';
export const siteTitle = "Lucas's Landing Page";

export default function Layout({ children, home }) {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/images/profile.jpg" />

        <meta
          name="description"
          content="Learn about Lucas"
        />
        <meta
          property="og:image"
          src={`/public/images/profile.jpg(
            siteTitle,
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <header>
        {home ? (
          <>
          <div>
            <motion.div
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 1.3 }}>
            <Image class="m-auto rounded-full drop-shadow-2xl hover:shadow-xl hover:shadow-indigo-300/100"
              priority
              src="/images/profile.jpg"
              height={200}
              width={200}
              alt=""
            /></motion.div>

            </div>
            <br></br><br></br>
            <h2 class="font-sans text-center text-lg uppercase tracking-widest">Welcome to my page</h2>
            <h1 className="text-center font-sans font-bold text-6xl text-zinc-800">{name}</h1>
          </>
        ) : (
          <>
            <Link href="/">
              <Image class="m-auto rounded-full drop-shadow-2xl"
                priority
                src="/images/profile.jpg"
                height={150}
                width={150}
                alt=""
              />
            </Link>
            
          </>
        )}
      </header>
      <main>{children}</main>
      {!home && (
        <div className="text-blue-600 text-center font-bold">
          <Link href="/">← Back to home</Link>
        </div>
      )}
    </div>
  );
      }