'use client';

import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

// ==================== ANIMATION VARIANTS ====================

const fadeInUp = {
  hidden: { 
    opacity: 0, 
    y: 80,
    scale: 0.95
  },
  visible: { 
    opacity: 1, 
    y: 0,
    scale: 1,
    transition: { 
      duration: 0.8, 
      ease: [0.22, 1, 0.36, 1]
    }
  }
};

const fadeInLeft = {
  hidden: { 
    opacity: 0, 
    x: -100,
    filter: 'blur(10px)'
  },
  visible: { 
    opacity: 1, 
    x: 0,
    filter: 'blur(0px)',
    transition: { 
      duration: 0.8, 
      ease: [0.22, 1, 0.36, 1]
    }
  }
};

const fadeInRight = {
  hidden: { 
    opacity: 0, 
    x: 100,
    filter: 'blur(10px)'
  },
  visible: { 
    opacity: 1, 
    x: 0,
    filter: 'blur(0px)',
    transition: { 
      duration: 0.8, 
      ease: [0.22, 1, 0.36, 1]
    }
  }
};

const scaleRotate = {
  hidden: { 
    opacity: 0, 
    scale: 0.5,
    rotate: -10
  },
  visible: { 
    opacity: 1, 
    scale: 1,
    rotate: 0,
    transition: { 
      duration: 0.9, 
      ease: [0.22, 1, 0.36, 1]
    }
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1
    }
  }
};

const floatIn = {
  hidden: { 
    opacity: 0, 
    y: 60,
    scale: 0.9
  },
  visible: (i: number) => ({
    opacity: 1, 
    y: 0,
    scale: 1,
    transition: { 
      delay: i * 0.1,
      duration: 0.7, 
      ease: [0.22, 1, 0.36, 1]
    }
  })
};

const magneticReveal = {
  hidden: { 
    opacity: 0, 
    y: 100,
    scale: 0.8,
    rotateX: 45
  },
  visible: { 
    opacity: 1, 
    y: 0,
    scale: 1,
    rotateX: 0,
    transition: { 
      duration: 1, 
      ease: [0.22, 1, 0.36, 1]
    }
  }
};

const glowFadeIn = {
  hidden: { 
    opacity: 0, 
    scale: 0.9,
    filter: 'brightness(0.5) blur(20px)'
  },
  visible: { 
    opacity: 1, 
    scale: 1,
    filter: 'brightness(1) blur(0px)',
    transition: { 
      duration: 1.2, 
      ease: [0.22, 1, 0.36, 1]
    }
  }
};

// ==================== REUSABLE COMPONENTS ====================

function AnimatedSection({ 
  children, 
  variant = fadeInUp, 
  className = '',
  delay = 0,
  once = true
}: { 
  children: React.ReactNode; 
  variant?: any; 
  className?: string;
  delay?: number;
  once?: boolean;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { 
    once, 
    margin: '-80px',
    amount: 0.3 
  });

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      variants={variant}
      className={className}
      style={{ 
        transformStyle: 'preserve-3d',
        perspective: '1000px'
      }}
    >
      {children}
    </motion.div>
  );
}

function ParallaxSection({ 
  children, 
  speed = 50,
  className = '' 
}: { 
  children: React.ReactNode;
  speed?: number;
  className?: string;
}) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start']
  });

  const y = useTransform(scrollYProgress, [0, 1], [-speed, speed]);
  const smoothY = useSpring(y, { stiffness: 100, damping: 30 });

  return (
    <motion.div ref={ref} style={{ y: smoothY }} className={className}>
      {children}
    </motion.div>
  );
}

function StaggeredGrid({ 
  children, 
  columns = 3 
}: { 
  children: React.ReactNode[]; 
  columns?: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      variants={staggerContainer}
      className={`grid grid-cols-1 md:grid-cols-${columns} gap-6 lg:gap-8`}
    >
      {Array.isArray(children) && children.map((child, i) => (
        <motion.div
          key={i}
          variants={floatIn}
          custom={i}
          whileHover={{ 
            scale: 1.05, 
            y: -10,
            transition: { duration: 0.3 }
          }}
        >
          {child}
        </motion.div>
      ))}
    </motion.div>
  );
}

