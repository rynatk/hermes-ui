import styled from 'styled-components';

const Badge = styled.div`
  width: 30px;
  height: 30px;
  background-color: ${props => props.valid ? '#57AAA9' : '#EC6244'};
  border: 2px solid #FFFFFF;
  -moz-border-radius: 15px;
  -webkit-border-radius: 15px;
  border-radius: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: -10px;
  right: -10px;
  box-shadow: rgba(0, 0, 0, 0.07) 3px 6px 6px 0px;

  .fa {
    font-size: 16px;
  }
`;

export default Badge;
