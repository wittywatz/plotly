import React from 'react';
import { Box, Image } from '@chakra-ui/react';

const AffiliationsIcon = () => {
  return (
    <Box
      paddingTop="2rem"
      width={{ base: '90%', sm: '90%', xl: '50%' }}
      alignSelf="center"
      data-testid="affiliations"
    >
      <Image
        width="95%"
        objectFit="cover"
        src="https://i.ibb.co/6BW5BVG/Group-3.png"
        alt="Affiliations"
        border="0"
      />
    </Box>
  );
};

export default AffiliationsIcon;
