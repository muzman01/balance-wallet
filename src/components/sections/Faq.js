import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import React, { useLayoutEffect, useRef } from "react";
import styled from "styled-components";
import Accordion from "../Accordion";

const Section = styled.section`
  min-height: 100vh;
  height: auto;
  width: 100vw;
  background-color: ${(props) => props.theme.text};
  position: relative;
  color: ${(props) => props.theme.body};
  overflow: hidden;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
const Title = styled.h1`
  font-size: ${(props) => props.theme.fontxxl};
  text-transform: uppercase;
  color: ${(props) => props.theme.body};

  margin: 1rem auto;
  border-bottom: 2px solid ${(props) => props.theme.carouselColor};
  width: fit-content;

  @media (max-width: 48em) {
    font-size: ${(props) => props.theme.fontxl};
  }
`;

const Container = styled.div`
  width: 75%;
  margin: 2rem auto;

  display: flex;
  justify-content: space-between;
  align-content: center;

  @media (max-width: 64em) {
    width: 80%;
  }
  @media (max-width: 48em) {
    width: 90%;
    flex-direction: column;

    & > *:last-child {
      & > *:first-child {
        margin-top: 0;
      }
    }
  }
`;
const Box = styled.div`
  width: 45%;
  @media (max-width: 64em) {
    align-self: center;
  }
  @media (max-width: 48em) {
    width: 90%;
  }
`;

const Faq = () => {
  const ref = useRef(null);
  gsap.registerPlugin(ScrollTrigger);
  useLayoutEffect(() => {
    let element = ref.current;

    ScrollTrigger.create({
      trigger: element,
      start: "bottom bottom",
      end: "bottom top",
      pin: true,
      pinSpacing: false,
      scrub: 1,
      // markers:true,
    });

    return () => {
      ScrollTrigger.kill();
    };
  }, []);

  return (
    <Section ref={ref} id="faq">
      <Title>Faq</Title>

      <Container>
        <Box>
          <Accordion
            ScrollTrigger={ScrollTrigger}
            title="Buy, store,
send and swap
tokens"
          >
            Available as a browser extension and as a mobile app, Balance Wallet
            equips you with a key vault, secure login, token wallet, and token
            exchange—everything you need to manage your digital assets
          </Accordion>
          <Accordion
            ScrollTrigger={ScrollTrigger}
            title="Explore
blockchain apps"
          >
            Balance Wallet provides the simplest yet most secure way to connect
            to blockchain-based applications. You are always in control when
            interacting on the new decentralized web.
          </Accordion>
          <Accordion ScrollTrigger={ScrollTrigger} title="Own your data">
            Balance Wallet generates passwords and keys on your device, so only
            you have access to your accounts and data. You always choose what to
            share and what to keep private
          </Accordion>
        </Box>
        <Box>
          <Accordion
            ScrollTrigger={ScrollTrigger}
            title="
What is Balance Wallet"
          >
            A Crypto Wallet & Gateway To Blockchain Apps
          </Accordion>
         
         
        </Box>
      </Container>
    </Section>
  );
};

export default Faq;
