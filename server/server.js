// server/server.js
const express = require('express');
const multer = require('multer');
const axios = require('axios');
const cors = require('cors');
const fs = require('fs');
const FormData = require('form-data');

const app = express();
const PORT = 5000;
const upload = multer({ dest: 'uploads/' });
const VT_API_KEY = '98dd77d4a9f3621f84f406b037d061b7425fb77aaf4e6f2abf15f50729eb2ed7'; // Replace with your key

app.use(cors());

app.post('/upload', upload.single('file'), async (req, res) => {
  const filePath = req.file.path;

  const form = new FormData();
  form.append('file', fs.createReadStream(filePath));

  try {
    const uploadResp = await axios.post('https://www.virustotal.com/api/v3/files', form, {
      headers: {
        'x-apikey': VT_API_KEY,
        ...form.getHeaders()
      }
    });

    const analysisId = uploadResp.data.data.id;
    const resultUrl = `https://www.virustotal.com/api/v3/analyses/${analysisId}`;

    let result;
    let status = 'queued';

    while (status !== 'completed') {
      await new Promise(r => setTimeout(r, 4000));
      const r = await axios.get(resultUrl, {
        headers: { 'x-apikey': VT_API_KEY }
      });
      result = r.data;
      status = result.data.attributes.status;
    }

    res.json(result);
  } catch (err) {
    console.error(err);
    res.status(500).send('Scan failed');
  } finally {
    fs.unlinkSync(filePath); // Clean up file
  }
});

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
