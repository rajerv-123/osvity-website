import React from "react";
import {
  Box,
  Typography,
  Card,
  CardContent,
  Button,
  InputBase,
} from "@mui/material";
import Grid from "@mui/material/Grid2";
import img1 from "../../assets/img1.png";
import img2 from "../../assets/img2.png";
import img3 from "../../assets/img3.png";
import { Star } from "lucide-react";

const mentors = [
  {
    name: "Shiri Agarwal",
    rating: 4.9,
    reviews: 6,
    role: "Product @ Telstra | AFEP",
    details: "Consumer Intern @ Amazon | MBA",
  },
  {
    name: "Palak Gupta",
    rating: 4.8,
    reviews: 6,
    role: "Management Consulting at Accenture Strategy",
    details: "Gold Medal",
  },
  {
    name: "Vedansh Dubey",
    rating: 4.8,
    reviews: 6,
    role: "HRBP @ Wipro | Unstop Top Mentor",
    details: "150+ Case Competitions",
  },
  {
    name: "Yash Patel",
    rating: 4.8,
    reviews: 6,
    role: "Strategy @CEOs Office",
    details: "Mentored 500+ Students | MDI",
  },
  {
    name: "Rutwik Borkar",
    rating: 4.8,
    reviews: 6,
    role: "Flipkart | Bain & Co | Gold Medalist",
    details: "IIT Madras | XLRI",
  },
  {
    name: "Dhananjay Sharma",
    rating: 4.8,
    reviews: 6,
    role: "CFO's Office @SBI | IIM Ranchi",
    details: "Director’s Merit List | EnyIon Business",
  },
  {
    name: "Dnyaneshwar Maske",
    rating: 4.8,
    reviews: 6,
    role: "AIR 15 MBA CET 2024 | CAT 2023",
    details: "96.53 | XAT 2024 99.47 | MAT FEB 2024 99.94",
  },
  {
    name: "Faraz Hussain",
    rating: 4.8,
    reviews: 6,
    role: "Mentored 300+ students",
    details: "Software Engineering",
  },
];

