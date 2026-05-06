import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const templeImg = `${import.meta.env.BASE_URL}images/hero_temple_ruins_1768917098837.webp`;

const AboutSummary = () => {
  return (
    <section className="relative bg-brand-light py-20 sm:py-28 overflow-hidden">

      {/* Subtle warm dot grid */}
      <div
        className="absolute inset-0 opacity-[0.035] pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle, #8D6748 1px, transparent 1px)',
          backgroundSize: '36px 36px',
        }}
      />

      {/* Ambient warm glow */}
      <div className="absolute top-0 right-0 w-[420px] h-[420px] bg-brand-tan/20 rounded-full blur-[110px] pointer-events-none" />

      <div className="relative max-w-[1300px] mx-auto px-6 sm:px-10 md:px-14">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">

          {/* ── LEFT: Text ── */}
          <motion.div
            initial={{ opacity: 0, x: -36 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            viewport={{ once: true, amount: 0.3 }}
            className="flex flex-col items-start"
          >
            {/* Eyebrow */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-3 bg-white border border-brand-brown/15 rounded-full px-5 py-2.5 shadow-sm mb-8"
            >
              <div className="w-2 h-2 rounded-full bg-brand-brown animate-pulse" />
              <span className="font-mono text-[11px] uppercase tracking-widest text-brand-brown">
                About Us
              </span>
            </motion.div>

            {/* Heading */}
            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.18, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: true }}
              className="font-display text-5xl sm:text-6xl md:text-[5rem] text-brand-dark leading-[1.08] mb-7"
            >
              Experience <span className="italic text-brand-brown">Begins</span>
            </motion.h2>

            {/* Accent bar */}
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ delay: 0.32, duration: 0.7 }}
              viewport={{ once: true }}
              className="h-[2px] w-12 bg-gradient-to-r from-brand-brown to-transparent mb-7 rounded-full"
              style={{ transformOrigin: 'left' }}
            />

            {/* Body text */}
            <motion.p
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.7 }}
              viewport={{ once: true }}
              className="text-brand-dark/85 text-lg sm:text-xl leading-relaxed mb-4 max-w-[480px]"
            >
              <span className="font-semibold text-brand-brown">Agazh Avaiyam</span> is a repository
              of vibrant, living, and thriving culture. Backed by a multidisciplinary team of
              scholars and humanities practitioners, we deliver first-hand, experiential learning
              in archaeology and history.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.38, duration: 0.7 }}
              viewport={{ once: true }}
              className="text-brand-dark/60 text-sm sm:text-base leading-relaxed mb-10 max-w-[460px]"
            >
              Home to ancient traditions, multifarious artforms, and heritage tours — we promise
              you an enticing journey through Tamil Nadu's picturesque lands. Let us take you on
              carefully curated trails to see the best of our heritage.
            </motion.p>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.48, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Link
                to="/aboutus"
                className="group relative inline-flex items-center gap-3 px-8 py-4
                           bg-brand-brown text-white font-display text-sm tracking-wide
                           rounded-lg overflow-hidden shadow-lg
                           hover:shadow-[0_12px_36px_rgba(93,64,55,0.32)]
                           hover:-translate-y-1 transition-all duration-300"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/12 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out" />
                <span className="relative z-10">Learn More About Us</span>
                <motion.span
                  animate={{ x: [0, 4, 0] }}
                  transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
                  className="relative z-10 text-brand-tan"
                >
                  →
                </motion.span>
              </Link>
            </motion.div>
          </motion.div>

          {/* ── RIGHT: Premium Image ── */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.15, ease: 'easeOut' }}
            viewport={{ once: true, amount: 0.3 }}
            className="relative flex justify-center lg:justify-end"
          >
            {/* Decorative border frame — offset behind image */}
            <div
              className="absolute border-2 border-brand-brown/20 rounded-3xl pointer-events-none"
              style={{
                inset: 0,
                transform: 'translate(14px, 14px)',
                borderRadius: '1.5rem',
              }}
            />

            {/* Outer glow ring */}
            <div className="absolute inset-0 rounded-3xl bg-brand-brown/5 blur-2xl translate-x-2 translate-y-2 pointer-events-none" />

            {/* Main image card */}
            <motion.div
              whileHover={{ scale: 1.015 }}
              transition={{ duration: 0.5 }}
              className="relative w-full max-w-[560px] rounded-3xl overflow-hidden shadow-[0_24px_64px_rgba(93,64,55,0.18)] bg-brand-brown z-10"
            >
              <img
                src={templeImg}
                alt="Heritage Experience"
                className="w-full aspect-[4/3] object-cover object-center
                           hover:scale-105 transition-transform duration-700"
                loading="lazy"
              />

              {/* Bottom gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/50 via-transparent to-transparent" />

              {/* Bottom-left label inside image */}
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.6 }}
                viewport={{ once: true }}
                className="absolute bottom-0 inset-x-0 p-6"
              >
                <p className="font-display text-white text-xl italic">
                  "Where heritage comes alive"
                </p>
              </motion.div>

              {/* Shimmer on scroll enter */}
              <motion.div
                initial={{ x: '-100%' }}
                whileInView={{ x: '220%' }}
                transition={{ duration: 0.9, ease: 'easeOut', delay: 0.4 }}
                viewport={{ once: true }}
                className="absolute inset-y-0 w-1/3 bg-gradient-to-r from-transparent via-white/15 to-transparent skew-x-12 pointer-events-none"
              />
            </motion.div>



          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default AboutSummary;
