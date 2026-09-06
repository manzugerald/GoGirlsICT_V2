'use client';

import React, { useEffect, useRef, useState } from 'react';
import { Bar } from 'react-chartjs-2';
import { useTheme } from 'next-themes';
import { useFontScale } from '@/utils/useFontScale';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ChartOptions,
} from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

// Fallback sample data only — real usage always passes explicit
// values/labels/colors built from statsConfig.ts's STAT_META.
const defaultColors = ['#7c3aed', '#f59e42', '#b87333', '#7c482b', '#2563eb', '#059669'];

export default function AnimatedPieceBarChart({
  values = [7, 4, 9, 3, 6, 12],
  labels = ['Projects', 'Reports', 'Events', 'Institutions', 'Users', 'Beneficiaries'],
  colors = defaultColors,
  animationDuration = 1600, // ms for one fill
  loopPause = 800, // ms to show the full bar before restarting animation
}: {
  values?: number[];
  labels?: string[];
  colors?: string[];
  animationDuration?: number;
  loopPause?: number;
}) {
  const [progress, setProgress] = useState(0); // 0 to 1
  const [loopKey, setLoopKey] = useState(0); // change to restart animation
  const chartRef = useRef<React.ComponentRef<typeof Bar>>(null);

  // Bright, theme-aware tick text — the Chart.js default muted gray is hard
  // to read against the card background in either mode, so pick a
  // high-contrast color per theme instead of leaving it unset.
  const { resolvedTheme } = useTheme();
  const tickColor = resolvedTheme === 'dark' ? '#f3f4f6' : '#111827';

  // Canvas text can't read CSS variables, so scale the tick/tooltip font
  // sizes in JS against the site's own font-size preference (the header's
  // Aa control) instead of leaving them fixed while the rest of the page
  // grows/shrinks around them.
  const fontScale = useFontScale();

  // Looping fill animation
  useEffect(() => {
    let frame: number;
    let start: number | null = null;
    let stopped = false;

    function animate(ts: number) {
      if (stopped) return;
      if (start === null) start = ts;
      const elapsed = ts - start;
      const pct = Math.min(elapsed / animationDuration, 1);
      setProgress(pct);

      if (pct < 1) {
        frame = requestAnimationFrame(animate);
      } else {
        // Pause with full bar, then restart
        setTimeout(() => {
          if (!stopped) {
            setProgress(0);
            setLoopKey((k) => k + 1);
          }
        }, loopPause);
      }
    }
    frame = requestAnimationFrame(animate);

    return () => {
      stopped = true;
      cancelAnimationFrame(frame);
    };
    // eslint-disable-next-line
  }, [loopKey, animationDuration, loopPause, values.join(',')]);

  // Force chart update on each progress step
  useEffect(() => {
    if (chartRef.current) {
      chartRef.current.update();
    }
  }, [progress, values]);

  // Animate values from 0 to target value based on progress
  const animatedData = values.map((v) => Math.round(v * progress * 100) / 100);

  const barData = {
    labels,
    datasets: [
      {
        label: 'Count',
        data: animatedData,
        backgroundColor: colors.slice(0, labels.length),
        borderRadius: 7,
        borderWidth: 0,
        maxBarThickness: 80,
      },
    ],
  };

  const yMax = Math.max(1, ...values);

  const barOptions: ChartOptions<'bar'> = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false },
      title: { display: false },
      tooltip: {
        enabled: true,
        titleFont: { size: Math.round(14 * fontScale) },
        bodyFont: { size: Math.round(14 * fontScale) },
      },
    },
    animation: false, // we control animation manually
    scales: {
      y: {
        beginAtZero: true,
        suggestedMax: yMax,
        ticks: {
          color: tickColor,
          font: { size: Math.round(15 * fontScale) },
          stepSize: 1,
        },
      },
      x: {
        ticks: {
          color: tickColor,
          font: { size: Math.round(14 * fontScale) },
          // With up to 14 categories (admin's full table list) horizontal
          // labels overlap — let Chart.js rotate them instead of shrinking
          // text past legibility.
          maxRotation: 60,
          minRotation: labels.length > 6 ? 45 : 0,
          autoSkip: false,
        },
      },
    },
  };

  return (
    <div className="w-full h-[180px] sm:h-[200px] md:h-[220px]">
      <Bar ref={chartRef} data={barData} options={barOptions} />
    </div>
  );
}
// This component displays a bar chart with animated filling bars based on
// whatever values/labels/colors it's given (see statsConfig.ts for how the
// admin dashboard's full table list vs. a public page's curated subset are
// built). Uses Chart.js, with custom colors, animation duration, and loop
// pause.