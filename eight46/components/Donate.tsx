import React from 'react';
import { StyleSheet, Text, View, ScrollView, Image } from 'react-native';
import tailwind from 'tailwind-rn';

import moment from 'moment';

interface UserPreferences {
  id: number,
  userId: number,
  organizationId: number,
  weight: number | null,
  roundUp: number,
  organization_id: number,
  'organization.id': number,
  'organization.photoUrl': string,
  'organization.name': string,
  'organization.city': string,
  'organization.state': string,
  'organization.country': string,
  'organization.websiteUrl': string,
  'organization.mission': string,
  'organization.causes': string,
  'organization.causes_id': number,
}

interface Transaction {
  transaction_id: string,
  date: string,
  name: string,
  amount: number,
  roundUp: number,
}

type DonateProps = {
  transactionData: Transaction,
  userPreferences: UserPreferences,
}

const Donate: React.FC<DonateProps> = ({ transactionData, userData}) => {
    let { donationsSum, userPreferences } = userData;
    console.log(userPreferences);
    donationsSum = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(donationsSum);

    let startDate = transactionData ? moment(transactionData[transactionData.length - 1].date) : '';
    let now = moment(new Date());
    const numberOfDays = now.diff(startDate, 'days');

  return (
    <>
      <View style={tailwind('w-11/12 h-40 bg-white border border-gray-300 rounded-md mx-4 mt-2')}>
        <View style={tailwind('flex-row')}>
          <View style={tailwind('w-7/12 p-3 h-20 justify-between')}>
            <Text style={tailwind('text-2xl font-semibold text-blue-600')}>You've raised</Text>
            <Text style={tailwind('text-lg font-light text-gray-700')}>over the past {numberOfDays} days</Text>
          </View>
          <View style={tailwind('w-5/12 pt-4 h-20')}>
            <Text style={tailwind('text-3xl text-center font-semibold text-teal-500')}>{donationsSum}</Text>
          </View>
        </View>
        <View style={tailwind('w-7/12 h-10 bg-teal-400 rounded-full mx-16 mt-5')}>
          <Text style={tailwind('text-white text-lg font-bold text-center leading-9')}>Send {donationsSum}</Text>
        </View>
      </View>
      <View style={tailwind('mt-4')}>
        <Text style={tailwind('ml-4 font-light')}>Your Top Causes</Text>
        <ScrollView horizontal={true} style={tailwind('flex-row mt-2 ml-4')}>
          {userPreferences.map(organization => {
            return (
              <View style={tailwind('h-24 w-24 border border-gray-300 rounded-md mr-2 bg-white')}>
                <Image source={{uri: organization['organization.photoUrl']}} style={styles.photo} />
              </View>
            );
          })}
        </ScrollView>
      </View>
    </>
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

export default Donate;