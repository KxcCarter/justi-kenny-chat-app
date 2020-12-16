import React, { useState } from 'react';
import axios from 'axios';

const CustomS3Uploader = (props) => {
  const [image, setImage] = useState(null);
  const [uploadURL, setUploadUrl] = useState(null);

  const MAX_IMAGE_SIZE = 2000000;

  const API_ENDPOINT =
    'https://tsjcb7kk2b.execute-api.us-east-1.amazonaws.com/uploads';

  const onFileChange = (e) => {
    let files = e.target.files || e.dataTransfer.files;
    if (!files.length) return;
    createImage(files[0]);
  };

  const createImage = (file) => {
    let reader = new FileReader();
    reader.onload = (e) => {
      console.log('length: ', e.target.result.includes('data:image/jpeg'));
      if (!e.target.result.includes('data:image/jpeg')) {
        return alert('Wrong file type - JPG only.');
      }
      // Do I care?
      if (e.target.result.length > MAX_IMAGE_SIZE) {
        return alert('Image is loo large.');
      }
      setImage(e.target.result);
    };
    reader.readAsDataURL(file);
  };

  const removeImage = (e) => {
    console.log('Remove clicked');
    setImage('');
  };

  const uploadImage = async (e) => {
    console.log('Upload clicked');

    const response = await axios.get(API_ENDPOINT, {
      params: { person: 'Justi' },
    });

    console.log('Response: ', response);
    console.log('Uploading: ', image);

    let binary = atob(image.split(',')[1]);
    let array = [];

    for (let i = 0; i < binary.length; i++) {
      array.push(binary.charCodeAt(i));
    }
    let blobData = new Blob([new Uint8Array(array)], { type: 'image/jpeg' });
    console.log('Uploading to: ', response.data.uploadURL);

    const result = await fetch(response.data.uploadURL, {
      method: 'PUT',
      body: blobData,
    });

    console.log('Result: ', result);
    // Final URL for the user doesn't need the query string params
    console.log(response.data.person);
    setUploadUrl(response.data.uploadURL.split('?')[0]);
  };

  return (
    <React.Fragment>
      <h1>Custom S3 Uploader Test</h1>
      {!image ? (
        <div>
          <h2>Select an image</h2>
          <input type="file" onChange={onFileChange} />
        </div>
      ) : (
        <div>
          <img src={image} alt="this is your new avatar" />
          {!uploadURL && (
            <div>
              <button onClick={removeImage}>Remove image</button>
              <button onClick={uploadImage}>Upload image</button>
            </div>
          )}
        </div>
      )}

      {uploadURL && <h2>Success! Image uploaded to bucket.</h2>}
    </React.Fragment>
  );
};

export default CustomS3Uploader;
