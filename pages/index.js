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
	    <main>
	        <section class="profile">
	            <div class="profile-picture"></div>
	            <h1>Aussie Frost</h1>
	            <div class="social-links">
	            </div>
	  	    <p>Hey! My name is Aussie Frost, and I am a fourth year Data Science student at the University of Oregon. 
	  		I am focused on leveraging my skills as a data scientist to help people in a significant way. 
	  		Outside of work, I enjoy going on adventures with my dog, writing music, and cooking. 
	  		As for work, I enjoy every detail of working with data to solve high-level problems in both creative and impactful ways.
		    </p>
	        </section>
	  /*
	        <section class="additional-content" id="projects">
	            <h2>projects coming soon... visit <a href="https://github.com/austinfroste">GitHub</a> in the meantime.</h2>
	        </section>
	 */
	    </main>
	</body>
    </div>
  )
}
