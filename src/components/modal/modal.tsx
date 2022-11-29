import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import '../carersCard/carersCard.css';
import { useState, useEffect } from 'react';
import { AvaliableSlots } from '../../interfaces/slots';
import { Carer } from '../../interfaces/carers';

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function BasicModal(props: Carer["carer"]) {
  const [open, setOpen] = useState<boolean>(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [avaliability, setAvaliability] = useState<AvaliableSlots[]>([]);

  const getJsonRequest = async () => {
    try {
      const url: string = `https://ceracare.github.io/fe-exercise/availableSlots.json`;
      const response = await fetch(url);
      const responseJson = await response.json();
      if (responseJson) {
        setAvaliability(responseJson.UTCAvailableSlots);
      }
    } catch (e) {
      console.log("error msg: " + e);
    }
  };
  useEffect(() => {
    getJsonRequest();
  }, []);

  function tConvert (time: AvaliableSlots["slots"]) {
    time = time.toString ().match (/^([01]\d|2[0-3])(:)([0-5]\d)(:[0-5]\d)?$/) || [time];
  
    if (time.length > 1) {
      time = time.slice (1); 
      time[5] = +time[0] < 12 ? ' AM' : ' PM'; 
      time[0] = +time[0] % 12 || 12;
    } else {
      return '12:00 PM'
    }
    
    return time.join (''); 
  }

  return (
    <div>
      <Button className="toggle-info btn" onClick={handleOpen}>Check Avaliability</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box className='box' sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Scheadule Carer
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            {props.carer}
          </Typography>
          {avaliability.map((e: AvaliableSlots["slots"])=>(
            <Button className="toggle-info btn">{tConvert(e)}</Button>
          ))}
        </Box>
      </Modal>
    </div>
  );
}