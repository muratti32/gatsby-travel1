import styled from "styled-components"
import { Link } from "gatsby"

export const Button = styled(Link)`
  background: ${({ primary }) => (primary ? "#F26E2E" : "#077BF1")};
  white-space: no-wrap;
  padding: ${({ big }) => (big ? "1rem 2.2rem" : "0.7rem 2rem")};
  font-size: ${({ big }) => (big ? "1.25rem" : "1rem")};
  outline: none;
  border: none;
  color: white;
  min-width: 6.1rem;
  cursor: pointer;
  text-decoration: none;
  transition: 0.3s !important;
  border-radius: ${({ round }) => (round ? "3.1rem" : 0)};

  &:hover {
    background: ${({ primary }) => (primary ? "#077BF1" : "#F26E2E")};
    transform: translateY(-2px);
    color: white;
  }
`
