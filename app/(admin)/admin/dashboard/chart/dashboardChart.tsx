'use client';

import { useEffect, useState } from 'react';
import { Pie } from 'react-chartjs-2';
import { CardContent } from '@/components/ui/card';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  ChartOptions,
} from 'chart.js';
import AnimatedPieceBarChart from './components/animatedPieceBarChart';
import { cardHoverClass } from '@/utils/styles/card-hover';
import { useHybridCachedData } from '@/utils/useHybridCachedData';
import { useFontScale } from '@/utils/useFontScale';
import { ADMIN_STAT_KEYS, fetchStatsForKeys, type Stat } from './statsConfig';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ArcElement);

const ANIMATION_DURATION = 4.2;

// A function, not a plain object — the pie has no axes to carry tick
// text, but its tooltip is still canvas-drawn, so it needs its font size
// recomputed against the site's font-scale preference like the bar chart.
function getPieOptions(fontScale: number): ChartOptions<'pie'> {
  return {
    responsive: true,
    maintainAspectRatio: false,
    animation: {
      animateRotate: true,
      animateScale: true,
      duration: 1000,
      easing: 'easeOutQuart',
    },
    plugins: {
      legend: { display: false },
      tooltip: {
        enabled: true,
        titleFont: { size: Math.round(14 * fontScale) },
        bodyFont: { size: Math.round(14 * fontScale) },
      },
      title: { display: false },
    },
  };
}

function PieLegend({
  labels,
  data,
  colors,
}: {
  labels: string[];
  data: number[];
  colors: string[];
}) {
  const total = data.reduce((a, b) => a + b, 0);
  return (
    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-1.5 font-medium">
      {labels.map((label, i) => (
        <li key={i} className="flex items-start gap-2">
          <span
            className="block w-3.5 h-3.5 shrink-0 rounded mt-1"
            style={{ backgroundColor: colors[i] }}
          ></span>
          {/* No truncate/nowrap — every label + percentage must stay fully
              readable, wrapping to a second line rather than being cut
              off with an ellipsis. */}
          <span
            className="text-site-primary break-words"
            style={{ fontSize: 'calc(1rem * var(--font-scale, 1))' }}
          >
            {label} ({data[i]}) - {total ? ((data[i] / total) * 100).toFixed(1) : 0}%
          </span>
        </li>
      ))}
    </ul>
  );
}

// Pure presentational panels — no data fetching of their own, just render
// whatever `stats` they're given. Exported separately so pages that want
// each chart in its own card (see GlowChartCard) can compose them
// independently, in whichever order they like.

export function BarChartPanel({ stats }: { stats: Stat[] }) {
  const labels = stats.map((s) => s.label);
  const values = stats.map((s) => s.value);
  const colors = stats.map((s) => s.color);

  return (
    <AnimatedPieceBarChart
      values={values}
      labels={labels}
      colors={colors}
      animationDuration={1600}
      loopPause={1000}
    />
  );
}

export function PieChartPanel({ stats }: { stats: Stat[] }) {
  // Restarts the Pie's own draw-in animation periodically, independent of
  // the bar chart's separate fill/loop animation.
  const [loop, setLoop] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => setLoop((v) => v + 1), (ANIMATION_DURATION + 0.7) * 1000);
    return () => clearInterval(interval);
  }, []);

  const fontScale = useFontScale();
  const pieOptions = getPieOptions(fontScale);

  const labels = stats.map((s) => s.label);
  const values = stats.map((s) => s.value);
  const colors = stats.map((s) => s.color);
  const total = values.reduce((a, b) => a + b, 0);

  const pieData = {
    labels,
    datasets: [
      {
        data: total > 0 ? values : labels.map(() => 1),
        backgroundColor: colors,
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
      <div className="w-64 h-64 shrink-0">
        <Pie key={loop} data={pieData} options={pieOptions} />
      </div>

      <div className="w-full sm:max-w-md">
        <PieLegend labels={labels} data={values} colors={colors} />
      </div>
    </div>
  );
}

export default function DashboardChart({ stats: statsProp }: { stats?: Stat[] } = {}) {
  // When `stats` is supplied by the caller (public pages pass real counts
  // computed server-side), skip the hook's own localStorage/network path
  // entirely (`enabled: false`) instead of sharing its cache key with the
  // admin dashboard's own live-fetched copy.
  const {
    data: stats,
    isLoading,
    refresh,
  } = useHybridCachedData<Stat[]>(
    'dashboard-stats-v2',
    () => fetchStatsForKeys(ADMIN_STAT_KEYS),
    {
      initialData: statsProp,
      staleTime: 1000 * 60 * 30,
      enabled: !statsProp,
    }
  );

  const safeStats: Stat[] = stats ?? [];

  return (
    <div className="w-full">
      <div className="w-full pb-2">
        <CardContent className="flex flex-col items-center justify-center">
          {isLoading ? (
            <div className="text-center text-muted-foreground">Loading...</div>
          ) : (
            <div className="flex flex-col gap-6">
              {/* Bar chart, full width */}
              <div className={`${cardHoverClass} w-full p-4`}>
                <BarChartPanel stats={safeStats} />
              </div>

              {/* Pie chart + legend, on its own row below the bar chart */}
              <div className={`${cardHoverClass} w-full p-4`}>
                <PieChartPanel stats={safeStats} />
              </div>

              {/* Refresh re-fetches live counts — not meaningful when stats
                  came from the server as a prop, so hide it there. */}
              {!statsProp && (
                <div className="flex justify-center">
                  <button
                    className="px-3 py-1 text-xs rounded bg-violet-700 text-white hover:bg-violet-800"
                    onClick={refresh}
                  >
                    Refresh Data
                  </button>
                </div>
              )}
            </div>
          )}
        </CardContent>
      </div>
    </div>
  );
}
// Admin dashboard's Home tab uses this default export as-is (bar chart
// followed by the pie chart, each in a plain hover card, self-fetching
// every table — see statsConfig.ts). Public pages instead import
// BarChartPanel/PieChartPanel directly and wrap each in its own
// GlowChartCard — see ImpactSection.tsx / ImpactPageContent.tsx.
