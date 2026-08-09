import {
  GraduationCap,
  Laptop,
  Megaphone,
  Users,
} from 'lucide-react';

const opportunities = [
  {
    key: 'mentor',
    title: 'Mentor a Learner',
    icon: GraduationCap,

    description:
      'Guide a girl or young woman through her ICT learning journey with regular check-ins and encouragement.',
  },
  {
    key: 'facilitate',
    title: 'Facilitate a Workshop',
    icon: Laptop,

    description:
      'Lead or co-lead a hands-on session on coding, digital literacy, or technology skills for our learners.',
  },
  {
    key: 'community',
    title: 'Support Community Drives',
    icon: Users,

    description:
      'Help organize and run outreach activities that bring technology access to underserved communities.',
  },
  {
    key: 'advocate',
    title: 'Advocate for Our Mission',
    icon: Megaphone,

    description:
      'Share our work with your network and help us reach more girls, partners, and supporters.',
  },
] as const;

export default function VolunteerSection() {
  return (
    <section
      id="volunteer"
      aria-labelledby="volunteer-heading"
      className="scroll-mt-20 bg-white py-8 dark:bg-gray-900 sm:scroll-mt-24 sm:py-10 lg:py-12"
    >
      <div className="mx-auto w-[90%] max-w-4xl">
        <header className="mx-auto max-w-3xl text-center">
          <h2
            id="volunteer-heading"
            className="heading-2 text-site-primary"
          >
            Become a{' '}
            <span className="bg-gradient-to-r from-[#9f004d] via-pink-500 to-purple-600 bg-clip-text text-transparent">
              Volunteer
            </span>
          </h2>

          <p className="body-lg mx-auto mt-4 max-w-2xl text-site-secondary">
            Support our mission with your
            time, skills, and expertise.
            Here are a few ways to get
            started.
          </p>
        </header>

        <div className="mt-8 grid gap-4 sm:mt-10 sm:grid-cols-2">
          {opportunities.map(
            (opportunity) => {
              const Icon =
                opportunity.icon;

              return (
                <div
                  key={opportunity.key}
                  className="flex items-start gap-4 rounded-2xl border border-gray-200 bg-gray-50 p-5 dark:border-gray-800 dark:bg-gray-950"
                >
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#9f004d]/10 text-[#9f004d] dark:bg-pink-500/10 dark:text-pink-400">
                    <Icon
                      aria-hidden="true"
                      className="h-5 w-5"
                    />
                  </span>

                  <div>
                    <h3 className="font-serif text-[length:calc(1rem*var(--font-scale))] font-semibold text-gray-900 dark:text-white">
                      {
                        opportunity.title
                      }
                    </h3>

                    <p className="mt-1 text-[length:calc(0.875rem*var(--font-scale))] leading-6 text-gray-600 dark:text-gray-300">
                      {
                        opportunity.description
                      }
                    </p>
                  </div>
                </div>
              );
            }
          )}
        </div>

        <p className="mt-8 text-center text-[length:calc(0.875rem*var(--font-scale))] text-gray-500 dark:text-gray-400 sm:mt-10">
          Interested in volunteering?{' '}
          <a
            href="#contact"
            className="font-semibold text-[#9f004d] hover:text-[#7a003c] dark:text-pink-400 dark:hover:text-pink-300"
          >
            Reach out to us
          </a>
          .
        </p>
      </div>
    </section>
  );
}
