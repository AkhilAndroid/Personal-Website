import React, { useEffect, useRef } from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import styled from 'styled-components';
import { srConfig } from '@config';
import sr from '@utils/sr';
import { usePrefersReducedMotion } from '@hooks';

const StyledAboutSection = styled.section`
  max-width: 900px;

  .inner {
    display: grid;
    grid-template-columns: 3fr 2fr;
    grid-gap: 50px;

    @media (max-width: 768px) {
      display: block;
    }
  }
`;
const StyledText = styled.div`
  ul.skills-list {
    display: grid;
    grid-template-columns: repeat(2, minmax(140px, 200px));
    grid-gap: 0 10px;
    padding: 0;
    margin: 20px 0 0 0;
    overflow: hidden;
    list-style: none;

    li {
      position: relative;
      margin-bottom: 10px;
      padding-left: 20px;
      font-family: var(--font-mono);
      font-size: var(--fz-xs);

      &:before {
        content: '▹';
        position: absolute;
        left: 0;
        color: var(--green);
        font-size: var(--fz-sm);
        line-height: 12px;
      }
    }
  }
`;
const StyledPic = styled.div`
  position: relative;
  max-width: 300px;

  @media (max-width: 768px) {
    margin: 50px auto 0;
    width: 70%;
  }

  .wrapper {
    ${({ theme }) => theme.mixins.boxShadow};
    display: block;
    position: relative;
    width: 100%;
    border-radius: var(--border-radius);
    background-color: var(--green);

    &:hover,
    &:focus {
      outline: 0;
      transform: translate(-4px, -4px);

      &:after {
        transform: translate(8px, 8px);
      }

      .img {
        filter: none;
        mix-blend-mode: normal;
      }
    }

    .img {
      position: relative;
      border-radius: var(--border-radius);
      mix-blend-mode: multiply;
      filter: grayscale(100%) contrast(1);
      transition: var(--transition);
    }

    &:before,
    &:after {
      content: '';
      display: block;
      position: absolute;
      width: 100%;
      height: 100%;
      border-radius: var(--border-radius);
      transition: var(--transition);
    }

    &:before {
      top: 0;
      left: 0;
      background-color: var(--navy);
      mix-blend-mode: screen;
    }

    &:after {
      border: 2px solid var(--green);
      top: 14px;
      left: 14px;
      z-index: -1;
    }
  }
`;

const About = () => {
  const revealContainer = useRef(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

    sr.reveal(revealContainer.current, srConfig());
  }, []);

  const skills = ['C', 'C++', 'Java', 'Python', 'Node.js', 'React'];

  return (
    <StyledAboutSection id="about" ref={revealContainer}>
      <h2 className="numbered-heading">About Me</h2>

      <div className="inner">
        <StyledText>
          <div>
            <p>
            Hello! I'm Akhil, a computer science student with a passion for coding with a particular focus of the fascinating world of machine learning. 
            I am currently enrolled at SRM Institute of Science and Technology, 
            pursuing B.Tech in Computer Science and Engineering with Specialization in Artificial Intelligence and Machine Learning.
  </p><p>
  I thrive on undertaking the most complex tasks and executing successfully, particularly in the domains of deep learning and computer vision. 
  Testimant to this, is my recent achievement in securing the first place in the Smart Campus Hackathon. I was a team leader of a team that has won the hackathon challange.
  My team was selected as one of the top 30 winning teams out of the 400 teams that participanted in this Smart India Hackathon. 
  </p> <p>
  In addition to my successful participation in various hackathons, I became the coordinator of a hackathon. I achieved this through 
  organizing multiple events that bring together enthusiastic minds to tackle complex problems. 
  This dual experience, both as a participant and a coordinator, has allowed me to contribute significantly to the tech community. 
  </p>
  {/* <p>
My work promises substantial enhancements to real-world traffic sign recognition through employing advanced techniques and extensive experimentation. 
In my journey in technology, I have made significant contributions to the field of small object detection. A recent research paper reflects my exploration 
of innovative methodologies tailored to traffic signs as a dataset. This endeavor is poised to not only advance the understanding of small object detection 
but also to significantly improve safety and performance in practical applications of traffic sign recognition
</p>
<p>My tech endeavors span diverse projects, delving into the dynamic realm of parking detection using computer vision and 
exploring the intricacies of comparative regression models. Each project serves as a stepping stone in my continuous exploration 
of the vast possibilities within the tech landscape.
</p> */}
<p>
Eager to connect with like-minded enthusiasts, I'm open to discussions, collaborations, or simply sharing tech adventures. Feel free to reach out, and let's explore the exciting world of technology together!
            </p>

            <p>I have experience in this following technologies:</p>
          </div>

          <ul className="skills-list">
            {skills && skills.map((skill, i) => <li key={i}>{skill}</li>)}
          </ul>
        </StyledText>

        <StyledPic>
          <div className="wrapper">
            <StaticImage
              className="img"
              src="../../images/me.jpeg"
              width={500}
              quality={95}
              formats={['AUTO', 'WEBP', 'AVIF']}
              alt="Headshot"
            />
          </div>
        </StyledPic>
      </div>
    </StyledAboutSection>
  );
};

export default About;
