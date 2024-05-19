import React from 'react'
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Skills from './Skills';


function Home() {
  var data ={
    name:"siranjeevi",
    age:25,
    job:"software developer",
  }
  localStorage.setItem("data","data");

  return (
    <div>
        <div className='grid-home'>
              <div className='item1'>
                  <div className='head-content1'>content 1</div>
                  <div className='head-content2'>content 2</div>
              </div>
              <div className='item2'>
              
             
              </div>
              <div className='item3'>Main</div>
              
              <div className='item5'>

                  <Stack spacing={2} direction="row">
                    <Button variant='contained'>Login</Button>
                    <Button variant='outlined'>Register</Button>
                  </Stack>

              </div>
        </div>
        <Skills/>
    </div>
  );
}

export default Home; // Export the component as default