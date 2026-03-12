import React, { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { Github, Linkedin, Mail, Twitter, Download, ExternalLink, ArrowDown, Code2, Database, GitBranch, Zap, Package, Terminal, Menu, X, Share2, Copy, MessageCircle } from 'lucide-react';

// Floating Share Button
const FloatingShareButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  const shareUrl = typeof window !== 'undefined' ? window.location.href : '';
  const shareTitle = 'Check out my developer portfolio!';

  const shareOptions = [
    {
      name: 'Twitter',
      icon: Twitter,
      color: '#1DA1F2',
      action: () => {
        window.open(
          `https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(shareTitle)}`,
          '_blank',
          'width=550,height=420'
        );
      },
    },
    {
      name: 'LinkedIn',
      icon: Linkedin,
      color: '#0A66C2',
      action: () => {
        window.open(
          `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`,
          '_blank',
          'width=550,height=420'
        );
      },
    },
    {
      name: 'WhatsApp',
      icon: MessageCircle,
      color: '#25D366',
      action: () => {
        window.open(
          `https://wa.me/?text=${encodeURIComponent(shareTitle + ' ' + shareUrl)}`,
          '_blank'
        );
      },
    },
    {
      name: 'Email',
      icon: Mail,
      color: '#EA4335',
      action: () => {
        window.location.href = `mailto:?subject=${encodeURIComponent(shareTitle)}&body=${encodeURIComponent(shareUrl)}`;
      },
    },
    {
      name: 'Copy Link',
      icon: Copy,
      color: '#00FF41',
      action: () => {
        navigator.clipboard.writeText(shareUrl);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      },
    },
  ];

  return (
    <motion.div
      className="fixed right-6 bottom-6 z-40"
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1 }}
    >
      {/* Share Menu */}
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={isOpen ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
        transition={{ duration: 0.3 }}
        className="absolute bottom-24 right-0 flex flex-col gap-3"
      >
        {shareOptions.map((option, idx) => (
          <motion.button
            key={idx}
            initial={{ opacity: 0, y: 10 }}
            animate={isOpen ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
            transition={{ delay: idx * 0.05 }}
            onClick={() => {
              option.action();
              setIsOpen(false);
            }}
            className="group relative"
            title={option.name}
          >
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="p-3 rounded-full backdrop-blur-md bg-black/40 border border-white/20 text-white hover:border-white/40 transition-all duration-300 flex items-center justify-center"
              style={{ width: 45, height: 45 }}
            >
              <option.icon size={20} style={{ color: option.color }} />
            </motion.div>
            
            {/* Tooltip */}
            <motion.div
              initial={{ opacity: 0, x: 10 }}
              whileHover={{ opacity: 1, x: 0 }}
              className="absolute right-full mr-3 px-2 py-1 bg-black/80 text-white text-xs rounded whitespace-nowrap pointer-events-none"
            >
              {copied && option.name === 'Copy Link' ? '✓ Copied!' : option.name}
            </motion.div>
          </motion.button>
        ))}
      </motion.div>

      {/* Main Share Button */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className="p-4 rounded-full backdrop-blur-md bg-gradient-to-br from-green-400/30 to-cyan-400/20 border border-green-400/50 text-green-400 hover:border-green-400 hover:bg-green-400/40 transition-all duration-300 shadow-lg hover:shadow-green-400/50 group relative"
      >
        <motion.div
          animate={isOpen ? { rotate: 45 } : { rotate: 0 }}
          transition={{ duration: 0.3 }}
        >
          <Share2 size={24} />
        </motion.div>

        {/* Glow effect */}
        <motion.div
          className="absolute inset-0 rounded-full bg-green-400/20 blur-lg"
          animate={isOpen ? { scale: 1.2, opacity: 0.8 } : { scale: 1, opacity: 0.5 }}
          transition={{ duration: 0.3 }}
        />

        {/* Tooltip */}
        <motion.div
          initial={{ opacity: 0, x: 10 }}
          whileHover={{ opacity: 1, x: 0 }}
          className="absolute right-full mr-3 px-3 py-1 bg-black/80 text-white text-xs rounded whitespace-nowrap pointer-events-none font-semibold"
        >
          Share Portfolio
        </motion.div>
      </motion.button>
    </motion.div>
  );
};

// Matrix Background Component
const MatrixBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const columns = canvas.width / 20;
    const drops = Array(Math.floor(columns)).fill(0);
    const chars = '01アイウエオカキクケコabc123XYZdefghijk456!@#$%jklmno789pqrst☆★◆■□△▲●○';

    const draw = () => {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = '#00ff41';
      ctx.font = '16px monospace';

      for (let i = 0; i < drops.length; i++) {
        const char = chars[Math.floor(Math.random() * chars.length)];
        ctx.fillText(char, i * 20, drops[i] * 20);

        if (drops[i] * 20 > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      }
    };

    const interval = setInterval(draw, 50);

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);
    return () => {
      clearInterval(interval);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full"
      style={{ zIndex: 0 }}
    />
  );
};

