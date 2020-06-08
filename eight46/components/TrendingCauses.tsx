import React from 'react';
import { StyleSheet, ScrollView, View, Text } from 'react-native';
import OrganizationGroup from './OrganizationGroup';

import tailwind from 'tailwind-rn';

interface Cause {
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

interface TrendingCause {
  cause: string,
  data: Cause,
}

type TrendingCausesProps = {
  trendingCauses: Array<TrendingCause>,
}

const TrendingCauses: React.FC<TrendingCausesProps> = (props) => {

  return (
    <>
        <View style={tailwind('bg-blue-700 mt-5 h-16 justify-center')}>
          <Text style={tailwind('text-2xl text-white font-bold font-light text-left pl-5')}>Trending Causes</Text>
        </View>
      <ScrollView style={tailwind('pt-4 bg-blue-100 rounded-lg')}>
        { props.trendingCauses.map((movement, index) => {
            const { cause, data } = movement;
            return (
              <View>
                <View style={tailwind('bg-teal-400 w-48 ml-5 py-2 rounded-full mb-4')}>
                  <Text style={tailwind('text-base text-white font-semibold text-center')}>{cause}</Text>
                </View>
                <OrganizationGroup organizationCollection={data} />
                <View style={tailwind('w-full border-b border-blue-200 self-center mt-2 my-4')}/>
              </View>
            );
        })}
      </ScrollView>
    </>
  );
};

export default TrendingCauses;