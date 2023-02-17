import styled from "@emotion/styled";
import { Card, CardContent, Stack } from "@mui/material";

type HeaderProps = {
  title: string;
};

export function Header(props: HeaderProps) {
  return (
  
      <CardContent>
        <Header.Stack>{props.title}</Header.Stack>
      </CardContent>
 
  )
}

Header.Stack = styled(Stack)`
  padding-bottom: 15px; 
  align-items: center;
  justify-content: center;
  font-size:20px;
  font-weight:bold;
`
