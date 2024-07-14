interface WrapperProps {
  bgColor?: string;
  textColor?: string;
  className?: string;
  id?: string;
  children?: React.ReactNode;
}

const Wrapper = ({
  bgColor,
  textColor,
  className,
  children,
  id,
}: WrapperProps) => {
  return (
    <div
      id={id || ''}
      className={`flex items-center flex-col ${bgColor ? bgColor : ''} ${
        textColor ? textColor : ''
      }`}
    >
      <div
        className={`flex flex-col w-10/12 sm:w-8/12 my-24 ${
          className ? className : ''
        }`}
      >
        {children}
      </div>
    </div>
  );
};

export default Wrapper;
