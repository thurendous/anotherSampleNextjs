import { client } from "../../libs/client";
import styles from "../../styles/Home.module.scss";

//SSG
export const getStaticProps = async (context) => {
  const id = context.params.id;
  const data = await client.get({ endpoint: "blog", contentId: id });

  return {
    props: {
      blog: data,
    },
  };
};

// export const getStaticPaths = async () => {
//     const data = await client.get({
//         endpoint: 'blog'
//     })
//     console.log(data.contents)
//     const paths = data.contents.map((content) => `/blog/${content.id}`)
//     console.log(paths)
//     return {
//         paths,
//         fallback: false // 没有设定的页面是404
//     }
// }


export const getStaticPaths = async () => {
    const data = await client.get({ endpoint: "blog" });
  
    const paths = data.contents.map((content) => `/blog/${content.id}`);
    return {
      paths,
      fallback: false,
    };
  };

  export default function BlogId({ blog }) {
    return (
      <main className={styles.main}>
        <h1 className={styles.title}>{blog.title}</h1>
        <p className={styles.publishedAt}>{blog.publishedAt}</p>
        <div
          dangerouslySetInnerHTML={{ __html: `${blog.body}` }}
          className={styles.post}
        ></div>
      </main>
    );
  }
  