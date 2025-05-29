import {
  ModuleFields,
  TextField,
  RichTextField,
  ImageField,
} from '@hubspot/cms-components/fields';
import { logInfo, RichText, useAfterIslandHydration } from '@hubspot/cms-components';
import logo from '../../../assets/sprocket.svg';
import styles from '../../../styles/getting-started.module.css';
import { useState } from 'react';

//same as module.html file in HubL
export function Component({ fieldValues, hublParameters, headline }) {
  const [count, setCount] = useState(0);
  const [name, setName] = useState('');

  const { src, alt, width, height } = fieldValues.logo;
  const { brandColors } = hublParameters;

  const isHydrated = useAfterIslandHydration();

  return (
    <div
      className={styles.wrapper}
      style={{
        backgroundColor: brandColors?.color,
        opacity: brandColors?.opacity,
      }}
    >
      <input 
        name="name" 
        value={name} 
        onChange={(e) => setName(e.target.value)} 
      />
      <div>This is the count: {count}</div>
      <button onClick={() => setCount(count + 1)}>click me</button>
      <img src={src} alt={alt} width={width} height={height} />
      <h1>{fieldValues.headline}</h1>
      <RichText fieldPath="gettingStarted" />
      <div className={styles.buttons}>
        <a href="https://github.com/HubSpot/cms-react/tree/main/examples">
          Examples
        </a>
        <a href="https://github.hubspot.com/cms-react/">Read the Docs AGAIN</a>
      </div>
    </div>
  );
}

const richTextFieldDefaultValue = `
  <div>
    <div>
      <span>
        Deploy to your theme by running <pre>npm run deploy</pre> from the root directory!
      </span>
    </div>
  </div>
`;

//same as fields.json
export const fields = (
  <ModuleFields>
    <ImageField
      name="logo"
      label="Logo"
      default={{ src: logo, height: 100, alt: 'HubSpot logo' }}
      resizable={true}
    />
    <TextField
      name="headline"
      label="Headline"
      default="Getting Started with CMS Reacts"
    />
    <RichTextField
      name="gettingStarted"
      label="Getting Started"
      default={richTextFieldDefaultValue}
    />
  </ModuleFields>
);

//same as meta.json
export const meta = {
  label: 'Getting Started with CMS React',
};
