import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import { FaWordpressSimple } from 'react-icons/fa';
import { FiFramer } from 'react-icons/fi';
import { FiFigma } from 'react-icons/fi';
import { DiPhotoshop } from 'react-icons/di';
import { SiCanva } from 'react-icons/si';
import { SiNextdotjs } from 'react-icons/si';
import { SiNotion } from 'react-icons/si';
import Link from 'next/link';
import Date from '../components/date';
import { getSortedPostsData } from '../lib/posts';

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}
export default function Home({ allPostsData}) {
  return (
    <Layout home>
      <Head>
        <title>Lucas's Site</title>
      </Head>
      <br></br>
      <section className="font-sans text-lg">
        <div class="container w-1/2 mx-auto text-justify">
          <p>I am a proud Creighton University bluejay and <a class="hover:underline text-blue-600" href="https://www.creighton.edu/business/undergraduate/leadership-career-development/scott-scholars">Scott Scholar</a>. I plan to major in FinTech and minor in Computer Science.
            I work as a Business Development Associate at <a class="hover:underline text-blue-600" href="https://datafeel.com/">DataFeel®</a> - a tech startup right here in Omaha!
          <br></br><br></br>
            Outside of work and school you can find me running a PPL split at the gym, with my head deep in code, or at the nearest Chipotle.
          <br></br><br></br>
            Humility + Curiosity. 
          </p>
        </div>
      </section>
        <br></br><br></br><br></br>

      <div>
        <h3 class="font-sans uppercase text-lg text-center tracking-widest">Always Learning</h3>
        <h2 className= "text-center text-5xl text-blue-600 font-bold">
          Value-Add Skills</h2>
        <br></br><br></br>
      </div>
<div className= "container w-4/6 mx-auto ">
  <div className="flex">
    <div className="w-1/3 mr-5 bg-white rounded-lg px-4 py-6 ring-1 ring-slate-900/5 shadow-xl transition ease-in-out delay-150 duration-500 hover:-translate-y-1 hover:scale-110">
      <h3 class="text-slate-900 text-xl font-sans font-semibold tracking-tight">Web Development</h3>
      <p class="text-slate-500 mt-2 text-sm">Telling a story using tools like WordPress and Framer.</p> <br></br>
        <div className="flex">
         <a href="https://wordpress.org/">< FaWordpressSimple className="mb-2 text-2xl mr-2 hover:text-blue-600"/></a> <a href="https://www.framer.com/">< FiFramer className="mb-2 text-2xl hover:text-violet-600"/></a>
        </div>
    </div>
    <div class="w-1/3 mr-5 bg-white rounded-lg px-4 py-6 ring-1 ring-slate-900/5 shadow-xl transition ease-in-out delay-150 duration-500 hover:-translate-y-1 hover:scale-110">
      <h3 class="text-slate-900 text-xl font-sans font-semibold tracking-tight">Graphic Design</h3>
      <p class="text-slate-500 mt-2 text-sm">Communicating with clear visuals using Figma, Photoshop, and Canva.</p> <br></br>
      <div className="flex">
         <a href="https://www.figma.com/">< FiFigma className="mb-2 text-2xl mr-2 hover:text-fuchsia-600	"/></a> <a href="https://www.adobe.com/products/photoshop.html?promoid=RBS7NL7F&mv=other">< DiPhotoshop className="mb-2 text-2xl mr-3 hover:text-rose-600"/></a> <a href="https://www.canva.com/">< SiCanva className="mb-2 text-2xl hover:text-cyan-400"/></a>
      </div>
    </div>
    <div class="w-1/3 bg-white rounded-lg px-4 py-6 ring-1 ring-slate-900/5 shadow-xl transition ease-in-out delay-150 duration-500 hover:-translate-y-1 hover:scale-110">
      <h3 class="text-slate-900 text-xl font-sans font-semibold tracking-tight">Coding</h3>
      <p class="text-slate-500 mt-2 text-sm">Turning ideas into products using the industry standard - Next.js.</p> <br></br>
      <div className="flex">
         <a href="https://nextjs.org/"> < SiNextdotjs className="mb-2 text-2xl mr-2 hover:text-blue-600"/></a>
      </div>
    </div>
  </div>
  <br></br>
  <div className="flex">
    <div className="w-1/3 mr-5 bg-white rounded-lg px-4 py-6 ring-1 ring-slate-900/5 shadow-xl transition ease-in-out delay-150 duration-500 hover:-translate-y-1 hover:scale-110">
      <h3 className="text-slate-900 text-xl font-sans font-semibold tracking-tight">Notion</h3>
      <p className="text-slate-500 mt-2 text-sm">Creating robust yet effective workspaces and systems.</p> <br></br>
      <div className="flex">
         <a href="https://www.notion.so/">< SiNotion className="mb-2 text-2xl mr-2 hover:text-yellow-500"/></a>
      </div>
    </div>
    <div class="w-1/3 mr-5 bg-white rounded-lg px-4 py-6 ring-1 ring-slate-900/5 shadow-xl transition ease-in-out delay-150 duration-500 hover:-translate-y-1 hover:scale-110">
      <h3 class="text-slate-900 text-xl font-sans font-semibold tracking-tight">Copywriting</h3>
      <p class="text-slate-500 mt-2 text-sm">Unleashing the combined power of both concise and creative wording.</p> <br></br>
    </div>
    <div class="w-1/3 bg-white rounded-lg px-4 py-6 ring-1 ring-slate-900/5 shadow-xl transition ease-in-out delay-150 duration-500 hover:-translate-y-1 hover:scale-110">
      <h3 class="text-slate-900 text-xl font-sans font-semibold tracking-tight">Research Analysis</h3>
      <p class="text-slate-500 mt-2 text-sm">Sifting through the fluff to reveal actionable insights.</p> <br></br>
    </div>
  </div>
</div>
<br></br><br></br><br></br><br></br><br></br>
<section>
  <h3 class="font-sans uppercase text-lg text-center tracking-widest">Read my thoughts</h3>
        <h2 className= "text-center text-5xl text-blue-600 font-bold">Writing Collection</h2>
          <br></br><br></br>
          {allPostsData.map(({ id, date, title }) => (
            <li className= "w-1/2 font-sans text-lg mb-8 list-none container mx-auto bg-white rounded-lg px-4 py-6 ring-1 ring-slate-900/5 shadow-md hover:-translate-y-1 hover:scale-105 transition ease-in-out delay-150 duration-500"key={id}>
              <Link className="text-blue-600 font-semibold hover:underline" href={`/posts/${id}`}>{title}</Link>
              <br />
              <small>
                <Date className="font-sans"dateString={date} />
              </small>
            </li>
          ))}
</section>

    </Layout>
  );
};