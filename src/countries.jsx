function Countries () {
    return <>Countires</>;
    {

        export default Countries;

const CountryCard =()=>
{
    return
    {
        <div style={{
         display :'flex',
         flexDirection :"column",
         border:"1px solid black",
         borderRadius""5 px",
         margin:'10 px',
         justifyContent:"center";
         alignitems:"center";
         border:"1px solid black",
         borderRadius:"5px",
         margin:'10px'

        }}>
       <img src={"https://flag"}

    

    };
};


function Countries()
{

    const API_ENDPOINT="https://xcountries-backend.azurewebsites.net/all";
    const temp=[1,2,3,4,5,6,7,8,9,10,11,12];
    const fetchData=async ()=>{      'fetchData is assigned a value but never used'
    use Effect(()=> {
    const fetchData=async ()=> {
    const data=await fetch(API_ENDPOINT);
    const jsondata=await data.json();
    return jsondata;
    };

fetchData();
    },[]);

    return (-
    
    };

    

{<temp.map{{index)=> {
    <CountryCard key={index} />
}}}