function AnimatedText({ 
  text, 
  className = '' 
}: { 
  text: string; 
  className?: string;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const words = text.split(' ');

  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.08, delayChildren: i * 0.04 }
    })
  };

  const child = {
    hidden: {
      opacity: 0,
      y: 20,
      transition: {
        type: 'spring',
        damping: 12,
        stiffness: 100
      }
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        damping: 12,
        stiffness: 100
      }
    }
  };

  return (
    <motion.div
      ref={ref}
      className={className}
      variants={container}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
    >
      {words.map((word, index) => (
        <motion.span
          key={index}
          variants={child}
          style={{ display: 'inline-block', marginRight: '0.3em' }}
        >
          {word}
        </motion.span>
      ))}
    </motion.div>
  );
}

// ==================== MAIN COMPONENT ====================

interface HomePageData {
  heroVideo: string;
  siteName: string;
  about: string;
  vision: string;
  mission: string;
  focus: string;
  coreValues: string;
  banner?: string;
  logo?: string;
}

interface Event {
  id: number;
  title: string;
  description: string;
  eventDate: string;
  location: string;
  image?: string;
}

interface Project {
  id: number;
  title: string;
  description: string;
  image?: string;
  status: string;
}

interface TeamMember {
  id: number;
  firstName: string;
  lastName: string;
  profileImage?: string;
  about?: string;
}

interface Beneficiary {
  id: number;
  firstName: string;
  lastName: string;
  profileImage?: string;
  schoolName?: string;
}

