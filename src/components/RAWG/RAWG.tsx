
export default async function RAWG( param:string, pageNum:number, filter?:string )  {
    if( filter === undefined ) filter = 'games';

    const url = 'https://api.rawg.io/api'; // api url
    const search = `/${filter}?`; // what data to grab
    const key = 'key=' + process.env.RAWG_API_KEY; // RAWG API KEY ( create and .env file at the root of the project with your own key )
    const searchParam = `&search=${ param }`;
    const page = `&page=${ pageNum }`; // which page to target
    const page_size = '&page_size=20'; // how many items to show on ea. page

    async function fetchData() {
        const data = await fetch( url + search + key + searchParam + page + page_size )
        .then( response => response.json() )
        .then( data => {
            return data;
        } )
        .catch( error => {
            throw( 'ERROR: RAWG failed to fetch: ' + error );
        } );

        return data;
    }

    console.warn( 'data loaded:' );
    console.warn( await fetchData() );
    return fetchData();
}