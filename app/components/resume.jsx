import React from 'react';
import { Box, Flex, Text, Separator } from '@radix-ui/themes';

const JobEntry = ({ company, positions }) => (
  <>
    <Flex mt="4" justify="between" width="100%">
      <Text as="p" size="2">
        {company}
      </Text>
    </Flex>
    {positions.map(({ title, period }, index) => (
      <Flex key={index} justify="between" mt={index === 0 ? '1' : '1'}>
        <Text as="p" size="2" style={{ color: 'var(--gray-10)' }}>
          {title}
        </Text>
        <Text as="p" size="2" style={{ color: 'var(--gray-10)' }}>
          {period}
        </Text>
      </Flex>
    ))}
    <Separator size="4" my="3" />
  </>
);

const Resume = () => {
  const jobs = [
    {
      company: 'USAA',
      positions: [
        { title: 'Lead Designer, Design Systems', period: '2022-2023' },
        { title: 'Sr Designer, Design Technologist', period: '2019-2022' },
      ],
    },
    {
      company: 'Stellar Elements',
      positions: [{ title: 'Design Technologist', period: '2017-2019' }],
    },
    {
      company: 'Lightcast',
      positions: [{ title: 'Product Designer', period: '2016-2017' }],
    },
    {
      company: 'Pigeonly (YC W15)',
      positions: [{ title: 'Sr Designer', period: '2015-2016' }],
    },
    {
      company: 'Munzee',
      positions: [{ title: 'Designer', period: '2014-2015' }],
    },
    {
      company: 'Mark Cuban Companies',
      positions: [{ title: 'Designer', period: '2012-2014' }],
    },
  ];

  return (
    <Box>
      {jobs.map((job, index) => (
        <JobEntry key={index} {...job} />
      ))}
    </Box>
  );
};

export default Resume;
