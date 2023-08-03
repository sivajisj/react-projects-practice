import React from 'react'
import Header from './components/Header'
import Balance from './components/Balance'
import IncomeExpenses from './components/IncomeExpenses'
import TransactionList from './components/TransactionList'
import AddTransactions from './components/AddTransactions'
import { GlobalProvider } from './context/GlobalState'


const App = () => {
  return (
    <GlobalProvider>
      <Header/>
      <div className="container">
        <Balance/>
        <IncomeExpenses/>
        <TransactionList/>
        <AddTransactions/>
      </div>
    
    </GlobalProvider>
    
      
  )
}

export default App
