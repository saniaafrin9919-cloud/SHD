// Client-side ML: ordinary least squares linear regression trained on the
// country dataset, with feature importance (standardized coefficients) and
// a confidence score derived from leave-one-out cross-validation R^2.
import { COUNTRY_DATA, FEATURE_KEYS } from '../data/countries.js'

function transform(row) {
  return [
    row.lifeExpectancy,
    row.expectedSchooling,
    row.meanSchooling,
    Math.log(row.gni),
    Math.log(row.population),
    row.healthIndex,
    row.educationIndex,
    row.incomeIndex
  ]
}

function mean(arr) { return arr.reduce((a, b) => a + b, 0) / arr.length }
function std(arr) {
  const m = mean(arr)
  return Math.sqrt(arr.reduce((a, b) => a + (b - m) ** 2, 0) / arr.length) || 1
}

// Solve (X^T X + lambda*I) beta = X^T y via Gaussian elimination.
function train(X, y, lambda = 0.01) {
  const n = X.length
  const d = X[0].length
  const A = Array.from({ length: d }, () => new Array(d).fill(0))
  const b = new Array(d).fill(0)
  for (let i = 0; i < n; i++) {
    for (let r = 0; r < d; r++) {
      b[r] += X[i][r] * y[i]
      for (let c = 0; c < d; c++) A[r][c] += X[i][r] * X[i][c]
    }
  }
  for (let r = 0; r < d; r++) A[r][r] += lambda
  const aug = A.map((row, i) => [...row, b[i]])
  for (let col = 0; col < d; col++) {
    let pivot = col
    for (let r = col + 1; r < d; r++) {
      if (Math.abs(aug[r][col]) > Math.abs(aug[pivot][col])) pivot = r
    }
    ;[aug[col], aug[pivot]] = [aug[pivot], aug[col]]
    const pv = aug[col][col]
    if (Math.abs(pv) < 1e-12) continue
    for (let c = col; c <= d; c++) aug[col][c] /= pv
    for (let r = 0; r < d; r++) {
      if (r === col) continue
      const factor = aug[r][col]
      for (let c = col; c <= d; c++) aug[r][c] -= factor * aug[col][c]
    }
  }
  return aug.map(row => row[d])
}

function standardize(X) {
  const cols = X[0].length
  const means = new Array(cols).fill(0)
  const stds = new Array(cols).fill(0)
  for (let c = 0; c < cols; c++) {
    const col = X.map(r => r[c])
    means[c] = mean(col)
    stds[c] = std(col)
  }
  const Xs = X.map(row => row.map((v, c) => (v - means[c]) / stds[c]))
  return { Xs, means, stds }
}

// Predict one raw row using coefficients trained on standardized features.
function predictWithStd(betaStd, means, stds, yMean, xRaw) {
  const xs = xRaw.map((v, c) => (v - means[c]) / stds[c])
  const pred = betaStd.reduce((acc, b, i) => acc + b * xs[i], 0) + yMean
  return pred
}

let model = null

function getModel() {
  if (model) return model
  const X = COUNTRY_DATA.map(transform)
  const y = COUNTRY_DATA.map(r => r.hdi)
  const yMean = mean(y)

  const { Xs, means, stds } = standardize(X)
  const betaStd = train(Xs, y, 0.01)

  // Feature importance: absolute standardized coefficients, normalized.
  const absImp = betaStd.map(b => Math.abs(b))
  const impSum = absImp.reduce((a, b) => a + b, 0) || 1
  const importance = absImp.map(a => a / impSum)

  // Confidence: leave-one-out cross-validation R^2.
  let ssRes = 0, ssTot = 0
  for (let i = 0; i < X.length; i++) {
    const Xcv = X.filter((_, k) => k !== i)
    const ycv = y.filter((_, k) => k !== i)
    const { Xs: Xs2, means: m2, stds: s2 } = standardize(Xcv)
    const beta2 = train(Xs2, ycv, 0.01)
    const pred = predictWithStd(beta2, m2, s2, mean(ycv), X[i])
    ssRes += (y[i] - pred) ** 2
    ssTot += (y[i] - yMean) ** 2
  }
  const r2 = 1 - ssRes / ssTot
  const confidence = Math.max(0, Math.min(100, r2 * 100))

  model = { betaStd, means, stds, yMean, importance, confidence }
  return model
}

export function predict(input) {
  const m = getModel()
  const x = transform(input)
  const pred = predictWithStd(m.betaStd, m.means, m.stds, m.yMean, x)
  const clamped = Math.max(0, Math.min(1, pred))
  return {
    predictedHdi: Math.round(clamped * 1000) / 1000,
    confidence: Math.round(m.confidence * 100) / 100,
    importance: m.importance
  }
}

export function getFeatureImportance() {
  return getModel().importance
}

export function getModelConfidence() {
  return Math.round(getModel().confidence * 100) / 100
}
