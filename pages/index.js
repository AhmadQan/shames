import Head from "next/head";
import { Inter } from "@next/font/google";
import styles from "../styles/Home.module.css";

import Hero from "../components/sections/Hero";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="bg-yellowDark h-auto ">
        <div className="absolute top-0 -left-1/3 h-2/3 w-screen bg-white opacity-25 rounded-full blur-xl" />
        <Hero />
      </main>
    </>
  );
}
