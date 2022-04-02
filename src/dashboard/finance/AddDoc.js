import React, { useState, useRef } from 'react';
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity, useWindowDimensions, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Input from '../../components/Input';
import DocumentPicker from 'react-native-document-picker';
import Button from '../../components/Button';
import { FormDataApi } from '../../Api'
import AsyncStorage from '@react-native-async-storage/async-storage';

function AddDoc({ navigation }) {
  const ref_input2 = useRef();
  const ref_input3 = useRef();
  const ref_input4 = useRef();
  const ref_input5 = useRef();
  const [loader, setLoader] = useState(false)

  const [cat, setCat] = useState('')
  const [catErr, setCatErr] = useState(false)

  const [title, setTitle] = useState('')
  const [errTitle, setTileErr] = useState(false)


  const [remarks, setRemarks] = useState('')
  const [remarksErr, setRemarksErr] = useState(false)

  const [documentTitle, setdocumentTitle] = useState('Upload Document')
  const [doc, setDoc] = useState(null)
  const [docErr, setDocErr] = useState(false)

  const onSetCat = (text) => {
    setCat(text)
    setCatErr(false)
  }

  const onSetTitle = (text) => {
    setTitle(text)
    setTileErr(false)
  }

  const onSetRemarks = (text) => {
    setRemarks(text)
    setRemarksErr(false)
  }

  const uploadDoc = async () => {
    const res = await DocumentPicker.pick({
      type: [DocumentPicker.types.allFiles],
    });
    if (res.length > 0) {
      console.log("res", res[0])
      setdocumentTitle(res[0].name)
      setDoc(res[0]);
      setDocErr(false)
    } else {
      alert("Select Document")
    }
  }

  const addDocument = async () => {
    if (cat.length == 0) {
      setCatErr(true)
    } else if (title.length == 0) {
      setTileErr(true)
    } else if (remarks.length == 0) {
      setRemarksErr(true)
    } else if (doc == null) {
      setDocErr(true)
    } else {
      setLoader(true)
      const value = await AsyncStorage.getItem('userId');
      const fileToUpload = doc;
      const data = new FormData();
      data.append('category', cat);
      data.append('title', title);
      data.append('remarks', remarks);
      data.append('userid', value);
      data.append('fileupload', fileToUpload);
      data.append('created_by', value)
      try {
        const response = await FormDataApi.post(`/financemanagement/addfdocument`,
          data,
        );
        if (response.data.status == 200) {
          alert("Document uploaded.")
          navigation.goBack()
        } else {
          alert(response.data.message)
        }
      } catch (err) {
        alert(err);
      }
      setLoader(false)
    }
  }
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.view}>
        <TouchableOpacity style={styles.name} onPress={() => navigation.goBack()}>
          <Icon size={20} color={'black'} name="chevron-back-outline" />
        </TouchableOpacity>

        <Text style={{ color: 'black', fontSize: 16, fontWeight: "600" }}>
          Add Document
        </Text>
      </View>

      <View style={{ marginHorizontal: 20 }}>
        <Input placeholder='Category'
          onChange={onSetCat}
          autoFocus={true}
          returnKeyType="next"
          onSubmitEditing={() => ref_input2.current.focus()}
        />
        {catErr && <Text style={styles.err}>* Required</Text>}

        <Input placeholder='Title'
          onChange={onSetTitle}
          returnKeyType="next"
          inputRef={ref_input2}
          onSubmitEditing={() => ref_input3.current.focus()}
        />
        {errTitle && <Text style={styles.err}>* Required</Text>}

        <Input placeholder='Remarks'
          onChange={onSetRemarks}
          returnKeyType="done"
          inputRef={ref_input3}
        />
        {remarksErr && <Text style={styles.err}>* Required</Text>}

        <TouchableOpacity style={styles.upload} onPress={uploadDoc}>
          <Icon name="cloud-upload-outline" size={60} color={"#45B17F"} />
          <Text style={{ color: docErr ? 'red' : 'grey' }}>{documentTitle}</Text>
        </TouchableOpacity>


        <Button title="Submit" onPress={addDocument} loader={loader} />

      </View>

    </ScrollView>
  );
}
export default AddDoc;

const styles = StyleSheet.create({
  view: {
    marginTop: 20,
    marginHorizontal: 20,
    flexDirection: "row",
    alignItems: 'center'
  },
  container: {
    flex: 1,
    marginHorizontal: 10
  },

  name: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 10,
    marginRight: 20
  },
  name1: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
    margin: 20
  },
  userImage: {
    height: 30,
    width: 30,
    borderRadius: 15,
    marginLeft: 20
  },
  meeting: {
    borderWidth: 1,
    borderColor: 'lightgrey',
    marginTop: 40,
    padding: 20,
    borderRadius: 15,
    backgroundColor: 'white',
    marginHorizontal: 20
  },
  upload: {
    alignItems: 'center',
    justifyContent: "center",
    marginVertical: 40
  },
  nameDoc: {
    color: '#45B17F',
    fontWeight: "700",
    marginBottom: 7
  },
  err: {
    color: 'red',
    fontSize: 12
  },

})