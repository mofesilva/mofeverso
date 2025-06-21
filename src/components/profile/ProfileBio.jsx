import React from 'react';
import SectionTitle from '../SectionTitle';

function ProfileBio() {
    return (
        <div id="bio" className="font-bold w-full lg:w-1/2 justify-self-center">
            <SectionTitle title="Bio" />
            <p className="text-md font-league-spartan text-justify font-light text-white pt-2 pr-4 pl-4">
                Apaixonado por criar coisas incríveis e resolver problemas. Vejo nessas duas áreas o núcleo das minha habilidades. Estudar é parte fundamental nessa jornada. Gosto de adquirir e compartilhar conhecimento e estou sempre em busca de crescer e explorar novos caminhos. Curioso por natureza, encaro cada projeto como uma oportunidade de inovar e fazer a diferença.
            </p>
        </div>
    )
}

export default ProfileBio;