'use client';
import { Box, Flex, Heading, Text } from '@radix-ui/themes';
import ColorBar from '../components/colorbar';
import Spline from '@splinetool/react-spline';
import NavToolbar from './navtoolbar';

export default function HomeContent() {
  return (
    <Box
      style={{
        height: '100%',
        overflowY: 'auto',
        overflowX: 'hidden',
        WebkitOverflowScrolling: 'touch',
      }}
    >
      <Flex direction="column" gap="4" pb="4">
        <Flex pt={{ initial: '4', md: '6' }} align="center" justify="between">
          <NavToolbar />
        </Flex>
        {/* <Separator size="4" color="bronze" /> */}
        <Spline scene="https://prod.spline.design/ozb1e9hCLqo73g6G/scene.splinecode" />
        <Text size="2">
          Currently working on various projects around American Dynamism and re-industrialization.
          If you are in this space, drop a line!
        </Text>
        <ColorBar />
        <Heading size="3" weight="medium">
          Past
        </Heading>
        <Flex direction="column" gap="7">
          {[
            {
              heading: 'USAA',
              subheading: '2019-2023',
              body: 'Led development of scalable microservices architecture, improving system performance by 40%. Mentored junior developers and implemented best practices in code reviews.',
            },
            {
              heading: 'Full Stack Developer',
              subheading: 'InnovateSoft | 2018 - 2020',
              body: 'Developed and maintained multiple client-facing web applications using React and Node.js. Implemented CI/CD pipelines, reducing deployment time by 60%.',
            },
            {
              heading: 'Frontend Developer',
              subheading: 'WebSolutions Co. | 2016 - 2018',
              body: 'Created responsive and accessible user interfaces for e-commerce platforms. Collaborated with UX designers to implement pixel-perfect designs.',
            },
            {
              heading: 'Junior Developer',
              subheading: 'StartUp Innovations | 2014 - 2016',
              body: 'Assisted in the development of mobile applications using React Native. Participated in agile development processes and sprint planning.',
            },
            {
              heading: 'Intern',
              subheading: 'CodeCrafters LLC | Summer 2013',
              body: "Gained hands-on experience in web development technologies. Contributed to the company's internal tools and documentation processes.",
            },
          ].map((item, index) => (
            <Flex key={index} direction="column" gap="2">
              <Flex justify="between">
                <Heading size="2">{item.heading}</Heading>
                <Text size="2" color="gray">
                  {item.subheading}
                </Text>
              </Flex>
              <Text size="2">{item.body}</Text>
            </Flex>
          ))}
        </Flex>
      </Flex>
    </Box>
  );
}
