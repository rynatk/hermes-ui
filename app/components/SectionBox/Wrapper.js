import styled from 'styled-components';

const Wrapper = styled.div`
  width: 150px;
  height: 95px;
  background-color: ${props => props.active ? '#57AAA9' : '#B4B1AE'};
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
    color: #FFFFFF;
    display: flex;
    font-size: 24px;
  }
`;

export default Wrapper;
