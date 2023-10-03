import {createSlice} from "@reduxjs/toolkit"

const  initialState = {
    currentAccount: {
        id: 1,
        username: "artefilex",
        fullName: "Barış Tunçdemir",
        avatar : "https://pbs.twimg.com/profile_images/1663136976327811072/p2zKMWq2_normal.jpg"
    },
    accounts: [
        {
            id: 1,
            username: "artefilex",
            fullName: "Barış Tunçdemir",
            avatar : "https://pbs.twimg.com/profile_images/1663136976327811072/p2zKMWq2_normal.jpg"
        },
        {
            id: 2,
            username: "baris_tuncdemir",
            fullName: "Barış Tunçdemir",
            avatar : "https://pbs.twimg.com/profile_images/1663136976327811072/p2zKMWq2_normal.jpg"
        }
    ]
}

const auth  = createSlice({
    name: "auth",
    initialState,
    reducers:{
        _addAccounts : (state,action) =>{
            state.accounts.push(action.payload)
        },
        _removeAccount : (state,action) =>{
                state.accounts = state.accounts.filter((account) => account.id !== action.payload ) 
                if(state.currentAccount && action.payload === state.currentAccount.id){
                    this._setCurrentAcount(false)
                }
        },
        _setCurrentAcount: (state,action) =>{
               state.currentAccount = action.payload
        }
    }
})

export const { _addAccounts, _removeAccount,_setCurrentAcount} =  auth.actions

export default auth.reducer