import React, { useState, useEffect } from 'react';
import { Download, ExternalLink, Mail, Award, BookOpen, Newspaper, GraduationCap, User, Menu, X } from 'lucide-react';

const LeviKaplanPortfolio = () => {
  const [activeSection, setActiveSection] = useState('about');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const sections = [
    { id: 'about', label: 'About', icon: User },
    { id: 'education', label: 'Education', icon: GraduationCap },
    { id: 'publications', label: 'Publications', icon: BookOpen },
    { id: 'press', label: 'Press', icon: Newspaper },
    { id: 'awards', label: 'Awards', icon: Award },
  ];

  const publications = [
    {
      title: "When 'For You' Isn't For You: Measuring User Agency in TikTok's Algorithmic Feed",
      authors: "Levi Kaplan, Devin Patel, Nicole Gerzon, Piotr Sapiezynski, Alan Mislove",
      venue: "In Submission, International Conference of Web and Social Media, 2025",
      status: "submitted"
    },
    {
      title: "On the Use of Proxies in Political Ad Targeting",
      authors: "Piotr Sapiezynski, Levi Kaplan, Alan Mislove, Aleksandra Korolova",
      venue: "Computer Supported Cooperative Work, 2024",
      status: "published"
    },
    {
      title: "Data deserts and black boxes: The impact of socio-economic status on consumer profiling",
      authors: "Nico Neumann, Catherine E. Tucker, Levi Kaplan, Piotr Sapiezynski, Alan Mislove",
      venue: "Management Science, 2024",
      status: "published"
    },
    {
      title: "Measurement and Analysis of Implied Identity in Ad Delivery Optimization",
      authors: "Levi Kaplan, Nicole Gerzon, Alan Mislove, Piotr Sapiezynski",
      venue: "Internet Measurement Conference, 2022",
      status: "published",
      award: "Best Paper Award"
    },
    {
      title: "Algorithms that \"Don't See Color\": Measuring Biases in Lookalike and Special Ad Audiences",
      authors: "Piotr Sapiezynski, Avijit Ghosh, Levi Kaplan, Aaron Rieke, Alan Mislove",
      venue: "Artificial Intelligence, Ethics, and Society, 2022",
      status: "published",
      award: "Runner-Up, Best Student Paper Award"
    }
  ];

  const pressItems = [
    {
      outlet: "Gizmodo",
      year: "2022",
      title: "Facebook Segments Ads by Race and Age Based on Photos Whether Advertisers Want It or Not, Study Says"
    },
    {
      outlet: "ProPublica",
      year: "2022",
      title: "Facebook Finally Agrees to Eliminate Tool That Enabled Discriminatory Advertising"
    },
    {
      outlet: "Federal Reserve",
      year: "2021",
      title: "Supporting Responsible Use of AI and Equitable Outcomes in Financial Services",
      author: "Gov. Lael Brainard"
    }
  ];

  const scrollToSection = (sectionId) => {
    setActiveSection(sectionId);
    setIsMenuOpen(false);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const downloadResume = () => {
    // In a real implementation, this would download the actual PDF
    alert('Resume download would be implemented here with your PDF file');
  };

  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/95 backdrop-blur-sm shadow-sm' : 'bg-transparent'
      }`}>
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="text-xl font-bold">Levi Kaplan</div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {sections.map(({ id, label }) => (
                <button
                  key={id}
                  onClick={() => scrollToSection(id)}
                  className={`text-sm font-medium transition-colors hover:text-blue-600 ${
                    activeSection === id ? 'text-blue-600' : 'text-gray-600'
                  }`}
                >
                  {label}
                </button>
              ))}
              <button
                onClick={downloadResume}
                className="flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
              >
                <Download size={16} />
                <span>Resume</span>
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden mt-4 pb-4 border-t border-gray-200">
              <div className="flex flex-col space-y-4 mt-4">
                {sections.map(({ id, label }) => (
                  <button
                    key={id}
                    onClick={() => scrollToSection(id)}
                    className={`text-left text-sm font-medium transition-colors hover:text-blue-600 ${
                      activeSection === id ? 'text-blue-600' : 'text-gray-600'
                    }`}
                  >
                    {label}
                  </button>
                ))}
                <button
                  onClick={downloadResume}
                  className="flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors w-fit"
                >
                  <Download size={16} />
                  <span>Resume</span>
                </button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Levi Kaplan
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8">
              Ph.D. Candidate in Computer Science
            </p>
            <p className="text-lg text-gray-700 mb-12 leading-relaxed">
              Investigating algorithmic discrimination, fairness, and bias in social media platforms and socio-technical systems
            </p>
            
            {/* Contact Links */}
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <a
                href="mailto:kaplan.l@northeastern.edu"
                className="flex items-center space-x-2 bg-gray-100 hover:bg-gray-200 px-4 py-2 rounded-lg transition-colors"
              >
                <Mail size={16} />
                <span>Email</span>
              </a>
              <a
                href="https://levikap.github.io"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 bg-gray-100 hover:bg-gray-200 px-4 py-2 rounded-lg transition-colors"
              >
                <ExternalLink size={16} />
                <span>Website</span>
              </a>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 bg-gray-100 hover:bg-gray-200 px-4 py-2 rounded-lg transition-colors"
              >
                <BookOpen size={16} />
                <span>Google Scholar</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">About</h2>
          <div className="prose prose-lg mx-auto text-gray-700 leading-relaxed">
            <p>
              My research interests involve investigating algorithmic discrimination, fairness, and bias in social media platforms and other socio-technical systems. I have four years of research experience in this topic, beginning during my undergraduate degree and continuing into my doctorate education at Northeastern University, advised by Dr. Alan Mislove.
            </p>
            <p>
              I conduct audits to measure bias present in social media algorithms and build tools to collect, process, and analyze data for the purposes of fairness auditing. I am motivated by the opacity of recommendation systems and the propensity for harm they can cause. Our work has led to reporting in popular press and concrete legislative change.
            </p>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Education</h2>
          <div className="space-y-8">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                <h3 className="text-xl font-bold text-blue-600">Ph.D. in Computer Science</h3>
                <span className="text-gray-500 text-sm">2022 - 2028 (expected)</span>
              </div>
              <p className="text-gray-700 font-medium mb-1">Northeastern University, Boston, MA</p>
              <p className="text-gray-600 mb-2">Advisor: Prof. Alan Mislove</p>
              <p className="text-gray-600">Research area: Algorithm Auditing, Fairness</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                <h3 className="text-xl font-bold text-blue-600">Master of Science in Computer Science</h3>
                <span className="text-gray-500 text-sm">2022-2024</span>
              </div>
              <p className="text-gray-700 font-medium mb-1">Northeastern University, Boston, MA</p>
              <p className="text-gray-600">Earned during Ph.D. study</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                <h3 className="text-xl font-bold text-blue-600">B.S. in Computer Science, AI Concentration</h3>
                <span className="text-gray-500 text-sm">2018 - 2022</span>
              </div>
              <p className="text-gray-700 font-medium mb-1">Northeastern University, Boston, MA</p>
              <p className="text-gray-600">Cum Laude, Honors Distinction</p>
            </div>
          </div>
        </div>
      </section>

      {/* Publications Section */}
      <section id="publications" className="py-20 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Publications</h2>
          <div className="grid gap-6">
            {publications.map((pub, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-lg font-bold text-gray-900 leading-tight pr-4">{pub.title}</h3>
                  {pub.award && (
                    <span className="bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded-full whitespace-nowrap">
                      🏆 {pub.award}
                    </span>
                  )}
                </div>
                <p className="text-gray-700 mb-2">{pub.authors}</p>
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                  <p className="text-gray-600 italic">{pub.venue}</p>
                  <span className={`text-xs px-2 py-1 rounded-full mt-2 sm:mt-0 w-fit ${
                    pub.status === 'published' ? 'bg-green-100 text-green-800' : 'bg-blue-100 text-blue-800'
                  }`}>
                    {pub.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Press Coverage Section */}
      <section id="press" className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Press Coverage</h2>
          <div className="space-y-6">
            {pressItems.map((item, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                  <h3 className="text-lg font-bold text-blue-600">{item.outlet}</h3>
                  <span className="text-gray-500 text-sm">{item.year}</span>
                </div>
                <p className="text-gray-900 font-medium mb-1">{item.title}</p>
                {item.author && <p className="text-gray-600 text-sm">{item.author}</p>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Awards Section */}
      <section id="awards" className="py-20 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Awards</h2>
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="flex items-center space-x-3">
                <Award className="text-yellow-500" size={24} />
                <div>
                  <h3 className="text-lg font-bold text-gray-900">Best Paper Award</h3>
                  <p className="text-gray-700">IMC 2022 - "Measurement And Analysis of Implied Identity in Ad Delivery Optimization"</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="flex items-center space-x-3">
                <Award className="text-yellow-500" size={24} />
                <div>
                  <h3 className="text-lg font-bold text-gray-900">Runner-Up, Best Student Paper Award</h3>
                  <p className="text-gray-700">ConPro 2022 - "Algorithms that 'Don't See Color': Measuring Biases in Lookalike and Special Ad Audiences"</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-gray-400 mb-4">© 2025 Levi Kaplan. All rights reserved.</p>
          <div className="flex justify-center space-x-6">
            <a href="mailto:kaplan.l@northeastern.edu" className="text-gray-400 hover:text-white transition-colors">
              Email
            </a>
            <a href="https://levikap.github.io" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
              Website
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
              Google Scholar
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LeviKaplanPortfolio;