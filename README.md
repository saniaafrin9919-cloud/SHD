# Smart Lender - Loan Eligibility Prediction System

## Project Overview

Smart Lender is a Machine Learning-based Loan Eligibility Prediction System developed using Python, Flask, and XGBoost. The application predicts whether a loan applicant is eligible for loan approval based on various financial and personal details provided by the user.

The system provides quick and accurate loan eligibility predictions through a simple and interactive web interface.

---

## Features

- Loan eligibility prediction using Machine Learning.
- User-friendly web interface built with Flask.
- Real-time prediction of loan approval or rejection.
- Data preprocessing and feature engineering.
- High-performance XGBoost classification model.
- Easy deployment and testing.

---

## Technologies Used

- Python
- Flask
- XGBoost
- Pandas
- NumPy
- Scikit-learn
- Joblib
- HTML
- CSS

---

## Dataset Information

The dataset contains the following attributes:

- Customer_ID
- Gender
- Married
- Dependents
- Education
- Self_Employed
- Applicant_Income
- Coapplicant_Income
- Loan_Amount
- Loan_Amount_Term
- Credit_History
- Property_Area
- Loan_Status (Target Variable)

Target Variable:

- Y = Loan Approved
- N = Loan Rejected

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
├── templates/
│   ├── index.html
│   └── prediction.html
│
├── static/
│   └── style.css
│
├── app.py
├── train_model.py
├── requirements.txt
├── README.md
└── .gitignore
```

---

## Machine Learning Workflow

1. Data Collection
2. Data Preprocessing
3. Feature Encoding
4. Train-Test Split
5. Model Training using XGBoost
6. Model Evaluation
7. Model Saving
8. Flask Web Application Integration
9. Loan Eligibility Prediction

---

## Installation

### Clone the Repository

```bash
git clone <repository-url>
```

### Navigate to the Project Folder

```bash
cd Smart_Lender
```

### Create a Virtual Environment

```bash
python -m venv venv
```

### Activate the Virtual Environment

For Windows:

```bash
venv\Scripts\activate
```

### Install Required Packages

```bash
pip install -r requirements.txt
```

---

## Running the Project

### Train the Machine Learning Model

```bash
python train_model.py
```

### Run the Flask Application

```bash
python app.py
```

Open your browser and visit:

```
http://127.0.0.1:5000
```

---

## Prediction Process

1. Enter the applicant details.
2. Click on the Predict button.
3. The trained XGBoost model processes the inputs.
4. The system displays whether the loan is approved or rejected.

---

## Model Used

- XGBoost Classifier

The XGBoost model was selected because of its efficiency, robustness, and high predictive performance for structured tabular datasets.

---

## Future Enhancements

- User Authentication
- Cloud Deployment
- Database Integration
- Improved User Interface
- Additional Machine Learning Models

---

## Output

The application predicts:

- Loan Approved
- Loan Rejected

based on the applicant's details.

---

## Author

Developed as part of the Smart Lender - Loan Eligibility Prediction System project using Machine Learning and Flask.
