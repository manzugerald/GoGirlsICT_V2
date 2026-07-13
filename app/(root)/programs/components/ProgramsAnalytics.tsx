'use client';

import { useMemo } from 'react';
import { Bar, Line } from 'react-chartjs-2';

import {
  BarElement,
  CategoryScale,
  Chart as ChartJS,
  Filler,
  Legend,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  type ChartOptions,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  Filler,
  Title,
  Tooltip,
  Legend
);

type AnalyticsProgram = {
  id: number;
  createdAt: string;
  projectStatus: 'active' | 'completed' | 'paused';
};

type AnalyticsStats = {
  active: number;
  completed: number;
  paused: number;
};

interface ProgramsAnalyticsProps {
  programs: AnalyticsProgram[];
  stats: AnalyticsStats;
}

export default function ProgramsAnalytics({
  programs,
  stats,
}: ProgramsAnalyticsProps) {
  const yearlyData = useMemo(() => {
    const counts = programs.reduce<Record<number, number>>(
      (accumulator, program) => {
        const date = new Date(program.createdAt);

        if (Number.isNaN(date.getTime())) {
          return accumulator;
        }

        const year = date.getFullYear();
        accumulator[year] = (accumulator[year] ?? 0) + 1;

        return accumulator;
      },
      {}
    );

    const currentYear = new Date().getFullYear();
    const availableYears = Object.keys(counts)
      .map(Number)
      .filter(Number.isFinite);

    const earliestAvailableYear =
      availableYears.length > 0
        ? Math.min(...availableYears)
        : currentYear;

    // Show at most the most recent six calendar years.
    const startYear = Math.max(
      earliestAvailableYear,
      currentYear - 5
    );

    return Array.from(
      {
        length: currentYear - startYear + 1,
      },
      (_, index) => {
        const year = startYear + index;

        return {
          year: String(year),
          count: counts[year] ?? 0,
        };
      }
    );
  }, [programs]);

  const lineData = {
    labels: yearlyData.map((item) => item.year),

    datasets: [
      {
        label: 'Published programs',
        data: yearlyData.map((item) => item.count),

        borderColor: '#f9a8d4',
        backgroundColor: 'rgba(236, 72, 153, 0.20)',

        pointBackgroundColor: '#ffffff',
        pointBorderColor: '#ec4899',
        pointBorderWidth: 3,
        pointRadius: 5,
        pointHoverRadius: 7,

        borderWidth: 5,
        tension: 0.42,
        fill: true,
      },
    ],
  };

  const barData = {
    labels: ['Active', 'Completed', 'Paused'],

    datasets: [
      {
        label: 'Programs',
        data: [
          stats.active,
          stats.completed,
          stats.paused,
        ],

        backgroundColor: [
          '#10b981',
          '#3b82f6',
          '#f59e0b',
        ],

        borderRadius: 12,
        borderSkipped: false,
        maxBarThickness: 70,
      },
    ],
  };

  const lineOptions: ChartOptions<'line'> = {
    responsive: true,
    maintainAspectRatio: false,

    animation: {
      duration: 1400,
      easing: 'easeOutQuart',
    },

    interaction: {
      intersect: false,
      mode: 'index',
    },

    plugins: {
      legend: {
        display: false,
      },

      tooltip: {
        backgroundColor: 'rgba(17, 24, 39, 0.96)',
        titleColor: '#ffffff',
        bodyColor: '#ffffff',
        padding: 12,
        cornerRadius: 10,
        displayColors: false,
      },
    },

    scales: {
      x: {
        grid: {
          display: false,
        },

        ticks: {
          color: 'rgba(255,255,255,0.78)',
          font: {
            size: 11,
            weight: 600,
          },
        },

        border: {
          color: 'rgba(255,255,255,0.18)',
        },
      },

      y: {
        beginAtZero: true,
        suggestedMax: Math.max(
          2,
          ...yearlyData.map((item) => item.count + 1)
        ),

        ticks: {
          precision: 0,
          stepSize: 1,
          color: 'rgba(255,255,255,0.78)',
          font: {
            size: 11,
            weight: 600,
          },
        },

        grid: {
          color: 'rgba(255,255,255,0.12)',
        },

        border: {
          display: false,
        },
      },
    },
  };

  const barOptions: ChartOptions<'bar'> = {
    responsive: true,
    maintainAspectRatio: false,

    animation: {
      duration: 1200,
      easing: 'easeOutQuart',
    },

    plugins: {
      legend: {
        display: false,
      },

      tooltip: {
        backgroundColor: 'rgba(17, 24, 39, 0.96)',
        titleColor: '#ffffff',
        bodyColor: '#ffffff',
        padding: 12,
        cornerRadius: 10,
        displayColors: false,
      },
    },

    scales: {
      x: {
        grid: {
          display: false,
        },

        ticks: {
          color: 'rgba(255,255,255,0.82)',
          font: {
            size: 11,
            weight: 600,
          },
        },

        border: {
          color: 'rgba(255,255,255,0.18)',
        },
      },

      y: {
        beginAtZero: true,
        suggestedMax:
          Math.max(
            stats.active,
            stats.completed,
            stats.paused
          ) + 1,

        ticks: {
          precision: 0,
          stepSize: 1,
          color: 'rgba(255,255,255,0.78)',
          font: {
            size: 11,
            weight: 600,
          },
        },

        grid: {
          color: 'rgba(255,255,255,0.12)',
        },

        border: {
          display: false,
        },
      },
    },
  };

  return (
    <div className="grid gap-4 lg:grid-cols-2">
      <article className="rounded-3xl border border-white/15 bg-black/25 p-4 shadow-2xl backdrop-blur-md">
        <div className="text-left">
          <h2 className="body font-bold text-white">
            Programs over time
          </h2>

          <p className="caption mt-1 text-white/65">
            Published programs by year
          </p>
        </div>

        <div className="mt-3 h-44 sm:h-52">
          <Line
            data={lineData}
            options={lineOptions}
          />
        </div>
      </article>

      <article className="rounded-3xl border border-white/15 bg-black/25 p-4 shadow-2xl backdrop-blur-md">
        <div className="text-left">
          <h2 className="body font-bold text-white">
            Program status
          </h2>

          <p className="caption mt-1 text-white/65">
            Active, completed, and paused programs
          </p>
        </div>

        <div className="mt-3 h-44 sm:h-52">
          <Bar
            data={barData}
            options={barOptions}
          />
        </div>
      </article>
    </div>
  );
}