import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>@aussiefroste | Aussie Frost</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <body>
        <div>
	  <p>Howdy, I'm <b>Aussie Frost</b>, a rising fourth year Data Science student working in UO's <a href="https://csnl.uoregon.edu/people">Computational Social Neuroscience Lab</a>. 
	  	If you have any inquiries, or would just like to chat, feel free to <a href="mailto:afrost6@uoregon.edu">email</a>! 
		You can also check out my projects on <a href="https://github.com/austinfroste">GitHub</a>
		and connect with me on <a href="https://www.linkedin.com/in/austinfroste">LinkedIn</a>. ✌️
	  </p>
	</div>
      </body>
    </div>
  )
}
