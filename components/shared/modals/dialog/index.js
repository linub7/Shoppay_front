/* eslint-disable @next/next/no-img-element */
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Slide,
} from '@mui/material';
import Link from 'next/link';
import { forwardRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { hideDialog } from 'store/slices/dialogSlice';

const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="down" ref={ref} {...props} />;
});

import styles from './styles.module.scss';

const DialogModal = () => {
  const { show, msgs, link, header } = useSelector((state) => state.dialog);

  const dispatch = useDispatch();
  const handleClose = () => dispatch(hideDialog());

  return (
    <div style={{ position: 'fixed', zIndex: '999999999999999999' }}>
      <Dialog
        open={show}
        TransitionComponent={Transition}
        keepMounted
        onClick={handleClose}
        disableScrollLock={true}
        aria-describedby="alert-dialog-slide-description"
        fullWidth={true}
      >
        <DialogTitle className={styles.header}>{header}</DialogTitle>
        <DialogContent className={styles.body}>
          {msgs &&
            msgs?.map((msg, i) => (
              <DialogContentText
                key={i}
                className={styles.msg}
                id="alert-dialog-slide-description"
              >
                <img
                  src={
                    msg?.type === 'error'
                      ? 'https://imgurl.ir/uploads/t2753_error-icon.png'
                      : 'https://imgurl.ir/uploads/a38036_success-icon.png'
                  }
                  alt="icon"
                />
                {/* <img
                  src={
                    msg?.type === 'error'
                      ? '/images/error-icon.png'
                      : '/images/success-icon.png'
                  }
                  alt="icon"
                /> */}
                <span>{msg.msg}</span>
              </DialogContentText>
            ))}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Close</Button>
          {link?.link && (
            <Button>
              <Link href={link?.link}>
                <span>{link?.linkText}</span>
              </Link>
            </Button>
          )}
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default DialogModal;
