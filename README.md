# Fraud_Categorization_Using_XGBOOST_and_REACT - Cyber Crime Case Classification 🛡️

## 📌 Project Overview

**Fraud_Categorization** is an AI-driven cybercrime classification system designed to assist law enforcement and citizens in identifying and categorizing cybercrime cases effectively. The model classifies cases based on user input and provides guided assistance for filing reports on the National Cyber Crime Reporting Portal (**NCRP**).

---

## 🔍 Key Features

*   **Cybercrime Case Classification**: Utilizes **XGBoost** to accurately categorize different types of cybercrimes (e.g., Financial Fraud, Social Media Crime, etc.).
*   **Local Language Support**: Enables users to interact in their **native language** for better accessibility via a Translation API.
*   **Text-to-Speech (TTS)**: Converts classified case details into speech for an enhanced, auditory user experience.
*   **Data Security**: Ensures user data **privacy** and secure transmission.
*   **Explainable AI (XAI)**: Provides **transparency** in classification decisions, helping users understand why a specific category was chosen.
*   **Feedback-Based Training**: Enhances model performance through continuous learning from user feedback, allowing for dynamic improvements.

---

## 🎯 Model Performance

The classification model demonstrates strong predictive capabilities on the provided cybercrime dataset:

| Classification Level | Metric | Score |
| :--- | :--- | :--- |
| **Primary Category** | Accuracy Prediction | **82.83%** |
| **Sub-Category** | Accuracy Prediction | **69.60%** |

---

## 🛠 Tech Stack & Libraries Used

The system is built on a robust set of technologies, spanning from the frontend interface to the machine learning core.

### Programming Languages & Frameworks
*   **Python** - Core programming language for the machine learning pipeline and backend logic.
*   **Flask** - **Backend framework** for exposing the ML model as a RESTful API.
*   **React** - **Frontend** for creating a modern, interactive, and user-friendly web interface.

### Machine Learning & Data Processing
*   **XGBoost** - The primary machine learning library used for high-performance **cybercrime classification**.
*   **NumPy** - Essential library for **numerical computing** and array manipulation.
*   **Pandas** - Tool for efficient **data manipulation** and analysis.
*   **Scikit-Learn** - Library for model selection, preprocessing, and **performance evaluation**.

### Natural Language Processing (NLP)
*   **NLTK** - Natural Language Toolkit for basic text cleaning and preprocessing.
*   **Translation API** - Used to power the **multilingual support** feature.
*   **SpeechRecognition** - Used for **Text-to-Speech** (TTS) functionalities.

### Model Persistence & Optimization
*   **Joblib** - Library for efficiently saving and loading the trained XGBoost model (**model persistence**).
