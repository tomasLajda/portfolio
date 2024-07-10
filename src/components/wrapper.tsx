interface WrapperProps {
  bgColor?: string;
  textColor?: string;
  children?: React.ReactNode;
}

const Wrapper = (props: WrapperProps) => {
  return (
    <div
      className={`flex items-center flex-col ${props.bgColor} ${props.textColor}`}
    >
      <div className='w-8/12 my-12'>{props.children}</div>
    </div>
  );
};

export default Wrapper;
