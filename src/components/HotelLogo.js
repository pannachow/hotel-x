import Box from "@material-ui/core/Box";

export default function HotelLogo({ style }) {
  return (
    <Box
      fontSize={16}
      fontWeight={600}
      display="flex"
      flexDirection="column"
      alignItems="center"
      style={style}
    >
      <img src="hotel-x-icon.png" alt="Hotel logo" width="100" height="100" />
      <Box component="span" mt={0.5}>
        HOTEL X
      </Box>
    </Box>
  );
}
