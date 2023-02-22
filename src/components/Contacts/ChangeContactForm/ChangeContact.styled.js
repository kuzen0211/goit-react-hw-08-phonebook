import styled from 'styled-components';

export const ContactFrm = styled.form`
  display: flex;
  flex-direction: column;
`;

export const FormLabel = styled.label`
  display: flex;
  flex-direction: column;
  margin-bottom: 5px;
`;

export const FormInput = styled.input`
  margin-top: 5px;
`;

export const FormBtn = styled.button`
  min-width: 100px;
  margin: 0 auto;
  cursor: pointer;
  padding: 5px;
  transition: box-shadow 150ms linear;
  :hover,
  :focus {
    box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
      rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
      rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
  }
`;
