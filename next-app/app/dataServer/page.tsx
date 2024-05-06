
const Home=({data}: any) => (
    <div>
        <h1>Server-side</h1>
        <ul>
            {data.map((item:any) => (
                <li key={item.id}> {item.name} </li>
            ))}
        </ul>
    </div>
);

export const getServerSideProps = async() => {
    try {
              const response = await fetch("");
              const data = await response.json();
              return {props: {data}};
            } catch(error){
              console.error('Error fetching data:', error);
              return {props: {data: []}}
            }
    }

