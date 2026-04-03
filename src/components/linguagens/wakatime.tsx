
import React, { useState, useEffect } from 'react';


// Define como é uma linguagem específica retornada pelo WakaTime
export interface WakaLanguage {
  name: string;
  percent: number;
  text: string; // ex: "14 hrs 33 mins"
  color: string;
}

// Define a estrutura principal da resposta
export interface WakaResponse {
  data: {
    languages: WakaLanguage[];
  };
}

const WakatimeLanguages = () => {
  const [languages, setLanguages] = useState<WakaLanguage[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchWakatimeData = async () => {
      try {
        // Substitua essa URL pelo seu endpoint seguro (explico abaixo)
        const API_URL = 'SUA_URL_SEGURA_AQUI'; 
        
        const response = await fetch(API_URL);
        
        if (!response.ok) {
          throw new Error('Falha ao buscar dados do WakaTime');
        }

        const json: WakaResponse = await response.json();
        
        // Salvamos apenas o array de linguagens no estado
        setLanguages(json.data.languages);
      } catch (err) {
        if (err instanceof Error) {
          setError(err.message);
        }
      } finally {
        setLoading(false);
      }
    };

    fetchWakatimeData();
  }, []);

  if (loading) return <p>Carregando linguagens...</p>;
  if (error) return <p>Erro: {error}</p>;

  return (
    <div>
      <h2>Linguagens Mais Usadas (Últimos 7 dias)</h2>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        {languages.map((lang) => (
          <div key={lang.name}>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <span>{lang.name} - {lang.text}</span>
              <span>{lang.percent}%</span>
            </div>
            {/* Barra de progresso customizada */}
            <div style={{ width: '100%', backgroundColor: '#eee', height: '10px', borderRadius: '5px' }}>
              <div 
                style={{ 
                  width: `${lang.percent}%`, 
                  backgroundColor: lang.color || '#000', 
                  height: '100%', 
                  borderRadius: '5px' 
                }} 
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WakatimeLanguages;




