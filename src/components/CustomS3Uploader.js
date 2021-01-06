import React, { useState } from 'react';
import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';
import {
  Box,
  Button,
  ButtonGroup,
  CircularProgress,
  Typography,
} from '@material-ui/core';
import PhotoCameraIcon from '@material-ui/icons/PhotoCamera';
const useStyles = makeStyles((theme) => ({
  paper: {
    backgroundColor: theme.palette.background.main,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    textAlign: 'center',
    borderRadius: '5px',
  },
  imageBox: {
    margin: 'auto',
    // width: '350px',
    // height: '350px',
    border: '2px dashed grey',
    borderRadius: '3px',
    overflow: 'hidden',
  },
  image: {
    maxWidth: '65%',
    margin: 'auto',
  },
  input: {
    height: 0,
    padding: 0,
    opacity: 0,
  },
  label: {
    display: 'flex',
    justifyContent: 'center',
  },
  icon: { fontSize: '4rem' },
  loading: {
    display: 'flex',

    marginLeft: theme.spacing(2),
  },
}));

const CustomS3Uploader = (props) => {
  const [image, setImage] = useState(null);
  const [uploadURL, setUploadUrl] = useState(null);
  const [loading, setLoading] = useState(false);
  const classes = useStyles();

  // 5mb?
  const MAX_IMAGE_SIZE = 5000000;

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
    setImage('');
    setLoading(false);
  };

  const uploadImage = async (e) => {
    setLoading(true);
    const response = await axios.get(API_ENDPOINT, {
      params: { person: props.person },
    });

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

    setUploadUrl(response.data.uploadURL.split('?')[0]);
  };

  return (
    <Box className={classes.paper}>
      <Box p={1}>
        <Typography variant="h5" gutterBottom>
          Upload a new selfie!
        </Typography>
        <Typography variant="body2">
          {!image ? 'For best results use a square image' : 'Looking good!! 😍'}
        </Typography>
        {loading ? <CircularProgress className={classes.loading} /> : null}
      </Box>
      {!image ? (
        <Box p={2}>
          <label htmlFor="file" className={classes.label}>
            <PhotoCameraIcon className={classes.icon} />
          </label>
          <input
            id="file"
            type="file"
            accepts="image/*"
            onChange={onFileChange}
            className={classes.input}
          />

          <Box p={1}>
            <ButtonGroup color="primary" variant="contained" size="small">
              <Button onClick={props.handleClose}>Cancel</Button>
              <Button onClick={props.revertToOriginalImage}>
                revert to original image
              </Button>
            </ButtonGroup>
          </Box>
        </Box>
      ) : (
        <div className={classes.imageBox}>
          <img
            src={image}
            alt="this will be your new avatar"
            className={classes.imageBox}
          />
          {!uploadURL && (
            <Box p={2}>
              <ButtonGroup variant="contained" color="primary">
                <Button onClick={removeImage}>Remove image</Button>
                <Button onClick={uploadImage}>Upload image</Button>
                <Button onClick={props.handleClose}>cancel</Button>
              </ButtonGroup>
            </Box>
          )}
        </div>
      )}

      {uploadURL && (
        <Box p={2}>
          <Typography variant="h5">Success! Image uploaded!</Typography>
          <ButtonGroup variant="contained" color="primary">
            <Button onClick={props.handleClose}>close</Button>
            <Button onClick={props.revertToOriginalImage}>
              Nevermind! I want the old image!
            </Button>
          </ButtonGroup>
        </Box>
      )}
    </Box>
  );
};

export default CustomS3Uploader;
