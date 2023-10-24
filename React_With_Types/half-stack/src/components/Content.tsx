import Part from './Part';

interface ContentProps {
    parts: { name: string;
      exerciseCount: number;
      description?: string;
      groupProjectCount?: number;
      backgroundMaterial?: string;
      requirements?: string[];
      kind: string;}[];
}

const Content = (props:ContentProps) => { 

  return (
    <>{props.parts.map((part, index) => (
      < div key={index}>
        
        <Part part={part} />
      </div>
    ))}</>
  );
};
export default Content;    
