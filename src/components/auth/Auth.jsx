import { LockOutlined } from "@mui/icons-material";
import {
  Avatar,
  Button,
  Checkbox,
  FormControlLabel,
  Grid,
  TextField,
  Link,
  Typography,
} from "@mui/material";
import { Box, Container } from "@mui/system";
import React from "react";
import { useAuth } from "../../context/AuthContextProvider";

const Auth = () => {
  const {
    email,
    password,
    user,

    emailError,
    passwordError,
    hasAccount,

    setPassword,
    setEmail,
    setHasAccount,

    handleSignUp,
    handleLogin,
    // handleLogOut,
    rememberMe,
  } = useAuth();

  let rememberUser = {
    email: "",
    password: "",
  };

  return (
    <>
      <Container component="main" maxWidth="xs">
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar>
            <LockOutlined />
          </Avatar>
          {hasAccount ? (
            <>
              <Typography>Sign in</Typography>

              <Grid>
                <TextField
                  placeholder="Email"
                  margin="normal"
                  size="small"
                  id="email"
                  label="Email Address"
                  name="email"
                  value={email}
                  helperText={emailError}
                  autoComplete="email"
                  autoFocus
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                ></TextField>
              </Grid>
              <Grid>
                <TextField
                  placeholder="Password"
                  margin="normal"
                  size="small"
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  helperText={passwordError}
                  value={password}
                  autoComplete="current-password"
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                ></TextField>
              </Grid>
              <FormControlLabel
                control={<Checkbox defaultChecked />}
                label="remember me"
              />

              <Button
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2, backgroundColor: "green" }}
                onClick={handleLogin()}
              >
                Sign In
              </Button>
            </>
          ) : (
            <>
              <Typography>Sign up</Typography>

              <Grid>
                <TextField
                  placeholder="Email"
                  margin="normal"
                  size="small"
                  id="email"
                  label="Email Address"
                  name="email"
                  value={email}
                  helperText={emailError}
                  autoComplete="email"
                  autoFocus
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                ></TextField>
              </Grid>
              <Grid>
                <TextField
                  placeholder="Password"
                  margin="normal"
                  size="small"
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  helperText={passwordError}
                  value={password}
                  autoComplete="current-password"
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                ></TextField>
              </Grid>
              <FormControlLabel
                control={<Checkbox defaultChecked />}
                label="remember me"
                onChange={() => rememberMe("cncnvn")}
              />
              <Button
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2, backgroundColor: "royalblue" }}
                onClick={handleSignUp}
              >
                Sign up
              </Button>
            </>
          )}

          <Grid item>
            {hasAccount ? (
              <Link
                href="#"
                variant="body2"
                onClick={() => setHasAccount(!hasAccount)}
              >
                Don't have an account? Sign Up
              </Link>
            ) : (
              <Link
                href="#"
                variant="body2"
                onClick={() => setHasAccount(!hasAccount)}
              >
                Have an account? Sign In
              </Link>
            )}
          </Grid>
        </Box>
      </Container>
    </>
  );
};

export default Auth;
