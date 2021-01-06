import React from 'react';
import { Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { ReactTinyLink } from 'react-tiny-link';

const useStyles = makeStyles((theme) => ({
  body: {
    display: 'flex',
    justifyContent: 'center',
  },
}));

const EmbededPreview = (props) => {
  const classes = useStyles();
  return (
    <Box className={classes.body}>
      <ReactTinyLink
        showGraphic="true"
        cardSize="small"
        description="Help me pick a suit for the wedding!"
        url="https://www.indochino.com/collection/suits"
      />
    </Box>
  );
};

export default EmbededPreview;
