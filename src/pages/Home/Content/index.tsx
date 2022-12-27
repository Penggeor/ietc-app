import React from 'react'
import { StyleSheet, View } from 'react-native'
import { useTranslation } from 'react-i18next'
import { Text } from '@rneui/themed'
import FontIcon from 'react-native-vector-icons/FontAwesome5'
import LinearGradient from 'react-native-linear-gradient'

export default function Content() {
  const { t } = useTranslation()

  const cards = [
    {
      title: t('home.cards.reciteWord.title'),
      description: t('home.cards.reciteWord.description'),
      enterComponent: '',
      settingsComponent: '',
      disabled: false,
    },
    {
      title: t('home.cards.practiceListening.title'),
      description: t('home.cards.practiceListening.description'),
      enterComponent: '',
      settingsComponent: '',
      disabled: true,
    },
    {
      title: t('home.cards.modelComposition.title'),
      description: t('home.cards.modelComposition.description'),
      enterComponent: '',
      settingsComponent: '',
      disabled: true,
    },
    {
      title: t('home.cards.mockTest.title'),
      description: t('home.cards.mockTest.description'),
      enterComponent: '',
      settingsComponent: '',
      disabled: true,
    },
  ]

  const styles = StyleSheet.create({
    wrapper: {
      display: 'flex',
      flexDirection: 'row',
      flexWrap: 'wrap',
      paddingTop: 20,
      paddingLeft: 20,
      paddingRight: 20,
    },
    cardWrap: {
      width: '50%',
      height: 150,
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-around',
      padding: 10,
    },
    cardTitle: {
      width: '100%',
      textAlign: 'center',
    },
    cardDescription: {
      width: '100%',
      textAlign: 'center',
      textAlignVertical: 'center',
    },
    iconWrap: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      width: '100%',
    },
  })

  return (
    <View style={styles.wrapper}>
      {cards.map((card, index) => (
        <View
          style={{
            ...styles.cardWrap,
            ...{
              background: 'linear-gradient(90deg,#4081F6FF 0%,#8621F5FF 100%)',
            },
          }}
          key={card.title}
        >
          <View style={styles.iconWrap}>
            <FontIcon name="sliders-h" size={20} />
            <FontIcon name="arrow-right" size={20} />
          </View>
          <LinearGradient colors={['#4c669f', '#3b5998', '#192f6a']}>
            <Text h4 h4Style={styles.cardTitle}>
              {card.title}
            </Text>
          </LinearGradient>
          <Text style={styles.cardDescription}>{card.description}</Text>
        </View>
      ))}
    </View>
  )
}
