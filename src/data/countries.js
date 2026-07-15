// Representative UNDP-style indicators for demonstration.
// Fields: lifeExpectancy, expectedSchooling, meanSchooling, gni, population (millions),
// healthIndex, educationIndex, incomeIndex, hdi
export const COUNTRY_DATA = [
  { name: "India", lifeExpectancy: 67.7, expectedSchooling: 12.6, meanSchooling: 6.7, gni: 6951, population: 1430, healthIndex: 0.71, educationIndex: 0.59, incomeIndex: 0.68, hdi: 0.644 },
  { name: "United States", lifeExpectancy: 77.2, expectedSchooling: 16.3, meanSchooling: 13.7, gni: 69700, population: 339, healthIndex: 0.91, educationIndex: 0.93, incomeIndex: 0.95, hdi: 0.927 },
  { name: "China", lifeExpectancy: 78.2, expectedSchooling: 14.2, meanSchooling: 8.1, gni: 17500, population: 1410, healthIndex: 0.82, educationIndex: 0.74, incomeIndex: 0.78, hdi: 0.788 },
  { name: "Japan", lifeExpectancy: 84.8, expectedSchooling: 15.4, meanSchooling: 13.4, gni: 42600, population: 124, healthIndex: 0.96, educationIndex: 0.91, incomeIndex: 0.90, hdi: 0.925 },
  { name: "Germany", lifeExpectancy: 81.1, expectedSchooling: 17.3, meanSchooling: 14.2, gni: 57500, population: 84, healthIndex: 0.94, educationIndex: 0.93, incomeIndex: 0.92, hdi: 0.950 },
  { name: "United Kingdom", lifeExpectancy: 81.2, expectedSchooling: 17.5, meanSchooling: 13.4, gni: 49800, population: 68, healthIndex: 0.94, educationIndex: 0.93, incomeIndex: 0.91, hdi: 0.929 },
  { name: "France", lifeExpectancy: 82.6, expectedSchooling: 16.3, meanSchooling: 12.9, gni: 53800, population: 65, healthIndex: 0.95, educationIndex: 0.92, incomeIndex: 0.91, hdi: 0.903 },
  { name: "Canada", lifeExpectancy: 82.6, expectedSchooling: 16.4, meanSchooling: 13.8, gni: 52200, population: 40, healthIndex: 0.95, educationIndex: 0.94, incomeIndex: 0.92, hdi: 0.936 },
  { name: "Australia", lifeExpectancy: 83.1, expectedSchooling: 21.1, meanSchooling: 12.7, gni: 49200, population: 26, healthIndex: 0.95, educationIndex: 0.94, incomeIndex: 0.91, hdi: 0.951 },
  { name: "Brazil", lifeExpectancy: 75.8, expectedSchooling: 15.0, meanSchooling: 8.1, gni: 16400, population: 216, healthIndex: 0.81, educationIndex: 0.78, incomeIndex: 0.75, hdi: 0.760 },
  { name: "Russia", lifeExpectancy: 73.2, expectedSchooling: 16.0, meanSchooling: 12.6, gni: 29200, population: 144, healthIndex: 0.77, educationIndex: 0.85, incomeIndex: 0.83, hdi: 0.822 },
  { name: "South Korea", lifeExpectancy: 83.6, expectedSchooling: 16.5, meanSchooling: 12.5, gni: 49900, population: 52, healthIndex: 0.95, educationIndex: 0.92, incomeIndex: 0.90, hdi: 0.929 },
  { name: "Singapore", lifeExpectancy: 83.9, expectedSchooling: 16.5, meanSchooling: 11.9, gni: 90900, population: 5.9, healthIndex: 0.97, educationIndex: 0.93, incomeIndex: 0.98, hdi: 0.949 },
  { name: "Norway", lifeExpectancy: 83.2, expectedSchooling: 18.2, meanSchooling: 13.0, gni: 82500, population: 5.5, healthIndex: 0.97, educationIndex: 0.96, incomeIndex: 0.97, hdi: 0.966 },
  { name: "Sweden", lifeExpectancy: 83.0, expectedSchooling: 19.4, meanSchooling: 12.6, gni: 56800, population: 10.5, healthIndex: 0.96, educationIndex: 0.94, incomeIndex: 0.92, hdi: 0.947 },
  { name: "Switzerland", lifeExpectancy: 84.0, expectedSchooling: 16.7, meanSchooling: 13.9, gni: 69800, population: 8.9, healthIndex: 0.97, educationIndex: 0.95, incomeIndex: 0.95, hdi: 0.967 },
  { name: "Netherlands", lifeExpectancy: 82.3, expectedSchooling: 18.6, meanSchooling: 12.7, gni: 59600, population: 17.6, healthIndex: 0.95, educationIndex: 0.93, incomeIndex: 0.93, hdi: 0.946 },
  { name: "Italy", lifeExpectancy: 83.1, expectedSchooling: 16.4, meanSchooling: 11.0, gni: 45300, population: 59, healthIndex: 0.95, educationIndex: 0.89, incomeIndex: 0.90, hdi: 0.906 },
  { name: "Spain", lifeExpectancy: 83.5, expectedSchooling: 17.4, meanSchooling: 11.0, gni: 41500, population: 47, healthIndex: 0.96, educationIndex: 0.89, incomeIndex: 0.88, hdi: 0.905 },
  { name: "South Africa", lifeExpectancy: 65.3, expectedSchooling: 14.7, meanSchooling: 10.6, gni: 13900, population: 60, healthIndex: 0.63, educationIndex: 0.74, incomeIndex: 0.73, hdi: 0.713 },
  { name: "Nigeria", lifeExpectancy: 53.6, expectedSchooling: 10.2, meanSchooling: 7.2, gni: 5300, population: 224, healthIndex: 0.37, educationIndex: 0.49, incomeIndex: 0.66, hdi: 0.535 },
  { name: "Bangladesh", lifeExpectancy: 73.3, expectedSchooling: 11.6, meanSchooling: 7.0, gni: 8200, population: 173, healthIndex: 0.73, educationIndex: 0.56, incomeIndex: 0.71, hdi: 0.679 },
  { name: "Pakistan", lifeExpectancy: 66.4, expectedSchooling: 9.3, meanSchooling: 5.2, gni: 5100, population: 240, healthIndex: 0.61, educationIndex: 0.41, incomeIndex: 0.67, hdi: 0.540 },
  { name: "Nepal", lifeExpectancy: 70.1, expectedSchooling: 12.3, meanSchooling: 5.5, gni: 4900, population: 31, healthIndex: 0.70, educationIndex: 0.47, incomeIndex: 0.66, hdi: 0.601 },
  { name: "Sri Lanka", lifeExpectancy: 76.4, expectedSchooling: 14.1, meanSchooling: 11.0, gni: 14500, population: 22, healthIndex: 0.83, educationIndex: 0.74, incomeIndex: 0.75, hdi: 0.780 },
  { name: "Bhutan", lifeExpectancy: 72.3, expectedSchooling: 13.3, meanSchooling: 5.1, gni: 7700, population: 0.78, healthIndex: 0.75, educationIndex: 0.49, incomeIndex: 0.70, hdi: 0.621 },
  { name: "New Zealand", lifeExpectancy: 82.3, expectedSchooling: 18.0, meanSchooling: 12.8, gni: 47400, population: 5.2, healthIndex: 0.95, educationIndex: 0.93, incomeIndex: 0.91, hdi: 0.937 },
  { name: "UAE", lifeExpectancy: 78.4, expectedSchooling: 15.5, meanSchooling: 12.1, gni: 65400, population: 9.4, healthIndex: 0.89, educationIndex: 0.90, incomeIndex: 0.95, hdi: 0.911 },
  { name: "Saudi Arabia", lifeExpectancy: 77.9, expectedSchooling: 17.3, meanSchooling: 11.0, gni: 47800, population: 36, healthIndex: 0.88, educationIndex: 0.86, incomeIndex: 0.91, hdi: 0.875 },
  { name: "Qatar", lifeExpectancy: 80.1, expectedSchooling: 15.1, meanSchooling: 10.7, gni: 92000, population: 2.7, healthIndex: 0.92, educationIndex: 0.85, incomeIndex: 0.98, hdi: 0.899 }
]

