// import React, { useState } from 'react';
// import axios from 'axios';
// import './App.css';
// import { useDropzone } from 'react-dropzone';

// function App() {
//   const [file, setFile] = useState(null);
//   const [results, setResults] = useState(null);
//   const [loading, setLoading] = useState(false);
//   const [safeScore, setSafeScore] = useState(null);



//   const calculateSafeScore = (results) => {
//     const detections = results.data.attributes.results;
//     const total = Object.keys(detections).length;
//     const cleanCount = Object.values(detections).filter(d => d.category === "undetected").length;
//     const score = ((cleanCount / total) * 100).toFixed(2);
//     return score;
//   };

//   const handleFileChange = (e) => {
//     setFile(e.target.files[0]);
//   };

//   // ... rest of your code





//   const handleSubmit = async (e) => {
//     e.preventDefault(); // ⛔ Prevent page reload
  
//     if (!file) return alert("Please upload a file");
//     const formData = new FormData();
//     formData.append('file', file);
  
//     setLoading(true);
//     try {
//       const res = await axios.post('http://localhost:5000/upload', formData);
//       setResults(res.data);
//       setSafeScore(calculateSafeScore(res.data)); // if you added Safe Score
//     } catch (err) {
//       alert('Scan failed');
//     } finally {
//       setLoading(false);
//     }
//   };
  

//   const renderResults = () => {
//     if (!results) return null;
//     const detections = results.data.attributes.results;

//     return (
//       <table>
//         <thead>
//           <tr>
//             <th>Antivirus</th>
//             <th>Category</th>
//             <th>Result</th>
//           </tr>
//         </thead>
//         <tbody>
//           {Object.entries(detections).map(([engine, data]) => (
//             <tr key={engine}>
//               <td>{engine}</td>
//               <td>{data.category}</td>
//               <td>{data.result || 'Clean'}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     );
//   };

//   return (
//     <div className="App">
//       <h1>Cybersecurity File Scanner</h1>
//       <input type="file" onChange={handleFileChange} />
//       <button onClick={handleSubmit}>Scan File</button>

  
//       {loading && <p>🔍 Scanning file, please wait...</p>}
//       {results && <h2>🛡️ Scan Results</h2>}
//       {safeScore && (
//   <h3 style={{ color: safeScore > 80 ? '#00ff88' : '#ff4444', textAlign: 'center' }}>
//     🔐 Safe Score: {safeScore}%
//   </h3>
// )}

  
//       {/* 🛠️ Add this line to show results */}
//       {renderResults()}
//     </div>
//   );
  
// }

// export default App;



// import React, { useState } from 'react';
// import axios from 'axios';
// import './App.css';
// import { useDropzone } from 'react-dropzone';

// function App() {
//   const [file, setFile] = useState(null);
//   const [results, setResults] = useState(null);
//   const [loading, setLoading] = useState(false);
//   const [safeScore, setSafeScore] = useState(null);



//   const calculateSafeScore = (results) => {
//     const detections = results.data.attributes.results;
//     const total = Object.keys(detections).length;
//     const cleanCount = Object.values(detections).filter(d => d.category === "undetected").length;
//     const score = ((cleanCount / total) * 100).toFixed(2);
//     return score;
//   };

//   const handleFileChange = (e) => {
//     setFile(e.target.files[0]);
//   };

//   // ... rest of your code





//   const handleSubmit = async (e) => {
//     e.preventDefault(); // ⛔ Prevent page reload
  
//     if (!file) return alert("Please upload a file");
//     const formData = new FormData();
//     formData.append('file', file);
  
//     setLoading(true);
//     try {
//       const res = await axios.post('http://localhost:5000/upload', formData);
//       setResults(res.data);
//       setSafeScore(calculateSafeScore(res.data)); // if you added Safe Score
//     } catch (err) {
//       alert('Scan failed');
//     } finally {
//       setLoading(false);
//     }
//   };
  

//   const renderResults = () => {
//     if (!results) return null;
//     const detections = results.data.attributes.results;

//     return (
//       <table>
//         <thead>
//           <tr>
//             <th>Antivirus</th>
//             <th>Category</th>
//             <th>Result</th>
//           </tr>
//         </thead>
//         <tbody>
//           {Object.entries(detections).map(([engine, data]) => (
//             <tr key={engine}>
//               <td>{engine}</td>
//               <td>{data.category}</td>
//               <td>{data.result || 'Clean'}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     );
//   };

//   return (
//     <div className="App">
//       <h1>CyberShield </h1>
//       <h1>Drag And Drop Here
        
//       </h1>
//       <input type="file" onChange={handleFileChange} 
//       />
      
//       <button onClick={handleSubmit}>Scan File</button>

  
//       {loading && <p>🔍 Scanning file, please wait...</p>}
//       {results && <h2>🛡️ Scan Results</h2>}
//       {safeScore && (
//   <h3 style={{ color: safeScore > 80 ? '#00ff88' : '#ff4444', textAlign: 'center' }}>
//     🔐 Safe Score: {safeScore}%
//   </h3>
// )}

  
//       {/* 🛠️ Add this line to show results */}
//       {renderResults()}
//     </div>
//   );
  
