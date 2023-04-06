import styled from "@emotion/styled";
import { Link } from "react-router-dom";
import { Logo } from "./Logo";

type HeaderProps = {
  title: string;
};

export function Header(props: HeaderProps) {
  return (
      <Header.Header>
        <Header.Content>
          <Header.Logo><Logo /></Header.Logo>
          <Header.PropsTitle>{props.title}</Header.PropsTitle>
          <Header.Link data-testid="home-link" to="/">Home</Header.Link>
          <Header.Link data-testid="contact-link" to="/contact">Contato</Header.Link>
        </Header.Content>
      </Header.Header>
  )
}

Header.Header = styled.header`
  width:100%;
  background: #D0E9FE;
  background: linear-gradient(90deg, #D0E9FE 50%, #D0E9FE 86%);
  border-bottom: 1px solid rgba(255, 255, 255, 0.9);
  position: fixed;
  top: 0;
  left: 0;
  padding: 0 8px;
  box-sizing: border-box;
  z-index: 1;
`

Header.Content = styled.div`
  margin: auto;
  max-width: 980px;
  height: 70px;
  display:flex;
  align-items:center;    
`

Header.Logo = styled.h1`
  display:flex;
  width: 130px;
`

Header.PropsTitle = styled.div`
  align-items: center;
  font-size:20px;
  font-weight:bold;
  align-items: center;
  justify-content: center;
  display: flex;
  flex:1;
  color: rgba(0, 0, 0, 0.7);
`

Header.Link = styled(Link)`
  text-decoration: none;
  color: rgba(0, 0, 0, 0.7);
  font-weight: bold;
  font-size:20px;
  padding-left: 10px;
`