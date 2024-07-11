interface WrapperProps {
  bgColor?: string;
  textColor?: string;
  className?: string;
  children?: React.ReactNode;
}

const Wrapper = ({ bgColor, textColor, className, children }: WrapperProps) => {
  return (
    <div
      className={`flex items-center flex-col ${bgColor ? bgColor : ''} ${
        textColor ? textColor : ''
      }`}
    >
      <div
        className={`flex flex-col w-8/12 my-24 ${className ? className : ''}`}
      >
        {children}
      </div>
    </div>
  );
};

export default Wrapper;
