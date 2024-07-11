interface WrapperProps {
  bgColor?: string;
  textColor?: string;
  className?: string;
  children?: React.ReactNode;
}

const Wrapper = (props: WrapperProps) => {
  return (
    <div
      className={`flex items-center flex-col ${props.bgColor} ${props.textColor}`}
    >
      <div className={`flex flex-col w-8/12 my-24 ${props?.className}`}>
        {props.children}
      </div>
    </div>
  );
};

export default Wrapper;
