
import { CoursePart } from '../Types';/**
 * Helper function for exhaustive type checking
 */
const assertNever = (value: never): never => {
  throw new Error(
    `Unhandled discriminated union member: ${JSON.stringify(value)}`
  );
};

  interface PartProps {
    part: CoursePart;
}
const Part = (props:PartProps) => {
  const part = props.part;
  switch (part.kind) {
  case 'basic':
    return (
      <div>
        <p>
          <strong>{part.name} {part.exerciseCount} exercises</strong> 
        </p>
        <em>{part.description}</em>
      </div>
    );
  case 'group':
    return (
      <div>
        <p>
          <strong>{part.name} {part.exerciseCount} exercises</strong> 
        </p>
      project exercises {part.groupProjectCount}
      </div>
    );
  case 'background':
    return (
      <div>
        <p>
          <strong>{part.name} {part.exerciseCount} exercises</strong>
        </p>
        <p><em>{part.description}</em> </p> 
        <p>submit to {part.backgroundMaterial}</p>
      </div>);
  case 'special':
    return (
      <div><p>
        <strong>{part.name} {part.exerciseCount} exercises</strong>
      </p>
      <p><em>{part.description}</em> </p>
      <p>required skills: {part.requirements?.join(', ')}</p>
      </div>); 
  default:
    return assertNever(part);
  }
};

export default Part;    