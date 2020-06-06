import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import taildwind from 'tailwind-rn';
import tailwind from 'tailwind-rn';

interface Organization {
  id: string,
  alias: string,
  ngo_id: string,
  name: string,
  mission: string,
  street1: string,
  street2: string,
  city: string,
  region: string,
  postal_code: string,
  country: string,
  lat: string,
  lon: string,
  website_url: string,
  profile_url: string,
  logo_url: string,
  disbursement_type: string,
};

type OrganizationProps = {
  organizationData: Array<Organization>,
};

const Organization: React.FC<OrganizationProps> = ({ organizationData }) => {
    return (
      <FlatList
        style={tailwind('')}
        data={organizationData}
        renderItem={({ item }) => (
          <View style={tailwind('border-solid border-4 border-gray-600 mt-1 mb-1')}>
              <Text>{item.name}</Text>
              <Text>{item.mission}</Text>
              <Text>{item.country}</Text>
              <Text>{item.website_url}</Text>
          </View>
        )}
        keyExtractor={item => item.id}
      />
    );
}
export default Organization;