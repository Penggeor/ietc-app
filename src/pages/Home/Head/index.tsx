import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { ScrollView, StyleSheet, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useTranslation } from 'react-i18next'
import { useTheme, Text } from '@rneui/themed'

export default function Head() {
  const { t } = useTranslation()
  const { theme } = useTheme()

  const styles = StyleSheet.create({
    panel: {
      backgroundColor: theme.colors.primary,
      height: '30%',
      text: {
        color: theme.colors.gray50,
      },
    },
  })
  const Stack = createStackNavigator()

  return (
    <SafeAreaView style={styles.panel}>
      <View>
        <ScrollView>
          <View>
            <Text h4 h4Style={styles.panel.text}>
              {t('etic.fullName')}
            </Text>
          </View>
          <View>
            <Text style={styles.panel.text}>
              {t('etic.level.basic')} | 2023.5.13
            </Text>
            <Text style={styles.panel.text}>
              {t('remain')}
              <View>
                <Text style={styles.panel.text}>27</Text>
              </View>
              {t('day', { count: 1 })}
            </Text>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  )
}
