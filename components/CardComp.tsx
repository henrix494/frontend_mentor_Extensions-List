import { Btn, Card } from "../styles/index";
import Toggler from "./Toggler";
interface cardInfo {
  logo: string;
  name: string;
  description: string;
  isActive: boolean;
  updateActiveState: (nameOf: string, isActive: boolean) => void;
  deleteitemhandler: (name: string) => void;
}
export default function CardComp({
  description,
  isActive,
  logo,
  name,
  updateActiveState,
  deleteitemhandler,
}: cardInfo) {
  return (
    <Card>
      <div style={{ height: "100%", padding: "10px" }}>
        <div className="test1">
          <div style={{ width: "20%" }}>
            <img src={logo} />
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            <p style={{ marginTop: 7, fontWeight: "bolder" }}>{name}</p>
            <p style={{ fontWeight: "lighter" }}>{description}</p>
          </div>
        </div>
        <div className="test2">
          <Btn onClick={() => deleteitemhandler(name)}>Remove</Btn>
          <Toggler
            updateActiveState={updateActiveState}
            nameOf={name}
            toggler={isActive}
          />
        </div>
      </div>
    </Card>
  );
}
