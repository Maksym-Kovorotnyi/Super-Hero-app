import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getHeroList } from "../../redux/heroOperations";
import { totalItems } from "../../redux/heroSelectors";
import css from "./Pagination.module.css";

function Pagination() {
  const dispatch = useDispatch();
  const total = useSelector(totalItems);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    dispatch(getHeroList({ page: currentPage, limit: 5 }));
  }, [currentPage, dispatch]);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <>
      {total > 5 ? (
        <div className={css.mainContainer}>
          <div className={css.pagContainer}>
            {Array.from({ length: total / 5 + 1 }, (_, index) => index + 1).map(
              (page) => (
                <button
                  className={css.pagBtn}
                  key={page}
                  onClick={() => handlePageChange(page)}
                  disabled={page === currentPage}
                >
                  {page}
                </button>
              )
            )}
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
}

export default Pagination;
