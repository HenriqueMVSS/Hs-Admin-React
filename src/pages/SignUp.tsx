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
import { Link } from "react-router-dom";
import styled from "@emotion/styled";
import { useFormik } from "formik";
import * as Yup from "yup";

export type LoginProps = {
  name: string;
};

export default function SignUp() {
  const [name, setName] = useState("");
  const [surname, setSurName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const formik = useFormik({
    initialValues: {
      name: name,
      surname: surname,
      email: email,
      password: password,
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .max(255)
        .required("Name is required"),
      surname: Yup.string()
        .max(255)
        .required("Surname is required"),
      email: Yup.string()
        .email("Must be a valid email")
        .max(255)
        .required("Email is required"),
      password: Yup.string().max(255).required("Password is required"),
    }),
    onSubmit: () => {
      
    },
  });

  return (
    <SignUp.Stack>
      <Container maxWidth="sm">
        <form onSubmit={formik.handleSubmit}>
          <Box sx={{ my: 3 }}>
            <Typography color="textPrimary" variant="h4">
              Sign up
            </Typography>
            <Typography color="textSecondary" gutterBottom variant="body2">
              Register on the internal platform
            </Typography>
          </Box>
          <TextField
            error={Boolean(formik.touched.name && formik.errors.name)}
            fullWidth
            helperText={formik.touched.name && formik.errors.name}
            label="Name"
            margin="normal"
            name="name"
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            type="name"
            value={formik.values.name}
            variant="outlined"
          />
          <TextField
            error={Boolean(formik.touched.surname && formik.errors.surname)}
            fullWidth
            helperText={formik.touched.surname && formik.errors.surname}
            label="Surname"
            margin="normal"
            name="surname"
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            type="surname"
            value={formik.values.surname}
            variant="outlined"
          />
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
          <Box sx={{ py: 2 }}>
            <Button
              color="primary"
              disabled={formik.isSubmitting}
              fullWidth
              size="large"
              type="submit"
              variant="contained"
            >
              Register
            </Button>
          </Box>
          <Typography color="textSecondary" variant="body2">
            Do you have an account?{" "}
            <SignUp.Link to="/">Sign In</SignUp.Link>
          </Typography>
          <CardActions></CardActions>
        </form>
      </Container>
    </SignUp.Stack>
  );
}

SignUp.Stack = styled(Stack)`
  padding-top: 200px;
  align-items: center;
  alignItems: "center",
  flexGrow: 1,
  minHeight: "100%",
`;

SignUp.Link = styled(Link)`
  text-decoration: none;
  color: #7d70ea;
`;
