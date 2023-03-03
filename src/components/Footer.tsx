import styled from "@emotion/styled";

export function Footer() {
  return (
    <>
      <footer>
        <Footer.footerItems>
          <Footer.Content>
            <Footer.text>Hs-system</Footer.text>
          </Footer.Content>
        </Footer.footerItems>
      </footer>
    </>
  );
}

Footer.footerItems = styled.footer`
  background: #B6DFCF;
  border-top: 1px solid #ccc;
  padding: 0 8px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  bottom: 0;
  left: 0;
  width: 100%;
  position: relative;
  margin-top: 5px;
`;

Footer.Content = styled.div`
  padding: 8px;
  font-size: 25px;
`;

Footer.text = styled.b`
  color: #fff;
`;
