type Props = {
  show: boolean;
};

export default function Loader({ show }: Props) {
  return show ? <div className="loader"></div> : null;
}
