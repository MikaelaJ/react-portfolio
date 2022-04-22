import React from 'react'
import Head from 'next/head'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function About() {
  return (
    <div className="">
    <div className="container h-full">
      <Head>
        <title>About</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main>
        <section className="">
          <div className="flex flex-row">
            <div className="h-screen basis-1/4 space-y-6">
              <h1>About me</h1>
            </div>
            <div className="basis-1/4">
              <p>Some boring text about me... </p>
            </div>
          </div>
          <img src="" alt="" />
        </section>
      </main>
      <Footer />
    </div>
  </div>
  )
}