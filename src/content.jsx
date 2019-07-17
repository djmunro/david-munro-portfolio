/** @jsx jsx */
import { jsx } from "@emotion/core";
import styled from "styled-components";

import * as colors from "./styles/colors";

const Wrapper = styled.section`
  padding-right: 25%;
`;

const Container = styled.div`
  margin: 0 auto;
  padding: 2em;
  max-width: calc(100% - 4.5em);
  width: 45em;
`;

const Title = styled.h2`
  color: ${colors.primary};
  font-size: 3.5em;
  margin-bottom: 0.75em;
`;

const H2 = styled.h2`
  color: ${colors.secondary};
  font-size: 1.75em;
  font-weight: 700;
  margin-top: 0.75em;
  margin-bottom: 0.75em;
`;

const Link = styled.a`
  transition: color 0.2s ease-in-out, border-color 0.2s ease-in-out;
  border-bottom: solid 1px ${colors.primary};
  color: inherit;
  text-decoration: none;

  :hover {
    border-bottom-color: transparent;
    color: ${colors.primary} !important;
  }
`;

const Banner = styled.div`
  & > img {
    object-fit: cover;
    height: 17.6em;
    width: 100%;
  }
`;

const AccomplishmentContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 2.25em;
  padding-top: 2.25em;
  border-top: solid 3px #f4f4f4;

  :first-child {
    border-top: 0;
  }
`;

const Thumbnail = styled.a`
  align-self: center;
  padding-right: 2.5em;
  width: 48%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ThumbnailText = styled.div`
  align-self: center;
  width: 50%;
`;

const HR = styled.div`
  border-top: solid 6px #f4f4f4;
`;

const Content = () => {
  return (
    <Wrapper>
      <Banner>
        <img src="https://picsum.photos/id/1/1280/768" />
      </Banner>

      <Container>
        <header>
          <Title>Code Quality</Title>
        </header>
        <section>
          <p>
            I am a big proponent of automated testing, unit tests to assert that
            my functions work for all edge cases, and Selenium testing to be
            sure that it's working in the browser. Not only does it make it
            easier to check if the entire site is still working, but it saves
            time in the long run from manual testings and constant regressions.
            My opinion on white spacing is that it needs to be consistent, my
            code style will follow the code that surrounds it. Writing
            self-documenting code is also very important, I will give variables
            and functions obvious names, and comment non-trivial pieces of
            functionality.
          </p>

          <br />
          <p>
            Also, my tests will provide further documentation. For designing and
            communicating large systems, I use OmniGraffle.
          </p>
        </section>
      </Container>

      <HR />

      <Container>
        <H2>A Few Accomplishments</H2>
        <p>
          Integer eu ante ornare amet commetus vestibulum blandit integer in
          curae ac faucibus integer non. Adipiscing cubilia elementum integer.
          Integer eu ante ornare amet commetus.
        </p>
        <div>
          <AccomplishmentContainer>
            <Thumbnail>
              <img
                src="images/simpleselenium.png"
                alt=""
                css={{ display: "block", width: "100%" }}
              />
            </Thumbnail>
            <ThumbnailText>
              <h4>simpleselenium.com — 2018</h4>
              <p>
                I created this blog using Jekyll when I began using selenium for
                integration testing at my workplace.
              </p>
            </ThumbnailText>
          </AccomplishmentContainer>
          <AccomplishmentContainer>
            <Thumbnail>
              <img
                src="images/simplebudget.jpeg"
                alt=""
                css={{ display: "block", width: "auto", maxHeight: "20em" }}
              />
            </Thumbnail>
            <ThumbnailText>
              <h4>Simple Budget - 2018</h4>
              <p>
                Personal project of mine that I developed to help my wife track
                and budget our expenses more easily.
                <br />
                Technology: React-native, Expo, LocalStorage
              </p>
            </ThumbnailText>
          </AccomplishmentContainer>
          <AccomplishmentContainer>
            <Thumbnail>
              <img
                src="images/simplessg.png"
                alt=""
                css={{ display: "block", width: "100%" }}
              />
            </Thumbnail>
            <ThumbnailText>
              <h4>Simple SSG — 2018</h4>
              <p>
                A side project of mine. This tool help me to create blog posts
                without having to write redundant html/css by leveraging a
                templating system that allowed me to write posts in markdown.
                <br />
                Technology: Python, Templating (Jinja2, pug)
              </p>
            </ThumbnailText>
          </AccomplishmentContainer>
        </div>
      </Container>
    </Wrapper>
  );
};

export default Content;
