import React from "react";

import { Section, SectionTitle } from "../../styles/GlobalComponents";
import { Box, Boxes, BoxNum, BoxText } from "./ContactStyles";

const data = [
  { number: 20, text: "Open Source Projects" },
  { number: 1000, text: "Students" },
  { number: 1900, text: "Github Followers" },
  { number: 5000, text: "Github Stars" },
];

const Contact = () => (
  <Section id="contact">
    <SectionTitle>Contact</SectionTitle>
    <div> Please contact me using below.</div>
  </Section>
);

export default Contact;
