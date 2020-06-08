import React from 'react';
import { StyleSheet, View, Image, Button, Text, Linking } from 'react-native';
import { convertSequelizedNamesToFriendly } from './helpers';

import tailwind from 'tailwind-rn';
import { t } from 'react-native-tailwindcss';

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

type OrganizationCardProps = { organization: Organization };

const OrganizationCard: React.FC<OrganizationCardProps> = (props) => {
  const { organization } = props;

  const {
    id, name, cause, causeId, organizationId, photoUrl, city, state, country, websiteUrl, mission
  } = convertSequelizedNamesToFriendly(organization);

  return (
    <View key={organizationId} style={tailwind('border-solid border border-gray-300 rounded-lg w-11/12 mx-4 mb-2 bg-white')}>
      <View style={tailwind('flex-row justify-between mt-3 px-3')}>
        <View style={tailwind('flex h-24 w-8/12 justify-around')}>
          <Text style={tailwind('text-lg text-gray-700 font-semibold mb-2')}>{name}</Text>
          <Text style={tailwind('text-sm font-thin text-gray-700 mb-2')} key={causeId}>{cause}</Text>
          <View style={tailwind('flex-row content-end')}>
            <View>
              <Text style={tailwind('text-base text-teal-400 font-normal')}>Donate</Text>
            </View>
            <Text style={tailwind('text-base text-gray-400')}> | </Text>
            <Text style={tailwind('text-blue-400 text-base font-normal')}
                onPress={() => Linking.openURL(websiteUrl)}>
                Website
            </Text>
          </View>
        </View>
        <Image source={{uri: photoUrl}} style={styles.photo} />
      </View>
      <View style={tailwind('w-11/12 border-b border-gray-300 self-center mt-5')}/>
      <Text style={tailwind('text-base w-full ml-2 mt-4 text-gray-700 font-thin pl-2 pr-8 pb-5')}>{mission}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  photo: {
    height: 95,
    width: 95,
    padding: 10,
    resizeMode: 'contain',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#f2f7fc'
  }
});

export default OrganizationCard;