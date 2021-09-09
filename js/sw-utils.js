
//Para actualizar el cache Dinamico.
function actualizaCacheDinamico( cacheDynamic, req, res){

    if(res.ok){

        return caches.open(cacheDynamic).then( cache => {

            cache.put( req, res.clone() );

            return res.clone();

        });

    }
    else{
        return res;
    }

}