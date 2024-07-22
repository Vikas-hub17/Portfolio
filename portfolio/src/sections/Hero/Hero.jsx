import React from 'react';
import Styles from './HeroStyles.modules.css';

function Hero() {
  return (
    <Section id="Hero">

        <div>
        <img src="/assets/hero-img-Cqh1d5RO.png" class="_hero_1264w_10" alt="Profile picture of Harris Johnsen" />
        <h1>Harris <br /> Johnsen</h1>
        <h2>Frontend Developer </h2>
        <span>
        <a href="https://twitter.com/" target="_blank"><img class="hover" src="" alt="Dark GitHub Logo" /> </a>
        <a href="https://www.linkedin.com/" target="_blank"><img class="hover" src="" alt="Dark Linkedin Logo" /> </a>
        </span>
        <p class="_description_1264w_68">With a passion for developing modern React web apps for commercial businesses.</p>
        <a href="/assets/cv-D4NMZrO6.pdf" download=""><button class="hover" download="">Resume</button></a>
        </div>

    </Section>
  )
}

export default Hero