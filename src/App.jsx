import { useEffect } from 'react';
import { Navigate, Route, Routes, useLocation, useNavigate, useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Footer from './components/Footer.jsx';
import Navbar from './components/Navbar.jsx';
import ScrollToTop from './components/ScrollToTop.jsx';
import { languages } from './i18n.js';
import About from './pages/About.jsx';
import Academics from './pages/Academics.jsx';
import Admissions from './pages/Admissions.jsx';
import Contact from './pages/Contact.jsx';
import Faculty from './pages/Faculty.jsx';
import Gallery from './pages/Gallery.jsx';
import Home from './pages/Home.jsx';
import Notices from './pages/Notices.jsx';
import StudentCorner from './pages/StudentCorner.jsx';

function LanguageLayout() {
  const { lang } = useParams();
  const { i18n } = useTranslation();
  const navigate = useNavigate();
  const location = useLocation();
  const activeLanguage = languages[lang] ? lang : 'en';
  const languageMeta = languages[activeLanguage];

  useEffect(() => {
    if (!languages[lang]) {
      navigate(`/en${location.pathname.replace(/^\/[^/]+/, '')}`, { replace: true });
      return;
    }

    if (i18n.language !== activeLanguage) {
      i18n.changeLanguage(activeLanguage);
    }

    localStorage.setItem('school-language', activeLanguage);
    document.documentElement.lang = activeLanguage;
    document.documentElement.dir = languageMeta.dir;
    document.body.className = languageMeta.fontClass;
  }, [activeLanguage, i18n, lang, languageMeta.dir, languageMeta.fontClass, location.pathname, navigate]);

  return (
    <div className="min-h-screen bg-stone-50 text-neutral-900">
      <ScrollToTop />
      <Navbar />
      <main id="main-content">
        <Routes>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="admissions" element={<Admissions />} />
          <Route path="academics" element={<Academics />} />
          <Route path="faculty" element={<Faculty />} />
          <Route path="gallery" element={<Gallery />} />
          <Route path="notices" element={<Notices />} />
          <Route path="student-corner" element={<StudentCorner />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<Navigate to={`/${activeLanguage}`} replace />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default function App() {
  const storedLanguage = localStorage.getItem('school-language');
  const defaultLanguage = languages[storedLanguage] ? storedLanguage : 'en';

  return (
    <Routes>
      <Route path="/" element={<Navigate to={`/${defaultLanguage}`} replace />} />
      <Route path="/:lang/*" element={<LanguageLayout />} />
    </Routes>
  );
}
