import { useRouter } from "next/router";

const Results = () => {
  const router = useRouter();
  const {
    query: { name },
  } = router;

  const props = {
    name,
  };
  return <div>want to see {props.name} here</div>;
};

export default Results;
