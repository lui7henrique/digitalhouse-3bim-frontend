import { useCallback, useMemo } from "react";
import "./styles.css";

type BlogItem = {
  title: string;
  image: string;
};

export const Blog = () => {
  const BlogItem = useCallback(({ title, image }: BlogItem) => {
    return (
      <li className="blog-item">
        <div className="blog-item-img-wrapper">
          <img src={image} alt={title} className="blog-item-img" />
        </div>
        <h2 className="blog-item-title">{title}</h2>
      </li>
    );
  }, []);

  const blogItems: BlogItem[] = useMemo(
    () => [
      {
        title: "Mapas com React usando Leaflet",
        image:
          "https://blog.rocketseat.com.br/content/images/size/w600/2020/11/blog-thumb-utilizando-mapas-no-react-com-leaflet-1.jpg",
      },
      {
        title: "Obtendo o status de progresso do envio de dados com Axios",
        image:
          "https://blog.rocketseat.com.br/content/images/size/w600/2020/10/obtendo-o-status-de-progresso-do-envio-de-dados-com-axios.png",
      },
      {
        title: "Axios - um cliente HTTP Full Stack",
        image:
          "https://blog.rocketseat.com.br/content/images/size/w600/2020/09/axios-um-cliente-http-full-stack-rocketseat.png",
      },
      {
        title:
          "Next.JS - Novidades na versão 10 e atualização do blog para melhorar a performance",
        image:
          "https://blog.rocketseat.com.br/content/images/size/w600/2020/11/capa_visao-geral-sobre-next-js-na-versao-10-e-atualizacao-do-blog-para-melhorar-a-performance.jpg",
      },
      {
        title:
          "Dark Mode com CSS — mudando a aparência do Blog de maneira simples e rápida",
        image:
          "https://blog.rocketseat.com.br/content/images/size/w600/2020/10/dark-mode-com-css-mudando-a-aparencia-do-blog-de-maneira-simples-e-rapida.jpg",
      },
    ],
    []
  );

  return (
    <section className="blog">
      <h2>Blog</h2>
      <ul className="blog-items">
        {[...blogItems, ...blogItems].map((item) => {
          return <BlogItem {...item} />;
        })}
      </ul>
    </section>
  );
};
