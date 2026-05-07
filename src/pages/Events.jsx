import React, { useRef, useEffect, useState } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
const heritageImg = `${import.meta.env.BASE_URL}images/heritage_walk_team1.webp`;
const workshopImg = `${import.meta.env.BASE_URL}images/excavation_hands1.webp`;
const careerImg = `${import.meta.env.BASE_URL}images/career_guidance1.webp`;





const Events = () => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end end']
  })

  return (
    <section ref={container} id="events" className="relative bg-brand-light">
      {/* Decorative Background - Subtle */}
      <div className="absolute inset-0 opacity-[0.01]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%235D4037' fill-opacity='1'%3E%3Cpath d='M50 50c0-5.523 4.477-10 10-10s10 4.477 10 10-4.477 10-10 10c0-5.523-4.477-10-10-10zm-10 10c0-5.523-4.477-10-10-10s-10 4.477-10 10 4.477 10 10 10c0-5.523 4.477-10 10-10zM10 10c0-5.523 4.477-10 10-10s10 4.477 10 10-4.477 10-10 10c0-5.523-4.477-10-10-10zm10 50c0-5.523-4.477-10-10-10s-10 4.477-10 10 4.477 10 10 10c0-5.523 4.477-10 10-10z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}
      />
    </section>
  );
};

/* ─────────────── Floating Particle Background ─────────────── */
const ParticleField = () => {
  const particles = Array.from({ length: 30 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 4 + 1,
    duration: Math.random() * 20 + 15,
    delay: Math.random() * 10,
  }));

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full bg-brand-tan/20"
          style={{ left: `${p.x}%`, top: `${p.y}%`, width: p.size, height: p.size }}
          animate={{
            y: [0, -40, 0],
            x: [0, 15, -15, 0],
            opacity: [0.2, 0.6, 0.2],
          }}
          transition={{
            duration: p.duration,
            delay: p.delay,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      ))}
    </div>
  );
};

/* ─────────────── Partner Card ─────────────── */
const PartnerCard = ({ icon, title, desc, delay }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay }}
      whileHover={{ y: -8 }}
      className="group relative bg-brand-dark rounded-2xl p-8 overflow-hidden border border-white/5 hover:border-brand-tan/20 transition-colors duration-500"
    >
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700"
        style={{ background: 'radial-gradient(circle at 50% 0%, rgba(141,110,99,0.15) 0%, transparent 70%)' }}
      />

      <div className="relative z-10">
        <motion.div
          whileHover={{ rotate: 10, scale: 1.1 }}
          className="w-14 h-14 rounded-xl bg-brand-accent/20 flex items-center justify-center mb-6 text-2xl"
        >
          {icon}
        </motion.div>
        <h4 className="font-display text-2xl font-bold text-white mb-3">{title}</h4>
        <p className="font-sans text-sm text-brand-tan/70 leading-relaxed">{desc}</p>
      </div>

      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 50, repeat: Infinity, ease: 'linear' }}
        className="absolute -bottom-10 -right-10 w-36 h-36 rounded-full border border-white/5"
      />
    </motion.div>
  );
};

const partnerItems = [
  {
    icon: '🏫',
    title: 'Schools',
    desc: "Partner with us to seamlessly integrate our competency-based EHL programme into your academic schedule to strengthen your students' understanding of curricular themes.",
  },
  {
    icon: '🤝',
    title: 'NGOs, Volunteers & Sponsors',
    desc: 'Join our multidisciplinary team of scholars, young researchers, and skilled educators to advance archaeology and promote social well-being. Help us explore ancient technologies, document unexplored sites, and lead awareness campaigns to make the past alive for learning and innovation.',
  },
];

const PartnerWithUs = () => {
  return (
    <section
      id="partner-with-us"
      className="relative py-24 px-6 overflow-hidden"
      style={{ background: 'linear-gradient(160deg, #3E2723 0%, #5D4037 60%, #6D4C41 100%)' }}
    >
      <ParticleField />

      <motion.div animate={{ rotate: 360 }} transition={{ duration: 70, repeat: Infinity, ease: 'linear' }}
        className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full border border-white/5 -translate-y-1/2 translate-x-1/4"
      />

      <div className="relative max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 text-xs font-sans font-bold uppercase tracking-[0.3em] text-brand-accent mb-4"
          >
            <span className="w-8 h-px bg-brand-accent" />
            Collaboration
            <span className="w-8 h-px bg-brand-accent" />
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="font-display text-4xl md:text-6xl font-bold text-white mb-6"
          >
            Partner <span className="text-brand-tan italic">With Us</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="font-sans text-sm text-brand-tan/60 max-w-2xl mx-auto leading-relaxed"
          >
            Guided by collaboration and inclusivity, Agazh Avaiyam seeks to grow as a collective force for knowledge, heritage, and sustainable progress. Education and community engagement stand at the heart of our mission.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {partnerItems.map((p, i) => (
            <PartnerCard key={p.title} icon={p.icon} title={p.title} desc={p.desc} delay={i * 0.15} />
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="text-center mt-14"
        >
          <motion.a
            href="#contactus"
            onClick={(e) => { e.preventDefault(); document.getElementById('contactus')?.scrollIntoView({ behavior: 'smooth' }); }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-3 px-10 py-4 rounded-full bg-white text-brand-dark font-sans font-bold text-sm uppercase tracking-widest shadow-2xl shadow-black/20 hover:bg-brand-tan transition-colors duration-300"
          >
            Get In Touch
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export { Events, PartnerWithUs };
export default Events;
