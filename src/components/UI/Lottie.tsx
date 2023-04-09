import LottieView from "lottie-react-native";
import { useEffect, useRef } from "react";
import { StyleSheet, View } from "react-native";

const Lottie = ({ path }: { path: string }) => {
  const animation = useRef<any>(null);

  useEffect(() => {
    animation.current?.play();
  }, [animation]);

  return (
    <View style={styles.animationContainer}>
      <LottieView
        autoPlay
        ref={animation}
        style={{
          width: 100,
          height: 100,
        }}
        source={require("../../../assets/lottie/auth.json")}
      />
    </View>
  );
};

export default Lottie;

const styles = StyleSheet.create({
  animationContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
  buttonContainer: {
    paddingTop: 20,
  },
});
