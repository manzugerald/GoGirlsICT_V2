import type { ReactNode } from 'react';

interface PageHeroProps {
  badge?: string;
  title: string;
  description?: string;
  icon?: ReactNode;
  children?: ReactNode;
  backgroundImage?: string;
  showLineGraph?: boolean;
}

export default function PageHero({
  title,
  description,
  children,
  backgroundImage,
  showLineGraph = false,
}: PageHeroProps) {
  const hasImage = Boolean(backgroundImage);

  return (
    <section className="relative overflow-hidden px-4 pt-16 pb-10">
      {hasImage ? (
        <>
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${backgroundImage})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-[#5d002d]/90 via-[#16000d]/78 to-purple-950/90" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.22),transparent_32%)]" />
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.055)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.055)_1px,transparent_1px)] bg-[size:44px_44px] opacity-30" />

          {showLineGraph && <AnalyticsOverlay />}
        </>
      ) : (
        <div className="absolute inset-0 bg-gradient-to-br from-[#9f004d]/10 via-pink-50 to-purple-50 dark:from-[#9f004d]/20 dark:via-gray-950 dark:to-gray-900" />
      )}

      <div className="wrapper relative z-10 max-w-7xl mx-auto text-center">
        <h1 className={hasImage ? 'heading-1 text-white mb-4' : 'heading-1 text-site-primary mb-4'}>
          {title}
        </h1>

        {description && (
          <p
            className={
              hasImage
                ? 'body-lg text-white/85 max-w-3xl mx-auto'
                : 'body-lg text-site-secondary max-w-3xl mx-auto'
            }
          >
            {description}
          </p>
        )}

        {children && <div className="mt-6">{children}</div>}
      </div>
    </section>
  );
}

function AnalyticsOverlay() {
  const years = ['2021', '2022', '2023', '2024', '2025', '2026'];
  const bars = [34, 48, 42, 66, 78, 94];

  return (
    <div className="pointer-events-none absolute inset-x-0 bottom-14 z-[1] h-[250px]">
      <div className="wrapper mx-auto grid h-full max-w-7xl grid-cols-1 gap-8 px-4 lg:grid-cols-2">
        {/* Left: colorful animated line graph */}
        <div className="hidden items-end lg:flex">
          <div className="h-[220px] w-full rounded-[2rem] border border-white/15 bg-white/[0.08] p-5 shadow-2xl backdrop-blur-md">
            <svg
              viewBox="0 0 560 230"
              className="h-full w-full"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <defs>
                <linearGradient id="programLineColorful" x1="0" x2="1">
                  <stop offset="0%" stopColor="#22d3ee" />
                  <stop offset="35%" stopColor="#f472b6" />
                  <stop offset="70%" stopColor="#facc15" />
                  <stop offset="100%" stopColor="#ffffff" />
                </linearGradient>

                <filter id="programLineStrongGlow">
                  <feGaussianBlur stdDeviation="6" result="blur" />
                  <feMerge>
                    <feMergeNode in="blur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>

              {[55, 100, 145, 190].map((y) => (
                <line
                  key={y}
                  x1="28"
                  x2="530"
                  y1={y}
                  y2={y}
                  stroke="rgba(255,255,255,0.14)"
                  strokeWidth="1"
                />
              ))}

              <path
                d="M35 195 C90 172, 115 150, 160 154 S240 128, 282 100 S360 113, 405 72 S475 63, 530 34"
                fill="none"
                stroke="url(#programLineColorful)"
                strokeWidth="7"
                strokeLinecap="round"
                filter="url(#programLineStrongGlow)"
                className="animate-[drawLine_1.8s_ease-out_forwards]"
                style={{
                  strokeDasharray: 920,
                  strokeDashoffset: 920,
                }}
              />

              <path
                d="M35 195 C90 172, 115 150, 160 154 S240 128, 282 100 S360 113, 405 72 S475 63, 530 34 L530 220 L35 220 Z"
                fill="rgba(244,114,182,0.12)"
              />

              {[
                [35, 195, '#22d3ee'],
                [160, 154, '#a78bfa'],
                [282, 100, '#f472b6'],
                [405, 72, '#facc15'],
                [530, 34, '#ffffff'],
              ].map(([cx, cy, color], index) => (
                <g key={`${cx}-${cy}`}>
                  <circle
                    cx={cx}
                    cy={cy}
                    r="10"
                    fill={String(color)}
                    opacity="0.25"
                    className="animate-ping"
                    style={{ animationDelay: `${index * 0.25}s` }}
                  />
                  <circle cx={cx} cy={cy} r="5.5" fill={String(color)} />
                </g>
              ))}

              <text x="28" y="24" fill="rgba(255,255,255,0.78)" fontSize="12">
                Growth trajectory
              </text>
            </svg>
          </div>
        </div>

        {/* Right: real bar graph */}
        <div className="hidden items-end justify-end lg:flex">
          <div className="h-[220px] w-full max-w-md rounded-[2rem] border border-white/15 bg-white/[0.08] p-5 shadow-2xl backdrop-blur-md">
            <div className="mb-3 flex items-center justify-between">
              <p className="text-xs font-semibold uppercase tracking-wide text-white/85">
                Programs by year
              </p>
              <p className="text-xs text-white/65">Publishing trend</p>
            </div>

            <div className="flex h-36 items-end gap-4 border-l border-b border-white/20 pl-4 pb-3">
              {bars.map((height, index) => (
                <div key={years[index]} className="flex flex-1 flex-col items-center gap-2">
                  <div className="flex h-28 w-full items-end">
                    <div
                      className="w-full rounded-t-xl bg-gradient-to-t from-cyan-400 via-pink-400 to-yellow-200 shadow-lg shadow-pink-400/30 animate-[barShoot_900ms_ease-out_forwards]"
                      style={{
                        height: `${height}%`,
                        transformOrigin: 'bottom',
                        animationDelay: `${index * 0.12}s`,
                      }}
                    />
                  </div>

                  <span className="text-[10px] font-semibold text-white/75">
                    {years[index]}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}