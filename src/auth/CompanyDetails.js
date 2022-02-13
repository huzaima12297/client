import React, { useState } from 'react';
import { View } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import moment from 'moment'
import Dropdown from '../components/DropDown';
import Header from '../components/Header'
import Styles from './AuthStyles'
import Input from '../components/Input'
import Button from '../components/Button';
import PhoneInput from '../components/PhoneInput';
import UserDate from '../components/UserDate';

function CompanyDetails({ navigation }) {

  const [show, setShowCalendar] = useState(false);
  var currentDate = new Date();
  const [date, setDate] = useState(currentDate);
  const [dateDisplay, setDateDisplay] = useState('Founded In');

  const onChange = (event, selectedDate) => {
    setShowCalendar(false)
    const currentDate = selectedDate || date;
    setDateDisplay(moment(currentDate).format('l'));
    setDate(currentDate);
  };

  const onChangeText = ({ dialCode, unmaskedPhoneNumber, phoneNumber, isVerified }) => {
  };

  const goBack = () => {
    navigation.goBack()
  }

  const goToDashboard = () => {
    navigation.navigate('Dashboard')
  }

  return (
    <>
      <Header title={'Fill in your company details'}
        goBack={goBack}
        skip={true}
      />

      <View style={Styles.container}>
        <Input placeholder='UEN Number'
        />

        <Input placeholder='Company Name' />

        <View style={Styles.row}>
          <Input
            customStyles={Styles.industry}
            placeholder='Industry'
          />

          <UserDate onPress={() => setShowCalendar(!show)}
            dateDisplay={dateDisplay}
            customStyle={Styles.dateStyle} />
        </View>

        <Dropdown
          defaultValue={'Incorparation Type'}
          options={['option 1', 'option 2']}
        />

        <PhoneInput onChangeText={onChangeText} />

        <Input
          placeholder={'About'}
          numberOfLines={3}
          customInputStyle={Styles.input}
        />
      </View>

      <Button title={'Register Company'} onPress={()=> goToDashboard()}/>

      {show && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode={'date'}
          is24Hour={true}
          display="default"
          onChange={onChange}
        />
      )}
    </>
  );
}
export default CompanyDetails;