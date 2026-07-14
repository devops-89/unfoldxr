import { Box, Pagination, PaginationItem } from "@mui/material";

type NewsPaginationProps = {
  count: number;
  page: number;
  onChange: (event: React.ChangeEvent<unknown>, value: number) => void;
};

export default function NewsPagination({  count, page, onChange, }: NewsPaginationProps) {
      return (
        <Box display="flex" justifyContent="center" mt={6}>
          <Pagination
            count={count}
            page={page}
            onChange={onChange}
            renderItem={(item) => {
              if (item.type === 'start-ellipsis' || item.type === 'end-ellipsis') {
                return null;
              }
              if (item.type === 'page') {
                let min = page - 1;
                let max = page + 1;
                if (page === 1) {
                  min = 1;
                  max = 3;
                } else if (page === count) {
                  min = count - 2;
                  max = count;
                }
                if (item.page !== null && (item.page < min || item.page > max)) {
                  return null;
                }
              }
              return <PaginationItem {...item} />;
            }}
            sx={{
             "& .MuiPagination-ul": {
      gap: "10px",
    },

    "& .MuiPaginationItem-root": {
      width: "36px",
      height: "36px",
      borderRadius: "50%",
      backgroundColor: "#f3f4e8",
      color: "#666",
      fontWeight: 500,
    },

    "& .MuiPaginationItem-root:hover": {
      backgroundColor: "#e6e8d5",
    },

    "& .Mui-selected": {
      backgroundColor: "#ccf919 !important",
      color: "#000",
      fontWeight: 700,
    },

    "& .MuiPaginationItem-ellipsis": {
      backgroundColor: "transparent",
    },
            }}
          />
        </Box>
     );
   }