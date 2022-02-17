import React from "react";
import { getbooks } from "../../api";
import { UseFetch } from "../../hooks/useFetch";
import { Suspense } from "../../components/Suspense";
import { Link } from "react-router-dom";

function books() {
  const { data, loading, error } = UseFetch(getbooks);

  return (
    <Suspense noData={!data && !loading} error={error} loading={loading}>
      <h2>books</h2>
      <div>
        {data?.map((book) => (
          <div key={book._id}>
            <p>{book.title}</p>
            <Link to={`/books/${book._id}`}>show more</Link>
          </div>
        ))}
      </div>
    </Suspense>
  );
}

export default books;
