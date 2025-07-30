import { useState } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { Mail, Linkedin, Github, MapPin, Calendar, ExternalLink, Code, Database, Globe, Users, MessageSquare, Target } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import './App.css'

function App() {
  const [activeSection, setActiveSection] = useState('about')

  const skills = [
    { category: 'Programming Languages', items: ['Java', 'Kotlin', 'Python', 'C#'] },
    { category: 'Operating Systems', items: ['Linux (Scripting/Security)', 'Windows', 'macOS'] },
    { category: 'Web Development', items: ['HTML', 'CSS', 'JavaScript', 'React', 'Flask', 'Express'] },
    { category: 'Database', items: ['Oracle PL/SQL'] },
    { category: 'Tools & Software', items: ['Git', 'Word', 'Excel', 'PowerPoint'] },
    { category: 'Other', items: ['IT Support', 'Multitasking', 'Team Environment', 'Bilingual'] }
  ]

  const projects = [
    {
      title: 'Geospatial Data API',
      description: 'API used to gather geospatial data to generate a report to the FED, using Python: Pandas/GeoPandas and Flask Frameworks.',
      technologies: ['Python', 'Pandas', 'GeoPandas', 'Flask'],
      icon: <Globe className="w-6 h-6" />
    },
    {
      title: 'Weather Station API',
      description: 'API used to gather weather data from stations around the world, using Python: Pandas/GeoPandas, Flask, and Dask Frameworks.',
      technologies: ['Python', 'Pandas', 'GeoPandas', 'Flask', 'Dask'],
      icon: <Database className="w-6 h-6" />
    }
  ]

  const experience = [
    {
      title: 'Technology Analyst (Internship)',
      company: 'Morgan Stanley',
      period: 'May 2024 – September 2024',
      description: 'Worked alongside data scientists to create APIs and gathered data used to predict market trends.',
      icon: <Code className="w-6 h-6" />
    },
    {
      title: 'iOS Technical Support',
      company: 'Teleperformance',
      period: 'January 2024 – April 2024',
      description: 'Provided technical support, troubleshooting, and resolving customer issues efficiently via phone support.',
      icon: <Users className="w-6 h-6" />
    }
  ]

  const softSkills = [
    { name: 'Leadership', icon: <Target className="w-5 h-5" /> },
    { name: 'Conflict Resolution', icon: <MessageSquare className="w-5 h-5" /> },
    { name: 'Communication', icon: <Users className="w-5 h-5" /> }
  ]

  const interests = ['Video Games', 'Roleplaying tabletop games', 'Content Creation']

  const sectionVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    exit: { opacity: 0, y: -20, transition: { duration: 0.3 } }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
      {/* Header */}
      <header className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm border-b border-gray-200 dark:border-gray-700 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex justify-between items-center">
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Charles-Alexandre Bouchard</h1>
            <div className="flex space-x-6">
              {['about', 'skills', 'projects', 'experience', 'education'].map((section) => (
                <button
                  key={section}
                  onClick={() => setActiveSection(section)}
                  className={`capitalize transition-colors ${
                    activeSection === section
                      ? 'text-blue-600 dark:text-blue-400 font-semibold'
                      : 'text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400'
                  }`}
                >
                  {section}
                </button>
              ))}
            </div>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <div className="w-32 h-32 mx-auto mb-8">
            <img
              src="src/profilepicture.jpg"
              alt="Profile picture of Charles-Alexandre Bouchard"
              className="w-32 h-32 rounded-full object-cover border-4 border-blue-500 shadow-lg mx-auto"
            />
          </div>
          <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Charles-Alexandre Bouchard
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
            Third-year Computer Science student passionate about coding in Python and creating APIs. 
            Experienced in data science and market trend prediction.
          </p>
          <div className="flex justify-center space-x-4 mb-8">
            <Button asChild className="flex items-center space-x-2">
              <a href="mailto:Charles_AB@outlook.com">
                <Mail className="w-4 h-4" />
                <span>Charles_AB@outlook.com</span>
              </a>
            </Button>
            <Button asChild variant="outline" className="flex items-center space-x-2">
              <a href="https://www.linkedin.com/in/charles-alexandre-bouchard-4298b126b/" target="_blank" rel="noopener noreferrer">
                <Linkedin className="w-4 h-4" />
                <span>LinkedIn</span>
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="container mx-auto px-4 pb-20">
        <AnimatePresence mode="wait">
          {activeSection === 'about' && (
            <motion.section
              key="about"
              variants={sectionVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="mb-16"
            >
              <Card className="max-w-4xl mx-auto">
                <CardHeader>
                  <CardTitle className="text-3xl">About Me</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <p className="text-lg text-gray-700 dark:text-gray-300">
                    Hi! I'm Charles and welcome to my personal website! I am a third-year computer science student 
                    and I really love coding in Python, especially making APIs. I had a lot of fun creating a weather 
                    station API that used weather station data to help predict market trends for Morgan Stanley!
                  </p>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="text-xl font-semibold mb-3">Education</h3>
                      <div className="flex items-start space-x-3">
                        <Calendar className="w-5 h-5 mt-1 text-blue-600" />
                        <div>
                          <p className="font-medium">Computer Science and Technology</p>
                          <p className="text-gray-600 dark:text-gray-400">Dawson College</p>
                          <p className="text-sm text-gray-500">Fall 2021 – Winter 2025</p>
                          <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                            Favorite courses: C#, Python, Linux
                          </p>
                        </div>
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-3">Interests</h3>
                      <div className="flex flex-wrap gap-2">
                        {interests.map((interest, index) => (
                          <Badge key={index} variant="secondary">{interest}</Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.section>
          )}

          {activeSection === 'skills' && (
            <motion.section
              key="skills"
              variants={sectionVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="mb-16"
            >
              <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl font-bold text-center mb-12">Skills & Expertise</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                  {skills.map((skillGroup, index) => (
                    <Card key={index}>
                      <CardHeader>
                        <CardTitle className="text-lg">{skillGroup.category}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="flex flex-wrap gap-2">
                          {skillGroup.items.map((skill, skillIndex) => (
                            <Badge key={skillIndex} variant="outline">{skill}</Badge>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
                
                <Card>
                  <CardHeader>
                    <CardTitle className="text-xl">Soft Skills</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-3 gap-4">
                      {softSkills.map((skill, index) => (
                        <div key={index} className="flex items-center space-x-3 p-3 rounded-lg bg-gray-50 dark:bg-gray-800">
                          <div className="text-blue-600 dark:text-blue-400">
                            {skill.icon}
                          </div>
                          <span className="font-medium">{skill.name}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </motion.section>
          )}

          {activeSection === 'projects' && (
            <motion.section
              key="projects"
              variants={sectionVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="mb-16"
            >
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl font-bold text-center mb-12">Projects</h2>
                <div className="grid gap-6">
                  {projects.map((project, index) => (
                    <Card key={index} className="hover:shadow-lg transition-shadow">
                      <CardHeader>
                        <div className="flex items-start space-x-4">
                          <div className="text-blue-600 dark:text-blue-400">
                            {project.icon}
                          </div>
                          <div className="flex-1">
                            <CardTitle className="text-xl">{project.title}</CardTitle>
                            <CardDescription className="mt-2">{project.description}</CardDescription>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.map((tech, techIndex) => (
                            <Badge key={techIndex} variant="secondary">{tech}</Badge>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </motion.section>
          )}

          {activeSection === 'experience' && (
            <motion.section
              key="experience"
              variants={sectionVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="mb-16"
            >
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl font-bold text-center mb-12">Experience</h2>
                <div className="space-y-6">
                  {experience.map((exp, index) => (
                    <Card key={index} className="hover:shadow-lg transition-shadow">
                      <CardHeader>
                        <div className="flex items-start space-x-4">
                          <div className="text-blue-600 dark:text-blue-400">
                            {exp.icon}
                          </div>
                          <div className="flex-1">
                            <CardTitle className="text-xl">{exp.title}</CardTitle>
                            <div className="flex items-center space-x-2 text-gray-600 dark:text-gray-400 mt-1">
                              <span className="font-medium">{exp.company}</span>
                              <span>•</span>
                              <span>{exp.period}</span>
                            </div>
                            <CardDescription className="mt-3">{exp.description}</CardDescription>
                          </div>
                        </div>
                      </CardHeader>
                    </Card>
                  ))}
                </div>
              </div>
            </motion.section>
          )}

          {activeSection === 'education' && (
            <motion.section
              key="education"
              variants={sectionVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="mb-16"
            >
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl font-bold text-center mb-12">Education</h2>
                <Card className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-start space-x-4">
                      <div className="text-blue-600 dark:text-blue-400">
                        <Calendar className="w-6 h-6" />
                      </div>
                      <div className="flex-1">
                        <CardTitle className="text-xl">Computer Science and Technology</CardTitle>
                        <div className="flex items-center space-x-2 text-gray-600 dark:text-gray-400 mt-1">
                          <span className="font-medium">Dawson College</span>
                          <span>•</span>
                          <span>Fall 2021 – Winter 2025</span>
                        </div>
                        <CardDescription className="mt-3">
                          Pursuing a comprehensive education in computer science with focus on programming, 
                          system administration, and software development.
                        </CardDescription>
                        <div className="mt-4">
                          <p className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Favorite Courses:</p>
                          <div className="flex flex-wrap gap-2">
                            {['C#', 'Python', 'Linux'].map((course, index) => (
                              <Badge key={index} variant="outline">{course}</Badge>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                </Card>
              </div>
            </motion.section>
          )}
        </AnimatePresence>
      </main>

      {/* Footer */}
      <footer className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-600 dark:text-gray-400">
            © 2024 Charles-Alexandre Bouchard. Built with React and Tailwind CSS.
          </p>
        </div>
      </footer>
    </div>
  )
}

export default App


