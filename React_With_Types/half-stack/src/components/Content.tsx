interface ContentProps {
    parts: { name: string; exerciseCount: number }[];
}

const Content = (props:ContentProps) => { 

  return (
    <>{props.parts.map((part, index) => (
      <p key={index}>
        {part.name} {part.exerciseCount}
      </p>
    ))}</>
  );
};
export default Content;    