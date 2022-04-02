import React, { useState, useRef } from 'react';
import { View, Text } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import moment from 'moment'
import Dropdown from '../components/DropDown';
import Header from '../components/Header'
import Styles from './AuthStyles'
import Input from '../components/Input'
import Button from '../components/Button';
import PhoneInput from '../components/PhoneInput';
import UserDate from '../components/UserDate';
import Api, { Alert } from '../Api'
import AsyncStorage from '@react-native-async-storage/async-storage';

function CompanyDetails({ navigation }) {
  const [uenNumber, setUenNumber] = useState('');
  const [uenNumberErr, setUenNumberErr] = useState(false);

  const [name, setName] = useState('');
  const [nameErr, setNameErr] = useState(false);

  const [industry, setIndustry] = useState('');
  const [industryErr, setIndustryErr] = useState(false);

  var currentDate = new Date();
  const [show, setShowCalendar] = useState(false);
  const [date, setDate] = useState(currentDate);
  const [dateErr, setDateErr] = useState(false);
  const [dateDisplay, setDateDisplay] = useState('Founded In');

  const [type, setType] = useState('');
  const [typeErr, setTypeErr] = useState(false);

  const [phone, setPhone] = useState('');
  const [phoneErr, setPhoneErr] = useState(false);

  const [about, setAbout] = useState('');
  const [aboutErr, setAboutErr] = useState(false);

  const [loader, setLoader] = useState(false);

  const goBack = () => {
    navigation.goBack()
  }

  const onSetUENumber = (text) => {
    setUenNumber(text)
    setUenNumberErr(false)
  }

  const onSetCompanyName = (text) => {
    setName(text)
    setNameErr(false)
  }

  const onSetIndustry = (text) => {
    setIndustry(text)
    setIndustryErr(false)
  }

  const onChangeDate = (event, selectedDate) => {
    setShowCalendar(false)
    const currentDate = selectedDate || date;
    setDateDisplay(moment(currentDate).format('l'));
    setDate(currentDate);
    setDateErr(false)
  };

  const onSelectType = (text) => {
    setType(text)
    setTypeErr(false)
  }

  const onChangePhone = ({ dialCode, unmaskedPhoneNumber, phoneNumber, isVerified }) => {
    setPhone(phoneNumber)
    setPhoneErr(false)
  };

  const onSetAbout = (text) => {
    setAbout(text)
    setAboutErr(false)
  }

  const validateInputs = () => {
    if (uenNumber.length == 0) {
      setUenNumberErr(true)
    } else if (name.length == 0) {
      setNameErr(true)
    } else if (industry.length == 0) {
      setIndustryErr(true)
    } else if (dateDisplay == "Founded In") {
      setDateErr(true)
    } else if (phone.length == 0) {
      setPhoneErr(true)
    } else if (about.length == 0) {
      setAboutErr(true)
    } else {
      goToDashboard()
    }
  }

  const goToDashboard = async () => {
    try {
      let user = await AsyncStorage.getItem('userId');
      setLoader(true)
      const response = await Api.post('/operations/addcompany', {
        about: about,
        business_occupation: industry,
        contactno: phone,
        createdby: user,
        formationdate: date,
        name: name,
        status: 0,
        type: type,
        uennumber: uenNumber,
        user_id: user
      });
      if (response.data.status == 200) {
        // navigation.navigate('Dashboard')
        navigation.reset({
          index: 0,
          routes: [{ name: 'Dashboard' }]
        })
        await AsyncStorage.setItem('companyName', name.toString());
      } else {
        alert(response.data.message);
      }
    } catch (err) {
      alert('An Error Occured');
    }
    setLoader(false)
  }

  const ref_input2 = useRef();
  const ref_input3 = useRef();
  const ref_input4 = useRef();

  return (
    <>
      <Header title={'Fill in your company details'}
        goBack={goBack}
        skip={false}
      />

      <View style={Styles.container}>
        <Input placeholder='UEN Number'
          autoFocus={true}
          returnKeyType="next"
          onSubmitEditing={() => ref_input2.current.focus()}
          onChange={onSetUENumber}
        />
        {uenNumberErr && <Text style={Styles.err}>* Required</Text>}

        <Input placeholder='Company Name'
          inputRef={ref_input2}
          returnKeyType="next"
          onSubmitEditing={() => ref_input3.current.focus()}
          onChange={onSetCompanyName}
        />
        {nameErr && <Text style={Styles.err}>* Required</Text>}

        <View style={Styles.row}>
          <>
            <Input
              customStyles={Styles.industry}
              placeholder='Industry'
              inputRef={ref_input3}
              returnKeyType="next"
              onChange={onSetIndustry}
              onSubmitEditing={() => ref_input4.current.focus()}
            />
            {industryErr && <Text style={Styles.err}>*</Text>}
          </>


          <>
            <UserDate onPress={() => setShowCalendar(!show)}
              dateDisplay={dateDisplay}
              customStyle={Styles.dateStyle} />
            {dateErr && <Text style={Styles.err}>*</Text>}
          </>
        </View>

        <Dropdown
          defaultValue={'Incorparation Type'}
          options={['Php', 'SQL']}
          onSelectType={onSelectType}
        />
        {typeErr && <Text style={Styles.err}>* Required</Text>}


        <PhoneInput onChangeText={onChangePhone}
        />
        {phoneErr && <Text style={Styles.err}>* Required</Text>}


        <Input
          placeholder={'About'}
          numberOfLines={3}
          customInputStyle={Styles.input}
          onChange={onSetAbout}
          returnKeyType="done"
        />
        {aboutErr && <Text style={Styles.err}>* Required</Text>}

        <Button title={'Register Company'} onPress={() => validateInputs()} loader={loader} customStyle={{ marginVertical: 20 }} />
      </View>
      {show && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode={'date'}
          is24Hour={true}
          display="default"
          onChange={onChangeDate}
        />
      )}
    </>
  );
}
export default CompanyDetails;