import { useRouter } from "next/router";
import Link from 'next/link'
import styles from '../../styles/Home.module.css'

//SSGの場合
export async function getStaticProps({params}) {
  const req = await fetch(`http://localhost:3000/${params.id}.json`)
  const data = await req.json();

  return {
    porps: {
      product: data,
    }
  }
}

export async function getStaticPaths() {
  const req = await fetch(`http://localhost:3000/products.json`)
  const data = await req.json();
  
  const paths = data.map((product) => {
    return {
      params: {
        id: product,
      }
    }
  });

  return {
    paths,
      fallback: false, //パス以外は404になる
  }
}

const Product = ({ product }) => {
  const router = useRouter();
  const {id} = router.query;
  // const id = router.query.id;
  return (
    <div className={styles.conteinr}>
    <main className={styles.main}>
      <h1>{id} Page</h1>
      <img src={product.image} width="300" height="500"/>
      <p>{product.name}</p>
      <br/>
      <Link href="/products">
        <a>Back</a>
      </Link>
    </main>
  </div>
  );
}

export default Product;
