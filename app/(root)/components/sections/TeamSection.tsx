'use client';

import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectCoverflow } from 'swiper/modules';
import { Mail, Phone, Linkedin, Facebook, Globe, User } from 'lucide-react';
import type { TeamMember } from '../../types/home';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';

interface TeamSectionProps {
  teamMembers: TeamMember[] | null;
}

// Function to generate avatar with initials
const getInitials = (firstName?: string, lastName?: string) => {
  const first = firstName?.charAt(0) || '';
  const last = lastName?.charAt(0) || '';
  return (first + last).toUpperCase() || 'TM';
};

// Function to generate consistent color from name
const getAvatarColor = (firstName?: string, lastName?: string) => {
  const colors = [
    'from-blue-500 to-blue-600',
    'from-purple-500 to-purple-600',
    'from-pink-500 to-pink-600',
    'from-[#9f004d] to-pink-600',
    'from-orange-500 to-orange-600',
    'from-teal-500 to-teal-600',
    'from-indigo-500 to-indigo-600',
    'from-rose-500 to-rose-600',
  ];

  const name = `${firstName}${lastName}`;
  const index = name.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
  return colors[index % colors.length];
};

export default function TeamSection({ teamMembers }: TeamSectionProps) {
  if (!teamMembers || teamMembers.length === 0) {
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
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#9f004d]/10 dark:bg-[#9f004d]/20 rounded-full mb-4">
          <span className="text-[#9f004d] dark:text-pink-400 font-semibold text-sm uppercase tracking-wide">
            👥 Our Team
          </span>
        </div>
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-800 dark:text-gray-100">
          Meet the People Behind Our Mission
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Dedicated professionals working together to empower girls through technology
        </p>
      </motion.div>

      {/* Team Carousel */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <Swiper
          modules={[Navigation, Pagination, Autoplay, EffectCoverflow]}
          effect="coverflow"
          grabCursor={true}
          centeredSlides={true}
          slidesPerView="auto"
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 2,
            slideShadows: true,
          }}
          pagination={{
            clickable: true,
            dynamicBullets: true,
          }}
          navigation={true}
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          loop={teamMembers.length > 3}
          breakpoints={{
            320: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 30,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 40,
            },
          }}
          className="team-swiper pb-16"
        >
          {teamMembers.map((member) => {
            const initials = getInitials(member.firstName, member.lastName);
            const avatarColor = getAvatarColor(member.firstName, member.lastName);

            return (
              <SwiperSlide key={member.id} className="!h-auto">
                <div className="group relative bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden h-full">
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#9f004d]/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                  {/* Card Content */}
                  <div className="relative p-6 flex flex-col items-center text-center">
                    {/* Profile Image or Avatar */}
                    <div className="relative mb-4">
                      <div className="relative w-32 h-32 rounded-full overflow-hidden border-4 border-white dark:border-gray-700 shadow-xl group-hover:scale-110 group-hover:border-[#9f004d] transition-all duration-500">
                        {member.profileImage ? (
                          <img
                            src={member.profileImage}
                            alt={`${member.firstName} ${member.lastName}`}
                            className="w-full h-full object-cover"
                          />
                        ) : (
                          <div
                            className={`w-full h-full bg-gradient-to-br ${avatarColor} flex items-center justify-center`}
                          >
                            <span className="text-white text-3xl font-bold">{initials}</span>
                          </div>
                        )}
                      </div>

                      {/* Online status indicator (optional) */}
                      <div className="absolute bottom-2 right-2 w-4 h-4 bg-green-500 border-2 border-white dark:border-gray-800 rounded-full"></div>
                    </div>

                    {/* Name & Role */}
                    <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-1 group-hover:text-[#9f004d] dark:group-hover:text-pink-400 transition-colors">
                      {member.firstName} {member.lastName}
                    </h3>

                    {member.about && (
                      <span className="inline-block px-3 py-1 bg-[#9f004d]/10 text-[#9f004d] dark:bg-pink-500/20 dark:text-pink-400 text-sm font-medium rounded-full mb-4">
                        {member.about}
                      </span>
                    )}

                    {/* Divider */}
                    <div className="w-16 h-1 bg-gradient-to-r from-[#9f004d] to-pink-500 rounded-full mb-4"></div>

                    {/* Contact Info */}
                    <div className="space-y-2 w-full mb-4">
                      {member.email && (
                        <a
                          href={`mailto:${member.email}`}
                          className="flex items-center justify-center gap-2 text-sm text-gray-600 dark:text-gray-400 hover:text-[#9f004d] dark:hover:text-pink-400 transition-colors group/link"
                        >
                          <Mail className="w-4 h-4 group-hover/link:scale-110 transition-transform" />
                          <span className="truncate max-w-[200px]">{member.email}</span>
                        </a>
                      )}

                      {member.phone && (
                        <a
                          href={`tel:${member.phone}`}
                          className="flex items-center justify-center gap-2 text-sm text-gray-600 dark:text-gray-400 hover:text-[#9f004d] dark:hover:text-pink-400 transition-colors group/link"
                        >
                          <Phone className="w-4 h-4 group-hover/link:scale-110 transition-transform" />
                          <span>{member.phone}</span>
                        </a>
                      )}
                    </div>

                    {/* Social Links */}
                    {(member.linkedInUrl || member.facebookUrl || member.websiteUrl) && (
                      <div className="flex items-center justify-center gap-3 pt-4 border-t border-gray-200 dark:border-gray-700 w-full">
                        {member.linkedInUrl && (
                          <a
                            href={member.linkedInUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 bg-gray-100 dark:bg-gray-700 hover:bg-blue-100 dark:hover:bg-blue-900/30 rounded-lg transition-all hover:scale-110"
                            aria-label="LinkedIn"
                          >
                            <Linkedin className="w-5 h-5 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400" />
                          </a>
                        )}

                        {member.facebookUrl && (
                          <a
                            href={member.facebookUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 bg-gray-100 dark:bg-gray-700 hover:bg-blue-100 dark:hover:bg-blue-900/30 rounded-lg transition-all hover:scale-110"
                            aria-label="Facebook"
                          >
                            <Facebook className="w-5 h-5 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400" />
                          </a>
                        )}

                        {member.websiteUrl && (
                          <a
                            href={member.websiteUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 bg-gray-100 dark:bg-gray-700 hover:bg-[#9f004d]/10 dark:hover:bg-pink-900/30 rounded-lg transition-all hover:scale-110"
                            aria-label="Website"
                          >
                            <Globe className="w-5 h-5 text-gray-600 dark:text-gray-400 hover:text-[#9f004d] dark:hover:text-pink-400" />
                          </a>
                        )}
                      </div>
                    )}
                  </div>

                  {/* Corner decoration */}
                  <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-[#9f004d]/20 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </motion.div>
    </div>
  );
}
