import React from 'react';

import Menu from '../../components/Menu/Menu';
import Navegacao from '../../components/Navegacao/Navegacao';
import Comunidade from '../Comunidade/Comunidade';

const Forum = () => {
    require ('./Forum.css')
    document.body.style.backgroundImage='none'

    return ( 
        <div id='forum'>

            <Menu/>
            <Navegacao/>
            <h1 className='TituloPagina'> Bem vindo a comunidade tal </h1>

            <div className='containerForum'>
                <div className='nomeDaComunidade'>
                    <img className='capaComunidade' src='https://i.imgur.com/6lB93nT.png'/>
                    <h3> As meninas super poderosas</h3>
                    <p>doutrinadores das meninas super poderosas </p>
                    <button>ENTRAR AGORA</button>
                </div>

                <div className='ladoDireito'>

                    <input className='publicaForum' placeholder='Faça uma publicação...'/>

                <div className='post'>
                    <div className='postNomeForum'>
                        <img src='https://i.imgur.com/ETnEWOp.png'/>
                        <p>NOME DE QUEM POSTOU</p>
                    </div>
                    <hr/>

                    <h3>Lorem Ipsum</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce commodo mauris nec dui pellentesque,
                        eu dictum ligula feugiat. Donec hendrerit ultrices neque, a luctus lacus. Aliquam aliquet sapien
                        vel dui sagittis, vel convallis risus tempus. Nullam tempus aliquam efficitur. Donec at ante mi. 
                        Donec pulvinar orci et ultricies elementum. Morbi sagittis mauris elit, sed gravida arcu volutpat 
                        in. Nunc vehicula non enim id bibendum. Ut scelerisque sit amet dui sed cursus. Sed hendrerit et 
                        nisi vitae bibendum. Proin ut urna at libero interdum gravida. Quisque lacinia vel nulla nec 
                        pharetra. Nullam ornare risus eu nisl maximus mattis. Morbi at mauris leo. Nulla vitae felis in 
                        ante fringilla auctor. Ut et elit eu arcu commodo tristique.

                        Integer quis vestibulum nisl. Suspendisse tempor magna sed erat lobortis, eu fermentum sapien 
                        ullamcorper. Sed non arcu ac tortor tincidunt accumsan eu sed risus. Pellentesque auctor augue
                        id scelerisque gravida. Etiam posuere lorem eget massa pulvinar, nec cursus nunc viverra. 
                        Vestibulum convallis dui quis lectus ultricies, sit amet scelerisque metus dapibus. Vivamus 
                        id eros urna. In id arcu aliquet, pretium felis ac, laoreet mauris.</p>
                        <hr/>
                    <div className='botoesForum'>
                        <button className='botao'>curtir <i class="fa-solid fa-thumbs-up"></i></button>
                        <p>|</p>
                        <button className='botao'> comentar <i class="fa-solid fa-comment"></i></button>
                        <p>|</p>
                        <button className='botao'>salvar <i class="fa-solid fa-bookmark"></i> </button>
                    </div>

                </div>
                </div>

            </div>

        </div>

     );
}
 
export default Forum;