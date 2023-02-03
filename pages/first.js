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
import BlogLayout from '../components/layout';

export default function Home({ allPostsData}) {
  return (
    <Layout children>
        <title>Lucas's Blog</title>
      <br></br>
      
      <div className="mx-auto w-2/3 bg-white hover:shadow-lg hover:shadow-purple-500/50 rounded-lg px-4 py-6 ring-1 ring-slate-900/5 shadow-xl">
        <span className= "text-5xl bg-clip-text text-transparent bg-gradient-to-r from-purple-500 via-fuchsia-500 to-orange-500 font-bold">
          1,000 Rep Workout</span><br></br>
          <h3 class="text-slate-900 text-xl font-sans tracking-widest mt-2 mb-1">January 31, 2022</h3><hr></hr><br></br>
      <div class="text-slate-900 mt-2 text-lg">
        <h1 className="text-xl font-bold mb-1">Overtraining Is a Myth</h1>
        <p>This is what experts will tell you.</p>
      
      
      
      
      
      
      
      </div><br></br>
    </div>
    <br></br>
    </Layout>
  );
};

