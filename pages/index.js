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
	    <header>
	        <nav>
	            <ul>
	                <li><a href="#projects">Projects</a></li>
	                <li><a href="#experience">Experience</a></li>
	                <li><a href="#about">About</a></li>
	            </ul>
	        </nav>
	    </header>
	    <main>
	        <section class="profile">
	            <div class="profile-picture"></div>
	            <h1>Aussie Frost</h1>
	            <div class="social-links">
	                <!-- Icons would go here -->
	            </div>
	            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam</p>
	        </section>
	        <section class="additional-content">
	            <h2>Round Robin Person Decoding</h2>
	            <!-- Additional content goes here -->
	        </section>
	    </main>
	</body>
    </div>
  )
}
