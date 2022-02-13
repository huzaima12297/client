import React, {useState} from 'react';

import {
  Image,
  Modal,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';

const ModalSetting = ({modalSetting, setModalSetting}) => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState('');
  const [items, setItems] = useState([{label: 'test', value: 'test3'}]);

  function Input(value) {
    return (
      <View style={{width: '45%', height: 40}}>
        <Text>{value}</Text>
        <TextInput placeholder="" style={styles.InputText} />
      </View>
    );
  }
  return (
    <Modal visible={modalSetting} animationType="fade" transparent={true}>
      <TouchableOpacity
        style={styles.modalBackground}
        onPress={() => setModalSetting(false)}>
        <TouchableWithoutFeedback>
          <View style={[styles.modalBirthdayInfoContainer, styles.modalShadow]}>
            <View style={styles.modalBirthdayInfoCloseImg}>
              <Text style={styles.heading}>Show by</Text>
              <TouchableOpacity onPress={() => setModalSetting(false)}>
                <Text>X </Text>
              </TouchableOpacity>
            </View>
            <DropDownPicker
              style={styles.picker}
              open={open}
              setOpen={setOpen}
              placeholder={'Date Range'}
              placeholderStyle={{color: '#707070'}}
              listMode={'SCROLLVIEW'}
              value={value}
              setValue={setValue}
              items={items}
              setItems={setItems}
            />
            <View style={styles.row}>
              {Input('From')}
              {Input('To')}
            </View>
            <TouchableOpacity
              style={styles.DownloadButton}
              onPress={() => alert('submit')}>
              <Text style={styles.DownloadButtonText}>Submit</Text>
            </TouchableOpacity>
          </View>
        </TouchableWithoutFeedback>
      </TouchableOpacity>
    </Modal>
  );
};
export default ModalSetting;

const styles = StyleSheet.create({
  modalBirthdayInfoContainer: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    // alignSelf: 'flex-end',
    // marginTop: 100,
    paddingTop: 40,
    paddingBottom: 30,
    position: 'absolute',
    bottom: 0,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },

  modalBirthdayInfoCloseImg: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '90%',
  },

  modalShadow: {
    elevation: 20,
    shadowColor: '#000000',
    shadowOpacity: 0.5,
  },

  modalBackground: {
    backgroundColor: 'rgba(0,0,0,0.6)',
    flex: 1,
  },
  DownloadButton: {
    marginTop: '5%',
    backgroundColor: '#55A57F',
    width: '90%',
    height: 41,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  DownloadButtonText: {
    fontSize: 14,
    color: 'white',
  },
  InputText: {
    borderColor: '#B1B1B1',
    borderWidth: 1,
    height: 40,
    borderRadius: 8,
  },
  heading: {
    fontSize: 14,
    color: '#151515',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '90%',
    marginVertical: 20,
  },
  picker: {
    width: '90%',
    alignSelf: 'center',
    marginVertical: '5%',
    borderColor: '#B1B1B1',
  },
});
