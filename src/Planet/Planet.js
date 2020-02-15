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
        <Population data-testid="population">
          <span>Population: </span> {info.population}
        </Population>
        <Climate data-testid="climate">
          <span>Climate: </span> {info.climate}
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
  align-items: center;
  justify-content: space-between;
  margin: 0 auto 1rem;
  width: 100%;
  padding-bottom: 1rem;
  border-bottom: 1px solid;

  button {
    display: inline-block;
    margin-left: 1rem;
  }
`;

const Title = styled.div`
  display: flex;
  align-items: center;
  font-size: 1.3rem;
`;

const BasicInfoContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin: 0 auto;
  width: 100%;
  justify-content: space-between;
`;

const infoBase = css`
  font-size: 1rem;
  width: 50%;
  padding: 1rem;
  background: rgba(0, 0, 0, 0.05);
`;

const Population = styled.div`
  ${infoBase}
  margin-right: 1rem;
`;

const Climate = styled.div`
  ${infoBase}
`;

const StyledAvatar = styled(Avatar)`
  display: inline-block;
  margin-right: 0.5rem;
`;

const Details = styled.div`
  margin-top: 1rem;
  padding: 1rem;
  background: rgba(0, 0, 0, 0.05);
  text-align: left;
`;

// const detailItemStyles = css`
//   padding-bottom: 0.5rem;
//   margin-bottom: 0.5rem;
//   border-bottom: 1px dashed rgba(0, 0, 0, 0.25);

//   span {
//     font-weight: bold;
//   }
// `;

// function DetailItem(props) {
//   return (
//     <div css={detailItemStyles}>
//       <span>{props.label}: </span> {props.children}
//     </div>
//   );
// }

export default Planet;
