import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// هاذا بيستورد القطع اللي بتخاوينا في كل صفحة
import Header from './components/Header';
import Footer from './components/Footer';
import WelcomeSection from './components/WelcomeSection';
import WhyMadarSection from './components/WhyMadarSection';

//اللي يقولو عليها برقر يستوور مكونات الصفحة الرئيسية
import TutorialsPage from './pages/TutorialsPage';
import ToolsPage from './pages/ToolsPage';
import AboutPage from './pages/AboutPage';
import NotesPage from './pages/NotesPage';

// يستورد مكونات المقالات راح تحدث هنا في كل مرا تضيف صفحة ياوحش هههههه
import IntroPentestingArticle from './articles/IntroPentestingArticle';
import MalwareHandlingArticle from './articles/MalwareHandlingArticle';
import SqlInjectionArticle from './articles/SqlInjectionArticle';
import WifiSecurityArticle from './articles/WifiSecurityArticle';

// استيراد مكون صفحة 404 المخصصة
import NotFoundPage from './NotFoundPage'; // تأكد من المسار الصحيح لهذا الملف

// بيانات الموقع الثابتة (Mock Data)
const pageData = {
  header: {
    logoText: 'Madar',
    navLinks: [
      { name: 'Home', path: '/', active: true },
      { name: 'Tutorials', path: '/tutorials' },
      { name: 'Tools', path: '/tools' },
      { name: 'who am i', path: '/about' },
      { name: 'notes', path: '/notes' },
    ],
  },
  welcome: {
    title: 'مرحباً بك في عالم ',
    highlight: 'Madar',
    description: 'Madar هو مشروع شخصي يهدف إلى إثراء المحتوى العربي في مجال الأمن السيبراني. هنا، أشارك خبراتي في <strong>اكتشاف الثغرات</strong>، أقدم <strong>شروحات عملية</strong>، <strong>أستعرض أدوات قوية</strong> لمساعدتك في رحلتك نحو عالم الاختراق الأخلاقي.',
    buttonText: 'ابدأ رحلتك معنا!',
    buttonLink: '/tutorials', // الرابط يشير الآن إلى مسار React Router قد زبطناها في نفس ذا الملف تحت
  },
  whyMadar: {
    title: 'لماذا تختار ',
    highlight: 'Madar ',
    items: [
      { icon: 'fa-book-open', title: 'شروحات متعمقة', description: 'مقالات وشروحات تفصيلية تغطي أحدث تقنيات اكتشاف الثغرات والأمن السيبراني، مناسبة لكل المستويات.' },
      { icon: 'fa-screwdriver-wrench', title: 'أدوات عملية', description: 'مجموعة من الأدوات الموصى بها والمطوّرة خصيصاً لمساعدتك في مهامك الأمنية.' },
      { icon: 'fa-lightbulb', title: 'تجارب واقعية', description: 'أشارك معك خلاصة تجاربي الشخصية والدروس المستفادة من مشاريع الأمن السيبراني.' },
    ],
  },
  footer: {
    socialLinks: [
      { href: 'https://x.com/sb3ly', icon: 'fab fa-twitter', label: 'Twitter' },
      { href: 'https://github.com/sb3ly', icon: 'fab fa-github', label: 'GitHub' },
      { href: '#', icon: 'fab fa-linkedin-in', label: 'LinkedIn' },
    ],
    copyright: '© 2025 Madar. جميع الحقوق محفوظة.',
  },
};

// هاذا بيجمع بين قطعتين whymadara و welcome
function HomePage() {
  return (
    <main id="main-content-wrapper">
      <WelcomeSection data={pageData.welcome} />
      <WhyMadarSection data={pageData.whyMadar} />
    </main>
  );
}

function App() {
  return (
    <Router basename="/madar">
      <div className="app-wrapper">
        <Header data={pageData.header} />

        <Routes>
          {/* المسار الأساسي (الصفحة الرئيسية) */}
          <Route path="/madar" element={<HomePage />} />
          <Route path="/tutorials" element={<TutorialsPage />} />
          <Route path="/tools" element={<ToolsPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/notes" element={<NotesPage />} />

          {/* مسار الشروحات بتعدل هنا كل ماتضيف صقحة في الشروحات */}
          <Route path="/tutorials/intro-pentesting" element={<IntroPentestingArticle />} />
          <Route path="/tutorials/malware-handling" element={<MalwareHandlingArticle />} />
          <Route path="/tutorials/sql-injection" element={<SqlInjectionArticle />} />
          <Route path="/tutorials/wifi-security" element={<WifiSecurityArticle />} />

          {/* الشي اللي بيطلع لو المسار غلط - الآن يستخدم مكون NotFoundPage */}
          <Route path="*" element={<NotFoundPage />} />
        </Routes>

        <Footer data={pageData.footer} />
      </div>
    </Router>
  );
}

export default App;
