
export default async function RAWG( param:string, pageNum:number )  {
    const url = 'https://api.rawg.io/api'; // api url
    const search = `/${ param }?`; // what data to grab
    const key = 'key=' + process.env.RAWG_API_KEY; // RAWG API KEY ( create and .env file at the root of the project with your own key )
    const page = `&page=${ pageNum }`; // which page to target
    const page_size = '&page_size=20'; // how many items to show on ea. page

    async function fetchData() {
        const data = await fetch( url + search + key + page + page_size )
        .then( response => response.json() )
        .then( data => {
            return data.results;
        } )
        .catch( error => {
            throw( 'ERROR: RAWG failed to fetch: ' + error );
        } );

        return data;
    }

    console.warn( 'data loaded:' );
    console.warn( await fetchData() );
    return await fetchData();
}