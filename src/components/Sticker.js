import React, {useState, useEffect} from 'react';
import { Paper, Typography, Divider } from '@material-ui/core';
import { withStyles } from '@material-ui/styles';

const styles = theme => ({
  sticker:{
    padding: '10px'
  },
  stickerContent:{
    padding: '20px 20px 0'
  },
  stickerContentMain:{
    textAlign: 'center',
    marginBottom: '10px'
  }
});

function Sticker(props) {
  const {title, content, classes} = props;

  const [prev, setPrev] = useState([]);

  useEffect(() => {
    setPrev((prev) => [...prev, content]);
  }, [content]);

  return (
    <Paper className={classes.sticker}>
      <Typography variant="h6">
        {title}
        </Typography>
      <Divider />
      <div className={classes.stickerContent}>
      <Typography variant="h4" className={classes.stickerContentMain} >
        {content}
      </Typography>
      {prev.length > 1 && prev[prev.length - 2] &&
      <Typography variant="caption" display="block" gutterBottom>
        Previous:  {prev[prev.length - 2]}
      </Typography>}
      </div>
    </Paper>
  )
}


export default withStyles(styles)(Sticker);