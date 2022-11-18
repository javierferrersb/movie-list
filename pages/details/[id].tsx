import { useRouter } from "next/router";

function DetailsPage() {
  const router = useRouter();
  const { id } = router.query;

  return (
    <div>
      <h1>Details Page</h1>
      <p>Id: {id}</p>
    </div>
  );
}

export default DetailsPage;
