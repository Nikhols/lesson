import styled from 'styled-components';

export const PageShell = styled.section`
  display: grid;
  gap: 24px;
`;

export const HeroCard = styled.div`
  padding: 32px;
  border-radius: 28px;
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.08), rgba(30, 36, 51, 0.48));
  border: 1px solid rgba(255, 255, 255, 0.08);
  box-shadow: 0 24px 60px rgba(0, 0, 0, 0.24);
`;

export const Label = styled.span`
  display: inline-flex;
  width: fit-content;
  padding: 8px 14px;
  border-radius: 999px;
  background: rgba(255, 196, 117, 0.18);
  color: #ffd598;
  font-size: 14px;
  letter-spacing: 0.04em;
  text-transform: uppercase;
`;

export const Title = styled.h1`
  margin: 16px 0 12px;
  font-size: clamp(32px, 5vw, 52px);
  line-height: 1;
`;

export const Description = styled.p`
  margin: 0;
  max-width: 760px;
  color: rgba(246, 239, 229, 0.76);
  font-size: 18px;
  line-height: 1.6;
`;
