import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import Loading from './components/Loading.jsx';
import './index.css';

// Simple router implementation
const Router = () => {
  const path = window.location.pathname;
  
  if (path === '/projects') {
    const ProjectsPage = React.lazy(() => import('./pages/Projects.jsx'));
    return (
      <React.Suspense fallback={<Loading />}>
        <ProjectsPage />
      </React.Suspense>
    );
  }
  
  if (path === '/photography') {
    const PhotographyPage = React.lazy(() => import('./pages/Photography.jsx'));
    return (
      <React.Suspense fallback={<Loading />}>
        <PhotographyPage />
      </React.Suspense>
    );
  }
  
  if (path === '/photography-contact') {
    const PhotographyContactPage = React.lazy(() => import('./pages/PhotographyContact.jsx'));
    return (
      <React.Suspense fallback={<Loading />}>
        <PhotographyContactPage />
      </React.Suspense>
    );
  }
  
  return <App />;
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router />
  </React.StrictMode>,
);
