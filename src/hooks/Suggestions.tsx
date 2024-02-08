import { useState, useEffect } from 'react';
import OpenAI from 'openai';
import { OPENAI_API_KEY } from '@env';

const useMovieSuggestion = (): {
  movieSuggestion: object | null;
  error: string | null;
} => {
  const [movieSuggestion, setMovieSuggestion] = useState<object | null>(null);
  const [error, setError] = useState<string | null>(null);

  const getObjectData = async (count = '1') => {
    // This code is for v4 of the openai package: npmjs.com/package/openai
    const openai = new OpenAI({
      apiKey: OPENAI_API_KEY,
    });

    const data = await openai.chat.completions.create({
      model: 'gpt-3.5-turbo',
      messages: [
        {
          role: 'user',
          content: `write a JSON object of random movie suggestion without any comments or explanations.`,
        },
      ],
      temperature: 1,
      max_tokens: 400,
      top_p: 1,
    });

    let resp;

    try {
      const code = data.choices[0].message.content?.toString() || '';
      resp = JSON.parse(code);
      return resp;
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getObjectData()
      .then(data => {
        setMovieSuggestion(data);
      })
      .catch(err => console.log('😢', err));
  });

  return { movieSuggestion, error };
};

export default useMovieSuggestion;
