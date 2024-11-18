import React,{useState} from 'react';
import NoteContext from './NoteContext';

const NoteState = (props) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [toastMessage, setToastMessage] = useState('');
    const [isToastVisible, setIsToastVisible] = useState(false);
    return (
        <NoteContext.Provider value={{isMenuOpen,setIsMenuOpen,toastMessage,setToastMessage,isToastVisible,setIsToastVisible}}>
            {props.children}
        </NoteContext.Provider>
    );
};

export default NoteState;