// }

// export default App;



import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import { useDropzone } from 'react-dropzone'; // Import dropzone

function App() {
  const [file, setFile] = useState(null);
  const [results, setResults] = useState(null);
  const [loading, setLoading] = useState(false);
  const [safeScore, setSafeScore] = useState(null);
  const [uploadStatus, setUploadStatus] = useState(''); // Add state to track upload status

  const [footerText, setFooterText] = useState('');
  const footerMessages = [
    'Recode 10 minutes attack on one day.',
    'Virus detected in 5 files today.',
    'Hackers tried to breach a secure server yesterday.',
    'Your data is safe with our technology.',
    'New malware signature detected.',
    'Phishing emails blocked in the last 24 hours.',
    'System firewall updated every 24 hours.',
    'No threat detected in the last 24 hours.',
    'Latest security patch applied today.',
    'Cybersecurity news: New ransomware strain discovered.',
  ];

  // Update the footer every 10 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      const randomMessage = footerMessages[Math.floor(Math.random() * footerMessages.length)];
      setFooterText(randomMessage);
    }, 10000); // Change message every 10 seconds

    // Clean up the interval on component unmount
    return () => clearInterval(interval);
  }, []);

  const calculateSafeScore = (results) => {
    const detections = results.data.attributes.results;
    const total = Object.keys(detections).length;
    const cleanCount = Object.values(detections).filter(d => d.category === "undetected").length;
    const score = ((cleanCount / total) * 100).toFixed(2);
    return score;
  };

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
    setUploadStatus('File selected: ' + e.target.files[0].name); // Show file name after selection
  };

  // Using react-dropzone
  const { getRootProps, getInputProps } = useDropzone({
    onDrop: (acceptedFiles) => {
      setFile(acceptedFiles[0]);
      setUploadStatus('File selected: ' + acceptedFiles[0].name);
    },
    accept: '.exe,.zip,.pdf,.docx,.jpg,.png', // File types you want to accept
  });

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent page reload

    if (!file) return alert("Please upload a file");

    setLoading(true);
    setUploadStatus('Uploading file...'); // Show upload status

    const formData = new FormData();
    formData.append('file', file);

    try {
      const res = await axios.post('http://localhost:5000/upload', formData);
      setResults(res.data);
      setSafeScore(calculateSafeScore(res.data));
      setUploadStatus('Upload successful!'); // Show success message after upload
    } catch (err) {
      setUploadStatus('Scan failed. Please try again.'); // Show error message on scan failure
    } finally {
      setLoading(false);
    }
  };

  const renderResults = () => {
    if (!results) return null;
    const detections = results.data.attributes.results;

    return (
      <table>
        <thead>
          <tr>
            <th>Antivirus</th>
            <th>Category</th>
            <th>Result</th>
          </tr>
        </thead>
        <tbody>
          {Object.entries(detections).map(([engine, data]) => (
            <tr key={engine}>
              <td>{engine}</td>
              <td>{data.category}</td>
              <td>{data.result || 'Clean'}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  };

  return (
    <div className="App">
      <h1>Cybersecurity File Scanner</h1>
      
      {/* Drag & Drop Zone */}
      <div
        {...getRootProps()}
        style={{
          border: '2px dashed #ccc',
          padding: '20px',
          borderRadius: '8px',
          cursor: 'pointer',
          textAlign: 'center',
          marginBottom: '10px',
          width: '100%',
          maxWidth: '500px',
        }}
      >
        <input {...getInputProps()} />
        <p>Drag & drop a file here, or click to select a file</p>
      </div>

      {/* File Upload Status */}
      {uploadStatus && <p>{uploadStatus}</p>} {/* Display upload status */}

      {/* Scan Button */}
      <button className="scan-btn" onClick={handleSubmit}>Scan File</button>

      {loading && <p>🔍 Scanning file, please wait...</p>}
      {results && <h2>🛡️ Scan Results</h2>}
      {file && (
 <div style={{ textAlign: 'center', marginTop: '20px' }}>
 {file && (
   <p
     style={{
       color: file.size > 33554432 ? '#ff4d4f' : '#52c41a',
       fontSize: '1.1rem',
       fontWeight: '500',
       background: '#f0f2f5',
       display: 'inline-block',
       padding: '10px 20px',
       borderRadius: '8px',
       boxShadow: '0 2px 6px rgba(0,0,0,0.1)',
     }}
   >
     📁 File size: {(file.size / (1024 * 1024)).toFixed(2)} MB<br />
     🚫 Only files under <strong>32 MB</strong> are allowed
   </p>
 )}
</div>

)}


      {/* Display Safe Score */}
      {safeScore && (
        <h3 style={{ color: safeScore > 80 ? '#00ff88' : '#ff4444', textAlign: 'center' }}>
          🔐 Safe Score: {safeScore}%
        </h3>
      )}

      {renderResults()}

      {/* Footer with Dynamic Text */}
      <footer className="footer">
        <p>{footerText}</p>
      </footer>
    </div>
  );
}

export default App;
