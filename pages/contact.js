import DefaultLayout from "@/features/Layouts/DefaultLayout/DefaultLayout"
import TextContentBox from "@/features/data/common/TextContentBox/TextContentBox"
import ContactForm from "@/features/data/common/modules/ContactForm/ContactForm"
import { Box, Grid, GridItem, Text } from "@chakra-ui/react"

const ContactPage = () => {
  return (
    <DefaultLayout>
      <Box bgColor="#f7f8f9" paddingY="3rem">
        <Grid 
          templateColumns="repeat(6, 1fr)"
          gap="5"
          maxWidth="1200px"
          margin="0 auto"
        >
          <GridItem colSpan={{ base: 6, sm: 4 }}>
            <TextContentBox title="Contact Us">
              <ContactForm />
            </TextContentBox>
          </GridItem>
          
          <GridItem colSpan={{ base: 6, sm: 2 }}>
            <TextContentBox title="For Inquiries Contact:">
              <Text 
                fontWeight="light" 
                color="gray.600" 
                fontSize="1rem" 
                marginBottom="1rem"
              > 
                Toito Matto <br/>
                Public Relations Manager <br />
                5th Street, Down Town Kawempe <br />
                mattoloma@gmail.com
              </Text>
              
              <Text 
                fontWeight="light" 
                color="gray.600" 
                fontSize="1rem" 
                marginBottom="1rem"
              > 
                Edward Ssekiranda <br/>
                Theme Developer <br />
                5th Street, Down Town Kawempe <br />
                eddyug94@gmail.com
              </Text>
            </TextContentBox>
          </GridItem>

        </Grid>
      </Box>
    </DefaultLayout>
  )
}

export default ContactPage