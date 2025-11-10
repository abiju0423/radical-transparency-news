import React from 'react';

export default function HomePage() {
  return (
    <main>
      <header>
        <h1>Radical Transparency News</h1>
        <nav>
          <a href='/politics'>Politics</a> |
          <a href='/finance'>Finance</a> |
          <a href='/tech'>Tech</a> |
          <a href='/wildlife'>Wildlife</a> |
          <a href='/science'>Science</a> |
          <a href='/world'>World</a>
        </nav>
      </header>
      <section>
        <h2>Trending Stories</h2>
        <ul>
          {/* Example stories - future: render from backend feed */}
          <li><a href='/story/1'>AI Synthesis: $50B Bill Passed</a></li>
          <li><a href='/story/2'>Wildlife Conservation Successes</a></li>
        </ul>
      </section>
      <section>
        <h2>Conflict Feed</h2>
        <em>Stories with highest media disagreement will go here.</em>
      </section>
      <footer>
        <a href='/ai-constitution'>See AI Constitution</a>
      </footer>
    </main>
  );
}
