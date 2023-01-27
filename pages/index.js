import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>Lucas's Site</title>
      </Head>
      <section className={utilStyles.headingMd}>
      <br></br>
        <p>Hey! My name is <b>Lucas Lunzmann</b> and I am Business Development Associate at <a href="https://datafeel.com/">DataFeel®</a> in Omaha, NE.</p>
        <br></br>
        <p>This is my very first Next.js web app and I seriously could not be more excited! This basic little page is such a meanigful win for me. This is the outcome of months and months of learning, failing, and creating a daily habit of coding.</p>
        <br></br>
        <p>I feel like the floodgates have opened - we have crossed off a major barrier of entry. It's just a matter of time before we start shipping. 🚢</p>
        <br></br>
        <h2 className= "text-3xl font-bold">
          Skills</h2>
        <hr></hr>
        <p>
          <table>
            <tr><td>1.</td><td>Notion</td></tr>
            <tr><td>2.</td><td>Canva</td></tr>
            <tr><td>3.</td><td>WordPress</td></tr>
            <tr><td>4.</td><td>Next.js</td></tr>
            <tr><td>5.</td><td>Copywriting</td></tr>
          </table>
        </p>
        
      </section>
    </Layout>
  );
}