/** @jsx jsx */
import { useState } from 'react';
import { Link } from '@reach/router';
import styled from '@emotion/styled';
import { css, jsx } from '@emotion/core';
import Avatar from '../Avatar/Avatar';
import Button from '../Button/Button';
import DetailItem from '../DetailItem/DetailItem';
import FetchDetailItem from '../FetchDetailItem/FetchDetailItem';

const Planet = ({ info }) => {
  const [visibility, setVisibility] = useState(false);
  return (
    <Container data-testid="planetContainer">
      <Heading>
        <Title>
          <StyledAvatar size={30} terrain={info.terrain} />
          {info.name}
        </Title>
        <Button
          data-testid="detailsButton"
          onClick={() => setVisibility(!visibility)}
        >
          Details
        </Button>
      </Heading>
      <BasicInfoContainer>
        <Population data-testid="population" label="Population">
          {info.population}
        </Population>
        <Climate data-testid="climate" label="Climate">
          {info.climate}
        </Climate>
      </BasicInfoContainer>
      {visibility && (
        <Details data-testid="details">
          <DetailItem data-testid="terrain" label="Terrain">
            {info.terrain}
          </DetailItem>
          <DetailItem label="Diameter">{info.diameter}</DetailItem>
          <DetailItem label="Gravity">{info.gravity}</DetailItem>
          <DetailItem label="Rotation Period">
            {info.rotation_period}
          </DetailItem>
          <DetailItem label="Orbital Period">{info.orbital_period}</DetailItem>
          <DetailItem label="Surface Water">{info.surface_water}</DetailItem>
          <FetchDetailItem
            label="Residents"
            urls={info.residents}
            scope="name"
          />
          <FetchDetailItem label="Films" urls={info.films} scope="title" />
          <DetailItem label="url">
            <Link to={info.url.substr(20)}>{info.url.substr(20)}</Link>
          </DetailItem>
        </Details>
      )}
    </Container>
  );
};

const small = '450px';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: rgba(255, 255, 255, 1);
  max-width: 400px;
  margin: 0 auto 1.5rem;
  padding: 1rem;
  border-radius: 5px;
`;

const Heading = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  margin: 0 auto 1rem;
  width: 100%;
  padding-bottom: 1rem;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  @media (min-width: ${small}) {
    flex-direction: row;
  }

  button {
    display: inline-block;
  }
`;

const Title = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 1.3rem;
  margin-bottom: 1rem;
  @media (min-width: ${small}) {
    flex-direction: row;
    margin-bottom: 0;
  }
`;

const BasicInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  width: 100%;
  justify-content: space-between;
  @media (min-width: ${small}) {
    flex-direction: row;
  }
`;

const infoBase = css`
  font-size: 1rem;
  padding: 1rem;
  background: rgba(0, 0, 0, 0.05);
  margin-bottom: 1rem;
  border: none;

  @media (min-width: ${small}) {
    width: 50%;
  }
`;

const Population = styled(DetailItem)`
  ${infoBase}
  @media (min-width: ${small}) {
    display: flex;
    flex-direction: column;
    margin: 0 1rem 0 0;
  }
`;

const Climate = styled(DetailItem)`
  ${infoBase}
  padding-bottom: 1rem !important;
  @media (min-width: ${small}) {
    display: flex;
    flex-direction: column;
    margin-bottom: 0 !important;
  }
`;

const StyledAvatar = styled(Avatar)`
  width: 100px;
  height: 100px;
  margin-bottom: 0.5rem;
  @media (min-width: ${small}) {
    width: 30px;
    height: 30px;
    display: inline-block;
    margin: 0 0.5rem 0 0;
  }
`;

const Details = styled.div`
  margin-top: 1rem;
  padding: 1rem;
  background: rgba(0, 0, 0, 0.05);
  text-align: left;
`;

export default Planet;
