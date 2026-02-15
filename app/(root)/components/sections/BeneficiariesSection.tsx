'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { MapPin, Calendar, Award, User, Sparkles, Heart } from 'lucide-react';
import type { Beneficiary } from '../../types/home';

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

export default function BeneficiariesSection({ beneficiaries }: BeneficiariesSectionProps) {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: '-100px' });

  if (!beneficiaries || beneficiaries.length === 0) {
    return null;
  }

  return (
    <div ref={containerRef} className="wrapper max-w-7xl mx-auto px-4 py-16 relative">
      {/* Animated background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.05, 0.1, 0.05],
            rotate: [0, 360],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
          className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-gradient-to-tl from-emerald-500 via-teal-500 to-cyan-500 rounded-full blur-3xl"
        />
      </div>

      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="text-center mb-12 relative z-10"
      >
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
          className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-100 dark:bg-emerald-900/20 rounded-full mb-4 shadow-lg"
        >
          <motion.div
            animate={{ scale: [1, 1.3, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            🌟
          </motion.div>
          <span className="text-emerald-600 dark:text-emerald-400 font-semibold text-sm uppercase tracking-wide">
            Our Impact
          </span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold mb-4 text-gray-800 dark:text-gray-100"
        >
          <motion.span
            animate={{
              backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
            }}
            transition={{ duration: 5, repeat: Infinity, ease: 'linear' }}
            className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600"
            style={{ backgroundSize: '200% 200%' }}
          >
            Success Stories
          </motion.span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto"
        >
          Meet the inspiring girls and young women whose lives have been transformed through our
          programs
        </motion.p>

        {/* Decorative line */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={isInView ? { scaleX: 1 } : {}}
          transition={{ delay: 0.6, duration: 1 }}
          className="h-1 w-32 bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 mx-auto rounded-full mt-6"
        />
      </motion.div>

      {/* Beneficiaries Carousel */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 0.5, duration: 0.8 }}
        className="relative z-10"
      >
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          navigation={true}
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
          {beneficiaries.map((beneficiary, idx) => {
            const initials = getInitials(beneficiary.firstName, beneficiary.lastName);
            const avatarColor = getAvatarColor(beneficiary.firstName, beneficiary.lastName);

            return (
              <SwiperSlide key={beneficiary.id}>
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: idx * 0.1 }}
                  whileHover={{
                    y: -10,
                    scale: 1.03,
                    transition: { duration: 0.3 },
                  }}
                  className="group relative bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden h-full"
                  style={{ transformStyle: 'preserve-3d' }}
                >
                  {/* Glowing border effect */}
                  <motion.div className="absolute -inset-0.5 bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 rounded-2xl opacity-0 group-hover:opacity-30 blur transition-opacity duration-500" />

                  {/* Gradient overlay */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 0.1 }}
                    className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-teal-500/5"
                  />

                  {/* Floating sparkles */}
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
                          duration: Math.random() * 3 + 2,
                          repeat: Infinity,
                          delay: Math.random() * 2,
                        }}
                        className="absolute"
                        style={{ left: `${Math.random() * 100}%` }}
                      >
                        <Sparkles className="w-3 h-3 text-emerald-400" />
                      </motion.div>
                    ))}
                  </div>

                  {/* Card Content */}
                  <div className="relative p-6 flex flex-col items-center text-center">
                    {/* Profile Image */}
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

                      {/* Pulse ring */}
                      <motion.div
                        animate={{
                          scale: [1, 1.4, 1],
                          opacity: [0.5, 0, 0.5],
                        }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="absolute inset-0 border-4 border-emerald-500 rounded-full"
                      />

                      {/* Success badge */}
                      <motion.div
                        whileHover={{ scale: 1.2, rotate: 360 }}
                        transition={{ duration: 0.3 }}
                        className="absolute -bottom-2 -right-2 w-8 h-8 bg-emerald-500 border-2 border-white dark:border-gray-800 rounded-full flex items-center justify-center shadow-lg"
                      >
                        <Award className="w-4 h-4 text-white" />
                      </motion.div>
                    </motion.div>

                    {/* Name */}
                    <motion.h3 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-2 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                      {beneficiary.firstName} {beneficiary.lastName}
                    </motion.h3>

                    {/* Status Badge */}
                    {beneficiary.beneficiaryStatus && (
                      <motion.span
                        whileHover={{ scale: 1.05 }}
                        className="inline-block px-3 py-1 bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400 text-xs font-medium rounded-full mb-3"
                      >
                        {beneficiary.beneficiaryStatus}
                      </motion.span>
                    )}

                    {/* Animated divider */}
                    <motion.div
                      initial={{ width: '3rem' }}
                      whileHover={{ width: '100%' }}
                      transition={{ duration: 0.5 }}
                      className="h-1 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full mb-3"
                    />

                    {/* Info */}
                    <div className="space-y-2 w-full text-sm text-gray-600 dark:text-gray-400">
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

                    {/* Story/Bio */}
                    {beneficiary.bio && (
                      <p className="mt-4 text-xs text-gray-500 dark:text-gray-400 line-clamp-3 leading-relaxed">
                        {beneficiary.bio}
                      </p>
                    )}
                  </div>

                  {/* Corner decoration */}
                  <motion.div
                    initial={{ scale: 0 }}
                    whileHover={{ scale: 1 }}
                    className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-emerald-500/20 to-transparent rounded-bl-full"
                  />
                </motion.div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </motion.div>
    </div>
  );
}
