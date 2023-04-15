import { Image, SimpleGrid } from "@chakra-ui/react";
import { partners } from "./partnersConsts";
const Partners = () => {
  return (

    <SimpleGrid columns={partners.length} margin="0 auto" minChildWidth="150px" >
      {partners.map((partner) => (
        <Image alt="partner_photo"
          src={partner} 
          key={partner} 
          alignSelf="center" 
          padding={{ base:"2rem", sm:"3rem" }}
          filter="grayScale(2)"
          opacity="0.5"
        />
      ))}
    </SimpleGrid>
  )
}

export default Partners;