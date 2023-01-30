import Head from 'next/head';
import Image from 'next/image';
import styles from './layout.module.css';
import utilStyles from '../styles/utils.module.css';
import Link from 'next/link';

const name = 'Lucas Lunzmann';
export const siteTitle = 'Next.js Sample Website';

export default function Layout({ children, home }) {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Learn how to build a personal website using Next.js"
        />
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle,
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <header>
        {home ? (
          <>
            <Image class="m-auto rounded-full drop-shadow-2xl"
              priority
              src="/images/profile.jpg"
              height={200}
              width={200}
              alt=""

            />
            <br></br><br></br>
            <h2 class="font-sans text-center text-lg uppercase tracking-widest">Welcome to my page</h2>
            <h1 className="text-left text-center font-sans font-bold text-6xl text-blue-600">{name}</h1>
          </>
        ) : (
          <>
            <Link class="m-auto rounded-full drop-shadow-2xl" href="/">
              <Image
                priority
                src="/images/profile.jpg"
                height={108}
                width={108}
                alt=""
              />
            </Link>
            <h2 className="text-center text-5xl text-blue-600 font-bold">
              <Link href="/">
                {name}
              </Link>
            </h2>
          </>
        )}
      </header>
      <main>{children}</main>
      {!home && (
        <div className="text-blue-600 font-bold">
          <Link href="/">← Back to home</Link>
        </div>
      )}
    </div>
  );
}