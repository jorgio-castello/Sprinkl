import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';

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
  long: string,
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
        data={organizationData}
        renderItem={({ item }) => (
          <View style={styles.organizationCard}>
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

const styles = StyleSheet.create({
  organizationCard: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '5%'
  },
  text: {
    color: 'red',
  }
});

export default Organization;