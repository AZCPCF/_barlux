import React,{useState,useEffect} from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
export default function Modal({open,Close,onTrue,text}) {
  // const [isOpen,setIsOpen] = useState(open)
  // useEffect(() => {setIsOpen(open)},[open])
  const onClose = () => {
    Close()
  }
  const onF = () => {
    Close()
  }
  const onT = () => {
    onTrue()
    Close()
  }
  return (
    <React.Fragment>
      <Dialog
        open={open}
        onClose={onClose}
      >
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {text}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => {onT()}}>بله</Button>
          <Button onClick={() => {onF()}} sx={{color:"red"}}>خیر</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
