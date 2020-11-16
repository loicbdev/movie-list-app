import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const NAVBAR = styled.div`
  margin: 1rem;
  font-size : 25px;
  text-align: left;
`;

function NavBar() {
  return (
    <div>
      <NAVBAR>
        <Link to="/movies">Movie List</Link>
      </NAVBAR>
    </div>
  );
}

export default NavBar;
