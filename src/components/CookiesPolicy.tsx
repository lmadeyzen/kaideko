import { useState, useEffect } from "react";
import styled from "styled-components";
import { breakpoints, colors } from "../constants";
import cookiesPolicy from "../assets/cookies_policy.pdf";

const PolicyWrapper = styled.div<{ visible: boolean }>`
  position: fixed;
  bottom: 0;
  width: 100%;
  background-color: #fff;
  padding: 1rem;
  box-shadow: 0 -2px 10px rgba(0, 0, 0, 0.1);
  display: ${({ visible }) => (visible ? "block" : "none")};
  z-index: 1000;

  @media (min-width: ${breakpoints.l}) {
    padding: 2rem;
  }
`;

const PolicyContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  flex-direction: column;

  @media (min-width: ${breakpoints.l}) {
    gap: 2rem;
    flex-direction: row;
  }
`;

const PolicyText = styled.p`
  margin: 0;
`;

const PolicyButton = styled.button`
  border: 1px solid ${colors.gray};
  padding: 0.5rem;
  border-radius: 10px;
  font-size: 0.8rem;
  transition: all 0.3s;
  cursor: pointer;
  white-space: nowrap;

  &:hover {
    background-color: ${colors.lightGreen};
    border: 1px solid ${colors.lightGreen};
  }
`;

const ButtonsContainer = styled.div`
  display: flex;
  gap: 1rem;
`;

const CookiesPolicy = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const accepted = localStorage.getItem("cookiesAccepted");
    if (!accepted) {
      setVisible(true);
    }
  }, []);

  const acceptPolicy = () => {
    localStorage.setItem("cookiesAccepted", "true");
    setVisible(false);
  };

  const downloadPolicy = () => {
    const link = document.createElement("a");
    link.href = cookiesPolicy;
    link.download = "Polityka prywatności - Kaideko.pdf";
    link.click();
  };

  return (
    <PolicyWrapper visible={visible}>
      <PolicyContent>
        <PolicyText>
          Ta strona wykorzystuje pliki cookies aby zapewnić najlepszą jakość.
          Korzystając z naszej strony, akceptujesz naszą politykę plików
          cookies.
        </PolicyText>
        <ButtonsContainer>
          <PolicyButton onClick={downloadPolicy}>
            Pobierz politykę prywatności
          </PolicyButton>
          <PolicyButton onClick={acceptPolicy}>Zaakceptuj</PolicyButton>
        </ButtonsContainer>
      </PolicyContent>
    </PolicyWrapper>
  );
};

export default CookiesPolicy;