export const FEATURES = [
  { key: "lifeExpectancy", label: "Life Expectancy", min: 30, max: 90, step: 0.1, unit: "yrs" },
  { key: "expectedSchooling", label: "Expected Years of Schooling", min: 0, max: 25, step: 0.1, unit: "yrs" },
  { key: "meanSchooling", label: "Mean Years of Schooling", min: 0, max: 18, step: 0.1, unit: "yrs" },
  { key: "gni", label: "Gross National Income per Capita", min: 100, max: 150000, step: 100, unit: "$" },
  { key: "population", label: "Population", min: 0.01, max: 2000, step: 0.01, unit: "M" },
  { key: "healthIndex", label: "Health Index", min: 0, max: 1, step: 0.01, unit: "" },
  { key: "educationIndex", label: "Education Index", min: 0, max: 1, step: 0.01, unit: "" },
  { key: "incomeIndex", label: "Income Index", min: 0, max: 1, step: 0.01, unit: "" }
]

export const FEATURE_KEYS = FEATURES.map(f => f.key)

export function getHdiCategory(hdi) {
  if (hdi >= 0.8) return { label: "Very High Human Development", color: "#10B981", class: "very-high" }
  if (hdi >= 0.7) return { label: "High Human Development", color: "#3B82F6", class: "high" }
  if (hdi >= 0.55) return { label: "Medium Human Development", color: "#F59E0B", class: "medium" }
  return { label: "Low Human Development", color: "#EF4444", class: "low" }
}
