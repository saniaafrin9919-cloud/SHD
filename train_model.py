import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import LabelEncoder
from sklearn.metrics import accuracy_score
from xgboost import XGBClassifier
import joblib
import os

# Load dataset
df = pd.read_csv("data/Loan Eligibility Prediction.csv")

# Convert categorical columns to numbers
categorical_columns = [
    "Gender",
    "Married",
    "Dependents",
    "Education",
    "Self_Employed",
    "Property_Area"
]

le = LabelEncoder()

for column in categorical_columns:
    df[column] = le.fit_transform(df[column])

# Convert Loan_Status to 0 and 1
df["Loan_Status"] = df["Loan_Status"].map({"N": 0, "Y": 1})

# Separate input and output
X = df.drop("Loan_Status", axis=1)
y = df["Loan_Status"]

# Split the dataset
X_train, X_test, y_train, y_test = train_test_split(
    X, y, test_size=0.2, random_state=42
)

# Train the model
model = XGBClassifier()
model.fit(X_train, y_train)

# Predict
y_pred = model.predict(X_test)

# Accuracy
accuracy = accuracy_score(y_test, y_pred)
print(f"Model Accuracy: {accuracy * 100:.2f}%")

# Save model
os.makedirs("models", exist_ok=True)
joblib.dump(model, "models/xgboost_model.pkl")

print("Model saved successfully!")