import React from 'react';
import Layout from '../Layout.jsx'; 
import { Component as TeamModule } from '../modules/TeamModule/index.jsx';
import CounterPartial from './CounterPartial.jsx';

const Preview = () => {
  const testData = [
    {
        team_member_photo: {
            src: 'https://via.placeholder.com/150', alt: 'Jane Doe'
        },
        team_member_name: 'Jane Doe'
    },
    {
        team_member_photo: {
            src: 'https://via.placeholder.com/150', alt: 'John Doeee'
        },
        team_member_name: 'John Doe'
    },
    {
        team_member_photo: {
            src: 'https://via.placeholder.com/150', alt: 'Jack Doe'
        },
        team_member_name: 'Jack Doe'
    },
]

  return (
    <div>
      <Layout> 
        <CounterPartial/>
        <TeamModule fieldValues={{ team_members: testData}} hublParameters={{ title: 'My Team' }} />      
        </Layout>
    </div>
  );
};

export default Preview;