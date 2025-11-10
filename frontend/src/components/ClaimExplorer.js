import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
export default function ClaimExplorer() {
  const { storyId } = useParams();
  const [claims, setClaims] = useState([]);
  useEffect(() => {
    axios.get(`/api/claims/${storyId}`)
      .then(r => setClaims(r.data.claims));
  }, [storyId]);
  return (
    <div>
      <h2>Claim Transparency</h2>
      <ul>
        {claims.map(claim => (
          <li key={claim.id}>
            <span>{claim.text}</span> | Sources: {claim.sources.join(', ')} | Disputed: {claim.disputed ? 'Yes' : 'No'}
          </li>
        ))}
      </ul>
    </div>
  );
}
