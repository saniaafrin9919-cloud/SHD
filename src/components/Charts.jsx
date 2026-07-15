import React from 'react'
import { Bar } from 'react-chartjs-2'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js'

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)

const palette = ['#2563EB', '#10B981', '#F59E0B', '#EF4444', '#8B5CF6', '#06B6D4', '#EC4899', '#14B8A6']

export function FeatureImportanceChart({ importance, features }) {
  const data = {
    labels: features.map(f => f.label),
    datasets: [{
      label: 'Relative Importance',
      data: importance.map(v => Math.round(v * 1000) / 10),
      backgroundColor: palette,
      borderRadius: 6
    }]
  }
  const options = {
    indexAxis: 'y',
    responsive: true,
    maintainAspectRatio: false,
    plugins: { legend: { display: false } },
    scales: {
      x: { beginAtZero: true, ticks: { callback: v => v + '%' }, grid: { color: '#E2E8F0' } },
      y: { ticks: { font: { size: 11 } }, grid: { display: false } }
    }
  }
  return (
    <div style={{ height: '300px' }}>
      <Bar data={data} options={options} />
    </div>
  )
}

export function ComparisonChart({ actual, predicted }) {
  const data = {
    labels: ['Actual HDI', 'Predicted HDI'],
    datasets: [{
      label: 'HDI Value',
      data: [actual, predicted],
      backgroundColor: ['#2563EB', '#10B981'],
      borderRadius: 8,
      barThickness: 70
    }]
  }
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: { legend: { display: false } },
    scales: {
      y: { beginAtZero: true, max: 1, grid: { color: '#E2E8F0' } },
      x: { grid: { display: false } }
    }
  }
  return (
    <div style={{ height: '260px' }}>
      <Bar data={data} options={options} />
    </div>
  )
}

export function IndicatorBarChart({ values, features }) {
  const normalized = values.map((v, i) => {
    const f = features[i]
    return Math.round(((v - f.min) / (f.max - f.min)) * 1000) / 10
  })
  const data = {
    labels: features.map(f => f.label),
    datasets: [{
      label: 'Normalized Value',
      data: normalized,
      backgroundColor: palette,
      borderRadius: 6
    }]
  }
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: { legend: { display: false } },
    scales: {
      y: { beginAtZero: true, max: 100, ticks: { callback: v => v + '%' }, grid: { color: '#E2E8F0' } },
      x: { ticks: { font: { size: 9 }, maxRotation: 45, minRotation: 45 }, grid: { display: false } }
    }
  }
  return (
    <div style={{ height: '280px' }}>
      <Bar data={data} options={options} />
    </div>
  )
}
