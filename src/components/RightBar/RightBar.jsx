import React from "react";
import {
  AvatarGroup,
  Box,
  Typography,
  Avatar,
  ImageList,
  ImageListItem,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Divider,
} from "@mui/material";
import image from "../../assets/img/1.jpg";
import image1 from "../../assets/img/product-10.jpg";
import image2 from "../../assets/img/product-min-01.jpg";
import image3 from "../../assets/img/product-min-02.jpg";
import image4 from "../../assets/img/product-min-03.jpg";
import image5 from "../../assets/img/product-min-01.jpg";
import image6 from "../../assets/images/blog-01.jpg";
import image7 from "../../assets/images/blog-02.jpg";
import image8 from "../../assets/images/slide-05.jpg";
import image9 from "../../assets/images/slide-06.jpg";
import image10 from "../../assets/images/slide-07.jpg";
import image11 from "../../assets/images/about-01.jpg";

const RightBar = () => {
  return (
    <Box flex={2} p={2} sx={{ display: { xs: "none", sm: "block" } }}>
      <Box position="fixed" width={300}>
        <Typography variant="h6" fontWeight={100}>
          Online Friends
        </Typography>
        <AvatarGroup max={8}>
          <Avatar alt="" src={image} />
          <Avatar alt="" src={image1} />
          <Avatar alt="" src={image2} />
          <Avatar alt="" src={image3} />
          <Avatar alt="" src={image4} />
          <Avatar alt="" src={image5} />
          <Avatar alt="" src={image} />
          <Avatar alt="" src={image} />
          <Avatar alt="" src={image} />
        </AvatarGroup>
        <Typography variant="h6" fontWeight={100} mt={2} mb={2}>
          Latest Photos
        </Typography>
        <ImageList col={3} rowHeight={110} gap={5}>
          <ImageListItem>
            <img src={image7} alt="" />
          </ImageListItem>
          <ImageListItem>
            <img src={image6} alt="" />
          </ImageListItem>
          <ImageListItem>
            <img src={image8} alt="" />
          </ImageListItem>
          <ImageListItem>
            <img src={image9} alt="" />
          </ImageListItem>
        </ImageList>
        <Typography variant="h6" fontWeight={100} mt={2}>
          Latest Conversation
        </Typography>
        <List
          sx={{ width: "100%", mawWidth: 360, bgcolor: "background.paper" }}
        >
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar src={image10} />
            </ListItemAvatar>
            <ListItemText
              primary="Brunch this weekend?"
              secondary={
                <>
                  <Typography
                    sx={{ display: "inline" }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    Ali Connors
                  </Typography>
                  {"- I'll be in your neighborhood doing errands this..."}
                </>
              }
            />
          </ListItem>
          <Divider variant="inset" component="li"/>
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar src={image8} />
            </ListItemAvatar>
            <ListItemText
              primary="Summer BBQ"
              secondary={
                <>
                  <Typography
                    sx={{ display: "inline" }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                  To Scott, Alex, Jennifer
                  </Typography>
                  {"- Wish I could come, but i'm out of town this...."}
                </>
              }
            />
          </ListItem>
          <Divider variant="inset" component="li"/>
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar src={image11} />
            </ListItemAvatar>
            <ListItemText
              primary="OUI OUI"
              secondary={
                <>
                  <Typography
                    sx={{ display: "inline" }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    Sandra Adams
                  </Typography>
                  {"- Do you have this..."}
                </>
              }
            />
          </ListItem>
          <Divider variant="inset" component="li"/>
        </List>
      </Box>
    </Box>
  );
};

export default RightBar;
