import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import SectionPage from './components/SectionPage';
import StoryPage from './components/StoryPage';
import ClaimExplorer from './components/ClaimExplorer';
import TransparencyReport from './components/TransparencyReport';
import ConstitutionPage from './components/ConstitutionPage';
import Login from './components/Login';
import AuthContextProvider from './context/AuthContext';

function App() {
  return (
    <AuthContextProvider>
      <Router>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/section/:section' element={<SectionPage />} />
          <Route path='/story/:id' element={<StoryPage />} />
          <Route path='/claims/:storyId' element={<ClaimExplorer />} />
          <Route path='/transparency' element={<TransparencyReport />} />
          <Route path='/constitution' element={<ConstitutionPage />} />
          <Route path='/login' element={<Login />} />
        </Routes>
      </Router>
    </AuthContextProvider>
  );
}
export default App;
