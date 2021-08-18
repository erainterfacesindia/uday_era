import styled from "styled-components"
import { Link } from "gatsby"


export const Button = styled(Link)`
 background : ${({ primary}) => (primary ? "#F26A2E" : "white")};
 white-space: nowrap;
 padding: ${({ big}) => (big ? "16px 40px" : "10px 32px")};
 color:#fff;
 font-size:${({ big}) => (big ? "20 px" : "16px")};
 outline: none;
 border: none;
 min-width: 35px;
 cursor: pointer;
 text-decoration: none;
 transition: 0.3s !important;
 border-radius:${({ round }) => (round ? "50px":"none")};

 &:hover {
     background: ${({ primary}) => (primary ? "voilet" : "white")};
     transform: translateY(-2px);
 }
`