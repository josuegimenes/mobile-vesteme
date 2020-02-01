import styled from 'styled-components/native';

export const Container = styled.View`
  padding: 0 15px;
  height: 46px;
  background: transparent;
  border-radius: 10px;
  border: 1px solid #c9308b;

  flex-direction: row;
  align-items: center;
`;

export const TInput = styled.TextInput.attrs({
  placeholderTextColor: 'rgba(201, 48, 139, 0.8)',
})`
  flex: 1;
  font-size: 18px;
  margin-left: 10px;
  color: #c9308b;
  font-weight: bold;
`;
