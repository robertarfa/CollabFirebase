import React, { useState } from 'react'
import { LOCALES } from '../../i18nProvider';
import { useDispatch } from 'react-redux'
import { onChangeLanguage } from '../../services/store/reducers/languageReducer'
import Dropdown from 'react-bootstrap/Dropdown';
import { Form } from 'react-bootstrap';
import FlagIcon from '../FlagIcon/FlagIcon';
import { FlagContainer } from './styled'

export default function Flags() {

  const dispatch = useDispatch()

  const fntOnChangeLanguage = (code) => {

    const language = code;
    switch (language) {
      case 'br': return dispatch(onChangeLanguage({ field: 'language', value: LOCALES.PORTUGUESE }));
      case 'us': return dispatch(onChangeLanguage({ field: 'language', value: LOCALES.ENGLISH }));
      case 'fr': return dispatch(onChangeLanguage({ field: 'language', value: LOCALES.FRENCH }));
      case 'de': return dispatch(onChangeLanguage({ field: 'language', value: LOCALES.GERMAN }));
      default: return '--';
    }


  }

  const [countries] = useState([
    { code: 'br' },
    { code: 'de' },
    { code: 'fr' },
    { code: 'us' },
  ]);

  const [toggleContents, setToggleContents] = useState(<FlagIcon code={'us'} />);

  return (
    <FlagContainer>
      <Form>
        <Dropdown
          onSelect={eventKey => {
            const { code } = countries.find(({ code }) => eventKey === code);

            setToggleContents(<FlagIcon code={code} />);
          }}
        >
          <Dropdown.Toggle id="dropdown-flags" className="mx-3 my-2 w-auto" style={{ background: 'transparent', border: 'none', color: 'black' }}>
            {toggleContents}
          </Dropdown.Toggle>

          <Dropdown.Menu >
            {countries.map(({ code, title }) => (
              <Dropdown.Item key={code} eventKey={code} onClick={() => fntOnChangeLanguage(code)}><FlagIcon code={code} /></Dropdown.Item>
            ))}
          </Dropdown.Menu>
        </Dropdown>
      </Form>
    </FlagContainer>
  );

}
