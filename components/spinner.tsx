import SyncLoader from "react-spinners/SyncLoader";

interface SpinnerProps {
  color?: string;
  size: number;
}

const Spinner = ({ color = "rgb(2, 132, 199)", size }: SpinnerProps) => {
  return (
    <div className="flex items-center justify-center h-screen ">
      <SyncLoader size={size} color={color} />
    </div>
  );
};

export default Spinner;
