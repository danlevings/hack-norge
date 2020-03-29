import React from "react";
import styled from "styled-components";

const Container = styled.div`
  background: rgba(244, 209, 210, 1);
  padding: 32px 20px;
  height: calc(100vh - 44px);
  display: flex;
`;

const FocusFeed = styled.div`
  flex-grow: 4;
`;

const Sidebar = styled.div`
  flex-grow: 1;
`;
const GroupContainer = styled.div`
  padding: 0 16px;
`;

const Group = styled.div`
  background: rgba(255, 255, 255, 0.3);
  height: 72px;
  display: flex;
  align-items: center;
  padding: 0 16px;
  border-radius: 8px;
  justify-content: space-between;
`;
const GroupTitle = styled.div`
  font-family: Avenir;
  font-size: 24px;
`;
const GroupStats = styled.div`
  font-family: "Avenir";
  font-size: 16px;
  font-weight: 900;
  color: rgba(51, 51, 51, 1);
`;
const GroupLeft = styled.div`
  display: flex;
  align-items: center;
`;
const GroupRight = styled.div`
  display: flex;
  align-items: center;
`;

const Participants = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-auto-rows: 148px;
`;
const CameraFeedWrap = styled.div`
  padding: 16px;
  height: 100%;
`;
const CameraFeed = styled.div`
  position: relative;
  height: 100%;
  background: rgba(216, 216, 216, 1);
  border-radius: 12px;
`;

const NameTag = styled.div`
  background-color: rgba(207, 62, 94, 1);
  border-radius: 8px;

  position: absolute;
  bottom: 8px;
  left: 8px;
  color: #fff;
  font-family: Avenir;
  font-size: 12px;
  padding: 4px 8px;
`;

const GreenDot = styled.div`
  height: 11px;
  width: 11px;
  background-color: rgba(139, 195, 74, 1);
  border-radius: 11px;
`;

const VSpacer = styled.div`
  width: 12px;
`;

const CallScreen = () => {
  return (
    <Container>
      <FocusFeed>
        <CameraFeed>
          <NameTag>Mrs. Edna Krabappel</NameTag>
        </CameraFeed>
      </FocusFeed>
      <Sidebar>
        <GroupContainer>
          <Group>
            <GroupLeft>
              <GreenDot />
              <VSpacer />
              <GroupTitle>Group "Star Trek"</GroupTitle>
            </GroupLeft>
            <GroupRight>
              <GroupStats>8/8</GroupStats>
              <VSpacer />
              <img
                src="/icons/kids.svg"
                alt="Children"
                height="21"
                width="31"
              />
            </GroupRight>
          </Group>
        </GroupContainer>
        <Participants>
          <CameraFeedWrap>
            <CameraFeed>
              <NameTag>Bella</NameTag>
            </CameraFeed>
          </CameraFeedWrap>
          <CameraFeedWrap>
            <CameraFeed>
              <NameTag>Bella</NameTag>
            </CameraFeed>
          </CameraFeedWrap>
          <CameraFeedWrap>
            <CameraFeed>
              <NameTag>Bella</NameTag>
            </CameraFeed>
          </CameraFeedWrap>
          <CameraFeedWrap>
            <CameraFeed>
              <NameTag>Bella</NameTag>
            </CameraFeed>
          </CameraFeedWrap>
          <CameraFeedWrap>
            <CameraFeed>
              <NameTag>Bella</NameTag>
            </CameraFeed>
          </CameraFeedWrap>
          <CameraFeedWrap>
            <CameraFeed>
              <NameTag>Bella</NameTag>
            </CameraFeed>
          </CameraFeedWrap>
          <CameraFeedWrap>
            <CameraFeed>
              <NameTag>Bella</NameTag>
            </CameraFeed>
          </CameraFeedWrap>
          <CameraFeedWrap>
            <CameraFeed>
              <NameTag>Bella</NameTag>
            </CameraFeed>
          </CameraFeedWrap>
          <CameraFeedWrap>
            <CameraFeed>
              <NameTag>Bella</NameTag>
            </CameraFeed>
          </CameraFeedWrap>
        </Participants>
      </Sidebar>
    </Container>
  );
};

export default CallScreen;
