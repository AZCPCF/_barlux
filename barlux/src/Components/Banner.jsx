import { Grid } from '@mui/material'
import React from 'react'
import a from '../links.json'
export default function Banner() {
  return (
    <div>
      <Grid container spacing={0}>
        <Grid item xs={12} md={12}>
            <Grid xs={10} sx={{height:'700px',margin:'100px auto',borderRadius:'16px',bgcolor:a.color}}></Grid>
        </Grid>
        </Grid>
    </div>
  )
}
