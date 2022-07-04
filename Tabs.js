import React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';

export default function TabsWrappedLabel() {
  const [value, setValue] = React.useState('six');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ borderRight: 1, borderColor: 'divider', width:'100%' }}>
      <Tabs 
        value={value}
        onChange={handleChange}
        aria-label="wrapped label tabs example" >
        <Tab style={{textTransform: 'none', fontWeight:"bolder"}} value="one" label="Pending" wrapped />
        <Tab style={{textTransform: 'none', fontWeight:"bolder"}} value="two" label="Accepted" wrapped />
        <Tab style={{textTransform: 'none', fontWeight:"bolder"}} value="three" label="AWB created" wrapped />
        <Tab style={{textTransform: 'none', fontWeight:"bolder"}} value="four" label="Ready to Ship" wrapped />
        <Tab style={{textTransform: 'none', fontWeight:"bolder"}} value="five" label="Shipped" wrapped />
        <Tab style={{textTransform: 'none', fontWeight:"bolder"}} value="six" label="Completed" wrapped />
        <Tab style={{textTransform: 'none', fontWeight:"bolder"}} value="seven" label="Cancelled" wrapped  />
      </Tabs>
    </Box>
  );
}
