interface TotalProps {
    total:number
}
const Total = (props:TotalProps) => {
  return <>Number of exercises {props.total}</>;

};

export default Total;