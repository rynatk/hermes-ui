import styled from 'styled-components';

const Wrapper = styled.div`
  margin: 25px;
  padding-top: 20px;
  display: flex;
  flex: 0 0 900px;
  flex-direction: column;

  label, .button {
  }

  .responsibilities-textarea {
    margin-left: 0.5em;
    width: 100%;
  }

  .ui {
    label, button {
      font-family: 'Raleway', sans-serif;
    }

    button {
      &.primary {
        background-color: ${props => props.theme.primary};

        &:hover {
          background-color: ${props => props.theme.primaryHov};
        }
      }
    }
  }
`;

export default Wrapper;
