import { useContext } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import { LanguageContext } from '../contexts/LanguageContext';
import en from '../assets/images/en.png'
import mm from '../assets/images/mm.png'


function LanguageDropdown() {
    const { updateLanguage, lan } = useContext(LanguageContext);
    
  return (
    <Dropdown>
      <Dropdown.Toggle variant="light" id="dropdown-basic">
        <img src={lan === 'en' ? en : mm} width="20px" height="20px" className='rounded-circle' alt="" />
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item onClick={() => updateLanguage('en')}>
            <img src={en} width="20px" height="20px" className='rounded-circle' alt="" />
            <span className="ms-2">English</span>
            
        </Dropdown.Item>
        <Dropdown.Item onClick={() => updateLanguage('mm')}>
            <img src={mm} width="20px" height="20px" className='rounded-circle' alt="" />
            <span className="ms-2">မြန်မာ</span>
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default LanguageDropdown;