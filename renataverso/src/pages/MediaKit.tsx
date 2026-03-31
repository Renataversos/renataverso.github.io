import React from 'react';
import { motion } from 'motion/react';
import { useData } from '../context/DataContext';

export const MediaKit: React.FC = () => {
  const { data } = useData();

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="px-6 pb-8 pt-[240px]"
    >
      <div className="border-y-2 border-[#ea92be] py-2 mb-8 bg-[#fcf7f9]">
        <h2 className="font-serif text-2xl font-bold text-magenta text-center">
          Mídia Kit
        </h2>
      </div>

      <div className="bg-[#fcf7f9] rounded-3xl p-6 shadow-md border border-magenta-light relative mb-8">
        <div className="flex flex-col items-center gap-4 mb-6">
          <div className="w-24 h-32 bg-gray-200 arch-image overflow-hidden shadow-lg border-4 border-white">
            <img src={data.settings.profileImage} alt="Renata Lugon" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
          </div>
          <div className="text-center">
            <h3 className="font-serif text-2xl font-bold text-magenta">Renata Lugon</h3>
            <p className="text-sm text-gray-500">Vídeos literários</p>
          </div>
        </div>
        
        <div className="mb-6">
          <h4 className="font-bold text-gray-800 mb-2 text-center">Sobre mim</h4>
          <p className="text-sm text-gray-600 leading-relaxed text-center">
            {data.settings.bio}
          </p>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 mb-8">
        <div className="bg-[#fcf7f9] p-4 rounded-2xl shadow-sm border border-magenta-light text-center">
          <h4 className="text-3xl font-bold text-magenta mb-1">150k</h4>
          <p className="text-xs text-gray-500 uppercase tracking-wider">Seguidores</p>
        </div>
        <div className="bg-[#fcf7f9] p-4 rounded-2xl shadow-sm border border-magenta-light text-center">
          <h4 className="text-3xl font-bold text-magenta mb-1">12%</h4>
          <p className="text-xs text-gray-500 uppercase tracking-wider">Crescimento</p>
        </div>
        <div className="bg-[#fcf7f9] p-4 rounded-2xl shadow-sm border border-magenta-light text-center">
          <h4 className="text-3xl font-bold text-magenta mb-1">8.5%</h4>
          <p className="text-xs text-gray-500 uppercase tracking-wider">Engajamento</p>
        </div>
        <div className="bg-[#fcf7f9] p-4 rounded-2xl shadow-sm border border-magenta-light text-center">
          <h4 className="text-3xl font-bold text-magenta mb-1">350+</h4>
          <p className="text-xs text-gray-500 uppercase tracking-wider">Posts</p>
        </div>
      </div>
    </motion.div>
  );
};
