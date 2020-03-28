import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
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
  }
`;

const Home = () => {
  return (
    <Wrapper>
      <Card to="/child/add">
        78 <br />
        Children <br />
      </Card>
      <Card to="/group/add">
        3 <br />
        Groups <br />
      </Card>
      <Card to="/child/add">
        5 <br />
        Teachers <br />
      </Card>
      <Card to="/activity/add">
        5 <br />
        Activities <br />
      </Card>

      <ScheduleCard>
        <div className="row header">
          <h2>Todays schedule</h2>
          <ButtonLink to="/schedule-call">Schedule call</ButtonLink>
        </div>
        <div className="row">
          <div>8:30</div>
          <div>Stellar</div>
          <div>Drawing session</div>
          <ButtonLink to="/call">Join call</ButtonLink>
        </div>
        <div className="row">
          <div>8:30</div>
          <div>Stellar</div>
          <div>Drawing session</div>
          <ButtonLink to="/call">Join call</ButtonLink>
        </div>
        <div className="row">
          <div>8:30</div>
          <div>Stellar</div>
          <div>Drawing session</div>
          <ButtonLink to="/call">Join call</ButtonLink>
        </div>
      </ScheduleCard>
    </Wrapper>
  );
};

export default Home;
