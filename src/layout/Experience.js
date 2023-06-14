import React, {useState} from "react";
import "../styles/experience.css";
import ExperiencePart from "../components/ExperiencePart";
import {InView} from "react-intersection-observer";
import {Fade} from "react-reveal";

const data = [
  {
    date: 'Dec 2022 - May 2023',
    position: 'Senior Frontend and Smart Contract Developer',
    company: 'Polarfi Gaming Inc. - Remote',
    desc: [
      "Developed the $Frost token, APR NFT and Reward generated NFT, and NFT Migration contract on BSC chain.",
      "Built the NFT Migration landing pages and Staking pages with React and Redux-saga.",
      "Used css framework – SCSS.",
      "Implemented the web3 integration by using web3.js, ethers.js, and Alchemy API",
      "Used the Alchemy RPC url provider"
    ]
  },
  {
    date: 'Dec 2021 - Dec 2022',
    position: 'Senior Web3 Frontend Developer',
    company: 'Prysm - Remote',
    desc: [
      "Brought in shipping confidence for the app and improved our deployment pipeline by implementing a testing harness in Jest and Enzyme covering over 75% of client code, configuring linting with ESLint and formatting with Prettier for overall code quality.",
      "Worked on Web3 integration using ethers.js and web3.js.",
      "Scrapped the token info (token nomics id, market capital price, etc) with coingeko, tryroll, and Moralis API by using token event scheduler.",
      "Built the wallet login system."
    ]
  },
  {
    date: 'Jun 2021 – Dec 2021',
    position: 'Senior Smart Contract & Node Developer ',
    company: 'Cryptonite Group Inc. - Remote',
    desc: [
      "Guided and clarified the direction of development according the client’s request and requirement.",
      "Developed the Defi Token (MSK) and NFT (Badbears, Badcubs, Serum, Beefrends) with Solidity on Ethereum L1 chain.",
      "Supported the gas fee optimization.",
      "Developed the Reward contract and smart contract event hooking function for the Staking system.",
      "Developed the NFT random generator.",
    ]
  },
  {
    date: 'Mar 2020 – May 2021',
    position: 'Senior Frontend and Smart Contract Developer',
    company: 'Yieldly - Remote',
    desc: [
      "Developed the NFT marketplace smart contract with Solidity on Polygon chain.",
      "Assessed and reviewed all pull requests created by other teammates to ensure the quality and accuracy of the code.",
      "Assisted in resolving 85% of client technical issues through debugging and research.",
      "Take part in developing E-commerce platforms using microservices.",
      "Collaborated with cross-functional teams to define and develop full-stack solutions to meet business requirements for a range of business units, including retail operations, supply chain, and digital marketing.",
      "Used Azure cloud services to deliver high-quality, scalable solutions that improve customer experience and drive business value."

    ]
  },
  {
    date: 'Jan 2019 – Feb 2020',
    position: 'Senior Frontend Developer',
    company: 'Capgemini Singapore Pte. Ltd. – Marina Boulevard, Singapore - Hybrid',
    desc: [
      "Collaborated and managed team members in web app development in the E-commerce and healthcare fields.",
      "Reduced development time by 75% using Agile methodologies in Jira software for CI/CD pipelines in various healthcare projects.",
      "Converted given wireframes into Angular components and designed mobile-friendly User interfaces to provide better user experiences across multiple devices.",
      "Taught 2 junior front-end developers and utilized their technical skills to achieve the organization's objectives."
    ]
  },
  {
    date: 'Aug 2016 – Feb 2019 ',
    position: 'Frontend Developer ',
    company: 'SAP Asia Pte Ltd. – Mapletree Business city, Singapore - OnSite',
    desc: [
      "Expertise in HTML, CSS, and SPA frameworks.",
      "Participated in cross-functional projects while working in lean development environments.",
      "Familiar with using the Styled Component, Tailwind CSS, and SASS/SCSS.",
      "Developed end-end testing by using Cypress, and Cucumber.",
      "Design the graphQL queries and mutations by using Apollo GraphQL(client)"
    ]
  }
];

function Experience() {
  const [show, setShow] = useState(false);

  return (
    <InView onChange={inView => setShow(inView)}>
      <div className={'experience-section'} id={'experience'}>
        <h1>
          {
            show && (
              <Fade right cascade>
                EXPERIENCE
              </Fade>
            )
          }
        </h1>

        {
          data.map((exp, index) =>
            <ExperiencePart
              key={index}
              date={exp.date}
              position={exp.position}
              company={exp.company}
              desc={exp.desc}
            />
          )
        }
      </div>
    </InView>
  );
}

export default Experience;
