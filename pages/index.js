import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>Lucas's Site</title>
      </Head>
      <br></br>
      <section className="font-sans text-lg">
        <p>Hey! My name is <b>Lucas Lunzmann</b> and I am a Business Development Associate at <u><a class="hover:text-blue-600" href="https://datafeel.com/">DataFeel®</a></u> in Omaha, NE.
        <br></br><br></br>
        This is my very first Next.js web app and I seriously could not be more excited! This basic little page is such a meanigful win for me. This is the outcome of months and months of learning, failing, and creating a daily habit of coding.
        <br></br><br></br>
        I feel like the floodgates have opened - we have crossed off a major barrier of entry. It's just a matter of time before we start shipping. 🚢
        </p>
      </section>
        <br></br><br></br>
        <h3 class="font-sans uppercase text-lg text-center">Always Learning</h3>
        <h2 className= "text-center text-5xl text-blue-600 font-bold">
          Value-Add Skills</h2>
        <p> <br></br>
          <table class="m-auto">
            <tr><td>1.</td><td>Notion</td></tr>
            <tr><td>2.</td><td>Canva</td></tr>
            <tr><td>3.</td><td>WordPress</td></tr>
            <tr><td>4.</td><td>Next.js</td></tr>
            <tr><td>5.</td><td>Copywriting</td></tr>
          </table>
        </p>
    </Layout>
  );
}