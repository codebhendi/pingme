import * as ImagePicker from "expo-image-picker";

const ImagePickerComponent:React.FC = () => {
  const pickImageAsync = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled) {
      console.log(result);
    } else {
      alert("You did not select any image.");
    }
  };

  return null;
};

export default ImagePickerComponent;
