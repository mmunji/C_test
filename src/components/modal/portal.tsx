import ReactDOM from "react-dom";

interface Props {
  children: React.ReactNode;
  selector: string;
}

const Portal = ({ children, selector }: Props) => {
  const element =
    typeof window !== "undefined" && document.getElementById(selector);
  return element && children ? ReactDOM.createPortal(children, element) : null;
};

export default Portal;
