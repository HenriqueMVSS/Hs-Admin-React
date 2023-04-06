import { render, screen } from "@testing-library/react";
import { Header } from "../components/Header";
import { RouteTest } from "./Logics";

test("Deve apresentar o botão de Home no cabeçalho para redirecionar a tela inicial.", () => {
  render(
    <RouteTest>
      <Header title={'Home'}/>
    </RouteTest>
);
expect(screen.getAllByTestId('contact-link')).toHaveLength(1);
});

test("Deve apresentar o botão de contato no cabeçalho para direcionar a tela de contato.", () => {
  render(
    <RouteTest>
      <Header title={'Contato'}/>
    </RouteTest>
);
expect(screen.getAllByTestId('contact-link')).toHaveLength(1);
});

