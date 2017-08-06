import styled from 'styled-components';

const Label = styled.div`
  color: ${props => props.formModified ? props.theme.white : props.theme.darkGray};
  margin-top: 10px;
  text-transform: capitalize;
`;

export default Label;
