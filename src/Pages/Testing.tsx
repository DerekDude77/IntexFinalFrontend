import React from "react";
import {
  Grid,
  Paper,
  Avatar,
  TextField,
  Button,
  Typography,
  Link,
  FormControlLabel,
  Checkbox,
} from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import MyBody from "../Components/MyBody";

const Login: React.FC = () => {
  const paperStyle = {
    padding: 20,
    height: "70vh",
    width: "max",
    margin: "20px auto",
  };
  const avatarStyle = { backgroundColor: "#1bbd7e" };
  const btnstyle = { margin: "8px 0" };
  return (
    <MyBody>
      <Grid container justifyContent="center">
        <Grid item xs={12} sm={8} md={5} lg={4}>
          <Paper elevation={10} sx={paperStyle}>
            <Grid
              container
              justifyContent="center"
              alignItems="center"
              spacing={2}
            >
              <Grid item>
                <Avatar sx={avatarStyle}>
                  <LockOutlinedIcon />
                </Avatar>
              </Grid>
              <Grid item>
                <Typography component="h2" variant="h5">
                  Sign In
                </Typography>
              </Grid>
            </Grid>
            <form>
              <TextField
                label="Username"
                placeholder="Enter username"
                variant="outlined"
                fullWidth
                required
              />
              <TextField
                label="Password"
                placeholder="Enter password"
                type="password"
                variant="outlined"
                fullWidth
                required
              />
              <FormControlLabel
                control={<Checkbox name="checkedB" color="primary" />}
                label="Remember me"
              />
              <Button
                type="submit"
                color="primary"
                variant="contained"
                sx={btnstyle}
                fullWidth
              >
                Sign in
              </Button>
            </form>
            <Grid container justifyContent="space-between">
              <Grid item>
                <Link href="#">Forgot password?</Link>
              </Grid>
              <Grid item>
                <Link href="#">Sign Up</Link>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    </MyBody>
  );
};

export default Login;
