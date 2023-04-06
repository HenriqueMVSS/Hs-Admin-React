import { Header } from "../components/Header";
import { useState } from "react";
import styled from "@emotion/styled";
import { Footer } from "../components/Footer";

const initialFormState = {
  name: "",
  email: "",
  phoneNumber: "",
  message: "",
};

function isValidName(name: string) {
  if (name.length < 2) {
    return "O nome precisa ter pelo menos 2 caracteres";
  }

  if (name.length > 35) {
    return "O nome precisa ter no máximo 35 caracteres";
  }

  return null;
}

function isValidEmail(email: string) {
  let regexEmail = /([a-z 0-9 .])+@([a-z]{3,9})([.]{1})([a-z]{3})/g;

  if (!regexEmail.test(email)) {
    return "Digite um e-mail válido: example@dominio.com";
  }

  return null;
}

function isValidPhoneNumber(phoneNumber: string) {
  const validPhone = /([0-9]{2})([0-9]{5})-?([0-9]{4})/g;

  if (!validPhone.test(phoneNumber)) {
    return "Digite um número de telefone válido: DDD XXXXX-XXXX";
  }

  return null;
}

function isValidMessage(message: string) {
  if (message.length < 8) {
    return "O campo de mensagem precisa ter pelo menos 8 caracteres";
  }

  if (message.length > 300) {
    return "O campo de mensagem precisa ter no máximo 300 caracteres";
  }

  return null;
}

function ErrorMessage({ message }: { message: string | null }) {
  if (message === null) {
    return null;
  }

  return <MessageError>{message}</MessageError>;
}

const MessageError = styled.span`
  color: #cf0e0e;
  font-size: 13px;
`;

export function Contact() {
  const [formState, setFormState] = useState(initialFormState);
  const validName = isValidName(formState.name);
  const validEmail = isValidEmail(formState.email);
  const validPhoneNumber = isValidPhoneNumber(formState.phoneNumber);
  const validMessage = isValidMessage(formState.message);
  const isFormValid =
    validName === null &&
    validEmail === null &&
    validMessage === null &&
    validPhoneNumber === null;
  return (
    <>
      <Header title={"Fale Conosco"} />
      <Contact.formContainer>
        <Contact.formTitle>Entrar em contato</Contact.formTitle>
        <Contact.Form
          data-testid="contact-form"
          noValidate
          method="POST"
          onSubmit={async (e) => {
            e.preventDefault();

            if (isFormValid) {
              const form = new FormData();
              form.append("fullname", formState.name);
              form.append("email", formState.email);
              form.append("phone-number", formState.phoneNumber);
              form.append("message", formState.message);

              alert("Formulário enviado com sucesso");
              setFormState(initialFormState);
            }
          }}
        >
          <div className="row">
            <div>
              <Contact.Field
                data-testid="contact-form-input"
                type="text"
                name="fullname"
                id="fullname"
                className="field"
                placeholder="Nome completo"
                value={formState.name}
                onChange={(e) =>
                  setFormState({ ...formState, name: e.target.value })
                }
              />
              <ErrorMessage message={validName} />
            </div>
          </div>

          <div className="row">
            <div>
              <Contact.Field
                data-testid="contact-form-input"
                type="email"
                name="email"
                id="email"
                className="field"
                placeholder="example@gmail.com"
                value={formState.email}
                onChange={(e) =>
                  setFormState({ ...formState, email: e.target.value })
                }
              />
              <ErrorMessage message={validEmail} />
            </div>
            <div>
              <Contact.Field
                data-testid="contact-form-input"
                type="tel"
                name="phone-number"
                id="phone-number"
                className="field"
                placeholder="XX 00000-0000"
                maxLength={13}
                value={formState.phoneNumber}
                onChange={(e) =>
                  setFormState({ ...formState, phoneNumber: e.target.value })
                }
              />
              <ErrorMessage message={validPhoneNumber} />
            </div>
          </div>

          <div className="row">
            <div>
              <Contact.Textarea
                data-testid="contact-form-input"
                id="message"
                className="field"
                placeholder="Mensagem"
                value={formState.message}
                onChange={(e) =>
                  setFormState({ ...formState, message: e.target.value })
                }
              />
              <ErrorMessage message={validMessage} />
            </div>
          </div>
          {isFormValid && (
            <Contact.formButton type="submit">Enviar</Contact.formButton>
          )}
        </Contact.Form>
      </Contact.formContainer>
      <Contact.Footer>
        <Footer />
      </Contact.Footer>
    </>
  );
}

Contact.formContainer = styled.div`
  margin: 12px;
  padding-top: 82px;
`;
Contact.Form = styled.form`
  display: flex;
  flex-direction: column;
  text-align: center;
`;

Contact.formTitle = styled.h1`
  text-align: center;
  font-size: 22px;
  color: rgba(0, 0, 0, 0.7);
  padding-bottom: 20px;
`;

Contact.Field = styled.input`
  width: 100%;
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 14px 2px;
  margin-bottom: 2px;
  margin-top: 5px;
  box-sizing: border-box;
`;
Contact.Textarea = styled.textarea`
  resize: none;
  height: 80px;
  width: 100%;
  margin-top: 7px;
`;
Contact.formButton = styled.button`
  padding: 12px 18px;
  color: rgba(4, 4, 2, 0.9);
  border: none;
  border-radius: 4px;
  margin-top: 12px;
  background-color: #b6dfcf;
`;

Contact.Footer = styled.footer`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
`;
