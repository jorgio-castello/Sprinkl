import React from 'react';
import { StyleSheet, ScrollView, View, Dimensions } from 'react-native';
import OrganizationCard from './OrganizationCard';

import tailwind from 'tailwind-rn';

import { Block } from 'galio-framework';
import theme from '../theme.js';

const { width } = Dimensions.get('screen');

interface Organization {
  'id': number,
  'cause': string,
  'organization_id': string,
  'organization.id': string,
  'organization.photoUrl': string,
  'organization.city': string,
  'organization.state': string,
  'organization.country': string,
  'organization.websiteUrl': string,
  'organization.mission': string,
  'organization.causes': string,
  'organization.causes_id': number,
};

type OrganizationGroupProps = { organizationCollection: Array<Organization> };

const OrganizationGroup: React.FC<OrganizationGroupProps> = (props) => {
  const { organizationCollection } = props;
  return (
    <View>
      {organizationCollection.map((org, index) => {
          return(
            <OrganizationCard organization={org} />
          );
        }
      )}
    </View>
  )
};

export default OrganizationGroup;