import React, {
  useState,
  useEffect,
  useRef,
  useCallback,
  Fragment,
} from "react";
import { versusCodesSymbols } from "../../data";
import VersusCodesPopup from "./VersusCodesPopup";
import VersusCodesItem from "./VersusCodesItem";
import styles from "./vsScreen.module.css";

const REQUIRED_LETTERS = ["q", "w", "e", "r", "t", "y"];
const winnerCodes = ['311111', '321111', '112111']

export default function VersusCodes() {
  const icons = REQUIRED_LETTERS.map((item) => ({ id: item, iconIdx: 0 }));
  const [selectedIcons, setSelectedIcons] = useState(icons);
  const [code, setCode] = useState('')
 const sound = useRef(new Audio("/public/sound/mortal_kombat_sms.mp3"));

  const newCode = selectedIcons.map(item => versusCodesSymbols[item.iconIdx].id).join('')
  if(winnerCodes.includes(newCode)) {
    setCode(newCode)
    sound.current.play()
  }

  const keyDownHandler = useCallback(
    (e) => {
      const key = e.key.toLowerCase();
      if (!REQUIRED_LETTERS.includes(key)) return;

      const nextSelectedIcons = selectedIcons.map((item) => {
        if (item.id === key) {
          return {
            ...item,
            iconIdx:
              item.iconIdx < versusCodesSymbols.length - 1
                ? item.iconIdx + 1
                : 0,
          };
        }
        return item;
      });
      setSelectedIcons(nextSelectedIcons);
    },
    [selectedIcons]
  );

  useEffect(() => {
    document.addEventListener("keydown", keyDownHandler);
    return () => document.removeEventListener("keydown", keyDownHandler);
  }, [keyDownHandler]);

  return (
    <Fragment>
      <div className={styles.versus_codes}>
        {
            REQUIRED_LETTERS.map((_, index) => (
                <VersusCodesItem 
                    key={index}
                    symbol={versusCodesSymbols[selectedIcons[index].iconIdx]}
                />
            ))
        }
      </div> 
      <VersusCodesPopup code={code} />
    </Fragment>
  );
}
