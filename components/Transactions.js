import  transactions  from '../data/Data'
import { pendingTransactions } from '../data/Data'
import { View, Text, TouchableOpacity ,ScrollView } from 'react-native'
import React from 'react'
import tw from 'twrnc'

const Transactions = () => {
  return (
    <ScrollView style={tw`pb-6`}>

    <View style={tw` mt-3`}>
      <Text style={tw`text-gray-800 font-semibold pb-2`}>Recent Transaction</Text>
 {transactions.map((transaction) => (
    <TouchableOpacity style={tw``} key={transaction.id}>
      <View style={tw`flex flex-row items-center py-2 `}>
         <View style={tw`bg-[#FF5400] px-3 py-1 rounded-full`}>
            <Text style={tw`text-white text-lg font-extrabold`}>{transaction.name.slice(0,1)}</Text>
         </View>
         <View style={tw`flex flex-col ml-2`}>
            <Text style={tw`text-gray-600 font-semibold`}>{transaction.name}</Text>
            <Text style={tw`text-gray-400 text-xs`}>{transaction.time}  From {transaction.bank}</Text>
            </View>
            <View style={tw`ml-auto`}>
            <Text style={tw`text-gray-800 font-semibold`}>{transaction.amount}</Text>
            </View>
      </View>
      </TouchableOpacity>
))}

 <Text style={tw`text-gray-800 font-semibold mt-6 pb-2`}>Payments Pending</Text>
{pendingTransactions.map((transactions) => (
      <View style={tw`flex flex-row items-center py-2`} key={transactions.id}>
         <View style={tw`bg-[#FF5400] px-3 py-1 rounded-full`}>
            <Text style={tw`text-white text-lg font-extrabold`}>{transactions.name.slice(0,1)}</Text>
         </View>
         <View style={tw`flex flex-col ml-2`}>
            <Text style={tw`text-gray-600 font-semibold`}>{transactions.name}</Text>
            <Text style={tw`text-gray-400 text-xs`}>{transactions.time}  From {transactions.bank}</Text>
            </View>
            <View style={tw`ml-auto`}>
                <TouchableOpacity>
            <Text style={tw`text-gray-600 text-xs font-medium border border-gray-600 py-[5px] px-2 rounded-md`}>Send Money</Text>
                </TouchableOpacity>
            </View>
      </View>
))} 
    </View>
    </ScrollView>
  )
}

export default Transactions