'use client';

import { motion } from 'framer-motion';

import { Building2 } from 'lucide-react';

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';

import type { Partner } from '../data';

function formatInstitutionType(
  value: string
) {
  return value
    .replace(/_/g, ' ')
    .replace(
      /\b\w/g,
      (character) =>
        character.toUpperCase()
    );
}

export default function PartnerCard({
  partner,
  index,
}: {
  partner: Partner;
  index: number;
}) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 16,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
      }}
      transition={{
        delay: index * 0.04,
        duration: 0.4,
      }}
    >
      <TooltipProvider delayDuration={150}>
        <Tooltip>
          <TooltipTrigger asChild>
            <div
              tabIndex={0}
              aria-label={partner.name}
              className="group flex h-16 w-28 items-center justify-center rounded-xl border border-gray-200 bg-white p-3 shadow-sm transition-[transform,box-shadow,border-color] duration-300 hover:-translate-y-1 hover:border-[#9f004d]/30 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#9f004d] focus-visible:ring-offset-2 dark:border-gray-800 dark:focus-visible:ring-offset-gray-950 sm:h-20 sm:w-32 sm:p-4"
            >
              {partner.logo ? (
                <img
                  src={partner.logo}
                  alt={`${partner.name} logo`}
                  className="h-full w-full object-contain grayscale transition-[filter] duration-300 group-hover:grayscale-0"
                />
              ) : (
                <Building2
                  aria-hidden="true"
                  className="h-6 w-6 text-gray-300"
                />
              )}
            </div>
          </TooltipTrigger>

          <TooltipContent>
            <p className="font-medium">
              {partner.name}
            </p>

            <p className="text-xs text-muted-foreground">
              {formatInstitutionType(
                partner.institutionType
              )}
            </p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </motion.div>
  );
}
