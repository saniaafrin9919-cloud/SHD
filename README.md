# Smart Lender - Loan Eligibility Prediction System

## Overview

Smart Lender is a Machine Learning-based web application that predicts whether a loan applicant is eligible for loan approval. The system analyzes applicant information such as income, education, marital status, credit history, and loan details to provide an instant loan eligibility prediction.

The project uses the XGBoost Machine Learning algorithm and Flask for the web application interface.

---

## Features

- Loan eligibility prediction using Machine Learning.
- User-friendly web interface built with Flask.
- Data preprocessing and feature engineering.
- Model training and evaluation.
- High prediction accuracy using XGBoost.
- Real-time loan approval or rejection prediction.

---

## Technologies Used

- Python
- Flask
- XGBoost
- Pandas
- NumPy
- Scikit-learn
- Matplotlib
- Seaborn
- Joblib
- HTML
- CSS

---

## Project Structure

```
Smart_Lender/
│
├── data/
│   └── Loan Eligibility Prediction.csv
│
├── models/
│   └── xgboost_model.pkl
│
├── static/
│   └── style.css
│
├── templates/
│   ├── index.html
│   └── prediction.html
│
├── notebooks/
│
├── app.py
├── train_model.py
├── requirements.txt
└── README.md
```

---

## Dataset Information

The dataset contains applicant information such as:

- Customer ID
- Gender
- Married Status
- Dependents
- Education
- Self Employed
- Applicant Income
- Coapplicant Income
- Loan Amount
- Loan Amount Term
- Credit History
- Property Area
- Loan Status

Target Variable:

```
Loan_Status
```

- Y = Loan Approved
- N = Loan Rejected

---

## Machine Learning Model

The project uses the XGBoost Classifier for loan eligibility prediction.

Steps involved:

1. Data Collection
2. Data Cleaning
3. Data Preprocessing
4. Label Encoding
5. Train-Test Split
6. Model Training
7. Model Evaluation
8. Model Saving
9. Flask Integration

---

## Installation

Clone the repository:

```bash
git clone <your-github-repository-link>
```

Move into the project directory:

```bash
cd Smart_Lender
```

Create a virtual environment:

```bash
python -m venv venv
```

Activate the virtual environment:

Windows:

```bash
venv\Scripts\activate
```

Install dependencies:

```bash
pip install -r requirements.txt
```

---

## Running the Project

Train the Machine Learning model:

```bash
python train_model.py
```

Run the Flask application:

```bash
python app.py
```

Open your browser and visit:

```
http://127.0.0.1:5000
```

---

## Output

The application predicts whether the loan will be:

- Approved
- Rejected

based on the applicant's details.

---

## Future Enhancements

- User Authentication System
- Database Integration
- Cloud Deployment
- Improved UI Design
- Additional ML Algorithms

---

## Project Outcome

Smart Lender simplifies the loan eligibility checking process using Machine Learning. It helps users receive quick and reliable predictions through an interactive web application.

---

## Author

Developed as part of a Machine Learning project submission.
