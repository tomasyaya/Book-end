import React from "react";
import { UseFetch } from "../../hooks/useFetch";
import { useParams } from "react-router-dom";
import { getbookById } from "../../api";
import { Suspense } from "../../components/Suspense";
import { deletebook } from "../../api"

function Book() {
  const { bookId } = useParams();
  const { data, error, loading } = UseFetch(
    () => getbookById(bookId),
    [bookId]
  );

  return (
    <Suspense error={error} loading={loading} noData={!data && !loading}>
      <h2>book</h2>
      <p>{data?.title}</p>
      <p>{data?.description}</p>
      {data?.imageUrl && <img src={data?.imageUrl} alt="cover"/>}
      <button onClick={deletebook(bookId)}>Delete</button>
    </Suspense>
  );
}

export default Book;
