import React from 'react'
import { StyleSheet, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useTranslation } from 'react-i18next'
import { useTheme, Text, Image } from '@rneui/themed'
import Glacier from '../../../../assets/images/nature/glacier.png'

export default function Head() {
  const { t } = useTranslation()
  const { theme } = useTheme()

  const styles = StyleSheet.create({
    wrapper: {
      backgroundColor: theme.colors.primary,
      height: '30%',
      padding: 20,
      flexDirection: 'row',
    },
    leftWrap: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
    },
    whiteText: {
      color: theme.colors.gray[50],
    },
    orangeText: {
      color: '#E38861',
      fontWeight: 'bold',
    },
    counterWrap: {
      flexDirection: 'column',
      backgroundColor: '#448EF7',
      paddingVertical: 8,
      paddingHorizontal: 10,
      borderRadius: 10,
      alignItems: 'center',
      marginTop: 15,
    },
    counter: {
      flexDirection: 'row',
      alignItems: 'center',
      marginTop: 5,
      gap: 1,
    },
    dayCounter: {
      backgroundColor: theme.colors.white,
      borderRadius: 6,
      paddingHorizontal: 20,
      paddingVertical: 1,
      marginHorizontal: 5,
    },
    image: {
      width: 180,
      height: '100%',
      resizeMode: 'contain',
    },
  })

  return (
    <SafeAreaView style={styles.wrapper}>
      <View style={styles.leftWrap}>
        <View>
          <Text h4 h4Style={styles.whiteText}>
            {t('etic.fullName')}
          </Text>
        </View>
        <View style={styles.counterWrap}>
          <Text style={styles.whiteText}>
            {t('etic.level.basic')} | 2023.5.13
          </Text>
          <View style={styles.counter}>
            <Text style={styles.whiteText}>{t('home.header.remain')}</Text>
            <View style={styles.dayCounter}>
              <Text style={styles.orangeText}>27</Text>
            </View>
            <Text style={styles.whiteText}>
              {t('home.header.day', { count: 1 })}
            </Text>
          </View>
        </View>
      </View>
      <View>
        <Image style={styles.image} source={Glacier} />
      </View>
    </SafeAreaView>
  )
}
