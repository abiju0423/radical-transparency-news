import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './HomePage';
import SectionPage from './SectionPage';
import StoryPage from './StoryPage';
import AIConstitution from './AIConstitution';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/ai-constitution' element={<AIConstitution />} />
        <Route path='/:section' element={<SectionPage section={'Politics'} />} />
        <Route path='/story/:storyId' element={<StoryPage storyId={1} />} />
      </Routes>
    </Router>
  );
}
