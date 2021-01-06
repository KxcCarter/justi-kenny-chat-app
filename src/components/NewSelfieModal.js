import React, { useEffect, useState } from 'react';
import axios from 'axios';
//
import CustomS3Uploader from './CustomS3Uploader';
//
import { makeStyles } from '@material-ui/core/styles';
import { Modal } from '@material-ui/core';
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

export default function NewSelfieModal(props) {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

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
        </Fade>
      </Modal>
    </div>
  );
}
