import { offers } from "@/constants";
import cn from "clsx";
import { Fragment } from "react";
import { FlatList, Image, Pressable, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import "./global.css";

export default function Index() {
  return (
    <SafeAreaView>
      <FlatList
        data={offers}
        renderItem={({ item, index }) => {
          const isEven: boolean = index % 2 == 0;

          return (
            <View>
              <Pressable
                className={cn("bg-amber-600 my-3 h-48 rounded-xl", isEven ? 'flex-row-reverse' : 'flex-row')}
                style={{ backgroundColor: item.color }}
              >
                {({ pressed }) => (
                  <Fragment>
                    <View className={"h-full w-1/2"}>
                      <Image
                        source={item.image}
                        className={"size-full"}
                        resizeMode={"contain"}
                      />
                    </View>

                    <View className={"offer-card__info"}>
                      <Text className="h1-bold text-white leading-tight">
                        {item.title}
                      </Text>
                    </View>
                  </Fragment>
                )}
              </Pressable>
            </View>
          )
        }}
      />
    </SafeAreaView>
  );
}