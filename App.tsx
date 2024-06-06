import React, { useState, ChangeEvent, FormEvent } from 'react';
// In your index.tsx file
import 'tailwindcss/tailwind.css';

const FormulaireCreerCompte: React.FC = () => {
  const [nom, setNom] = useState('');
  const [prenom, setPrenom] = useState('');
  const [email, setEmail] = useState('');
  const [motDePasse, setMotDePasse] = useState('');
  const [age, setAge] = useState('');
  const [image, setImage] = useState<File | null>(null);
  const [socialMedia, setSocialMedia] = useState('');
  const [additionalInfo, setAdditionalInfo] = useState('');

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Add your form submission logic here
    console.log('Form submitted!');
  };

  return (
    <section id="create-account" className="bg-gradient-to-br from-purple-600 to-indigo-600 p-8 shadow-lg rounded-lg mb-8">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-6 text-white text-center">Créer un compte</h2>
        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <input
            type="text"
            placeholder="Nom"
            value={nom}
            onChange={(e) => setNom(e.target.value)}
            className="bg-transparent border-b border-white text-white py-3 px-4 focus:outline-none focus:border-indigo-200"
            required
          />
          <input
            type="text"
            placeholder="Prénom"
            value={prenom}
            onChange={(e) => setPrenom(e.target.value)}
            className="bg-transparent border-b border-white text-white py-3 px-4 focus:outline-none focus:border-indigo-200"
            required
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="bg-transparent border-b border-white text-white py-3 px-4 focus:outline-none focus:border-indigo-200"
            required
          />
          <input
            type="password"
            placeholder="Mot de passe"
            value={motDePasse}
            onChange={(e) => setMotDePasse(e.target.value)}
            className="bg-transparent border-b border-white text-white py-3 px-4 focus:outline-none focus:border-indigo-200"
            required
          />
          <input
            type="number"
            placeholder="Âge"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            className="bg-transparent border-b border-white text-white py-3 px-4 focus:outline-none focus:border-indigo-200"
            required
          />
          <input
            type="file"
            onChange={(e) => e.target.files && setImage(e.target.files[0])}
            className="bg-transparent border-b border-white text-white py-3 px-4 focus:outline-none focus:border-indigo-200"
            required
          />
          <input
            type="text"
            placeholder="Liens des réseaux sociaux"
            value={socialMedia}
            onChange={(e) => setSocialMedia(e.target.value)}
            className="bg-transparent border-b border-white text-white py-3 px-4 focus:outline-none focus:border-indigo-200"
            required
          />
          <textarea
            placeholder="Informations supplémentaires"
            value={additionalInfo}
            onChange={(e) => setAdditionalInfo(e.target.value)}
            className="bg-transparent border-b border-white text-white py-3 px-4 focus:outline-none focus:border-indigo-200"
          ></textarea>
          <button
            type="submit"
            className="bg-white text-purple-600 py-3 px-8 rounded-lg hover:bg-purple-600 hover:text-white focus:outline-none focus:bg-purple-600 focus:text-white mt-8 mx-auto md:ml-0 md:col-span-2"
          >
            Créer le compte
          </button>
        </form>
      </div>
    </section>
  );
};

export default FormulaireCreerCompte;
