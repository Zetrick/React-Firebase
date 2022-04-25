import RecipeList from '../../components/RecipeList';
import { useFetch } from '../../hooks/useFetch';

export default function Home() {

const { data, isPending, error } = useFetch("http://localhost:3000/recipes");

  return (
    <div>
      {error && <p className='text-red-500 font-bold m-20'>{error}</p>}
      {isPending && <p className='text-violet-500 animate-pulse m-20'>Loading...</p>}
      {data && <RecipeList recipes={data} />}
    </div>
  )
}
