import React, { lazy, Suspense } from "react";
import IntroContent from "../../content/IntroContent.json";
import MiddleBlockContent from "../../content/MiddleBlockContent.json";
import ProjectContent from "../../content/ProjectContent.json";
import SurveyContent from "../../content/SurveyContent.json";
import CardContainer from "../../common/CardContainer";
import H5PContent from "../../components/H5PContent";

const MiddleBlock = lazy(() => import("../../components/MiddleBlock"));
const Container = lazy(() => import("../../common/Container"));
const ScrollToTop = lazy(() => import("../../common/ScrollToTop"));
const ContentBlock = lazy(() => import("../../components/ContentBlock"));
const Video = lazy(() => import("../../components/VideoComponent"));
const UserProfileCard = lazy(() => import("../../components/AboutCards"));

const userProfiles = [
  {
    src: "img/cards/mansour.png",
    alt: "Mansour",
    name: "Yomna Emad Mansour",
    title: "Postgrad Student",
    text: "Yomna is a  Post Graduate Student at the Department of Construction and Building Engineering of the Arab Academy for Science, Technology, and Maritime Transport in Cairo, Egypt and a Senior Tendering Engineer at ElSewedy Electric for Infrastructure Works. She is pursuing a career in the construction industry, while working on her Master’s Degree. She earned her BSc in Construction Engineering and Management from the German University in Cairo in 2018.",
    twitter: "",
    linkedin: "https://www.linkedin.com/in/yomnaemad/",
    email: "yomna.mansour@student.aast.edu",
  },
  {
    src: "img/cards/eid.png",
    alt: "Eid",
    name: "Mohamed Saeid Eid",
    title: "Associate Professor of Construction Management",
    text: "Eid is an Associate Professor at the Department of Construction and Building Engineering of the Arab Academy for Science, Technology, and Maritime Transport in Cairo, Egypt. Eid earned his PhD in Civil and Environmental Engineering from The University of Tennessee, Knoxville in May 2017. He received his MS and BS in Construction Engineering and Management in 2012 and 2008, respectively.",
    twitter: "",
    linkedin: "",
    email: "meid@aast.edu",
  },
  {
    src: "img/cards/basyoni.png",
    alt: "Basyoni",
    name: "Hesham Ahmed Basyoni",
    title: "Professor of Construction Management",
    text: "Professor of Construction Management (AASTMT), PhD (U. Loughborough, UK), MIBA (ESLSCA, France), ME (U. Florida, USA), BSc (U. Alexandria, Egypt), and Project Management Professional - PMP (PMI, USA). Dean of College of Continuing Education, Arab Academy for Science, Technology & Maritime Transport (under development). Has a varied practical and academic experience for over 22 years. Published over 30 research papers in various construction management leading journals and conferences.",
    twitter: "",
    linkedin: "",
    email: "hbassioni@aast.edu",
  },
];
const Home = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Container>
        <ScrollToTop />
        <ContentBlock
          type="right"
          title={IntroContent.title}
          content={IntroContent.text}
          button={IntroContent.button}
          icon="welcome.gif"
          id="intro"
        />
        <MiddleBlock
          title={MiddleBlockContent.title}
          content={MiddleBlockContent.text}
          button={MiddleBlockContent.button}
          id="overview"
        />
        <ContentBlock
          type="right"
          title={ProjectContent.title}
          content={ProjectContent.text}
          icon="moneyBag.gif"
          id="project"
          button={ProjectContent.button}
        />
        <MiddleBlock title="Theory" id="theory" />
        <Video
          src="/videos/ipd_101.mp4"
          width="100%"
          height="500"
          controls={true}
          autoPlay={false}
          loop={false}
          title="IPD 101"
          id="ipd101"
          fade="left"
          poster="/img/poster/ipd_101.png"
        />
        <Video
          src="/videos/distributing.mp4"
          width="100%"
          height="500"
          controls={true}
          autoPlay={false}
          loop={false}
          title="Division of Cost Deviations Model"
          id="distributing"
          fade="right"
          poster="/img/poster/distributing.png"
        />
        <MiddleBlock title="Application" id="application" />
        <H5PContent />
        <ContentBlock
          type="right"
          title={SurveyContent.title}
          content={SurveyContent.text}
          icon="survey.gif"
          id="survey"
          button={SurveyContent.button}
        />
        <CardContainer title="Meet the Team" id="team">
          {userProfiles.map((profile, index) => (
            <UserProfileCard key={index} {...profile} />
          ))}
        </CardContainer>
      </Container>
    </Suspense>
  );
};

export default Home;
