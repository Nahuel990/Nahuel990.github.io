import React, { useState, useEffect } from 'react';
import { 
  Briefcase, 
  GraduationCap, 
  Award, 
  Mail, 
  Linkedin,
  ChevronDown,
  ChevronUp,
  Gamepad,
  Star
} from 'lucide-react';

const SkillCollectorGame = ({ onClose }) => {
  const [score, setScore] = useState(0);
  const [skills, setSkills] = useState([]);
  const [gameActive, setGameActive] = useState(true);
  const [timeLeft, setTimeLeft] = useState(30);

  useEffect(() => {
    const generateSkill = () => {
      const skillNames = ['Python', 'React', 'AWS', 'Testing', 'Azure', 'API'];
      const skill = {
        name: skillNames[Math.floor(Math.random() * skillNames.length)],
        x: Math.random() * 80 + 10,
        y: Math.random() * 80 + 10,
        id: Date.now() + Math.random()
      };
      return skill;
    };

    const interval = setInterval(() => {
      if (gameActive && skills.length < 5) {
        setSkills(prev => [...prev, generateSkill()]);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [gameActive, skills.length]);

  useEffect(() => {
    if (timeLeft > 0 && gameActive) {
      const timer = setTimeout(() => setTimeLeft(prev => prev - 1), 1000);
      return () => clearTimeout(timer);
    } else if (timeLeft === 0) {
      setGameActive(false);
    }
  }, [timeLeft, gameActive]);

  const collectSkill = (skillId) => {
    setSkills(prev => prev.filter(skill => skill.id !== skillId));
    setScore(prev => prev + 10);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-8 rounded-lg w-full max-w-lg relative">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
        >
          ✕
        </button>
        
        <h2 className="text-2xl font-bold mb-4">Skill Collector</h2>
        <div className="flex justify-between mb-4">
          <div>Score: {score}</div>
          <div>Time: {timeLeft}s</div>
        </div>

        <div className="relative h-96 bg-blue-50 rounded-lg overflow-hidden">
          {gameActive ? (
            skills.map(skill => (
              <div
                key={skill.id}
                className="absolute cursor-pointer transform hover:scale-110 transition-transform"
                style={{ 
                  left: `${skill.x}%`, 
                  top: `${skill.y}%`,
                  transform: 'translate(-50%, -50%)'
                }}
                onClick={() => collectSkill(skill.id)}
              >
                <div className="bg-blue-500 text-white px-3 py-1 rounded-full flex items-center">
                  <Star className="w-4 h-4 mr-1" />
                  {skill.name}
                </div>
              </div>
            ))
          ) : (
            <div className="absolute inset-0 flex items-center justify-center flex-col">
              <h3 className="text-2xl font-bold mb-4">Game Over!</h3>
              <p className="text-xl mb-4">Final Score: {score}</p>
              <button
                onClick={() => {
                  setScore(0);
                  setTimeLeft(30);
                  setGameActive(true);
                }}
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
              >
                Play Again
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const Portfolio = () => {
  const [expandedJob, setExpandedJob] = useState(null);
  const [showGame, setShowGame] = useState(false);

  const contactInfo = {
    email: 'nahuelnucera990@gmail.com',
    linkedin: 'linkedin.com/in/nahuelnucera'
  };

  const experience = [
    {
      title: 'ML QA Engineer',
      company: 'G42',
      location: 'Abu Dhabi, UAE',
      period: 'July 2024 – Present',
      skills: ['Azure', 'Pandas', 'Apache Spark', 'Playwright', 'Python', 'FastAPI'],
      description: 'I leveraged Azure for the overall development/QA process and cloud integration. I conducted data testing using Pandas and Apache Spark, performed end-to-end testing with Playwright, and engaged in backend development using Python and FastAPI.'
    },
    {
      title: 'QA Engineer',
      company: 'Fidelity Investments',
      location: 'Ireland',
      period: 'April 2024 – July 2024',
      skills: ['AWS', 'Performance Testing', 'Java', 'Cucumber BDD', 'Data Testing', 'Selenium', 'Jira'],
      description: 'I maintained test scripts and oversaw the QA process on the Previous Sales and Home Improvement team.'
    },
    {
      title: 'QA Engineer',
      company: 'DeviceAtlas',
      location: 'Ireland',
      period: 'Jan 2021 – Dec 2023',
      duration: '2 years 10 months',
      skills: ['Scripting', 'Library Testing', 'Python', 'Java', 'Node.js', 'Performance Testing', 'HTTP', 'Data Testing', 'Selenium'],
      description: 'I specialized in comprehensive testing to ensure the quality of the device detection platform. Responsibilities included defect identification, cross-functional collaboration, and enhancing testing processes.'
    },
    {
      title: 'QA Engineer',
      company: 'Afilias',
      location: 'Ireland',
      period: 'Sep 2019 – Dec 2020',
      duration: '1 year 4 months',
      skills: ['Performance Testing', 'Data Validation', 'Selenium', 'Python', 'Team Collaboration'],
      description: 'I focused on quality assurance and performance testing for the DeviceAtlas project.'
    },
    {
      title: 'Lead QA Engineer',
      company: 'AID:Tech',
      location: 'Ireland',
      period: 'Dec 2018 – Sep 2019',
      duration: '10 months',
      skills: ['Nightwatch.js', 'React', 'Node.js', 'Jmeter', 'Travis', 'Appium', 'Python', 'Hyperledger', 'Contract Testing', 'OWASP Validation', 'Cloud Testing', 'NoSQL'],
      description: 'I conducted web automation and performance testing, contributed to bug fixes, and extended the mobile automation suite.'
    },
    {
      title: 'Lead QA Engineer',
      company: 'IncluIT powered by Avenga',
      location: 'Italy',
      period: 'Mar 2018 – Jan 2019',
      duration: '11 months',
      skills: ['Java', 'Appium', 'AWS', 'Jmeter', 'Jira', 'Team Leadership', 'Mobile Testing', 'Cloud Testing', 'SQL', 'NoSQL'],
      description: 'I specialized in testing services and app automation for iOS and Android platforms.'
    },
    {
      title: 'QA Engineer',
      company: 'Santex',
      location: 'US',
      period: 'Feb 2017 – Mar 2018',
      duration: '1 year 2 months',
      skills: ['Zephyr', 'Jira', 'Protractor', 'JavaScript', 'Jenkins', 'Xvfb', 'Postman', 'Kafka + API Testing', 'Gatling', 'Pytest', 'ISO9001'],
      description: 'I conducted both manual and automated testing. I contributed to testing microservices-based applications and managed continuous integration processes.'
    },
    {
      title: 'QA Engineer',
      company: 'IncluIT powered by Avenga',
      location: 'Argentina',
      period: 'Aug 2016 – Feb 2017',
      duration: '7 months',
      skills: ['Automation Testing', 'Manual Testing', 'Hardware Testing', 'Behave', 'Python', 'Pytest', 'Linux', 'API REST Testing', 'Jmeter', 'Scrum'],
      description: 'I conducted a wide range of testing, including manual, automation, volume, and stress testing on desktop and web applications.'
    },
    {
      title: 'QA Engineer',
      company: 'eSolutions',
      location: 'Argentina',
      period: 'Dec 2015 – Aug 2016',
      duration: '9 months',
      skills: ['API REST Testing', 'Business Analysis', 'Scrum', 'Kanban', 'JBehave', 'Selenium (Java)', 'SikuliX', 'Jmeter', 'ISO9001'],
      description: 'I was responsible for testing APIs and GIS web applications, acting as a business analyst, and applying Agile methodologies like Scrum and Kanban.'
    },
    {
      title: 'Software Tester',
      company: 'uTest',
      location: '',
      period: 'Apr 2015 – Jun 2016',
      duration: '1 year 3 months',
      skills: ['Time Management', 'Detail Orientation', 'Adaptability', 'Documentation', 'Cross-Browser Testing', 'Cross-Platform Testing'],
      description: 'As a freelancer tester, I contributed to web and mobile testing, covering cross-browser and cross-platform evaluations.'
    },
    {
      title: 'Technical Support Engineer',
      company: 'Flexxus',
      location: 'Argentina',
      period: 'May 2013 – Dec 2014',
      duration: '1 year 8 months',
      skills: ['SQL', 'T-SQL', 'SLA', 'Kanban'],
      description: 'I conducted database maintenance, managed software installations, and delivered customer support and training for the company\'s primary ERP product.'
    },
    {
      title: 'Customer Success Team Lead',
      company: 'Xerox',
      location: 'Argentina',
      period: 'Mar 2011 – Feb 2013',
      duration: '2 years',
      skills: ['Team Leadership', 'Coaching', 'VPN Installation/Configuration', 'Network Installation/Configuration (LAN, WAN, Routing)', 'Microtik', 'Microsoft Excel', 'SLA', 'ISO9001'],
      description: 'I supervised a help desk team supporting Telecom Argentina\'s ADSL customers.'
    },
    {
      title: 'Career Break',
      company: '',
      location: '',
      period: 'December 2023 – April 2024',
      skills: [],
      description: 'I took a personal career break to travel and gain new perspectives.'
    }
  ];

  const education = [
    {
      degree: 'Postgraduate Degree, Big Data Analytics and Artificial Intelligence',
      school: 'Atlantic Technological University',
      period: '2023 – 2024'
    },
    {
      degree: "Bachelor\'s Degree, Computer Science",
      school: 'Colegio Universitario IES',
      period: '2013 – 2018'
    }
  ];

  const certifications = [
    'Azure Fundamentals – Microsoft',
    'Microsoft Certified: Azure Data Fundamentals',
    'AWS Certified Cloud Practitioner – Amazon Web Services (AWS)',
    'ISTQB Certified Tester Foundation Level'
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header/Hero Section */}
      <header className="bg-blue-600 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex justify-between items-start">
            <div>
              <h1 className="text-4xl font-bold mb-4">Nahuel Alejandro Nucera</h1>
              <p className="text-xl mb-6">QA Engineer | Data and AI Enthusiast</p>
            </div>
            <button
              onClick={() => setShowGame(true)}
              className="bg-white bg-opacity-20 hover:bg-opacity-30 text-white px-4 py-2 rounded-lg flex items-center transition-all duration-200"
            >
              <Gamepad className="w-5 h-5 mr-2" />
              Play Game
            </button>
          </div>
          <div className="flex flex-wrap gap-4">
            <div className="flex items-center">
              <Mail className="w-5 h-5 mr-2" />
              <a href={`mailto:${contactInfo.email}`} className="hover:underline">{contactInfo.email}</a>
            </div>
            <div className="flex items-center">
              <Linkedin className="w-5 h-5 mr-2" />
              <a href={`https://${contactInfo.linkedin}`} target="_blank" rel="noopener noreferrer" className="hover:underline">
                {contactInfo.linkedin}
              </a>
            </div>
          </div>
        </div>
      </header>
{/* Main Content */}
      <main className="max-w-4xl mx-auto py-12 px-4">
        {/* Experience Section */}
        <section className="mb-12">
          <div className="flex items-center mb-6">
            <Briefcase className="w-6 h-6 mr-2" />
            <h2 className="text-2xl font-bold">Work Experience</h2>
          </div>
          <div className="space-y-6">
            {experience.map((job, index) => (
              <div 
                key={index}
                className="bg-white rounded-lg shadow-md p-6 transition-all duration-200 hover:shadow-lg"
              >
                <div 
                  className="flex justify-between items-start cursor-pointer"
                  onClick={() => setExpandedJob(expandedJob === index ? null : index)}
                >
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{job.title}</h3>
                    <p className="text-gray-600">{job.company} {job.location && `- ${job.location}`}</p>
                    <p className="text-gray-500">{job.period}</p>
                  </div>
                  {expandedJob === index ? (
                    <ChevronUp className="w-6 h-6 text-gray-400" />
                  ) : (
                    <ChevronDown className="w-6 h-6 text-gray-400" />
                  )}
                </div>
                
                {expandedJob === index && (
                  <div className="mt-4">
                    <p className="text-gray-700 mb-4">{job.description}</p>
                    {job.skills.length > 0 && (
                      <div className="flex flex-wrap gap-2">
                        {job.skills.map((skill, skillIndex) => (
                          <span 
                            key={skillIndex}
                            className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Education Section */}
        <section className="mb-12">
          <div className="flex items-center mb-6">
            <GraduationCap className="w-6 h-6 mr-2" />
            <h2 className="text-2xl font-bold">Education</h2>
          </div>
          <div className="space-y-4">
            {education.map((edu, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-semibold mb-2">{edu.degree}</h3>
                <p className="text-gray-600">{edu.school}</p>
                <p className="text-gray-500">{edu.period}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Certifications Section */}
        <section>
          <div className="flex items-center mb-6">
            <Award className="w-6 h-6 mr-2" />
            <h2 className="text-2xl font-bold">Certifications</h2>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <ul className="space-y-2">
              {certifications.map((cert, index) => (
                <li key={index} className="flex items-center">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                  {cert}
                </li>
              ))}
            </ul>
          </div>
        </section>
      </main>

      {showGame && <SkillCollectorGame onClose={() => setShowGame(false)} />}
    </div>
  );
};

export default Portfolio;
