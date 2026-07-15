import React, { useState, useMemo } from 'react'
import { COUNTRY_DATA, FEATURES, FEATURE_KEYS, getHdiCategory } from './data/countries.js'
import { predict as mlPredict, getModelConfidence } from './ml/model.js'
import { FeatureImportanceChart, ComparisonChart, IndicatorBarChart } from './components/Charts.jsx'

const EMPTY = Object.fromEntries(FEATURE_KEYS.map(k => [k, '']))

export default function App() {
  const [country, setCountry] = useState('')
  const [values, setValues] = useState(EMPTY)
  const [errors, setErrors] = useState({})
  const [result, setResult] = useState(null)
  const [predicting, setPredicting] = useState(false)

  const modelConfidence = useMemo(() => getModelConfidence(), [])

  function handleCountryChange(name) {
    setCountry(name)
    setErrors({})
    setResult(null)
    if (!name) {
      setValues(EMPTY)
      return
    }
    const c = COUNTRY_DATA.find(x => x.name === name)
    const filled = {}
    FEATURE_KEYS.forEach(k => { filled[k] = c[k] })
    setValues(filled)
  }

  function handleFieldChange(key, val) {
    setValues(v => ({ ...v, [key]: val }))
    setErrors(e => ({ ...e, [key]: undefined }))
  }

  function validate() {
    const errs = {}
    if (!country) errs.country = 'Please select a country.'
    FEATURE_KEYS.forEach(k => {
      const v = values[k]
      if (v === '' || v === null || v === undefined || isNaN(Number(v))) {
        errs[k] = 'Enter a valid number.'
      } else if (Number(v) < 0) {
        errs[k] = 'Negative values are not allowed.'
      }
    })
    if (Number(values.gni) < 100) errs.gni = 'GNI seems too low.'
    setErrors(errs)
    return Object.keys(errs).length === 0
  }

  function handlePredict() {
    if (!validate()) {
      setResult(null)
      return
    }
    setPredicting(true)
    // Small delay to surface the "model running" micro-interaction.
    setTimeout(() => {
      const input = {}
      FEATURE_KEYS.forEach(k => { input[k] = Number(values[k]) })
      const res = mlPredict(input)
      const actual = COUNTRY_DATA.find(c => c.name === country).hdi
      setResult({
        ...res,
        actualHdi: actual,
        category: getHdiCategory(res.predictedHdi),
        difference: Math.round((res.predictedHdi - actual) * 1000) / 1000
      })
      setPredicting(false)
    }, 450)
  }

  function handleReset() {
    setCountry('')
    setValues(EMPTY)
    setErrors({})
    setResult(null)
  }

  const featureValues = FEATURE_KEYS.map(k => Number(values[k]) || 0)

  return (
    <div className="app">
      <header className="app-header">
        <div className="header-inner">
          <div className="brand">
            <div className="brand-mark">HDI</div>
            <div>
              <h1>Smart Human Development Predictor</h1>
              <p>Estimate a country's Human Development Index using socio-economic indicators and a trained ML model.</p>
            </div>
          </div>
          <div className="model-badge">
            <span className="dot" />
            Model confidence: <strong>{modelConfidence}%</strong>
          </div>
        </div>
      </header>

      <main className="container py-4">
        <div className="row g-4">
          {/* Input panel */}
          <div className="col-lg-5">
            <div className="card panel">
              <div className="card-body">
                <h2 className="panel-title">Country &amp; Indicators</h2>

                <div className="mb-3">
                  <label className="form-label">Country</label>
                  <select
                    className="form-select form-select-lg"
                    value={country}
                    onChange={e => handleCountryChange(e.target.value)}
                  >
                    <option value="">▼ Select Country</option>
                    {COUNTRY_DATA.map(c => (
                      <option key={c.name} value={c.name}>{c.name}</option>
                    ))}
                  </select>
                  {errors.country && <div className="field-error">{errors.country}</div>}
                </div>

                {FEATURES.map(f => (
                  <div className="mb-3" key={f.key}>
                    <label className="form-label">
                      {f.label}
                      {f.unit && <span className="unit">{f.unit}</span>}
                    </label>
                    <input
                      type="number"
                      className={`form-control ${errors[f.key] ? 'is-invalid' : ''}`}
                      value={values[f.key]}
                      min={f.min}
                      max={f.max}
                      step={f.step}
                      onChange={e => handleFieldChange(f.key, e.target.value)}
                      placeholder="Enter value"
                    />
                    {errors[f.key] && <div className="invalid-feedback">{errors[f.key]}</div>}
                  </div>
                ))}

                <div className="d-flex gap-2 mt-2">
                  <button
                    className="btn btn-primary flex-grow-1"
                    onClick={handlePredict}
                    disabled={predicting}
                  >
                    {predicting ? (
                      <><span className="spinner-border spinner-border-sm me-2" />Predicting...</>
                    ) : (
                      <>Predict HDI</>
                    )}
                  </button>
                  <button className="btn btn-outline-secondary" onClick={handleReset}>Reset</button>
                </div>
              </div>
            </div>
          </div>

          {/* Results panel */}
          <div className="col-lg-7">
            {!result && !predicting && (
              <div className="card panel placeholder-panel">
                <div className="card-body d-flex flex-column align-items-center justify-content-center text-center">
                  <div className="placeholder-icon">📊</div>
                  <h3>Prediction results will appear here</h3>
                  <p>Select a country, adjust indicators if you like, and click <strong>Predict HDI</strong>.</p>
                </div>
              </div>
            )}

            {predicting && (
              <div className="card panel placeholder-panel">
                <div className="card-body d-flex flex-column align-items-center justify-content-center text-center">
                  <div className="spinner-border text-primary mb-3" />
                  <h3>Running ML model...</h3>
                  <p>Extracting features and computing the predicted HDI.</p>
                </div>
              </div>
            )}

            {result && (
              <div className="results-stack">
                <div className="row g-3">
                  <div className="col-md-4">
                    <div className="card stat-card">
                      <div className="stat-label">Predicted HDI</div>
                      <div className="stat-value">{result.predictedHdi.toFixed(3)}</div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="card stat-card">
                      <div className="stat-label">Development Category</div>
                      <div className={`stat-tag ${result.category.class}`}>{result.category.label}</div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="card stat-card">
                      <div className="stat-label">Confidence Score</div>
                      <div className="stat-value">{result.confidence}%</div>
                    </div>
                  </div>
                </div>

                <div className="card panel mt-3">
                  <div className="card-body">
                    <h3 className="panel-title">Actual vs Predicted</h3>
                    <ComparisonChart actual={result.actualHdi} predicted={result.predictedHdi} />
                    <div className="comparison-summary">
                      <div><span className="muted">Actual HDI</span><strong>{result.actualHdi.toFixed(3)}</strong></div>
                      <div><span className="muted">Predicted HDI</span><strong>{result.predictedHdi.toFixed(3)}</strong></div>
                      <div>
                        <span className="muted">Difference</span>
                        <strong className={result.difference >= 0 ? 'pos' : 'neg'}>
                          {result.difference >= 0 ? '+' : ''}{result.difference.toFixed(3)}
                        </strong>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="card panel mt-3">
                  <div className="card-body">
                    <h3 className="panel-title">Indicator Profile</h3>
                    <IndicatorBarChart values={featureValues} features={FEATURES} />
                  </div>
                </div>

                <div className="card panel mt-3">
                  <div className="card-body">
                    <h3 className="panel-title">Feature Importance</h3>
                    <FeatureImportanceChart importance={result.importance} features={FEATURES} />
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </main>

      <footer className="app-footer">
        <p>Smart Human Development Predictor · ML-powered HDI estimation for academic demonstration</p>
      </footer>
    </div>
  )
}
