import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';

const theme = createTheme();

export default function SignIn() {
  const [data,setData] = React.useState({
    title: "",
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    acceptTerms: false
  })
  const handleSubmit = (event) => {

    event.preventDefault();

    axios.post("https://real-pear-fly-kilt.cyclic.app/accounts/register",data)
    .then(y=>{
      if(y.status == 200 || y.status ==201){
        toast.success("Sucessfully Resitrastion");
      }
    }).catch(y=>{
      toast.error("Error");
    })

  };

  const inputHandlar = (e) =>{
    if(e.target.type != "checkbox"){
      setData({...data,[e.target.name] : e.target.value});
    }else{
      setData({...data,[e.target.name] : e.target.checked});
    }
  }

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="text"
              label="Title"
              name="title"
              autoFocus
              onChange={inputHandlar}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="text"
              label="First Name"
              name="firstName"
              onChange={inputHandlar}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="text"
              label="Last Name"
              name="lastName"
              onChange={inputHandlar}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              onChange={inputHandlar}
            />

            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              onChange={inputHandlar}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="confirmPassword"
              label="Confirm Password"
              type="password"
              id="password"
              autoComplete="current-password"
              onChange={inputHandlar}
            />
            <FormControlLabel
              control={<Checkbox typeof='checkbox' name="acceptTerms" value="remember" color="primary" onClick={inputHandlar} />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="#" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}