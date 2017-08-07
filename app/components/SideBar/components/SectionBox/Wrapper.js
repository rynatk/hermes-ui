import styled from 'styled-components';

const Wrapper = styled.div`
  width: 150px;
  height: 95px;
  background-color: ${props => props.active ? props.theme.primary : (props.formModified ? props.theme.darkGray : props.theme.lightGray)};
  border-radius: 4px;
  margin-top: 25px;
  display: flex;
  position: relative;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  &:last-child {
    margin-bottom: 25px;
  }

  .fa {
    color: ${props => props.formModified || props.active ? props.theme.white : props.theme.darkGray};
    display: flex;
    font-size: 24px;
  }
`;

export default Wrapper;
