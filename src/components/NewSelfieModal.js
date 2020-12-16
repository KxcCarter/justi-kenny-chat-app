import React, { useEffect, useState } from 'react';
import axios from 'axios';

import CustomS3Uploader from './CustomS3Uploader';

//
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Button, Modal, Box, Input } from '@material-ui/core';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';

const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    textAlign: 'center',
  },
}));

const dropzoneStyle = {
  margin: 'auto',
  width: '150px',
  height: '150px',
  border: '2px dashed grey',
  borderRadius: '3px',
  backgroundColor: 'lightgray',
  overflow: 'hidden',
};

export default function NewSelfieModal(props) {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [uploadFinished, setUploadFinished] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {}, [open]);

  const revertToOriginalImage = async () => {
    await axios.put(
      `https://t4qxti3dak.execute-api.us-east-1.amazonaws.com/Dev`,
      { person: props.person }
    );
    props.getPhotos();
    handleClose();
  };

  const body = (
    <div className={classes.paper}>
      <Typography variant="b1" id="transition-modal-title" gutterBottom>
        Upload a new selfie!
      </Typography>

      <form>
        <Input type="file" accept="image/*" />
      </form>

      <Box p={2}>
        <ButtonGroup variant="contained">
          {uploadFinished && <Button>use this photo</Button>}
          <Button onClick={revertToOriginalImage}>
            revert to original image
          </Button>
          <Button onClick={handleClose}>cancel</Button>
        </ButtonGroup>
      </Box>
    </div>
  );

  return (
    <div>
      <img src={props.src} alt={props.person} onClick={handleOpen} />

      <Modal
        aria-labelledby="transition-modal-title"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <CustomS3Uploader
            handleClose={handleClose}
            person={props.person}
            revertToOriginalImage={revertToOriginalImage}
          />

          {/* {body} */}
        </Fade>
      </Modal>
    </div>
  );
}