export default function SinglePageHome() {
  const [homeData, setHomeData] = useState<HomePageData | null>(null);
  const [events, setEvents] = useState<Event[]>([]);
  const [projects, setProjects] = useState<Project[]>([]);
  const [team, setTeam] = useState<TeamMember[]>([]);
  const [beneficiaries, setBeneficiaries] = useState<Beneficiary[]>([]);
  const [loading, setLoading] = useState(true);

  const { scrollYProgress } = useScroll();
  const scaleProgress = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [homeRes, eventsRes, projectsRes, teamRes, beneficiariesRes] = await Promise.all([
          fetch('/api/homepage'),
          fetch('/api/events'),
          fetch('/api/projects'),
          fetch('/api/teams'),
          fetch('/api/beneficiaries')
        ]);

        const [homeData, eventsData, projectsData, teamData, beneficiariesData] = await Promise.all([
          homeRes.json(),
          eventsRes.json(),
          projectsRes.json(),
          teamRes.json(),
          beneficiariesRes.json()
        ]);

        setHomeData(homeData);
        setEvents(eventsData.slice(0, 3)); // Get latest 3 events
        setProjects(projectsData.slice(0, 3)); // Get latest 3 projects
        setTeam(teamData.slice(0, 4)); // Get 4 team members
        setBeneficiaries(beneficiariesData.slice(0, 6)); // Get 6 beneficiaries
        setLoading(false);
      } catch (err) {
        console.error('Failed to fetch data:', err);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 1, ease: 'linear' }}
          className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full"
        />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-gray-50 to-white">
      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 origin-left z-50"
        style={{ scaleX: scaleProgress }}
      />

      {/* Hero Section with Video */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <motion.div
          initial={{ scale: 1.2, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
          className="absolute inset-0"
        >
          {homeData?.heroVideo && (
            <video 
              src={homeData.heroVideo} 
              autoPlay 
              muted 
              loop 
              playsInline
              className="w-full h-full object-cover"
            />
          )}
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60" />
        </motion.div>

        <div className="relative z-10 text-center text-white px-4 max-w-5xl">
          <motion.h1
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ delay: 0.5, duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-100 to-white"
          >
            {homeData?.siteName || 'GoGirls ICT'}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 1 }}
            className="text-xl md:text-2xl text-gray-200"
          >
            Empowering Girls Through Technology
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.2, duration: 0.6, type: 'spring' }}
          >
            <Link href="/about">
              <button className="mt-8 px-8 py-4 bg-white text-gray-900 rounded-full font-semibold hover:bg-gray-100 transition-all hover:scale-110">
                Learn More
              </button>
            </Link>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [0, 10, 0] }}
          transition={{ 
            opacity: { delay: 1.5, duration: 0.5 },
            y: { repeat: Infinity, duration: 1.5, ease: 'easeInOut' }
          }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2" />
          </div>
        </motion.div>
      </section>

      {/* About Section */}
      {homeData?.about && (
        <section className="py-24 px-4 max-w-7xl mx-auto">
          <AnimatedSection variant={glowFadeIn}>
            <div className="text-center max-w-4xl mx-auto">
              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
                className="h-1 w-24 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-8"
              />
              <AnimatedText 
                text="About Us" 
                className="text-4xl md:text-5xl font-bold mb-6 text-gray-900"
              />
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.8 }}
                className="text-lg text-gray-600 leading-relaxed"
              >
                {homeData.about}
              </motion.p>
            </div>
          </AnimatedSection>
        </section>
      )}

      {/* Vision Section */}
      {homeData?.vision && (
        <section className="py-24 px-4 bg-gradient-to-br from-blue-50 to-purple-50">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <AnimatedSection variant={fadeInLeft}>
                <ParallaxSection speed={30}>
                  <div className="relative">
                    <motion.div
                      whileHover={{ scale: 1.05, rotate: 2 }}
                      className="aspect-square bg-gradient-to-br from-blue-400 to-purple-500 rounded-3xl overflow-hidden shadow-2xl"
                    >
                      {homeData?.banner ? (
                        <img 
                          src={homeData.banner} 
                          alt="Vision" 
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center text-white text-6xl">
                          🎯
                        </div>
                      )}
                    </motion.div>
                    <motion.div
                      initial={{ scale: 0, rotate: -180 }}
                      whileInView={{ scale: 1, rotate: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.5, duration: 0.8, type: 'spring' }}
                      className="absolute -bottom-6 -right-6 w-32 h-32 bg-yellow-400 rounded-full blur-2xl opacity-60"
                    />
                  </div>
                </ParallaxSection>
              </AnimatedSection>

              <AnimatedSection variant={fadeInRight}>
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                >
                  <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
                    Our Vision
                  </h2>
                  <motion.p
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2, duration: 0.8 }}
                    className="text-lg text-gray-700 leading-relaxed"
                  >
                    {homeData.vision}
                  </motion.p>
                </motion.div>
              </AnimatedSection>
            </div>
          </div>
        </section>
      )}

      {/* Mission Section */}
      {homeData?.mission && (
        <section className="py-24 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <AnimatedSection variant={fadeInLeft} className="md:order-2">
                <ParallaxSection speed={-30}>
                  <motion.div
                    whileHover={{ scale: 1.05, rotate: -2 }}
                    className="aspect-square bg-gradient-to-br from-pink-400 to-orange-500 rounded-3xl overflow-hidden shadow-2xl"
                  >
                    {homeData?.logo ? (
                      <img 
                        src={homeData.logo} 
                        alt="Mission" 
                        className="w-full h-full object-contain p-8 bg-white"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-white text-6xl">
                        🚀
                      </div>
                    )}
                  </motion.div>
                </ParallaxSection>
              </AnimatedSection>

              <AnimatedSection variant={fadeInRight} className="md:order-1">
                <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-pink-600 to-orange-600">
                  Our Mission
                </h2>
                <motion.p
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2, duration: 0.8 }}
                  className="text-lg text-gray-700 leading-relaxed"
                >
                  {homeData.mission}
                </motion.p>
              </AnimatedSection>
            </div>
          </div>
        </section>
      )}

      {/* Focus Areas */}
      {homeData?.focus && (
        <section className="py-24 px-4 bg-gradient-to-br from-purple-50 to-pink-50">
          <div className="max-w-7xl mx-auto">
            <AnimatedSection variant={magneticReveal}>
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600">
                  Our Focus Areas
                </h2>
              </div>
            </AnimatedSection>

            <StaggeredGrid columns={3}>
              {[
                { title: 'Technology', icon: '💻', color: 'from-blue-400 to-blue-600', description: 'Teaching coding, robotics, and digital literacy' },
                { title: 'Education', icon: '📚', color: 'from-purple-400 to-purple-600', description: 'Providing quality education and mentorship' },
                { title: 'Empowerment', icon: '✨', color: 'from-pink-400 to-pink-600', description: 'Building confidence and leadership skills' }
              ].map((item, i) => (
                <motion.div
                  key={i}
                  className="group relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-shadow"
                  whileHover={{ y: -10 }}
                >
                  <motion.div
                    initial={{ scale: 0, rotate: -180 }}
                    whileInView={{ scale: 1, rotate: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.2, duration: 0.6, type: 'spring' }}
                    className={`w-16 h-16 bg-gradient-to-br ${item.color} rounded-2xl flex items-center justify-center text-3xl mb-6 group-hover:scale-110 transition-transform`}
                  >
                    {item.icon}
                  </motion.div>
                  <h3 className="text-2xl font-bold mb-4 text-gray-900">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </StaggeredGrid>

            <AnimatedSection variant={fadeInUp} className="mt-12">
              <div className="bg-white rounded-3xl p-8 shadow-lg">
                <p className="text-lg text-gray-700 leading-relaxed text-center">
                  {homeData.focus}
                </p>
              </div>
            </AnimatedSection>
          </div>
        </section>
      )}

      {/* Core Values */}
      {homeData?.coreValues && (
        <section className="py-24 px-4">
          <div className="max-w-7xl mx-auto">
            <AnimatedSection variant={scaleRotate}>
              <div className="text-center max-w-4xl mx-auto">
                <h2 className="text-4xl md:text-5xl font-bold mb-12 bg-clip-text text-transparent bg-gradient-to-r from-green-600 to-teal-600">
                  Core Values
                </h2>
                
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                  className="bg-gradient-to-br from-green-50 to-teal-50 rounded-3xl p-12 shadow-xl"
                >
                  <p className="text-lg text-gray-700 leading-relaxed">
                    {homeData.coreValues}
                  </p>
                </motion.div>
              </div>
            </AnimatedSection>
          </div>
        </section>
      )}

      {/* Events Section */}
      {events.length > 0 && (
        <section className="py-24 px-4 bg-gradient-to-br from-orange-50 to-yellow-50">
          <div className="max-w-7xl mx-auto">
            <AnimatedSection variant={fadeInUp}>
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-orange-600 to-yellow-600">
                  Upcoming Events
                </h2>
              </div>
            </AnimatedSection>

            <StaggeredGrid columns={3}>
              {events.map((event) => (
                <Link href={`/events/${event.id}`} key={event.id}>
                  <motion.div
                    className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow cursor-pointer"
                    whileHover={{ y: -10 }}
                  >
                    {event.image && (
                      <div className="relative h-48 overflow-hidden">
                        <img 
                          src={event.image} 
                          alt={event.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    )}
                    <div className="p-6">
                      <h3 className="text-xl font-bold mb-3 text-gray-900">{event.title}</h3>
                      <p className="text-gray-600 mb-4 line-clamp-3">{event.description}</p>
                      <div className="flex items-center text-sm text-gray-500">
                        <span>📅 {new Date(event.eventDate).toLocaleDateString()}</span>
                        <span className="mx-2">•</span>
                        <span>📍 {event.location}</span>
                      </div>
                    </div>
                  </motion.div>
                </Link>
              ))}
            </StaggeredGrid>

            <AnimatedSection variant={fadeInUp} className="mt-12 text-center">
              <Link href="/events">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-gradient-to-r from-orange-500 to-yellow-500 text-white rounded-full font-semibold shadow-lg"
                >
                  View All Events
                </motion.button>
              </Link>
            </AnimatedSection>
          </div>
        </section>
      )}

      {/* Projects Section */}
      {projects.length > 0 && (
        <section className="py-24 px-4">
          <div className="max-w-7xl mx-auto">
            <AnimatedSection variant={fadeInUp}>
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600">
                  Our Projects
                </h2>
              </div>
            </AnimatedSection>

            <StaggeredGrid columns={3}>
              {projects.map((project) => (
                <Link href={`/projects/${project.id}`} key={project.id}>
                  <motion.div
                    className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow cursor-pointer"
                    whileHover={{ y: -10 }}
                  >
                    {project.image && (
                      <div className="relative h-48 overflow-hidden">
                        <img 
                          src={project.image} 
                          alt={project.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    )}
                    <div className="p-6">
                      <div className="flex items-center justify-between mb-3">
                        <h3 className="text-xl font-bold text-gray-900">{project.title}</h3>
                        <span className={`px-3 py-1 text-xs rounded-full ${
                          project.status === 'active' ? 'bg-green-100 text-green-700' :
                          project.status === 'completed' ? 'bg-blue-100 text-blue-700' :
                          'bg-gray-100 text-gray-700'
                        }`}>
                          {project.status}
                        </span>
                      </div>
                      <p className="text-gray-600 line-clamp-3">{project.description}</p>
                    </div>
                  </motion.div>
                </Link>
              ))}
            </StaggeredGrid>

            <AnimatedSection variant={fadeInUp} className="mt-12 text-center">
              <Link href="/projects">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-gradient-to-r from-indigo-500 to-purple-500 text-white rounded-full font-semibold shadow-lg"
                >
                  View All Projects
                </motion.button>
              </Link>
            </AnimatedSection>
          </div>
        </section>
      )}

      {/* Team Section */}
      {team.length > 0 && (
        <section className="py-24 px-4 bg-gradient-to-br from-cyan-50 to-blue-50">
          <div className="max-w-7xl mx-auto">
            <AnimatedSection variant={fadeInUp}>
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-cyan-600 to-blue-600">
                  Meet Our Team
                </h2>
              </div>
            </AnimatedSection>

            <StaggeredGrid columns={4}>
              {team.map((member) => (
                <motion.div
                  key={member.id}
                  className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow text-center"
                  whileHover={{ y: -10 }}
                >
                  <div className="relative h-64 overflow-hidden bg-gradient-to-br from-cyan-400 to-blue-500">
                    {member.profileImage ? (
                      <img 
                        src={member.profileImage} 
                        alt={`${member.firstName} ${member.lastName}`}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-white text-6xl">
                        👤
                      </div>
                    )}
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {member.firstName} {member.lastName}
                    </h3>
                    {member.about && (
                      <p className="text-sm text-gray-600 line-clamp-2">{member.about}</p>
                    )}
                  </div>
                </motion.div>
              ))}
            </StaggeredGrid>

            <AnimatedSection variant={fadeInUp} className="mt-12 text-center">
              <Link href="/team">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-full font-semibold shadow-lg"
                >
                  View Full Team
                </motion.button>
              </Link>
            </AnimatedSection>
          </div>
        </section>
      )}

      {/* Beneficiaries Section */}
      {beneficiaries.length > 0 && (
        <section className="py-24 px-4">
          <div className="max-w-7xl mx-auto">
            <AnimatedSection variant={fadeInUp}>
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-rose-600 to-pink-600">
                  Our Beneficiaries
                </h2>
                <p className="text-lg text-gray-600">
                  Empowering the next generation of tech leaders
                </p>
              </div>
            </AnimatedSection>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {beneficiaries.map((beneficiary, i) => (
                <motion.div
                  key={beneficiary.id}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="aspect-square rounded-2xl overflow-hidden shadow-lg bg-gradient-to-br from-rose-400 to-pink-500"
                >
                  {beneficiary.profileImage ? (
                    <img 
                      src={beneficiary.profileImage} 
                      alt={`${beneficiary.firstName} ${beneficiary.lastName}`}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full flex flex-col items-center justify-center text-white p-4">
                      <div className="text-4xl mb-2">👧</div>
                      <p className="text-xs font-semibold text-center">
                        {beneficiary.firstName}
                      </p>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>

            <AnimatedSection variant={fadeInUp} className="mt-12 text-center">
              <Link href="/beneficiaries">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-gradient-to-r from-rose-500 to-pink-500 text-white rounded-full font-semibold shadow-lg"
                >
                  View All Beneficiaries
                </motion.button>
              </Link>
            </AnimatedSection>
          </div>
        </section>
      )}

      {/* Call to Action */}
      <section className="py-24 px-4 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600">
        <div className="max-w-4xl mx-auto text-center">
          <AnimatedSection variant={glowFadeIn}>
            <motion.h2
              className="text-4xl md:text-6xl font-bold text-white mb-8"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              Ready to Make a Difference?
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-xl text-white/90 mb-8"
            >
              Join us in empowering girls through technology education
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="flex gap-4 justify-center flex-wrap"
            >
              <Link href="/contact">
                <motion.button
                  whileHover={{ scale: 1.1, boxShadow: '0 20px 40px rgba(0,0,0,0.3)' }}
                  whileTap={{ scale: 0.95 }}
                  className="px-12 py-6 bg-white text-purple-600 rounded-full font-bold text-xl shadow-2xl"
                >
                  Get Involved
                </motion.button>
              </Link>
              
              <Link href="/donate">
                <motion.button
                  whileHover={{ scale: 1.1, boxShadow: '0 20px 40px rgba(0,0,0,0.3)' }}
                  whileTap={{ scale: 0.95 }}
                  className="px-12 py-6 bg-transparent border-2 border-white text-white rounded-full font-bold text-xl shadow-2xl"
                >
                  Support Us
                </motion.button>
              </Link>
            </motion.div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}