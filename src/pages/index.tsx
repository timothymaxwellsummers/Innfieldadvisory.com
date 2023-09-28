import {Typography, Card, Stack, Button, Input ,Textarea} from '@mui/joy';
import {NearMe} from '@mui/icons-material';
import indexStyles from '../styles/index.module.css';


export default function Home() {
  return (
    <Stack direction='column' alignItems="center" pt={8}>
      <img src="/logoIFAnew.png" alt="I F A Logo" style={{width: "80px"}} />
      <div className={indexStyles.logoTitle}>Inn Field Advisory</div>
      <Card sx={{width: ["90%", "80%", "350px", "400px"], mt:"30px"}}>
      <Typography>Welcome to Inn Field Advisory. Feel free to contact us below.</Typography>
      <Stack direction="row" sx={{mt: "20px"}} spacing={2}>
      <Input placeholder="Email" fullWidth />
      <Button endDecorator={<NearMe/>}>Send</Button>
      </Stack>
      <Textarea placeholder="Your Message..." sx={{mt: "5px"}} minRows={2}/>
      </Card>
    </Stack>
  )
}
