import React from "react";
import styled from "styled-components";
import { skills } from "../../data/constants";
import { Container } from "@mui/material";
import { Description, Title } from "@mui/icons-material";

const Skills = () => {
  return (
    <Container id="skills">
      <Wrapper>
        <Title>Skills</Title>
        <Description>
          Here are some of my skills on which I have been working on the last
          twoo years.
        </Description>
        <SkillsContainer>
          {skills.map((skill) => (
            <Skill>
              <SkillTitle>{skill.title}</SkillTitle>
              <SkillList>
                {skill.skills.map((skill) => (
                  <SkillItem>
                    <SkillImage src={skill.image} />
                    {skill.name}
                  </SkillItem>
                ))}
              </SkillList>
            </Skill>
          ))}
        </SkillsContainer>
      </Wrapper>
    </Container>
  );
};

export default Skills;
