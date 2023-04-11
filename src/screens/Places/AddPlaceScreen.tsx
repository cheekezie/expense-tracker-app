import { useLayoutEffect, useState } from "react";
import ErrorOverlay from "../../components/UI/Indicator/ErrorOverlay";
import { ErrorDataI } from "../../types/props";
import { View } from "react-native";
import PlaceForm from "../../components/Places/PlaceForm";
import { FormStyles } from "../../styles/FormStyles";
import { GenericNavPropsI } from "../../types/navigation";

const AddPlaceScreen = ({ navigation }: GenericNavPropsI) => {
  const [isLoading, setLoading] = useState(false);
  const [isError, setError] = useState<ErrorDataI>({
    isError: false,
  });
  // const editMode = !!route.params?.data;
  // const expenseToEdit = route.params?.data as ExpensesI;
  const editMode = false;

  const resetError = () => {
    setError({ isError: false });
  };

  const handleConfirm = () => {};

  useLayoutEffect(() => {
    navigation.setOptions({
      title: editMode ? "Edit Place" : "Add Place",
    });
  }, [navigation]);

  if (isError.isError && !isLoading) {
    return (
      <ErrorOverlay
        title={isError?.title}
        message={isError?.message}
        onPress={resetError}
        buttonLabel={isError?.buttonLabel}
      />
    );
  }
  return (
    <View style={FormStyles.container}>
      <PlaceForm
        onSubmit={handleConfirm}
        buttonLabel={editMode ? "Save Changes" : "Submit"}
        isLoading={isLoading}
      />
    </View>
  );
};

export default AddPlaceScreen;
