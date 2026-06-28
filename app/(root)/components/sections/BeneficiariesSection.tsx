'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { MapPin, Calendar, Award, Sparkles } from 'lucide-react';
import type { Beneficiary } from '../../types/home';

import Section from '../shared/components/Section';
import SectionHeader from '../shared/components/SectionHeader';
import SectionBackground from '../shared/components/SectionBackground';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

interface BeneficiariesSectionProps {
  beneficiaries: Beneficiary[] | null;
}

const getInitials = (firstName?: string, lastName?: string) => {
  const first = firstName?.charAt(0) || '';
  const last = lastName?.charAt(0) || '';
  return (first + last).toUpperCase() || 'B';
};

const getAvatarColor = (firstName?: string, lastName?: string) => {
  const colors = [
    'from-emerald-500 to-teal-600',
    'from-cyan-500 to-blue-600',
    'from-violet-500 to-purple-600',
    'from-fuchsia-500 to-pink-600',
    'from-rose-500 to-red-600',
    'from-amber-500 to-orange-600',
    'from-lime-500 to-green-600',
    'from-sky-500 to-indigo-600',
  ];

  const name = `${firstName}${lastName}`;
  const index = name.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);

  return colors[index % colors.length];
};

export default function BeneficiariesSection({
  beneficiaries,
}: BeneficiariesSectionProps) {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: '-100px' });

  if (!beneficiaries || beneficiaries.length === 0) return null;

  return (
    <Section className="relative">
      <div ref={containerRef}>
        <SectionBackground
          gradient="from-emerald-500 via-teal-500 to-cyan-500"
          position="bottom-right"
          duration={25}
          opacity={[0.04, 0.09, 0.04]}
        />

        <SectionHeader
          badge="Our Impact"
          title="Success Stories"
          description="Meet the inspiring girls and young women whose lives have been transformed through our programs"
          icon={<span className="text-base">🌟</span>}
          badgeClassName="bg-emerald-100 dark:bg-emerald-900/20 text-emerald-600 dark:text-emerald-400"
          titleGradient="from-emerald-600 via-teal-600 to-cyan-600"
          dividerGradient="from-emerald-500 via-teal-500 to-cyan-500"
        />

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.35, duration: 0.8 }}
          className="relative z-10"
        >
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            navigation
            pagination={{
              clickable: true,
              dynamicBullets: true,
            }}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            loop={beneficiaries.length > 3}
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 30,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
              1280: {
                slidesPerView: 4,
                spaceBetween: 30,
              },
            }}
            className="beneficiaries-swiper pb-16"
          >
            {beneficiaries.map((beneficiary, idx) => (
              <SwiperSlide key={beneficiary.id}>
                <BeneficiaryCard beneficiary={beneficiary} index={idx} />
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </div>
    </Section>
  );
}

function BeneficiaryCard({
  beneficiary,
  index,
}: {
  beneficiary: Beneficiary;
  index: number;
}) {
  const initials = getInitials(beneficiary.firstName, beneficiary.lastName);
  const avatarColor = getAvatarColor(beneficiary.firstName, beneficiary.lastName);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: index * 0.1 }}
      whileHover={{
        y: -10,
        scale: 1.03,
        transition: { duration: 0.3 },
      }}
      className="group relative bg-white dark:bg-gray-900 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden h-full border border-gray-200 dark:border-gray-800"
      style={{ transformStyle: 'preserve-3d' }}
    >
      <motion.div className="absolute -inset-0.5 bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 rounded-2xl opacity-0 group-hover:opacity-30 blur transition-opacity duration-500" />

      <motion.div
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 0.1 }}
        className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-teal-500/5"
      />

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              y: ['100%', '-100%'],
              x: ['-20%', '20%'],
              opacity: [0, 1, 0],
              scale: [0, 1, 0],
            }}
            transition={{
              duration: 2 + i * 0.4,
              repeat: Infinity,
              delay: i * 0.35,
            }}
            className="absolute"
            style={{ left: `${20 + i * 15}%` }}
          >
            <Sparkles className="w-3 h-3 text-emerald-400" />
          </motion.div>
        ))}
      </div>

      <div className="relative p-6 flex flex-col items-center text-center">
        <motion.div
          className="relative mb-4"
          whileHover={{ scale: 1.1, rotate: 5 }}
          transition={{ duration: 0.3 }}
        >
          <div className="relative w-24 h-24 rounded-full overflow-hidden border-4 border-white dark:border-gray-700 shadow-xl">
            {beneficiary.profileImage ? (
              <motion.img
                whileHover={{ scale: 1.2 }}
                transition={{ duration: 0.6 }}
                src={beneficiary.profileImage}
                alt={`${beneficiary.firstName} ${beneficiary.lastName}`}
                className="w-full h-full object-cover"
              />
            ) : (
              <div
                className={`w-full h-full bg-gradient-to-br ${avatarColor} flex items-center justify-center`}
              >
                <span className="text-white text-2xl font-bold">{initials}</span>
              </div>
            )}
          </div>

          <motion.div
            animate={{
              scale: [1, 1.4, 1],
              opacity: [0.5, 0, 0.5],
            }}
            transition={{ duration: 2, repeat: Infinity }}
            className="absolute inset-0 border-4 border-emerald-500 rounded-full"
          />

          <motion.div
            whileHover={{ scale: 1.2, rotate: 360 }}
            transition={{ duration: 0.3 }}
            className="absolute -bottom-2 -right-2 w-8 h-8 bg-emerald-500 border-2 border-white dark:border-gray-800 rounded-full flex items-center justify-center shadow-lg"
          >
            <Award className="w-4 h-4 text-white" />
          </motion.div>
        </motion.div>

        <h3 className="heading-3 text-site-primary mb-2 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
          {beneficiary.firstName} {beneficiary.lastName}
        </h3>

        {beneficiary.beneficiaryStatus && (
          <motion.span
            whileHover={{ scale: 1.05 }}
            className="inline-block px-3 py-1 bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400 caption font-medium rounded-full mb-3"
          >
            {beneficiary.beneficiaryStatus}
          </motion.span>
        )}

        <motion.div
          initial={{ width: '3rem' }}
          whileHover={{ width: '100%' }}
          transition={{ duration: 0.5 }}
          className="h-1 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full mb-3"
        />

        <div className="space-y-2 w-full caption text-site-secondary">
          {beneficiary.location && (
            <motion.div
              whileHover={{ scale: 1.05, x: 5 }}
              className="flex items-center justify-center gap-2"
            >
              <MapPin className="w-4 h-4 text-emerald-500" />
              <span>{beneficiary.location}</span>
            </motion.div>
          )}

          {beneficiary.dateOfBirth && (
            <motion.div
              whileHover={{ scale: 1.05, x: 5 }}
              className="flex items-center justify-center gap-2"
            >
              <Calendar className="w-4 h-4 text-emerald-500" />
              <span>
                {new Date(beneficiary.dateOfBirth).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'short',
                })}
              </span>
            </motion.div>
          )}
        </div>

        {beneficiary.bio && (
          <p className="mt-4 caption text-site-muted line-clamp-3">
            {beneficiary.bio}
          </p>
        )}
      </div>

      <motion.div
        initial={{ scale: 0 }}
        whileHover={{ scale: 1 }}
        className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-emerald-500/20 to-transparent rounded-bl-full"
      />
    </motion.div>
  );
}