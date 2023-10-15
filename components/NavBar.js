import { View, Text } from 'react-native'
import React from 'react'
import tw from 'twrnc'  
import { useState } from 'react'
import { 
  HomeIcon,
  UserIcon,
  ArrowsRightLeftIcon,
  CurrencyDollarIcon
} from 'react-native-heroicons/solid'


const NavBar = () => {
    const [active, setActive] = useState("Home");
  return (
    
    <View style={tw`flex flex-row self-center absolute bottom-[-3] `}>
     
      <View style={tw`mr-4  flex items-center `}>
        <HomeIcon 
        {...active=='Home' ? {style:{...tw`text-rose-500 `}} : {style:{...tw`text-slate-400`}} }
        
         name='home' size={25} onPress={()=>{setActive("Home")}}/>
              
              <Text 
              {...active=='Home' ? {style:{...tw`text-rose-500 text-xs`}} : {style:{...tw`text-slate-400 text-xs`}} }
                
              >Home</Text> 
            </View>
            
             <View style={tw` ml-10   flex flex-col items-center`}>
              <ArrowsRightLeftIcon 
              {...active=='Payments' ? {style:{...tw`text-rose-500 `}} : {style:{...tw`text-slate-400`}} }
              
              name='arrows-right-left' size={25} onPress={()=>{setActive("Payments")}}/>
               
               <Text
               {...active=='Payments' ? {style:{...tw`text-rose-500 text-xs`}} : {style:{...tw`text-slate-400 text-xs`}} }
  
                >Payments</Text>
             </View>

             <View style={tw`ml-14   flex flex-col items-center`}>    
             <CurrencyDollarIcon 
             {...active=='Expenses' ? {style:{...tw`text-rose-500 `}} : {style:{...tw`text-slate-400`}} }
           
              name='currency-dollar' size={25} onPress={()=>{setActive("Expenses")}}/>
              
               <Text 
               {...active=='Expenses' ? {style:{...tw`text-rose-500 text-xs`}} : {style:{...tw`text-slate-400 text-xs`}} }
              
               >Expenses</Text>
             </View>

            <View style={tw` ml-14  flex flex-col items-center`}>
              <UserIcon 
              {...active=='Profile' ? {style:{...tw`text-rose-500 `}} : {style:{...tw`text-slate-400`}} }
             
               name='user' size={25} onPress={()=>{setActive("Profile")}}/>
             
             <Text 
             {...active=='Profile' ? {style:{...tw`text-rose-500 text-xs`}} : {style:{...tw`text-slate-400 text-xs`}} }
            
             >Profile</Text>
            </View>
            </View>
  )
}

export default NavBar