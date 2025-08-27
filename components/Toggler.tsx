import { Toggler_BTN, Toggler_Wrapper } from "../styles/index";
export default function Toggler({
  toggler,
  updateActiveState,
  nameOf,
}: {
  toggler: boolean;
  updateActiveState: (nameOf: string, isActive: boolean) => void;
  nameOf: string;
}) {
  const handleChange = () => {
    updateActiveState(nameOf, !toggler);
  };

  return (
    <Toggler_Wrapper isActive={toggler} onClick={handleChange} key={nameOf}>
      <Toggler_BTN isActive={toggler}></Toggler_BTN>
    </Toggler_Wrapper>
  );
}
