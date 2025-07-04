import styled from "styled-components";

const Container = styled.div`
  background-color: #1e40af;
  padding: 2rem 0;
  color: white;
  text-align: center;
`;

const FooterStyled = styled.footer`
  max-width: 1200px;
  margin: 0 auto;
`;

const FooterTitle = styled.h2`
  font-size: 2rem;
  margin-bottom: 0.5rem;
`;

const FooterAuthor = styled.p`
  font-size: 1rem;
  opacity: 0.75;
`;

function Footer() {
  return (
    <Container>
      <FooterStyled>
        <FooterTitle>Movie App</FooterTitle>
        <FooterAuthor>Create by Aril</FooterAuthor>
      </FooterStyled>
    </Container>
  );
}

export default Footer;
