import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";

export default function CardUsage() {
  return (
    <Box width="300px">
      <Card>
        <CardMedia
          component="img"
          height="160"
          image="https://picsum.photos/500"
          alt="image"
        ></CardMedia>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h1">
            Lorem, ipsum.
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem
            cupiditate ducimus cum modi molestiae officiis dolor praesentium eum
            vero. Dolorem molestias aliquid iste nisi praesentium, eveniet nihil
            tempora aliquam sit?
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Share</Button>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
    </Box>
  );
}
