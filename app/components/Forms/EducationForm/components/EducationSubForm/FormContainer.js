import styled from 'styled-components';

const FormContainer = styled.div`
  padding: 30px;
  border: 2px solid ${props => props.theme.lightGray};
  border-bottom: none;
  border-radius: 2px;
  position: relative;

  &:last-child {
    border-bottom: 2px solid ${props => props.theme.lightGray};
    margin-bottom: 15px;
  }
`;

export default FormContainer;
