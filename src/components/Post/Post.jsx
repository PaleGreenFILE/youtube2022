import React from "react";
import {
  Avatar,
  Box,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Checkbox,
  IconButton,
  Typography,
} from "@mui/material";
import { GridMoreVertIcon } from "@mui/x-data-grid";
import { Favorite, FavoriteBorder, Share } from "@mui/icons-material";
import image from "../../assets/img/gallery-06.jpg";
import image2 from "../../assets/feed/gallery-02.jpg";
import image3 from "../../assets/feed/gallery-03.jpg";
import image4 from "../../assets/feed/gallery-05.jpg";
import image5 from "../../assets/feed/gallery-07.jpg";
import image6 from "../../assets/feed/gallery-09.jpg";
import image7 from "../../assets/feed/about-02.jpg";

const Post = () => {
  return (
    <Box flex={4} p={4} mb={6}>
      <Card
        sx={{
          margin: { xs: "0px 10px", sm: "20px 200px" },
          width: { xs: "100%", sm: "60%" },
        }}
      >
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: "pink" }} aria-label="recipe">
              R
            </Avatar>
          }
          action={
            <IconButton aria-label="settings">
              <GridMoreVertIcon />
            </IconButton>
          }
          title="Josephine Doe"
          subheader="21 Avril, 2022"
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
           - It's time to go at school *_*
          </Typography>
        </CardContent>
        <CardMedia
          component="img"
          height="20%"
          image={image}
          alt="Paella dish"
        />
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <Checkbox
              icon={<FavoriteBorder />}
              checkedIcon={<Favorite sx={{ color: "red" }} />}
            />
          </IconButton>
          <IconButton aria-label="share">
            <Share />
          </IconButton>
        </CardActions>
      </Card>

      <Card
        sx={{
          margin: { xs: "20px 10px", sm: "20px 200px" },
          width: { xs: "100%", sm: "60%" },
        }}
      >
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: "yellow" }} aria-label="recipe">
              R
            </Avatar>
          }
          action={
            <IconButton aria-label="settings">
              <GridMoreVertIcon />
            </IconButton>
          }
          title="Jennifer Zinda"
          subheader="21 Avril, 2022"
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
           - Welcome to New York it's my best City 
          </Typography>
        </CardContent>
        <CardMedia
          component="img"
          height="20%"
          image={image2}
          alt="Paella dish"
        />

        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <Checkbox
              icon={<FavoriteBorder />}
              checkedIcon={<Favorite sx={{ color: "red" }} />}
            />
          </IconButton>
          <IconButton aria-label="share">
            <Share />
          </IconButton>
        </CardActions>
      </Card>
      <Card
        sx={{
          margin: { xs: "20px 10px", sm: "20px 200px" },
          width: { xs: "100%", sm: "60%" },
        }}
      >
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: "blueviolet" }} aria-label="recipe">
              R
            </Avatar>
          }
          action={
            <IconButton aria-label="settings">
              <GridMoreVertIcon />
            </IconButton>
          }
          title="John Doe"
          subheader="21 Avril, 2022"
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
           - Sometime need little break  when Hard Work :()
          </Typography>
        </CardContent>
        <CardMedia
          component="img"
          height="20%"
          image={image3}
          alt="Paella dish"
        />

        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <Checkbox
              icon={<FavoriteBorder />}
              checkedIcon={<Favorite sx={{ color: "red" }} />}
            />
          </IconButton>
          <IconButton aria-label="share">
            <Share />
          </IconButton>
        </CardActions>
      </Card>
      <Card
        sx={{
          margin: { xs: "20px 10px", sm: "20px 200px" },
          width: { xs: "100%", sm: "60%" },
        }}
      >
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: "gray" }} aria-label="recipe">
              B
            </Avatar>
          }
          action={
            <IconButton aria-label="settings">
              <GridMoreVertIcon />
            </IconButton>
          }
          title="Bernard Giraud"
          subheader="21 Avril, 2022"
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
          - I CAN BE UR PHOTOGRAPH FOR ONE DAY !
           Contact Me Inbox :)
          </Typography>
        </CardContent>
        <CardMedia
          component="img"
          height="20%"
          image={image4}
          alt="Paella dish"
        />

        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <Checkbox
              icon={<FavoriteBorder />}
              checkedIcon={<Favorite sx={{ color: "red" }} />}
            />
          </IconButton>
          <IconButton aria-label="share">
            <Share />
          </IconButton>
        </CardActions>
      </Card>
      <Card
        sx={{
          margin: { xs: "20px 10px", sm: "20px 200px" },
          width: { xs: "100%", sm: "60%" },
        }}
      >
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: "red" }} aria-label="recipe">
              A
            </Avatar>
          }
          action={
            <IconButton aria-label="settings">
              <GridMoreVertIcon />
            </IconButton>
          }
          title="Alicia Nays"
          subheader="21 Avril, 2022"
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
         Have a great day all :)
          </Typography>
        </CardContent>
        <CardMedia
          component="img"
          height="20%"
          image={image5}
          alt="Paella dish"
        />

        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <Checkbox
              icon={<FavoriteBorder />}
              checkedIcon={<Favorite sx={{ color: "red" }} />}
            />
          </IconButton>
          <IconButton aria-label="share">
            <Share />
          </IconButton>
        </CardActions>
      </Card>
      <Card
        sx={{
          margin: { xs: "0px 10px", sm: "0px 200px" },
          width: { xs: "100%", sm: "60%" },
        }}
      >
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: "violet" }} aria-label="recipe">
              B
            </Avatar>
          }
          action={
            <IconButton aria-label="settings">
              <GridMoreVertIcon />
            </IconButton>
          }
          title="Brendan Richo"
          subheader="21 Avril, 2022"
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            - A Beautiful Place ! I really love my Travel 
          </Typography>
        </CardContent>
        <CardMedia
          component="img"
          height="20%"
          image={image6}
          alt="Paella dish"
        />

        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <Checkbox
              icon={<FavoriteBorder />}
              checkedIcon={<Favorite sx={{ color: "red" }} />}
            />
          </IconButton>
          <IconButton aria-label="share">
            <Share />
          </IconButton>
        </CardActions>
      </Card>
    </Box>
  );
};

export default Post;
