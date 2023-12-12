/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
/* eslint-disable jsx-a11y/alt-text */
import style from "./Class.module.css";
import Top from "../../img/top.jpeg";
import { IoMdStar } from "react-icons/io";
import { IoIosStarOutline } from "react-icons/io";
import { useState } from "react";
import { IoClose } from "react-icons/io5";
import { IoTrashBin } from "react-icons/io5";
import { HiOutlinePencilAlt } from "react-icons/hi";
import { RiSendPlaneFill } from "react-icons/ri";
import { TextArea } from "../TextArea/TextArea";

export function NovoComentario() {
  const [avaliacaoVisivel, setAvaliacaoVisivel] = useState(false);

  const [selectedStar, setSelectedStar] = useState(0);

  const [comentarios, setComentarios] = useState([
    { id: 1, nome: "Anonimo", texto: "Adorei", estrelas: 5 },
    { id: 2, nome: "Anonimo", texto: "Adorei", estrelas: 5 },
    { id: 3, nome: "Anonimo", texto: "Adorei", estrelas: 5 },
  ]);

  const updateComentario = (id, novoTexto, novasEstrelas) => {
    setComentarios((prevComentarios) =>
      prevComentarios.map((comentario) =>
        comentario.id === id
          ? { ...comentario, texto: novoTexto, estrelas: novasEstrelas }
          : comentario
      )
    );
  };

  const handleEditarComentario = (id, novoTexto, novasEstrelas) => {
    // Chame a função para atualizar o comentário
    updateComentario(id, novoTexto, novasEstrelas);
    // ...outras ações necessárias após editar o comentário
  };


  const handleClickStar = (starValue) => {
    // Se a estrela clicada for a mesma que já está selecionada, desselecione-a
    if (selectedStar === starValue) {
      setSelectedStar(0);
    } else {
      setSelectedStar(starValue);
    }
  };

  const renderSelectedStar = (starValue) => {
    return selectedStar >= starValue ? <IoMdStar /> : <IoIosStarOutline />;
  };


  return (
    <>
      <div className={style.Container}>
        <h1>Comentários</h1>
        <div className={style.Comentar}>

          <div className={style.div1}>
            <img src={Top}></img>
            <div className={style.icon}>
              <h4>{<IoMdStar />}</h4>
              <h4>{<IoMdStar />}</h4>
              <h4>{<IoMdStar />}</h4>
              <h4>{<IoMdStar />}</h4>
              <h4>{<IoMdStar />}</h4>
            </div>


            <TextArea value="Anonimo: Adorei " className={style.input} />
          </div>

          <div className={style.div1}>
            <img src={Top}></img>
            <div className={style.icon}>
              <h4>{<IoMdStar />}</h4>
              <h4>{<IoMdStar />}</h4>
              <h4>{<IoMdStar />}</h4>
              <h4>{<IoMdStar />}</h4>
              <h4>{<IoMdStar />}</h4>
            </div>
            <TextArea value="Anonimo: Adorei" className={style.input} />

          </div>

          <div className={style.div1}>
            <img src={Top}></img>
            <div className={style.icon}>
              <h4>{<IoMdStar />}</h4>
              <h4>{<IoMdStar />}</h4>
              <h4>{<IoMdStar />}</h4>
              <h4>{<IoMdStar />}</h4>
              <h4>{<IoMdStar />}</h4>
            </div>
            <TextArea value="Anonimo: Adorei" className={style.input} />
          </div>

          <div className={style.Avaliar}>
            <button onClick={() => setAvaliacaoVisivel(true)}>Avaliar Produto</button>
          </div>

          {avaliacaoVisivel &&
            <>
              <div className={style.div2}>
                <img src={Top}></img>
                <div className={style.icon}>
                  {[1, 2, 3, 4, 5].map((starValue) => (
                    <div key={starValue} onClick={() => handleClickStar(starValue)}>
                      {renderSelectedStar(starValue)}
                    </div>
                  ))}
                  <icon className={style.Editar}><HiOutlinePencilAlt /></icon>
                  <icon className={style.Lixeira}><IoTrashBin /></icon>
                  <icon className={style.Enviar}><RiSendPlaneFill /></icon>
                  <icon onClick={() => setAvaliacaoVisivel(false)} className={style.X}><IoClose /></icon>

                </div>
                <div className={style.input}>
                  <textarea onSubmit={handleSubmit} name="" id="" cols="30" rows="10"></textarea>
                </div>
              </div>
            </>}

        </div>
      </div>
    </>
  );
}
