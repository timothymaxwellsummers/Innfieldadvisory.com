// components/Footer.js
import { Typography, Stack, SvgIcon, Button } from '@mui/joy';
import { Copyright } from '@mui/icons-material';

function Footer() {
  return (
    <Stack direction={{ xs: 'column', sm: 'row' }} alignItems={"center"} sx={{ mt: "10px", width: ["95%", "95%", "95%", "90%"], pb: 4, maxWidth: "1200px" }} alignContent={"flex-start"}>
      <Typography level='body-sm' style={{ flexGrow: 1 }} startDecorator={<Copyright/>}>InnField Advisory, Houghton St, WC2A 2AE, London</Typography>
      <a href="mailto:contact@innfieldadvisory.com" style={{textDecoration: "none"}}>
      <Button variant="plain">contact@innfieldadvisory.com</Button>
      </a>
    </Stack>
  );
}

export default Footer;