// Tech Stack Carousel
const TechStackCarousel = () => {
  const techStack = [
    { icon: Code2, label: 'React', color: '#61dafb' },
    { icon: Terminal, label: 'Node.js', color: '#68a063' },
    { icon: Database, label: 'MongoDB', color: '#13aa52' },
    { icon: GitBranch, label: 'Git', color: '#f34f29' },
    { icon: Zap, label: 'JavaScript', color: '#f7df1e' },
    { icon: Package, label: 'TypeScript', color: '#3178c6' },
  ];

  const tripleStack = [...techStack, ...techStack, ...techStack];

  return (
    <div className="w-full overflow-hidden py-12">
      <motion.div
        className="flex gap-12"
        animate={{ x: [-1440, 0] }}
        transition={{
          duration: 40,
          repeat: Infinity,
          ease: 'linear',
        }}
      >
        {tripleStack.map((tech, idx) => (
          <motion.div
            key={idx}
            whileHover={{ scale: 1.15, y: -12 }}
            className="flex-shrink-0 flex flex-col items-center gap-3 cursor-pointer group"
          >
            <motion.div
              className="p-6 rounded-2xl backdrop-blur-xl border flex items-center justify-center transition-all"
              style={{
                width: 100,
                height: 100,
                background: `linear-gradient(135deg, rgba(255,255,255,0.12), rgba(255,255,255,0.03))`,
                borderColor: `${tech.color}35`,
                boxShadow: `0 8px 32px 0 rgba(31, 38, 135, 0.15), inset 0 0 20px ${tech.color}12`,
              }}
              whileHover={{
                background: `linear-gradient(135deg, rgba(255,255,255,0.2), rgba(255,255,255,0.08))`,
                boxShadow: `0 8px 32px 0 ${tech.color}50, inset 0 0 30px ${tech.color}25`,
              }}
            >
              <motion.div
                animate={{ rotateY: [0, 10, -10, 0] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              >
                <tech.icon size={48} style={{ color: tech.color }} strokeWidth={1.5} />
              </motion.div>
            </motion.div>

            <span className="text-xs font-semibold text-gray-400 group-hover:text-green-400 transition-colors whitespace-nowrap">
              {tech.label}
            </span>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

// Typing Animation
const TypingAnimation = () => {
  const [displayedRole, setDisplayedRole] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [roleIndex, setRoleIndex] = useState(0);
  
  const roles = ['Developer', 'Computer Science Student', 'Tech Enthusiast', 'Problem Solver', 'Software Engineer'];

  useEffect(() => {
    const currentRole = roles[roleIndex];
    let timer;

    if (!isDeleting && displayedRole !== currentRole) {
      timer = setTimeout(() => {
        setDisplayedRole(currentRole.substring(0, displayedRole.length + 1));
      }, 100);
    } else if (isDeleting && displayedRole !== '') {
      timer = setTimeout(() => {
        setDisplayedRole(displayedRole.substring(0, displayedRole.length - 1));
      }, 50);
    } else if (displayedRole === currentRole && !isDeleting) {
      timer = setTimeout(() => setIsDeleting(true), 2000);
    } else if (displayedRole === '' && isDeleting) {
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }

    return () => clearTimeout(timer);
  }, [displayedRole, isDeleting, roleIndex, roles]);

  return (
    <div className="h-12 md:h-16 flex items-center">
      <span className="text-2xl md:text-3xl lg:text-3xl text-green-400 font-mono">
        {displayedRole}
        <span className="animate-pulse">|</span>
      </span>
    </div>
  );
};

// Hero Section - NO UPLOAD BUTTON
const HeroSection = () => {
  const { scrollY } = useScroll();
  const imageY = useTransform(scrollY, [0, 300], [0, 100]);
  const contentY = useTransform(scrollY, [0, 300], [0, 50]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      <div className="max-w-7xl w-full mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16 items-center z-10 py-20">
        
        {/* LEFT - Profile */}
        <motion.div
          style={{ y: imageY }}
          initial={{ opacity: 0, scale: 0.8, rotateY: -20 }}
          animate={{ opacity: 1, scale: 1, rotateY: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative flex justify-center order-1"
        >
          <div className="relative w-64 h-72 md:w-80 md:h-96 lg:w-96 lg:h-full">
            <motion.div 
              className="absolute inset-0 bg-gradient-to-br from-green-400 to-cyan-400 rounded-3xl opacity-20 blur-3xl"
              animate={{ 
                scale: [1, 1.1, 1],
                opacity: [0.2, 0.4, 0.2]
              }}
              transition={{ duration: 4, repeat: Infinity }}
            />

            <motion.div
              whileHover={{ rotateZ: 5, y: -20 }}
              transition={{ type: "spring", stiffness: 300, damping: 10 }}
              className="relative w-full h-full rounded-3xl border-2 border-green-400/50 overflow-hidden backdrop-blur-xl bg-gradient-to-br from-green-400/10 to-cyan-400/5 shadow-2xl"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-green-400/20 to-transparent" />
              
              <div className="w-full h-full flex flex-col items-center justify-center relative z-10">
                {/* ADD YOUR PHOTO HERE - Replace with your image path */}
                <img
                  src="./sanjay.png"
                  alt="Profile"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    // If photo not found, show initials
                    e.target.style.display = 'none';
                    e.target.parentElement.innerHTML = `
                      <div style="text-align: center; width: 100%; height: 100%; display: flex; flex-direction: column; align-items: center; justify-content: center;">
                        <div style="
                          fontSize: '5.5rem',
                          fontWeight: 900,
                          color: '#00ff41',
                          textShadow: '0 0 30px rgba(0, 255, 65, 0.5)',
                          fontFamily: 'Playfair Display, serif'
                        ">SR</div>
                        <p style="color: '#4ade80', fontFamily: 'monospace'">Sanjay Ram</p>
                      </div>
                    `;
                  }}
                />
              </div>

              <motion.div
                className="absolute inset-0 border-2 border-transparent rounded-3xl"
                style={{
                  backgroundImage: 'linear-gradient(45deg, transparent, rgba(0, 255, 65, 0.5), transparent)',
                  backgroundPosition: '0% 0%',
                  backgroundSize: '200% 200%'
                }}
                animate={{
                  backgroundPosition: ['0% 0%', '100% 100%']
                }}
                transition={{ duration: 3, repeat: Infinity }}
              />
            </motion.div>
          </div>
        </motion.div>

        {/* RIGHT - Content */}
        <motion.div
          style={{ y: contentY }}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
          className="space-y-6 order-2"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <p className="text-green-400 font-mono text-sm tracking-widest uppercase">Welcome to my portfolio</p>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white leading-tight"
            style={{
              textShadow: '0 0 30px rgba(0, 255, 65, 0.2)',
              fontFamily: '"Playfair Display", serif',
              fontWeight: 700,
              letterSpacing: '-0.02em'
            }}
          >
            Hi, It's <span className="text-green-400">Sanjay Ram</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            style={{ fontFamily: '"Poppins", sans-serif' }}
          >
            I'm a <span className="text-green-400 font-semibold">
              <TypingAnimation />
            </span>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-gray-400 text-lg md:text-xl leading-relaxed max-w-md"
            style={{ fontFamily: '"Poppins", sans-serif', fontWeight: 400 }}
          >
            Computer Science student • Developer • Tech enthusiast
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="flex gap-4 pt-4"
          >
            {[
              { icon: Github, href: 'https://github.com/T-sanjay-ram', label: 'GitHub' },
              { icon: Linkedin, href: 'https://www.linkedin.com/in/t-sanjay-ram-a1996a340', label: 'LinkedIn' },
              { icon: Mail, href: 'mailto:sanjayram07ctr@gmail.com', label: 'Email' },
              { icon: Twitter, href: 'https://twitter.com', label: 'Twitter' },
            ].map((social, idx) => (
              <motion.a
                key={idx}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.7 + idx * 0.1 }}
                whileHover={{ scale: 1.3, rotate: 360, boxShadow: '0 0 25px rgba(0, 255, 65, 0.8)' }}
                whileTap={{ scale: 0.9 }}
                className="p-3 rounded-lg backdrop-blur-md bg-green-400/10 border border-green-400/30 text-green-400 hover:text-green-300 transition-all duration-300"
              >
                <social.icon size={24} />
              </motion.a>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <style>{`
              @keyframes shimmer {
                0% {
                  left: -100%;
                }
                100% {
                  left: 100%;
                }
              }
              .hire-me-button::before {
                content: '';
                position: absolute;
                top: 0;
                left: -100%;
                width: 100%;
                height: 100%;
                background: linear-gradient(90deg, transparent, rgba(0, 255, 65, 0.5), transparent);
                animation: shimmer 3s infinite;
              }
            `}</style>
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(0, 255, 65, 0.8)" }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                document.querySelector('#contact').scrollIntoView({ behavior: 'smooth' });
              }}
              className="px-8 py-4 font-bold text-lg text-white rounded-lg border border-green-400/50 bg-green-400/10 hover:bg-green-400/20 transition-all duration-300 relative overflow-hidden group hire-me-button"
              style={{ fontFamily: '"Poppins", sans-serif' }}
            >
              <span className="relative flex items-center gap-2">
                Hire Me
              </span>
            </motion.button>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        animate={{ y: [0, 15, 0] }}
        transition={{ duration: 2.5, repeat: Infinity }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 text-green-400 z-20"
      >
        <div className="text-sm mb-2 font-mono text-center">Scroll to explore</div>
        <ArrowDown className="mx-auto" size={24} />
      </motion.div>
    </section>
  );
};

// About Section
const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.3 });
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [500, 1000], [100, 0]);

  return (
    <section ref={ref} id="about" className="relative min-h-screen flex items-center justify-center py-20 px-4 z-10">
      <div className="max-w-5xl w-full">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
          transition={{ duration: 0.8 }}
          className="mb-12"
        >
          <h2 className="text-5xl md:text-6xl font-black text-white mb-4 tracking-tighter"
            style={{ fontFamily: '"Playfair Display", serif' }}>
            About Me
          </h2>
          <motion.div 
            initial={{ width: 0 }}
            animate={isInView ? { width: 80 } : { width: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="h-1 bg-gradient-to-r from-green-400 to-cyan-400 rounded-full"
          />
        </motion.div>

        <motion.div
          style={{ y }}
          initial={{ opacity: 0, y: 50, rotateX: -20 }}
          animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : { opacity: 0, y: 50, rotateX: -20 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="backdrop-blur-md bg-white/5 border border-white/10 rounded-3xl p-8 md:p-12 shadow-2xl overflow-hidden relative"
        >
          <motion.div
            className="absolute top-0 right-0 w-96 h-96 bg-green-400/5 rounded-full blur-3xl"
            animate={{
              x: [0, 50, 0],
              y: [0, 50, 0],
              scale: [1, 1.2, 1]
            }}
            transition={{ duration: 8, repeat: Infinity }}
          />

          <div className="relative z-10 space-y-6" style={{ fontFamily: '"Poppins", sans-serif' }}>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-lg md:text-xl text-gray-300 leading-relaxed"
            >
              I'm a passionate <span className="text-green-400 font-semibold">Computer Science Engineering student</span> driven by curiosity and a deep interest in building innovative software solutions.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-lg md:text-xl text-gray-300 leading-relaxed"
            >
              I enjoy transforming ideas into functional applications while continuously exploring new technologies and improving my development skills.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-lg md:text-xl text-gray-300 leading-relaxed"
            >
              My goal is to craft impactful digital experiences that combine creativity, technology, and real-world problem solving.
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-12 relative z-10"
          >
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(0, 255, 65, 0.5)" }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                alert('CV download would be triggered here');
              }}
              className="px-8 py-4 bg-gradient-to-r from-green-400/20 to-cyan-400/20 border border-green-400/50 text-green-400 rounded-lg font-semibold flex items-center gap-2 hover:bg-green-400/30 hover:border-green-400 transition-all duration-300 group relative overflow-hidden"
              style={{ fontFamily: '"Poppins", sans-serif' }}
            >
              <Download size={20} />
              <span className="relative">Download CV</span>
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

// Projects Section
const ProjectsSection = () => {
  const projects = [
    {
      title: 'AI Chat Application',
      description: 'Real-time chat application with AI-powered responses.',
      tech: ['React', 'Node.js', 'WebSocket', 'MongoDB'],
      github: 'https://github.com',
      demo: 'https://example.com',
    },
    {
      title: 'E-Commerce Platform',
      description: 'Full-stack e-commerce platform with payment integration.',
      tech: ['Next.js', 'Stripe', 'PostgreSQL', 'Tailwind'],
      github: 'https://github.com',
      demo: 'https://example.com',
    },
    {
      title: 'Portfolio Website',
      description: 'Personal portfolio with animations and dark theme.',
      tech: ['React', 'Framer Motion', 'Tailwind', 'JS'],
      github: 'https://github.com',
      demo: 'https://example.com',
    },
    {
      title: 'Data Dashboard',
      description: 'Real-time data visualization and analytics.',
      tech: ['React', 'D3.js', 'Express', 'PostgreSQL'],
      github: 'https://github.com',
      demo: 'https://example.com',
    },
    {
      title: 'ML Model',
      description: 'Sentiment analysis with web interface.',
      tech: ['Python', 'TensorFlow', 'Flask', 'React'],
      github: 'https://github.com',
      demo: 'https://example.com',
    },
    {
      title: 'Mobile App',
      description: 'Task management cross-platform app.',
      tech: ['React Native', 'Firebase', 'Redux', 'TS'],
      github: 'https://github.com',
      demo: 'https://example.com',
    },
  ];

  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.2 });

  return (
    <section ref={ref} id="projects" className="relative min-h-screen flex items-center justify-center py-20 px-4 z-10">
      <div className="max-w-6xl w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
          className="mb-12"
        >
          <h2 className="text-5xl md:text-6xl font-black text-white mb-4 tracking-tighter"
            style={{ fontFamily: '"Playfair Display", serif' }}>
            Featured Projects
          </h2>
          <motion.div 
            initial={{ width: 0 }}
            animate={isInView ? { width: 80 } : { width: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="h-1 bg-gradient-to-r from-green-400 to-cyan-400 rounded-full"
          />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 50, scale: 0.9 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              whileHover={{ y: -20, scale: 1.05 }}
              className="group relative backdrop-blur-md bg-white/5 border border-white/10 rounded-xl p-6 overflow-hidden transition-all duration-300 hover:border-green-400/50 hover:bg-white/10 cursor-pointer"
            >
              <div className="relative z-10" style={{ fontFamily: '"Poppins", sans-serif' }}>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-green-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-400 mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="text-xs px-2 py-1 rounded bg-green-400/20 text-green-300 border border-green-400/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-3">
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-green-400 hover:text-green-300">
                    <Github size={20} />
                  </a>
                  <a href={project.demo} target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:text-cyan-300">
                    <ExternalLink size={20} />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Skills Section - PROPERLY WRAPPED AS COMPONENT
const SkillsSection = () => {
  const skillCategories = [
    {
      title: 'Programming Languages',
      skills: [
        { name: 'JavaScript', percentage: 95 },
        { name: 'Python', percentage: 92 },
        { name: 'Java', percentage: 88 },
        { name: 'C++', percentage: 90 },
        { name: 'TypeScript', percentage: 93 },
        { name: 'SQL', percentage: 91 },
      ],
    },
    {
      title: 'Web Development',
      skills: [
        { name: 'React', percentage: 96 },
        { name: 'Node.js', percentage: 94 },
        { name: 'Express', percentage: 89 },
        { name: 'HTML/CSS', percentage: 98 },
        { name: 'REST APIs', percentage: 92 },
      ],
    },
    {
      title: 'Tools & Technologies',
      skills: [
        { name: 'Git', percentage: 97 },
        { name: 'Docker', percentage: 85 },
        { name: 'AWS', percentage: 87 },
        { name: 'MongoDB', percentage: 91 },
        { name: 'PostgreSQL', percentage: 90 },
        { name: 'Firebase', percentage: 88 },
      ],
    },
  ];

  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.2 });

  return (
    <section ref={ref} id="skills" className="relative min-h-screen flex items-center justify-center py-20 px-4 z-10">
      <div className="max-w-5xl w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
          className="mb-12"
        >
          <h2 className="text-5xl md:text-6xl font-black text-white mb-4 tracking-tighter"
            style={{ fontFamily: '"Playfair Display", serif' }}>
            Skills & Expertise
          </h2>
          <motion.div 
            initial={{ width: 0 }}
            animate={isInView ? { width: 80 } : { width: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="h-1 bg-gradient-to-r from-green-400 to-cyan-400 rounded-full"
          />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {skillCategories.map((category, categoryIdx) => (
            <motion.div
              key={categoryIdx}
              initial={{ opacity: 0, y: 50, rotateX: -20 }}
              animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : { opacity: 0, y: 50, rotateX: -20 }}
              transition={{ duration: 0.6, delay: categoryIdx * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="backdrop-blur-md bg-white/5 border border-white/10 rounded-xl p-6 hover:border-green-400/50 hover:bg-white/10 transition-all duration-300"
            >
              <h3 className="text-lg font-bold text-green-400 mb-4" style={{ fontFamily: '"Poppins", sans-serif' }}>
                {category.title}
              </h3>
              <div className="space-y-2.5" style={{ fontFamily: '"Poppins", sans-serif' }}>
                {category.skills.map((skill, skillIdx) => (
                  <motion.div
                    key={skillIdx}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                    transition={{ duration: 0.4, delay: categoryIdx * 0.1 + skillIdx * 0.05 }}
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-gray-300 font-medium text-xs">{skill.name}</span>
                      <motion.span 
                        initial={{ opacity: 0 }}
                        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                        transition={{ duration: 0.6, delay: categoryIdx * 0.1 + skillIdx * 0.08 }}
                        className="text-green-400 font-semibold text-xs"
                      >
                        {skill.percentage}%
                      </motion.span>
                    </div>

                    <div className="w-32 h-0.5 bg-white/10 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={isInView ? { width: `${skill.percentage}%` } : { width: 0 }}
                        transition={{ 
                          duration: 1.2, 
                          delay: categoryIdx * 0.1 + skillIdx * 0.08,
                          ease: 'easeOut'
                        }}
                        className="h-full bg-gradient-to-r from-green-400 via-cyan-400 to-green-400 rounded-full shadow-lg"
                        style={{
                          boxShadow: '0 0 8px rgba(0, 255, 65, 0.4)',
                        }}
                      />
                    </div>

                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Tech Stack Showcase
const TechStackShowcase = () => {
  return (
    <section className="relative py-24 px-4 z-10 bg-black overflow-hidden border-y border-white/5">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false, amount: 0.3 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-black text-white mb-2"
            style={{ fontFamily: '"Playfair Display", serif' }}>
            Tech Stack
          </h2>
          <p className="text-green-400 font-mono text-xs tracking-widest uppercase">Technologies I Master</p>
        </motion.div>

        <TechStackCarousel />
      </div>
    </section>
  );
};

// Contact Section
const ContactSection = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.2 });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', message: '' });
    }, 3000);
  };

  return (
    <section ref={ref} id="contact" className="relative min-h-screen flex items-center justify-center py-20 px-4 z-10">
      <div className="max-w-2xl w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
          className="mb-12"
        >
          <h2 className="text-5xl md:text-6xl font-black text-white mb-4 tracking-tighter"
            style={{ fontFamily: '"Playfair Display", serif' }}>
            Get In Touch
          </h2>
          <motion.div 
            initial={{ width: 0 }}
            animate={isInView ? { width: 80 } : { width: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="h-1 bg-gradient-to-r from-green-400 to-cyan-400 rounded-full"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.95 }}
          animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 50, scale: 0.95 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl p-8 md:p-12"
        >
          {submitted && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-6 p-4 bg-green-400/20 border border-green-400/50 rounded-lg text-green-400 text-center font-semibold"
            >
              ✓ Message sent successfully!
            </motion.div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6" style={{ fontFamily: '"Poppins", sans-serif' }}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <label className="block text-sm font-semibold text-gray-300 mb-2">Name</label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:border-green-400/50 focus:outline-none focus:bg-white/10 transition-all duration-300"
                placeholder="Your name"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <label className="block text-sm font-semibold text-gray-300 mb-2">Email</label>
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:border-green-400/50 focus:outline-none focus:bg-white/10 transition-all duration-300"
                placeholder="your@email.com"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <label className="block text-sm font-semibold text-gray-300 mb-2">Message</label>
              <textarea
                required
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                rows="5"
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:border-green-400/50 focus:outline-none focus:bg-white/10 transition-all duration-300 resize-none"
                placeholder="Your message..."
              />
            </motion.div>

            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="w-full px-6 py-3 bg-gradient-to-r from-green-400/20 to-cyan-400/20 border border-green-400/50 text-green-400 rounded-lg font-bold hover:bg-green-400/30 hover:border-green-400 transition-all duration-300"
            >
              Send Message
            </motion.button>
          </form>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center mt-12"
        >
          <p className="text-gray-400 font-mono text-sm">
            © 2026 Sanjay Ram. Built with React, Framer Motion & Tailwind CSS.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

// Main App
export default function Portfolio() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="w-full bg-black text-white overflow-hidden">
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&family=Poppins:wght@400;500;600&family=JetBrains+Mono:wght@400&display=swap');
        
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        html {
          scroll-behavior: smooth;
        }

        body {
          background-color: #000;
          color: #fff;
          font-family: 'Poppins', sans-serif;
        }

        ::-webkit-scrollbar {
          width: 10px;
        }

        ::-webkit-scrollbar-track {
          background: rgba(0, 255, 65, 0.05);
        }

        ::-webkit-scrollbar-thumb {
          background: rgba(0, 255, 65, 0.3);
          border-radius: 5px;
        }

        ::-webkit-scrollbar-thumb:hover {
          background: rgba(0, 255, 65, 0.5);
        }
      `}</style>

      <MatrixBackground />
      <div className="fixed inset-0 bg-gradient-to-b from-black/30 via-black/50 to-black/80 pointer-events-none z-[1]" />

      {/* Floating Share Button */}
      <FloatingShareButton />

      {/* Responsive Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-black/40 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            className="text-2xl font-black text-green-400"
            style={{ fontFamily: '"Playfair Display", serif' }}
          >
            SR
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-8">
            {['About', 'Projects', 'Skills', 'Contact'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-gray-300 hover:text-green-400 transition-colors font-medium text-sm"
                style={{ fontFamily: '"Poppins", sans-serif' }}
              >
                {item}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-green-400 hover:text-green-300 transition-colors"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden bg-black/80 backdrop-blur-md border-t border-white/10"
          >
            <div className="flex flex-col gap-4 px-4 py-4">
              {['About', 'Projects', 'Skills', 'Contact'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-gray-300 hover:text-green-400 transition-colors font-medium text-sm py-2"
                  style={{ fontFamily: '"Poppins", sans-serif' }}
                >
                  {item}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </nav>

      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <SkillsSection />
      <TechStackShowcase />
      <ContactSection />
    </div>
  );
}