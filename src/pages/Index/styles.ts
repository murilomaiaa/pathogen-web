import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  margin: 0 16px;
  display: grid;
  place-items: center;

  div#welcome {
    display: grid;
    place-items: center;
    margin: 36px 0 16px 0;

    h1 {
      font-style: normal;
      font-weight: bold;
      font-size: 48px;
      line-height: 56px;
      /* identical to box height, or 117% */
      letter-spacing: 0.05em;
    }

    h2 {
      margin-top: 8px;
      font-style: normal;
      font-weight: normal;
      font-size: 24px;
      line-height: 28px;
      letter-spacing: 0.1em;
    }
  }

  div#text {
    display: grid;
    place-items: center;
    margin: 16px 0 16px 0;
    max-width: 755px;

    p {
      width: 100%;
      font-size: 16px;
      line-height: 19px;
    }
  }

  div#btn {
    margin-top: 16px;
    max-width: 330px;
    display: flex;
    place-content: center;
    width: 100%;

    a {
      background-color: #487eb0;
      /* text-decoration: none; */
      color: #fff;
      text-transform: uppercase;
      height: 50px;
      width: 100%;

      button {
        border: 0;
      }
    }

    button {
      background-color: #487eb0;

      height: 50px;
      width: 100%;
      border: 0;

      &:hover {
        background-color: ${shade(0.2, '#487eb0')};
      }
    }
  }
`;
