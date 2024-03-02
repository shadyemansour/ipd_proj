import React, { lazy, Suspense } from "react";
import IntroContent from "../../content/IntroContent.json";
import MiddleBlockContent from "../../content/MiddleBlockContent.json";
import AboutContent from "../../content/AboutContent.json";
import MissionContent from "../../content/MissionContent.json";
import ProductContent from "../../content/ProductContent.json";
import ContactContent from "../../content/ContactContent.json";
import CardContainer from "../../common/CardContainer";

const Contact = lazy(() => import("../../components/ContactForm"));
const MiddleBlock = lazy(() => import("../../components/MiddleBlock"));
const Container = lazy(() => import("../../common/Container"));
const ScrollToTop = lazy(() => import("../../common/ScrollToTop"));
const ContentBlock = lazy(() => import("../../components/ContentBlock"));
const Video = lazy(() => import("../../components/VideoComponent"));
const UserProfileCard = lazy(() => import("../../components/AboutCards"));

const userProfiles = [
  {
    src: "https://www.w3schools.com/w3images/team2.jpg",
    alt: "Jane",
    name: "Yomna Emad Mansour",
    title: "Postgrad Student",
    text: "Yomna is a  Post Graduate Student at the Department of Construction and Building Engineering of the Arab Academy for Science, Technology, and Maritime Transport in Cairo, Egypt and a Senior Tendering Engineer at ElSewedy Electric for Infrastructure Works. Yomna is pursuing a career in the construction industry, while working on her Master’s Degree. Yomna earned her BSc in Construction Engineering and Management from the German University in Cairo in 2018.",
  },
  {
    src: "img/cards/eid.jpg",
    alt: "Eid",
    name: "Mohamed Saeid Eid",
    title: "Associate Professor of Construction Management",
    text: "Eid is an Associate Professor at the Department of Construction and Building Engineering of the Arab Academy for Science, Technology, and Maritime Transport in Cairo, Egypt. Eid earned his PhD in Civil and Environmental Engineering from The University of Tennessee, Knoxville in May 2017. He received his MS and BS in Construction Engineering and Management in 2012 and 2008, respectively.",
  },
  {
    src: "img/cards/basyoni.jpg",
    alt: "Basyoni",
    name: "Hesham Ahmed Basyoni",
    title: "Professor of Construction Management",
    text: "Professor of Construction Management (AASTMT), PhD (U. Loughborough, UK), MIBA (ESLSCA, France), ME (U. Florida, USA), BSc (U. Alexandria, Egypt), and Project Management Professional - PMP (PMI, USA). Dean of College of Continuing Education, Arab Academy for Science, Technology & Maritime Transport (under development) Has a varied practical and academic experience for over 22 years. Consultancy and practical experience has been in the areas of: Project and program management contract administration and claims management FIDIC & Bespoke Contracts project scheduling and control: cost estimating and control feasibility studies, business cases and business plans and project risk management. Organizational business management and restructuring business process re-engineering quality control and assurance business excellence business performance management (Balanced Scorecard) strategic management risk management and Disaster Risk Management (DRM). Published over 30 research papers in various construction management leading journals and conferences. Refereed papers to leading construction management journals and conferences.",
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
          content={`Here you can simply <b>Explore</b> the website for different research papers and meet their authors, Preview videos explaining each research’s proposed model, interactively test it on adopted examples, and finally leave your fingerprint by Participating in its corresponding survey.`}
          button={MiddleBlockContent.button}
          id="overview"
        />
        <ContentBlock
          type="right"
          title={MissionContent.title}
          content={MissionContent.text}
          icon="product-launch.svg"
          id="project"
        />
        {/* <ContentBlock
          type="left"
          title={ProductContent.title}
          content={ProductContent.text}
          icon="waving.svg"
          id="product"
        /> */}
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
        />

        <MiddleBlock title="Application" id="application" />
        <Video
          src="/videos/distributing.mp4"
          width="100%"
          height="500"
          controls={true}
          autoPlay={false}
          loop={false}
          title="Interactive Example (BSESC Project)"
          id="interactive"
          fade="left"
        />
        {/* <ContentBlock
          type="left"
          title={AboutContent.title}
          content={AboutContent.text}
          section={AboutContent.section}
          icon="graphs.svg"
          id="about"
        /> */}
        <ContentBlock
          type="right"
          title={ProductContent.title}
          content={ProductContent.text}
          icon="survey.gif"
          id="survey"
          button={ProductContent.button}
        />
        {/* <Contact
          title={ContactContent.title}
          content={ContactContent.text}
          id="contact"
        /> */}
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
