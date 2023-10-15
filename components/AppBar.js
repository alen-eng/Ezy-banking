import { View } from 'react-native'
import React from 'react'
import  Bell  from 'react-native-vector-icons/Fontisto'
import Question from 'react-native-vector-icons/Octicons'
import Menu from 'react-native-vector-icons/Feather'
import  tw from 'twrnc'

const AppBar = () => {
  return (
    <View style={tw`flex flex-row justify-between`}>
      <Menu style={tw` text-slate-800`} name='menu' size={25}/>
      <View style={tw`flex flex-row `}>
      <Bell style={tw`text-slate-600`} name='bell'  size={25}/>
      <View style={tw`bg-red-400 absolute rounded-full h-2 w-2 ml-3`}></View>
      <Question style={tw`text-slate-600 pl-8`} name='question'  size={25}/>
      </View>
    </View>
  )
}

export default AppBar