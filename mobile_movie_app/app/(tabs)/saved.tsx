import { icons } from "@/constants/icons";
import { images } from "@/constants/images";
import * as React from "react";
import { Image, Text, View } from "react-native";

const Saved = () => {
  return (
    <View className="flex-1 bg-primary">
      <Image source={images.bg} className="flex-1 absolute w-full z-0" />
      <View className="flex justify-center items-center flex-1 flex-col gap-5">
        <Image source={icons.save} className="size-10" tintColor="#Fff" />
        <Text className="text-white font-bold text-base">Save</Text>
      </View>
    </View>
  );
};

export default Saved;
