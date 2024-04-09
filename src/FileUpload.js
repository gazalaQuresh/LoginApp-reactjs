import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

export default function FileUpload() {
    const [file, setFile] = useState(null);
    const [error, setError] = useState('');

    const handleFileChange = (e) => {
        setFile(e.target.files[0]);
    };

    const handleFileUpload = () => {
        if (!file) {
            setError('No file selected.');
            return;
        }

        // Create a new FormData object
        const formData = new FormData();
        formData.append('file', file);

        // Make a POST request to upload the file
        fetch('http://localhost/LOGINAPP/fileUpload.php', {
            method: 'POST',
            body: formData
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Failed to upload file.');
            }
            setError('');
            // Handle successful upload
            console.log('File uploaded successfully.');
        })
        .catch(error => {
            setError('Failed to upload file.');
            console.error('Error:', error);
        });
    };

    return (
        <div style={{ display: 'block', width: 400, padding: 30 }}>
            <h4>File Upload</h4>
            <Form>
        
<input id='uploadFile' type="file"  onChange={handleFileChange}    accept=".xlsx,.xls,.doc, .docx,.ppt, .pptx,.txt,.pdf"/>


                {error && <p style={{ color: 'red' }}>{error}</p>}
                <Button variant="primary" onClick={handleFileUpload}>
                    Upload
                </Button>
            </Form>
        </div>
    );
}
