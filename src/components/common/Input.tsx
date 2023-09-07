import styled from "styled-components";

interface InputProps {
  input: string;
  setInput: (input: string) => void;
}

const Input = (props: InputProps) => {
  const { input, setInput } = props;

  return (
    <InputStyle
      type="number"
      placeholder="min 0.5"
      value={input}
      onChange={(e) => setInput(e.target.value)}
    />
  );
};

export default Input;

const InputStyle = styled.input`
  width: 50%;

  border: none;

  background-color: transparent;
  ${({ theme }) => theme.fonts.Telegram_Title_3_1};
  color: #45464f;

  &::placeholder {
    color: #e5e5ea;
  }

  outline: none;
`;
