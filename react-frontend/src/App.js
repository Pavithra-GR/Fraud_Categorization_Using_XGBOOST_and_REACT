import React, { useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [text, setText] = useState("");
  const [translatedText, setTranslatedText] = useState("");
  const [prediction, setPrediction] = useState(null);
  const [translationMode, setTranslationMode] = useState("en-ta");

  const handleChange = (e) => {
    setText(e.target.value);
    e.target.style.height = "auto";
    e.target.style.height = e.target.scrollHeight + "px";
    setPrediction(null); // Clear prediction when text changes
    setTranslatedText(""); // Clear translation when text changes
  };

  const handleTranslate = async () => {
    if (!text.trim()) {
      setTranslatedText("Please enter text to translate.");
      return;
    }










  
    const langPair =
      translationMode === "en-ta"
        ? "en|ta"
        : translationMode === "ta-en"
        ? "ta|en"
        : "ta-Latn|en";

    try {
      const res = await axios.get("https://api.mymemory.translated.net/get", {
        params: { q: text, langpair: langPair },
      });
      setTranslatedText(res.data.responseData.translatedText);
    } catch (error) {
      console.error("Translation Error:", error);
      setTranslatedText("Error translating text.");
    }
  };

  const handlePredict = async () => {
    if (!text.trim()) {
      setPrediction("Please enter text to predict.");
      return;
    }

    try {
      const res = await axios.post("http://127.0.0.1:5000/predict", {
        text: text,
      });
      setPrediction(res.data.prediction);
    } catch (error) {
      console.error("Prediction Error:", error.response ? error.response.data : error.message);
      setPrediction(`Error making prediction: ${error.response?.data?.error || error.message}`);
    }
  };

  return (
    <div className="container mt-5">
      <h3 className="mb-3">Complaint Form</h3>

      {/* Complaint Text Area */}
      <textarea
        className="form-control"
        value={text}
        onChange={handleChange}
        rows={5}
        style={{ resize: "none", overflow: "hidden" }}
        placeholder="Type your complaint..."
      />

      {/* Translation Options */}
      <select
        className="form-select mt-2"
        value={translationMode}
        onChange={(e) => setTranslationMode(e.target.value)}
      >
        <option value="en-ta">English to Tamil</option>
        <option value="ta-en">Tamil to English</option>
        <option value="tanglish-en">Tanglish to English</option>
      </select>

      {/* Buttons */}
      <div className="d-flex gap-2 mt-2">
        <button className="btn btn-success" onClick={handleTranslate}>
          Translate
        </button>
        <button className="btn btn-primary" onClick={handlePredict}>
          Predict Category
        </button>
      </div>

      {/* Show Translated Text */}
      {translatedText && (
        <div className="mt-3">
          <h5>Translated Text:</h5>
          <textarea
            className="form-control"
            value={translatedText}
            readOnly
            rows={3}
          />
        </div>
      )}

      {/* Show Prediction */}
      {prediction && (
        <div className="mt-3">
          <h5>Predicted Category:</h5>
          <p className={`alert ${prediction.startsWith("Error") ? "alert-danger" : "alert-info"}`}>
            {prediction}
          </p>
        </div>
      )}
    </div>
  );
}

export default App;