"use client";
import { Box, Pagination } from "@mui/material";
import { motion } from "framer-motion";

type BlogsPaginationProps = {
  count: number;
  page: number;
  onChange: (event: React.ChangeEvent<unknown>, value: number) => void;
};

export default function BlogsPagination({  count, page, onChange, }: BlogsPaginationProps) {
      return (
        <Box 
          display="flex" 
          justifyContent="center" 
          mt={6}
          component={motion.div}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Pagination
            count={count}
            page={page}
            onChange={onChange}
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