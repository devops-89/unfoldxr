"use client"

import React from "react";
import {
  Box,
  Grid,
  Typography,
  Button,
  Container,
  Card,
  CardContent,
  CardMedia,
  Pagination,
  PaginationItem,
  Stack,
} from "@mui/material";
import { COLORS } from "@/utils/enum";
import Link from "next/link";
import { blogData } from "@/utils/Website-Data";



export default function BlogCard() {
  return (
    <Box >

      <Box sx={{ pb: 10 ,pt: 10 ,px: { xs: 1, md: 15 } }}>
        <Container maxWidth="xl">
      
            <Grid container spacing={4} >
              {blogData.map((blog, index) => (
                <Grid size={{ xs: 12, sm: 6, md: 4, }} key={index} >
                   <Link
        href={`/blogs-insights-card-detail/${blog.id}`}
        style={{ textDecoration: "none", color: "inherit" }}
      >
                  <Card
                    sx={{
               borderTopLeftRadius: 2,
                borderTopRightRadius: 2,
                    boxShadow: "0 2px 10px rgba(0,0,0,0.05)",
                    transition: "0.3s",
                    
                    "&:hover": {
                    
                      transform: "translateY(-4px)",
                    },
                  }}
                >
                  <CardMedia
                    component="img"
                    height="180"
                    image={blog.img}
                    alt="blog"
                  />

                  <CardContent sx={{ p: 3 }}>
                    <Typography fontWeight={600} gutterBottom>
                      {blog.title}
                    </Typography>

                    <Typography
                      sx={{
                        color: "#6b7280",
                        fontSize: "14px",
                        lineHeight: 1.7,
                        mb: 3,
                        display: "-webkit-box",
                        WebkitLineClamp: 3,
                        WebkitBoxOrient: "vertical",
                        overflow: "hidden",
                      }}
                    >
                      {blog.desc}
                    </Typography>

                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      <Typography
                        variant="caption"
                        sx={{ color: "#9ca3af" ,textAlign:"center" }}
                      >
                        {blog.date}
                      </Typography>

                      <Button
                        size="small"
                        sx={{
                          textTransform: "none",
                          fontWeight: 600,
                          color: "#111",
                        }}
                      >
                        Read more
                      </Button>
                    </Box>
                  </CardContent>
                </Card>
                </Link>
              </Grid>
            ))}
          </Grid>
          <Stack spacing={2} alignItems="center" mt={6}>
  <Pagination
    count={3}
     size="large"
    renderItem={(item) => {
      if (item.type === "previous") {
        return null;
      }

      return (
        <PaginationItem
          {...item}
          sx={{
            
            backgroundColor: "#e2edb5",
            
            borderRadius: "50%",
            color: "black",
            "&.Mui-selected": {
              backgroundColor:COLORS.PRIMARY_GREEN,
              color: "black",
             
            },
          }}
        />
      );
    }}
  />
</Stack>
        </Container>
      </Box>

    </Box>
  );
}