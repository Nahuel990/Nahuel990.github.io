import React, { useState } from 'react';
import { 
  Briefcase, 
  GraduationCap, 
  Award, 
  Mail, 
  Linkedin, 
  ChevronDown,
  ChevronUp
} from 'lucide-react';

const Portfolio = () => {
  const [expandedJob, setExpandedJob] = useState(null);

  const contactInfo = {
    email: 'nahuelnucera990@gmail.com',
    linkedin: 'linkedin.com/in/nahuelnucera'
  };

  const experience = [
    {
      title: 'ML QA Engineer',
      company: 'G42',
      location: 'Abu Dhabi, UAE',
      period: 'July 2024 -- Present',
      skills: ['Azure', 'Pandas', 'Apache Spark', 'Playwright', 'Python', 'FastAPI'],
      description: 'Leveraged Azure for development/QA process and cloud integration. Conducted data testing using Pandas and Apache Spark, performed end-to-end testing with Playwright, and engaged in backend development using Python and FastAPI.'
    },
    {
      title: 'QA Engineer',
      company: 'Fidelity Investments',
      location: 'Ireland',
      period: 'April 2024 -- July 2024',
      skills: ['AWS', 'Performance Testing', 'Java', 'Cucumber BDD', 'Data Testing', 'Selenium', 'Jira'],
      description: 'Maintained test scripts and oversaw the QA process on the Previous Sales and Home Improvement team.'
    },
    {
      title: 'QA Engineer',
      company: 'DeviceAtlas',
      location: 'Ireland',
      period: 'Jan 2021 -- Dec 2023',
      skills: ['Scripting', 'Library Testing', 'Python', 'Java', 'Node.js', 'Performance Testing', 'HTTP', 'Data Testing', 'Selenium'],
      description: 'Specialized in comprehensive testing to ensure the quality of the device detection platform. Responsibilities included defect identification, cross-functional collaboration, and enhancing testing processes.'
    }
  ];

  const education = [
    {
      degree: 'Postgraduate Degree, Big Data Analytics and Artificial Intelligence',
      school: 'Atlantic Technological University',
      period: '2023 -- 2024'
    },
    {
      degree: "Bachelor's Degree, Computer Science",
      school: 'Colegio Universitario IES',
      period: '2013 -- 2018'
    }
  ];

  const certifications = [
    'Azure Fundamentals -- Microsoft',
    'AWS Certified Cloud Practitioner -- Amazon Web Services (AWS)',
    'ISTQB Certified Tester Foundation Level'
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header/Hero Section */}
      <header className="bg-blue-600 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-4">Nahuel Alejandro Nucera</h1>
          <p className="text-xl mb-6">QA Engineer | Data and AI Enthusiast</p>
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
                    <p className="text-gray-600">{job.company} - {job.location}</p>
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
    </div>
  );
};

export default Portfolio;