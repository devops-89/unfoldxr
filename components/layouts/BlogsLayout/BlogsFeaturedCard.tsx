import { Box, Typography, Button } from "@mui/material";
import { StaticImageData } from "next/image";
import Image from "next/image";
import { relative } from "path";

type FeaturedCardProps = {
  title: string;
  description: string;
  image: string | StaticImageData;
  date: string;
  readTime?: string;
};

export default function FeaturedCard({
  title,
  description,
  image,
  date,
  readTime,
}: FeaturedCardProps) {
  return (
    <Box
      display="flex"
      flexDirection={{ xs: "column", md: "row" }}
      bgcolor="#f5f5f5"
      borderRadius={0}
      overflow="hidden"
      sx={{
        mb: 4,
      }}
    >
      {/* Left Content */}
      <Box
        flex={1}
        p={{ xs: 4, md: 12 }}
        display="flex"
        flexDirection="column"
        justifyContent="center"
      >
        <Typography variant="h5" fontWeight={700} mb={2}>
          {title}
        </Typography>

        <Typography variant="body2" color="text.secondary" mb={3}>
          {description}
        </Typography>

        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          mt={2}
        >
         <Box display="flex" gap={2}>
           <Typography variant="caption" color="text.secondary">
             {date}
           </Typography>
       
           {readTime && (
             <Typography variant="caption" color="text.secondary">
               {readTime}
             </Typography>
           )}
         </Box>
       
         <Button size="small">
           Read more
         </Button>
         </Box>
      </Box>

      {/* Right Image */}
      <Box
        flex={1}
        sx={{
          position: "relative",
          width: "100%",
          minHeight: { xs: 200, md: "100%" },
          objectFit: "cover",
        }}
      >
        <Image
          src={image}
          alt={title}
          fill
          style={{ objectFit: "cover" }}
        />
       </Box>
     </Box>
  );
}