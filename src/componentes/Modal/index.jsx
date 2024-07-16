import { GrClose } from "react-icons/gr";
import styled from 'styled-components';
import { useContext, useEffect } from 'react';
import FormInput from '..FormInput';
import OptionInput from '..OptionInput';
import ActionBtn from '../ActionBtn';
import { ContextoGlobal } from '../../Contexto';

const Overlay = styled.div`
    background: var(--gris);
    position: fixed;
    top: 0; left: 0;
    right: 0; bottom: 0;
    z-index: 5;
`;

const DialogoS = styled.dialog`
    position: absolute;
    background: var(--bk-modal);
    width: 90%;
    top: 24px;
    margin: 0 auto;
    border-radius: 12px;
    border: 5px solid #6df;
    padding: 40px 10px;
    z-index: 10;

    @media (width > 980px) {
        width: 80%;
        top: 40px;
        padding: 50px 120px;
    }
`;

const TituloS = styled.legend`
    color: var(--main-blue);
    font-size: 3.3rem;
    font-weight: bold;
    text-transform: uppercase;

    @media (width > 980px) {
        font-size: 6rem;
        align-self: flex-start;
    }
`;

const FormS = styled.form`
    position: relative;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 30px;
`;

const BtnClose = styled.button`
    position: absolute;
    top: -40px;
    right: 5px;
    height: 50px;
    width: 50px;
    background: transparent;
    border: none;
    cursor: pointer;

    img {
        width: 100%;
    }

    @media (width > 980px) {
        right: -120px;
    }
`

const BtnContenedor = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;

    @media (width > 980px) {
        flex-direction: row;
        justify-content: space-evenly;
        width: 100%;
    }
`;

const Modal = ({ video, closeModal }) => {
    const {
        image,
        title,
        category,
        videoLink,
        clearInputs,
        description,
        updateVideoInfo,
        handleInputChange
    } = useContext(GlobalContext);

    useEffect(() => {
        const getInitialValue = () => {
            if (video) {
                handleInputChange("título", video.titulo || "");
                handleInputChange("categoría", video.categoria || "");
                handleInputChange("imagen", video.linkImagenVideo || "");
                handleInputChange("video", video.linkVideo || "");
                handleInputChange("descripción", video.description || "");
            }
        };

        getInitialValue();
    }, [video]);

    const manejaSubmit = (e) => {
        const id = video.id;
        const info = { title, image, category, videoLink, description, id };

        updateVideoInfo(info);
        closeModal();
    }

    return <>
        { video && <>
            <Overlay />
            <DialogoS open={!!video}>
                <FormS method='dialog' onSubmit={manejaSubmit}>
                    <BtnClose type='button' onClick={closeModal}>
                        <img src={GrClose} alt='Cerrar' />
                    </BtnClose>
                <TituloS>Editar Card:</TituloS>

                <FormInput
                    inputValue={title}
                    placeholder='Título del video'
                    from='modal'
                    minlength='3'
                    title="Debe tener por lo menos 3 caracteres"
                    name='titulo' > Título </FormInput>
                <OptionInput 
                    inputValue={category}
                    placeholder='Seleccione una categoría'
                    from='modal'
                    name='categoria'> Categoría </OptionInput>
                <FormInput
                    inputValue={image}
                    placeholder='ruta o enlace de la imagen'
                    type='url'
                    from='modal'
                    pattern="^https:\/\/i\.ytimg\.com\/vi\/.*$"
                    title='Ponga una url válida de Youtube' 
                    name='imagen' > Imagen </FormInput>
                <FormInput 
                    inputValue={videoLink}
                    placeholder="Enlace del video"
                    type='url'
                    from='modal'
                    pattern="^https:\/\/www\.youtube\.com\/watch\?v=.*$"
                    title="Dame una url válida de Youtube"
                    name='video'>Video</FormInput>
                <FormInput 
                    inputValue={description}
                    placeholder="¿Y este video de qué trata?"
                    big
                    from='modal'
                    minlength='3'
                    maxlength='6000'
                    name='descripcion'>Descripción</FormInput>
                <BtnContenedor>
                    <ActionBtn type='submit' main>
                        Guardar
                    </ActionBtn>
                    <ActionBtn action={clearInputs} type='button'>
                        Limpiar
                    </ActionBtn>
                </BtnContenedor>
                </FormS>
            </DialogoS>
        </>
        }
    </>
};

export default Modal;


