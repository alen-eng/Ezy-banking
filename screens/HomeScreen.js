import AppBar from '../components/AppBar'
import NavBar from '../components/NavBar'
import Transactions from '../components/Transactions'
import { View, Text, SafeAreaView, Touchable, TouchableOpacity } from 'react-native'
import { useState } from 'react'
import React from 'react'
import  tw from 'twrnc'
import QrCodeScanner from 'react-native-vector-icons/MaterialIcons'
import Right from 'react-native-vector-icons/AntDesign'
import Scan1 from 'react-native-vector-icons/AntDesign'
import BankOutline from 'react-native-vector-icons/MaterialCommunityIcons'
import AtSharp from 'react-native-vector-icons/Ionicons'
import FileText from 'react-native-vector-icons/Feather'
import CopyOutline from 'react-native-vector-icons/Ionicons' 
import { LinearGradient } from "expo-linear-gradient";
const HomeScreen = () => {
    const [active, setActive] = useState("Account");
  return (
    <SafeAreaView style={tw`flex-1 p-6 bg-white mt-4`}>
        <View style={tw`flex flex-1 `}>

        <AppBar />

        <View style={tw`mt-10`}>

        <View style={tw`flex flex-row`}>
            <Text {...active=='Account' ? {style:{...tw`text-sm text-white font-bold bg-slate-800 px-4 py-1 border border-slate-800 rounded`}} : {style:{...tw`text-sm bg-white font-bold text-slate-800 px-4 py-1 border border-slate-800 rounded`}} }
             onPress={()=>{setActive("Account")}}>Account</Text>
              <Text {...active=='Debit Card' ? {style:{...tw`text-sm ml-2 text-white font-bold bg-slate-800 px-4 py-1 border border-slate-800 rounded`}} : {style:{...tw`text-sm ml-2 bg-white font-bold text-slate-800 px-4 py-1 border border-slate-800 rounded`}} }
             onPress={()=>{setActive("Debit Card")}}>Debit Card</Text>
              <Text {...active=='Loans' ? {style:{...tw`text-sm ml-2 text-white font-bold bg-slate-800 px-4 py-1 border border-slate-800 rounded`}} : {style:{...tw`text-sm ml-2 bg-white font-bold text-slate-800 px-4 py-1 border border-slate-800 rounded`}} }
             onPress={()=>{setActive("Loans")}}>Loans</Text>
          </View>

          <LinearGradient
             colors={['#EE0979', '#f92f00']}
             style={tw`rounded-xl mt-4`}
             start={{ x: 0, y: 1 }}
             end={{ x: 1, y: 1 }}>
                <View style={tw`pl-6 pr-24 pt-2 pt-6 pb-2 `}>

                <LinearGradient
             colors={['#ff6691','#ff6691','#ff6691', '#F19E93']}
             style={tw`px-4 py-2 rounded-lg`}
             start={{ x: 0, y: 1 }}
             end={{ x: 1, y: 1 }}>
    
                     <Text style={tw`text-white opacity-70 font-medium`}>Wallet balance</Text>
                     <Text style={tw`text-white mt-1 text-xl font-bold`}>$321,500.00</Text>
                    
  </LinearGradient>
                </View>
                <View style={tw`flex flex-row pl-7 items-center text-white`}>
                   <Text style={tw`text-white text-xs opacity-70`}>UPI ID : 2121333456@farmaxis </Text>
                    <CopyOutline style={tw`text-white ml-1`} name='copy-outline' size={15}/>
                </View>
                <View style={tw`flex items-start pl-7 pb-4`}>
                <TouchableOpacity style={tw`bg-gray-800 py-2 px-6 rounded-full mt-4`}>
                    <View style={tw`flex flex-row items-center`}>
                    <Text style={tw`text-gray-100 text-base font-semibold`}>Add money</Text>
                    <Right style={tw`text-white mt-1 ml-1`} name='right' size={12}/>
                    </View>
                    </TouchableOpacity>
                </View>
          </LinearGradient>

          <View style={tw`mt-4 px-2 py-3 flex flex-row justify-between`}>

            <View style={tw`flex items-center`}> 
            <View style={tw`p-2 border border-gray-200 rounded`}>
            <TouchableOpacity>
            <BankOutline style={tw`text-slate-600`} name='bank' size={25}/>
            </TouchableOpacity>
            </View>
            <View style={tw`flex flex-col items-center p-1`}>
                <Text style={tw`text-slate-400 text-xs`}>Bank</Text>
                <Text style={tw`text-slate-400 text-xs`}>transfer</Text>
            </View>
            </View>

           <View style={tw`flex items-center `}>
           <View style={tw`p-2 border border-gray-200 rounded`}>
            <TouchableOpacity>
            <Scan1 style={tw`text-slate-600 `} name='scan1' size={25}/>
            </TouchableOpacity>
            </View>
            <View style={tw`flex flex-col items-center p-1`}>
                <Text style={tw`text-slate-400 text-xs`}>Scan</Text>
                <Text style={tw`text-slate-400 text-xs`}>QR Code</Text>
            </View>
            </View>

            <View style={tw`flex items-center`}> 
            <View style={tw`p-2 border border-gray-200 rounded`}>
                <TouchableOpacity>
            <AtSharp style={tw`text-slate-600 `} name='at-sharp' size={25}/>
            </TouchableOpacity>
            </View>
            <View style={tw`flex flex-col items-center p-1`}>
                <Text style={tw`text-slate-400 text-xs`}>UPI </Text>
                <Text style={tw`text-slate-400 text-xs`}>transfer</Text>
            </View>
            </View>

            <View style={tw`flex items-center`}> 
            <View style={tw`p-2 border border-gray-200 rounded`}>
                <TouchableOpacity>
            <FileText style={tw`text-slate-600 `} name='file-text' size={25}/>
                </TouchableOpacity>
            </View>
            <View style={tw`flex flex-col items-center p-1`}>
                <Text style={tw`text-slate-400 text-xs`}>View</Text>
                <Text style={tw`text-slate-400 text-xs`}>Expenses</Text>
            </View>
            </View>

          </View>

        </View>

        <Transactions/>

        <View style={tw`flex items-center bottom-14 `}>
            <TouchableOpacity>
            <View style={tw`flex flex-row px-2 py-2 rounded-lg  bg-gray-800 justify-center `}>
            <QrCodeScanner style={tw`text-white`} name='qr-code-scanner' size={20}/>
            <Text style={tw` ml-2 text-white`}>Scan & Pay</Text>
            </View>
            </TouchableOpacity> 
        </View>

    
          <NavBar/>
    
        </View>
    </SafeAreaView>
  )
}

export default HomeScreen