import React, {useState, useEffect} from 'react';
import axios from 'axios';

const Convert = ({ term, language }) => {
    const [ translatedLanguage, setTranslatedLanguage ] = useState(null);
    useEffect(() => {
        const translation = async () => {
            const {data} = await axios.post('https://translation.googleapis.com/language/translate/v2', {}, {
                    params: {
                        q: term,
                        target: language?.value,
                        key: 'AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM'
                    }
            });
            setTranslatedLanguage(data.data.translations[0].translatedText);
        }
        const timeOutId = setTimeout(() => {
            translation();
        }, 500);

        return (
            () => clearTimeout(timeOutId)
        );
    }, [language, term]);

    return (
        <div style={{ marginTop: '20px' }}>
            <h1>Output:</h1>
            <span>{translatedLanguage}</span>
        </div>
    )
}

export default Convert;