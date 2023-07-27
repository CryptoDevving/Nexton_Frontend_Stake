import styled from "styled-components";
import Step from "../common/Step";
import Title from "../common/Title";
import LeverageInput from "./LeverageInput";
import useTonConnect from "../../../hooks/useTonConnect";

interface Step1Props {
  input: string;
  setInput: (input: string) => void;
}

const Step1 = (props: Step1Props) => {
  const { input, setInput } = props;
  const { balance } = useTonConnect();

  return (
    <Step1Wrapper>
      <Step title="Step 1" />
      <Title title="Put stake amount" />
      <LeverageInput input={input} setInput={setInput} />
      <BalanceWrapper>Balance : {balance.toFixed(3)}</BalanceWrapper>
    </Step1Wrapper>
  );
};

export default Step1;

const Step1Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const BalanceWrapper = styled.div`
  width: 85%;
  margin-top: 1.6rem;

  color: #3e4064;
  ${({ theme }) => theme.fonts.Telegram_Medium_2};

  text-align: left;
`;