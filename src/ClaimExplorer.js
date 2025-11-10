import React, { useState } from 'react';

export default function ClaimExplorer({ claims }) {
  const [selected, setSelected] = useState(null);

  return (
    <section>
      <h3>Claim Explorer</h3>
      <ul>
        {claims.map((c,i)=>(
          <li key={i}>
            <button onClick={()=>setSelected(i)}>
              {c.text}
            </button>
            {selected===i && (
              <div>
                <b>Sources:</b>
                <ul>
                  {c.sources.map((src,j)=>(<li key={j}>{src}</li>))}
                </ul>
                <b>Disputed:</b> {c.disputed?"Yes":"No"}
                <b>Consensus:</b> {c.consensus?"Yes":"No"}
              </div>
            )}
          </li>
        ))}
      </ul>
      {claims.length===0 && <em>No claims available yet.</em>}
    </section>
  );
}
