import { useState, useEffect } from 'react';
import { useTheme } from './context/ThemeContext';
import { PageType } from './types';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { SagaPage } from './pages/SagaPage';
import { AboutPage } from './pages/AboutPage';
import { StoriesPage } from './pages/StoriesPage';
import { InsightsPage } from './pages/InsightsPage';
import { ResearchPage } from './pages/ResearchPage';
import { ContactPage } from './pages/ContactPage';
import { LegalPage } from './pages/LegalPage';
import { ReservationModal } from './components/ReservationModal';
import { FloatingCourseBar } from './components/FloatingCourseBar';

export default function App() {
  const { isLight } = useTheme();
  const [currentPage, setCurrentPage] = useState<PageType>('home');
  const [isReservationOpen, setIsReservationOpen] = useState(false);

  // Scroll to top on page switch
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentPage]);

  const handleNavigate = (page: PageType, sectionId?: string) => {
    if (page !== currentPage) {
      setCurrentPage(page);
      if (sectionId && sectionId !== 'top') {
        setTimeout(() => {
          const el = document.getElementById(sectionId);
          if (el) {
            el.scrollIntoView({ behavior: 'smooth' });
          }
        }, 100);
      }
    } else {
      if (sectionId === 'top') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else if (sectionId) {
        const el = document.getElementById(sectionId);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }
  };

  return (
    <div className={`min-h-screen flex flex-col transition-colors duration-200 ${
      isLight 
        ? 'bg-[#fcfbf9] text-[#0f172a] selection:bg-[#c99a4e]/20 selection:text-[#9a6922]' 
        : 'bg-[#080c15] text-[#e2e8f0] selection:bg-[#c99a4e]/25 selection:text-[#f3d99d]'
    }`}>
      {/* Top Reusable Navbar */}
      <Navbar
        currentPage={currentPage}
        onNavigate={handleNavigate}
        onOpenReservation={() => setIsReservationOpen(true)}
      />

      {/* Main Content Area */}
      <main className="flex-1 w-full">
        {currentPage === 'home' && (
          <HomePage
            onNavigateToCourse={() => handleNavigate('saga', 'top')}
            onOpenReservation={() => setIsReservationOpen(true)}
          />
        )}

        {currentPage === 'saga' && (
          <SagaPage
            onOpenReservation={() => setIsReservationOpen(true)}
            onNavigateToHome={() => handleNavigate('home', 'top')}
          />
        )}

        {currentPage === 'about' && (
          <AboutPage
            onNavigateToCourse={() => handleNavigate('saga', 'top')}
            onOpenReservation={() => setIsReservationOpen(true)}
          />
        )}

        {currentPage === 'stories' && (
          <StoriesPage
            onOpenReservation={() => setIsReservationOpen(true)}
            onNavigateToCourse={() => handleNavigate('saga', 'top')}
          />
        )}

        {currentPage === 'insights' && (
          <InsightsPage
            onOpenReservation={() => setIsReservationOpen(true)}
            onNavigateToCourse={() => handleNavigate('saga', 'top')}
          />
        )}

        {currentPage === 'research' && (
          <ResearchPage
            onNavigateToCourse={() => handleNavigate('saga', 'top')}
            onOpenReservation={() => setIsReservationOpen(true)}
          />
        )}

        {currentPage === 'contact' && (
          <ContactPage
            onOpenReservation={() => setIsReservationOpen(true)}
          />
        )}

        {(currentPage === 'disclaimer' || currentPage === 'privacy' || currentPage === 'refund' || currentPage === 'terms') && (
          <LegalPage
            initialTab={currentPage}
            onNavigate={handleNavigate}
          />
        )}
      </main>

      {/* Course-Focused Floating Bottom Bar with Auto-Hide when Course/Reserve Buttons are visible */}
      <FloatingCourseBar
        onNavigateToCourse={() => handleNavigate('saga', 'top')}
        onOpenReservation={() => setIsReservationOpen(true)}
        isCoursePage={currentPage === 'saga'}
      />

      {/* Full Reusable Footer */}
      <Footer
        onNavigate={handleNavigate}
        onOpenReservation={() => setIsReservationOpen(true)}
      />

      {/* ₹99 Eye-Opener Reservation Modal */}
      <ReservationModal
        isOpen={isReservationOpen}
        onClose={() => setIsReservationOpen(false)}
      />
    </div>
  );
}