const UsingUnstop = () => {
  const mainCards = [
    {
      image: img1,
      title: "Internships",
      description: "Gain Practical Experience",
    },
    {
      image: img2,
      title: "Mentorship",
      description: "Guidance from Top Mentors",
    },
    {
      image: img3,
      title: "Jobs",
      description: "Explore Diverse Careers",
    },
  ];

  const secondaryCards = [
    {
      title: "Practice",
      description: "Refine Skill Daily",
    },
    {
      title: "Competitions",
      description: "Battle for Excellence",
    },
  ];

  return (
    <Box
      sx={{
        textAlign: "center",
        p: 5,
        background: "linear-gradient(to bottom, #FFFFFF)",
        minHeight: "100vh",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          bgcolor: "white",
          px: 4,
          py: 2,
          borderRadius: "50px",
          boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
          mb: 5,
        }}
      >
        <Typography variant="h6" sx={{ fontWeight: "bold", color: "#333" }}>
          unstop
        </Typography>

        <Box sx={{ display: "flex", gap: 4, color: "#666" }}>
          {[
            "Internships",
            "Jobs",
            "Competitions",
            "Mentorships",
            "Practice",
            "More",
          ].map((item, index) => (
            <Typography key={index} variant="body1">
              {item}
            </Typography>
          ))}
        </Box>
        <Button
          variant="contained"
          sx={{
            bgcolor: "black",
            color: "white",
            borderRadius: "50px",
            px: 3,
            py: 1,
            textTransform: "none",
          }}
        >
          Register Now
        </Button>
      </Box>

      <Button
        variant="contained"
        sx={{
          bgcolor: "#e0f2fe",
          color: "#0284c7",
          borderRadius: "50px",
          textTransform: "none",
          mb: 2,
        }}
      >
        For Business
      </Button>
      <Typography
        variant="h3"
        sx={{ fontWeight: "bold", mb: 2, color: "#1E1E1E" }}
      >
        Unlock Your Career
      </Typography>
      <Typography
        variant="body1"
        sx={{ color: "#555", maxWidth: 600, mx: "auto" }}
      >
        Explore opportunities from across the globe to grow, showcase skills,
        gain CV points & get hired by your dream company.
      </Typography>

      <Box
        sx={{
          display: "flex",
          bgcolor: "white",
          borderRadius: "50px",
          boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
          width: "60%",
          mx: "auto",
          my: 4,
          p: 1,
        }}
      >
        <InputBase placeholder="Search opportunity" sx={{ flex: 1, ml: 2 }} />
        <InputBase placeholder="e.g. Pune, India" sx={{ flex: 1, ml: 2 }} />
        <Button
          variant="contained"
          sx={{
            bgcolor: "#2563eb",
            color: "white",
            borderRadius: "50px",
            px: 4,
            py: 1,
            textTransform: "none",
          }}
        >
          Search
        </Button>
      </Box>

      <Card
        sx={{
          padding: "30px",
          gap: "20px",
          boxShadow: "rgba(5, 15, 0, 0.1) 0px 0px 16px",
          borderRadius: "15px",
        }}
      >
        {" "}
        <Grid container spacing={4} justifyContent="center" sx={{ mt: 2 }}>
          {mainCards.map((card, index) => (
            <Grid size={{ xs: 12, sm: 6, md: 4 }} key={index}>
              <Card
                sx={{
                  height: "180px",
                  p: 3,
                  borderRadius: "16px",
                  bgcolor: "#F8FAFC",
                  boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
                }}
              >
                <CardContent>
                  <Typography
                    variant="h6"
                    sx={{ fontWeight: "bold", color: "#004AAD" }}
                  >
                    {card.title}
                  </Typography>
                  <Typography variant="body2" sx={{ color: "#666", mt: 1 }}>
                    {card.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
        <Grid
          container
          spacing={4}
          justifyContent="center"
          sx={{ mt: 4, mb: 4 }}
        >
          {secondaryCards.map((card, index) => (
            <Grid size={{ xs: 12, sm: 6, md: 6 }} key={index}>
              <Card
                sx={{
                  height: "180px",
                  p: 3,
                  mt: 2,
                  borderRadius: "16px",
                  bgcolor: "#F8FAFC",
                  boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
                }}
              >
                <CardContent>
                  <Typography
                    variant="h6"
                    sx={{ fontWeight: "bold", color: "#004AAD" }}
                  >
                    {card.title}
                  </Typography>
                  <Typography variant="body2" sx={{ color: "#666", mt: 1 }}>
                    {card.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
        <div style={{ textAlign: "center", padding: "20px" }}>
          <h2 style={{ fontSize: "24px", fontWeight: "bold" }}>Top Mentors</h2>
          <p style={{ color: "gray", marginTop: "10px", marginBottom: "20px" }}>
            In search of excellence? Explore the highest-rated mentors as
            recognized by the learner community.
          </p>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
              gap: "20px",
              maxWidth: "1000px",
              margin: "0 auto",
            }}
          >
            {mentors.map((mentor, index) => (
              <Card
                key={index}
                style={{
                  padding: "20px",
                  borderRadius: "10px",
                  boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
                  border: index === 1 ? "2px solid blue" : "1px solid #ddd",
                }}
              >
                <CardContent
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      color: "gold",
                      fontWeight: "bold",
                    }}
                  >
                    <Star size={16} fill="currentColor" /> {mentor.rating} (
                    {mentor.reviews})
                  </div>
                  <h3
                    style={{
                      fontSize: "18px",
                      fontWeight: "bold",
                      marginTop: "10px",
                    }}
                  >
                    {mentor.name}
                  </h3>
                  <p
                    style={{
                      color: "gray",
                      textAlign: "center",
                      fontSize: "14px",
                      marginTop: "5px",
                    }}
                  >
                    {mentor.role}
                  </p>
                  <p
                    style={{
                      color: "#666",
                      textAlign: "center",
                      fontSize: "12px",
                      marginTop: "5px",
                    }}
                  >
                    {mentor.details}
                  </p>
                  <Button
                    style={{
                      marginTop: "15px",
                      padding: "10px 20px",
                      cursor: "pointer",
                    }}
                  >
                    View Profile
                  </Button>
                </CardContent>
              </Card>
            ))}``
          </div>
          <Button
            style={{
              marginTop: "20px",
              padding: "10px 20px",
              display: "flex",
              alignItems: "center",
              cursor: "pointer",
            }}
          >
            View All <span style={{ marginLeft: "5px" }}>↗</span>
          </Button>
        </div>
      </Card>
    </Box>
  );
};

export default UsingUnstop;
