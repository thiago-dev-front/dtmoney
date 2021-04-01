
import { GlobalStyle } from './styles/global';
import Modal from 'react-modal';
import {Header} from './components/Header';
import {Dashboard} from './components/Dashboard';
import { useState } from 'react';
import {NewTransactionModal} from './components/NewTransactionModal';

 Modal.setAppElement('#root')
 export function App() {

  const [isNewTransactionModalOpen, setIsNewTrasactionModalOpen ] = useState(false);

  function handleOpenNewTrasactionModal() {
    setIsNewTrasactionModalOpen(true)
  }

  function handleCloseNewTrasactionModal() {
    setIsNewTrasactionModalOpen(false)
  }
  
  return (
    <>
    <Header onOpenNewTransactionModal={handleOpenNewTrasactionModal}/>
    <Dashboard />
    <NewTransactionModal 
     isOpen={isNewTransactionModalOpen}
     onRequestClose={handleCloseNewTrasactionModal}
     />
    <GlobalStyle />
    </>
  );
} 
 

