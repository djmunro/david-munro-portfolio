/** @jsx jsx */
import { jsx } from "@emotion/core";

import styled from "styled-components";

import * as colors from "./styles/colors";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  background: ${colors.primary};
  color: ${colors.text};
  height: 100%;
  overflow-y: auto;
  position: fixed;
  text-align: center;
  top: 0;
  width: 25%;
  right: 0;
`;

const NavLinks = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;

const NavLink = styled.li`
  border-top: solid 2px ${colors.yellow};
  display: block;
  padding: 0;

  a {
    transition: none;
    color: ${colors.white} !important;
    display: block;
    padding: 0.85em 0;
    text-decoration: none;
  }

  a.active {
    background: #fff;
    color: ${colors.primary} !important;
  }

  :first-child {
    border-top: 0;
  }
`;

const IconLink = styled.a`
  display: inline-block;
  text-decoration: none;
  color: ${colors.yellow};
  height: 1.5rem;
  width: 1.5rem;
  padding: 0.5rem;

  :hover {
    transition: color 0.15s ease-in;
    color: ${colors.white} !important;
  }
`;

const ConnectContainer = styled.div`
  padding: 1.5em;
`;

const Title = styled.h1`
  color: ${colors.white};
`;

const Portrait = styled.div`
  margin: 0 auto 2em auto;
  width: 10em;

  & > img {
    object-fit: cover;
    height: auto;
    width: 100%;
    border-radius: 100%;
  }
`;

const Sidebar = () => {
  return (
    <Wrapper>
      <div
        css={{
          padding: "2em"
        }}
      >
        <Portrait>
          <img src="headshot.jpg" alt="Me!" />
        </Portrait>
        <Title>David Munro</Title>
        <p className="profile">
          Hi, I'm David! I develop web applications. You can hire me to build
          your idea.
        </p>
      </div>
      <div
        css={{
          flexGrow: 1
        }}
      >
        <NavLinks>
          <NavLink>
            <a href="#one" className="active">
              About
            </a>
          </NavLink>
          <NavLink>
            <a href="#two">Things I Can Do</a>
          </NavLink>
          <NavLink>
            <a href="#three">A Few Accomplishments</a>
          </NavLink>
          <NavLink>
            <a href="#four">Contact</a>
          </NavLink>
        </NavLinks>
      </div>
      <ConnectContainer>
        <IconLink href="https://github.com/mrmrs" title="GitHub">
          <svg
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill-rule="evenodd"
            clip-rule="evenodd"
            stroke-linejoin="round"
            stroke-miterlimit="1.414"
          >
            <path d="M8 0C3.58 0 0 3.582 0 8c0 3.535 2.292 6.533 5.47 7.59.4.075.547-.172.547-.385 0-.19-.007-.693-.01-1.36-2.226.483-2.695-1.073-2.695-1.073-.364-.924-.89-1.17-.89-1.17-.725-.496.056-.486.056-.486.803.056 1.225.824 1.225.824.714 1.223 1.873.87 2.33.665.072-.517.278-.87.507-1.07-1.777-.2-3.644-.888-3.644-3.953 0-.873.31-1.587.823-2.147-.083-.202-.358-1.015.077-2.117 0 0 .672-.215 2.2.82.638-.178 1.323-.266 2.003-.27.68.004 1.364.092 2.003.27 1.527-1.035 2.198-.82 2.198-.82.437 1.102.163 1.915.08 2.117.513.56.823 1.274.823 2.147 0 3.073-1.87 3.75-3.653 3.947.287.246.543.735.543 1.48 0 1.07-.01 1.933-.01 2.195 0 .215.144.463.55.385C13.71 14.53 16 11.534 16 8c0-4.418-3.582-8-8-8" />
          </svg>
        </IconLink>

        <IconLink href="https://linkedin.com" title="LinkedIn">
          <svg
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill-rule="evenodd"
            clip-rule="evenodd"
            stroke-linejoin="round"
            stroke-miterlimit="1.414"
          >
            <path
              d="M13.632 13.635h-2.37V9.922c0-.886-.018-2.025-1.234-2.025-1.235 0-1.424.964-1.424 1.96v3.778h-2.37V6H8.51V7.04h.03c.318-.6 1.092-1.233 2.247-1.233 2.4 0 2.845 1.58 2.845 3.637v4.188zM3.558 4.955c-.762 0-1.376-.617-1.376-1.377 0-.758.614-1.375 1.376-1.375.76 0 1.376.617 1.376 1.375 0 .76-.617 1.377-1.376 1.377zm1.188 8.68H2.37V6h2.376v7.635zM14.816 0H1.18C.528 0 0 .516 0 1.153v13.694C0 15.484.528 16 1.18 16h13.635c.652 0 1.185-.516 1.185-1.153V1.153C16 .516 15.467 0 14.815 0z"
              fill-rule="nonzero"
            />
          </svg>
        </IconLink>
        <IconLink href="https://twitter.com/mrmrs_" title="Twitter">
          <svg
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill-rule="evenodd"
            clip-rule="evenodd"
            stroke-linejoin="round"
            stroke-miterlimit="1.414"
          >
            <path
              d="M16 3.038c-.59.26-1.22.437-1.885.517.677-.407 1.198-1.05 1.443-1.816-.634.375-1.337.648-2.085.795-.598-.638-1.45-1.036-2.396-1.036-1.812 0-3.282 1.468-3.282 3.28 0 .258.03.51.085.75C5.152 5.39 2.733 4.084 1.114 2.1.83 2.583.67 3.147.67 3.75c0 1.14.58 2.143 1.46 2.732-.538-.017-1.045-.165-1.487-.41v.04c0 1.59 1.13 2.918 2.633 3.22-.276.074-.566.114-.865.114-.21 0-.416-.02-.617-.058.418 1.304 1.63 2.253 3.067 2.28-1.124.88-2.54 1.404-4.077 1.404-.265 0-.526-.015-.783-.045 1.453.93 3.178 1.474 5.032 1.474 6.038 0 9.34-5 9.34-9.338 0-.143-.004-.284-.01-.425.64-.463 1.198-1.04 1.638-1.7z"
              fill-rule="nonzero"
            />
          </svg>
        </IconLink>
      </ConnectContainer>
    </Wrapper>
  );
};

export default Sidebar;
