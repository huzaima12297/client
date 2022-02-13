import React, {useState} from 'react';

import {
  Image,
  Modal,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';

const ModalDownload = ({modalDownload, setModalDownload}) => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState('');
  const [items, setItems] = useState([{label: 'test', value: 'test3'}]);
  return (
    <Modal visible={modalDownload} animationType="fade" transparent={true}>
      <TouchableOpacity
        style={styles.modalBackground}
        onPress={() => setModalDownload(false)}>
        <TouchableWithoutFeedback>
          <View style={[styles.modalBirthdayInfoContainer, styles.modalShadow]}>
            <View style={styles.modalBirthdayInfoCloseImg}>
              <Text style={styles.heading}>Download</Text>
              <TouchableOpacity onPress={() => setModalDownload(false)}>
                <Text>X </Text>
              </TouchableOpacity>
            </View>
            <DropDownPicker
              style={styles.picker}
              open={open}
              setOpen={setOpen}
              placeholder={'Download document as PDF/Excel'}
              placeholderStyle={{color: '#707070'}}
              listMode={'SCROLLVIEW'}
              value={value}
              setValue={setValue}
              items={items}
              setItems={setItems}
            />
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
export default ModalDownload;

const styles = StyleSheet.create({
  modalBirthdayInfoContainer: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
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
  picker: {
    width: '90%',
    alignSelf: 'center',
    marginVertical: '5%',
    borderColor: '#B1B1B1',
  },
  heading: {
    fontSize: 14,
    color: '#151515',
  },
});
