import React from 'react'
import CardView from './CardView'
import Stack from '@mui/material/Stack';
function Skills() {

    var imageUrl = ['https://t3.ftcdn.net/jpg/03/21/24/30/360_F_321243084_GstfWflk1eTLlzUdRZ5mjoP5IG1iCc8J.jpg',
    'https://miro.medium.com/v2/resize:fit:1400/1*x0d41ns8PTQZz4a3VbMrBg.png','https://miro.medium.com/v2/resize:fit:1200/1*fEyeESs-HxVR7Zlr-fdlvw.png',
    'https://zdblogs.zohowebstatic.com/sites/catalyst/blog/files/2022-05/1%20%E2%80%93%2037.jpg',
  'https://img.kompass.com/sys-master-images/hb0/h30/9975597039646/crm-logo-lockup-png',
  'https://5.imimg.com/data5/SELLER/Default/2023/9/339961899/RD/LH/QW/160521504/zoho-creator-software-service.png'
  ];
  return (
    <div>
        <Stack direction={{ xs: 'column', sm: 'row' }}
  spacing={{ xs: 1, sm: 2, md: 20 }} useFlexGap flexWrap="wrap" alignItems="center"  justifyContent="space-around">
            {
                imageUrl.map((url) => (

                    <CardView url={url} />

                ))
            

        }
        </Stack>
        
    </div>
  )
}

export default Skills