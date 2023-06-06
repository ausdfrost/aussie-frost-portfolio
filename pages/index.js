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
	  <p>Howdy, I'm <b>Aussie Frost</b>, a third year Data Science student working in UO's Computational Social Neuroscience Lab. 
	  If you have any inquiries, or would just like to chat, feel free to email! You can also check out my projects on GitHub and connect with me on LinkedIn. ✌️</p>
	</div>	
	<div>
	  <a href="mailto:afrost6@uoregon.edu">Email</a> 
	  <a href="https://github.com/austinfroste">GitHub</a> 
	  <a href="https://csnl.uoregon.edu/people">CSNLab</a> 
	  <a href="https://www.linkedin.com/in/austinfroste">LinkedIn</a>
	</div>
      </body>
    </div>
  )
}
