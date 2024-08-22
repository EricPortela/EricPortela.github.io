import * as React from 'react';
import Box from '@mui/material/Box';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import SaveIcon from '@mui/icons-material/Save';

const actions = [
  { icon: <SaveIcon />, name: 'LinkedIn' },
  { icon: <SaveIcon />, name: 'Email' }
];

export default function BasicSpeedDial() {
  return (
    <Box className='Box'>
      <SpeedDial
        className='SpeedDial'
        ariaLabel="SpeedDial basic example"
        // sx={{ position: 'absolute', bottom: 16, right: 16 }}
        icon={<SpeedDialIcon />}
      >
        {actions.map((action) => (
          <SpeedDialAction
            key={action.name}
            icon={action.icon}
            tooltipTitle={action.name}
          />
        ))}
      </SpeedDial>
    </Box>
  );
}