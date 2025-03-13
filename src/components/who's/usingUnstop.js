import React from "react";
import {
  Box,
  Typography,
  Card,
  CardContent,
  Button,
  Grid,
} from "@mui/material";
import img1 from "../../assets/img1.png";
import img2 from "../../assets/img2.png";
import img3 from "../../assets/img3.png";

const UsingUnstop = () => {
  const cards = [
    {
      image: img1,
      title: "Students and Professionals",
      description:
        "Unlock Your Potential: Compete, Build Resume, Grow and get Hired!",
    },
    {
      image: img2,
      title: "Companies and Recruiters",
      description:
        "Discover Right Talent: Hire, Engage, and Brand Like Never Before!",
    },
    {
      image: img3,
      title: "Colleges",
      description:
        "Bridge Academia and Industry: Empower Students with Real-World Opportunities!",
    },
  ];

  return (
    <Box sx={{ textAlign: "center", p: 5, backgroundColor: "#E6F0FF" }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          gap: 4,
          flexWrap: "wrap",
          backgroundColor: "#004AAD",
          color: "white",
          py: 3,
          borderRadius: 2,
        }}
      >
        {[
          "21M+ Active Users",
          "22.3M+ Assessments",
          "130K+ Opportunities",
          "800+ Brands Trust Us",
          "42K+ Organisations",
          "78+ Countries",
        ].map((item, index) => (
          <Typography key={index} variant="h6">
            {item}
          </Typography>
        ))}
      </Box>

      <Typography variant="h4" sx={{ fontWeight: "bold", mt: 5, mb: 3 }}>
        Who's using Unstop?
      </Typography>

      <Grid container spacing={3} justifyContent="center">
        {cards.map((card, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card sx={{ p: 2, textAlign: "center", borderRadius: "12px" }}>
              <img src={card.image} alt={card.title} width="80" height="80" />
              <CardContent>
                <Typography variant="h6" fontWeight="bold">
                  {card.title}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  {card.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Button
        variant="contained"
        sx={{
          mt: 4,
          textTransform: "none",
          borderRadius: "20px",
          backgroundColor: "#004AAD",
        }}
      >
        View All
      </Button>
    </Box>
  );
};

export default UsingUnstop;
