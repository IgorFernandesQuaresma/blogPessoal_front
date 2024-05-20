import React from 'react';

interface BotaoProps {
  texto: string;
  link: string;
}

const Botao: React.FC<BotaoProps> = ({ texto, link }) => {
  return (
    <a href={link} className="text-bege font-sans font-light border border-bege rounded-md px-4 py-2 hover:bg-bege hover:text-branco">
      {texto}
    </a>
  );
};

export default Botao;

