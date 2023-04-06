import { render, screen } from "@testing-library/react";
import { Contact } from "../pages/Contact";
import { RouteTest } from "./Logics";

test("Deve apresentar um formulário na tela de contato.", () => {
  render(
    <RouteTest>
      <Contact/>
    </RouteTest>
);
expect(screen.getAllByTestId('contact-form')).toHaveLength(1);
});

test("Deve apresentar os campos de preenchimento dos dados no formulário na tela de contato.", () => {
  render(
    <RouteTest>
      <Contact/>
    </RouteTest>
);
expect(screen.getAllByTestId('contact-form-input')).toHaveLength(4);
});
