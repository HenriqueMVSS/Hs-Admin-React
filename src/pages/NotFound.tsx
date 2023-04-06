import styled from "@emotion/styled";
import { useRouteError } from "react-router-dom";
import { ImgNotFound } from "../components/ImgNotFound";

export function NotFound() {
  const error = useRouteError();
  console.error( error);

  return (
    <NotFound.errorPage>
      <NotFound.p>Página não encontrada.</NotFound.p>
        <ImgNotFound />
    </NotFound.errorPage>
  );
}

NotFound.errorPage = styled.div`
  padding: 17% 5% 10% 5%;
  text-align: center;
`
NotFound.p = styled.p`
font-size: 25px;
`