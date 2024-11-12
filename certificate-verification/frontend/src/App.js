import React, { useState } from 'react';
import axios from 'axios';

const App = () => {
  const [certID, setCertID] = useState('');
  const [certData, setCertData] = useState(null);

  const fetchCertificate = () => {
    axios.get(`http://localhost:5000/certificates/${certID}`)
      .then((res) => setCertData(res.data))
      .catch(() => setCertData(null));
  };

  return (
    <div>
      <h1>Certificate Verification</h1>
      <input type="text" value={certID} onChange={(e) => setCertID(e.target.value)} placeholder="Enter Certificate ID" />
      <button onClick={fetchCertificate}>Verify</button>
      {certData ? (
        <div>
          <h2>{certData.name}</h2>
          <p><strong>Course:</strong> {certData.course}</p>
          <p><strong>Issue Date:</strong> {new Date(certData.issueDate).toLocaleDateString()}</p>
        </div>
      ) : (
        <p>Certificate not found</p>
      )}
    </div>
  );
};

export default App;
