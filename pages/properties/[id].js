import DefaultLayout from '@/features/Layouts/DefaultLayout/DefaultLayout'
import PropertyMatterPortEmbed from '@/features/Property/components/PropertyMatterPortEmbed/PropertyMatterPortEmbed'
import PropertyStats from '@/features/Property/components/PropertyStats/PropertyStats'
import PropertyThumbnailSlider from '@/features/Property/components/PropertyThumbnailSlider/PropertyThumbnailSlider'
import PropertyYoutubeEmbed from '@/features/Property/components/PropertyYoutubeEmbed/PropertyYoutubeEmbed'
import { usePropertyFormat } from '@/features/data/common/Hooks/usePropertyFormat'
import TextContentBox from '@/features/data/common/TextContentBox/TextContentBox'
import { Badge, Box, Flex, Grid, GridItem, SimpleGrid, Text } from '@chakra-ui/react'
import { TbMapPin } from 'react-icons/tb'

const PropertyDetails = ({ property }) => {

    const { 
        address,
        coverPhoto,
        propertyType,
        price,
        title,
        rooms,
        baths,
        purpose,
        sqSize,
        externalID,
        photos,
        description,
        coverVideo,
        panorama,
        amenities,
        furnished
    } = usePropertyFormat(property)

  return (
    <DefaultLayout>
      <Box bgColor="#f7f8f9" paddingY="3rem">
        <Grid 
          gridTemplateColumns='repeat(6, 1fr)'
          gap="5"
          maxWidth="1200px"
          margin="0 auto"
        >
          <GridItem colSpan="6">
            <Text 
              fontSize="3xl"
              fontWeight="medium"
              color="green.800"
              textAlign={{ base:"center", sm:"left" }}
            >
              {propertyType}
              {title}
            </Text>

            <Flex 
              fontSize="xl"
              color="green.600"
              textAlign="center"
              alignItems="center"
              flexDirection={{ base:"column", sm:"row" }}
              gap="0.5rem"
              marginY={{ base:"1rem", sm:"0" }}
            >
              <TbMapPin />
              <Text fontWeight={'light'}>{address} - ID:{externalID}</Text>
              <Badge colorScheme='yellow'>{purpose}</Badge>
            </Flex>
          </GridItem>

          <GridItem colSpan={{ base: 6, sm: 3 }}>
            <PropertyThumbnailSlider photos={photos} />
          </GridItem>

          <GridItem colSpan={{ base: 6, sm: 3 }} >
            <PropertyStats 
              rooms={rooms} 
              baths={baths} 
              price={price} 
              sqSize={sqSize} 
            />
            <TextContentBox title="Description">
              <Text 
                fontWeight="light"
                color="gray.600"
                fontSize="1rem"
                noOfLines="4"
              >
                {description}
              </Text>
            </TextContentBox>

            <TextContentBox title="Amenities">
              <SimpleGrid 
                fontWeight="light"
                color="gray.600"
                fontSize="1rem"
                columns={{ base: 1, sm: 2 }}
              >
                {amenities.length ? amenities.map((item) => <Text>{item}</Text> ) : "Please contact us for more information"}

              </SimpleGrid>
            </TextContentBox>
          </GridItem>

          <GridItem colSpan={{ base: 6, sm: 3 }}>
            <TextContentBox title="Video Walkthrough">
              <PropertyYoutubeEmbed coverVideo={coverVideo} />
            </TextContentBox>
          </GridItem>

          <GridItem colSpan={{ base: 6, sm: 3 }}>
            <TextContentBox title="3D Virtual Walkthrough">
              <PropertyMatterPortEmbed panorama={panorama} />
            </TextContentBox>
          </GridItem>

        </Grid>
      </Box>
    </DefaultLayout>
  )
}

export default PropertyDetails

export async function getServerSideProps(context) {
    const property = require('@/features/data/property')
    return {
      props: { property }
    }
  }