import { useState } from "react";
import Typography from "@mui/material/Typography";
import {
  Card,
  CardActions,
  CardContent,
  Button,
  Stack,
  Container,
  TextField,
  Box,
} from "@mui/material";
import { Link, Outlet } from "react-router-dom";
import styled from "@emotion/styled";
import { useFormik } from "formik";
import * as Yup from "yup";

export type LoginProps = {
  name: string;
};

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  // const Theme = useContext(ThemeContext);

  const entrar = () => {
    setMessage("Erro de autenticação");
    if (email == "login@nossaobra.com.br" && password == "Login@") {
      setMessage("Ok");
    }
  };

  const formik = useFormik({
    initialValues: {
      email: email,
      password: password,
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Must be a valid email")
        .max(255)
        .required("Email is required"),
      password: Yup.string().max(255).required("Password is required"),
    }),
    onSubmit: () => {
      entrar();
    },
  });

  return (
    <SignIn.Stack>
      <Container maxWidth="sm">
        <form onSubmit={formik.handleSubmit}>
          <Box sx={{ my: 3 }}>
            <Typography color="textPrimary" variant="h4">
              Sign in
            </Typography>
            <Typography color="textSecondary" gutterBottom variant="body2">
              Sign in on the internal platform
            </Typography>
          </Box>
          <TextField
            error={Boolean(formik.touched.email && formik.errors.email)}
            fullWidth
            helperText={formik.touched.email && formik.errors.email}
            label="Email Address"
            margin="normal"
            name="email"
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            type="email"
            value={formik.values.email}
            variant="outlined"
          />
          <TextField
            error={Boolean(formik.touched.password && formik.errors.password)}
            fullWidth
            helperText={formik.touched.password && formik.errors.password}
            label="Password"
            margin="normal"
            name="password"
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            type="password"
            value={formik.values.password}
            variant="outlined"
          />
          {message && <strong>{message}</strong>} <br />
          <Box sx={{ py: 2 }}>
            <Button
              color="primary"
              disabled={formik.isSubmitting}
              fullWidth
              size="large"
              type="submit"
              variant="contained"
            >
              Sign In Now
            </Button>
          </Box>
          <Typography color="textSecondary" variant="body2">
            Don&apos;t have an account?{" "}
            <SignIn.Link to="signup">Sign Up</SignIn.Link>
          </Typography>
          <CardActions></CardActions>
        </form>
      </Container>
      <div className="detail">
        <Outlet/>
      </div>
    </SignIn.Stack>
  );
}

SignIn.Stack = styled(Stack)`
  padding-top: 250px;
  align-items: center;
  alignItems: "center",
  flexGrow: 1,
  minHeight: "100%",
`;

SignIn.Link = styled(Link)`
  text-decoration: none;
  color: #7d70ea;
`;
