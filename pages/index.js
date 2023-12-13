import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Aussie Frost Portfolio</title>
            <link rel="stylesheet" href="styles.css">
            <link rel="icon" href="/favicon.ico" />
        </head>
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
        </html>
    </div>

        
  )
}
