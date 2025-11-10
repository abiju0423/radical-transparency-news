import React from 'react';

export default function TransparencyReport({storyId}) {
  // This dummy data structure will later come from backend API fetch:
  const report = {
    glassBox: {
      sources: 28,
      bias: {left: 10, center: 11, right: 7},
      consensus: 5,
      disputes: 2,
      constitution: ['Rule 1','Rule 2','Rule 4']
    },
    article: `<h2>AI Synthesis for Story #{storyId || 1}</h2><p>A $50B bill was passed today, funding green energy. All sources confirm this will add $40B to the national debt.</p>`,
    pointsOfConflict: [
      {topic: 'Crowd size', details: 'Organizers (10,000), Police (2,000)'}
    ],
    narrativeSpectrum: [
      {side: 'Left', narrative: 'Focus on investment/healthcare'},
      {side: 'Right', narrative: 'Focus on debt/reckless spending'}
    ],
    sources: ['NYT','Fox News','Reuters']
  };

  return (
    <section>
      <div className='glass-box'>
        <h3>Glass Box: Transparency Metrics</h3>
        <ul>
          <li>Sources scanned: {report.glassBox.sources}</li>
          <li>Source Bias: {`Left: ${report.glassBox.bias.left}, Center: ${report.glassBox.bias.center}, Right: ${report.glassBox.bias.right}`}</li>
          <li>Facts: {report.glassBox.consensus} consensus, {report.glassBox.disputes} disputes</li>
          <li>Constitution Rules: {report.glassBox.constitution.join(', ')}</li>
        </ul>
      </div>
      {/* Synthesized article body (eventually sanitized or markdown rendered) */}
      <div className='ai-article' dangerouslySetInnerHTML={{__html: report.article}} />
      <div className='conflict'>
        <h4>Points of Conflict</h4>
        <ul>
          {report.pointsOfConflict.map((c, i) => <li key={i}>{c.topic}: {c.details}</li>)}
        </ul>
      </div>
      <div className='narrative-spectrum'>
        <h4>Narrative Spectrum</h4>
        <ul>
          {report.narrativeSpectrum.map((narr, i) => <li key={i}>{narr.side}: {narr.narrative}</li>)}
        </ul>
      </div>
      <div className='sources'>
        <h4>Full Source List</h4>
        <ul>
          {report.sources.map((s,i) => <li key={i}>{s}</li>)}
        </ul>
      </div>
    </section>
  );
}