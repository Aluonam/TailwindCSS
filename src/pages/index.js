import Form from "@/components/Form";
import Grid from "@/components/Grid";


export default function Home() {
  return (
    <main
    className={`flex min-h-screen flex-col bg-blue-100 items-center justify-between p-24`}>
      {/* <div className="flex max-w-sm mx-auto my-0 p-6  rounded-lg bg-blue shadow-xl">
       hey ho
        </div>
{/* EJEMPLO BOX */}
    {/*<div className={`flex space-y-4 flex-col `}>
      {/* Paleta de colores: https://tailwindcss.com/docs/customizing-colors */}
      {/* <div className={`bg-lime-800 p-4 rounded-lg w-80`}>Reason number 1</div>
      <div className={`bg-lime-600 p-4 rounded-lg`}>Reason number 2</div>
      <div className={`bg-lime-400 p-4 rounded-lg`}>Reason number 3</div>
      <div className={`bg-lime-200 p-4 rounded-lg`}>Reason number 3</div>
    </div> */} 

<Grid></Grid>
<Form></Form>


      
    </main>
  );
}

