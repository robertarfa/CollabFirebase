import React, { useState } from 'react'
import { LOCALES } from '../../i18nProvider';
import { useDispatch } from 'react-redux'
import { onChangeLanguage } from '../../services/store/reducers/languageReducer'
import Dropdown from 'react-bootstrap/Dropdown';
import { Form } from 'react-bootstrap';
import FlagIcon from '../FlagIcon/FlagIcon';

export default function Flags() {

  const dispatch = useDispatch()

  const fntOnChangeLanguage = (code) => {

    const language = code;
    switch (language) {
      case 'br': return dispatch(onChangeLanguage({ field: 'language', value: LOCALES.PORTUGUESE })); break;
      case 'us': return dispatch(onChangeLanguage({ field: 'language', value: LOCALES.ENGLISH })); break;
      case 'fr': return dispatch(onChangeLanguage({ field: 'language', value: LOCALES.FRENCH })); break;
      case 'de': return dispatch(onChangeLanguage({ field: 'language', value: LOCALES.GERMAN })); break;
      default: return '--'; break;
    }


  }

  const [countries] = useState([
    { code: 'br' },
    { code: 'de' },
    { code: 'fr' },
    { code: 'us' },
  ]);

  const [toggleContents, setToggleContents] = useState(<FlagIcon code={'us'} />);
  const [selectedCountry, setSelectedCountry] = useState();

  return (
    <div className="App">
      <Form>
        <Dropdown
          onSelect={eventKey => {
            const { code } = countries.find(({ code }) => eventKey === code);

            setSelectedCountry(eventKey);
            setToggleContents(<FlagIcon code={code} />);
          }}
        >
          <Dropdown.Toggle variant="secondary" id="dropdown-flags" className="text-left" style={{ width: 300 }}>
            {toggleContents}
          </Dropdown.Toggle>

          <Dropdown.Menu>
            {countries.map(({ code, title }) => (
              <Dropdown.Item key={code} eventKey={code} onClick={() => fntOnChangeLanguage(code)}><FlagIcon code={code} /></Dropdown.Item>
            ))}
          </Dropdown.Menu>
        </Dropdown>
      </Form>
    </div>
  );


  // return (
  //   <div>
  //     <button onClick={() => fntOnChangeLanguage(LOCALES.ENGLISH)}>English</button>
  //     <button onClick={() => fntOnChangeLanguage(LOCALES.FRENCH)}>French</button>
  //     <button onClick={() => fntOnChangeLanguage(LOCALES.GERMAN)}>German</button>
  //   </div>
  // )
}
