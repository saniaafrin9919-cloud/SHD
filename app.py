from flask import Flask, render_template, request
import joblib
import numpy as np

app = Flask(__name__)

model = joblib.load("models/xgboost_model.pkl")


@app.route("/")
def home():
    return render_template("index.html")


@app.route("/predict", methods=["POST"])
def predict():

    customer_id = int(request.form["Customer_ID"])
    gender = int(request.form["Gender"])
    married = int(request.form["Married"])
    dependents = int(request.form["Dependents"])
    education = int(request.form["Education"])
    self_employed = int(request.form["Self_Employed"])
    applicant_income = float(request.form["Applicant_Income"])
    coapplicant_income = float(request.form["Coapplicant_Income"])
    loan_amount = float(request.form["Loan_Amount"])
    loan_amount_term = float(request.form["Loan_Amount_Term"])
    credit_history = int(request.form["Credit_History"])
    property_area = int(request.form["Property_Area"])

    data = [[
    customer_id,
    gender,
    married,
    dependents,
    education,
    self_employed,
    applicant_income,
    coapplicant_income,
    loan_amount,
    loan_amount_term,
    credit_history,
    property_area
]]

    prediction = model.predict(data)

    if prediction[0] == 1:
        result = "Loan Approved"
    else:
        result = "Loan Rejected"

    return render_template("prediction.html", prediction=result)


if __name__ == "__main__":
    app.run(debug=True)