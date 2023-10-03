import { Typography, Card, Stack, Button, Input, Textarea, Divider, List, ListItem, ListItemDecorator } from '@mui/joy';
import { NearMe, Mail, Done } from '@mui/icons-material';
import indexStyles from '../styles/index.module.css';
import HorizontalScrollList from '@/components/horizontalList';
import Footer from '@/components/footer';


export default function Home() {
  return (
    <>
      <Stack direction='column' alignItems="center" >
        <Stack direction="row" alignItems={"center"} sx={{ mt: "10px", width: ["95%", "95%", "95%", "90%"], maxWidth: "1200px"}} alignContent={"flex-start"}>
          <img src="/logoIFAred.png" alt="I F A Logo" className={indexStyles.imageWidth} />
          <Typography level="h3" style={{ flexGrow: 1 }}>InnField Advisory</Typography>
          <Button endDecorator={<Mail />} variant='outlined' size='sm'>Contact</Button>
        </Stack>
        <Divider sx={{ width: ["95%", "95%", "95%", "90%"], mt: "10px", alignSelf: "center", maxWidth: "1200px" }} />
        <Stack direction={"column"} sx={{ mt: "10px", width: ["90%", "80%", "80%", "700px"] }} pt={3}>
          <Typography level="h3">About us</Typography>
          <Typography pt={2}> InnField Advisory, an initiative by London School of Economics postgraduates, offers pro bono research and advisory services. We specialize in policy and infrastructure projects for low and middle-income countries, translating our academic prowess into real-world solutions.</Typography>
          <Typography level="h3" pt={6}>What we Offer</Typography>
          <List variant='outlined' sx={{ mt: "20px", borderRadius: 'sm' }} >
            <ListItem>
              <ListItemDecorator>
                <Done />
              </ListItemDecorator>
              Targeted project research
            </ListItem>
            <ListItem>
              <ListItemDecorator>
                <Done />
              </ListItemDecorator>
              Creation of essential project documents
            </ListItem>
            <ListItem>
              <ListItemDecorator>
                <Done />
              </ListItemDecorator>
              Investment due diligence support
            </ListItem>
            <ListItem>
              <ListItemDecorator>
                <Done />
              </ListItemDecorator>
              Comprehensive data analysis, from macro trends to local surveys
            </ListItem>
          </List>
          <Typography level="h3" pt={6}>Our Team</Typography>
          <Typography pt={2} pb={2}>Educated at: <i>London School of Economics and Political Science</i><br /> Experience includes:</Typography>
          <HorizontalScrollList />
        </Stack>
        <Divider sx={{ width: ["95%", "95%", "95%", "90%"], mt: "50px", alignSelf: "center", maxWidth: "1200px" }} />
        <Footer />
      </Stack>
    </>
  )
}
