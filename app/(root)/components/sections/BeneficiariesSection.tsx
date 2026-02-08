'use client';

import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { MapPin, Calendar, Award, User } from 'lucide-react';
import type { Beneficiary } from '../../types/home';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

interface BeneficiariesSectionProps {
  beneficiaries: Beneficiary[] | null;
}

// Function to generate avatar with initials
const getInitials = (firstName?: string, lastName?: string) => {
  const first = firstName?.charAt(0) || '';
  const last = lastName?.charAt(0) || '';
  return (first + last).toUpperCase() || 'B';
};

// Function to generate consistent color from name
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
  if (!beneficiaries || beneficiaries.length === 0) {
    return null;
  }

  return (
    <div className="wrapper max-w-7xl mx-auto px-4 py-16">
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-100 dark:bg-emerald-900/20 rounded-full mb-4">
          <span className="text-emerald-600 dark:text-emerald-400 font-semibold text-sm uppercase tracking-wide">
            🌟 Our Impact
          </span>
        </div>
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-800 dark:text-gray-100">
          Success Stories
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Meet the inspiring girls and young women whose lives have been transformed through our
          programs
        </p>
      </motion.div>

      {/* Beneficiaries Grid/Carousel */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
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
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.1 }}
                  className="group relative bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden h-full"
                >
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-teal-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                  {/* Card Content */}
                  <div className="relative p-6 flex flex-col items-center text-center">
                    {/* Profile Image or Avatar */}
                    <div className="relative mb-4">
                      <div className="relative w-24 h-24 rounded-full overflow-hidden border-4 border-white dark:border-gray-700 shadow-lg group-hover:scale-110 group-hover:border-emerald-500 transition-all duration-500">
                        {beneficiary.profileImage ? (
                          <img
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

                      {/* Success badge */}
                      <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-emerald-500 border-2 border-white dark:border-gray-800 rounded-full flex items-center justify-center">
                        <Award className="w-4 h-4 text-white" />
                      </div>
                    </div>

                    {/* Name */}
                    <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-2 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                      {beneficiary.firstName} {beneficiary.lastName}
                    </h3>

                    {/* Status Badge */}
                    {beneficiary.beneficiaryStatus && (
                      <span className="inline-block px-3 py-1 bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400 text-xs font-medium rounded-full mb-3">
                        {beneficiary.beneficiaryStatus}
                      </span>
                    )}

                    {/* Divider */}
                    <div className="w-12 h-1 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full mb-3"></div>

                    {/* Info */}
                    <div className="space-y-2 w-full text-sm text-gray-600 dark:text-gray-400">
                      {beneficiary.location && (
                        <div className="flex items-center justify-center gap-2">
                          <MapPin className="w-4 h-4 text-emerald-500" />
                          <span>{beneficiary.location}</span>
                        </div>
                      )}

                      {beneficiary.dateOfBirth && (
                        <div className="flex items-center justify-center gap-2">
                          <Calendar className="w-4 h-4 text-emerald-500" />
                          <span>
                            {new Date(beneficiary.dateOfBirth).toLocaleDateString('en-US', {
                              year: 'numeric',
                              month: 'short',
                            })}
                          </span>
                        </div>
                      )}
                    </div>

                    {/* Story/Bio (if available) */}
                    {beneficiary.bio && (
                      <p className="mt-4 text-xs text-gray-500 dark:text-gray-400 line-clamp-3 leading-relaxed">
                        {beneficiary.bio}
                      </p>
                    )}
                  </div>

                  {/* Corner decoration */}
                  <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-emerald-500/20 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </motion.div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </motion.div>
    </div>
  );
}
