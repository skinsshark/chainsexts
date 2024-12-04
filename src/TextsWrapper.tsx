import { useState } from 'react';
import texts from './data/texts.json';
import styles from './TextsWrapper.module.css';

type TextData = {
  message: string;
  title: string;
};

function Text({ text }: { text: TextData }) {
  const [copiedText, setCopiedText] = useState('Copy to clipboard');
  const copyToClipboard = () => {
    navigator.clipboard
      .writeText(text.message)
      .then(() => {
        setCopiedText('Copied!');
      })
      .catch((error) => {
        setCopiedText('Failed to copy… try again?');
      });
  };

  return (
    <div className={styles.textMessageWrapper}>
      <div className={styles.textHeader}>
        <h4>{text.title}</h4>
        <button className={styles.copyButton} onClick={copyToClipboard}>
          {copiedText}
        </button>
      </div>
      <p className={styles.message}>{text.message}</p>
    </div>
  );
}

function TextsWrapper() {
  return (
    <div className={styles.wrapper}>
      {texts.map((text: TextData, i: number) => (
        <Text text={text} key={i} />
      ))}
    </div>
  );
}

export default TextsWrapper;
