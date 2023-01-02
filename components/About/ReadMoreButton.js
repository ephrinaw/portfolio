import React, { useState } from "react";
import { SectionText } from "../../styles/GlobalComponents";

import Button from "../../styles/GlobalComponents/Button";

function ReadMoreButton() {
  const [showMore, setShowMore] = useState(false);

  return (
    <>
      {showMore ? (
        <SectionText>
          I have a background in data science and machine learning using Python.
          I have used this knowledge to analyze and interpret complex datasets,
          build machine learning models, and derive insights from data. I also
          have basic knowledge of cloud computing using Google, Amazon, and
          Azure clouds. This has given me the ability to deploy and manage
          applications in the cloud, as well as take advantage of the various
          services and tools provided by these platforms. I have experience
          using PowerBI to create data visualizations and reports, which has
          allowed me to effectively communicate complex data insights to a wide
          range of audiences. Furthermore, I have gained knowledge about
          virtualization using Docker and VirtualBox. This has allowed me to
          create and manage virtual environments for testing and deployment
          purposes. Using Docker, I have been able to containerize applications
          and easily deploy them across various environments. With VirtualBox, I
          have been able to create and manage virtual machines, allowing me to
          run multiple operating systems on a single physical host. Overall, I
          have a wide range of skills and experiences that would be valuable in
          many different types of roles and industries. I am well-equipped to
          work on a variety of projects related to operating systems, frontend
          development, data analysis, cloud computing, and more.
          <Button onClick={() => setShowMore(false)}>Read less</Button>
        </SectionText>
      ) : (
        <SectionText>
          <Button onClick={() => setShowMore(true)}>Read more</Button>
        </SectionText>
      )}
    </>
  );
}

export default ReadMoreButton;
