import { Box, Container, Grid } from "@mui/material";
import { Link } from "react-router-dom";
import styled from "@emotion/styled";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { Budget } from "../components/Bugets";
import { TotalCustomers } from "../components/TotalCustomers";
import { TasksProgress } from "../components/TasksProgress";
import { TotalProfit } from "../components/TotalProfit";
import { Sales } from "../components/Sales";
import { TrafficByDevice } from "../components/TrafficByDevice";

export function Home() {
  return (
    <>
      <Header title={"Dashboard"} />
      <Home.Dashboard>
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            py: 8,
          }}
        >
          <Container maxWidth={false}>
            <Grid container spacing={3}>
              <Grid item lg={3} sm={6} xl={3} xs={12}>
                <Budget />
              </Grid>
              <Grid item xl={3} lg={3} sm={6} xs={12}>
                <TotalCustomers />
              </Grid>
              <Grid item xl={3} lg={3} sm={6} xs={12}>
                <TasksProgress />
              </Grid>
              <Grid item xl={3} lg={3} sm={6} xs={12}>
                <TotalProfit />
              </Grid>
              <Grid item lg={8} md={12} xl={9} xs={12}>
                <Sales />
              </Grid>
              <Grid item lg={4} md={6} xl={3} xs={12}>
                <TrafficByDevice />
              </Grid>
            </Grid>
          </Container>
        </Box>
      </Home.Dashboard>
      <Home.Footer>
        <Footer />
      </Home.Footer>
    </>
  );
}

Home.Dashboard = styled.div`
  padding-top: 65px;
`;

Home.Link = styled(Link)`
  text-decoration: none;
  color: #7d70ea;
`;

Home.Footer = styled.footer`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
`;
