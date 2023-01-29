import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>Lucas's Site</title>
      </Head>
      <br></br>
      <section className="font-sans text-lg">
        <p>I am a proud Creighton University bluejay and Scott Scholar. I plan to major in FinTech and minor in Computer Science.
          I work as a Business Development Associate at <u><a class="hover:text-blue-600" href="https://datafeel.com/">DataFeel®</a></u> - a tech startup right here in Omaha, Nebraska!
        <br></br><br></br>
          Outside of work and school you can find me running a PPL split at the gym, with my head deep in code, or at the nearest Chipotle.
        <br></br><br></br>
          Humility + Curiosity.
        </p>
      </section>
        <br></br><br></br><br></br>
        <h3 class="font-sans uppercase text-lg text-center tracking-widest">Always Learning</h3>
        <h2 className= "text-center text-5xl text-blue-600 font-bold">
          Value-Add Skills</h2>
        <p> <br></br>
          <table class="font-sans text-lg m-auto">
            <tr><td>1.</td><td> Notion</td></tr>
            <tr><td>2.</td><td> Canva</td></tr>
            <tr><td>3.</td><td> WordPress</td></tr>
            <tr><td>4.</td><td> Next.js</td></tr>
            <tr><td>5.</td><td> Copywriting</td></tr>
          </table>
        </p>
    </Layout>
  );
}