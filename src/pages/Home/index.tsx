import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import ButtonLink from "../../components/ButtonLink";

const Wrapper = styled.div`
  margin: 32px;
  height: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  grid-gap: 16px;
`;

const Card = styled(Link)`
  border-radius: 32px;
  width: 100%;
  text-align: center;
  height: 100%;
  background: #efefef;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  font-size: 21px;
  color: black;
  flex-direction: column;
`;

const ScheduleCard = styled.div`
  border-radius: 32px;
  width: 100%;
  text-align: center;
  height: 100%;
  background: #efefef;
  padding: 32px;
  display: flex;
  flex-direction: column;
  color: black;
  grid-column: 2 / 4;

  .row {
    display: flex;
    justify-content: space-between;
    margin-bottom: 8px;
    align-items: center;
  }
  .header {
    margin-bottom: 16px;
  }
`;

const Title = styled.div`
  font-weight: 900;
  font-style: normal;
  font-family: Avenir;
  font-size: 32px;
  line-height: 44px;
  margin-bottom: 20px;
`;

const Text = styled.div`
  font-family: "Avenir";
  font-size: 20px;
`;

const Home = () => {
  return (
    <Wrapper>
      <Card to="/child/list">
        <Title>
          78 <br />
          Children
          <br />
        </Title>
        <img src="/icons/kids.svg" alt="Children" />
      </Card>
      <Card to="/group/add">
        <Title>
          3 <br />
          Groups <br />
        </Title>
        <img src="/icons/groups.svg" alt="Groups" />
      </Card>
      <Card to="/teacher/list">
        <Title>
          5 <br />
          Teachers <br />
        </Title>
        <img src="/icons/teach.svg" alt="Teacher" />
      </Card>
      <Card to="/activity/add">
        <Title>
          5 <br />
          Activities <br />
        </Title>
        <img src="/icons/man.svg" alt="Pac-man" />
      </Card>

      <ScheduleCard>
        <div className="row header">
          <h2>Todays schedule</h2>
          <ButtonLink to="/schedule-call">Schedule call</ButtonLink>
        </div>
        <div className="row">
          <Text>8:30</Text>
          <Text>Stellar</Text>
          <Text>Drawing session</Text>
          <ButtonLink to="/call">Call</ButtonLink>
        </div>
        <div className="row">
          <Text>8:30</Text>
          <Text>Stellar</Text>
          <Text>Drawing session</Text>
          <ButtonLink to="/call">Call</ButtonLink>
        </div>
        <div className="row">
          <Text>8:30</Text>
          <Text>Stellar</Text>
          <Text>Drawing session</Text>
          <ButtonLink to="/call">Call</ButtonLink>
        </div>
      </ScheduleCard>
    </Wrapper>
  );
};

export default Home;
